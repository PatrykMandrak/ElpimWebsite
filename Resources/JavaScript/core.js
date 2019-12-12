( function( $ ) {

    'use strict';

    if ( typeof wpcf7 === 'undefined' || wpcf7 === null ) {
        return;
    }

    wpcf7 = $.extend( {
        cached: 0,
        inputs: []
    }, wpcf7 );

    $( function() {
        wpcf7.supportHtml5 = ( function() {
            var features = {};
            var input = document.createElement( 'input' );

            features.placeholder = 'placeholder' in input;

            var inputTypes = [ 'email', 'url', 'tel', 'number', 'range', 'date' ];

            $.each( inputTypes, function( index, value ) {
                input.setAttribute( 'type', value );
                features[ value ] = input.type !== 'text';
            } );

            return features;
        } )();

        $( 'div.wpcf7 > form' ).each( function() {
            var $form = $( this );
            wpcf7.initForm( $form );

            if ( wpcf7.cached ) {
                wpcf7.refill( $form );
            }
        } );
    } );

    wpcf7.getId = function( form ) {
        return parseInt( $( 'input[name="_wpcf7"]', form ).val(), 10 );
    };

    wpcf7.initForm = function( form ) {
        var $form = $( form );

        $form.submit( function( event ) {
            if ( typeof window.FormData !== 'function' ) {
                return;
            }

            wpcf7.submit( $form );
            event.preventDefault();
        } );

        $( '.wpcf7-submit', $form ).after( '<span class="ajax-loader"></span>' );

        wpcf7.toggleSubmit( $form );

        $form.on( 'click', '.wpcf7-acceptance', function() {
            wpcf7.toggleSubmit( $form );
        } );

        // Exclusive Checkbox
        $( '.wpcf7-exclusive-checkbox', $form ).on( 'click', 'input:checkbox', function() {
            var name = $( this ).attr( 'name' );
            $form.find( 'input:checkbox[name="' + name + '"]' ).not( this ).prop( 'checked', false );
        } );

        // Free Text Option for Checkboxes and Radio Buttons
        $( '.wpcf7-list-item.has-free-text', $form ).each( function() {
            var $freetext = $( ':input.wpcf7-free-text', this );
            var $wrap = $( this ).closest( '.wpcf7-form-control' );

            if ( $( ':checkbox, :radio', this ).is( ':checked' ) ) {
                $freetext.prop( 'disabled', false );
            } else {
                $freetext.prop( 'disabled', true );
            }

            $wrap.on( 'change', ':checkbox, :radio', function() {
                var $cb = $( '.has-free-text', $wrap ).find( ':checkbox, :radio' );

                if ( $cb.is( ':checked' ) ) {
                    $freetext.prop( 'disabled', false ).focus();
                } else {
                    $freetext.prop( 'disabled', true );
                }
            } );
        } );

        // Placeholder Fallback
        if ( ! wpcf7.supportHtml5.placeholder ) {
            $( '[placeholder]', $form ).each( function() {
                $( this ).val( $( this ).attr( 'placeholder' ) );
                $( this ).addClass( 'placeheld' );

                $( this ).focus( function() {
                    if ( $( this ).hasClass( 'placeheld' ) ) {
                        $( this ).val( '' ).removeClass( 'placeheld' );
                    }
                } );

                $( this ).blur( function() {
                    if ( '' === $( this ).val() ) {
                        $( this ).val( $( this ).attr( 'placeholder' ) );
                        $( this ).addClass( 'placeheld' );
                    }
                } );
            } );
        }

        if ( wpcf7.jqueryUi && ! wpcf7.supportHtml5.date ) {
            $form.find( 'input.wpcf7-date[type="date"]' ).each( function() {
                $( this ).datepicker( {
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date( $( this ).attr( 'min' ) ),
                    maxDate: new Date( $( this ).attr( 'max' ) )
                } );
            } );
        }

        if ( wpcf7.jqueryUi && ! wpcf7.supportHtml5.number ) {
            $form.find( 'input.wpcf7-number[type="number"]' ).each( function() {
                $( this ).spinner( {
                    min: $( this ).attr( 'min' ),
                    max: $( this ).attr( 'max' ),
                    step: $( this ).attr( 'step' )
                } );
            } );
        }

        // Character Count
        $( '.wpcf7-character-count', $form ).each( function() {
            var $count = $( this );
            var name = $count.attr( 'data-target-name' );
            var down = $count.hasClass( 'down' );
            var starting = parseInt( $count.attr( 'data-starting-value' ), 10 );
            var maximum = parseInt( $count.attr( 'data-maximum-value' ), 10 );
            var minimum = parseInt( $count.attr( 'data-minimum-value' ), 10 );

            var updateCount = function( target ) {
                var $target = $( target );
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr( 'data-current-value', count );
                $count.text( count );

                if ( maximum && maximum < length ) {
                    $count.addClass( 'too-long' );
                } else {
                    $count.removeClass( 'too-long' );
                }

                if ( minimum && length < minimum ) {
                    $count.addClass( 'too-short' );
                } else {
                    $count.removeClass( 'too-short' );
                }
            };

            $( ':input[name="' + name + '"]', $form ).each( function() {
                updateCount( this );

                $( this ).keyup( function() {
                    updateCount( this );
                } );
            } );
        } );

        // URL Input Correction
        $form.on( 'change', '.wpcf7-validates-as-url', function() {
            var val = $.trim( $( this ).val() );

            if ( val
                && ! val.match( /^[a-z][a-z0-9.+-]*:/i )
                && -1 !== val.indexOf( '.' ) ) {
                val = val.replace( /^\/+/, '' );
                val = 'http://' + val;
            }

            $( this ).val( val );
        } );
    };

    wpcf7.submit = function( form ) {
        if ( typeof window.FormData !== 'function' ) {
            return;
        }

        var $form = $( form );

        $( '.ajax-loader', $form ).addClass( 'is-active' );

        $( '[placeholder].placeheld', $form ).each( function( i, n ) {
            $( n ).val( '' );
        } );

        wpcf7.clearResponse( $form );

        var formData = new FormData( $form.get( 0 ) );

        var detail = {
            id: $form.closest( 'div.wpcf7' ).attr( 'id' ),
            status: 'init',
            inputs: [],
            formData: formData
        };

        $.each( $form.serializeArray(), function( i, field ) {
            if ( '_wpcf7' == field.name ) {
                detail.contactFormId = field.value;
            } else if ( '_wpcf7_version' == field.name ) {
                detail.pluginVersion = field.value;
            } else if ( '_wpcf7_locale' == field.name ) {
                detail.contactFormLocale = field.value;
            } else if ( '_wpcf7_unit_tag' == field.name ) {
                detail.unitTag = field.value;
            } else if ( '_wpcf7_container_post' == field.name ) {
                detail.containerPostId = field.value;
            } else if ( field.name.match( /^_wpcf7_\w+_free_text_/ ) ) {
                var owner = field.name.replace( /^_wpcf7_\w+_free_text_/, '' );
                detail.inputs.push( {
                    name: owner + '-free-text',
                    value: field.value
                } );
            } else if ( field.name.match( /^_/ ) ) {
                // do nothing
            } else {
                detail.inputs.push( field );
            }
        } );

        wpcf7.triggerEvent( $form.closest( 'div.wpcf7' ), 'beforesubmit', detail );

        var ajaxSuccess = function( data, status, xhr, $form ) {
            detail.id = $( data.into ).attr( 'id' );
            detail.status = data.status;
            detail.apiResponse = data;

            var $message = $( '.wpcf7-response-output', $form );

            switch ( data.status ) {
                case 'validation_failed':
                    $.each( data.invalidFields, function( i, n ) {
                        $( n.into, $form ).each( function() {
                            wpcf7.notValidTip( this, n.message );
                            $( '.wpcf7-form-control', this ).addClass( 'wpcf7-not-valid' );
                            $( '[aria-invalid]', this ).attr( 'aria-invalid', 'true' );
                        } );
                    } );

                    $message.addClass( 'wpcf7-validation-errors' );
                    $form.addClass( 'invalid' );

                    wpcf7.triggerEvent( data.into, 'invalid', detail );
                    break;
                case 'acceptance_missing':
                    $message.addClass( 'wpcf7-acceptance-missing' );
                    $form.addClass( 'unaccepted' );

                    wpcf7.triggerEvent( data.into, 'unaccepted', detail );
                    break;
                case 'spam':
                    $message.addClass( 'wpcf7-spam-blocked' );
                    $form.addClass( 'spam' );

                    $( '[name="g-recaptcha-response"]', $form ).each( function() {
                        if ( '' === $( this ).val() ) {
                            var $recaptcha = $( this ).closest( '.wpcf7-form-control-wrap' );
                            wpcf7.notValidTip( $recaptcha, wpcf7.recaptcha.messages.empty );
                        }
                    } );

                    wpcf7.triggerEvent( data.into, 'spam', detail );
                    break;
                case 'aborted':
                    $message.addClass( 'wpcf7-aborted' );
                    $form.addClass( 'aborted' );

                    wpcf7.triggerEvent( data.into, 'aborted', detail );
                    break;
                case 'mail_sent':
                    $message.addClass( 'wpcf7-mail-sent-ok' );
                    $form.addClass( 'sent' );

                    wpcf7.triggerEvent( data.into, 'mailsent', detail );
                    break;
                case 'mail_failed':
                    $message.addClass( 'wpcf7-mail-sent-ng' );
                    $form.addClass( 'failed' );

                    wpcf7.triggerEvent( data.into, 'mailfailed', detail );
                    break;
                default:
                    var customStatusClass = 'custom-'
                        + data.status.replace( /[^0-9a-z]+/i, '-' );
                    $message.addClass( 'wpcf7-' + customStatusClass );
                    $form.addClass( customStatusClass );
            }

            wpcf7.refill( $form, data );

            wpcf7.triggerEvent( data.into, 'submit', detail );

            if ( 'mail_sent' == data.status ) {
                $form.each( function() {
                    this.reset();
                } );

                wpcf7.toggleSubmit( $form );
            }

            $form.find( '[placeholder].placeheld' ).each( function( i, n ) {
                $( n ).val( $( n ).attr( 'placeholder' ) );
            } );

            $message.html( '' ).append( data.message ).slideDown( 'fast' );
            $message.attr( 'role', 'alert' );

            $( '.screen-reader-response', $form.closest( '.wpcf7' ) ).each( function() {
                var $response = $( this );
                $response.html( '' ).attr( 'role', '' ).append( data.message );

                if ( data.invalidFields ) {
                    var $invalids = $( '<ul></ul>' );

                    $.each( data.invalidFields, function( i, n ) {
                        if ( n.idref ) {
                            var $li = $( '<li></li>' ).append( $( '<a></a>' ).attr( 'href', '#' + n.idref ).append( n.message ) );
                        } else {
                            var $li = $( '<li></li>' ).append( n.message );
                        }

                        $invalids.append( $li );
                    } );

                    $response.append( $invalids );
                }

                $response.attr( 'role', 'alert' ).focus();
            } );
        };

        $.ajax( {
            type: 'POST',
            url: wpcf7.apiSettings.getRoute(
                '/contact-forms/' + wpcf7.getId( $form ) + '/feedback' ),
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        } ).done( function( data, status, xhr ) {
            ajaxSuccess( data, status, xhr, $form );
            $( '.ajax-loader', $form ).removeClass( 'is-active' );
        } ).fail( function( xhr, status, error ) {
            var $e = $( '<div class="ajax-error"></div>' ).text( error.message );
            $form.after( $e );
        } );
    };

    wpcf7.triggerEvent = function( target, name, detail ) {
        var $target = $( target );

        /* DOM event */
        var event = new CustomEvent( 'wpcf7' + name, {
            bubbles: true,
            detail: detail
        } );

        $target.get( 0 ).dispatchEvent( event );

        /* jQuery event */
        $target.trigger( 'wpcf7:' + name, detail );
        $target.trigger( name + '.wpcf7', detail ); // deprecated
    };

    wpcf7.toggleSubmit = function( form, state ) {
        var $form = $( form );
        var $submit = $( 'input:submit', $form );

        if ( typeof state !== 'undefined' ) {
            $submit.prop( 'disabled', ! state );
            return;
        }

        if ( $form.hasClass( 'wpcf7-acceptance-as-validation' ) ) {
            return;
        }

        $submit.prop( 'disabled', false );

        $( '.wpcf7-acceptance', $form ).each( function() {
            var $span = $( this );
            var $input = $( 'input:checkbox', $span );

            if ( ! $span.hasClass( 'optional' ) ) {
                if ( $span.hasClass( 'invert' ) && $input.is( ':checked' )
                    || ! $span.hasClass( 'invert' ) && ! $input.is( ':checked' ) ) {
                    $submit.prop( 'disabled', true );
                    return false;
                }
            }
        } );
    };

    wpcf7.notValidTip = function( target, message ) {
        var $target = $( target );
        $( '.wpcf7-not-valid-tip', $target ).remove();
        $( '<span role="alert" class="wpcf7-not-valid-tip"></span>' )
            .text( message ).appendTo( $target );

        if ( $target.is( '.use-floating-validation-tip *' ) ) {
            var fadeOut = function( target ) {
                $( target ).not( ':hidden' ).animate( {
                    opacity: 0
                }, 'fast', function() {
                    $( this ).css( { 'z-index': -100 } );
                } );
            };

            $target.on( 'mouseover', '.wpcf7-not-valid-tip', function() {
                fadeOut( this );
            } );

            $target.on( 'focus', ':input', function() {
                fadeOut( $( '.wpcf7-not-valid-tip', $target ) );
            } );
        }
    };

    wpcf7.refill = function( form, data ) {
        var $form = $( form );

        var refillCaptcha = function( $form, items ) {
            $.each( items, function( i, n ) {
                $form.find( ':input[name="' + i + '"]' ).val( '' );
                $form.find( 'img.wpcf7-captcha-' + i ).attr( 'src', n );
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec( n );
                $form.find( 'input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]' ).attr( 'value', match[ 1 ] );
            } );
        };

        var refillQuiz = function( $form, items ) {
            $.each( items, function( i, n ) {
                $form.find( ':input[name="' + i + '"]' ).val( '' );
                $form.find( ':input[name="' + i + '"]' ).siblings( 'span.wpcf7-quiz-label' ).text( n[ 0 ] );
                $form.find( 'input:hidden[name="_wpcf7_quiz_answer_' + i + '"]' ).attr( 'value', n[ 1 ] );
            } );
        };

        if ( typeof data === 'undefined' ) {
            $.ajax( {
                type: 'GET',
                url: wpcf7.apiSettings.getRoute(
                    '/contact-forms/' + wpcf7.getId( $form ) + '/refill' ),
                beforeSend: function( xhr ) {
                    var nonce = $form.find( ':input[name="_wpnonce"]' ).val();

                    if ( nonce ) {
                        xhr.setRequestHeader( 'X-WP-Nonce', nonce );
                    }
                },
                dataType: 'json'
            } ).done( function( data, status, xhr ) {
                if ( data.captcha ) {
                    refillCaptcha( $form, data.captcha );
                }

                if ( data.quiz ) {
                    refillQuiz( $form, data.quiz );
                }
            } );

        } else {
            if ( data.captcha ) {
                refillCaptcha( $form, data.captcha );
            }

            if ( data.quiz ) {
                refillQuiz( $form, data.quiz );
            }
        }
    };

    wpcf7.clearResponse = function( form ) {
        var $form = $( form );
        $form.removeClass( 'invalid spam sent failed' );
        $form.siblings( '.screen-reader-response' ).html( '' ).attr( 'role', '' );

        $( '.wpcf7-not-valid-tip', $form ).remove();
        $( '[aria-invalid]', $form ).attr( 'aria-invalid', 'false' );
        $( '.wpcf7-form-control', $form ).removeClass( 'wpcf7-not-valid' );

        $( '.wpcf7-response-output', $form )
            .hide().empty().removeAttr( 'role' )
            .removeClass( 'wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked' );
    };

    wpcf7.apiSettings.getRoute = function( path ) {
        var url = wpcf7.apiSettings.root;

        url = url.replace(
            wpcf7.apiSettings.namespace,
            wpcf7.apiSettings.namespace + path );

        return url;
    };

} )( jQuery );

/*
 * Polyfill for Internet Explorer
 * See https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */
( function () {
    if ( typeof window.CustomEvent === "function" ) return false;

    function CustomEvent ( event, params ) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent( 'CustomEvent' );
        evt.initCustomEvent( event,
            params.bubbles, params.cancelable, params.detail );
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
} )();


"use strict";var BJLL_options=BJLL_options||{},BJLL={_ticking:!1,check:function(){if(!BJLL._ticking){BJLL._ticking=!0,void 0===BJLL.threshold&&(void 0!==BJLL_options.threshold?BJLL.threshold=parseInt(BJLL_options.threshold):BJLL.threshold=200);var e=document.documentElement.clientHeight||body.clientHeight,t=!1,n=document.getElementsByClassName("lazy-hidden");[].forEach.call(n,function(n,a,i){var s=n.getBoundingClientRect();e-s.top+BJLL.threshold>0&&(BJLL.show(n),t=!0)}),BJLL._ticking=!1,t&&BJLL.check()}},show:function(e){e.className=e.className.replace(/(?:^|\s)lazy-hidden(?!\S)/g,""),e.addEventListener("load",function(){e.className+=" lazy-loaded",BJLL.customEvent(e,"lazyloaded")},!1);var t=e.getAttribute("data-lazy-type");if("image"==t)null!=e.getAttribute("data-lazy-srcset")&&e.setAttribute("srcset",e.getAttribute("data-lazy-srcset")),null!=e.getAttribute("data-lazy-sizes")&&e.setAttribute("sizes",e.getAttribute("data-lazy-sizes")),e.setAttribute("src",e.getAttribute("data-lazy-src"));else if("iframe"==t){var n=e.getAttribute("data-lazy-src"),a=document.createElement("div");a.innerHTML=n;var i=a.firstChild;e.parentNode.replaceChild(i,e)}},customEvent:function(e,t){var n;document.createEvent?(n=document.createEvent("HTMLEvents")).initEvent(t,!0,!0):(n=document.createEventObject()).eventType=t,n.eventName=t,document.createEvent?e.dispatchEvent(n):e.fireEvent("on"+n.eventType,n)}};window.addEventListener("load",BJLL.check,!1),window.addEventListener("scroll",BJLL.check,!1),window.addEventListener("resize",BJLL.check,!1),document.getElementsByTagName("body").item(0).addEventListener("post-load",BJLL.check,!1);

// Smooth scrolling
window.smoothScroll = function(target) {
    let navBar = document.getElementById("navBar");
    if(navBar.className === "jsNav active") navBar.className = "jsNav";


    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop === 0);

    var targetY = 0 - 18;
    do { //find the top of target relatively to the container
        if (target === scrollContainer) break;
        targetY += target.offsetTop;
    } while (target === target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    };
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

window.addEventListener("load",function() {
    document.getElementById('mail-form').addEventListener("submit",function(e) {
        e.preventDefault(); // before the code
        let fullName = document.getElementById('name').value;
        let mail = document.getElementById('email').value;
        let text = document.getElementById('text').value;

        console.log(fullName);
        console.log(mail);
        console.log(text);

        Email.send({
            SecureToken : "dc7492ef-00e4-4b05-baaf-cde9e521c4e3",
            To : "automatycznymailelpim@o2.pl", // mail,
            From : "automatycznymailelpim@o2.pl",
            Subject : "Mail od uzytkownika strony elpim.pl",
            Body : fullName + ": " + text
        }).then(
            message => alert(message)
        );

    });
});