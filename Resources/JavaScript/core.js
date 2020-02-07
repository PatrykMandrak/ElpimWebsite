
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

function turnOnLoadingSpinner() {
    let elements = document.getElementsByClassName("ajax-loader");
    for(let i = elements.length - 1; i >= 0; --i)
    {
        elements[i].className = "ajax-loader is-active";
    }
};

function turnOffLoadingSpinner() {
    let elements = document.getElementsByClassName("ajax-loader is-active");
    for(let i = elements.length - 1; i >= 0; --i)
    {
        elements[i].className = "ajax-loader";
    }
};

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

window.addEventListener("load",function() {
    document.getElementById('mail-form').addEventListener("submit",function(e) {
        e.preventDefault(); // before the code
        turnOnLoadingSpinner();
        let checkbox = document.getElementById('checkbox').checked;
        if(checkbox === false) {
            turnOffLoadingSpinner();
            alert("Wymagane potwierdzenie zgody na przetwarzanie danych");
            return;
        }

        let fullName = document.getElementById('name').value;
        let mail = document.getElementById('email').value;
        let text = document.getElementById('text').value;

        if(fullName.length <= 0 || mail.length <= 0 || text.length <= 0) {
            turnOffLoadingSpinner();
            alert("Prosze wypelnic wszystkie pola");
            return;
        }

        if(!validateEmail(mail)) {
            turnOffLoadingSpinner();
            alert("Podano nie prawidlowy email");
            return;
        }

        let body_data = `
            <!doctype html>
            <html><head>
                <meta name="viewport" content="width=device-width">
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <title>Simple Transactional Email</title>
                <style>
            @media only screen and (max-width: 620px) {
              table[class=body] h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important;
              }
            
              table[class=body] p,
            table[class=body] ul,
            table[class=body] ol,
            table[class=body] td,
            table[class=body] span,
            table[class=body] a {
                font-size: 16px !important;
              }
            
              table[class=body] .wrapper,
            table[class=body] .article {
                padding: 10px !important;
              }
            
              table[class=body] .content {
                padding: 0 !important;
              }
            
              table[class=body] .container {
                padding: 0 !important;
                width: 100% !important;
              }
            
              table[class=body] .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
              }
            
              table[class=body] .btn table {
                width: 100% !important;
              }
            
              table[class=body] .btn a {
                width: 100% !important;
              }
            
              table[class=body] .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important;
              }
            }
            @media all {
              .ExternalClass {
                width: 100%;
              }
            
              .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height: 100%;
              }
            
              .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important;
              }
            
              #MessageViewBody a {
                color: inherit;
                text-decoration: none;
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                line-height: inherit;
              }
            
              .btn-primary table td:hover {
                background-color: #34495e !important;
              }
            
              .btn-primary a:hover {
                background-color: #34495e !important;
                border-color: #34495e !important;
              }
            }
            </style>
              </head>
              <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Mail od uzytkownika strony internetowej elpim.pl</span>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
                  <tbody><tr>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
                    <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">
                      <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">
            
                        <!-- START CENTERED WHITE CONTAINER -->
                        <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
            
                          <!-- START MAIN CONTENT AREA -->
                          <tbody><tr>
                            <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                <tbody><tr>
                                  <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Otrzymano nowa wiadomosc ze strony elpim.pl</p>
                                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Uzytkownik strony internetowej elpim.pl wypelnil formularz kontaktowy nastepujacymi informacjami:</p>
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%;" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;" valign="top">
                                            <blockquote cite="https://www.huxley.net/bnw/four.html" style="margin: 0;">
                                                <footer>Podane imie:</footer>
                                                <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px; padding: 15px; background: #eee; border-radius: 5px;">${fullName}</p>
                                                </blockquote><blockquote cite="https://www.huxley.net/bnw/four.html" style="margin: 0;">
                                                <footer>Podany email:</footer>
                                                <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px; padding: 15px; background: #eee; border-radius: 5px;">${mail}</p>
                                                </blockquote><blockquote cite="https://www.huxley.net/bnw/four.html" style="margin: 0;">
                                                <footer>Tresc wiadmosci:</footer>
                                                <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px; padding: 15px; background: #eee; border-radius: 5px;">${text}</p>
                                            </blockquote>
                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                                <tbody>
                                                </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Ta wiadomosc jest tylko przekazaniem informacji podanych przez uzytkownika.</p>
                                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Prosze odpowiadac na podany mail przez wysylajacego.</p>
                                  </td>
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                        <!-- END MAIN CONTENT AREA -->
                        </tbody></table>
                        <!-- END CENTERED WHITE CONTAINER -->
            
                        <!-- START FOOTER -->
                        <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                            <tbody><tr>
                              <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                                Wszystkie informacje podane przez wysylajacego moga byc falszwe
                              </td>
                            </tr>
                            <tr>
                              <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                                Email automatyczny
                              </td>
                            </tr>
                          </tbody></table>
                        </div>
                        <!-- END FOOTER -->
            
                      </div>
                    </td>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
                  </tr>
                </tbody></table>
            </body></html>
        `;
        Email.send({
            SecureToken : "dc7492ef-00e4-4b05-baaf-cde9e521c4e3",
            To : "biuro@elpim.pl", // Replace with elpim company email later,
            From : "automatycznymailelpim@o2.pl",
            Subject : "Mail od uzytkownika strony elpim.pl",
            Body : body_data
        }).then(
            message => {
                turnOffLoadingSpinner();
                if(message === 'OK') {
                    document.getElementById('name').value = "";
                    document.getElementById('email').value = "";
                    document.getElementById('text').value = "";
                    alert("Wiadomosc wyslana!");
                }
                else {
                    alert("Podczas wysylania wiadomosci nastapil blad:\n" + message);
                }
            }
        );

    });
});