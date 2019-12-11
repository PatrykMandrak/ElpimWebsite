!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return t(e)
        }
        : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length
            , n = Z.type(e);
        return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    function r(e, t, n) {
        if (Z.isFunction(t))
            return Z.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return Z.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (ae.test(t))
                return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function(e) {
            return U.call(t, e) >= 0 !== n
        })
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function o(e) {
        var t = de[e] = {};
        return Z.each(e.match(pe) || [], function(e, n) {
            t[n] = !0
        }),
            t
    }
    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1),
            e.removeEventListener("load", s, !1),
            Z.ready()
    }
    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
            this.expando = Z.expando + a.uid++
    }
    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(xe, "-$1").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ye.test(n) ? Z.parseJSON(n) : n)
                } catch (e) {}
                me.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function l() {
        return !0
    }
    function c() {
        return !1
    }
    function f() {
        try {
            return J.activeElement
        } catch (e) {}
    }
    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
    }
    function h(e) {
        var t = Fe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
            e
    }
    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++)
            ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }
    function v(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (o = ve.access(e),
                s = ve.set(t, o),
                l = o.events)) {
                delete s.handle,
                    s.events = {};
                for (i in l)
                    for (n = 0,
                             r = l[i].length; r > n; n++)
                        Z.event.add(t, i, l[i][n])
            }
            me.hasData(e) && (a = me.access(e),
                u = Z.extend({}, a),
                me.set(t, u))
        }
    }
    function m(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }
    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ce.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    function x(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(),
            o
    }
    function b(e) {
        var t = J
            , n = We[e];
        return n || (n = x(e, t),
        "none" !== n && n || (Me = (Me || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
            t = Me[0].contentDocument,
            t.write(),
            t.close(),
            n = x(e, t),
            Me.detach()),
            We[e] = n),
            n
    }
    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || Be(e),
        n && (s = n.getPropertyValue(t) || n[t]),
        n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)),
        Ie.test(s) && $e.test(t) && (r = a.width,
            i = a.minWidth,
            o = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = s,
            s = n.width,
            a.width = r,
            a.minWidth = i,
            a.maxWidth = o)),
            void 0 !== s ? s + "" : s
    }
    function T(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function C(e, t) {
        if (t in e)
            return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ye.length; i--; )
            if ((t = Ye[i] + n)in e)
                return t;
        return r
    }
    function N(e, t, n) {
        var r = ze.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)
            "margin" === n && (s += Z.css(e, n + we[o], !0, i)),
                r ? ("content" === n && (s -= Z.css(e, "padding" + we[o], !0, i)),
                "margin" !== n && (s -= Z.css(e, "border" + we[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + we[o], !0, i),
                "padding" !== n && (s += Z.css(e, "border" + we[o] + "Width", !0, i)));
        return s
    }
    function E(e, t, n) {
        var r = !0
            , i = "width" === t ? e.offsetWidth : e.offsetHeight
            , o = Be(e)
            , s = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = w(e, t, o),
            (0 > i || null == i) && (i = e.style[t]),
                Ie.test(i))
                return i;
            r = s && (Q.boxSizingReliable() || i === e.style[t]),
                i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }
    function S(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)
            r = e[s],
            r.style && (o[s] = ve.get(r, "olddisplay"),
                n = r.style.display,
                t ? (o[s] || "none" !== n || (r.style.display = ""),
                "" === r.style.display && Te(r) && (o[s] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = Te(r),
                "none" === n && i || ve.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (s = 0; a > s; s++)
            r = e[s],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }
    function D(e, t, n, r, i) {
        return new D.prototype.init(e,t,n,r,i)
    }
    function j() {
        return setTimeout(function() {
            Ge = void 0
        }),
            Ge = Z.now()
    }
    function A(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = we[r],
                i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
            i
    }
    function L(e, t, n) {
        for (var r, i = (tt[t] || []).concat(tt["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function q(e, t, n) {
        var r, i, o, s, a, u, l, c = this, f = {}, p = e.style, d = e.nodeType && Te(e), h = ve.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"),
        null == a.unqueued && (a.unqueued = 0,
                u = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || u()
                }
        ),
            a.unqueued++,
            c.always(function() {
                c.always(function() {
                    a.unqueued--,
                    Z.queue(e, "fx").length || a.empty.fire()
                })
            })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
            l = Z.css(e, "display"),
        "inline" === ("none" === l ? ve.get(e, "olddisplay") || b(e.nodeName) : l) && "none" === Z.css(e, "float") && (p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
            c.always(function() {
                p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
            }));
        for (r in t)
            if (i = t[r],
                Je.exec(i)) {
                if (delete t[r],
                    o = o || "toggle" === i,
                i === (d ? "hide" : "show")) {
                    if ("show" !== i || !h || void 0 === h[r])
                        continue;
                    d = !0
                }
                f[r] = h && h[r] || Z.style(e, r)
            } else
                l = void 0;
        if (Z.isEmptyObject(f))
            "inline" === ("none" === l ? b(e.nodeName) : l) && (p.display = l);
        else {
            h ? "hidden"in h && (d = h.hidden) : h = ve.access(e, "fxshow", {}),
            o && (h.hidden = !d),
                d ? Z(e).show() : c.done(function() {
                    Z(e).hide()
                }),
                c.done(function() {
                    var t;
                    ve.remove(e, "fxshow");
                    for (t in f)
                        Z.style(e, t, f[t])
                });
            for (r in f)
                s = L(d ? h[r] : 0, r, c),
                r in h || (h[r] = s.start,
                d && (s.end = s.start,
                    s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function H(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = Z.camelCase(n),
                i = t[r],
                o = e[n],
            Z.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
            n !== r && (e[r] = o,
                delete e[n]),
            (s = Z.cssHooks[r]) && "expand"in s) {
                o = s.expand(o),
                    delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                        t[n] = i)
            } else
                t[r] = i
    }
    function O(e, t, n) {
        var r, i, o = 0, s = et.length, a = Z.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = Ge || j(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++)
                l.tweens[s].run(o);
            return a.notifyWith(e, [l, o, n]),
                1 > o && u ? n : (a.resolveWith(e, [l]),
                    !1)
        }, l = a.promise({
            elem: e,
            props: Z.extend({}, t),
            opts: Z.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ge || j(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                    r
            },
            stop: function(t) {
                var n = 0
                    , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    l.tweens[n].run(1);
                return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]),
                    this
            }
        }), c = l.props;
        for (H(c, l.opts.specialEasing); s > o; o++)
            if (r = et[o].call(l, e, c, l.opts))
                return r;
        return Z.map(c, L, l),
        Z.isFunction(l.opts.start) && l.opts.start.call(e, l),
            Z.fx.timer(Z.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function F(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
                t = "*");
            var r, i = 0, o = t.toLowerCase().match(pe) || [];
            if (Z.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function P(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0,
                Z.each(e[a] || [], function(e, a) {
                    var l = a(t, n, r);
                    return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                        i(l),
                        !1)
                }),
                u
        }
        var o = {}
            , s = e === mt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function R(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r),
            e
    }
    function M(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o),
            n[o]) : void 0
    }
    function W(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters)
                l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                u = o,
                o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (!(s = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if (a = i.split(" "),
                            a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0],
                                    c.unshift(a[1]));
                                break
                            }
                    if (!0 !== s)
                        if (s && e.throws)
                            t = s(t);
                        else
                            try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function $(e, t, n, r) {
        var i;
        if (Z.isArray(t))
            Z.each(t, function(t, i) {
                n || Tt.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== Z.type(t))
            r(e, t);
        else
            for (i in t)
                $(e + "[" + i + "]", t[i], n, r)
    }
    function I(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var B = []
        , _ = B.slice
        , z = B.concat
        , X = B.push
        , U = B.indexOf
        , V = {}
        , Y = V.toString
        , G = V.hasOwnProperty
        , Q = {}
        , J = e.document
        , K = "2.1.3"
        , Z = function(e, t) {
        return new Z.fn.init(e,t)
    }
        , ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , te = /^-ms-/
        , ne = /-([\da-z])/gi
        , re = function(e, t) {
        return t.toUpperCase()
    };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return _.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this,
                t.context = this.context,
                t
        },
        each: function(e, t) {
            return Z.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Z.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(_.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
                , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: B.sort,
        splice: B.splice
    },
        Z.extend = Z.fn.extend = function() {
            var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof s && (l = s,
                s = arguments[a] || {},
                a++),
                 "object" == typeof s || Z.isFunction(s) || (s = {}),
                 a === u && (s = this,
                     a--); u > a; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        n = s[t],
                            r = e[t],
                        s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1,
                            o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {},
                            s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
            return s
        }
        ,
        Z.extend({
            expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === Z.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(e) {
                return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                (e = Z.trim(e)) && (1 === e.indexOf("use strict") ? (t = J.createElement("script"),
                    t.text = e,
                    J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(te, "ms-").replace(ne, re)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, r) {
                var i = 0
                    , o = e.length
                    , s = n(e);
                if (r) {
                    if (s)
                        for (; o > i && !1 !== t.apply(e[i], r); i++)
                            ;
                    else
                        for (i in e)
                            if (!1 === t.apply(e[i], r))
                                break
                } else if (s)
                    for (; o > i && !1 !== t.call(e[i], i, e[i]); i++)
                        ;
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i]))
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ee, "")
            },
            makeArray: function(e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)),
                    r
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : U.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; n > r; r++)
                    e[i++] = t[r];
                return e.length = i,
                    e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, s = !n; o > i; i++)
                    !t(e[i], i) !== s && r.push(e[i]);
                return r
            },
            map: function(e, t, r) {
                var i, o = 0, s = e.length, a = n(e), u = [];
                if (a)
                    for (; s > o; o++)
                        null != (i = t(e[o], o, r)) && u.push(i);
                else
                    for (o in e)
                        null != (i = t(e[o], o, r)) && u.push(i);
                return z.apply([], u)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                return "string" == typeof t && (n = e[t],
                    t = e,
                    e = n),
                    Z.isFunction(e) ? (r = _.call(arguments, 2),
                        i = function() {
                            return e.apply(t || this, r.concat(_.call(arguments)))
                        }
                        ,
                        i.guid = e.guid = e.guid || Z.guid++,
                        i) : void 0
            },
            now: Date.now,
            support: Q
        }),
        Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            V["[object " + t + "]"] = t.toLowerCase()
        });
    var ie = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, l, f, p, d, h, g;
            if ((t ? t.ownerDocument || t : M) !== A && j(t),
                t = t || A,
                n = n || [],
                a = t.nodeType,
            "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a)
                return n;
            if (!r && q) {
                if (11 !== a && (i = ve.exec(e)))
                    if (s = i[1]) {
                        if (9 === a) {
                            if (!(o = t.getElementById(s)) || !o.parentNode)
                                return n;
                            if (o.id === s)
                                return n.push(o),
                                    n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && P(t, o) && o.id === s)
                            return n.push(o),
                                n
                    } else {
                        if (i[2])
                            return Q.apply(n, t.getElementsByTagName(e)),
                                n;
                        if ((s = i[3]) && x.getElementsByClassName)
                            return Q.apply(n, t.getElementsByClassName(s)),
                                n
                    }
                if (x.qsa && (!H || !H.test(e))) {
                    if (d = p = R,
                        h = t,
                        g = 1 !== a && e,
                    1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (f = C(e),
                                 (p = t.getAttribute("id")) ? d = p.replace(ye, "\\$&") : t.setAttribute("id", d),
                                 d = "[id='" + d + "'] ",
                                 l = f.length; l--; )
                            f[l] = d + c(f[l]);
                        h = me.test(e) && u(t.parentNode) || t,
                            g = f.join(",")
                    }
                    if (g)
                        try {
                            return Q.apply(n, h.querySelectorAll(g)),
                                n
                        } catch (e) {} finally {
                            p || t.removeAttribute("id")
                        }
                }
            }
            return k(e.replace(se, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > b.cacheLength && delete e[t.shift()],
                    e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[R] = !0,
                e
        }
        function i(e) {
            var t = A.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--; )
                b.attrHandle[n[r]] = t
        }
        function s(e, t) {
            var n = t && e
                , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function a(e) {
            return r(function(t) {
                return t = +t,
                    r(function(n, r) {
                        for (var i, o = e([], n.length, t), s = o.length; s--; )
                            n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                    })
            })
        }
        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function l() {}
        function c(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function f(e, t, n) {
            var r = t.dir
                , i = n && "parentNode" === r
                , o = $++;
            return t.first ? function(t, n, o) {
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i)
                            return e(t, n, o)
                }
                : function(t, n, s) {
                    var a, u, l = [W, o];
                    if (s) {
                        for (; t = t[r]; )
                            if ((1 === t.nodeType || i) && e(t, n, s))
                                return !0
                    } else
                        for (; t = t[r]; )
                            if (1 === t.nodeType || i) {
                                if (u = t[R] || (t[R] = {}),
                                (a = u[r]) && a[0] === W && a[1] === o)
                                    return l[2] = a[2];
                                if (u[r] = l,
                                    l[2] = e(t, n, s))
                                    return !0
                            }
                }
        }
        function p(e) {
            return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--; )
                        if (!e[i](t, n, r))
                            return !1;
                    return !0
                }
                : e[0]
        }
        function d(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)
                t(e, n[i], r);
            return r
        }
        function h(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)
                (o = e[a]) && (!n || n(o, r, i)) && (s.push(o),
                l && t.push(a));
            return s
        }
        function g(e, t, n, i, o, s) {
            return i && !i[R] && (i = g(i)),
            o && !o[R] && (o = g(o, s)),
                r(function(r, s, a, u) {
                    var l, c, f, p = [], g = [], v = s.length, m = r || d(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? m : h(m, p, e, a, u), x = n ? o || (r ? e : v || i) ? [] : s : y;
                    if (n && n(y, x, a, u),
                        i)
                        for (l = h(x, g),
                                 i(l, [], a, u),
                                 c = l.length; c--; )
                            (f = l[c]) && (x[g[c]] = !(y[g[c]] = f));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (l = [],
                                         c = x.length; c--; )
                                    (f = x[c]) && l.push(y[c] = f);
                                o(null, x = [], l, u)
                            }
                            for (c = x.length; c--; )
                                (f = x[c]) && (l = o ? K(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                        }
                    } else
                        x = h(x === s ? x.splice(v, x.length) : x),
                            o ? o(null, s, x, u) : Q.apply(s, x)
                })
        }
        function v(e) {
            for (var t, n, r, i = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, u = f(function(e) {
                return e === t
            }, s, !0), l = f(function(e) {
                return K(t, e) > -1
            }, s, !0), d = [function(e, n, r) {
                var i = !o && (r || n !== E) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null,
                    i
            }
            ]; i > a; a++)
                if (n = b.relative[e[a].type])
                    d = [f(p(d), n)];
                else {
                    if (n = b.filter[e[a].type].apply(null, e[a].matches),
                        n[R]) {
                        for (r = ++a; i > r && !b.relative[e[r].type]; r++)
                            ;
                        return g(a > 1 && p(d), a > 1 && c(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, r > a && v(e.slice(a, r)), i > r && v(e = e.slice(r)), i > r && c(e))
                    }
                    d.push(n)
                }
            return p(d)
        }
        function m(e, n) {
            var i = n.length > 0
                , o = e.length > 0
                , s = function(r, s, a, u, l) {
                var c, f, p, d = 0, g = "0", v = r && [], m = [], y = E, x = r || o && b.find.TAG("*", l), w = W += null == y ? 1 : Math.random() || .1, T = x.length;
                for (l && (E = s !== A && s); g !== T && null != (c = x[g]); g++) {
                    if (o && c) {
                        for (f = 0; p = e[f++]; )
                            if (p(c, s, a)) {
                                u.push(c);
                                break
                            }
                        l && (W = w)
                    }
                    i && ((c = !p && c) && d--,
                    r && v.push(c))
                }
                if (d += g,
                i && g !== d) {
                    for (f = 0; p = n[f++]; )
                        p(v, m, s, a);
                    if (r) {
                        if (d > 0)
                            for (; g--; )
                                v[g] || m[g] || (m[g] = Y.call(u));
                        m = h(m)
                    }
                    Q.apply(u, m),
                    l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && (W = w,
                    E = y),
                    v
            };
            return i ? r(s) : s
        }
        var y, x, b, w, T, C, N, k, E, S, D, j, A, L, q, H, O, F, P, R = "sizzle" + 1 * new Date, M = e.document, W = 0, $ = 0, I = n(), B = n(), _ = n(), z = function(e, t) {
            return e === t && (D = !0),
                0
        }, X = 1 << 31, U = {}.hasOwnProperty, V = [], Y = V.pop, G = V.push, Q = V.push, J = V.slice, K = function(e, t) {
            for (var n = 0, r = e.length; r > n; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = te.replace("w", "w#"), re = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]", ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", oe = new RegExp(ee + "+","g"), se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$","g"), ae = new RegExp("^" + ee + "*," + ee + "*"), ue = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]","g"), ce = new RegExp(ie), fe = new RegExp("^" + ne + "$"), pe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + re),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)","i"),
            bool: new RegExp("^(?:" + Z + ")$","i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)","i")
        }, de = /^(?:input|select|textarea|button)$/i, he = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, me = /[+~]/, ye = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)","ig"), be = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, we = function() {
            j()
        };
        try {
            Q.apply(V = J.call(M.childNodes), M.childNodes),
                V[M.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: V.length ? function(e, t) {
                        G.apply(e, J.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++]; )
                            ;
                        e.length = n - 1
                    }
            }
        }
        x = t.support = {},
            T = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            j = t.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : M;
                return r !== A && 9 === r.nodeType && r.documentElement ? (A = r,
                    L = r.documentElement,
                    n = r.defaultView,
                n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)),
                    q = !T(r),
                    x.attributes = i(function(e) {
                        return e.className = "i",
                            !e.getAttribute("className")
                    }),
                    x.getElementsByTagName = i(function(e) {
                        return e.appendChild(r.createComment("")),
                            !e.getElementsByTagName("*").length
                    }),
                    x.getElementsByClassName = ge.test(r.getElementsByClassName),
                    x.getById = i(function(e) {
                        return L.appendChild(e).id = R,
                        !r.getElementsByName || !r.getElementsByName(R).length
                    }),
                    x.getById ? (b.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && q) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : []
                            }
                        }
                            ,
                            b.filter.ID = function(e) {
                                var t = e.replace(xe, be);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }
                    ) : (delete b.find.ID,
                            b.filter.ID = function(e) {
                                var t = e.replace(xe, be);
                                return function(e) {
                                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }
                    ),
                    b.find.TAG = x.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                        }
                        : function(e, t) {
                            var n, r = [], i = 0, o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++]; )
                                    1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }
                    ,
                    b.find.CLASS = x.getElementsByClassName && function(e, t) {
                        return q ? t.getElementsByClassName(e) : void 0
                    }
                    ,
                    O = [],
                    H = [],
                (x.qsa = ge.test(r.querySelectorAll)) && (i(function(e) {
                    L.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ee + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || H.push("\\[" + ee + "*(?:value|" + Z + ")"),
                    e.querySelectorAll("[id~=" + R + "-]").length || H.push("~="),
                    e.querySelectorAll(":checked").length || H.push(":checked"),
                    e.querySelectorAll("a#" + R + "+*").length || H.push(".#.+[+~]")
                }),
                    i(function(e) {
                        var t = r.createElement("input");
                        t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && H.push("name" + ee + "*[*^$|!~]?="),
                        e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            H.push(",.*:")
                    })),
                (x.matchesSelector = ge.test(F = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                    x.disconnectedMatch = F.call(e, "div"),
                        F.call(e, "[s!='']:x"),
                        O.push("!=", ie)
                }),
                    H = H.length && new RegExp(H.join("|")),
                    O = O.length && new RegExp(O.join("|")),
                    t = ge.test(L.compareDocumentPosition),
                    P = t || ge.test(L.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e
                                , r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        }
                        : function(e, t) {
                            if (t)
                                for (; t = t.parentNode; )
                                    if (t === e)
                                        return !0;
                            return !1
                        }
                    ,
                    z = t ? function(e, t) {
                            if (e === t)
                                return D = !0,
                                    0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                                1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === M && P(M, e) ? -1 : t === r || t.ownerDocument === M && P(M, t) ? 1 : S ? K(S, e) - K(S, t) : 0 : 4 & n ? -1 : 1)
                        }
                        : function(e, t) {
                            if (e === t)
                                return D = !0,
                                    0;
                            var n, i = 0, o = e.parentNode, a = t.parentNode, u = [e], l = [t];
                            if (!o || !a)
                                return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : S ? K(S, e) - K(S, t) : 0;
                            if (o === a)
                                return s(e, t);
                            for (n = e; n = n.parentNode; )
                                u.unshift(n);
                            for (n = t; n = n.parentNode; )
                                l.unshift(n);
                            for (; u[i] === l[i]; )
                                i++;
                            return i ? s(u[i], l[i]) : u[i] === M ? -1 : l[i] === M ? 1 : 0
                        }
                    ,
                    r) : A
            }
            ,
            t.matches = function(e, n) {
                return t(e, null, null, n)
            }
            ,
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== A && j(e),
                    n = n.replace(le, "='$1']"),
                    !(!x.matchesSelector || !q || O && O.test(n) || H && H.test(n)))
                    try {
                        var r = F.call(e, n);
                        if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return r
                    } catch (e) {}
                return t(n, A, null, [e]).length > 0
            }
            ,
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== A && j(e),
                    P(e, t)
            }
            ,
            t.attr = function(e, t) {
                (e.ownerDocument || e) !== A && j(e);
                var n = b.attrHandle[t.toLowerCase()]
                    , r = n && U.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
                return void 0 !== r ? r : x.attributes || !q ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            t.uniqueSort = function(e) {
                var t, n = [], r = 0, i = 0;
                if (D = !x.detectDuplicates,
                    S = !x.sortStable && e.slice(0),
                    e.sort(z),
                    D) {
                    for (; t = e[i++]; )
                        t === e[i] && (r = n.push(i));
                    for (; r--; )
                        e.splice(n[r], 1)
                }
                return S = null,
                    e
            }
            ,
            w = t.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += w(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    for (; t = e[r++]; )
                        n += w(t);
                return n
            }
            ,
            b = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xe, be),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                            e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(xe, be).toLowerCase();
                        return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                    },
                    CLASS: function(e) {
                        var t = I[e + " "];
                        return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && I(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : !n || (o += "",
                                "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(oe, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3)
                            , s = "last" !== e.slice(-4)
                            , a = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            }
                            : function(t, n, u) {
                                var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling", v = t.parentNode, m = a && t.nodeName.toLowerCase(), y = !u && !a;
                                if (v) {
                                    if (o) {
                                        for (; g; ) {
                                            for (f = t; f = f[g]; )
                                                if (a ? f.nodeName.toLowerCase() === m : 1 === f.nodeType)
                                                    return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [s ? v.firstChild : v.lastChild],
                                    s && y) {
                                        for (c = v[R] || (v[R] = {}),
                                                 l = c[e] || [],
                                                 d = l[0] === W && l[1],
                                                 p = l[0] === W && l[2],
                                                 f = d && v.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop(); )
                                            if (1 === f.nodeType && ++p && f === t) {
                                                c[e] = [W, d, p];
                                                break
                                            }
                                    } else if (y && (l = (t[R] || (t[R] = {}))[e]) && l[0] === W)
                                        p = l[1];
                                    else
                                        for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++p || (y && ((f[R] || (f[R] = {}))[e] = [W, p]),
                                        f !== t)); )
                                            ;
                                    return (p -= i) === r || p % r == 0 && p / r >= 0
                                }
                            }
                    },
                    PSEUDO: function(e, n) {
                        var i, o = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[R] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                                b.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                    for (var r, i = o(e, n), s = i.length; s--; )
                                        r = K(e, i[s]),
                                            e[r] = !(t[r] = i[s])
                                }) : function(e) {
                                    return o(e, 0, i)
                                }
                        ) : o
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = []
                            , n = []
                            , i = N(e.replace(se, "$1"));
                        return i[R] ? r(function(e, t, n, r) {
                            for (var o, s = i(e, null, r, []), a = e.length; a--; )
                                (o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, r, o) {
                            return t[0] = e,
                                i(t, null, o, n),
                                t[0] = null,
                                !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return e = e.replace(xe, be),
                            function(t) {
                                return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                            }
                    }),
                    lang: r(function(e) {
                        return fe.test(e || "") || t.error("unsupported lang: " + e),
                            e = e.replace(xe, be).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === L
                    },
                    focus: function(e) {
                        return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return he.test(e.nodeName)
                    },
                    input: function(e) {
                        return de.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: a(function() {
                        return [0]
                    }),
                    last: a(function(e, t) {
                        return [t - 1]
                    }),
                    eq: a(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: a(function(e, t) {
                        for (var n = 0; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: a(function(e, t) {
                        for (var n = 1; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: a(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0; )
                            e.push(r);
                        return e
                    }),
                    gt: a(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    })
                }
            },
            b.pseudos.nth = b.pseudos.eq;
        for (y in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[y] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(y);
        for (y in {
            submit: !0,
            reset: !0
        })
            b.pseudos[y] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(y);
        return l.prototype = b.filters = b.pseudos,
            b.setFilters = new l,
            C = t.tokenize = function(e, n) {
                var r, i, o, s, a, u, l, c = B[e + " "];
                if (c)
                    return n ? 0 : c.slice(0);
                for (a = e,
                         u = [],
                         l = b.preFilter; a; ) {
                    (!r || (i = ae.exec(a))) && (i && (a = a.slice(i[0].length) || a),
                        u.push(o = [])),
                        r = !1,
                    (i = ue.exec(a)) && (r = i.shift(),
                        o.push({
                            value: r,
                            type: i[0].replace(se, " ")
                        }),
                        a = a.slice(r.length));
                    for (s in b.filter)
                        !(i = pe[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(),
                            o.push({
                                value: r,
                                type: s,
                                matches: i
                            }),
                            a = a.slice(r.length));
                    if (!r)
                        break
                }
                return n ? a.length : a ? t.error(e) : B(e, u).slice(0)
            }
            ,
            N = t.compile = function(e, t) {
                var n, r = [], i = [], o = _[e + " "];
                if (!o) {
                    for (t || (t = C(e)),
                             n = t.length; n--; )
                        o = v(t[n]),
                            o[R] ? r.push(o) : i.push(o);
                    o = _(e, m(i, r)),
                        o.selector = e
                }
                return o
            }
            ,
            k = t.select = function(e, t, n, r) {
                var i, o, s, a, l, f = "function" == typeof e && e, p = !r && C(e = f.selector || e);
                if (n = n || [],
                1 === p.length) {
                    if (o = p[0] = p[0].slice(0),
                    o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === t.nodeType && q && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(s.matches[0].replace(xe, be), t) || [])[0]))
                            return n;
                        f && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                    }
                    for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                        !b.relative[a = s.type]); )
                        if ((l = b.find[a]) && (r = l(s.matches[0].replace(xe, be), me.test(o[0].type) && u(t.parentNode) || t))) {
                            if (o.splice(i, 1),
                                !(e = r.length && c(o)))
                                return Q.apply(n, r),
                                    n;
                            break
                        }
                }
                return (f || N(e, p))(r, t, !q, n, me.test(e) && u(t.parentNode) || t),
                    n
            }
            ,
            x.sortStable = R.split("").sort(z).join("") === R,
            x.detectDuplicates = !!D,
            j(),
            x.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(A.createElement("div"))
            }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        x.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
            t
    }(e);
    Z.find = ie,
        Z.expr = ie.selectors,
        Z.expr[":"] = Z.expr.pseudos,
        Z.unique = ie.uniqueSort,
        Z.text = ie.getText,
        Z.isXMLDoc = ie.isXML,
        Z.contains = ie.contains;
    var oe = Z.expr.match.needsContext
        , se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
        , ae = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
                return 1 === e.nodeType
            }))
    }
        ,
        Z.fn.extend({
            find: function(e) {
                var t, n = this.length, r = [], i = this;
                if ("string" != typeof e)
                    return this.pushStack(Z(e).filter(function() {
                        for (t = 0; n > t; t++)
                            if (Z.contains(i[t], this))
                                return !0
                    }));
                for (t = 0; n > t; t++)
                    Z.find(e, i[t], r);
                return r = this.pushStack(n > 1 ? Z.unique(r) : r),
                    r.selector = this.selector ? this.selector + " " + e : e,
                    r
            },
            filter: function(e) {
                return this.pushStack(r(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(r(this, e || [], !0))
            },
            is: function(e) {
                return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
            }
        });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (Z.fn.init = function(e, t) {
            var n, r;
            if (!e)
                return this;
            if ("string" == typeof e) {
                if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e)) || !n[1] && t)
                    return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t,
                        Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)),
                    se.test(n[1]) && Z.isPlainObject(t))
                        for (n in t)
                            Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = J.getElementById(n[2]),
                r && r.parentNode && (this.length = 1,
                    this[0] = r),
                    this.context = J,
                    this.selector = e,
                    this
            }
            return e.nodeType ? (this.context = this[0] = e,
                this.length = 1,
                this) : Z.isFunction(e) ? void 0 !== ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector,
                this.context = e.context),
                Z.makeArray(e, this))
        }
    ).prototype = Z.fn,
        ue = Z(J);
    var ce = /^(?:parents|prev(?:Until|All))/
        , fe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    Z.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && Z(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
        Z.fn.extend({
            has: function(e) {
                var t = Z(e, this)
                    , n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (Z.contains(this, t[e]))
                            return !0
                })
            },
            closest: function(e, t) {
                for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? Z.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        Z.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return Z.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Z.dir(e, "parentNode", n)
            },
            next: function(e) {
                return i(e, "nextSibling")
            },
            prev: function(e) {
                return i(e, "previousSibling")
            },
            nextAll: function(e) {
                return Z.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return Z.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Z.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Z.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Z.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Z.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || Z.merge([], e.childNodes)
            }
        }, function(e, t) {
            Z.fn[e] = function(n, r) {
                var i = Z.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = Z.filter(r, i)),
                this.length > 1 && (fe[e] || Z.unique(i),
                ce.test(e) && i.reverse()),
                    this.pushStack(i)
            }
        });
    var pe = /\S+/g
        , de = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? de[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, s, a, u = [], l = !e.once && [], c = function(o) {
            for (t = e.memory && o,
                     n = !0,
                     a = i || 0,
                     i = 0,
                     s = u.length,
                     r = !0; u && s > a; a++)
                if (!1 === u[a].apply(o[0], o[1]) && e.stopOnFalse) {
                    t = !1;
                    break
                }
            r = !1,
            u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
        }, f = {
            add: function() {
                if (u) {
                    var n = u.length;
                    !function t(n) {
                        Z.each(n, function(n, r) {
                            var i = Z.type(r);
                            "function" === i ? e.unique && f.has(r) || u.push(r) : r && r.length && "string" !== i && t(r)
                        })
                    }(arguments),
                        r ? s = u.length : t && (i = n,
                            c(t))
                }
                return this
            },
            remove: function() {
                return u && Z.each(arguments, function(e, t) {
                    for (var n; (n = Z.inArray(t, u, n)) > -1; )
                        u.splice(n, 1),
                        r && (s >= n && s--,
                        a >= n && a--)
                }),
                    this
            },
            has: function(e) {
                return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                    s = 0,
                    this
            },
            disable: function() {
                return u = l = t = void 0,
                    this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return l = void 0,
                t || f.disable(),
                    this
            },
            locked: function() {
                return !l
            },
            fireWith: function(e, t) {
                return !u || n && !l || (t = t || [],
                    t = [e, t.slice ? t.slice() : t],
                    r ? l.push(t) : c(t)),
                    this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!n
            }
        };
        return f
    }
        ,
        Z.extend({
            Deferred: function(e) {
                var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]]
                    , n = "pending"
                    , r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments),
                            this
                    },
                    then: function() {
                        var e = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(t, function(t, o) {
                                var s = Z.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }),
                                e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Z.extend(e, r) : r
                    }
                }
                    , i = {};
                return r.pipe = r.then,
                    Z.each(t, function(e, o) {
                        var s = o[2]
                            , a = o[3];
                        r[o[1]] = s.add,
                        a && s.add(function() {
                            n = a
                        }, t[1 ^ e][2].disable, t[2][2].lock),
                            i[o[0]] = function() {
                                return i[o[0] + "With"](this === i ? r : this, arguments),
                                    this
                            }
                            ,
                            i[o[0] + "With"] = s.fireWith
                    }),
                    r.promise(i),
                e && e.call(i, i),
                    i
            },
            when: function(e) {
                var t, n, r, i = 0, o = _.call(arguments), s = o.length, a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0, u = 1 === a ? e : Z.Deferred(), l = function(e, n, r) {
                    return function(i) {
                        n[e] = this,
                            r[e] = arguments.length > 1 ? _.call(arguments) : i,
                            r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
                if (s > 1)
                    for (t = new Array(s),
                             n = new Array(s),
                             r = new Array(s); s > i; i++)
                        o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
                return a || u.resolveWith(r, o),
                    u.promise()
            }
        });
    var he;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e),
            this
    }
        ,
        Z.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? Z.readyWait++ : Z.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --Z.readyWait : Z.isReady) || (Z.isReady = !0,
                !0 !== e && --Z.readyWait > 0 || (he.resolveWith(J, [Z]),
                Z.fn.triggerHandler && (Z(J).triggerHandler("ready"),
                    Z(J).off("ready"))))
            }
        }),
        Z.ready.promise = function(t) {
            return he || (he = Z.Deferred(),
                "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1),
                    e.addEventListener("load", s, !1))),
                he.promise(t)
        }
        ,
        Z.ready.promise();
    var ge = Z.access = function(e, t, n, r, i, o, s) {
            var a = 0
                , u = e.length
                , l = null == n;
            if ("object" === Z.type(n)) {
                i = !0;
                for (a in n)
                    Z.access(e, t, a, n[a], !0, o, s)
            } else if (void 0 !== r && (i = !0,
            Z.isFunction(r) || (s = !0),
            l && (s ? (t.call(e, r),
                t = null) : (l = t,
                    t = function(e, t, n) {
                        return l.call(Z(e), n)
                    }
            )),
                t))
                for (; u > a; a++)
                    t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        }
    ;
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
        ,
        a.uid = 1,
        a.accepts = Z.acceptData,
        a.prototype = {
            key: function(e) {
                if (!a.accepts(e))
                    return 0;
                var t = {}
                    , n = e[this.expando];
                if (!n) {
                    n = a.uid++;
                    try {
                        t[this.expando] = {
                            value: n
                        },
                            Object.defineProperties(e, t)
                    } catch (r) {
                        t[this.expando] = n,
                            Z.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}),
                    n
            },
            set: function(e, t, n) {
                var r, i = this.key(e), o = this.cache[i];
                if ("string" == typeof t)
                    o[t] = n;
                else if (Z.isEmptyObject(o))
                    Z.extend(this.cache[i], t);
                else
                    for (r in t)
                        o[r] = t[r];
                return o
            },
            get: function(e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t]
            },
            access: function(e, t, n) {
                var r;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t),
                    void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r, i, o = this.key(e), s = this.cache[o];
                if (void 0 === t)
                    this.cache[o] = {};
                else {
                    Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t),
                        t in s ? r = [t, i] : (r = i,
                            r = r in s ? [r] : r.match(pe) || [])),
                        n = r.length;
                    for (; n--; )
                        delete s[r[n]]
                }
            },
            hasData: function(e) {
                return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
    var ve = new a
        , me = new a
        , ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , xe = /([A-Z])/g;
    Z.extend({
        hasData: function(e) {
            return me.hasData(e) || ve.hasData(e)
        },
        data: function(e, t, n) {
            return me.access(e, t, n)
        },
        removeData: function(e, t) {
            me.remove(e, t)
        },
        _data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function(e, t) {
            ve.remove(e, t)
        }
    }),
        Z.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0], s = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = me.get(o),
                    1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--; )
                            s[n] && (r = s[n].name,
                            0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)),
                                u(o, r, i[r])));
                        ve.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    me.set(this, e)
                }) : ge(this, function(t) {
                    var n, r = Z.camelCase(e);
                    if (o && void 0 === t) {
                        if (void 0 !== (n = me.get(o, e)))
                            return n;
                        if (void 0 !== (n = me.get(o, r)))
                            return n;
                        if (void 0 !== (n = u(o, r, void 0)))
                            return n
                    } else
                        this.each(function() {
                            var n = me.get(this, r);
                            me.set(this, r, t),
                            -1 !== e.indexOf("-") && void 0 !== n && me.set(this, e, t)
                        })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    me.remove(this, e)
                })
            }
        }),
        Z.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue",
                    r = ve.get(e, t),
                n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)),
                r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = Z.queue(e, t)
                    , r = n.length
                    , i = n.shift()
                    , o = Z._queueHooks(e, t)
                    , s = function() {
                    Z.dequeue(e, t)
                };
                "inprogress" === i && (i = n.shift(),
                    r--),
                i && ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(e, s, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ve.get(e, n) || ve.access(e, n, {
                    empty: Z.Callbacks("once memory").add(function() {
                        ve.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        Z.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = Z.queue(this, e, t);
                        Z._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
                    })
            },
            dequeue: function(e) {
                return this.each(function() {
                    Z.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, i = Z.Deferred(), o = this, s = this.length, a = function() {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e,
                    e = void 0),
                         e = e || "fx"; s--; )
                    (n = ve.get(o[s], e + "queueHooks")) && n.empty && (r++,
                        n.empty.add(a));
                return a(),
                    i.promise(t)
            }
        });
    var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , we = ["Top", "Right", "Bottom", "Left"]
        , Te = function(e, t) {
        return e = t || e,
        "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
    }
        , Ce = /^(?:checkbox|radio)$/i;
    !function() {
        var e = J.createDocumentFragment()
            , t = e.appendChild(J.createElement("div"))
            , n = J.createElement("input");
        n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = "<textarea>x</textarea>",
            Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ne = "undefined";
    Q.focusinBubbles = "onfocusin"in e;
    var ke = /^key/
        , Ee = /^(?:mouse|pointer|contextmenu)|click/
        , Se = /^(?:focusinfocus|focusoutblur)$/
        , De = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, v = ve.get(e);
            if (v)
                for (n.handler && (o = n,
                    n = o.handler,
                    i = o.selector),
                     n.guid || (n.guid = Z.guid++),
                     (u = v.events) || (u = v.events = {}),
                     (s = v.handle) || (s = v.handle = function(t) {
                             return typeof Z !== Ne && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                         }
                     ),
                         t = (t || "").match(pe) || [""],
                         l = t.length; l--; )
                    a = De.exec(t[l]) || [],
                        d = g = a[1],
                        h = (a[2] || "").split(".").sort(),
                    d && (f = Z.event.special[d] || {},
                        d = (i ? f.delegateType : f.bindType) || d,
                        f = Z.event.special[d] || {},
                        c = Z.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && Z.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o),
                    (p = u[d]) || (p = u[d] = [],
                        p.delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(d, s, !1)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                        i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        Z.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, v = ve.hasData(e) && ve.get(e);
            if (v && (u = v.events)) {
                for (t = (t || "").match(pe) || [""],
                         l = t.length; l--; )
                    if (a = De.exec(t[l]) || [],
                        d = g = a[1],
                        h = (a[2] || "").split(".").sort(),
                        d) {
                        for (f = Z.event.special[d] || {},
                                 d = (r ? f.delegateType : f.bindType) || d,
                                 p = u[d] || [],
                                 a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                 s = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || Z.removeEvent(e, d, v.handle),
                            delete u[d])
                    } else
                        for (d in u)
                            Z.event.remove(e, d + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete v.handle,
                    ve.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || J], d = G.call(t, "type") ? t.type : t, h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || J,
            3 !== r.nodeType && 8 !== r.nodeType && !Se.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."),
                d = h.shift(),
                h.sort()),
                l = d.indexOf(":") < 0 && "on" + d,
                t = t[Z.expando] ? t : new Z.Event(d,"object" == typeof t && t),
                t.isTrigger = i ? 2 : 3,
                t.namespace = h.join("."),
                t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                t.result = void 0,
            t.target || (t.target = r),
                n = null == n ? [t] : Z.makeArray(n, [t]),
                f = Z.event.special[d] || {},
            i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || d,
                         Se.test(u + d) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s),
                            a = s;
                    a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? u : f.bindType || d,
                        c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"),
                    c && c.apply(s, n),
                    (c = l && s[l]) && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = d,
                i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l],
                a && (r[l] = null),
                    Z.event.triggered = d,
                    r[d](),
                    Z.event.triggered = void 0,
                a && (r[l] = a)),
                    t.result
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, s = [], a = _.call(arguments), u = (ve.get(this, "events") || {})[e.type] || [], l = Z.event.special[e.type] || {};
            if (a[0] = e,
                e.delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (s = Z.event.handlers.call(this, e, u),
                         t = 0; (i = s[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                             n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o,
                            e.data = o.data,
                        void 0 !== (r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (e.result = r) && (e.preventDefault(),
                            e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                    e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (!0 !== u.disabled || "click" !== e.type) {
                        for (r = [],
                                 n = 0; a > n; n++)
                            o = t[n],
                                i = o.selector + " ",
                            void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length),
                            r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
                s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J,
                    r = n.documentElement,
                    i = n.body,
                    e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                    e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
            }
        },
        fix: function(e) {
            if (e[Z.expando])
                return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Ee.test(i) ? this.mouseHooks : ke.test(i) ? this.keyHooks : {}),
                     r = s.props ? this.props.concat(s.props) : this.props,
                     e = new Z.Event(o),
                     t = r.length; t--; )
                n = r[t],
                    e[n] = o[n];
            return e.target || (e.target = J),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
                s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== f() && this.focus ? (this.focus(),
                        !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(),
                        !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(),
                        !1) : void 0
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
        Z.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }
        ,
        Z.Event = function(e, t) {
            return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? l : c) : this.type = e,
            t && Z.extend(this, t),
                this.timeStamp = e && e.timeStamp || Z.now(),
                void (this[Z.expando] = !0)) : new Z.Event(e,t)
        }
        ,
        Z.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = l,
                e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = l,
                e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = l,
                e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        Z.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            Z.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this, i = e.relatedTarget, o = e.handleObj;
                    return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType,
                        n = o.handler.apply(this, arguments),
                        e.type = t),
                        n
                }
            }
        }),
    Q.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                    , i = ve.access(r, t);
                i || r.addEventListener(e, n, !0),
                    ve.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                    , i = ve.access(r, t) - 1;
                i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0),
                    ve.remove(r, t))
            }
        }
    }),
        Z.fn.extend({
            on: function(e, t, n, r, i) {
                var o, s;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t,
                        t = void 0);
                    for (s in e)
                        this.on(s, t, n, e[s], i);
                    return this
                }
                if (null == n && null == r ? (r = t,
                    n = t = void 0) : null == r && ("string" == typeof t ? (r = n,
                    n = void 0) : (r = n,
                    n = t,
                    t = void 0)),
                !1 === r)
                    r = c;
                else if (!r)
                    return this;
                return 1 === i && (o = r,
                    r = function(e) {
                        return Z().off(e),
                            o.apply(this, arguments)
                    }
                    ,
                    r.guid = o.guid || (o.guid = Z.guid++)),
                    this.each(function() {
                        Z.event.add(this, e, r, n, t)
                    })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                        Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return (!1 === t || "function" == typeof t) && (n = t,
                    t = void 0),
                !1 === n && (n = c),
                    this.each(function() {
                        Z.event.remove(this, e, n, t)
                    })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    Z.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? Z.event.trigger(e, t, n, !0) : void 0
            }
        });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
        , Ae = /<([\w:]+)/
        , Le = /<|&#?\w+;/
        , qe = /<(?:script|style|link)/i
        , He = /checked\s*(?:[^=]|=\s*.checked.)/i
        , Oe = /^$|\/(?:java|ecma)script/i
        , Fe = /^true\/(.*)/
        , Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        , Re = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Re.optgroup = Re.option,
        Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead,
        Re.th = Re.td,
        Z.extend({
            clone: function(e, t, n) {
                var r, i, o, s, a = e.cloneNode(!0), u = Z.contains(e.ownerDocument, e);
                if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                    for (s = m(a),
                             o = m(e),
                             r = 0,
                             i = o.length; i > r; r++)
                        y(o[r], s[r]);
                if (t)
                    if (n)
                        for (o = o || m(e),
                                 s = s || m(a),
                                 r = 0,
                                 i = o.length; i > r; r++)
                            v(o[r], s[r]);
                    else
                        v(e, a);
                return s = m(a, "script"),
                s.length > 0 && g(s, !u && m(e, "script")),
                    a
            },
            buildFragment: function(e, t, n, r) {
                for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)
                    if ((i = e[p]) || 0 === i)
                        if ("object" === Z.type(i))
                            Z.merge(f, i.nodeType ? [i] : i);
                        else if (Le.test(i)) {
                            for (o = o || c.appendChild(t.createElement("div")),
                                     s = (Ae.exec(i) || ["", ""])[1].toLowerCase(),
                                     a = Re[s] || Re._default,
                                     o.innerHTML = a[1] + i.replace(je, "<$1></$2>") + a[2],
                                     l = a[0]; l--; )
                                o = o.lastChild;
                            Z.merge(f, o.childNodes),
                                o = c.firstChild,
                                o.textContent = ""
                        } else
                            f.push(t.createTextNode(i));
                for (c.textContent = "",
                         p = 0; i = f[p++]; )
                    if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i),
                        o = m(c.appendChild(i), "script"),
                    u && g(o),
                        n))
                        for (l = 0; i = o[l++]; )
                            Oe.test(i.type || "") && n.push(i);
                return c
            },
            cleanData: function(e) {
                for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                    if (Z.acceptData(n) && (i = n[ve.expando]) && (t = ve.cache[i])) {
                        if (t.events)
                            for (r in t.events)
                                o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                        ve.cache[i] && delete ve.cache[i]
                    }
                    delete me.cache[n[me.expando]]
                }
            }
        }),
        Z.fn.extend({
            text: function(e) {
                return ge(this, function(e) {
                    return void 0 === e ? Z.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        p(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = p(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                    t || 1 !== n.nodeType || Z.cleanData(m(n)),
                    n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(m(n, "script")),
                        n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (Z.cleanData(m(e, !1)),
                        e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return Z.clone(this, e, t)
                    })
            },
            html: function(e) {
                return ge(this, function(e) {
                    var t = this[0] || {}
                        , n = 0
                        , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !qe.test(e) && !Re[(Ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(je, "<$1></$2>");
                        try {
                            for (; r > n; n++)
                                t = this[n] || {},
                                1 === t.nodeType && (Z.cleanData(m(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode,
                        Z.cleanData(m(this)),
                    e && e.replaceChild(t, this)
                }),
                    e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = z.apply([], e);
                var n, r, i, o, s, a, u = 0, l = this.length, c = this, f = l - 1, p = e[0], g = Z.isFunction(p);
                if (g || l > 1 && "string" == typeof p && !Q.checkClone && He.test(p))
                    return this.each(function(n) {
                        var r = c.eq(n);
                        g && (e[0] = p.call(this, n, r.html())),
                            r.domManip(e, t)
                    });
                if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this),
                    r = n.firstChild,
                1 === n.childNodes.length && (n = r),
                    r)) {
                    for (i = Z.map(m(n, "script"), d),
                             o = i.length; l > u; u++)
                        s = n,
                        u !== f && (s = Z.clone(s, !0, !0),
                        o && Z.merge(i, m(s, "script"))),
                            t.call(this[u], s, u);
                    if (o)
                        for (a = i[i.length - 1].ownerDocument,
                                 Z.map(i, h),
                                 u = 0; o > u; u++)
                            s = i[u],
                            Oe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Pe, "")))
                }
                return this
            }
        }),
        Z.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            Z.fn[e] = function(e) {
                for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++)
                    n = s === o ? this : this.clone(!0),
                        Z(i[s])[t](n),
                        X.apply(r, n.get());
                return this.pushStack(r)
            }
        });
    var Me, We = {}, $e = /^margin/, Ie = new RegExp("^(" + be + ")(?!px)[a-z%]+$","i"), Be = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    };
    !function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                s.innerHTML = "",
                i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top,
                r = "4px" === t.width,
                i.removeChild(o)
        }
        var n, r, i = J.documentElement, o = J.createElement("div"), s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
            s.cloneNode(!0).style.backgroundClip = "",
            Q.clearCloneStyle = "content-box" === s.style.backgroundClip,
            o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
            o.appendChild(s),
        e.getComputedStyle && Z.extend(Q, {
            pixelPosition: function() {
                return t(),
                    n
            },
            boxSizingReliable: function() {
                return null == r && t(),
                    r
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    n.style.marginRight = n.style.width = "0",
                    s.style.width = "1px",
                    i.appendChild(o),
                    t = !parseFloat(e.getComputedStyle(n, null).marginRight),
                    i.removeChild(o),
                    s.removeChild(n),
                    t
            }
        }))
    }(),
        Z.swap = function(e, t, n, r) {
            var i, o, s = {};
            for (o in t)
                s[o] = e.style[o],
                    e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)
                e.style[o] = s[o];
            return i
        }
    ;
    var _e = /^(none|table(?!-c[ea]).+)/
        , ze = new RegExp("^(" + be + ")(.*)$","i")
        , Xe = new RegExp("^([+-])=(" + be + ")","i")
        , Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
        , Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }
        , Ye = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Z.camelCase(t), u = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)),
                    s = Z.cssHooks[t] || Z.cssHooks[a],
                    void 0 === n ? s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n,
                    "string" === o && (i = Xe.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)),
                        o = "number"),
                        void (null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"),
                        Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                        s && "set"in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)),
                s = Z.cssHooks[t] || Z.cssHooks[a],
            s && "get"in s && (i = s.get(e, !0, n)),
            void 0 === i && (i = w(e, t, r)),
            "normal" === i && t in Ve && (i = Ve[t]),
                "" === n || n ? (o = parseFloat(i),
                    !0 === n || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }),
        Z.each(["height", "width"], function(e, t) {
            Z.cssHooks[t] = {
                get: function(e, n, r) {
                    return n ? _e.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ue, function() {
                        return E(e, t, r)
                    }) : E(e, t, r) : void 0
                },
                set: function(e, n, r) {
                    var i = r && Be(e);
                    return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }),
        Z.cssHooks.marginRight = T(Q.reliableMarginRight, function(e, t) {
            return t ? Z.swap(e, {
                display: "inline-block"
            }, w, [e, "marginRight"]) : void 0
        }),
        Z.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            Z.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                        i[e + we[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            },
            $e.test(e) || (Z.cssHooks[e + t].set = N)
        }),
        Z.fn.extend({
            css: function(e, t) {
                return ge(this, function(e, t, n) {
                    var r, i, o = {}, s = 0;
                    if (Z.isArray(t)) {
                        for (r = Be(e),
                                 i = t.length; i > s; s++)
                            o[t[s]] = Z.css(e, t[s], !1, r);
                        return o
                    }
                    return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return S(this, !0)
            },
            hide: function() {
                return S(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Te(this) ? Z(this).show() : Z(this).hide()
                })
            }
        }),
        Z.Tween = D,
        D.prototype = {
            constructor: D,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                    this.prop = n,
                    this.easing = i || "swing",
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (Z.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = D.propHooks[this.prop];
                return e && e.get ? e.get(this) : D.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = D.propHooks[this.prop];
                return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                    this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : D.propHooks._default.set(this),
                    this
            }
        },
        D.prototype.init.prototype = D.prototype,
        D.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""),
                        t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        },
        D.propHooks.scrollTop = D.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        Z.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        },
        Z.fx = D.prototype.init,
        Z.fx.step = {};
    var Ge, Qe, Je = /^(?:toggle|show|hide)$/, Ke = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$","i"), Ze = /queueHooks$/, et = [q], tt = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
                , r = n.cur()
                , i = Ke.exec(t)
                , o = i && i[3] || (Z.cssNumber[e] ? "" : "px")
                , s = (Z.cssNumber[e] || "px" !== o && +r) && Ke.exec(Z.css(n.elem, e))
                , a = 1
                , u = 20;
            if (s && s[3] !== o) {
                o = o || s[3],
                    i = i || [],
                    s = +r || 1;
                do {
                    a = a || ".5",
                        s /= a,
                        Z.style(n.elem, e, s + o)
                } while (a !== (a = n.cur() / r) && 1 !== a && --u)
            }
            return i && (s = n.start = +s || +r || 0,
                n.unit = o,
                n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]),
                n
        }
        ]
    };
    Z.Animation = Z.extend(O, {
        tweener: function(e, t) {
            Z.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++)
                n = e[r],
                    tt[n] = tt[n] || [],
                    tt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? et.unshift(e) : et.push(e)
        }
    }),
        Z.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? Z.extend({}, e) : {
                complete: n || !n && t || Z.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Z.isFunction(t) && t
            };
            return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default,
            (null == r.queue || !0 === r.queue) && (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    Z.isFunction(r.old) && r.old.call(this),
                    r.queue && Z.dequeue(this, r.queue)
                }
                ,
                r
        }
        ,
        Z.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Te).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = Z.isEmptyObject(e)
                    , o = Z.speed(t, n, r)
                    , s = function() {
                    var t = O(this, Z.extend({}, e), o);
                    (i || ve.get(this, "finish")) && t.stop(!0)
                };
                return s.finish = s,
                    i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                        t(n)
                };
                return "string" != typeof e && (n = t,
                    t = e,
                    e = void 0),
                t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0
                            , i = null != e && e + "queueHooks"
                            , o = Z.timers
                            , s = ve.get(this);
                        if (i)
                            s[i] && s[i].stop && r(s[i]);
                        else
                            for (i in s)
                                s[i] && s[i].stop && Ze.test(i) && r(s[i]);
                        for (i = o.length; i--; )
                            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                                t = !1,
                                o.splice(i, 1));
                        (t || !n) && Z.dequeue(this, e)
                    })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"),
                    this.each(function() {
                        var t, n = ve.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = Z.timers, s = r ? r.length : 0;
                        for (n.finish = !0,
                                 Z.queue(this, e, []),
                             i && i.stop && i.stop.call(this, !0),
                                 t = o.length; t--; )
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                o.splice(t, 1));
                        for (t = 0; s > t; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
            }
        }),
        Z.each(["toggle", "show", "hide"], function(e, t) {
            var n = Z.fn[t];
            Z.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
            }
        }),
        Z.each({
            slideDown: A("show"),
            slideUp: A("hide"),
            slideToggle: A("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Z.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        Z.timers = [],
        Z.fx.tick = function() {
            var e, t = 0, n = Z.timers;
            for (Ge = Z.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || Z.fx.stop(),
                Ge = void 0
        }
        ,
        Z.fx.timer = function(e) {
            Z.timers.push(e),
                e() ? Z.fx.start() : Z.timers.pop()
        }
        ,
        Z.fx.interval = 13,
        Z.fx.start = function() {
            Qe || (Qe = setInterval(Z.fx.tick, Z.fx.interval))
        }
        ,
        Z.fx.stop = function() {
            clearInterval(Qe),
                Qe = null
        }
        ,
        Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        Z.fn.delay = function(e, t) {
            return e = Z.fx ? Z.fx.speeds[e] || e : e,
                t = t || "fx",
                this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
        }
        ,
        function() {
            var e = J.createElement("input")
                , t = J.createElement("select")
                , n = t.appendChild(J.createElement("option"));
            e.type = "checkbox",
                Q.checkOn = "" !== e.value,
                Q.optSelected = n.selected,
                t.disabled = !0,
                Q.optDisabled = !n.disabled,
                e = J.createElement("input"),
                e.value = "t",
                e.type = "radio",
                Q.radioValue = "t" === e.value
        }();
    var nt, rt = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return ge(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }
    }),
        Z.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o)
                    return typeof e.getAttribute === Ne ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(),
                        r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? nt : void 0)),
                        void 0 === n ? r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t),
                            null == i ? void 0 : i) : null !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                            n) : void Z.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, r, i = 0, o = t && t.match(pe);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++]; )
                        r = Z.propFix[n] || n,
                        Z.expr.match.bool.test(n) && (e[r] = !1),
                            e.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                                t
                        }
                    }
                }
            }
        }),
        nt = {
            set: function(e, t, n) {
                return !1 === t ? Z.removeAttr(e, n) : e.setAttribute(n, n),
                    n
            }
        },
        Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = rt[t] || Z.find.attr;
            rt[t] = function(e, t, r) {
                var i, o;
                return r || (o = rt[t],
                    rt[t] = i,
                    i = null != n(e, t, r) ? t.toLowerCase() : null,
                    rt[t] = o),
                    i
            }
        });
    var it = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return ge(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }
    }),
        Z.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(e, t, n) {
                var r, i, o, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                    return o = 1 !== s || !Z.isXMLDoc(e),
                    o && (t = Z.propFix[t] || t,
                        i = Z.propHooks[t]),
                        void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute("tabindex") || it.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }),
    Q.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
                null
        }
    }),
        Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            Z.propFix[this.toLowerCase()] = this
        });
    var ot = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e))
                return this.each(function(t) {
                    Z(this).addClass(e.call(this, t, this.className))
                });
            if (a)
                for (t = (e || "").match(pe) || []; l > u; u++)
                    if (n = this[u],
                        r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ot, " ") : " ")) {
                        for (o = 0; i = t[o++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = Z.trim(r),
                        n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e))
                return this.each(function(t) {
                    Z(this).removeClass(e.call(this, t, this.className))
                });
            if (a)
                for (t = (e || "").match(pe) || []; l > u; u++)
                    if (n = this[u],
                        r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ot, " ") : "")) {
                        for (o = 0; i = t[o++]; )
                            for (; r.indexOf(" " + i + " ") >= 0; )
                                r = r.replace(" " + i + " ", " ");
                        s = e ? Z.trim(r) : "",
                        n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
                    Z(this).toggleClass(e.call(this, n, this.className, t), t)
                }
                : function() {
                    if ("string" === n)
                        for (var t, r = 0, i = Z(this), o = e.match(pe) || []; t = o[r++]; )
                            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else
                        (n === Ne || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className),
                            this.className = this.className || !1 === e ? "" : ve.get(this, "__className__") || "")
                }
            )
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ot, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    });
    var st = /\r/g;
    Z.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = Z.isFunction(e),
                this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e,
                        null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                    (t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                })) : i ? (t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()],
                t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                    "string" == typeof n ? n.replace(st, "") : null == n ? "" : n)) : void 0
        }
    }),
        Z.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = Z.find.attr(e, "value");
                        return null != t ? t : Z.trim(Z.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                            if (n = r[u],
                                !(!n.selected && u !== i || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                                if (t = Z(n).val(),
                                    o)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--; )
                            r = i[s],
                            (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1),
                            o
                    }
                }
            }
        }),
        Z.each(["radio", "checkbox"], function() {
            Z.valHooks[this] = {
                set: function(e, t) {
                    return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
                }
            },
            Q.checkOn || (Z.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            )
        }),
        Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            Z.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        Z.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
    var at = Z.now()
        , ut = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
        ,
        Z.parseXML = function(e) {
            var t, n;
            if (!e || "string" != typeof e)
                return null;
            try {
                n = new DOMParser,
                    t = n.parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e),
                t
        }
    ;
    var lt = /#.*$/
        , ct = /([?&])_=[^&]*/
        , ft = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
        , dt = /^(?:GET|HEAD)$/
        , ht = /^\/\//
        , gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
        , vt = {}
        , mt = {}
        , yt = "*/".concat("*")
        , xt = e.location.href
        , bt = gt.exec(xt.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt,
            type: "GET",
            isLocal: pt.test(bt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": yt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, Z.ajaxSettings), t) : R(Z.ajaxSettings, e)
        },
        ajaxPrefilter: F(vt),
        ajaxTransport: F(mt),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var u, c, m, y, b, T = t;
                2 !== x && (x = 2,
                a && clearTimeout(a),
                    r = void 0,
                    o = s || "",
                    w.readyState = e > 0 ? 4 : 0,
                    u = e >= 200 && 300 > e || 304 === e,
                n && (y = M(f, w, n)),
                    y = W(f, y, w, u),
                    u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"),
                    b && (Z.lastModified[i] = b),
                    (b = w.getResponseHeader("etag")) && (Z.etag[i] = b)),
                        204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state,
                            c = y.data,
                            m = y.error,
                            u = !m)) : (m = T,
                    (e || !T) && (T = "error",
                    0 > e && (e = 0))),
                    w.status = e,
                    w.statusText = (t || T) + "",
                    u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, m]),
                    w.statusCode(v),
                    v = void 0,
                l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : m]),
                    g.fireWith(p, [w, T]),
                l && (d.trigger("ajaxComplete", [w, f]),
                --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
            var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t), p = f.context || f, d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event, h = Z.Deferred(), g = Z.Callbacks("once memory"), v = f.statusCode || {}, m = {}, y = {}, x = 0, b = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!s)
                            for (s = {}; t = ft.exec(o); )
                                s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? o : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = y[n] = y[n] || e,
                        m[e] = t),
                        this
                },
                overrideMimeType: function(e) {
                    return x || (f.mimeType = e),
                        this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > x)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || b;
                    return r && r.abort(t),
                        n(0, t),
                        this
                }
            };
            if (h.promise(w).complete = g.add,
                w.success = w.done,
                w.error = w.fail,
                f.url = ((e || f.url || xt) + "").replace(lt, "").replace(ht, bt[1] + "//"),
                f.type = t.method || t.type || f.method || f.type,
                f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(pe) || [""],
            null == f.crossDomain && (u = gt.exec(f.url.toLowerCase()),
                f.crossDomain = !(!u || u[1] === bt[1] && u[2] === bt[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (bt[3] || ("http:" === bt[1] ? "80" : "443")))),
            f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)),
                P(vt, f, t, w),
            2 === x)
                return w;
            l = Z.event && f.global,
            l && 0 == Z.active++ && Z.event.trigger("ajaxStart"),
                f.type = f.type.toUpperCase(),
                f.hasContent = !dt.test(f.type),
                i = f.url,
            f.hasContent || (f.data && (i = f.url += (ut.test(i) ? "&" : "?") + f.data,
                delete f.data),
            !1 === f.cache && (f.url = ct.test(i) ? i.replace(ct, "$1_=" + at++) : i + (ut.test(i) ? "&" : "?") + "_=" + at++)),
            f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]),
            Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])),
            (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && w.setRequestHeader("Content-Type", f.contentType),
                w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers)
                w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, w, f) || 2 === x))
                return w.abort();
            b = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[c](f[c]);
            if (r = P(mt, f, t, w)) {
                w.readyState = 1,
                l && d.trigger("ajaxSend", [w, f]),
                f.async && f.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1,
                        r.send(m, n)
                } catch (e) {
                    if (!(2 > x))
                        throw e;
                    n(-1, e)
                }
            } else
                n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }),
        Z.each(["get", "post"], function(e, t) {
            Z[t] = function(e, n, r, i) {
                return Z.isFunction(n) && (i = i || r,
                    r = n,
                    n = void 0),
                    Z.ajax({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    })
            }
        }),
        Z._evalUrl = function(e) {
            return Z.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        Z.fn.extend({
            wrapAll: function(e) {
                var t;
                return Z.isFunction(e) ? this.each(function(t) {
                    Z(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this)
            },
            wrapInner: function(e) {
                return this.each(Z.isFunction(e) ? function(t) {
                        Z(this).wrapInner(e.call(this, t))
                    }
                    : function() {
                        var t = Z(this)
                            , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }
                )
            },
            wrap: function(e) {
                var t = Z.isFunction(e);
                return this.each(function(n) {
                    Z(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        Z.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }
        ,
        Z.expr.filters.visible = function(e) {
            return !Z.expr.filters.hidden(e)
        }
    ;
    var wt = /%20/g
        , Tt = /\[\]$/
        , Ct = /\r?\n/g
        , Nt = /^(?:submit|button|image|reset|file)$/i
        , kt = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = Z.isFunction(t) ? t() : null == t ? "" : t,
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional),
        Z.isArray(e) || e.jquery && !Z.isPlainObject(e))
            Z.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                $(n, e[n], t, i);
        return r.join("&").replace(wt, "+")
    }
        ,
        Z.fn.extend({
            serialize: function() {
                return Z.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = Z.prop(this, "elements");
                    return e ? Z.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !Z(this).is(":disabled") && kt.test(this.nodeName) && !Nt.test(e) && (this.checked || !Ce.test(e))
                }).map(function(e, t) {
                    var n = Z(this).val();
                    return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ct, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Ct, "\r\n")
                    }
                }).get()
            }
        }),
        Z.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (e) {}
        }
    ;
    var Et = 0
        , St = {}
        , Dt = {
        0: 200,
        1223: 204
    }
        , jt = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in St)
            St[e]()
    }),
        Q.cors = !!jt && "withCredentials"in jt,
        Q.ajax = jt = !!jt,
        Z.ajaxTransport(function(e) {
            var t;
            return Q.cors || jt && !e.crossDomain ? {
                send: function(n, r) {
                    var i, o = e.xhr(), s = ++Et;
                    if (o.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                        for (i in e.xhrFields)
                            o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n)
                        o.setRequestHeader(i, n[i]);
                    t = function(e) {
                        return function() {
                            t && (delete St[s],
                                t = o.onload = o.onerror = null,
                                "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Dt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                    text: o.responseText
                                } : void 0, o.getAllResponseHeaders()))
                        }
                    }
                        ,
                        o.onload = t(),
                        o.onerror = t("error"),
                        t = St[s] = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t)
                            throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            } : void 0
        }),
        Z.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return Z.globalEval(e),
                        e
                }
            }
        }),
        Z.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        Z.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(r, i) {
                        t = Z("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                                t.remove(),
                                    n = null,
                                e && i("error" === e.type ? 404 : 200, e.type)
                            }
                        ),
                            J.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
    var At = []
        , Lt = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = At.pop() || Z.expando + "_" + at++;
            return this[e] = !0,
                e
        }
    }),
        Z.ajaxPrefilter("json jsonp", function(t, n, r) {
            var i, o, s, a = !1 !== t.jsonp && (Lt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(t.data) && "data");
            return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                a ? t[a] = t[a].replace(Lt, "$1" + i) : !1 !== t.jsonp && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                t.converters["script json"] = function() {
                    return s || Z.error(i + " was not called"),
                        s[0]
                }
                ,
                t.dataTypes[0] = "json",
                o = e[i],
                e[i] = function() {
                    s = arguments
                }
                ,
                r.always(function() {
                    e[i] = o,
                    t[i] && (t.jsonpCallback = n.jsonpCallback,
                        At.push(i)),
                    s && Z.isFunction(o) && o(s[0]),
                        s = o = void 0
                }),
                "script") : void 0
        }),
        Z.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e)
                return null;
            "boolean" == typeof t && (n = t,
                t = !1),
                t = t || J;
            var r = se.exec(e)
                , i = !n && [];
            return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i),
            i && i.length && Z(i).remove(),
                Z.merge([], r.childNodes))
        }
    ;
    var qt = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && qt)
            return qt.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a >= 0 && (r = Z.trim(e.slice(a)),
            e = e.slice(0, a)),
            Z.isFunction(t) ? (n = t,
                t = void 0) : t && "object" == typeof t && (i = "POST"),
        s.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
                s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }
        ),
            this
    }
        ,
        Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            Z.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        Z.expr.filters.animated = function(e) {
            return Z.grep(Z.timers, function(t) {
                return e === t.elem
            }).length
        }
    ;
    var Ht = e.document.documentElement;
    Z.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = Z.css(e, "position"), f = Z(e), p = {};
            "static" === c && (e.style.position = "relative"),
                a = f.offset(),
                o = Z.css(e, "top"),
                u = Z.css(e, "left"),
                l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
                l ? (r = f.position(),
                    s = r.top,
                    i = r.left) : (s = parseFloat(o) || 0,
                    i = parseFloat(u) || 0),
            Z.isFunction(t) && (t = t.call(e, n, a)),
            null != t.top && (p.top = t.top - a.top + s),
            null != t.left && (p.left = t.left - a.left + i),
                "using"in t ? t.using.call(e, p) : f.css(p)
        }
    },
        Z.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        Z.offset.setOffset(this, e, t)
                    });
                var t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                }, o = r && r.ownerDocument;
                return o ? (t = o.documentElement,
                    Z.contains(t, r) ? (typeof r.getBoundingClientRect !== Ne && (i = r.getBoundingClientRect()),
                        n = I(o),
                        {
                            top: i.top + n.pageYOffset - t.clientTop,
                            left: i.left + n.pageXOffset - t.clientLeft
                        }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0], r = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                    Z.nodeName(e[0], "html") || (r = e.offset()),
                        r.top += Z.css(e[0], "borderTopWidth", !0),
                        r.left += Z.css(e[0], "borderLeftWidth", !0)),
                        {
                            top: t.top - r.top - Z.css(n, "marginTop", !0),
                            left: t.left - r.left - Z.css(n, "marginLeft", !0)
                        }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || Ht; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position"); )
                        e = e.offsetParent;
                    return e || Ht
                })
            }
        }),
        Z.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, n) {
            var r = "pageYOffset" === n;
            Z.fn[t] = function(i) {
                return ge(this, function(t, i, o) {
                    var s = I(t);
                    return void 0 === o ? s ? s[n] : t[i] : void (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
                }, t, i, arguments.length, null)
            }
        }),
        Z.each(["top", "left"], function(e, t) {
            Z.cssHooks[t] = T(Q.pixelPosition, function(e, n) {
                return n ? (n = w(e, t),
                    Ie.test(n) ? Z(e).position()[t] + "px" : n) : void 0
            })
        }),
        Z.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            Z.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                Z.fn[r] = function(r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r)
                        , s = n || (!0 === r || !0 === i ? "margin" : "border");
                    return ge(this, function(t, n, r) {
                        var i;
                        return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                            Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
                    }, t, o ? r : void 0, o, null)
                }
            })
        }),
        Z.fn.size = function() {
            return this.length
        }
        ,
        Z.fn.andSelf = Z.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Ot = e.jQuery
        , Ft = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Ft),
        t && e.jQuery === Z && (e.jQuery = Ot),
            Z
    }
        ,
    typeof t === Ne && (e.jQuery = e.$ = Z),
        Z
});
!function(t) {
    function e(e, n, i, r) {
        var a = e.text()
            , c = a.split(n)
            , s = "";
        c.length && (t(c).each(function(t, e) {
            s += '<span class="' + i + (t + 1) + '" aria-hidden="true">' + e + "</span>" + r
        }),
            e.attr("aria-label", a).empty().append(s))
    }
    var n = {
        init: function() {
            return this.each(function() {
                e(t(this), "", "char", "")
            })
        },
        words: function() {
            return this.each(function() {
                e(t(this), " ", "word", " ")
            })
        },
        lines: function() {
            return this.each(function() {
                var n = "eefec303079ad17405c889e092e105b0";
                e(t(this).children("br").replaceWith(n).end(), n, "line", "")
            })
        }
    };
    t.fn.lettering = function(e) {
        return e && n[e] ? n[e].apply(this, [].slice.call(arguments, 1)) : "letters" !== e && e ? (t.error("Method " + e + " does not exist on jQuery.lettering"),
            this) : n.init.apply(this, [].slice.call(arguments, 0))
    }
}(jQuery);
!function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
                n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                },
                i.extend(n, n.initials),
                n.activeBreakpoint = null,
                n.animType = null,
                n.animProp = null,
                n.breakpoints = [],
                n.breakpointSettings = [],
                n.cssTransitions = !1,
                n.focussed = !1,
                n.interrupted = !1,
                n.hidden = "hidden",
                n.paused = !0,
                n.positionProp = null,
                n.respondTo = null,
                n.rowCount = 1,
                n.shouldClick = !0,
                n.$slider = i(t),
                n.$slidesCache = null,
                n.transformType = null,
                n.transitionType = null,
                n.visibilityChange = "visibilitychange",
                n.windowWidth = 0,
                n.windowTimer = null,
                s = i(t).data("slick") || {},
                n.options = i.extend({}, n.defaults, o, s),
                n.currentSlide = n.options.initialSlide,
                n.originalSettings = n.options,
                void 0 !== document.mozHidden ? (n.hidden = "mozHidden",
                    n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden",
                    n.visibilityChange = "webkitvisibilitychange"),
                n.autoPlay = i.proxy(n.autoPlay, n),
                n.autoPlayClear = i.proxy(n.autoPlayClear, n),
                n.autoPlayIterator = i.proxy(n.autoPlayIterator, n),
                n.changeSlide = i.proxy(n.changeSlide, n),
                n.clickHandler = i.proxy(n.clickHandler, n),
                n.selectHandler = i.proxy(n.selectHandler, n),
                n.setPosition = i.proxy(n.setPosition, n),
                n.swipeHandler = i.proxy(n.swipeHandler, n),
                n.dragHandler = i.proxy(n.dragHandler, n),
                n.keyHandler = i.proxy(n.keyHandler, n),
                n.instanceUid = e++,
                n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                n.registerBreakpoints(),
                n.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
        ,
        e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
            var s = this;
            if ("boolean" == typeof t)
                o = t,
                    t = null;
            else if (t < 0 || t >= s.slideCount)
                return !1;
            s.unload(),
                "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack),
                s.$slides = s.$slideTrack.children(this.options.slide),
                s.$slideTrack.children(this.options.slide).detach(),
                s.$slideTrack.append(s.$slides),
                s.$slides.each(function(e, t) {
                    i(t).attr("data-slick-index", e)
                }),
                s.$slidesCache = s.$slides,
                s.reinit()
        }
        ,
        e.prototype.animateHeight = function() {
            var i = this;
            if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({
                    height: e
                }, i.options.speed)
            }
        }
        ,
        e.prototype.animateSlide = function(e, t) {
            var o = {}
                , s = this;
            s.animateHeight(),
            !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
                !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                    left: e
                }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
                    top: e
                }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                    i({
                        animStart: s.currentLeft
                    }).animate({
                        animStart: e
                    }, {
                        duration: s.options.speed,
                        easing: s.options.easing,
                        step: function(i) {
                            i = Math.ceil(i),
                                !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)",
                                    s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)",
                                    s.$slideTrack.css(o))
                        },
                        complete: function() {
                            t && t.call()
                        }
                    })) : (s.applyTransition(),
                    e = Math.ceil(e),
                    !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)",
                    s.$slideTrack.css(o),
                t && setTimeout(function() {
                    s.disableTransition(),
                        t.call()
                }, s.options.speed))
        }
        ,
        e.prototype.getNavTarget = function() {
            var e = this
                , t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)),
                t
        }
        ,
        e.prototype.asNavFor = function(e) {
            var t = this.getNavTarget();
            null !== t && "object" == typeof t && t.each(function() {
                var t = i(this).slick("getSlick");
                t.unslicked || t.slideHandler(e, !0)
            })
        }
        ,
        e.prototype.applyTransition = function(i) {
            var e = this
                , t = {};
            !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
                !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
        }
        ,
        e.prototype.autoPlay = function() {
            var i = this;
            i.autoPlayClear(),
            i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
        }
        ,
        e.prototype.autoPlayClear = function() {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer)
        }
        ,
        e.prototype.autoPlayIterator = function() {
            var i = this
                , e = i.currentSlide + i.options.slidesToScroll;
            i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll,
            i.currentSlide - 1 == 0 && (i.direction = 1))),
                i.slideHandler(e))
        }
        ,
        e.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"),
                e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"),
                e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
                e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
                !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                }))
        }
        ,
        e.prototype.buildDots = function() {
            var e, t, o = this;
            if (!0 === o.options.dots) {
                for (o.$slider.addClass("slick-dotted"),
                         t = i("<ul />").addClass(o.options.dotsClass),
                         e = 0; e <= o.getDotCount(); e += 1)
                    t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
                o.$dots = t.appendTo(o.options.appendDots),
                    o.$dots.find("li").first().addClass("slick-active")
            }
        }
        ,
        e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
                e.slideCount = e.$slides.length,
                e.$slides.each(function(e, t) {
                    i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
                }),
                e.$slider.addClass("slick-slider"),
                e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
                e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
                e.$slideTrack.css("opacity", 0),
            !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
                i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
            !0 === e.options.draggable && e.$list.addClass("draggable")
        }
        ,
        e.prototype.buildRows = function() {
            var i, e, t, o, s, n, r, l = this;
            if (o = document.createDocumentFragment(),
                n = l.$slider.children(),
            l.options.rows > 1) {
                for (r = l.options.slidesPerRow * l.options.rows,
                         s = Math.ceil(n.length / r),
                         i = 0; i < s; i++) {
                    var d = document.createElement("div");
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c))
                        }
                        d.appendChild(a)
                    }
                    o.appendChild(d)
                }
                l.$slider.empty().append(o),
                    l.$slider.children().children().children().css({
                        width: 100 / l.options.slidesPerRow + "%",
                        display: "inline-block"
                    })
            }
        }
        ,
        e.prototype.checkResponsive = function(e, t) {
            var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
            if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)),
            r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                s = null;
                for (o in r.breakpoints)
                    r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s,
                    "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
                    !0 === e && (r.currentSlide = r.options.initialSlide),
                        r.refresh(e)),
                    l = s) : (r.activeBreakpoint = s,
                    "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
                    !0 === e && (r.currentSlide = r.options.initialSlide),
                        r.refresh(e)),
                    l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
                    r.options = r.originalSettings,
                !0 === e && (r.currentSlide = r.options.initialSlide),
                    r.refresh(e),
                    l = s),
                e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
            }
        }
        ,
        e.prototype.changeSlide = function(e, t) {
            var o, s, n, r = this, l = i(e.currentTarget);
            switch (l.is("a") && e.preventDefault(),
            l.is("li") || (l = l.closest("li")),
                n = r.slideCount % r.options.slidesToScroll != 0,
                o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
                e.data.message) {
                case "previous":
                    s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o,
                    r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                    break;
                case "next":
                    s = 0 === o ? r.options.slidesToScroll : o,
                    r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                    break;
                case "index":
                    var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t),
                        l.children().trigger("focus");
                    break;
                default:
                    return
            }
        }
        ,
        e.prototype.checkNavigable = function(i) {
            var e, t;
            if (e = this.getNavigableIndexes(),
                t = 0,
            i > e[e.length - 1])
                i = e[e.length - 1];
            else
                for (var o in e) {
                    if (i < e[o]) {
                        i = t;
                        break
                    }
                    t = e[o]
                }
            return i
        }
        ,
        e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
            !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
                e.$slider.off("focus.slick blur.slick"),
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
            e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
            !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                e.$list.off("click.slick", e.clickHandler),
                i(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(),
            !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
            !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
                i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
                i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
                i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }
        ,
        e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
        }
        ,
        e.prototype.cleanUpRows = function() {
            var i, e = this;
            e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"),
                e.$slider.empty().append(i))
        }
        ,
        e.prototype.clickHandler = function(i) {
            !1 === this.shouldClick && (i.stopImmediatePropagation(),
                i.stopPropagation(),
                i.preventDefault())
        }
        ,
        e.prototype.destroy = function(e) {
            var t = this;
            t.autoPlayClear(),
                t.touchObject = {},
                t.cleanUpEvents(),
                i(".slick-cloned", t.$slider).detach(),
            t.$dots && t.$dots.remove(),
            t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
            t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
            t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
            t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
            t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                i(this).attr("style", i(this).data("originalStyling"))
            }),
                t.$slideTrack.children(this.options.slide).detach(),
                t.$slideTrack.detach(),
                t.$list.detach(),
                t.$slider.append(t.$slides)),
                t.cleanUpRows(),
                t.$slider.removeClass("slick-slider"),
                t.$slider.removeClass("slick-initialized"),
                t.$slider.removeClass("slick-dotted"),
                t.unslicked = !0,
            e || t.$slider.trigger("destroy", [t])
        }
        ,
        e.prototype.disableTransition = function(i) {
            var e = this
                , t = {};
            t[e.transitionType] = "",
                !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
        }
        ,
        e.prototype.fadeSlide = function(i, e) {
            var t = this;
            !1 === t.cssTransitions ? (t.$slides.eq(i).css({
                zIndex: t.options.zIndex
            }),
                t.$slides.eq(i).animate({
                    opacity: 1
                }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i),
                t.$slides.eq(i).css({
                    opacity: 1,
                    zIndex: t.options.zIndex
                }),
            e && setTimeout(function() {
                t.disableTransition(i),
                    e.call()
            }, t.options.speed))
        }
        ,
        e.prototype.fadeSlideOut = function(i) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(i).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(i),
                e.$slides.eq(i).css({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                }))
        }
        ,
        e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
            var e = this;
            null !== i && (e.$slidesCache = e.$slides,
                e.unload(),
                e.$slideTrack.children(this.options.slide).detach(),
                e.$slidesCache.filter(i).appendTo(e.$slideTrack),
                e.reinit())
        }
        ,
        e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
                t.stopImmediatePropagation();
                var o = i(this);
                setTimeout(function() {
                    e.options.pauseOnFocus && (e.focussed = o.is(":focus"),
                        e.autoPlay())
                }, 0)
            })
        }
        ,
        e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }
        ,
        e.prototype.getDotCount = function() {
            var i = this
                , e = 0
                , t = 0
                , o = 0;
            if (!0 === i.options.infinite)
                if (i.slideCount <= i.options.slidesToShow)
                    ++o;
                else
                    for (; e < i.slideCount; )
                        ++o,
                            e = t + i.options.slidesToScroll,
                            t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            else if (!0 === i.options.centerMode)
                o = i.slideCount;
            else if (i.options.asNavFor)
                for (; e < i.slideCount; )
                    ++o,
                        e = t + i.options.slidesToScroll,
                        t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            else
                o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
            return o - 1
        }
        ,
        e.prototype.getLeft = function(i) {
            var e, t, o, s, n = this, r = 0;
            return n.slideOffset = 0,
                t = n.$slides.first().outerHeight(!0),
                !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1,
                    s = -1,
                !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)),
                    r = t * n.options.slidesToShow * s),
                n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1,
                    r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1,
                    r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth,
                    r = (i + n.options.slidesToShow - n.slideCount) * t),
            n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0,
                r = 0),
                !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0,
                    n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)),
                e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r,
            !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow),
                e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
            !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1),
                e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
                e += (n.$list.width() - o.outerWidth()) / 2)),
                e
        }
        ,
        e.prototype.getOption = e.prototype.slickGetOption = function(i) {
            return this.options[i]
        }
        ,
        e.prototype.getNavigableIndexes = function() {
            var i, e = this, t = 0, o = 0, s = [];
            for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll,
                o = -1 * e.options.slidesToScroll,
                i = 2 * e.slideCount); t < i; )
                s.push(t),
                    t = o + e.options.slidesToScroll,
                    o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return s
        }
        ,
        e.prototype.getSlick = function() {
            return this
        }
        ,
        e.prototype.getSlideCount = function() {
            var e, t, o = this;
            return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
                !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
                    if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                        return e = n,
                            !1
                }),
                Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }
        ,
        e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(i)
                }
            }, e)
        }
        ,
        e.prototype.init = function(e) {
            var t = this;
            i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"),
                t.buildRows(),
                t.buildOut(),
                t.setProps(),
                t.startLoad(),
                t.loadSlider(),
                t.initializeEvents(),
                t.updateArrows(),
                t.updateDots(),
                t.checkResponsive(!0),
                t.focusHandler()),
            e && t.$slider.trigger("init", [t]),
            !0 === t.options.accessibility && t.initADA(),
            t.options.autoplay && (t.paused = !1,
                t.autoPlay())
        }
        ,
        e.prototype.initADA = function() {
            var e = this
                , t = Math.ceil(e.slideCount / e.options.slidesToShow)
                , o = e.getNavigableIndexes().filter(function(i) {
                return i >= 0 && i < e.slideCount
            });
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }),
            null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
                var s = o.indexOf(t);
                i(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + e.instanceUid + t,
                    tabindex: -1
                }),
                -1 !== s && i(this).attr({
                    "aria-describedby": "slick-slide-control" + e.instanceUid + s
                })
            }),
                e.$dots.attr("role", "tablist").find("li").each(function(s) {
                    var n = o[s];
                    i(this).attr({
                        role: "presentation"
                    }),
                        i(this).find("button").first().attr({
                            role: "tab",
                            id: "slick-slide-control" + e.instanceUid + s,
                            "aria-controls": "slick-slide" + e.instanceUid + n,
                            "aria-label": s + 1 + " of " + t,
                            "aria-selected": null,
                            tabindex: "-1"
                        })
                }).eq(e.currentSlide).find("button").attr({
                    "aria-selected": "true",
                    tabindex: "0"
                }).end());
            for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
                e.$slides.eq(s).attr("tabindex", 0);
            e.activateADA()
        }
        ,
        e.prototype.initArrowEvents = function() {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, i.changeSlide),
                i.$nextArrow.off("click.slick").on("click.slick", {
                    message: "next"
                }, i.changeSlide),
            !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler),
                i.$nextArrow.on("keydown.slick", i.keyHandler)))
        }
        ,
        e.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide),
            !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
            !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
        }
        ,
        e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
        }
        ,
        e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, e.swipeHandler),
                e.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, e.swipeHandler),
                e.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, e.swipeHandler),
                e.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, e.swipeHandler),
                e.$list.on("click.slick", e.clickHandler),
                i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
            !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
            !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
                i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
                i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
                i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
                i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                i(e.setPosition)
        }
        ,
        e.prototype.initUI = function() {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(),
                i.$nextArrow.show()),
            !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
        }
        ,
        e.prototype.keyHandler = function(i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "next" : "previous"
                }
            }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "previous" : "next"
                }
            }))
        }
        ,
        e.prototype.lazyLoad = function() {
            function e(e) {
                i("img[data-lazy]", e).each(function() {
                    var e = i(this)
                        , t = i(this).attr("data-lazy")
                        , o = i(this).attr("data-srcset")
                        , s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes")
                        , r = document.createElement("img");
                    r.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            o && (e.attr("srcset", o),
                            s && e.attr("sizes", s)),
                                e.attr("src", t).animate({
                                    opacity: 1
                                }, 200, function() {
                                    e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                }),
                                n.$slider.trigger("lazyLoaded", [n, e, t])
                        })
                    }
                        ,
                        r.onerror = function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                                n.$slider.trigger("lazyLoadError", [n, e, t])
                        }
                        ,
                        r.src = t
                })
            }
            var t, o, s, n = this;
            if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
                s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
                s = Math.ceil(o + n.options.slidesToShow),
            !0 === n.options.fade && (o > 0 && o--,
            s <= n.slideCount && s++)),
                t = n.$slider.find(".slick-slide").slice(o, s),
            "anticipated" === n.options.lazyLoad)
                for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)
                    r < 0 && (r = n.slideCount - 1),
                        t = (t = t.add(d.eq(r))).add(d.eq(l)),
                        r--,
                        l++;
            e(t),
                n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
        }
        ,
        e.prototype.loadSlider = function() {
            var i = this;
            i.setPosition(),
                i.$slideTrack.css({
                    opacity: 1
                }),
                i.$slider.removeClass("slick-loading"),
                i.initUI(),
            "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
        }
        ,
        e.prototype.next = e.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }
        ,
        e.prototype.orientationChange = function() {
            var i = this;
            i.checkResponsive(),
                i.setPosition()
        }
        ,
        e.prototype.pause = e.prototype.slickPause = function() {
            var i = this;
            i.autoPlayClear(),
                i.paused = !0
        }
        ,
        e.prototype.play = e.prototype.slickPlay = function() {
            var i = this;
            i.autoPlay(),
                i.options.autoplay = !0,
                i.paused = !1,
                i.focussed = !1,
                i.interrupted = !1
        }
        ,
        e.prototype.postSlide = function(e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
                t.animating = !1,
            t.slideCount > t.options.slidesToShow && t.setPosition(),
                t.swipeLeft = null,
            t.options.autoplay && t.autoPlay(),
            !0 === t.options.accessibility && (t.initADA(),
            t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
        }
        ,
        e.prototype.prev = e.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }
        ,
        e.prototype.preventDefault = function(i) {
            i.preventDefault()
        }
        ,
        e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
            d.length ? (t = d.first(),
                o = t.attr("data-lazy"),
                s = t.attr("data-srcset"),
                n = t.attr("data-sizes") || l.$slider.attr("data-sizes"),
                (r = document.createElement("img")).onload = function() {
                    s && (t.attr("srcset", s),
                    n && t.attr("sizes", n)),
                        t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                    !0 === l.options.adaptiveHeight && l.setPosition(),
                        l.$slider.trigger("lazyLoaded", [l, t, o]),
                        l.progressiveLazyLoad()
                }
                ,
                r.onerror = function() {
                    e < 3 ? setTimeout(function() {
                        l.progressiveLazyLoad(e + 1)
                    }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                        l.$slider.trigger("lazyLoadError", [l, t, o]),
                        l.progressiveLazyLoad())
                }
                ,
                r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
        }
        ,
        e.prototype.refresh = function(e) {
            var t, o, s = this;
            o = s.slideCount - s.options.slidesToShow,
            !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
            s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                t = s.currentSlide,
                s.destroy(!0),
                i.extend(s, s.initials, {
                    currentSlide: t
                }),
                s.init(),
            e || s.changeSlide({
                data: {
                    message: "index",
                    index: t
                }
            }, !1)
        }
        ,
        e.prototype.registerBreakpoints = function() {
            var e, t, o, s = this, n = s.options.responsive || null;
            if ("array" === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in n)
                    if (o = s.breakpoints.length - 1,
                        n.hasOwnProperty(e)) {
                        for (t = n[e].breakpoint; o >= 0; )
                            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1),
                                o--;
                        s.breakpoints.push(t),
                            s.breakpointSettings[t] = n[e].settings
                    }
                s.breakpoints.sort(function(i, e) {
                    return s.options.mobileFirst ? i - e : e - i
                })
            }
        }
        ,
        e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
                e.slideCount = e.$slides.length,
            e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
            e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0),
            !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
                e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                e.setPosition(),
                e.focusHandler(),
                e.paused = !e.options.autoplay,
                e.autoPlay(),
                e.$slider.trigger("reInit", [e])
        }
        ,
        e.prototype.resize = function() {
            var e = this;
            i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
                e.windowDelay = window.setTimeout(function() {
                    e.windowWidth = i(window).width(),
                        e.checkResponsive(),
                    e.unslicked || e.setPosition()
                }, 50))
        }
        ,
        e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
            var o = this;
            if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i,
            o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
                return !1;
            o.unload(),
                !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
                o.$slides = o.$slideTrack.children(this.options.slide),
                o.$slideTrack.children(this.options.slide).detach(),
                o.$slideTrack.append(o.$slides),
                o.$slidesCache = o.$slides,
                o.reinit()
        }
        ,
        e.prototype.setCSS = function(i) {
            var e, t, o = this, s = {};
            !0 === o.options.rtl && (i = -i),
                e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px",
                t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px",
                s[o.positionProp] = i,
                !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {},
                    !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")",
                        o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)",
                        o.$slideTrack.css(s)))
        }
        ,
        e.prototype.setDimensions = function() {
            var i = this;
            !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
                padding: "0px " + i.options.centerPadding
            }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
            !0 === i.options.centerMode && i.$list.css({
                padding: i.options.centerPadding + " 0px"
            })),
                i.listWidth = i.$list.width(),
                i.listHeight = i.$list.height(),
                !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow),
                    i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth),
                    i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
            var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
        }
        ,
        e.prototype.setFade = function() {
            var e, t = this;
            t.$slides.each(function(o, s) {
                e = t.slideWidth * o * -1,
                    !0 === t.options.rtl ? i(s).css({
                        position: "relative",
                        right: e,
                        top: 0,
                        zIndex: t.options.zIndex - 2,
                        opacity: 0
                    }) : i(s).css({
                        position: "relative",
                        left: e,
                        top: 0,
                        zIndex: t.options.zIndex - 2,
                        opacity: 0
                    })
            }),
                t.$slides.eq(t.currentSlide).css({
                    zIndex: t.options.zIndex - 1,
                    opacity: 1
                })
        }
        ,
        e.prototype.setHeight = function() {
            var i = this;
            if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", e)
            }
        }
        ,
        e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, t, o, s, n, r = this, l = !1;
            if ("object" === i.type(arguments[0]) ? (o = arguments[0],
                l = arguments[1],
                n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0],
                s = arguments[1],
                l = arguments[2],
                "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")),
            "single" === n)
                r.options[o] = s;
            else if ("multiple" === n)
                i.each(o, function(i, e) {
                    r.options[i] = e
                });
            else if ("responsive" === n)
                for (t in s)
                    if ("array" !== i.type(r.options.responsive))
                        r.options.responsive = [s[t]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0; )
                            r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1),
                                e--;
                        r.options.responsive.push(s[t])
                    }
            l && (r.unload(),
                r.reinit())
        }
        ,
        e.prototype.setPosition = function() {
            var i = this;
            i.setDimensions(),
                i.setHeight(),
                !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
                i.$slider.trigger("setPosition", [i])
        }
        ,
        e.prototype.setProps = function() {
            var i = this
                , e = document.body.style;
            i.positionProp = !0 === i.options.vertical ? "top" : "left",
                "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
            void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0),
            i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex),
            void 0 !== e.OTransform && (i.animType = "OTransform",
                i.transformType = "-o-transform",
                i.transitionType = "OTransition",
            void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
            void 0 !== e.MozTransform && (i.animType = "MozTransform",
                i.transformType = "-moz-transform",
                i.transitionType = "MozTransition",
            void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
            void 0 !== e.webkitTransform && (i.animType = "webkitTransform",
                i.transformType = "-webkit-transform",
                i.transitionType = "webkitTransition",
            void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
            void 0 !== e.msTransform && (i.animType = "msTransform",
                i.transformType = "-ms-transform",
                i.transitionType = "msTransition",
            void 0 === e.msTransform && (i.animType = !1)),
            void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform",
                i.transformType = "transform",
                i.transitionType = "transition"),
                i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
        }
        ,
        e.prototype.setSlideClasses = function(i) {
            var e, t, o, s, n = this;
            if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
                n.$slides.eq(i).addClass("slick-current"),
            !0 === n.options.centerMode) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                e = Math.floor(n.options.slidesToShow / 2),
                !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
                    t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
                    0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
                    n.$slides.eq(i).addClass("slick-center")
            } else
                i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow,
                    o = !0 === n.options.infinite ? n.options.slidesToShow + i : i,
                    n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
        }
        ,
        e.prototype.setupInfinite = function() {
            var e, t, o, s = this;
            if (!0 === s.options.fade && (s.options.centerMode = !1),
            !0 === s.options.infinite && !1 === s.options.fade && (t = null,
            s.slideCount > s.options.slidesToShow)) {
                for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
                         e = s.slideCount; e > s.slideCount - o; e -= 1)
                    t = e - 1,
                        i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < o + s.slideCount; e += 1)
                    t = e,
                        i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    i(this).attr("id", "")
                })
            }
        }
        ,
        e.prototype.interrupt = function(i) {
            var e = this;
            i || e.autoPlay(),
                e.interrupted = i
        }
        ,
        e.prototype.selectHandler = function(e) {
            var t = this
                , o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide")
                , s = parseInt(o.attr("data-slick-index"));
            s || (s = 0),
                t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
        }
        ,
        e.prototype.slideHandler = function(i, e, t) {
            var o, s, n, r, l, d = null, a = this;
            if (e = e || !1,
                !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
                if (!1 === e && a.asNavFor(i),
                    o = i,
                    d = a.getLeft(o),
                    r = a.getLeft(a.currentSlide),
                    a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft,
                !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
                    !1 === a.options.fade && (o = a.currentSlide,
                        !0 !== t ? a.animateSlide(r, function() {
                            a.postSlide(o)
                        }) : a.postSlide(o));
                else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll))
                    !1 === a.options.fade && (o = a.currentSlide,
                        !0 !== t ? a.animateSlide(r, function() {
                            a.postSlide(o)
                        }) : a.postSlide(o));
                else {
                    if (a.options.autoplay && clearInterval(a.autoPlayTimer),
                        s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o,
                        a.animating = !0,
                        a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                        n = a.currentSlide,
                        a.currentSlide = s,
                        a.setSlideClasses(a.currentSlide),
                    a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide),
                        a.updateDots(),
                        a.updateArrows(),
                    !0 === a.options.fade)
                        return !0 !== t ? (a.fadeSlideOut(n),
                            a.fadeSlide(s, function() {
                                a.postSlide(s)
                            })) : a.postSlide(s),
                            void a.animateHeight();
                    !0 !== t ? a.animateSlide(d, function() {
                        a.postSlide(s)
                    }) : a.postSlide(s)
                }
        }
        ,
        e.prototype.startLoad = function() {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(),
                i.$nextArrow.hide()),
            !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
                i.$slider.addClass("slick-loading")
        }
        ,
        e.prototype.swipeDirection = function() {
            var i, e, t, o, s = this;
            return i = s.touchObject.startX - s.touchObject.curX,
                e = s.touchObject.startY - s.touchObject.curY,
                t = Math.atan2(e, i),
            (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
                o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
        }
        ,
        e.prototype.swipeEnd = function(i) {
            var e, t, o = this;
            if (o.dragging = !1,
                o.swiping = !1,
                o.scrolling)
                return o.scrolling = !1,
                    !1;
            if (o.interrupted = !1,
                o.shouldClick = !(o.touchObject.swipeLength > 10),
            void 0 === o.touchObject.curX)
                return !1;
            if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
            o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                switch (t = o.swipeDirection()) {
                    case "left":
                    case "down":
                        e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(),
                            o.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(),
                            o.currentDirection = 1
                }
                "vertical" != t && (o.slideHandler(e),
                    o.touchObject = {},
                    o.$slider.trigger("swipe", [o, t]))
            } else
                o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide),
                    o.touchObject = {})
        }
        ,
        e.prototype.swipeHandler = function(i) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse")))
                switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1,
                    e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
                !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                    i.data.action) {
                    case "start":
                        e.swipeStart(i);
                        break;
                    case "move":
                        e.swipeMove(i);
                        break;
                    case "end":
                        e.swipeEnd(i)
                }
        }
        ,
        e.prototype.swipeMove = function(i) {
            var e, t, o, s, n, r, l = this;
            return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null,
            !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide),
                l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX,
                l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY,
                l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))),
                r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))),
                !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0,
                    !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
                    t = l.swipeDirection(),
                void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0,
                    i.preventDefault()),
                    s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1),
                !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
                    o = l.touchObject.swipeLength,
                    l.touchObject.edgeHit = !1,
                !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction,
                    l.touchObject.edgeHit = !0),
                    !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s,
                !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
                !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null,
                    !1) : void l.setCSS(l.swipeLeft))))
        }
        ,
        e.prototype.swipeStart = function(i) {
            var e, t = this;
            if (t.interrupted = !0,
            1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)
                return t.touchObject = {},
                    !1;
            void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
                t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX,
                t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY,
                t.dragging = !0
        }
        ,
        e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var i = this;
            null !== i.$slidesCache && (i.unload(),
                i.$slideTrack.children(this.options.slide).detach(),
                i.$slidesCache.appendTo(i.$slideTrack),
                i.reinit())
        }
        ,
        e.prototype.unload = function() {
            var e = this;
            i(".slick-cloned", e.$slider).remove(),
            e.$dots && e.$dots.remove(),
            e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
            e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
                e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }
        ,
        e.prototype.unslick = function(i) {
            var e = this;
            e.$slider.trigger("unslick", [e, i]),
                e.destroy()
        }
        ,
        e.prototype.updateArrows = function() {
            var i = this;
            Math.floor(i.options.slidesToShow / 2),
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                    i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                    i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                    i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }
        ,
        e.prototype.updateDots = function() {
            var i = this;
            null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(),
                i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
        }
        ,
        e.prototype.visibility = function() {
            var i = this;
            i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
        }
        ,
        i.fn.slick = function() {
            var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
            for (i = 0; i < r; i++)
                if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i],s) : t = o[i].slick[s].apply(o[i].slick, n),
                void 0 !== t)
                    return t;
            return o
        }
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var s = function(t) {
            var e, i = [], s = t.length;
            for (e = 0; e !== s; i.push(t[e++]))
                ;
            return i
        }
            , r = function(t, e, i) {
            var s, r, n = t.cycle;
            for (s in n)
                r = n[s],
                    t[s] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
            delete t.cycle
        }
            , n = function(t, e, s) {
            i.call(this, t, e, s),
                this._cycle = 0,
                this._yoyo = !0 === this.vars.yoyo,
                this._repeat = this.vars.repeat || 0,
                this._repeatDelay = this.vars.repeatDelay || 0,
                this._dirty = !0,
                this.render = n.prototype.render
        }
            , a = 1e-10
            , o = i._internals
            , l = o.isSelector
            , h = o.isArray
            , _ = n.prototype = i.to({}, .1, {})
            , u = [];
        n.version = "1.19.0",
            _.constructor = n,
            _.kill()._gc = !1,
            n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf,
            n.getTweensOf = i.getTweensOf,
            n.lagSmoothing = i.lagSmoothing,
            n.ticker = i.ticker,
            n.render = i.render,
            _.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo,
                    this._repeat = this.vars.repeat || 0,
                    this._repeatDelay = this.vars.repeatDelay || 0,
                    this._uncache(!0),
                    i.prototype.invalidate.call(this)
            }
            ,
            _.updateTo = function(t, e) {
                var s, r = this.ratio, n = this.vars.immediateRender || t.immediateRender;
                e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
                    this._uncache(!1),
                    this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                for (s in t)
                    this.vars[s] = t[s];
                if (this._initted || n)
                    if (e)
                        this._initted = !1,
                        n && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1),
                    this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this),
                    this._time / this._duration > .998) {
                        var a = this._totalTime;
                        this.render(0, !0, !1),
                            this._initted = !1,
                            this.render(a, !0, !1)
                    } else if (this._initted = !1,
                        this._init(),
                    this._time > 0 || n)
                        for (var o, l = 1 / (1 - r), h = this._firstPT; h; )
                            o = h.s + h.c,
                                h.c *= l,
                                h.s = o - h.c,
                                h = h._next;
                return this
            }
            ,
            _.render = function(t, e, i) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var s, r, n, l, h, _, u, f, c = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, d = this._totalTime, m = this._cycle, g = this._duration, v = this._rawPrevTime;
                if (t >= c - 1e-7 ? (this._totalTime = c,
                    this._cycle = this._repeat,
                    this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0,
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g,
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                this._reversed || (s = !0,
                    r = "onComplete",
                    i = i || this._timeline.autoRemoveChildren),
                0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                (0 > v || 0 >= t && t >= -1e-7 || v === a && "isPause" !== this.data) && v !== t && (i = !0,
                v > a && (r = "onReverseComplete")),
                    this._rawPrevTime = f = !e || t || v === t ? t : a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0,
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== d || 0 === g && v > 0) && (r = "onReverseComplete",
                    s = this._reversed),
                0 > t && (this._active = !1,
                0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0),
                    this._rawPrevTime = f = !e || t || v === t ? t : a)),
                this._initted || (i = !0)) : (this._totalTime = this._time = t,
                0 !== this._repeat && (l = g + this._repeatDelay,
                    this._cycle = this._totalTime / l >> 0,
                0 !== this._cycle && this._cycle === this._totalTime / l && t >= d && this._cycle--,
                    this._time = this._totalTime - this._cycle * l,
                this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time),
                    this._time > g ? this._time = g : this._time < 0 && (this._time = 0)),
                    this._easeType ? (h = this._time / g,
                        _ = this._easeType,
                        u = this._easePower,
                    (1 === _ || 3 === _ && h >= .5) && (h = 1 - h),
                    3 === _ && (h *= 2),
                        1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h),
                        1 === _ ? this.ratio = 1 - h : 2 === _ ? this.ratio = h : this._time / g < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)),
                p === this._time && !i && m === this._cycle)
                    return void (d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = p,
                            this._totalTime = d,
                            this._rawPrevTime = v,
                            this._cycle = m,
                            o.lazyTweens.push(this),
                            void (this._lazy = [t, e]);
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                     this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0),
                     0 === d && (2 === this._initted && t > 0 && this._init(),
                     this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
                     this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))),
                         n = this._firstPT; n; )
                    n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
                        n = n._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i),
                e || (this._totalTime !== d || r) && this._callback("onUpdate")),
                this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
                r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
                s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                    this._active = !1),
                !e && this.vars[r] && this._callback(r),
                0 === g && this._rawPrevTime === a && f !== a && (this._rawPrevTime = 0))
            }
            ,
            n.to = function(t, e, i) {
                return new n(t,e,i)
            }
            ,
            n.from = function(t, e, i) {
                return i.runBackwards = !0,
                    i.immediateRender = 0 != i.immediateRender,
                    new n(t,e,i)
            }
            ,
            n.fromTo = function(t, e, i, s) {
                return s.startAt = i,
                    s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
                    new n(t,e,s)
            }
            ,
            n.staggerTo = n.allTo = function(t, e, a, o, _, f, c) {
                o = o || 0;
                var p, d, m, g, v = 0, y = [], T = function() {
                    a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments),
                        _.apply(c || a.callbackScope || this, f || u)
                }, x = a.cycle, w = a.startAt && a.startAt.cycle;
                for (h(t) || ("string" == typeof t && (t = i.selector(t) || t),
                l(t) && (t = s(t))),
                         t = t || [],
                     0 > o && (t = s(t),
                         t.reverse(),
                         o *= -1),
                         p = t.length - 1,
                         m = 0; p >= m; m++) {
                    d = {};
                    for (g in a)
                        d[g] = a[g];
                    if (x && (r(d, t, m),
                    null != d.duration && (e = d.duration,
                        delete d.duration)),
                        w) {
                        w = d.startAt = {};
                        for (g in a.startAt)
                            w[g] = a.startAt[g];
                        r(d.startAt, t, m)
                    }
                    d.delay = v + (d.delay || 0),
                    m === p && _ && (d.onComplete = T),
                        y[m] = new n(t[m],e,d),
                        v += o
                }
                return y
            }
            ,
            n.staggerFrom = n.allFrom = function(t, e, i, s, r, a, o) {
                return i.runBackwards = !0,
                    i.immediateRender = 0 != i.immediateRender,
                    n.staggerTo(t, e, i, s, r, a, o)
            }
            ,
            n.staggerFromTo = n.allFromTo = function(t, e, i, s, r, a, o, l) {
                return s.startAt = i,
                    s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
                    n.staggerTo(t, e, s, r, a, o, l)
            }
            ,
            n.delayedCall = function(t, e, i, s, r) {
                return new n(e,0,{
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }
            ,
            n.set = function(t, e) {
                return new n(t,0,e)
            }
            ,
            n.isTweening = function(t) {
                return i.getTweensOf(t, !0).length > 0
            }
        ;
        var f = function(t, e) {
                for (var s = [], r = 0, n = t._first; n; )
                    n instanceof i ? s[r++] = n : (e && (s[r++] = n),
                        s = s.concat(f(n, e)),
                        r = s.length),
                        n = n._next;
                return s
            }
            , c = n.getAllTweens = function(e) {
                return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
            }
        ;
        n.killAll = function(t, i, s, r) {
            null == i && (i = !0),
            null == s && (s = !0);
            var n, a, o, l = c(0 != r), h = l.length, _ = i && s && r;
            for (o = 0; h > o; o++)
                a = l[o],
                (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        }
            ,
            n.killChildTweensOf = function(t, e) {
                if (null != t) {
                    var r, a, _, u, f, c = o.tweenLookup;
                    if ("string" == typeof t && (t = i.selector(t) || t),
                    l(t) && (t = s(t)),
                        h(t))
                        for (u = t.length; --u > -1; )
                            n.killChildTweensOf(t[u], e);
                    else {
                        r = [];
                        for (_ in c)
                            for (a = c[_].target.parentNode; a; )
                                a === t && (r = r.concat(c[_].tweens)),
                                    a = a.parentNode;
                        for (f = r.length,
                                 u = 0; f > u; u++)
                            e && r[u].totalTime(r[u].totalDuration()),
                                r[u]._enabled(!1, !1)
                    }
                }
            }
        ;
        var p = function(t, i, s, r) {
            i = !1 !== i,
                s = !1 !== s,
                r = !1 !== r;
            for (var n, a, o = c(r), l = i && s && r, h = o.length; --h > -1; )
                a = o[h],
                (l || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
        };
        return n.pauseAll = function(t, e, i) {
            p(!0, t, e, i)
        }
            ,
            n.resumeAll = function(t, e, i) {
                p(!1, t, e, i)
            }
            ,
            n.globalTimeScale = function(e) {
                var s = t._rootTimeline
                    , r = i.ticker.time;
                return arguments.length ? (e = e || a,
                    s._startTime = r - (r - s._startTime) * s._timeScale / e,
                    s = t._rootFramesTimeline,
                    r = i.ticker.frame,
                    s._startTime = r - (r - s._startTime) * s._timeScale / e,
                    s._timeScale = t._rootTimeline._timeScale = e,
                    e) : s._timeScale
            }
            ,
            _.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }
            ,
            _.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }
            ,
            _.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                    this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                    this.totalTime(t, e)) : this._time
            }
            ,
            _.duration = function(e) {
                return arguments.length ? t.prototype.duration.call(this, e) : this._duration
            }
            ,
            _.totalDuration = function(t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
                    this._dirty = !1),
                    this._totalDuration)
            }
            ,
            _.repeat = function(t) {
                return arguments.length ? (this._repeat = t,
                    this._uncache(!0)) : this._repeat
            }
            ,
            _.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t,
                    this._uncache(!0)) : this._repeatDelay
            }
            ,
            _.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t,
                    this) : this._yoyo
            }
            ,
            n
    }, !0),
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var s = function(t) {
                e.call(this, t),
                    this._labels = {},
                    this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren,
                    this.smoothChildTiming = !0 === this.vars.smoothChildTiming,
                    this._sortChildren = !0,
                    this._onUpdate = this.vars.onUpdate;
                var i, s, r = this.vars;
                for (s in r)
                    i = r[s],
                    l(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
            }
                , r = 1e-10
                , n = i._internals
                , a = s._internals = {}
                , o = n.isSelector
                , l = n.isArray
                , h = n.lazyTweens
                , _ = n.lazyRender
                , u = _gsScope._gsDefine.globals
                , f = function(t) {
                var e, i = {};
                for (e in t)
                    i[e] = t[e];
                return i
            }
                , c = function(t, e, i) {
                var s, r, n = t.cycle;
                for (s in n)
                    r = n[s],
                        t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                delete t.cycle
            }
                , p = a.pauseCallback = function() {}
                , d = function(t) {
                var e, i = [], s = t.length;
                for (e = 0; e !== s; i.push(t[e++]))
                    ;
                return i
            }
                , m = s.prototype = new e;
            return s.version = "1.19.0",
                m.constructor = s,
                m.kill()._gc = m._forcingPlayhead = m._hasPause = !1,
                m.to = function(t, e, s, r) {
                    var n = s.repeat && u.TweenMax || i;
                    return e ? this.add(new n(t,e,s), r) : this.set(t, s, r)
                }
                ,
                m.from = function(t, e, s, r) {
                    return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r)
                }
                ,
                m.fromTo = function(t, e, s, r, n) {
                    var a = r.repeat && u.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
                }
                ,
                m.staggerTo = function(t, e, r, n, a, l, h, _) {
                    var u, p, m = new s({
                        onComplete: l,
                        onCompleteParams: h,
                        callbackScope: _,
                        smoothChildTiming: this.smoothChildTiming
                    }), g = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t),
                             t = t || [],
                         o(t) && (t = d(t)),
                             n = n || 0,
                         0 > n && (t = d(t),
                             t.reverse(),
                             n *= -1),
                             p = 0; p < t.length; p++)
                        u = f(r),
                        u.startAt && (u.startAt = f(u.startAt),
                        u.startAt.cycle && c(u.startAt, t, p)),
                        g && (c(u, t, p),
                        null != u.duration && (e = u.duration,
                            delete u.duration)),
                            m.to(t[p], e, u, p * n);
                    return this.add(m, a)
                }
                ,
                m.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender,
                        i.runBackwards = !0,
                        this.staggerTo(t, e, i, s, r, n, a, o)
                }
                ,
                m.staggerFromTo = function(t, e, i, s, r, n, a, o, l) {
                    return s.startAt = i,
                        s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
                        this.staggerTo(t, e, s, r, n, a, o, l)
                }
                ,
                m.call = function(t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r)
                }
                ,
                m.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0),
                    null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused),
                        this.add(new i(t,0,e), s)
                }
                ,
                s.exportRoot = function(t, e) {
                    t = t || {},
                    null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t), o = a._timeline;
                    for (null == e && (e = !0),
                             o._remove(a, !0),
                             a._startTime = 0,
                             a._rawPrevTime = a._time = a._totalTime = o._time,
                             r = o._first; r; )
                        n = r._next,
                        e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay),
                            r = n;
                    return o.add(a, 0),
                        a
                }
                ,
                m.add = function(r, n, a, o) {
                    var h, _, u, f, c, p;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)),
                        !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (a = a || "normal",
                                     o = o || 0,
                                     h = n,
                                     _ = r.length,
                                     u = 0; _ > u; u++)
                                l(f = r[u]) && (f = new s({
                                    tweens: f
                                })),
                                    this.add(f, h),
                                "string" != typeof f && "function" != typeof f && ("sequence" === a ? h = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())),
                                    h += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r)
                            return this.addLabel(r, n);
                        if ("function" != typeof r)
                            throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n),
                    (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (c = this,
                                 p = c.rawTime() > r._startTime; c._timeline; )
                            p && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1),
                                c = c._timeline;
                    return this
                }
                ,
                m.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale,
                            this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var s = e.length; --s > -1; )
                            this.remove(e[s]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }
                ,
                m._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var s = this._last;
                    return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(),
                        this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
                        this
                }
                ,
                m.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }
                ,
                m.insert = m.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }
                ,
                m.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }
                ,
                m.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e),
                        this
                }
                ,
                m.addPause = function(t, e, s, r) {
                    var n = i.delayedCall(0, p, s, r || this);
                    return n.vars.onComplete = n.vars.onReverseComplete = e,
                        n.data = "isPause",
                        this._hasPause = !0,
                        this.add(n, t)
                }
                ,
                m.removeLabel = function(t) {
                    return delete this._labels[t],
                        this
                }
                ,
                m.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }
                ,
                m._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this)
                        this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (n = r.length; --n > -1; )
                            r[n]instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i)
                        return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0,
                    "string" != typeof e || !isNaN(e) && null == this._labels[e])
                        null == e && (e = this.duration());
                    else {
                        if (-1 === (n = e.indexOf("=")))
                            return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)),
                            e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }
                ,
                m.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }
                ,
                m.stop = function() {
                    return this.paused(!0)
                }
                ,
                m.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }
                ,
                m.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }
                ,
                m.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, l, u, f, c = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, d = this._startTime, m = this._timeScale, g = this._paused;
                    if (t >= c - 1e-7)
                        this._totalTime = this._time = c,
                        this._reversed || this._hasPausedChild() || (n = !0,
                            o = "onComplete",
                            l = !!this._timeline.autoRemoveChildren,
                        0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0,
                        this._rawPrevTime > r && (o = "onReverseComplete"))),
                            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r,
                            t = c + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0,
                        (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete",
                            n = this._reversed),
                        0 > t)
                            this._active = !1,
                                this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0,
                                    o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0),
                                this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r,
                            0 === t && n)
                                for (s = this._first; s && 0 === s._startTime; )
                                    s._duration || (n = !1),
                                        s = s._next;
                            t = 0,
                            this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= p)
                                for (s = this._first; s && s._startTime <= t && !u; )
                                    s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s),
                                        s = s._next;
                            else
                                for (s = this._last; s && s._startTime >= t && !u; )
                                    s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s),
                                        s = s._prev;
                            u && (this._time = t = u._startTime,
                                this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== p && this._first || i || l || u) {
                        if (this._initted || (this._initted = !0),
                        this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0),
                        0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")),
                        (f = this._time) >= p)
                            for (s = this._first; s && (a = s._next,
                            f === this._time && (!this._paused || g)); )
                                (s._active || s._startTime <= f && !s._paused && !s._gc) && (u === s && this.pause(),
                                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                                    s = a;
                        else
                            for (s = this._last; s && (a = s._prev,
                            f === this._time && (!this._paused || g)); ) {
                                if (s._active || s._startTime <= p && !s._paused && !s._gc) {
                                    if (u === s) {
                                        for (u = s._prev; u && u.endTime() > this._time; )
                                            u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i),
                                                u = u._prev;
                                        u = null,
                                            this.pause()
                                    }
                                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                                }
                                s = a
                            }
                        this._onUpdate && (e || (h.length && _(),
                            this._callback("onUpdate"))),
                        o && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (h.length && _(),
                        this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                            this._active = !1),
                        !e && this.vars[o] && this._callback(o)))
                    }
                }
                ,
                m._hasPausedChild = function() {
                    for (var t = this._first; t; ) {
                        if (t._paused || t instanceof s && t._hasPausedChild())
                            return !0;
                        t = t._next
                    }
                    return !1
                }
                ,
                m.getChildren = function(t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a; )
                        a._startTime < r || (a instanceof i ? !1 !== e && (n[o++] = a) : (!1 !== s && (n[o++] = a),
                        !1 !== t && (n = n.concat(a.getChildren(!0, e, s)),
                            o = n.length))),
                            a = a._next;
                    return n
                }
                ,
                m.getTweensOf = function(t, e) {
                    var s, r, n = this._gc, a = [], o = 0;
                    for (n && this._enabled(!0, !0),
                             s = i.getTweensOf(t),
                             r = s.length; --r > -1; )
                        (s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                    return n && this._enabled(!1, !0),
                        a
                }
                ,
                m.recent = function() {
                    return this._recent
                }
                ,
                m._contains = function(t) {
                    for (var e = t.timeline; e; ) {
                        if (e === this)
                            return !0;
                        e = e.timeline
                    }
                    return !1
                }
                ,
                m.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r; )
                        r._startTime >= i && (r._startTime += t),
                            r = r._next;
                    if (e)
                        for (s in n)
                            n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }
                ,
                m._kill = function(t, e) {
                    if (!t && !e)
                        return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1; )
                        i[s]._kill(t, e) && (r = !0);
                    return r
                }
                ,
                m.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0)
                        , i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1; )
                        e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}),
                        this._uncache(!0)
                }
                ,
                m.invalidate = function() {
                    for (var e = this._first; e; )
                        e.invalidate(),
                            e = e._next;
                    return t.prototype.invalidate.call(this)
                }
                ,
                m._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s; )
                            s._enabled(t, !0),
                                s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }
                ,
                m.totalTime = function(e, i, s) {
                    this._forcingPlayhead = !0;
                    var r = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1,
                        r
                }
                ,
                m.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
                        this) : (this._dirty && this.totalDuration(),
                        this._duration)
                }
                ,
                m.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r; )
                                e = r._prev,
                                r._dirty && r.totalDuration(),
                                    r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime,
                                r._startTime < 0 && !r._paused && (s -= r._startTime,
                                this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale),
                                    this.shiftChildren(-r._startTime, !1, -9999999999),
                                    n = 0),
                                    i = r._startTime + r._totalDuration / r._timeScale,
                                i > s && (s = i),
                                    r = e;
                            this._duration = this._totalDuration = s,
                                this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }
                ,
                m.paused = function(e) {
                    if (!e)
                        for (var i = this._first, s = this._time; i; )
                            i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0),
                                i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }
                ,
                m.usesFrames = function() {
                    for (var e = this._timeline; e._timeline; )
                        e = e._timeline;
                    return e === t._rootFramesTimeline
                }
                ,
                m.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }
                ,
                s
        }, !0),
        _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
            var s = function(e) {
                t.call(this, e),
                    this._repeat = this.vars.repeat || 0,
                    this._repeatDelay = this.vars.repeatDelay || 0,
                    this._cycle = 0,
                    this._yoyo = !0 === this.vars.yoyo,
                    this._dirty = !0
            }
                , r = 1e-10
                , n = e._internals
                , a = n.lazyTweens
                , o = n.lazyRender
                , l = _gsScope._gsDefine.globals
                , h = new i(null,null,1,0)
                , _ = s.prototype = new t;
            return _.constructor = s,
                _.kill()._gc = !1,
                s.version = "1.19.0",
                _.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._uncache(!0),
                        t.prototype.invalidate.call(this)
                }
                ,
                _.addCallback = function(t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i)
                }
                ,
                _.removeCallback = function(t, e) {
                    if (t)
                        if (null == e)
                            this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1; )
                                i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }
                ,
                _.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }
                ,
                _.tweenTo = function(t, i) {
                    i = i || {};
                    var s, r, n, a = {
                        ease: h,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    }, o = i.repeat && l.TweenMax || e;
                    for (r in i)
                        a[r] = i[r];
                    return a.time = this._parseTimeOrLabel(t),
                        s = Math.abs(Number(a.time) - this._time) / this._timeScale || .001,
                        n = new o(this,s,a),
                        a.onStart = function() {
                            n.target.paused(!0),
                            n.vars.time !== n.target.time() && s === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale),
                            i.onStart && n._callback("onStart")
                        }
                        ,
                        n
                }
                ,
                _.tweenFromTo = function(t, e, i) {
                    i = i || {},
                        t = this._parseTimeOrLabel(t),
                        i.startAt = {
                            onComplete: this.seek,
                            onCompleteParams: [t],
                            callbackScope: this
                        },
                        i.immediateRender = !1 !== i.immediateRender;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }
                ,
                _.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, l, h, _, u, f, c, p = this._dirty ? this.totalDuration() : this._totalDuration, d = this._duration, m = this._time, g = this._totalTime, v = this._startTime, y = this._timeScale, T = this._rawPrevTime, x = this._paused, w = this._cycle;
                    if (t >= p - 1e-7)
                        this._locked || (this._totalTime = p,
                            this._cycle = this._repeat),
                        this._reversed || this._hasPausedChild() || (n = !0,
                            h = "onComplete",
                            _ = !!this._timeline.autoRemoveChildren,
                        0 === this._duration && (0 >= t && t >= -1e-7 || 0 > T || T === r) && T !== t && this._first && (_ = !0,
                        T > r && (h = "onReverseComplete"))),
                            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r,
                            this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = d,
                                t = d + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0),
                            this._time = 0,
                        (0 !== m || 0 === d && T !== r && (T > 0 || 0 > t && T >= 0) && !this._locked) && (h = "onReverseComplete",
                            n = this._reversed),
                        0 > t)
                            this._active = !1,
                                this._timeline.autoRemoveChildren && this._reversed ? (_ = n = !0,
                                    h = "onReverseComplete") : T >= 0 && this._first && (_ = !0),
                                this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : r,
                            0 === t && n)
                                for (s = this._first; s && 0 === s._startTime; )
                                    s._duration || (n = !1),
                                        s = s._next;
                            t = 0,
                            this._initted || (_ = !0)
                        }
                    else if (0 === d && 0 > T && (_ = !0),
                        this._time = this._rawPrevTime = t,
                    this._locked || (this._totalTime = t,
                    0 !== this._repeat && (u = d + this._repeatDelay,
                        this._cycle = this._totalTime / u >> 0,
                    0 !== this._cycle && this._cycle === this._totalTime / u && t >= g && this._cycle--,
                        this._time = this._totalTime - this._cycle * u,
                    this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time),
                        this._time > d ? (this._time = d,
                            t = d + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)),
                    this._hasPause && !this._forcingPlayhead && !e) {
                        if ((t = this._time) >= m)
                            for (s = this._first; s && s._startTime <= t && !f; )
                                s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (f = s),
                                    s = s._next;
                        else
                            for (s = this._last; s && s._startTime >= t && !f; )
                                s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (f = s),
                                    s = s._prev;
                        f && (this._time = t = f._startTime,
                            this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== w && !this._locked) {
                        var b = this._yoyo && 0 != (1 & w)
                            , P = b === (this._yoyo && 0 != (1 & this._cycle))
                            , O = this._totalTime
                            , k = this._cycle
                            , S = this._rawPrevTime
                            , R = this._time;
                        if (this._totalTime = w * d,
                            this._cycle < w ? b = !b : this._totalTime += d,
                            this._time = m,
                            this._rawPrevTime = 0 === d ? T - 1e-4 : T,
                            this._cycle = w,
                            this._locked = !0,
                            m = b ? 0 : d,
                            this.render(m, e, 0 === d),
                        e || this._gc || this.vars.onRepeat && this._callback("onRepeat"),
                        m !== this._time)
                            return;
                        if (P && (m = b ? d + 1e-4 : -1e-4,
                            this.render(m, !0, !1)),
                            this._locked = !1,
                        this._paused && !x)
                            return;
                        this._time = R,
                            this._totalTime = O,
                            this._cycle = k,
                            this._rawPrevTime = S
                    }
                    if (!(this._time !== m && this._first || i || _ || f))
                        return void (g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0),
                    this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0),
                    0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")),
                    (c = this._time) >= m)
                        for (s = this._first; s && (l = s._next,
                        c === this._time && (!this._paused || x)); )
                            (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (f === s && this.pause(),
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                                s = l;
                    else
                        for (s = this._last; s && (l = s._prev,
                        c === this._time && (!this._paused || x)); ) {
                            if (s._active || s._startTime <= m && !s._paused && !s._gc) {
                                if (f === s) {
                                    for (f = s._prev; f && f.endTime() > this._time; )
                                        f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i),
                                            f = f._prev;
                                    f = null,
                                        this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = l
                        }
                    this._onUpdate && (e || (a.length && o(),
                        this._callback("onUpdate"))),
                    h && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (a.length && o(),
                    this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                        this._active = !1),
                    !e && this.vars[h] && this._callback(h)))
                }
                ,
                _.getActive = function(t, e, i) {
                    null == t && (t = !0),
                    null == e && (e = !0),
                    null == i && (i = !1);
                    var s, r, n = [], a = this.getChildren(t, e, i), o = 0, l = a.length;
                    for (s = 0; l > s; s++)
                        r = a[s],
                        r.isActive() && (n[o++] = r);
                    return n
                }
                ,
                _.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(), s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t)
                            return i[e].name;
                    return null
                }
                ,
                _.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                        if (e[i].time < t)
                            return e[i].name;
                    return null
                }
                ,
                _.getLabelsArray = function() {
                    var t, e = [], i = 0;
                    for (t in this._labels)
                        e[i++] = {
                            time: this._labels[t],
                            name: t
                        };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }),
                        e
                }
                ,
                _.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }
                ,
                _.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }
                ,
                _.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this),
                        this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
                        this._totalDuration)
                }
                ,
                _.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(),
                    t > this._duration && (t = this._duration),
                        this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                        this.totalTime(t, e)) : this._time
                }
                ,
                _.repeat = function(t) {
                    return arguments.length ? (this._repeat = t,
                        this._uncache(!0)) : this._repeat
                }
                ,
                _.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t,
                        this._uncache(!0)) : this._repeatDelay
                }
                ,
                _.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t,
                        this) : this._yoyo
                }
                ,
                _.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }
                ,
                s
        }, !0),
        function() {
            var t = 180 / Math.PI
                , e = []
                , i = []
                , s = []
                , r = {}
                , n = _gsScope._gsDefine.globals
                , a = function(t, e, i, s) {
                i === s && (i = s - (s - e) / 1e6),
                t === e && (e = t + (i - t) / 1e6),
                    this.a = t,
                    this.b = e,
                    this.c = i,
                    this.d = s,
                    this.da = s - t,
                    this.ca = i - t,
                    this.ba = e - t
            }
                , o = function(t, e, i, s) {
                var r = {
                    a: t
                }
                    , n = {}
                    , a = {}
                    , o = {
                    c: s
                }
                    , l = (t + e) / 2
                    , h = (e + i) / 2
                    , _ = (i + s) / 2
                    , u = (l + h) / 2
                    , f = (h + _) / 2
                    , c = (f - u) / 8;
                return r.b = l + (t - l) / 4,
                    n.b = u + c,
                    r.c = n.a = (r.b + n.b) / 2,
                    n.c = a.a = (u + f) / 2,
                    a.b = f - c,
                    o.b = _ + (s - _) / 4,
                    a.c = o.a = (a.b + o.b) / 2,
                    [r, n, a, o]
            }
                , l = function(t, r, n, a, l) {
                var h, _, u, f, c, p, d, m, g, v, y, T, x, w = t.length - 1, b = 0, P = t[0].a;
                for (h = 0; w > h; h++)
                    c = t[b],
                        _ = c.a,
                        u = c.d,
                        f = t[b + 1].d,
                        l ? (y = e[h],
                            T = i[h],
                            x = (T + y) * r * .25 / (a ? .5 : s[h] || .5),
                            p = u - (u - _) * (a ? .5 * r : 0 !== y ? x / y : 0),
                            d = u + (f - u) * (a ? .5 * r : 0 !== T ? x / T : 0),
                            m = u - (p + ((d - p) * (3 * y / (y + T) + .5) / 4 || 0))) : (p = u - (u - _) * r * .5,
                            d = u + (f - u) * r * .5,
                            m = u - (p + d) / 2),
                        p += m,
                        d += m,
                        c.c = g = p,
                        c.b = 0 !== h ? P : P = c.a + .6 * (c.c - c.a),
                        c.da = u - _,
                        c.ca = g - _,
                        c.ba = P - _,
                        n ? (v = o(_, P, g, u),
                            t.splice(b, 1, v[0], v[1], v[2], v[3]),
                            b += 4) : b++,
                        P = d;
                c = t[b],
                    c.b = P,
                    c.c = P + .4 * (c.d - P),
                    c.da = c.d - c.a,
                    c.ca = c.c - c.a,
                    c.ba = P - c.a,
                n && (v = o(c.a, P, c.c, c.d),
                    t.splice(b, 1, v[0], v[1], v[2], v[3]))
            }
                , h = function(t, s, r, n) {
                var o, l, h, _, u, f, c = [];
                if (n)
                    for (t = [n].concat(t),
                             l = t.length; --l > -1; )
                        "string" == typeof (f = t[l][s]) && "=" === f.charAt(1) && (t[l][s] = n[s] + Number(f.charAt(0) + f.substr(2)));
                if (0 > (o = t.length - 2))
                    return c[0] = new a(t[0][s],0,0,t[-1 > o ? 0 : 1][s]),
                        c;
                for (l = 0; o > l; l++)
                    h = t[l][s],
                        _ = t[l + 1][s],
                        c[l] = new a(h,0,0,_),
                    r && (u = t[l + 2][s],
                        e[l] = (e[l] || 0) + (_ - h) * (_ - h),
                        i[l] = (i[l] || 0) + (u - _) * (u - _));
                return c[l] = new a(t[l][s],0,0,t[l + 1][s]),
                    c
            }
                , _ = function(t, n, a, o, _, u) {
                var f, c, p, d, m, g, v, y, T = {}, x = [], w = u || t[0];
                _ = "string" == typeof _ ? "," + _ + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                null == n && (n = 1);
                for (c in t[0])
                    x.push(c);
                if (t.length > 1) {
                    for (y = t[t.length - 1],
                             v = !0,
                             f = x.length; --f > -1; )
                        if (c = x[f],
                        Math.abs(w[c] - y[c]) > .05) {
                            v = !1;
                            break
                        }
                    v && (t = t.concat(),
                    u && t.unshift(u),
                        t.push(t[1]),
                        u = t[t.length - 3])
                }
                for (e.length = i.length = s.length = 0,
                         f = x.length; --f > -1; )
                    c = x[f],
                        r[c] = -1 !== _.indexOf("," + c + ","),
                        T[c] = h(t, c, r[c], u);
                for (f = e.length; --f > -1; )
                    e[f] = Math.sqrt(e[f]),
                        i[f] = Math.sqrt(i[f]);
                if (!o) {
                    for (f = x.length; --f > -1; )
                        if (r[c])
                            for (p = T[x[f]],
                                     g = p.length - 1,
                                     d = 0; g > d; d++)
                                m = p[d + 1].da / i[d] + p[d].da / e[d] || 0,
                                    s[d] = (s[d] || 0) + m * m;
                    for (f = s.length; --f > -1; )
                        s[f] = Math.sqrt(s[f])
                }
                for (f = x.length,
                         d = a ? 4 : 1; --f > -1; )
                    c = x[f],
                        p = T[c],
                        l(p, n, a, o, r[c]),
                    v && (p.splice(0, d),
                        p.splice(p.length - d, d));
                return T
            }
                , u = function(t, e, i) {
                e = e || "soft";
                var s, r, n, o, l, h, _, u, f, c, p, d = {}, m = "cubic" === e ? 3 : 2, g = "soft" === e, v = [];
                if (g && i && (t = [i].concat(t)),
                null == t || t.length < m + 1)
                    throw "invalid Bezier data";
                for (f in t[0])
                    v.push(f);
                for (h = v.length; --h > -1; ) {
                    for (f = v[h],
                             d[f] = l = [],
                             c = 0,
                             u = t.length,
                             _ = 0; u > _; _++)
                        s = null == i ? t[_][f] : "string" == typeof (p = t[_][f]) && "=" === p.charAt(1) ? i[f] + Number(p.charAt(0) + p.substr(2)) : Number(p),
                        g && _ > 1 && u - 1 > _ && (l[c++] = (s + l[c - 2]) / 2),
                            l[c++] = s;
                    for (u = c - m + 1,
                             c = 0,
                             _ = 0; u > _; _ += m)
                        s = l[_],
                            r = l[_ + 1],
                            n = l[_ + 2],
                            o = 2 === m ? 0 : l[_ + 3],
                            l[c++] = p = 3 === m ? new a(s,r,n,o) : new a(s,(2 * r + s) / 3,(2 * r + n) / 3,n);
                    l.length = c
                }
                return d
            }
                , f = function(t, e, i) {
                for (var s, r, n, a, o, l, h, _, u, f, c, p = 1 / i, d = t.length; --d > -1; )
                    for (f = t[d],
                             n = f.a,
                             a = f.d - n,
                             o = f.c - n,
                             l = f.b - n,
                             s = r = 0,
                             _ = 1; i >= _; _++)
                        h = p * _,
                            u = 1 - h,
                            s = r - (r = (h * h * a + 3 * u * (h * o + u * l)) * h),
                            c = d * i + _ - 1,
                            e[c] = (e[c] || 0) + s * s
            }
                , c = function(t, e) {
                e = e >> 0 || 6;
                var i, s, r, n, a = [], o = [], l = 0, h = 0, _ = e - 1, u = [], c = [];
                for (i in t)
                    f(t[i], a, e);
                for (r = a.length,
                         s = 0; r > s; s++)
                    l += Math.sqrt(a[s]),
                        n = s % e,
                        c[n] = l,
                    n === _ && (h += l,
                        n = s / e >> 0,
                        u[n] = c,
                        o[n] = h,
                        l = 0,
                        c = []);
                return {
                    length: h,
                    lengths: o,
                    segments: u
                }
            }
                , p = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.7",
                API: 2,
                global: !0,
                init: function(t, e, i) {
                    this._target = t,
                    e instanceof Array && (e = {
                        values: e
                    }),
                        this._func = {},
                        this._mod = {},
                        this._props = [],
                        this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var s, r, n, a, o, l = e.values || [], h = {}, f = l[0], p = e.autoRotate || i.vars.orientToBezier;
                    this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]] : null;
                    for (s in f)
                        this._props.push(s);
                    for (n = this._props.length; --n > -1; )
                        s = this._props[n],
                            this._overwriteProps.push(s),
                            r = this._func[s] = "function" == typeof t[s],
                            h[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]),
                        o || h[s] !== l[0][s] && (o = h);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? _(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : u(l, e.type, h),
                        this._segCount = this._beziers[s].length,
                        this._timeRes) {
                        var d = c(this._beziers, this._timeRes);
                        this._length = d.length,
                            this._lengths = d.lengths,
                            this._segments = d.segments,
                            this._l1 = this._li = this._s1 = this._si = 0,
                            this._l2 = this._lengths[0],
                            this._curSeg = this._segments[0],
                            this._s2 = this._curSeg[0],
                            this._prec = 1 / this._curSeg.length
                    }
                    if (p = this._autoRotate)
                        for (this._initialRotations = [],
                             p[0]instanceof Array || (this._autoRotate = p = [p]),
                                 n = p.length; --n > -1; ) {
                            for (a = 0; 3 > a; a++)
                                s = p[n][a],
                                    this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                            s = p[n][2],
                                this._initialRotations[n] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0,
                                this._overwriteProps.push(s)
                        }
                    return this._startRatio = i.vars.runBackwards ? 1 : 0,
                        !0
                },
                set: function(e) {
                    var i, s, r, n, a, o, l, h, _, u, f = this._segCount, c = this._func, p = this._target, d = e !== this._startRatio;
                    if (this._timeRes) {
                        if (_ = this._lengths,
                            u = this._curSeg,
                            e *= this._length,
                            r = this._li,
                        e > this._l2 && f - 1 > r) {
                            for (h = f - 1; h > r && (this._l2 = _[++r]) <= e; )
                                ;
                            this._l1 = _[r - 1],
                                this._li = r,
                                this._curSeg = u = this._segments[r],
                                this._s2 = u[this._s1 = this._si = 0]
                        } else if (e < this._l1 && r > 0) {
                            for (; r > 0 && (this._l1 = _[--r]) >= e; )
                                ;
                            0 === r && e < this._l1 ? this._l1 = 0 : r++,
                                this._l2 = _[r],
                                this._li = r,
                                this._curSeg = u = this._segments[r],
                                this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                                this._s2 = u[this._si]
                        }
                        if (i = r,
                            e -= this._l1,
                            r = this._si,
                        e > this._s2 && r < u.length - 1) {
                            for (h = u.length - 1; h > r && (this._s2 = u[++r]) <= e; )
                                ;
                            this._s1 = u[r - 1],
                                this._si = r
                        } else if (e < this._s1 && r > 0) {
                            for (; r > 0 && (this._s1 = u[--r]) >= e; )
                                ;
                            0 === r && e < this._s1 ? this._s1 = 0 : r++,
                                this._s2 = u[r],
                                this._si = r
                        }
                        o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else
                        i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0,
                            o = (e - i * (1 / f)) * f;
                    for (s = 1 - o,
                             r = this._props.length; --r > -1; )
                        n = this._props[r],
                            a = this._beziers[n][i],
                            l = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a,
                        this._mod[n] && (l = this._mod[n](l, p)),
                            c[n] ? p[n](l) : p[n] = l;
                    if (this._autoRotate) {
                        var m, g, v, y, T, x, w, b = this._autoRotate;
                        for (r = b.length; --r > -1; )
                            n = b[r][2],
                                x = b[r][3] || 0,
                                w = !0 === b[r][4] ? 1 : t,
                                a = this._beziers[b[r][0]],
                                m = this._beziers[b[r][1]],
                            a && m && (a = a[i],
                                m = m[i],
                                g = a.a + (a.b - a.a) * o,
                                y = a.b + (a.c - a.b) * o,
                                g += (y - g) * o,
                                y += (a.c + (a.d - a.c) * o - y) * o,
                                v = m.a + (m.b - m.a) * o,
                                T = m.b + (m.c - m.b) * o,
                                v += (T - v) * o,
                                T += (m.c + (m.d - m.c) * o - T) * o,
                                l = d ? Math.atan2(T - v, y - g) * w + x : this._initialRotations[r],
                            this._mod[n] && (l = this._mod[n](l, p)),
                                c[n] ? p[n](l) : p[n] = l)
                    }
                }
            })
                , d = p.prototype;
            p.bezierThrough = _,
                p.cubicToQuadratic = o,
                p._autoCSS = !0,
                p.quadraticToCubic = function(t, e, i) {
                    return new a(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
                }
                ,
                p._cssRegister = function() {
                    var t = n.CSSPlugin;
                    if (t) {
                        var e = t._internals
                            , i = e._parseToProxy
                            , s = e._setPluginRatio
                            , r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, n, a, o, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }),
                                    l = new p;
                                var h, _, u, f = e.values, c = f.length - 1, d = [], m = {};
                                if (0 > c)
                                    return o;
                                for (h = 0; c >= h; h++)
                                    u = i(t, f[h], a, o, l, c !== h),
                                        d[h] = u.end;
                                for (_ in e)
                                    m[_] = e[_];
                                return m.values = d,
                                    o = new r(t,"bezier",0,0,u.pt,2),
                                    o.data = u,
                                    o.plugin = l,
                                    o.setRatio = s,
                                0 === m.autoRotate && (m.autoRotate = !0),
                                !m.autoRotate || m.autoRotate instanceof Array || (h = !0 === m.autoRotate ? 0 : Number(m.autoRotate),
                                    m.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x && [["x", "y", "rotation", h, !1]]),
                                m.autoRotate && (a._transform || a._enableTransforms(!1),
                                    u.autoRotate = a._target._gsTransform,
                                    u.proxy.rotation = u.autoRotate.rotation || 0,
                                    a._overwriteProps.push("rotation")),
                                    l._onInitTween(u.proxy, m, a._tween),
                                    o
                            }
                        })
                    }
                }
                ,
                d._mod = function(t) {
                    for (var e, i = this._overwriteProps, s = i.length; --s > -1; )
                        (e = t[i[s]]) && "function" == typeof e && (this._mod[i[s]] = e)
                }
                ,
                d._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e],
                                     delete this._func[e],
                                     i = s.length; --i > -1; )
                                s[i] === e && s.splice(i, 1);
                    if (s = this._autoRotate)
                        for (i = s.length; --i > -1; )
                            t[s[i][2]] && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
        }(),
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, s, r, n, a = function() {
                t.call(this, "css"),
                    this._overwriteProps.length = 0,
                    this.setRatio = a.prototype.setRatio
            }, o = _gsScope._gsDefine.globals, l = {}, h = a.prototype = new t("css");
            h.constructor = a,
                a.version = "1.19.0",
                a.API = 2,
                a.defaultTransformPerspective = 0,
                a.defaultSkewType = "compensated",
                a.defaultSmoothOrigin = !0,
                h = "px",
                a.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
            var _, u, f, c, p, d, m, g, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g, y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, w = /(?:\d|\-|\+|=|#|\.)*/g, b = /opacity *= *([^)]*)/i, P = /opacity:([^;]*)/i, O = /alpha\(opacity *=.+?\)/i, k = /^(rgb|hsl)/, S = /([A-Z])/g, R = /-([a-z])/gi, A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, C = function(t, e) {
                return e.toUpperCase()
            }, D = /(?:Left|Right|Width)/i, M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, z = /,(?=[^\)]*(?:\(|$))/gi, X = /[\s,\(]/i, I = Math.PI / 180, N = 180 / Math.PI, L = {}, E = document, Y = function(t) {
                return E.createElementNS ? E.createElementNS("http://www.w3.org/1999/xhtml", t) : E.createElement(t)
            }, B = Y("div"), j = Y("img"), U = a._internals = {
                _specialProps: l
            }, V = navigator.userAgent, q = function() {
                var t = V.indexOf("Android")
                    , e = Y("a");
                return f = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === t || Number(V.substr(t + 8, 1)) > 3),
                    p = f && Number(V.substr(V.indexOf("Version/") + 8, 1)) < 6,
                    c = -1 !== V.indexOf("Firefox"),
                (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (d = parseFloat(RegExp.$1)),
                !!e && (e.style.cssText = "top:1px;opacity:.55;",
                    /^0.55/.test(e.style.opacity))
            }(), W = function(t) {
                return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, Z = function(t) {
                window.console && console.log(t)
            }, G = "", $ = "", Q = function(t, e) {
                e = e || B;
                var i, s, r = e.style;
                if (void 0 !== r[t])
                    return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1),
                         i = ["O", "Moz", "ms", "Ms", "Webkit"],
                         s = 5; --s > -1 && void 0 === r[i[s] + t]; )
                    ;
                return s >= 0 ? ($ = 3 === s ? "ms" : i[s],
                    G = "-" + $.toLowerCase() + "-",
                $ + t) : null
            }, H = E.defaultView ? E.defaultView.getComputedStyle : function() {}
                , K = a.getStyle = function(t, e, i, s, r) {
                var n;
                return q || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || H(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]),
                    null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : W(t)
            }
                , J = U.convertToPixels = function(t, i, s, r, n) {
                if ("px" === r || !r)
                    return s;
                if ("auto" === r || !s)
                    return 0;
                var o, l, h, _ = D.test(i), u = t, f = B.style, c = 0 > s, p = 1 === s;
                if (c && (s = -s),
                p && (s *= 100),
                "%" === r && -1 !== i.indexOf("border"))
                    o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
                else {
                    if (f.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;",
                    "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r)
                        f[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                    else {
                        if (u = t.parentNode || E.body,
                            l = u._gsCache,
                            h = e.ticker.frame,
                        l && _ && l.time === h)
                            return l.width * s / 100;
                        f[_ ? "width" : "height"] = s + r
                    }
                    u.appendChild(B),
                        o = parseFloat(B[_ ? "offsetWidth" : "offsetHeight"]),
                        u.removeChild(B),
                    _ && "%" === r && !1 !== a.cacheWidths && (l = u._gsCache = u._gsCache || {},
                        l.time = h,
                        l.width = o / s * 100),
                    0 !== o || n || (o = J(t, i, s, r, !0))
                }
                return p && (o /= 100),
                    c ? -o : o
            }
                , tt = U.calculateOffset = function(t, e, i) {
                if ("absolute" !== K(t, "position", i))
                    return 0;
                var s = "left" === e ? "Left" : "Top"
                    , r = K(t, "margin" + s, i);
                return t["offset" + s] - (J(t, e, parseFloat(r), r.replace(w, "")) || 0)
            }
                , et = function(t, e) {
                var i, s, r, n = {};
                if (e = e || H(t, null))
                    if (i = e.length)
                        for (; --i > -1; )
                            r = e[i],
                            (-1 === r.indexOf("-transform") || Rt === r) && (n[r.replace(R, C)] = e.getPropertyValue(r));
                    else
                        for (i in e)
                            (-1 === i.indexOf("Transform") || St === i) && (n[i] = e[i]);
                else if (e = t.currentStyle || t.style)
                    for (i in e)
                        "string" == typeof i && void 0 === n[i] && (n[i.replace(R, C)] = e[i]);
                return q || (n.opacity = W(t)),
                    s = Bt(t, e, !1),
                    n.rotation = s.rotation,
                    n.skewX = s.skewX,
                    n.scaleX = s.scaleX,
                    n.scaleY = s.scaleY,
                    n.x = s.x,
                    n.y = s.y,
                Ct && (n.z = s.z,
                    n.rotationX = s.rotationX,
                    n.rotationY = s.rotationY,
                    n.scaleZ = s.scaleZ),
                n.filters && delete n.filters,
                    n
            }, it = function(t, e, i, s, r) {
                var n, a, o, l = {}, h = t.style;
                for (a in i)
                    "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(x, "") ? n : 0 : tt(t, a),
                    void 0 !== h[a] && (o = new gt(h,a,h[a],o)));
                if (s)
                    for (a in s)
                        "className" !== a && (l[a] = s[a]);
                return {
                    difs: l,
                    firstMPT: o
                }
            }, st = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            }, rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"], nt = function(t, e, i) {
                if ("svg" === (t.nodeName + "").toLowerCase())
                    return (i || H(t))[e] || 0;
                if (t.getBBox && Lt(t))
                    return t.getBBox()[e] || 0;
                var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
                    , r = st[e]
                    , n = r.length;
                for (i = i || H(t, null); --n > -1; )
                    s -= parseFloat(K(t, "padding" + r[n], i, !0)) || 0,
                        s -= parseFloat(K(t, "border" + r[n] + "Width", i, !0)) || 0;
                return s
            }, at = function(t, e) {
                if ("contain" === t || "auto" === t || "auto auto" === t)
                    return t + " ";
                (null == t || "" === t) && (t = "0 0");
                var i, s = t.split(" "), r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : s[0], n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : s[1];
                if (s.length > 3 && !e) {
                    for (s = t.split(", ").join(",").split(","),
                             t = [],
                             i = 0; i < s.length; i++)
                        t.push(at(s[i]));
                    return t.join(",")
                }
                return null == n ? n = "center" === r ? "50%" : "0" : "center" === n && (n = "50%"),
                ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"),
                    t = r + " " + n + (s.length > 2 ? " " + s[2] : ""),
                e && (e.oxp = -1 !== r.indexOf("%"),
                    e.oyp = -1 !== n.indexOf("%"),
                    e.oxr = "=" === r.charAt(1),
                    e.oyr = "=" === n.charAt(1),
                    e.ox = parseFloat(r.replace(x, "")),
                    e.oy = parseFloat(n.replace(x, "")),
                    e.v = t),
                e || t
            }, ot = function(t, e) {
                return "function" == typeof t && (t = t(g, m)),
                    "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
            }, lt = function(t, e) {
                return "function" == typeof t && (t = t(g, m)),
                    null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
            }, ht = function(t, e, i, s) {
                var r, n, a, o, l;
                return "function" == typeof t && (t = t(g, m)),
                    null == t ? o = e : "number" == typeof t ? o = t : (r = 360,
                        n = t.split("_"),
                        l = "=" === t.charAt(1),
                        a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (l ? 0 : e),
                    n.length && (s && (s[i] = e + a),
                    -1 !== t.indexOf("short") && (a %= r) !== a % (r / 2) && (a = 0 > a ? a + r : a - r),
                        -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)),
                        o = e + a),
                1e-6 > o && o > -1e-6 && (o = 0),
                    o
            }, _t = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, ut = function(t, e, i) {
                return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t,
                255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
            }, ft = a.parseColor = function(t, e) {
                var i, s, r, n, a, o, l, h, _, u, f;
                if (t)
                    if ("number" == typeof t)
                        i = [t >> 16, t >> 8 & 255, 255 & t];
                    else {
                        if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                            _t[t])
                            i = _t[t];
                        else if ("#" === t.charAt(0))
                            4 === t.length && (s = t.charAt(1),
                                r = t.charAt(2),
                                n = t.charAt(3),
                                t = "#" + s + s + r + r + n + n),
                                t = parseInt(t.substr(1), 16),
                                i = [t >> 16, t >> 8 & 255, 255 & t];
                        else if ("hsl" === t.substr(0, 3))
                            if (i = f = t.match(v),
                                e) {
                                if (-1 !== t.indexOf("="))
                                    return t.match(y)
                            } else
                                a = Number(i[0]) % 360 / 360,
                                    o = Number(i[1]) / 100,
                                    l = Number(i[2]) / 100,
                                    r = .5 >= l ? l * (o + 1) : l + o - l * o,
                                    s = 2 * l - r,
                                i.length > 3 && (i[3] = Number(t[3])),
                                    i[0] = ut(a + 1 / 3, s, r),
                                    i[1] = ut(a, s, r),
                                    i[2] = ut(a - 1 / 3, s, r);
                        else
                            i = t.match(v) || _t.transparent;
                        i[0] = Number(i[0]),
                            i[1] = Number(i[1]),
                            i[2] = Number(i[2]),
                        i.length > 3 && (i[3] = Number(i[3]))
                    }
                else
                    i = _t.black;
                return e && !f && (s = i[0] / 255,
                    r = i[1] / 255,
                    n = i[2] / 255,
                    h = Math.max(s, r, n),
                    _ = Math.min(s, r, n),
                    l = (h + _) / 2,
                    h === _ ? a = o = 0 : (u = h - _,
                        o = l > .5 ? u / (2 - h - _) : u / (h + _),
                        a = h === s ? (r - n) / u + (n > r ? 6 : 0) : h === r ? (n - s) / u + 2 : (s - r) / u + 4,
                        a *= 60),
                    i[0] = a + .5 | 0,
                    i[1] = 100 * o + .5 | 0,
                    i[2] = 100 * l + .5 | 0),
                    i
            }
                , ct = function(t, e) {
                var i, s, r, n = t.match(pt) || [], a = 0, o = n.length ? "" : t;
                for (i = 0; i < n.length; i++)
                    s = n[i],
                        r = t.substr(a, t.indexOf(s, a) - a),
                        a += r.length + s.length,
                        s = ft(s, e),
                    3 === s.length && s.push(1),
                        o += r + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                return o + t.substr(a)
            }, pt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (h in _t)
                pt += "|" + h + "\\b";
            pt = new RegExp(pt + ")","gi"),
                a.colorStringFilter = function(t) {
                    var e, i = t[0] + t[1];
                    pt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
                        t[0] = ct(t[0], e),
                        t[1] = ct(t[1], e)),
                        pt.lastIndex = 0
                }
                ,
            e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
            var dt = function(t, e, i, s) {
                if (null == t)
                    return function(t) {
                        return t
                    }
                        ;
                var r, n = e ? (t.match(pt) || [""])[0] : "", a = t.split(n).join("").match(T) || [], o = t.substr(0, t.indexOf(a[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", h = -1 !== t.indexOf(" ") ? " " : ",", _ = a.length, u = _ > 0 ? a[0].replace(v, "") : "";
                return _ ? r = e ? function(t) {
                        var e, f, c, p;
                        if ("number" == typeof t)
                            t += u;
                        else if (s && z.test(t)) {
                            for (p = t.replace(z, "|").split("|"),
                                     c = 0; c < p.length; c++)
                                p[c] = r(p[c]);
                            return p.join(",")
                        }
                        if (e = (t.match(pt) || [n])[0],
                            f = t.split(e).join("").match(T) || [],
                            c = f.length,
                        _ > c--)
                            for (; ++c < _; )
                                f[c] = i ? f[(c - 1) / 2 | 0] : a[c];
                        return o + f.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    }
                    : function(t) {
                        var e, n, f;
                        if ("number" == typeof t)
                            t += u;
                        else if (s && z.test(t)) {
                            for (n = t.replace(z, "|").split("|"),
                                     f = 0; f < n.length; f++)
                                n[f] = r(n[f]);
                            return n.join(",")
                        }
                        if (e = t.match(T) || [],
                            f = e.length,
                        _ > f--)
                            for (; ++f < _; )
                                e[f] = i ? e[(f - 1) / 2 | 0] : a[f];
                        return o + e.join(h) + l
                    }
                    : function(t) {
                        return t
                    }
            }
                , mt = function(t) {
                return t = t.split(","),
                    function(e, i, s, r, n, a, o) {
                        var l, h = (i + "").split(" ");
                        for (o = {},
                                 l = 0; 4 > l; l++)
                            o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                        return r.parse(e, o, n, a)
                    }
            }
                , gt = (U._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, s, r, n, a = this.data, o = a.proxy, l = a.firstMPT; l; )
                        e = o[l.v],
                            l.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0),
                            l.t[l.p] = e,
                            l = l._next;
                    if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation),
                    1 === t || 0 === t)
                        for (l = a.firstMPT,
                                 n = 1 === t ? "e" : "b"; l; ) {
                            if (i = l.t,
                                i.type) {
                                if (1 === i.type) {
                                    for (r = i.xs0 + i.s + i.xs1,
                                             s = 1; s < i.l; s++)
                                        r += i["xn" + s] + i["xs" + (s + 1)];
                                    i[n] = r
                                }
                            } else
                                i[n] = i.s + i.xs0;
                            l = l._next
                        }
                }
                    ,
                    function(t, e, i, s, r) {
                        this.t = t,
                            this.p = e,
                            this.v = i,
                            this.r = r,
                        s && (s._prev = this,
                            this._next = s)
                    }
            )
                , vt = (U._parseToProxy = function(t, e, i, s, r, n) {
                    var a, o, l, h, _, u = s, f = {}, c = {}, p = i._transform, d = L;
                    for (i._transform = null,
                             L = e,
                             s = _ = i.parse(t, e, s, r),
                             L = d,
                         n && (i._transform = p,
                         u && (u._prev = null,
                         u._prev && (u._prev._next = null))); s && s !== u; ) {
                        if (s.type <= 1 && (o = s.p,
                            c[o] = s.s + s.c,
                            f[o] = s.s,
                        n || (h = new gt(s,"s",o,h,s.r),
                            s.c = 0),
                        1 === s.type))
                            for (a = s.l; --a > 0; )
                                l = "xn" + a,
                                    o = s.p + "_" + l,
                                    c[o] = s.data[l],
                                    f[o] = s[l],
                                n || (h = new gt(s,l,o,h,s.rxp[l]));
                        s = s._next
                    }
                    return {
                        proxy: f,
                        end: c,
                        firstMPT: h,
                        pt: _
                    }
                }
                    ,
                    U.CSSPropTween = function(t, e, s, r, a, o, l, h, _, u, f) {
                        this.t = t,
                            this.p = e,
                            this.s = s,
                            this.c = r,
                            this.n = l || e,
                        t instanceof vt || n.push(this.n),
                            this.r = h,
                            this.type = o || 0,
                        _ && (this.pr = _,
                            i = !0),
                            this.b = void 0 === u ? s : u,
                            this.e = void 0 === f ? s + r : f,
                        a && (this._next = a,
                            a._prev = this)
                    }
            )
                , yt = function(t, e, i, s, r, n) {
                var a = new vt(t,e,i,s - i,r,-1,n);
                return a.b = i,
                    a.e = a.xs0 = s,
                    a
            }
                , Tt = a.parseComplex = function(t, e, i, s, r, n, o, l, h, u) {
                i = i || n || "",
                "function" == typeof s && (s = s(g, m)),
                    o = new vt(t,e,0,0,o,u ? 2 : 1,null,!1,l,i,s),
                    s += "",
                r && pt.test(s + i) && (s = [i, s],
                    a.colorStringFilter(s),
                    i = s[0],
                    s = s[1]);
                var f, c, p, d, T, x, w, b, P, O, k, S, R, A = i.split(", ").join(",").split(" "), C = s.split(", ").join(",").split(" "), D = A.length, M = !1 !== _;
                for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (A = A.join(" ").replace(z, ", ").split(" "),
                    C = C.join(" ").replace(z, ", ").split(" "),
                    D = A.length),
                     D !== C.length && (A = (n || "").split(" "),
                         D = A.length),
                         o.plugin = h,
                         o.setRatio = u,
                         pt.lastIndex = 0,
                         f = 0; D > f; f++)
                    if (d = A[f],
                        T = C[f],
                    (b = parseFloat(d)) || 0 === b)
                        o.appendXtra("", b, ot(T, b), T.replace(y, ""), M && -1 !== T.indexOf("px"), !0);
                    else if (r && pt.test(d))
                        S = T.indexOf(")") + 1,
                            S = ")" + (S ? T.substr(S) : ""),
                            R = -1 !== T.indexOf("hsl") && q,
                            d = ft(d, R),
                            T = ft(T, R),
                            P = d.length + T.length > 6,
                            P && !q && 0 === T[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent",
                                o.e = o.e.split(C[f]).join("transparent")) : (q || (P = !1),
                                R ? o.appendXtra(P ? "hsla(" : "hsl(", d[0], ot(T[0], d[0]), ",", !1, !0).appendXtra("", d[1], ot(T[1], d[1]), "%,", !1).appendXtra("", d[2], ot(T[2], d[2]), P ? "%," : "%" + S, !1) : o.appendXtra(P ? "rgba(" : "rgb(", d[0], T[0] - d[0], ",", !0, !0).appendXtra("", d[1], T[1] - d[1], ",", !0).appendXtra("", d[2], T[2] - d[2], P ? "," : S, !0),
                            P && (d = d.length < 4 ? 1 : d[3],
                                o.appendXtra("", d, (T.length < 4 ? 1 : T[3]) - d, S, !1))),
                            pt.lastIndex = 0;
                    else if (x = d.match(v)) {
                        if (!(w = T.match(y)) || w.length !== x.length)
                            return o;
                        for (p = 0,
                                 c = 0; c < x.length; c++)
                            k = x[c],
                                O = d.indexOf(k, p),
                                o.appendXtra(d.substr(p, O - p), Number(k), ot(w[c], k), "", M && "px" === d.substr(O + k.length, 2), 0 === c),
                                p = O + k.length;
                        o["xs" + o.l] += d.substr(p)
                    } else
                        o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + T : T;
                if (-1 !== s.indexOf("=") && o.data) {
                    for (S = o.xs0 + o.data.s,
                             f = 1; f < o.l; f++)
                        S += o["xs" + f] + o.data["xn" + f];
                    o.e = S + o["xs" + f]
                }
                return o.l || (o.type = -1,
                    o.xs0 = o.e),
                o.xfirst || o
            }
                , xt = 9;
            for (h = vt.prototype,
                     h.l = h.pr = 0; --xt > 0; )
                h["xn" + xt] = 0,
                    h["xs" + xt] = "";
            h.xs0 = "",
                h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null,
                h.appendXtra = function(t, e, i, s, r, n) {
                    var a = this
                        , o = a.l;
                    return a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || "",
                        i || 0 === o || a.plugin ? (a.l++,
                            a.type = a.setRatio ? 2 : 1,
                            a["xs" + a.l] = s || "",
                            o > 0 ? (a.data["xn" + o] = e + i,
                                a.rxp["xn" + o] = r,
                                a["xn" + o] = e,
                            a.plugin || (a.xfirst = new vt(a,"xn" + o,e,i,a.xfirst || a,0,a.n,r,a.pr),
                                a.xfirst.xs0 = 0),
                                a) : (a.data = {
                                s: e + i
                            },
                                a.rxp = {},
                                a.s = e,
                                a.c = i,
                                a.r = r,
                                a)) : (a["xs" + o] += e + (s || ""),
                            a)
                }
            ;
            var wt = function(t, e) {
                    e = e || {},
                        this.p = e.prefix ? Q(t) || t : t,
                        l[t] = l[this.p] = this,
                        this.format = e.formatter || dt(e.defaultValue, e.color, e.collapsible, e.multi),
                    e.parser && (this.parse = e.parser),
                        this.clrs = e.color,
                        this.multi = e.multi,
                        this.keyword = e.keyword,
                        this.dflt = e.defaultValue,
                        this.pr = e.priority || 0
                }
                , bt = U._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var s, r = t.split(","), n = e.defaultValue;
                    for (i = i || [n],
                             s = 0; s < r.length; s++)
                        e.prefix = 0 === s && e.prefix,
                            e.defaultValue = i[s] || n,
                            new wt(r[s],e)
                }
                , Pt = U._registerPluginProp = function(t) {
                    if (!l[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        bt(t, {
                            parser: function(t, i, s, r, n, a, h) {
                                var _ = o.com.greensock.plugins[e];
                                return _ ? (_._cssRegister(),
                                    l[s].parse(t, i, s, r, n, a, h)) : (Z("Error: " + e + " js file not loaded."),
                                    n)
                            }
                        })
                    }
                }
            ;
            h = wt.prototype,
                h.parseComplex = function(t, e, i, s, r, n) {
                    var a, o, l, h, _, u, f = this.keyword;
                    if (this.multi && (z.test(i) || z.test(e) ? (o = e.replace(z, "|").split("|"),
                        l = i.replace(z, "|").split("|")) : f && (o = [e],
                        l = [i])),
                        l) {
                        for (h = l.length > o.length ? l.length : o.length,
                                 a = 0; h > a; a++)
                            e = o[a] = o[a] || this.dflt,
                                i = l[a] = l[a] || this.dflt,
                            f && (_ = e.indexOf(f),
                                u = i.indexOf(f),
                            _ !== u && (-1 === u ? o[a] = o[a].split(f).join("") : -1 === _ && (o[a] += " " + f)));
                        e = o.join(", "),
                            i = l.join(", ")
                    }
                    return Tt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }
                ,
                h.parse = function(t, e, i, s, n, a, o) {
                    return this.parseComplex(t.style, this.format(K(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                }
                ,
                a.registerSpecialProp = function(t, e, i) {
                    bt(t, {
                        parser: function(t, s, r, n, a, o, l) {
                            var h = new vt(t,r,0,0,a,2,r,!1,i);
                            return h.plugin = o,
                                h.setRatio = e(t, s, n._tween, r),
                                h
                        },
                        priority: i
                    })
                }
                ,
                a.useSVGTransformAttr = f || c;
            var Ot, kt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), St = Q("transform"), Rt = G + "transform", At = Q("transformOrigin"), Ct = null !== Q("perspective"), Dt = U.Transform = function() {
                    this.perspective = parseFloat(a.defaultTransformPerspective) || 0,
                        this.force3D = !(!1 === a.defaultForce3D || !Ct) && (a.defaultForce3D || "auto")
                }
                , Mt = window.SVGElement, Ft = function(t, e, i) {
                    var s, r = E.createElementNS("http://www.w3.org/2000/svg", t), n = /([a-z])([A-Z])/g;
                    for (s in i)
                        r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
                    return e.appendChild(r),
                        r
                }, zt = E.documentElement, Xt = function() {
                    var t, e, i, s = d || /Android/i.test(V) && !window.chrome;
                    return E.createElementNS && !s && (t = Ft("svg", zt),
                        e = Ft("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }),
                        i = e.getBoundingClientRect().width,
                        e.style[At] = "50% 50%",
                        e.style[St] = "scaleX(0.5)",
                        s = i === e.getBoundingClientRect().width && !(c && Ct),
                        zt.removeChild(t)),
                        s
                }(), It = function(t, e, i, s, r, n) {
                    var o, l, h, _, u, f, c, p, d, m, g, v, y, T, x = t._gsTransform, w = Yt(t, !0);
                    x && (y = x.xOrigin,
                        T = x.yOrigin),
                    (!s || (o = s.split(" ")).length < 2) && (c = t.getBBox(),
                        e = at(e).split(" "),
                        o = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]),
                        i.xOrigin = _ = parseFloat(o[0]),
                        i.yOrigin = u = parseFloat(o[1]),
                    s && w !== Et && (f = w[0],
                        c = w[1],
                        p = w[2],
                        d = w[3],
                        m = w[4],
                        g = w[5],
                        v = f * d - c * p,
                        l = _ * (d / v) + u * (-p / v) + (p * g - d * m) / v,
                        h = _ * (-c / v) + u * (f / v) - (f * g - c * m) / v,
                        _ = i.xOrigin = o[0] = l,
                        u = i.yOrigin = o[1] = h),
                    x && (n && (i.xOffset = x.xOffset,
                        i.yOffset = x.yOffset,
                        x = i),
                        r || !1 !== r && !1 !== a.defaultSmoothOrigin ? (l = _ - y,
                            h = u - T,
                            x.xOffset += l * w[0] + h * w[2] - l,
                            x.yOffset += l * w[1] + h * w[3] - h) : x.xOffset = x.yOffset = 0),
                    n || t.setAttribute("data-svg-origin", o.join(" "))
                }, Nt = function(t) {
                    try {
                        return t.getBBox()
                    } catch (t) {}
                }, Lt = function(t) {
                    return !!(Mt && t.getBBox && t.getCTM && Nt(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                }, Et = [1, 0, 0, 1, 0, 0], Yt = function(t, e) {
                    var i, s, r, n, a, o, l = t._gsTransform || new Dt, h = t.style;
                    if (St ? s = K(t, Rt, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(M),
                        s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), l.x || 0, l.y || 0].join(",") : ""),
                        i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s,
                    i && St && ((o = "none" === H(t).display) || !t.parentNode) && (o && (n = h.display,
                        h.display = "block"),
                    t.parentNode || (a = 1,
                        zt.appendChild(t)),
                        s = K(t, Rt, null, !0),
                        i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s,
                        n ? h.display = n : o && qt(h, "display"),
                    a && zt.removeChild(t)),
                    (l.svg || t.getBBox && Lt(t)) && (i && -1 !== (h[St] + "").indexOf("matrix") && (s = h[St],
                        i = 0),
                        r = t.getAttribute("transform"),
                    i && r && (-1 !== r.indexOf("matrix") ? (s = r,
                        i = 0) : -1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
                        i = 0))),
                        i)
                        return Et;
                    for (r = (s || "").match(v) || [],
                             xt = r.length; --xt > -1; )
                        n = Number(r[xt]),
                            r[xt] = (a = n - (n |= 0)) ? (1e5 * a + (0 > a ? -.5 : .5) | 0) / 1e5 + n : n;
                    return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                }, Bt = U.getTransform = function(t, i, s, r) {
                    if (t._gsTransform && s && !r)
                        return t._gsTransform;
                    var n, o, l, h, _, u, f = s ? t._gsTransform || new Dt : new Dt, c = f.scaleX < 0, p = 1e5, d = Ct ? parseFloat(K(t, At, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0, m = parseFloat(a.defaultTransformPerspective) || 0;
                    if (f.svg = !(!t.getBBox || !Lt(t)),
                    f.svg && (It(t, K(t, At, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")),
                        Ot = a.useSVGTransformAttr || Xt),
                    (n = Yt(t)) !== Et) {
                        if (16 === n.length) {
                            var g, v, y, T, x, w = n[0], b = n[1], P = n[2], O = n[3], k = n[4], S = n[5], R = n[6], A = n[7], C = n[8], D = n[9], M = n[10], F = n[12], z = n[13], X = n[14], I = n[11], L = Math.atan2(R, M);
                            f.zOrigin && (X = -f.zOrigin,
                                F = C * X - n[12],
                                z = D * X - n[13],
                                X = M * X + f.zOrigin - n[14]),
                                f.rotationX = L * N,
                            L && (T = Math.cos(-L),
                                x = Math.sin(-L),
                                g = k * T + C * x,
                                v = S * T + D * x,
                                y = R * T + M * x,
                                C = k * -x + C * T,
                                D = S * -x + D * T,
                                M = R * -x + M * T,
                                I = A * -x + I * T,
                                k = g,
                                S = v,
                                R = y),
                                L = Math.atan2(-P, M),
                                f.rotationY = L * N,
                            L && (T = Math.cos(-L),
                                x = Math.sin(-L),
                                g = w * T - C * x,
                                v = b * T - D * x,
                                y = P * T - M * x,
                                D = b * x + D * T,
                                M = P * x + M * T,
                                I = O * x + I * T,
                                w = g,
                                b = v,
                                P = y),
                                L = Math.atan2(b, w),
                                f.rotation = L * N,
                            L && (T = Math.cos(-L),
                                x = Math.sin(-L),
                                w = w * T + k * x,
                                v = b * T + S * x,
                                S = b * -x + S * T,
                                R = P * -x + R * T,
                                b = v),
                            f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0,
                                f.rotationY = 180 - f.rotationY),
                                f.scaleX = (Math.sqrt(w * w + b * b) * p + .5 | 0) / p,
                                f.scaleY = (Math.sqrt(S * S + D * D) * p + .5 | 0) / p,
                                f.scaleZ = (Math.sqrt(R * R + M * M) * p + .5 | 0) / p,
                                f.rotationX || f.rotationY ? f.skewX = 0 : (f.skewX = k || S ? Math.atan2(k, S) * N + f.rotation : f.skewX || 0,
                                Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (c ? (f.scaleX *= -1,
                                    f.skewX += f.rotation <= 0 ? 180 : -180,
                                    f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1,
                                    f.skewX += f.skewX <= 0 ? 180 : -180))),
                                f.perspective = I ? 1 / (0 > I ? -I : I) : 0,
                                f.x = F,
                                f.y = z,
                                f.z = X,
                            f.svg && (f.x -= f.xOrigin - (f.xOrigin * w - f.yOrigin * k),
                                f.y -= f.yOrigin - (f.yOrigin * b - f.xOrigin * S))
                        } else if (!Ct || r || !n.length || f.x !== n[4] || f.y !== n[5] || !f.rotationX && !f.rotationY) {
                            var E = n.length >= 6
                                , Y = E ? n[0] : 1
                                , B = n[1] || 0
                                , j = n[2] || 0
                                , U = E ? n[3] : 1;
                            f.x = n[4] || 0,
                                f.y = n[5] || 0,
                                l = Math.sqrt(Y * Y + B * B),
                                h = Math.sqrt(U * U + j * j),
                                _ = Y || B ? Math.atan2(B, Y) * N : f.rotation || 0,
                                u = j || U ? Math.atan2(j, U) * N + _ : f.skewX || 0,
                            Math.abs(u) > 90 && Math.abs(u) < 270 && (c ? (l *= -1,
                                u += 0 >= _ ? 180 : -180,
                                _ += 0 >= _ ? 180 : -180) : (h *= -1,
                                u += 0 >= u ? 180 : -180)),
                                f.scaleX = l,
                                f.scaleY = h,
                                f.rotation = _,
                                f.skewX = u,
                            Ct && (f.rotationX = f.rotationY = f.z = 0,
                                f.perspective = m,
                                f.scaleZ = 1),
                            f.svg && (f.x -= f.xOrigin - (f.xOrigin * Y + f.yOrigin * j),
                                f.y -= f.yOrigin - (f.xOrigin * B + f.yOrigin * U))
                        }
                        f.zOrigin = d;
                        for (o in f)
                            f[o] < 2e-5 && f[o] > -2e-5 && (f[o] = 0)
                    }
                    return s && (t._gsTransform = f,
                    f.svg && (Ot && t.style[St] ? e.delayedCall(.001, function() {
                        qt(t.style, St)
                    }) : !Ot && t.getAttribute("transform") && e.delayedCall(.001, function() {
                        t.removeAttribute("transform")
                    }))),
                        f
                }
                , jt = function(t) {
                    var e, i, s = this.data, r = -s.rotation * I, n = r + s.skewX * I, a = 1e5, o = (Math.cos(r) * s.scaleX * a | 0) / a, l = (Math.sin(r) * s.scaleX * a | 0) / a, h = (Math.sin(n) * -s.scaleY * a | 0) / a, _ = (Math.cos(n) * s.scaleY * a | 0) / a, u = this.t.style, f = this.t.currentStyle;
                    if (f) {
                        i = l,
                            l = -h,
                            h = -i,
                            e = f.filter,
                            u.filter = "";
                        var c, p, m = this.t.offsetWidth, g = this.t.offsetHeight, v = "absolute" !== f.position, y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + _, T = s.x + m * s.xPercent / 100, x = s.y + g * s.yPercent / 100;
                        if (null != s.ox && (c = (s.oxp ? m * s.ox * .01 : s.ox) - m / 2,
                            p = (s.oyp ? g * s.oy * .01 : s.oy) - g / 2,
                            T += c - (c * o + p * l),
                            x += p - (c * h + p * _)),
                            v ? (c = m / 2,
                                p = g / 2,
                                y += ", Dx=" + (c - (c * o + p * l) + T) + ", Dy=" + (p - (c * h + p * _) + x) + ")") : y += ", sizingMethod='auto expand')",
                            -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(F, y) : u.filter = y + " " + e,
                        (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")),
                            !v) {
                            var P, O, k, S = 8 > d ? 1 : -1;
                            for (c = s.ieOffsetX || 0,
                                     p = s.ieOffsetY || 0,
                                     s.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + T),
                                     s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > h ? -h : h) * m)) / 2 + x),
                                     xt = 0; 4 > xt; xt++)
                                O = rt[xt],
                                    P = f[O],
                                    i = -1 !== P.indexOf("px") ? parseFloat(P) : J(this.t, O, parseFloat(P), P.replace(w, "")) || 0,
                                    k = i !== s[O] ? 2 > xt ? -s.ieOffsetX : -s.ieOffsetY : 2 > xt ? c - s.ieOffsetX : p - s.ieOffsetY,
                                    u[O] = (s[O] = Math.round(i - k * (0 === xt || 2 === xt ? 1 : S))) + "px"
                        }
                    }
                }, Ut = U.set3DTransformRatio = U.setTransformRatio = function(t) {
                    var e, i, s, r, n, a, o, l, h, _, u, f, p, d, m, g, v, y, T, x, w, b, P, O = this.data, k = this.t.style, S = O.rotation, R = O.rotationX, A = O.rotationY, C = O.scaleX, D = O.scaleY, M = O.scaleZ, F = O.x, z = O.y, X = O.z, N = O.svg, L = O.perspective, E = O.force3D;
                    if (((1 === t || 0 === t) && "auto" === E && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !E) && !X && !L && !A && !R && 1 === M || Ot && N || !Ct)
                        return void (S || O.skewX || N ? (S *= I,
                            b = O.skewX * I,
                            P = 1e5,
                            e = Math.cos(S) * C,
                            r = Math.sin(S) * C,
                            i = Math.sin(S - b) * -D,
                            n = Math.cos(S - b) * D,
                        b && "simple" === O.skewType && (v = Math.tan(b - O.skewY * I),
                            v = Math.sqrt(1 + v * v),
                            i *= v,
                            n *= v,
                        O.skewY && (v = Math.tan(O.skewY * I),
                            v = Math.sqrt(1 + v * v),
                            e *= v,
                            r *= v)),
                        N && (F += O.xOrigin - (O.xOrigin * e + O.yOrigin * i) + O.xOffset,
                            z += O.yOrigin - (O.xOrigin * r + O.yOrigin * n) + O.yOffset,
                        Ot && (O.xPercent || O.yPercent) && (d = this.t.getBBox(),
                            F += .01 * O.xPercent * d.width,
                            z += .01 * O.yPercent * d.height),
                            d = 1e-6,
                        d > F && F > -d && (F = 0),
                        d > z && z > -d && (z = 0)),
                            T = (e * P | 0) / P + "," + (r * P | 0) / P + "," + (i * P | 0) / P + "," + (n * P | 0) / P + "," + F + "," + z + ")",
                            N && Ot ? this.t.setAttribute("transform", "matrix(" + T) : k[St] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + T) : k[St] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + D + "," + F + "," + z + ")");
                    if (c && (d = 1e-4,
                    d > C && C > -d && (C = M = 2e-5),
                    d > D && D > -d && (D = M = 2e-5),
                    !L || O.z || O.rotationX || O.rotationY || (L = 0)),
                    S || O.skewX)
                        S *= I,
                            m = e = Math.cos(S),
                            g = r = Math.sin(S),
                        O.skewX && (S -= O.skewX * I,
                            m = Math.cos(S),
                            g = Math.sin(S),
                        "simple" === O.skewType && (v = Math.tan((O.skewX - O.skewY) * I),
                            v = Math.sqrt(1 + v * v),
                            m *= v,
                            g *= v,
                        O.skewY && (v = Math.tan(O.skewY * I),
                            v = Math.sqrt(1 + v * v),
                            e *= v,
                            r *= v))),
                            i = -g,
                            n = m;
                    else {
                        if (!(A || R || 1 !== M || L || N))
                            return void (k[St] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) translate3d(" : "translate3d(") + F + "px," + z + "px," + X + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""));
                        e = n = 1,
                            i = r = 0
                    }
                    h = 1,
                        s = a = o = l = _ = u = 0,
                        f = L ? -1 / L : 0,
                        p = O.zOrigin,
                        d = 1e-6,
                        x = ",",
                        w = "0",
                        S = A * I,
                    S && (m = Math.cos(S),
                        g = Math.sin(S),
                        o = -g,
                        _ = f * -g,
                        s = e * g,
                        a = r * g,
                        h = m,
                        f *= m,
                        e *= m,
                        r *= m),
                        S = R * I,
                    S && (m = Math.cos(S),
                        g = Math.sin(S),
                        v = i * m + s * g,
                        y = n * m + a * g,
                        l = h * g,
                        u = f * g,
                        s = i * -g + s * m,
                        a = n * -g + a * m,
                        h *= m,
                        f *= m,
                        i = v,
                        n = y),
                    1 !== M && (s *= M,
                        a *= M,
                        h *= M,
                        f *= M),
                    1 !== D && (i *= D,
                        n *= D,
                        l *= D,
                        u *= D),
                    1 !== C && (e *= C,
                        r *= C,
                        o *= C,
                        _ *= C),
                    (p || N) && (p && (F += s * -p,
                        z += a * -p,
                        X += h * -p + p),
                    N && (F += O.xOrigin - (O.xOrigin * e + O.yOrigin * i) + O.xOffset,
                        z += O.yOrigin - (O.xOrigin * r + O.yOrigin * n) + O.yOffset),
                    d > F && F > -d && (F = w),
                    d > z && z > -d && (z = w),
                    d > X && X > -d && (X = 0)),
                        T = O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix3d(" : "matrix3d(",
                        T += (d > e && e > -d ? w : e) + x + (d > r && r > -d ? w : r) + x + (d > o && o > -d ? w : o),
                        T += x + (d > _ && _ > -d ? w : _) + x + (d > i && i > -d ? w : i) + x + (d > n && n > -d ? w : n),
                        R || A || 1 !== M ? (T += x + (d > l && l > -d ? w : l) + x + (d > u && u > -d ? w : u) + x + (d > s && s > -d ? w : s),
                            T += x + (d > a && a > -d ? w : a) + x + (d > h && h > -d ? w : h) + x + (d > f && f > -d ? w : f) + x) : T += ",0,0,0,0,1,0,",
                        T += F + x + z + x + X + x + (L ? 1 + -X / L : 1) + ")",
                        k[St] = T
                }
            ;
            h = Dt.prototype,
                h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0,
                h.scaleX = h.scaleY = h.scaleZ = 1,
                bt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, s, n, o, l) {
                        if (s._lastParsedTransform === l)
                            return n;
                        s._lastParsedTransform = l;
                        var h;
                        "function" == typeof l[i] && (h = l[i],
                            l[i] = e);
                        var _, u, f, c, p, d, v, y, T, x = t._gsTransform, w = t.style, b = kt.length, P = l, O = {}, k = "transformOrigin", S = Bt(t, r, !0, P.parseTransform), R = P.transform && ("function" == typeof P.transform ? P.transform(g, m) : P.transform);
                        if (s._transform = S,
                        R && "string" == typeof R && St)
                            u = B.style,
                                u[St] = R,
                                u.display = "block",
                                u.position = "absolute",
                                E.body.appendChild(B),
                                _ = Bt(B, null, !1),
                            S.svg && (d = S.xOrigin,
                                v = S.yOrigin,
                                _.x -= S.xOffset,
                                _.y -= S.yOffset,
                            (P.transformOrigin || P.svgOrigin) && (R = {},
                                It(t, at(P.transformOrigin), R, P.svgOrigin, P.smoothOrigin, !0),
                                d = R.xOrigin,
                                v = R.yOrigin,
                                _.x -= R.xOffset - S.xOffset,
                                _.y -= R.yOffset - S.yOffset),
                            (d || v) && (y = Yt(B, !0),
                                _.x -= d - (d * y[0] + v * y[2]),
                                _.y -= v - (d * y[1] + v * y[3]))),
                                E.body.removeChild(B),
                            _.perspective || (_.perspective = S.perspective),
                            null != P.xPercent && (_.xPercent = lt(P.xPercent, S.xPercent)),
                            null != P.yPercent && (_.yPercent = lt(P.yPercent, S.yPercent));
                        else if ("object" == typeof P) {
                            if (_ = {
                                scaleX: lt(null != P.scaleX ? P.scaleX : P.scale, S.scaleX),
                                scaleY: lt(null != P.scaleY ? P.scaleY : P.scale, S.scaleY),
                                scaleZ: lt(P.scaleZ, S.scaleZ),
                                x: lt(P.x, S.x),
                                y: lt(P.y, S.y),
                                z: lt(P.z, S.z),
                                xPercent: lt(P.xPercent, S.xPercent),
                                yPercent: lt(P.yPercent, S.yPercent),
                                perspective: lt(P.transformPerspective, S.perspective)
                            },
                            null != (p = P.directionalRotation))
                                if ("object" == typeof p)
                                    for (u in p)
                                        P[u] = p[u];
                                else
                                    P.rotation = p;
                            "string" == typeof P.x && -1 !== P.x.indexOf("%") && (_.x = 0,
                                _.xPercent = lt(P.x, S.xPercent)),
                            "string" == typeof P.y && -1 !== P.y.indexOf("%") && (_.y = 0,
                                _.yPercent = lt(P.y, S.yPercent)),
                                _.rotation = ht("rotation"in P ? P.rotation : "shortRotation"in P ? P.shortRotation + "_short" : "rotationZ"in P ? P.rotationZ : S.rotation - S.skewY, S.rotation - S.skewY, "rotation", O),
                            Ct && (_.rotationX = ht("rotationX"in P ? P.rotationX : "shortRotationX"in P ? P.shortRotationX + "_short" : S.rotationX || 0, S.rotationX, "rotationX", O),
                                _.rotationY = ht("rotationY"in P ? P.rotationY : "shortRotationY"in P ? P.shortRotationY + "_short" : S.rotationY || 0, S.rotationY, "rotationY", O)),
                                _.skewX = ht(P.skewX, S.skewX - S.skewY),
                            (_.skewY = ht(P.skewY, S.skewY)) && (_.skewX += _.skewY,
                                _.rotation += _.skewY)
                        }
                        for (Ct && null != P.force3D && (S.force3D = P.force3D,
                            c = !0),
                                 S.skewType = P.skewType || S.skewType || a.defaultSkewType,
                             (f = S.force3D || S.z || S.rotationX || S.rotationY || _.z || _.rotationX || _.rotationY || _.perspective) || null == P.scale || (_.scaleZ = 1); --b > -1; )
                            T = kt[b],
                            ((R = _[T] - S[T]) > 1e-6 || -1e-6 > R || null != P[T] || null != L[T]) && (c = !0,
                                n = new vt(S,T,S[T],R,n),
                            T in O && (n.e = O[T]),
                                n.xs0 = 0,
                                n.plugin = o,
                                s._overwriteProps.push(n.n));
                        return R = P.transformOrigin,
                        S.svg && (R || P.svgOrigin) && (d = S.xOffset,
                            v = S.yOffset,
                            It(t, at(R), _, P.svgOrigin, P.smoothOrigin),
                            n = yt(S, "xOrigin", (x ? S : _).xOrigin, _.xOrigin, n, k),
                            n = yt(S, "yOrigin", (x ? S : _).yOrigin, _.yOrigin, n, k),
                        (d !== S.xOffset || v !== S.yOffset) && (n = yt(S, "xOffset", x ? d : S.xOffset, S.xOffset, n, k),
                            n = yt(S, "yOffset", x ? v : S.yOffset, S.yOffset, n, k)),
                            R = Ot ? null : "0px 0px"),
                        (R || Ct && f && S.zOrigin) && (St ? (c = !0,
                            T = At,
                            R = (R || K(t, T, r, !1, "50% 50%")) + "",
                            n = new vt(w,T,0,0,n,-1,k),
                            n.b = w[T],
                            n.plugin = o,
                            Ct ? (u = S.zOrigin,
                                R = R.split(" "),
                                S.zOrigin = (R.length > 2 && (0 === u || "0px" !== R[2]) ? parseFloat(R[2]) : u) || 0,
                                n.xs0 = n.e = R[0] + " " + (R[1] || "50%") + " 0px",
                                n = new vt(S,"zOrigin",0,0,n,-1,n.n),
                                n.b = u,
                                n.xs0 = n.e = S.zOrigin) : n.xs0 = n.e = R) : at(R + "", S)),
                        c && (s._transformType = S.svg && Ot || !f && 3 !== this._transformType ? 2 : 3),
                        h && (l[i] = h),
                            n
                    },
                    prefix: !0
                }),
                bt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }),
                bt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a, o) {
                        e = this.format(e);
                        var l, h, _, u, f, c, p, d, m, g, v, y, T, x, w, b, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], O = t.style;
                        for (m = parseFloat(t.offsetWidth),
                                 g = parseFloat(t.offsetHeight),
                                 l = e.split(" "),
                                 h = 0; h < P.length; h++)
                            this.p.indexOf("border") && (P[h] = Q(P[h])),
                                f = u = K(t, P[h], r, !1, "0px"),
                            -1 !== f.indexOf(" ") && (u = f.split(" "),
                                f = u[0],
                                u = u[1]),
                                c = _ = l[h],
                                p = parseFloat(f),
                                y = f.substr((p + "").length),
                                T = "=" === c.charAt(1),
                                T ? (d = parseInt(c.charAt(0) + "1", 10),
                                    c = c.substr(2),
                                    d *= parseFloat(c),
                                    v = c.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(c),
                                    v = c.substr((d + "").length)),
                            "" === v && (v = s[i] || y),
                            v !== y && (x = J(t, "borderLeft", p, y),
                                w = J(t, "borderTop", p, y),
                                "%" === v ? (f = x / m * 100 + "%",
                                    u = w / g * 100 + "%") : "em" === v ? (b = J(t, "borderLeft", 1, "em"),
                                    f = x / b + "em",
                                    u = w / b + "em") : (f = x + "px",
                                    u = w + "px"),
                            T && (c = parseFloat(f) + d + v,
                                _ = parseFloat(u) + d + v)),
                                a = Tt(O, P[h], f + " " + u, c + " " + _, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: dt("0px 0px 0px 0px", !1, !0)
                }),
                bt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, s, n, a) {
                        return Tt(t.style, i, this.format(K(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", n)
                    },
                    prefix: !0,
                    formatter: dt("0px 0px", !1, !0)
                }),
                bt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, n, a) {
                        var o, l, h, _, u, f, c = "background-position", p = r || H(t, null), m = this.format((p ? d ? p.getPropertyValue(c + "-x") + " " + p.getPropertyValue(c + "-y") : p.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (f = K(t, "backgroundImage").replace(A, "")) && "none" !== f) {
                            for (o = m.split(" "),
                                     l = g.split(" "),
                                     j.setAttribute("src", f),
                                     h = 2; --h > -1; )
                                m = o[h],
                                (_ = -1 !== m.indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - j.width : t.offsetHeight - j.height,
                                    o[h] = _ ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                            m = o.join(" ")
                        }
                        return this.parseComplex(t.style, m, g, n, a)
                    },
                    formatter: at
                }),
                bt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(t) {
                        return t += "",
                            at(-1 === t.indexOf(" ") ? t + " " + t : t)
                    }
                }),
                bt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }),
                bt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }),
                bt("transformStyle", {
                    prefix: !0
                }),
                bt("backfaceVisibility", {
                    prefix: !0
                }),
                bt("userSelect", {
                    prefix: !0
                }),
                bt("margin", {
                    parser: mt("marginTop,marginRight,marginBottom,marginLeft")
                }),
                bt("padding", {
                    parser: mt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }),
                bt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, n, a) {
                        var o, l, h;
                        return 9 > d ? (l = t.currentStyle,
                            h = 8 > d ? " " : ",",
                            o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")",
                            e = this.format(e).split(",").join(h)) : (o = this.format(K(t, this.p, r, !1, this.dflt)),
                            e = this.format(e)),
                            this.parseComplex(t.style, o, e, n, a)
                    }
                }),
                bt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }),
                bt("autoRound,strictUnits", {
                    parser: function(t, e, i, s, r) {
                        return r
                    }
                }),
                bt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, n, a) {
                        var o = K(t, "borderTopWidth", r, !1, "0px")
                            , l = this.format(e).split(" ")
                            , h = l[0].replace(w, "");
                        return "px" !== h && (o = parseFloat(o) / J(t, "borderTopWidth", 1, h) + h),
                            this.parseComplex(t.style, this.format(o + " " + K(t, "borderTopStyle", r, !1, "solid") + " " + K(t, "borderTopColor", r, !1, "#000")), l.join(" "), n, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(pt) || ["#000"])[0]
                    }
                }),
                bt("borderWidth", {
                    parser: mt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }),
                bt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r, n) {
                        var a = t.style
                            , o = "cssFloat"in a ? "cssFloat" : "styleFloat";
                        return new vt(a,o,0,0,r,-1,i,!1,0,a[o],e)
                    }
                });
            var Vt = function(t) {
                var e, i = this.t, s = i.filter || K(this.data, "filter") || "", r = this.s + this.c * t | 0;
                100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"),
                    e = !K(this.data, "filter")) : (i.filter = s.replace(O, ""),
                    e = !0)),
                e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"),
                    -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(b, "opacity=" + r))
            };
            bt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, s, n, a) {
                    var o = parseFloat(K(t, "opacity", r, !1, "1"))
                        , l = t.style
                        , h = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                    h && 1 === o && "hidden" === K(t, "visibility", r) && 0 !== e && (o = 0),
                        q ? n = new vt(l,"opacity",o,e - o,n) : (n = new vt(l,"opacity",100 * o,100 * (e - o),n),
                            n.xn1 = h ? 1 : 0,
                            l.zoom = 1,
                            n.type = 2,
                            n.b = "alpha(opacity=" + n.s + ")",
                            n.e = "alpha(opacity=" + (n.s + n.c) + ")",
                            n.data = t,
                            n.plugin = a,
                            n.setRatio = Vt),
                    h && (n = new vt(l,"visibility",0,0,n,-1,null,!1,0,0 !== o ? "inherit" : "hidden",0 === e ? "hidden" : "inherit"),
                        n.xs0 = "inherit",
                        s._overwriteProps.push(n.n),
                        s._overwriteProps.push(i)),
                        n
                }
            });
            var qt = function(t, e) {
                e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
                    t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
            }
                , Wt = function(t) {
                if (this.t._gsClassPT = this,
                1 === t || 0 === t) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, i = this.t.style; e; )
                        e.v ? i[e.p] = e.v : qt(i, e.p),
                            e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else
                    this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
            bt("className", {
                parser: function(t, e, s, n, a, o, l) {
                    var h, _, u, f, c, p = t.getAttribute("class") || "", d = t.style.cssText;
                    if (a = n._classNamePT = new vt(t,s,0,0,a,2),
                        a.setRatio = Wt,
                        a.pr = -11,
                        i = !0,
                        a.b = p,
                        _ = et(t, r),
                        u = t._gsClassPT) {
                        for (f = {},
                                 c = u.data; c; )
                            f[c.p] = 1,
                                c = c._next;
                        u.setRatio(1)
                    }
                    return t._gsClassPT = a,
                        a.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                        t.setAttribute("class", a.e),
                        h = it(t, _, et(t), l, f),
                        t.setAttribute("class", p),
                        a.data = h.firstMPT,
                        t.style.cssText = d,
                        a = a.xfirst = n.parse(t, h.difs, a, o)
                }
            });
            var Zt = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, s, r, n, a = this.t.style, o = l.transform.parse;
                    if ("all" === this.e)
                        a.cssText = "",
                            r = !0;
                    else
                        for (e = this.e.split(" ").join("").split(","),
                                 s = e.length; --s > -1; )
                            i = e[s],
                            l[i] && (l[i].parse === o ? r = !0 : i = "transformOrigin" === i ? At : l[i].p),
                                qt(a, i);
                    r && (qt(a, St),
                    (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"),
                        this.t.removeAttribute("transform")),
                        delete this.t._gsTransform))
                }
            };
            for (bt("clearProps", {
                parser: function(t, e, s, r, n) {
                    return n = new vt(t,s,0,0,n,2),
                        n.setRatio = Zt,
                        n.e = e,
                        n.pr = -10,
                        n.data = r._tween,
                        i = !0,
                        n
                }
            }),
                     h = "bezier,throwProps,physicsProps,physics2D".split(","),
                     xt = h.length; xt--; )
                Pt(h[xt]);
            h = a.prototype,
                h._firstPT = h._lastParsedTransform = h._transform = null,
                h._onInitTween = function(t, e, o, h) {
                    if (!t.nodeType)
                        return !1;
                    this._target = m = t,
                        this._tween = o,
                        this._vars = e,
                        g = h,
                        _ = e.autoRound,
                        i = !1,
                        s = e.suffixMap || a.suffixMap,
                        r = H(t, ""),
                        n = this._overwriteProps;
                    var c, d, v, y, T, x, w, b, O, k = t.style;
                    if (u && "" === k.zIndex && ("auto" === (c = K(t, "zIndex", r)) || "" === c) && this._addLazySet(k, "zIndex", 0),
                    "string" == typeof e && (y = k.cssText,
                        c = et(t, r),
                        k.cssText = y + ";" + e,
                        c = it(t, c, et(t)).difs,
                    !q && P.test(e) && (c.opacity = parseFloat(RegExp.$1)),
                        e = c,
                        k.cssText = y),
                        e.className ? this._firstPT = d = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null),
                        this._transformType) {
                        for (O = 3 === this._transformType,
                                 St ? f && (u = !0,
                                 "" === k.zIndex && ("auto" === (w = K(t, "zIndex", r)) || "" === w) && this._addLazySet(k, "zIndex", 0),
                                 p && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (O ? "visible" : "hidden"))) : k.zoom = 1,
                                 v = d; v && v._next; )
                            v = v._next;
                        b = new vt(t,"transform",0,0,null,2),
                            this._linkCSSP(b, null, v),
                            b.setRatio = St ? Ut : jt,
                            b.data = this._transform || Bt(t, r, !0),
                            b.tween = o,
                            b.pr = -1,
                            n.pop()
                    }
                    if (i) {
                        for (; d; ) {
                            for (x = d._next,
                                     v = y; v && v.pr > d.pr; )
                                v = v._next;
                            (d._prev = v ? v._prev : T) ? d._prev._next = d : y = d,
                                (d._next = v) ? v._prev = d : T = d,
                                d = x
                        }
                        this._firstPT = y
                    }
                    return !0
                }
                ,
                h.parse = function(t, e, i, n) {
                    var a, o, h, u, f, c, p, d, v, y, T = t.style;
                    for (a in e)
                        c = e[a],
                        "function" == typeof c && (c = c(g, m)),
                            o = l[a],
                            o ? i = o.parse(t, c, a, this, i, n, e) : (f = K(t, a, r) + "",
                                v = "string" == typeof c,
                                "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && k.test(c) ? (v || (c = ft(c),
                                    c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"),
                                    i = Tt(T, a, f, c, !0, "transparent", i, 0, n)) : v && X.test(c) ? i = Tt(T, a, f, c, !0, null, i, 0, n) : (h = parseFloat(f),
                                    p = h || 0 === h ? f.substr((h + "").length) : "",
                                ("" === f || "auto" === f) && ("width" === a || "height" === a ? (h = nt(t, a, r),
                                    p = "px") : "left" === a || "top" === a ? (h = tt(t, a, r),
                                    p = "px") : (h = "opacity" !== a ? 0 : 1,
                                    p = "")),
                                    y = v && "=" === c.charAt(1),
                                    y ? (u = parseInt(c.charAt(0) + "1", 10),
                                        c = c.substr(2),
                                        u *= parseFloat(c),
                                        d = c.replace(w, "")) : (u = parseFloat(c),
                                        d = v ? c.replace(w, "") : ""),
                                "" === d && (d = a in s ? s[a] : p),
                                    c = u || 0 === u ? (y ? u + h : u) + d : e[a],
                                p !== d && "" !== d && (u || 0 === u) && h && (h = J(t, a, h, p),
                                    "%" === d ? (h /= J(t, a, 100, "%") / 100,
                                    !0 !== e.strictUnits && (f = h + "%")) : "em" === d || "rem" === d || "vw" === d || "vh" === d ? h /= J(t, a, 1, d) : "px" !== d && (u = J(t, a, u, d),
                                        d = "px"),
                                y && (u || 0 === u) && (c = u + h + d)),
                                y && (u += h),
                                    !h && 0 !== h || !u && 0 !== u ? void 0 !== T[a] && (c || c + "" != "NaN" && null != c) ? (i = new vt(T,a,u || h || 0,0,i,-1,a,!1,0,f,c),
                                        i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : f) : Z("invalid " + a + " tween value: " + e[a]) : (i = new vt(T,a,h,u - h,i,0,a,!1 !== _ && ("px" === d || "zIndex" === a),0,f,c),
                                        i.xs0 = d))),
                        n && i && !i.plugin && (i.plugin = n);
                    return i
                }
                ,
                h.setRatio = function(t) {
                    var e, i, s, r = this._firstPT;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; r; ) {
                                if (e = r.c * t + r.s,
                                    r.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0),
                                    r.type)
                                    if (1 === r.type)
                                        if (2 === (s = r.l))
                                            r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s)
                                            r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                        else if (4 === s)
                                            r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                        else if (5 === s)
                                            r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                        else {
                                            for (i = r.xs0 + e + r.xs1,
                                                     s = 1; s < r.l; s++)
                                                i += r["xn" + s] + r["xs" + (s + 1)];
                                            r.t[r.p] = i
                                        }
                                    else
                                        -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else
                                    r.t[r.p] = e + r.xs0;
                                r = r._next
                            }
                        else
                            for (; r; )
                                2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t),
                                    r = r._next;
                    else
                        for (; r; ) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (e = Math.round(r.s + r.c),
                                        r.type) {
                                        if (1 === r.type) {
                                            for (s = r.l,
                                                     i = r.xs0 + e + r.xs1,
                                                     s = 1; s < r.l; s++)
                                                i += r["xn" + s] + r["xs" + (s + 1)];
                                            r.t[r.p] = i
                                        }
                                    } else
                                        r.t[r.p] = e + r.xs0;
                                else
                                    r.t[r.p] = r.e;
                            else
                                r.setRatio(t);
                            r = r._next
                        }
                }
                ,
                h._enableTransforms = function(t) {
                    this._transform = this._transform || Bt(this._target, r, !0),
                        this._transformType = this._transform.svg && Ot || !t && 3 !== this._transformType ? 2 : 3
                }
            ;
            var Gt = function(t) {
                this.t[this.p] = this.e,
                    this.data._linkCSSP(this, this._next, null, !0)
            };
            h._addLazySet = function(t, e, i) {
                var s = this._firstPT = new vt(t,e,0,0,this._firstPT,2);
                s.e = i,
                    s.setRatio = Gt,
                    s.data = this
            }
                ,
                h._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t),
                    t._next && (t._next._prev = t._prev),
                        t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
                            s = !0),
                        i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t),
                        t._next = e,
                        t._prev = i),
                        t
                }
                ,
                h._mod = function(t) {
                    for (var e = this._firstPT; e; )
                        "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1),
                            e = e._next
                }
                ,
                h._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e)
                            n[s] = e[s];
                        n.opacity = 1,
                        n.autoAlpha && (n.visibility = 1)
                    }
                    for (e.className && (i = this._classNamePT) && (r = i.xfirst,
                        r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next),
                    i._next && this._linkCSSP(i._next, i._next._next, r._prev),
                        this._classNamePT = null),
                             i = this._firstPT; i; )
                        i.plugin && i.plugin !== s && i.plugin._kill && (i.plugin._kill(e),
                            s = i.plugin),
                            i = i._next;
                    return t.prototype._kill.call(this, n)
                }
            ;
            var $t = function(t, e, i) {
                var s, r, n, a;
                if (t.slice)
                    for (r = t.length; --r > -1; )
                        $t(t[r], e, i);
                else
                    for (s = t.childNodes,
                             r = s.length; --r > -1; )
                        n = s[r],
                            a = n.type,
                        n.style && (e.push(et(n)),
                        i && i.push(n)),
                        1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || $t(n, e, i)
            };
            return a.cascadeTo = function(t, i, s) {
                var r, n, a, o, l = e.to(t, i, s), h = [l], _ = [], u = [], f = [], c = e._internals.reservedProps;
                for (t = l._targets || l.target,
                         $t(t, _, f),
                         l.render(i, !0, !0),
                         $t(t, u),
                         l.render(0, !0, !0),
                         l._enabled(!0),
                         r = f.length; --r > -1; )
                    if (n = it(f[r], _[r], u[r]),
                        n.firstMPT) {
                        n = n.difs;
                        for (a in s)
                            c[a] && (n[a] = s[a]);
                        o = {};
                        for (a in n)
                            o[a] = _[r][a];
                        h.push(e.fromTo(f[r], i, o, n))
                    }
                return h
            }
                ,
                t.activate([a]),
                a
        }, !0),
        function() {
            var t = _gsScope._gsDefine.plugin({
                propName: "roundProps",
                version: "1.6.0",
                priority: -1,
                API: 2,
                init: function(t, e, i) {
                    return this._tween = i,
                        !0
                }
            })
                , e = function(t) {
                for (; t; )
                    t.f || t.blob || (t.m = Math.round),
                        t = t._next
            }
                , i = t.prototype;
            i._onInitAllProps = function() {
                for (var t, i, s, r = this._tween, n = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = n.length, o = {}, l = r._propLookup.roundProps; --a > -1; )
                    o[n[a]] = Math.round;
                for (a = n.length; --a > -1; )
                    for (t = n[a],
                             i = r._firstPT; i; )
                        s = i._next,
                            i.pg ? i.t._mod(o) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c),
                            s && (s._prev = i._prev),
                                i._prev ? i._prev._next = s : r._firstPT === i && (r._firstPT = s),
                                i._next = i._prev = null,
                                r._propLookup[t] = l)),
                            i = s;
                return !1
            }
                ,
                i._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, Math.round),
                        this._overwriteProps.push(e)
                }
        }(),
        function() {
            _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.0",
                init: function(t, e, i, s) {
                    var r, n;
                    if ("function" != typeof t.setAttribute)
                        return !1;
                    for (r in e)
                        n = e[r],
                        "function" == typeof n && (n = n(s, t)),
                            this._addTween(t, "setAttribute", t.getAttribute(r) + "", n + "", r, !1, r),
                            this._overwriteProps.push(r);
                    return !0
                }
            })
        }(),
        _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.0",
            API: 2,
            init: function(t, e, i, s) {
                "object" != typeof e && (e = {
                    rotation: e
                }),
                    this.finals = {};
                var r, n, a, o, l, h, _ = !0 === e.useRadians ? 2 * Math.PI : 360;
                for (r in e)
                    "useRadians" !== r && (o = e[r],
                    "function" == typeof o && (o = o(s, t)),
                        h = (o + "").split("_"),
                        n = h[0],
                        a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()),
                        o = this.finals[r] = "string" == typeof n && "=" === n.charAt(1) ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0,
                        l = o - a,
                    h.length && (n = h.join("_"),
                    -1 !== n.indexOf("short") && (l %= _) !== l % (_ / 2) && (l = 0 > l ? l + _ : l - _),
                        -1 !== n.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * _) % _ - (l / _ | 0) * _ : -1 !== n.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * _) % _ - (l / _ | 0) * _)),
                    (l > 1e-6 || -1e-6 > l) && (this._addTween(t, r, a, a + l, r),
                        this._overwriteProps.push(r)));
                return !0
            },
            set: function(t) {
                var e;
                if (1 !== t)
                    this._super.setRatio.call(this, t);
                else
                    for (e = this._firstPT; e; )
                        e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                            e = e._next
            }
        })._autoCSS = !0,
        _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
            var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope, n = r.com.greensock, a = 2 * Math.PI, o = Math.PI / 2, l = n._class, h = function(e, i) {
                var s = l("easing." + e, function() {}, !0)
                    , r = s.prototype = new t;
                return r.constructor = s,
                    r.getRatio = i,
                    s
            }, _ = t.register || function() {}
                , u = function(t, e, i, s, r) {
                var n = l("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new s
                }, !0);
                return _(n, t),
                    n
            }, f = function(t, e, i) {
                this.t = t,
                    this.v = e,
                i && (this.next = i,
                    i.prev = this,
                    this.c = i.v - e,
                    this.gap = i.t - t)
            }, c = function(e, i) {
                var s = l("easing." + e, function(t) {
                    this._p1 = t || 0 === t ? t : 1.70158,
                        this._p2 = 1.525 * this._p1
                }, !0)
                    , r = s.prototype = new t;
                return r.constructor = s,
                    r.getRatio = i,
                    r.config = function(t) {
                        return new s(t)
                    }
                    ,
                    s
            }, p = u("Back", c("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), c("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), c("BackInOut", function(t) {
                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })), d = l("easing.SlowMo", function(t, e, i) {
                e = e || 0 === e ? e : .7,
                    null == t ? t = .7 : t > 1 && (t = 1),
                    this._p = 1 !== t ? e : 0,
                    this._p1 = (1 - t) / 2,
                    this._p2 = t,
                    this._p3 = this._p1 + this._p2,
                    this._calcEnd = !0 === i
            }, !0), m = d.prototype = new t;
            return m.constructor = d,
                m.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }
                ,
                d.ease = new d(.7,.7),
                m.config = d.config = function(t, e, i) {
                    return new d(t,e,i)
                }
                ,
                e = l("easing.SteppedEase", function(t) {
                    t = t || 1,
                        this._p1 = 1 / t,
                        this._p2 = t + 1
                }, !0),
                m = e.prototype = new t,
                m.constructor = e,
                m.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
                    (this._p2 * t >> 0) * this._p1
                }
                ,
                m.config = e.config = function(t) {
                    return new e(t)
                }
                ,
                i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, r, n, a, o, l = e.taper || "none", h = [], _ = 0, u = 0 | (e.points || 20), c = u, p = !1 !== e.randomize, d = !0 === e.clamp, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1; )
                        i = p ? Math.random() : 1 / u * c,
                            s = m ? m.getRatio(i) : i,
                            "none" === l ? r = g : "out" === l ? (n = 1 - i,
                                r = n * n * g) : "in" === l ? r = i * i * g : .5 > i ? (n = 2 * i,
                                r = n * n * .5 * g) : (n = 2 * (1 - i),
                                r = n * n * .5 * g),
                            p ? s += Math.random() * r - .5 * r : c % 2 ? s += .5 * r : s -= .5 * r,
                        d && (s > 1 ? s = 1 : 0 > s && (s = 0)),
                            h[_++] = {
                                x: i,
                                y: s
                            };
                    for (h.sort(function(t, e) {
                        return t.x - e.x
                    }),
                             o = new f(1,1,null),
                             c = u; --c > -1; )
                        a = h[c],
                            o = new f(a.x,a.y,o);
                    this._prev = new f(0,0,0 !== o.t ? o : o.next)
                }, !0),
                m = i.prototype = new t,
                m.constructor = i,
                m.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t; )
                            e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t; )
                            e = e.prev;
                    return this._prev = e,
                    e.v + (t - e.t) / e.gap * e.c
                }
                ,
                m.config = function(t) {
                    return new i(t)
                }
                ,
                i.ease = new i,
                u("Bounce", h("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), h("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), h("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1,
                        t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
                        e ? .5 * (1 - t) : .5 * t + .5
                })),
                u("Circ", h("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), h("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), h("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })),
                s = function(e, i, s) {
                    var r = l("easing." + e, function(t, e) {
                        this._p1 = t >= 1 ? t : 1,
                            this._p2 = (e || s) / (1 > t ? t : 1),
                            this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0),
                            this._p2 = a / this._p2
                    }, !0)
                        , n = r.prototype = new t;
                    return n.constructor = r,
                        n.getRatio = i,
                        n.config = function(t, e) {
                            return new r(t,e)
                        }
                        ,
                        r
                }
                ,
                u("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                }, .3), s("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)),
                u("Expo", h("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), h("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), h("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })),
                u("Sine", h("SineOut", function(t) {
                    return Math.sin(t * o)
                }), h("SineIn", function(t) {
                    return 1 - Math.cos(t * o)
                }), h("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })),
                l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0),
                _(r.SlowMo, "SlowMo", "ease,"),
                _(i, "RoughEase", "ease,"),
                _(e, "SteppedEase", "ease,"),
                p
        }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = {}
            , s = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!s.TweenLite) {
            var r, n, a, o, l, h = function(t) {
                    var e, i = t.split("."), r = s;
                    for (e = 0; e < i.length; e++)
                        r[i[e]] = r = r[i[e]] || {};
                    return r
                }, _ = h("com.greensock"), u = 1e-10, f = function(t) {
                    var e, i = [], s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]))
                        ;
                    return i
                }, c = function() {}, p = function() {
                    var t = Object.prototype.toString
                        , e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(), d = {}, m = function(r, n, a, o) {
                    this.sc = d[r] ? d[r].sc : [],
                        d[r] = this,
                        this.gsClass = null,
                        this.func = a;
                    var l = [];
                    this.check = function(_) {
                        for (var u, f, c, p, g, v = n.length, y = v; --v > -1; )
                            (u = d[n[v]] || new m(n[v],[])).gsClass ? (l[v] = u.gsClass,
                                y--) : _ && u.sc.push(this);
                        if (0 === y && a) {
                            if (f = ("com.greensock." + r).split("."),
                                c = f.pop(),
                                p = h(f.join("."))[c] = this.gsClass = a.apply(a, l),
                                o)
                                if (s[c] = i[c] = p,
                                !(g = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd)
                                    define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
                                        return p
                                    });
                                else if (g)
                                    if (r === e) {
                                        module.exports = i[e] = p;
                                        for (v in i)
                                            p[v] = i[v]
                                    } else
                                        i[e] && (i[e][c] = p);
                            for (v = 0; v < this.sc.length; v++)
                                this.sc[v].check()
                        }
                    }
                        ,
                        this.check(!0)
                }, g = t._gsDefine = function(t, e, i, s) {
                    return new m(t,e,i,s)
                }
                , v = _._class = function(t, e, i) {
                    return e = e || function() {}
                        ,
                        g(t, [], function() {
                            return e
                        }, i),
                        e
                }
            ;
            g.globals = s;
            var y = [0, 0, 1, 1]
                , T = v("easing.Ease", function(t, e, i, s) {
                    this._func = t,
                        this._type = i || 0,
                        this._power = s || 0,
                        this._params = e ? y.concat(e) : y
                }, !0)
                , x = T.map = {}
                , w = T.register = function(t, e, i, s) {
                    for (var r, n, a, o, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1; )
                        for (n = l[h],
                                 r = s ? v("easing." + n, null, !0) : _.easing[n] || {},
                                 a = u.length; --a > -1; )
                            o = u[a],
                                x[n + "." + o] = x[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                }
            ;
            for (a = T.prototype,
                     a._calcEnd = !1,
                     a.getRatio = function(t) {
                         if (this._func)
                             return this._params[0] = t,
                                 this._func.apply(null, this._params);
                         var e = this._type
                             , i = this._power
                             , s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                         return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s),
                             1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                     }
                     ,
                     r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
                     n = r.length; --n > -1; )
                a = r[n] + ",Power" + n,
                    w(new T(null,null,1,n), a, "easeOut", !0),
                    w(new T(null,null,2,n), a, "easeIn" + (0 === n ? ",easeNone" : "")),
                    w(new T(null,null,3,n), a, "easeInOut");
            x.linear = _.easing.Linear.easeIn,
                x.swing = _.easing.Quad.easeInOut;
            var b = v("events.EventDispatcher", function(t) {
                this._listeners = {},
                    this._eventTarget = t || this
            });
            a = b.prototype,
                a.addEventListener = function(t, e, i, s, r) {
                    r = r || 0;
                    var n, a, h = this._listeners[t], _ = 0;
                    for (this !== o || l || o.wake(),
                         null == h && (this._listeners[t] = h = []),
                             a = h.length; --a > -1; )
                        n = h[a],
                            n.c === e && n.s === i ? h.splice(a, 1) : 0 === _ && n.pr < r && (_ = a + 1);
                    h.splice(_, 0, {
                        c: e,
                        s: i,
                        up: s,
                        pr: r
                    })
                }
                ,
                a.removeEventListener = function(t, e) {
                    var i, s = this._listeners[t];
                    if (s)
                        for (i = s.length; --i > -1; )
                            if (s[i].c === e)
                                return void s.splice(i, 1)
                }
                ,
                a.dispatchEvent = function(t) {
                    var e, i, s, r = this._listeners[t];
                    if (r)
                        for (e = r.length,
                             e > 1 && (r = r.slice(0)),
                                 i = this._eventTarget; --e > -1; )
                            (s = r[e]) && (s.up ? s.c.call(s.s || i, {
                                type: t,
                                target: i
                            }) : s.c.call(s.s || i))
                }
            ;
            var P = t.requestAnimationFrame
                , O = t.cancelAnimationFrame
                , k = Date.now || function() {
                return (new Date).getTime()
            }
                , S = k();
            for (r = ["ms", "moz", "webkit", "o"],
                     n = r.length; --n > -1 && !P; )
                P = t[r[n] + "RequestAnimationFrame"],
                    O = t[r[n] + "CancelAnimationFrame"] || t[r[n] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, s, r, n, a, h = this, _ = k(), f = !(!1 === e || !P) && "auto", p = 500, d = 33, m = function(t) {
                    var e, o, l = k() - S;
                    l > p && (_ += l - d),
                        S += l,
                        h.time = (S - _) / 1e3,
                        e = h.time - a,
                    (!i || e > 0 || !0 === t) && (h.frame++,
                        a += e + (e >= n ? .004 : n - e),
                        o = !0),
                    !0 !== t && (r = s(m)),
                    o && h.dispatchEvent("tick")
                };
                b.call(h),
                    h.time = h.frame = 0,
                    h.tick = function() {
                        m(!0)
                    }
                    ,
                    h.lagSmoothing = function(t, e) {
                        p = t || 1 / u,
                            d = Math.min(e, p, 0)
                    }
                    ,
                    h.sleep = function() {
                        null != r && (f && O ? O(r) : clearTimeout(r),
                            s = c,
                            r = null,
                        h === o && (l = !1))
                    }
                    ,
                    h.wake = function(t) {
                        null !== r ? h.sleep() : t ? _ += -S + (S = k()) : h.frame > 10 && (S = k() - p + 5),
                            s = 0 === i ? c : f && P ? P : function(t) {
                                return setTimeout(t, 1e3 * (a - h.time) + 1 | 0)
                            }
                            ,
                        h === o && (l = !0),
                            m(2)
                    }
                    ,
                    h.fps = function(t) {
                        return arguments.length ? (i = t,
                            n = 1 / (i || 60),
                            a = this.time + n,
                            void h.wake()) : i
                    }
                    ,
                    h.useRAF = function(t) {
                        return arguments.length ? (h.sleep(),
                            f = t,
                            void h.fps(i)) : f
                    }
                    ,
                    h.fps(t),
                    setTimeout(function() {
                        "auto" === f && h.frame < 5 && "hidden" !== document.visibilityState && h.useRAF(!1)
                    }, 1500)
            }),
                a = _.Ticker.prototype = new _.events.EventDispatcher,
                a.constructor = _.Ticker;
            var R = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {},
                    this._duration = this._totalDuration = t || 0,
                    this._delay = Number(e.delay) || 0,
                    this._timeScale = 1,
                    this._active = !0 === e.immediateRender,
                    this.data = e.data,
                    this._reversed = !0 === e.reversed,
                    Z) {
                    l || o.wake();
                    var i = this.vars.useFrames ? W : Z;
                    i.add(this, i._time),
                    this.vars.paused && this.paused(!0)
                }
            });
            o = R.ticker = new _.Ticker,
                a = R.prototype,
                a._dirty = a._gc = a._initted = a._paused = !1,
                a._totalTime = a._time = 0,
                a._rawPrevTime = -1,
                a._next = a._last = a._onUpdate = a._timeline = a.timeline = null,
                a._paused = !1;
            var A = function() {
                l && k() - S > 2e3 && o.wake(),
                    setTimeout(A, 2e3)
            };
            A(),
                a.play = function(t, e) {
                    return null != t && this.seek(t, e),
                        this.reversed(!1).paused(!1)
                }
                ,
                a.pause = function(t, e) {
                    return null != t && this.seek(t, e),
                        this.paused(!0)
                }
                ,
                a.resume = function(t, e) {
                    return null != t && this.seek(t, e),
                        this.paused(!1)
                }
                ,
                a.seek = function(t, e) {
                    return this.totalTime(Number(t), !1 !== e)
                }
                ,
                a.restart = function(t, e) {
                    return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                }
                ,
                a.reverse = function(t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e),
                        this.reversed(!0).paused(!1)
                }
                ,
                a.render = function(t, e, i) {}
                ,
                a.invalidate = function() {
                    return this._time = this._totalTime = 0,
                        this._initted = this._gc = !1,
                        this._rawPrevTime = -1,
                    (this._gc || !this.timeline) && this._enabled(!0),
                        this
                }
                ,
                a.isActive = function() {
                    var t, e = this._timeline, i = this._startTime;
                    return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
                }
                ,
                a._enabled = function(t, e) {
                    return l || o.wake(),
                        this._gc = !t,
                        this._active = this.isActive(),
                    !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                        !1
                }
                ,
                a._kill = function(t, e) {
                    return this._enabled(!1, !1)
                }
                ,
                a.kill = function(t, e) {
                    return this._kill(t, e),
                        this
                }
                ,
                a._uncache = function(t) {
                    for (var e = t ? this : this.timeline; e; )
                        e._dirty = !0,
                            e = e.timeline;
                    return this
                }
                ,
                a._swapSelfInParams = function(t) {
                    for (var e = t.length, i = t.concat(); --e > -1; )
                        "{self}" === t[e] && (i[e] = this);
                    return i
                }
                ,
                a._callback = function(t) {
                    var e = this.vars
                        , i = e[t]
                        , s = e[t + "Params"]
                        , r = e[t + "Scope"] || e.callbackScope || this;
                    switch (s ? s.length : 0) {
                        case 0:
                            i.call(r);
                            break;
                        case 1:
                            i.call(r, s[0]);
                            break;
                        case 2:
                            i.call(r, s[0], s[1]);
                            break;
                        default:
                            i.apply(r, s)
                    }
                }
                ,
                a.eventCallback = function(t, e, i, s) {
                    if ("on" === (t || "").substr(0, 2)) {
                        var r = this.vars;
                        if (1 === arguments.length)
                            return r[t];
                        null == e ? delete r[t] : (r[t] = e,
                            r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                            r[t + "Scope"] = s),
                        "onUpdate" === t && (this._onUpdate = e)
                    }
                    return this
                }
                ,
                a.delay = function(t) {
                    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
                        this._delay = t,
                        this) : this._delay
                }
                ,
                a.duration = function(t) {
                    return arguments.length ? (this._duration = this._totalDuration = t,
                        this._uncache(!0),
                    this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                        this) : (this._dirty = !1,
                        this._duration)
                }
                ,
                a.totalDuration = function(t) {
                    return this._dirty = !1,
                        arguments.length ? this.duration(t) : this._totalDuration
                }
                ,
                a.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(),
                        this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                }
                ,
                a.totalTime = function(t, e, i) {
                    if (l || o.wake(),
                        !arguments.length)
                        return this._totalTime;
                    if (this._timeline) {
                        if (0 > t && !i && (t += this.totalDuration()),
                            this._timeline.smoothChildTiming) {
                            this._dirty && this.totalDuration();
                            var s = this._totalDuration
                                , r = this._timeline;
                            if (t > s && !i && (t = s),
                                this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale,
                            r._dirty || this._uncache(!1),
                                r._timeline)
                                for (; r._timeline; )
                                    r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                                        r = r._timeline
                        }
                        this._gc && this._enabled(!0, !1),
                        (this._totalTime !== t || 0 === this._duration) && (z.length && $(),
                            this.render(t, e, !1),
                        z.length && $())
                    }
                    return this
                }
                ,
                a.progress = a.totalProgress = function(t, e) {
                    var i = this.duration();
                    return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                }
                ,
                a.startTime = function(t) {
                    return arguments.length ? (t !== this._startTime && (this._startTime = t,
                    this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
                        this) : this._startTime
                }
                ,
                a.endTime = function(t) {
                    return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                }
                ,
                a.timeScale = function(t) {
                    if (!arguments.length)
                        return this._timeScale;
                    if (t = t || u,
                    this._timeline && this._timeline.smoothChildTiming) {
                        var e = this._pauseTime
                            , i = e || 0 === e ? e : this._timeline.totalTime();
                        this._startTime = i - (i - this._startTime) * this._timeScale / t
                    }
                    return this._timeScale = t,
                        this._uncache(!1)
                }
                ,
                a.reversed = function(t) {
                    return arguments.length ? (t != this._reversed && (this._reversed = t,
                        this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
                        this) : this._reversed
                }
                ,
                a.paused = function(t) {
                    if (!arguments.length)
                        return this._paused;
                    var e, i, s = this._timeline;
                    return t != this._paused && s && (l || t || o.wake(),
                        e = s.rawTime(),
                        i = e - this._pauseTime,
                    !t && s.smoothChildTiming && (this._startTime += i,
                        this._uncache(!1)),
                        this._pauseTime = t ? e : null,
                        this._paused = t,
                        this._active = this.isActive(),
                    !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale,
                        this.render(e, e === this._totalTime, !0))),
                    this._gc && !t && this._enabled(!0, !1),
                        this
                }
            ;
            var C = v("core.SimpleTimeline", function(t) {
                R.call(this, 0, t),
                    this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            a = C.prototype = new R,
                a.constructor = C,
                a.kill()._gc = !1,
                a._first = a._last = a._recent = null,
                a._sortChildren = !1,
                a.add = a.insert = function(t, e, i, s) {
                    var r, n;
                    if (t._startTime = Number(e || 0) + t._delay,
                    t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
                    t.timeline && t.timeline._remove(t, !0),
                        t.timeline = t._timeline = this,
                    t._gc && t._enabled(!0, !0),
                        r = this._last,
                        this._sortChildren)
                        for (n = t._startTime; r && r._startTime > n; )
                            r = r._prev;
                    return r ? (t._next = r._next,
                        r._next = t) : (t._next = this._first,
                        this._first = t),
                        t._next ? t._next._prev = t : this._last = t,
                        t._prev = r,
                        this._recent = t,
                    this._timeline && this._uncache(!0),
                        this
                }
                ,
                a._remove = function(t, e) {
                    return t.timeline === this && (e || t._enabled(!1, !0),
                        t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
                        t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
                        t._next = t._prev = t.timeline = null,
                    t === this._recent && (this._recent = this._last),
                    this._timeline && this._uncache(!0)),
                        this
                }
                ,
                a.render = function(t, e, i) {
                    var s, r = this._first;
                    for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                        s = r._next,
                        (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                            r = s
                }
                ,
                a.rawTime = function() {
                    return l || o.wake(),
                        this._totalTime
                }
            ;
            var D = v("TweenLite", function(e, i, s) {
                if (R.call(this, i, s),
                    this.render = D.prototype.render,
                null == e)
                    throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? q[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l],
                (o || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                    for (this._targets = a = f(e),
                             this._propLookup = [],
                             this._siblings = [],
                             r = 0; r < a.length; r++)
                        n = a[r],
                            n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1),
                                this._targets = a = a.concat(f(n))) : (this._siblings[r] = Q(n, this, !1),
                            1 === l && this._siblings[r].length > 1 && K(n, this, null, 1, this._siblings[r])) : "string" == typeof (n = a[r--] = D.selector(n)) && a.splice(r + 1, 1) : a.splice(r--, 1);
                else
                    this._propLookup = {},
                        this._siblings = Q(e, this, !1),
                    1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -u,
                    this.render(Math.min(0, -this._delay)))
            }, !0)
                , M = function(e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            }
                , F = function(t, e) {
                var i, s = {};
                for (i in t)
                    V[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!B[i] || B[i] && B[i]._autoCSS) || (s[i] = t[i],
                        delete t[i]);
                t.css = s
            };
            a = D.prototype = new R,
                a.constructor = D,
                a.kill()._gc = !1,
                a.ratio = 0,
                a._firstPT = a._targets = a._overwrittenProps = a._startAt = null,
                a._notifyPluginsOfEnabled = a._lazy = !1,
                D.version = "1.19.0",
                D.defaultEase = a._ease = new T(null,null,1,1),
                D.defaultOverwrite = "auto",
                D.ticker = o,
                D.autoSleep = 120,
                D.lagSmoothing = function(t, e) {
                    o.lagSmoothing(t, e)
                }
                ,
                D.selector = t.$ || t.jQuery || function(e) {
                    var i = t.$ || t.jQuery;
                    return i ? (D.selector = i,
                        i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                }
            ;
            var z = []
                , X = {}
                , I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
                , N = function(t) {
                    for (var e, i = this._firstPT; i; )
                        e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s,
                            i.m ? e = i.m(e, this._target || i.t) : 1e-6 > e && e > -1e-6 && (e = 0),
                            i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
                            i = i._next
                }
                , L = function(t, e, i, s) {
                    var r, n, a, o, l, h, _, u = [t, e], f = 0, c = "", p = 0;
                    for (u.start = t,
                         i && (i(u),
                             t = u[0],
                             e = u[1]),
                             u.length = 0,
                             r = t.match(I) || [],
                             n = e.match(I) || [],
                         s && (s._next = null,
                             s.blob = 1,
                             u._firstPT = u._applyPT = s),
                             l = n.length,
                             o = 0; l > o; o++)
                        _ = n[o],
                            h = e.substr(f, e.indexOf(_, f) - f),
                            c += h || !o ? h : ",",
                            f += h.length,
                            p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1),
                            _ === r[o] || r.length <= o ? c += _ : (c && (u.push(c),
                                c = ""),
                                a = parseFloat(r[o]),
                                u.push(a),
                                u._firstPT = {
                                    _next: u._firstPT,
                                    t: u,
                                    p: u.length - 1,
                                    s: a,
                                    c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                                    f: 0,
                                    m: p && 4 > p ? Math.round : 0
                                }),
                            f += _.length;
                    return c += e.substr(f),
                    c && u.push(c),
                        u.setRatio = N,
                        u
                }
                , E = function(t, e, i, s, r, n, a, o, l) {
                    "function" == typeof s && (s = s(l || 0, t));
                    var h, _, u = "get" === i ? t[e] : i, f = typeof t[e], c = "string" == typeof s && "=" === s.charAt(1), p = {
                        t: t,
                        p: e,
                        s: u,
                        f: "function" === f,
                        pg: 0,
                        n: r || e,
                        m: n ? "function" == typeof n ? n : Math.round : 0,
                        pr: 0,
                        c: c ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - u || 0
                    };
                    return "number" !== f && ("function" === f && "get" === i && (_ = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        p.s = u = a ? t[_](a) : t[_]()),
                        "string" == typeof u && (a || isNaN(u)) ? (p.fp = a,
                            h = L(u, s, o || D.defaultStringFilter, p),
                            p = {
                                t: h,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 2,
                                pg: 0,
                                n: r || e,
                                pr: 0,
                                m: 0
                            }) : c || (p.s = parseFloat(u),
                            p.c = parseFloat(s) - p.s || 0)),
                        p.c ? ((p._next = this._firstPT) && (p._next._prev = p),
                            this._firstPT = p,
                            p) : void 0
                }
                , Y = D._internals = {
                    isArray: p,
                    isSelector: M,
                    lazyTweens: z,
                    blobDif: L
                }
                , B = D._plugins = {}
                , j = Y.tweenLookup = {}
                , U = 0
                , V = Y.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1
                }
                , q = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                }
                , W = R._rootFramesTimeline = new C
                , Z = R._rootTimeline = new C
                , G = 30
                , $ = Y.lazyRender = function() {
                    var t, e = z.length;
                    for (X = {}; --e > -1; )
                        (t = z[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0),
                            t._lazy = !1);
                    z.length = 0
                }
            ;
            Z._startTime = o.time,
                W._startTime = o.frame,
                Z._active = W._active = !0,
                setTimeout($, 1),
                R._updateRoot = D.render = function() {
                    var t, e, i;
                    if (z.length && $(),
                        Z.render((o.time - Z._startTime) * Z._timeScale, !1, !1),
                        W.render((o.frame - W._startTime) * W._timeScale, !1, !1),
                    z.length && $(),
                    o.frame >= G) {
                        G = o.frame + (parseInt(D.autoSleep, 10) || 120);
                        for (i in j) {
                            for (e = j[i].tweens,
                                     t = e.length; --t > -1; )
                                e[t]._gc && e.splice(t, 1);
                            0 === e.length && delete j[i]
                        }
                        if ((!(i = Z._first) || i._paused) && D.autoSleep && !W._first && 1 === o._listeners.tick.length) {
                            for (; i && i._paused; )
                                i = i._next;
                            i || o.sleep()
                        }
                    }
                }
                ,
                o.addEventListener("tick", R._updateRoot);
            var Q = function(t, e, i) {
                var s, r, n = t._gsTweenID;
                if (j[n || (t._gsTweenID = n = "t" + U++)] || (j[n] = {
                    target: t,
                    tweens: []
                }),
                e && (s = j[n].tweens,
                    s[r = s.length] = e,
                    i))
                    for (; --r > -1; )
                        s[r] === e && s.splice(r, 1);
                return j[n].tweens
            }
                , H = function(t, e, i, s) {
                var r, n, a = t.vars.onOverwrite;
                return a && (r = a(t, e, i, s)),
                    a = D.onOverwrite,
                a && (n = a(t, e, i, s)),
                !1 !== r && !1 !== n
            }
                , K = function(t, e, i, s, r) {
                var n, a, o, l;
                if (1 === s || s >= 4) {
                    for (l = r.length,
                             n = 0; l > n; n++)
                        if ((o = r[n]) !== e)
                            o._gc || o._kill(null, t, e) && (a = !0);
                        else if (5 === s)
                            break;
                    return a
                }
                var h, _ = e._startTime + u, f = [], c = 0, p = 0 === e._duration;
                for (n = r.length; --n > -1; )
                    (o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || J(e, 0, p),
                    0 === J(o, h, p) && (f[c++] = o)) : o._startTime <= _ && o._startTime + o.totalDuration() / o._timeScale > _ && ((p || !o._initted) && _ - o._startTime <= 2e-10 || (f[c++] = o)));
                for (n = c; --n > -1; )
                    if (o = f[n],
                    2 === s && o._kill(i, t, e) && (a = !0),
                    2 !== s || !o._firstPT && o._initted) {
                        if (2 !== s && !H(o, e))
                            continue;
                        o._enabled(!1, !1) && (a = !0)
                    }
                return a
            }
                , J = function(t, e, i) {
                for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline; ) {
                    if (n += s._startTime,
                        r *= s._timeScale,
                        s._paused)
                        return -100;
                    s = s._timeline
                }
                return n /= r,
                    n > e ? n - e : i && n === e || !t._initted && 2 * u > n - e ? u : (n += t.totalDuration() / t._timeScale / r) > e + u ? 0 : n - e - u
            };
            a._init = function() {
                var t, e, i, s, r, n, a = this.vars, o = this._overwrittenProps, l = this._duration, h = !!a.immediateRender, _ = a.ease;
                if (a.startAt) {
                    this._startAt && (this._startAt.render(-1, !0),
                        this._startAt.kill()),
                        r = {};
                    for (s in a.startAt)
                        r[s] = a.startAt[s];
                    if (r.overwrite = !1,
                        r.immediateRender = !0,
                        r.lazy = h && !1 !== a.lazy,
                        r.startAt = r.delay = null,
                        this._startAt = D.to(this.target, 0, r),
                        h)
                        if (this._time > 0)
                            this._startAt = null;
                        else if (0 !== l)
                            return
                } else if (a.runBackwards && 0 !== l)
                    if (this._startAt)
                        this._startAt.render(-1, !0),
                            this._startAt.kill(),
                            this._startAt = null;
                    else {
                        0 !== this._time && (h = !1),
                            i = {};
                        for (s in a)
                            V[s] && "autoCSS" !== s || (i[s] = a[s]);
                        if (i.overwrite = 0,
                            i.data = "isFromStart",
                            i.lazy = h && !1 !== a.lazy,
                            i.immediateRender = h,
                            this._startAt = D.to(this.target, 0, i),
                            h) {
                            if (0 === this._time)
                                return
                        } else
                            this._startAt._init(),
                                this._startAt._enabled(!1),
                            this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = _ = _ ? _ instanceof T ? _ : "function" == typeof _ ? new T(_,a.easeParams) : x[_] || D.defaultEase : D.defaultEase,
                a.easeParams instanceof Array && _.config && (this._ease = _.config.apply(_, a.easeParams)),
                    this._easeType = this._ease._type,
                    this._easePower = this._ease._power,
                    this._firstPT = null,
                    this._targets)
                    for (n = this._targets.length,
                             t = 0; n > t; t++)
                        this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
                else
                    e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                if (e && D._onPluginEvent("_onInitAllProps", this),
                o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
                    a.runBackwards)
                    for (i = this._firstPT; i; )
                        i.s += i.c,
                            i.c = -i.c,
                            i = i._next;
                this._onUpdate = a.onUpdate,
                    this._initted = !0
            }
                ,
                a._initProps = function(e, i, s, r, n) {
                    var a, o, l, h, _, u;
                    if (null == e)
                        return !1;
                    X[e._gsTweenID] && $(),
                    this.vars.css || e.style && e !== t && e.nodeType && B.css && !1 !== this.vars.autoCSS && F(this.vars, e);
                    for (a in this.vars)
                        if (u = this.vars[a],
                            V[a])
                            u && (u instanceof Array || u.push && p(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this));
                        else if (B[a] && (h = new B[a])._onInitTween(e, this.vars[a], this, n)) {
                            for (this._firstPT = _ = {
                                _next: this._firstPT,
                                t: h,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 1,
                                n: a,
                                pg: 1,
                                pr: h._priority,
                                m: 0
                            },
                                     o = h._overwriteProps.length; --o > -1; )
                                i[h._overwriteProps[o]] = this._firstPT;
                            (h._priority || h._onInitAllProps) && (l = !0),
                            (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0),
                            _._next && (_._next._prev = _)
                        } else
                            i[a] = E.call(this, e, a, "get", u, a, 0, null, this.vars.stringFilter, n);
                    return r && this._kill(r, e) ? this._initProps(e, i, s, r, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && K(e, this, i, this._overwrite, s) ? (this._kill(i, e),
                        this._initProps(e, i, s, r, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (X[e._gsTweenID] = !0),
                        l)
                }
                ,
                a.render = function(t, e, i) {
                    var s, r, n, a, o = this._time, l = this._duration, h = this._rawPrevTime;
                    if (t >= l - 1e-7)
                        this._totalTime = this._time = l,
                            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                        this._reversed || (s = !0,
                            r = "onComplete",
                            i = i || this._timeline.autoRemoveChildren),
                        0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                        (0 > h || 0 >= t && t >= -1e-7 || h === u && "isPause" !== this.data) && h !== t && (i = !0,
                        h > u && (r = "onReverseComplete")),
                            this._rawPrevTime = a = !e || t || h === t ? t : u);
                    else if (1e-7 > t)
                        this._totalTime = this._time = 0,
                            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                        (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete",
                            s = this._reversed),
                        0 > t && (this._active = !1,
                        0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== u || "isPause" !== this.data) && (i = !0),
                            this._rawPrevTime = a = !e || t || h === t ? t : u)),
                        this._initted || (i = !0);
                    else if (this._totalTime = this._time = t,
                        this._easeType) {
                        var _ = t / l
                            , f = this._easeType
                            , c = this._easePower;
                        (1 === f || 3 === f && _ >= .5) && (_ = 1 - _),
                        3 === f && (_ *= 2),
                            1 === c ? _ *= _ : 2 === c ? _ *= _ * _ : 3 === c ? _ *= _ * _ * _ : 4 === c && (_ *= _ * _ * _ * _),
                            this.ratio = 1 === f ? 1 - _ : 2 === f ? _ : .5 > t / l ? _ / 2 : 1 - _ / 2
                    } else
                        this.ratio = this._ease.getRatio(t / l);
                    if (this._time !== o || i) {
                        if (!this._initted) {
                            if (this._init(),
                            !this._initted || this._gc)
                                return;
                            if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                                return this._time = this._totalTime = o,
                                    this._rawPrevTime = h,
                                    z.push(this),
                                    void (this._lazy = [t, e]);
                            this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && (this._lazy = !1),
                             this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0),
                             0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
                             this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))),
                                 n = this._firstPT; n; )
                            n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
                                n = n._next;
                        this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i),
                        e || (this._time !== o || s || i) && this._callback("onUpdate")),
                        r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i),
                        s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                            this._active = !1),
                        !e && this.vars[r] && this._callback(r),
                        0 === l && this._rawPrevTime === u && a !== u && (this._rawPrevTime = 0))
                    }
                }
                ,
                a._kill = function(t, e, i) {
                    if ("all" === t && (t = null),
                    null == t && (null == e || e === this.target))
                        return this._lazy = !1,
                            this._enabled(!1, !1);
                    e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                    var s, r, n, a, o, l, h, _, u, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                    if ((p(e) || M(e)) && "number" != typeof e[0])
                        for (s = e.length; --s > -1; )
                            this._kill(t, e[s], i) && (l = !0);
                    else {
                        if (this._targets) {
                            for (s = this._targets.length; --s > -1; )
                                if (e === this._targets[s]) {
                                    o = this._propLookup[s] || {},
                                        this._overwrittenProps = this._overwrittenProps || [],
                                        r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                    break
                                }
                        } else {
                            if (e !== this.target)
                                return !1;
                            o = this._propLookup,
                                r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                        }
                        if (o) {
                            if (h = t || o,
                                _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill),
                            i && (D.onOverwrite || this.vars.onOverwrite)) {
                                for (n in h)
                                    o[n] && (u || (u = []),
                                        u.push(n));
                                if ((u || !t) && !H(this, i, e, u))
                                    return !1
                            }
                            for (n in h)
                                (a = o[n]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s,
                                    l = !0),
                                a.pg && a.t._kill(h) && (l = !0),
                                a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next),
                                a._next && (a._next._prev = a._prev),
                                    a._next = a._prev = null),
                                    delete o[n]),
                                _ && (r[n] = 1);
                            !this._firstPT && this._initted && this._enabled(!1, !1)
                        }
                    }
                    return l
                }
                ,
                a.invalidate = function() {
                    return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this),
                        this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
                        this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
                        this._propLookup = this._targets ? {} : [],
                        R.prototype.invalidate.call(this),
                    this.vars.immediateRender && (this._time = -u,
                        this.render(Math.min(0, -this._delay))),
                        this
                }
                ,
                a._enabled = function(t, e) {
                    if (l || o.wake(),
                    t && this._gc) {
                        var i, s = this._targets;
                        if (s)
                            for (i = s.length; --i > -1; )
                                this._siblings[i] = Q(s[i], this, !0);
                        else
                            this._siblings = Q(this.target, this, !0)
                    }
                    return R.prototype._enabled.call(this, t, e),
                    !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                }
                ,
                D.to = function(t, e, i) {
                    return new D(t,e,i)
                }
                ,
                D.from = function(t, e, i) {
                    return i.runBackwards = !0,
                        i.immediateRender = 0 != i.immediateRender,
                        new D(t,e,i)
                }
                ,
                D.fromTo = function(t, e, i, s) {
                    return s.startAt = i,
                        s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
                        new D(t,e,s)
                }
                ,
                D.delayedCall = function(t, e, i, s, r) {
                    return new D(e,0,{
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        lazy: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }
                ,
                D.set = function(t, e) {
                    return new D(t,0,e)
                }
                ,
                D.getTweensOf = function(t, e) {
                    if (null == t)
                        return [];
                    t = "string" != typeof t ? t : D.selector(t) || t;
                    var i, s, r, n;
                    if ((p(t) || M(t)) && "number" != typeof t[0]) {
                        for (i = t.length,
                                 s = []; --i > -1; )
                            s = s.concat(D.getTweensOf(t[i], e));
                        for (i = s.length; --i > -1; )
                            for (n = s[i],
                                     r = i; --r > -1; )
                                n === s[r] && s.splice(i, 1)
                    } else
                        for (s = Q(t).concat(),
                                 i = s.length; --i > -1; )
                            (s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                    return s
                }
                ,
                D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                    "object" == typeof e && (i = e,
                        e = !1);
                    for (var s = D.getTweensOf(t, e), r = s.length; --r > -1; )
                        s[r]._kill(i, t)
                }
            ;
            var tt = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","),
                    this._propName = this._overwriteProps[0],
                    this._priority = e || 0,
                    this._super = tt.prototype
            }, !0);
            if (a = tt.prototype,
                tt.version = "1.19.0",
                tt.API = 2,
                a._firstPT = null,
                a._addTween = E,
                a.setRatio = N,
                a._kill = function(t) {
                    var e, i = this._overwriteProps, s = this._firstPT;
                    if (null != t[this._propName])
                        this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1; )
                            null != t[i[e]] && i.splice(e, 1);
                    for (; s; )
                        null != t[s.n] && (s._next && (s._next._prev = s._prev),
                            s._prev ? (s._prev._next = s._next,
                                s._prev = null) : this._firstPT === s && (this._firstPT = s._next)),
                            s = s._next;
                    return !1
                }
                ,
                a._mod = a._roundProps = function(t) {
                    for (var e, i = this._firstPT; i; )
                        e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")],
                        e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e),
                            i = i._next
                }
                ,
                D._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o; ) {
                            for (a = o._next,
                                     s = r; s && s.pr > o.pr; )
                                s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o,
                                (o._next = s) ? s._prev = o : n = o,
                                o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o; )
                        o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                            o = o._next;
                    return i
                }
                ,
                tt.activate = function(t) {
                    for (var e = t.length; --e > -1; )
                        t[e].API === tt.API && (B[(new t[e])._propName] = t[e]);
                    return !0
                }
                ,
                g.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API))
                        throw "illegal plugin definition.";
                    var e, i = t.propName, s = t.priority || 0, r = t.overwriteProps, n = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    }, a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        tt.call(this, i, s),
                            this._overwriteProps = r || []
                    }, !0 === t.global), o = a.prototype = new tt(i);
                    o.constructor = a,
                        a.API = t.API;
                    for (e in n)
                        "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version,
                        tt.activate([a]),
                        a
                }
                ,
                r = t._gsQueue) {
                for (n = 0; n < r.length; n++)
                    r[n]();
                for (a in d)
                    d[a].func || t.console.log("GSAP encountered missing dependency: " + a)
            }
            l = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
!function() {
    function e(e, t, n) {
        var i = "";
        if (n) {
            var o = new Date;
            o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3),
                i = "; expires=" + o.toUTCString()
        }
        document.cookie = e + "=" + (t || "") + i + "; path=/"
    }
    var t = document.getElementById("cookies");
    document.getElementById("closeCookie").addEventListener("click", function() {
        t.classList = "cookies",
            e("lorienprivacy", "1", 30)
    }),
    function(e) {
        for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
            for (var o = n[i]; " " == o.charAt(0); )
                o = o.substring(1, o.length);
            if (0 == o.indexOf(t))
                return o.substring(t.length, o.length)
        }
        return null
    }("lorienprivacy") || (t.className += " active")
}();
$(document).ready(function() {
    var t = $("header").height();
    $(window).width() <= 768 && (t += $("header .bar.bar--abs").outerHeight()),
        $("a[href*=#]").bind("click", function(a) {
            a.preventDefault();
            var e = $(this).attr("href")
                , o = $(e).offset().top - t;
            $("html").animate({
                scrollTop: o
            }, 500, function() {
                window.location.hash = "" + e,
                    $("html").animate({
                        scrollTop: o
                    }, 0)
            })
        })
});
$(document).ready(function() {
    function t() {
        o.each(function() {
            $this = $(this);
            var t = $('.circles a[href="#' + $this.attr("id") + '"]').data("number") - 1;
            $this.offset().top + 20 - $(window).height() / 2 < $(window).scrollTop() && $this.offset().top + 20 + $this.height() - $(window).height() / 2 > $(window).scrollTop() ? n.eq(t).addClass("active") : n.eq(t).removeClass("active")
        })
    }
    function i(t) {
        $("body,html").animate({
            scrollTop: t.offset().top - 40
        }, 500)
    }
    function e(t) {
        var i = $(window).scrollTop()
            , e = i + $(window).height()
            , o = t.offset().top
            , n = o + t.outerHeight(!0);
        return o > i && o < e || n > i && n < e || i >= o && i <= n || e >= o && e <= n
    }
    if ($(".section--nav").length) {
        var o = $(".section--nav")
            , n = $("nav.circles li a");
        if ($(".prodList").length)
            var s = $(".section").eq(0).find(".text");
        if ($(".area").length)
            var s = $(".boxes .num");
        t(),
            $(window).on("scroll", function() {
                t(),
                    0 == e($(".form .text")) && 0 == e(s) ? $("nav.circles").addClass("active") : $("nav.circles").removeClass("active")
            }),
            n.on("click", function(t) {
                t.preventDefault(),
                    i($(this.hash))
            })
    }
});
function save_email() {
    $.ajax({
        type: "post",
        url: $(".jsSrc").text() + "/save-emails.php",
        data: {
            flname: $('.form input[name="email-100"]').val(),
            url: $('.form input[name="text-549"]').val()
        },
        success: function(a) {
            $(a)
        }
    })
}
!function() {
    $(".jsSlider").length && $(".jsSlider").each(function() {
        $(this).slick({
            speed: 500,
            slidesToShow: 1,
            centerMode: !0,
            fade: !0,
            prevArrow: $(this).parents(".section").find(".arrows .prev"),
            nextArrow: $(this).parents(".section").find(".arrows .next")
        })
    }),
    $(".jsGallery").length && $(".jsGallery").each(function() {
        $(this).slick({
            speed: 500,
            centerMode: !0,
            variableWidth: !0,
            slidesToShow: 1,
            prevArrow: $(this).parents(".section").find(".arrows .prev"),
            nextArrow: $(this).parents(".section").find(".arrows .next"),
            responsive: [{
                breakpoint: 1024,
                settings: {
                    variableWidth: !1
                }
            }]
        })
    })
}();
$(document).ready(function() {
    function e() {
        if ($(window).innerWidth() < 1680)
            var e = 60;
        else
            var e = 70;
        var t = $("footer .wrapper").offset().left;
        $(".fb").css({
            left: t - e,
            opacity: 1
        })
    }
    function t(e) {
        var t = $(e).parents(".section").index(".section")
            , o = t + 1
            , n = $("header").height() + $(".bar").height();
        $("html, body").animate({
            scrollTop: $("section").eq(o).offset().top - n
        }, 500)
    }
    function o() {
        $(window).scrollTop() > 200 ? $("header").addClass("header--small") : $("header").removeClass("header--small")
    }
    var n = $(".jsSkip");
    $(".jsCounter").lettering(),
        o(),
        e(),
        $(window).on("resize", function() {
            e()
        }),
        $(window).on("scroll", function() {
            o()
        }),
        n.on("click", function() {
            t($(this))
        }),
    (window.location.href.indexOf("page/") > -1 || window.location.href.indexOf("/typ/") > -1) && $("html, body").animate({
        scrollTop: $("#start").offset().top - $("header").height()
    }, 500),
        $("#url").val($(".jsUrl").text()),
        $("#jsId").val($(".jsId").text()),
        $("input, textarea").on("focus", function() {
            $(this).parents(".field").addClass("active")
        }),
        $("input, textarea").on("focusout", function() {
            "" == $(this).val() && $(this).parents(".field").removeClass("active")
        })
});
$(document).ready(function() {
    var i = $(".jsNav")
        , c = i.find(".hamburger")
        , e = (i.find("ul"),
        $(".recipient li"));
    $("#choice").val($(".recipient li.active").text()),
        c.on("click", function() {
            i.toggleClass("active")
        }),
        e.on("click", function() {
            var i = $(this).text();
            e.removeClass("active"),
                $(this).addClass("active"),
                $("#choice").val(i)
        })
});
