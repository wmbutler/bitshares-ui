webpackJsonp([1], {
    105: function(e, t, i) {
        "use strict";
        function n(e) {
            var t, i, n, a, o, l, h, d, c, p;
            e.point2 || (e.point2 = e.point1),
                (t = e.point1.x),
                (i = e.point1.y),
                (n = e.point2.x),
                (a = e.point2.y),
                (o = 16),
                (l = o - 6),
                (h = o - 6),
                (d = t <= n ? t - l : t + l),
                (c = i <= a ? i + h : i - h),
                (d -= 1),
                (c -= 3),
                (p = {
                    items: [new r(d, c)],
                    char: [String.fromCharCode("0xF017").toUpperCase()],
                    color: e.color,
                    vertOffset: 0,
                    height: o,
                    fontFamily: "FontAwesome"
                }),
                s.call(this, p);
        }
        var r = i(1).Point,
            s = i(422).PaneRendererUnicodeChar;
        inherit(n, s),
            (t.PaneRendererClockIcon = TradingView.PaneRendererClockIcon = n);
    },
    117: function(e, t, i) {
        "use strict";
        function n(e, t, i) {
            (this._cache = e), (this._cacheRect = t), (this._targetRect = i);
        }
        var r = i(1).Point,
            s = i(49).pointInRectangle,
            a = i(4);
        (n.prototype.draw = function(e) {
            e.translate(0.5, 0.5),
                e.drawImage(
                    this._cache,
                    this._cacheRect.left,
                    this._cacheRect.top,
                    this._cacheRect.width,
                    this._cacheRect.height,
                    this._targetRect.left,
                    this._targetRect.top,
                    this._targetRect.width,
                    this._targetRect.height
                ),
                e.translate(-0.5, -0.5);
        }),
            (n.prototype.hitTest = function(e) {
                var t = new r(this._targetRect.left, this._targetRect.top),
                    i = t.add(
                        new r(this._targetRect.width, this._targetRect.height)
                    );
                return s(e, t, i) ? new a(a.REGULAR) : null;
            }),
            (e.exports = n);
    },
    229: function(e, t, i) {
        "use strict";
        function n(e, t, i, n) {
            var r = s.equalPoints(i, n[0])
                ? s.equalPoints(i, n[1]) ? null : n[1]
                : n[0];
            return null !== e && null !== r
                ? l.intersectPolygonAndHalfplane(
                      e,
                      s.halfplaneThroughPoint(s.lineThroughPoints(t, i), r)
                  )
                : null;
        }
        var r, s, a, o, l, h, d, c;
        Object.defineProperty(t, "__esModule", {value: !0}),
            (r = i(21)),
            (s = i(1)),
            (a = i(49)),
            (o = i(33)),
            (l = i(98)),
            (h = i(4)),
            (d = i(19)),
            (c = (function() {
                function e() {
                    this._data = null;
                }
                return (
                    (e.prototype.setData = function(e) {
                        this._data = e;
                    }),
                    (e.prototype.draw = function(e) {
                        var t, i;
                        if (
                            null !== this._data &&
                            null !== (t = this._visiblePolygon())
                        ) {
                            for (
                                e.beginPath(), e.moveTo(t[0].x, t[0].y), i = 1;
                                i < t.length;
                                i++
                            )
                                e.lineTo(t[i].x, t[i].y);
                            (e.fillStyle = d.generateColor(
                                this._data.color,
                                this._data.transparency,
                                !0
                            )),
                                e.fill();
                        }
                    }),
                    (e.prototype.hitTest = function(e) {
                        if (
                            null === this._data ||
                            !this._data.hittestOnBackground
                        )
                            return null;
                        var t = this._visiblePolygon();
                        return null !== t && a.pointInPolygon(e, t)
                            ? new h(h.MOVEPOINT_BACKGROUND)
                            : null;
                    }),
                    (e.prototype._visiblePolygon = function() {
                        var e,
                            t,
                            i = r.ensureNotNull(this._data),
                            a = i.p1,
                            l = i.p2,
                            h = i.p3,
                            d = i.p4;
                        return s.equalPoints(a, l) ||
                            s.equalPoints(h, d) ||
                            (o.distanceToLine(a, l, h).distance < 1e-6 &&
                                o.distanceToLine(a, l, d).distance < 1e-6)
                            ? null
                            : i.width <= 0 || i.height <= 0
                                ? null
                                : ((e = [
                                      new s.Point(0, 0),
                                      new s.Point(i.width, 0),
                                      new s.Point(i.width, i.height),
                                      new s.Point(0, i.height)
                                  ]),
                                  (t = e),
                                  (t = n(t, a, l, [d, h])),
                                  (t = n(t, d, h, [a, l])),
                                  s.equalPoints(h, a) ||
                                      (t = n(t, h, a, [l, d])),
                                  t);
                    }),
                    e
                );
            })()),
            (t.ChannelRenderer = c);
    },
    230: function(e, t, i) {
        "use strict";
        var n, r, s, a, o, l;
        Object.defineProperty(t, "__esModule", {value: !0}),
            (n = i(4)),
            (r = i(33)),
            (s = i(49)),
            (a = i(19)),
            (o = i(101)),
            (l = (function() {
                function e() {
                    this._data = null;
                }
                return (
                    (e.prototype.setData = function(e) {
                        this._data = e;
                    }),
                    (e.prototype.draw = function(e) {
                        var t, i, n, r;
                        null === this._data ||
                            this._data.points.length < 2 ||
                            ((e.lineCap = "butt"),
                            (e.strokeStyle = this._data.color),
                            (e.lineWidth = this._data.linewidth),
                            void 0 !== this._data.linestyle &&
                                o.setLineStyle(e, this._data.linestyle),
                            (t = this._data.points),
                            (i = t[0]),
                            (n = t[1]),
                            (r =
                                2 === this._data.points.length
                                    ? n
                                    : this._data.points[2]),
                            e.beginPath(),
                            e.moveTo(i.x, i.y),
                            e.lineTo(n.x, n.y),
                            e.lineTo(r.x, r.y),
                            e.lineTo(i.x, i.y),
                            this._data.fillBackground &&
                                ((e.fillStyle = a.generateColor(
                                    this._data.backcolor,
                                    this._data.transparency
                                )),
                                e.fill()),
                            e.stroke());
                    }),
                    (e.prototype.hitTest = function(e) {
                        var t, i, a, o, l;
                        return null === this._data ||
                            this._data.points.length < 2
                            ? null
                            : ((t = this._data.points),
                              (i = t[0]),
                              (a = t[1]),
                              (o = r.distanceToSegment(i, a, e)),
                              o.distance <= 3
                                  ? new n(n.MOVEPOINT)
                                  : this._data.points.length < 3
                                      ? null
                                      : ((l = this._data.points[2]),
                                        (o = r.distanceToSegment(a, l, e)),
                                        o.distance <= 3
                                            ? new n(n.MOVEPOINT)
                                            : ((o = r.distanceToSegment(
                                                  l,
                                                  i,
                                                  e
                                              )),
                                              o.distance <= 3
                                                  ? new n(n.MOVEPOINT)
                                                  : this._data.fillBackground &&
                                                    s.pointInTriangle(
                                                        i,
                                                        a,
                                                        l,
                                                        e
                                                    )
                                                      ? new n(
                                                            n.MOVEPOINT_BACKGROUND
                                                        )
                                                      : null)));
                    }),
                    e
                );
            })()),
            (t.TriangleRenderer = l);
    },
    274: function(e, t, i) {
        "use strict";
        function n(e, t) {
            p.call(this, e, t), (this._invalidated = !0);
        }
        var r = i(1).Point,
            s = i(53),
            a = s.parseRgb,
            o = s.darkenRgb,
            l = s.rgbToHexString,
            h = s.rgbToBlackWhiteString,
            d = i(494).EllipseRendererSimple,
            c = i(27).TextRenderer,
            p = i(12).LineSourcePaneView,
            _ = i(16).TrendLineRenderer,
            u = i(4),
            f = i(8).CompositeRenderer,
            g = i(56),
            v = i(19),
            w = i(18).LineEnd;
        inherit(n, p),
            (n.prototype.renderer = function() {
                var e,
                    t,
                    i,
                    n,
                    s,
                    p,
                    v,
                    w,
                    y,
                    m,
                    x,
                    b,
                    S,
                    P,
                    R,
                    T,
                    L,
                    C,
                    k,
                    I,
                    B,
                    M,
                    A;
                if (
                    (this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    !this._wave)
                )
                    return null;
                for (
                    e = this.isAnchorsRequired() ? 0 : 1,
                        t = new f(),
                        i = this._source.properties(),
                        n = 0;
                    n < this._wave.length;
                    n++
                )
                    (s = new _()), s.setData(this._wave[n]), t.append(s);
                for (
                    p = 1,
                        this._points.length > 2 &&
                            ((v = this._points[2]),
                            (w = this._points[1]),
                            (p = g.sign(v.y - w.y))),
                        y = [],
                        m = 0,
                        this._model.lineBeingCreated() === this._source &&
                            (m = 1),
                        x = h(a(this._model.backgroundColor()), 150),
                        b = "black" === x ? "white" : "black",
                        S = i.color.value(),
                        n = 0;
                    n < this._points.length - m;
                    n++, p = -p
                )
                    n < e ||
                        ((P = this._source.label(n)),
                        (R = P.label),
                        "circle" === P.decoration &&
                            ((T = this._points[n].clone()),
                            1 === p
                                ? (T.y += 13 + P.fontIncrease / 2)
                                : (T.y -= 14 + P.fontIncrease / 2),
                            (L = (12 + P.fontIncrease) / 2 + 2),
                            (v = T.subtract(new r(L, L))),
                            (w = T.add(new r(L, L))),
                            (C = {
                                points: [v, w],
                                color: l(o(a(S), "black" === b ? 15 : -15)),
                                linewidth: 1,
                                fillBackground: !1
                            }),
                            (k = new d(C)),
                            t.append(k)),
                        "brackets" === P.decoration && (R = "(" + R + ")"),
                        (I = {
                            points: [this._points[n]],
                            text: R,
                            color: l(o(a(S), "black" === b ? 15 : -15)),
                            vertAlign: 1 === p ? "top" : "bottom",
                            horzAlign: "center",
                            font: "Arial",
                            offsetX: 0,
                            offsetY: 1 === p ? 5 : -10,
                            fontsize: 12 + P.fontIncrease,
                            bold: P.bold
                        }),
                        y.push(I),
                        "" !== P &&
                            t.append(new c(I, new u(u.CHANGEPOINT, n))));
                if (this.isAnchorsRequired()) {
                    for (B = [], M = 0; M < y.length; M++)
                        (A = this._points[M].clone()),
                            (A.y = y[M].points[0].y),
                            (A.data = M),
                            B.push(A);
                    this._model.lineBeingCreated() === this._source && B.pop(),
                        t.append(this.createLineAnchor({points: B}));
                }
                return t;
            }),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n, s, a, o, l, h, d, c, _, u, f, g, y;
                if (
                    (p.prototype._updateImpl.call(this),
                    (this._wave = []),
                    (e = this._source.properties()),
                    (t = this._source.priceScale()),
                    (i = this._model.timeScale()),
                    t &&
                        !t.isEmpty() &&
                        !i.isEmpty() &&
                        (this._source.priceScale().isPercent() &&
                            (n = this._source.ownerSource().firstValue()),
                        (s = e.color.value()),
                        e.showWave.value()))
                )
                    for (a = this._source.points(), o = 1; o < a.length; o++)
                        (l = a[o - 1]),
                            (h = a[o]),
                            (d = i.indexToCoordinate(l.index)),
                            (c = i.indexToCoordinate(h.index)),
                            (_ = l.price),
                            (u = h.price),
                            this._source.priceScale().isPercent() &&
                                ((_ = this._source
                                    .priceScale()
                                    .priceRange()
                                    .convertToPercent(_, n)),
                                (u = this._source
                                    .priceScale()
                                    .priceRange()
                                    .convertToPercent(u, n))),
                            (f = t.priceToCoordinate(_)),
                            (g = t.priceToCoordinate(u)),
                            (y = {
                                points: [new r(d, f), new r(c, g)],
                                width: i.width(),
                                height: t.height(),
                                color: v.generateColor(s, 0),
                                linewidth: e.linewidth.value(),
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                extendleft: !1,
                                extendright: !1,
                                leftend: w.Circle,
                                rightend: w.Circle,
                                endstyle: {
                                    strokeWidth: 1,
                                    fillStyle: this._model.backgroundColor()
                                },
                                overlayLineEndings: !0
                            }),
                            this._wave.push(y);
            }),
            (t.ElliottLabelsPaneView = n);
    },
    314: function(e, t, i) {
        "use strict";
        function n(e, t, i, n) {
            return null !== e
                ? l.intersectPolygonAndHalfplane(
                      e,
                      a.halfplaneThroughPoint(a.lineThroughPoints(t, i), n)
                  )
                : null;
        }
        function r(e, t) {
            return e.length === t;
        }
        var s, a, o, l, h, d, c, p, _;
        Object.defineProperty(t, "__esModule", {value: !0}),
            (s = i(21)),
            (a = i(1)),
            (o = i(33)),
            (l = i(98)),
            (h = i(101)),
            (d = i(4)),
            (c = i(69)),
            (p = i(19)),
            (_ = (function() {
                function e(e, t) {
                    (this._data = null),
                        (this._hittestResult = e || new d(d.MOVEPOINT)),
                        (this._backHittestResult =
                            t || new d(d.MOVEPOINT_BACKGROUND));
                }
                return (
                    (e.prototype.setData = function(e) {
                        this._data = e;
                    }),
                    (e.prototype.draw = function(e) {
                        var t, i, n, s, a, o, l, d;
                        null === this._data ||
                            this._data.points.length < 2 ||
                            ((e.lineCap = "butt"),
                            (e.strokeStyle = this._data.color),
                            (e.lineWidth = this._data.linewidth),
                            h.setLineStyle(e, this._data.linestyle),
                            (t = this._data.points),
                            (i = t[0]),
                            (n = t[1]),
                            this._data.skipLines ||
                                this._extendAndDrawLineSegment(e, i, n),
                            r(this._data.points, 4) &&
                                ((s = this._data.points),
                                (a = s[2]),
                                (o = s[3]),
                                this._data.skipLines ||
                                    this._data.skipTopLine ||
                                    this._extendAndDrawLineSegment(e, a, o),
                                this._data.fillBackground &&
                                    this._drawBackground(e, this._data.points),
                                this._data.showMidline &&
                                    !this._data.skipLines &&
                                    ((e.strokeStyle = this._data.midcolor),
                                    (e.lineWidth = this._data.midlinewidth),
                                    h.setLineStyle(e, this._data.midlinestyle),
                                    (l = i.add(a).scaled(0.5)),
                                    (d = n.add(o).scaled(0.5)),
                                    this._extendAndDrawLineSegment(e, l, d))));
                    }),
                    (e.prototype.hitTest = function(e) {
                        var t, i, n, s, a, o, l, h, d, c, p;
                        if (null === this._data || this._data.points.length < 2)
                            return null;
                        if (
                            ((t = this._data.points),
                            (i = t[0]),
                            (n = t[1]),
                            null !==
                                (s = this._extendAndHitTestLineSegment(
                                    e,
                                    i,
                                    n
                                )))
                        )
                            return s;
                        if (
                            r(this._data.points, 4) &&
                            !this._data.skipTopLine
                        ) {
                            if (
                                ((a = this._data.points),
                                (o = a[2]),
                                (l = a[3]),
                                null !==
                                    (h = this._extendAndHitTestLineSegment(
                                        e,
                                        o,
                                        l
                                    )))
                            )
                                return h;
                            if (
                                this._data.showMidline &&
                                !this._data.skipLines &&
                                ((d = i.add(o).scaled(0.5)),
                                (c = n.add(l).scaled(0.5)),
                                null !==
                                    (p = this._extendAndHitTestLineSegment(
                                        e,
                                        d,
                                        c
                                    )))
                            )
                                return p;
                        }
                        return this._data.hittestOnBackground &&
                            this._data.fillBackground
                            ? this._hitTestBackground(e)
                            : null;
                    }),
                    (e.prototype._getColor = function() {
                        var e = s.ensureNotNull(this._data);
                        return p.generateColor(e.backcolor, e.transparency);
                    }),
                    (e.prototype._extendAndDrawLineSegment = function(e, t, i) {
                        var n = this._extendAndClipLineSegment(t, i);
                        null !== n &&
                            h.drawLine(e, n[0].x, n[0].y, n[1].x, n[1].y);
                    }),
                    (e.prototype._extendAndHitTestLineSegment = function(
                        e,
                        t,
                        i
                    ) {
                        var n,
                            r = this._extendAndClipLineSegment(t, i);
                        return null !== r &&
                            ((n = o.distanceToSegment(r[0], r[1], e)),
                            n.distance <= 3)
                            ? this._hittestResult
                            : null;
                    }),
                    (e.prototype._extendAndClipLineSegment = function(e, t) {
                        var i = s.ensureNotNull(this._data);
                        return c.extendAndClipLineSegment(
                            e,
                            t,
                            i.width,
                            i.height,
                            i.extendleft,
                            i.extendright
                        );
                    }),
                    (e.prototype._drawBackground = function(e, t) {
                        var i,
                            r,
                            l,
                            h = s.ensureNotNull(this._data),
                            d = t[0],
                            c = t[1],
                            p = t[2],
                            _ = t[3];
                        if (
                            !(
                                a.equalPoints(d, c) ||
                                a.equalPoints(p, _) ||
                                o.distanceToLine(d, c, p).distance < 1e-6 ||
                                o.distanceToLine(d, c, _).distance < 1e-6 ||
                                h.width <= 0 ||
                                h.height <= 0 ||
                                ((i = [
                                    new a.Point(0, 0),
                                    new a.Point(h.width, 0),
                                    new a.Point(h.width, h.height),
                                    new a.Point(0, h.height)
                                ]),
                                (r = i),
                                (r = n(r, d, c, _)),
                                h.extendright || (r = n(r, c, _, p)),
                                (r = n(r, _, p, d)),
                                h.extendleft || (r = n(r, p, d, c)),
                                null === r)
                            )
                        ) {
                            for (
                                e.beginPath(), e.moveTo(r[0].x, r[0].y), l = 1;
                                l < r.length;
                                l++
                            )
                                e.lineTo(r[l].x, r[l].y);
                            (e.fillStyle = this._getColor()), e.fill();
                        }
                    }),
                    (e.prototype._hitTestBackground = function(e) {
                        var t,
                            i,
                            n,
                            a,
                            o,
                            l,
                            h,
                            d,
                            c,
                            p,
                            _,
                            u = s.ensureNotNull(this._data);
                        return r(u.points, 4)
                            ? ((t = u.points),
                              (i = t[0]),
                              (n = t[1]),
                              (a = t[2]),
                              (o = (n.y - i.y) / (n.x - i.x)),
                              (l = i.y + o * (e.x - i.x)),
                              (h = a.y + o * (e.x - a.x)),
                              (d = Math.max(l, h)),
                              (c = Math.min(l, h)),
                              (p = Math.min(i.x, n.x)),
                              (_ = Math.max(i.x, n.x)),
                              !u.extendleft && e.x < p
                                  ? null
                                  : !u.extendright && e.x > _
                                      ? null
                                      : e.y >= c && e.y <= d
                                          ? this._backHittestResult
                                          : null)
                            : null;
                    }),
                    e
                );
            })()),
            (t.ParallelChannelRenderer = _);
    },
    392: function(e, t) {
        "use strict";
        e.exports = function(e, t) {
            var i = document.body,
                n = i[e];
            return (
                n ||
                    ((n = document.createElement("img")),
                    (n.src = t),
                    (i[e] = n)),
                n
            );
        };
    },
    412: function(e, t, i) {
        "use strict";
        function n(e, t) {
            r.call(this, e, t),
                (this._numericFormatter = new h()),
                (this._invalidated = !0),
                (this._bcRetracementTrend = new s()),
                (this._xdRetracementTrend = new s()),
                (this._mainTriangleRenderer = new a()),
                (this._triangleRendererPoints234 = new a()),
                (this._abLabelRenderer = new o({})),
                (this._bcLabelRenderer = new o({})),
                (this._cdLabelRenderer = new o({})),
                (this._xdLabelRenderer = new o({})),
                (this._textRendererALabel = new o({})),
                (this._textRendererBLabel = new o({})),
                (this._textRendererCLabel = new o({})),
                (this._textRendererDLabel = new o({})),
                (this._textRendererXLabel = new o({}));
        }
        var r = i(12).LineSourcePaneView,
            s = i(16).TrendLineRenderer,
            a = i(230).TriangleRenderer,
            o = i(27).TextRenderer,
            l = i(8).CompositeRenderer,
            h = i(38).NumericFormatter,
            d = i(18).LineEnd;
        inherit(n, r),
            (n.prototype.renderer = function() {
                var e, t, i, n, r, s, a, o, h, c;
                return (
                    this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    this._points.length < 2
                        ? null
                        : ((e = this._source.properties()),
                          (t = new l()),
                          (i = [
                              this._points[0],
                              this._points[1],
                              this._points.length < 3
                                  ? this._points[1]
                                  : this._points[2]
                          ]),
                          (n = this),
                          (r = function(t, i) {
                              return {
                                  points: [t],
                                  text: i,
                                  color: e.textcolor.value(),
                                  vertAlign: "middle",
                                  horzAlign: "center",
                                  font: e.font.value(),
                                  offsetX: 0,
                                  offsetY: 0,
                                  bold: e.bold && e.bold.value(),
                                  italic: e.italic && e.italic.value(),
                                  fontsize: e.fontsize.value(),
                                  backgroundColor: n._source
                                      .properties()
                                      .color.value(),
                                  backgroundRoundRect: 4
                              };
                          }),
                          (s = function(e, t) {
                              return {
                                  points: [e, t],
                                  width: n._model.timeScale().width(),
                                  height: n._source.priceScale().height(),
                                  color: n._source.properties().color.value(),
                                  linewidth: 1,
                                  linestyle: CanvasEx.LINESTYLE_SOLID,
                                  extendleft: !1,
                                  extendright: !1,
                                  leftend: d.Normal,
                                  rightend: d.Normal
                              };
                          }),
                          (a = {}),
                          (a.points = i),
                          (a.color = e.color.value()),
                          (a.linewidth = e.linewidth.value()),
                          (a.backcolor = e.backgroundColor.value()),
                          (a.fillBackground = e.fillBackground.value()),
                          (a.transparency = e.transparency.value()),
                          this._mainTriangleRenderer.setData(a),
                          t.append(this._mainTriangleRenderer),
                          this._points.length > 3 &&
                              ((i = [
                                  this._points[2],
                                  this._points[3],
                                  5 === this._points.length
                                      ? this._points[4]
                                      : this._points[3]
                              ]),
                              (a = {}),
                              (a.points = i),
                              (a.color = e.color.value()),
                              (a.linewidth = e.linewidth.value()),
                              (a.backcolor = e.backgroundColor.value()),
                              (a.fillBackground = e.fillBackground.value()),
                              (a.transparency = e.transparency.value()),
                              this._triangleRendererPoints234.setData(a),
                              t.append(this._triangleRendererPoints234)),
                          this._points.length >= 3 &&
                              ((o = this._points[0]
                                  .add(this._points[2])
                                  .scaled(0.5)),
                              (h = r(
                                  o,
                                  this._numericFormatter.format(
                                      this._ABRetracement
                                  )
                              )),
                              this._abLabelRenderer.setData(h),
                              t.append(this._abLabelRenderer)),
                          this._points.length >= 4 &&
                              ((o = this._points[1]
                                  .add(this._points[3])
                                  .scaled(0.5)),
                              (c = s(this._points[1], this._points[3])),
                              this._bcRetracementTrend.setData(c),
                              t.append(this._bcRetracementTrend),
                              (h = r(
                                  o,
                                  this._numericFormatter.format(
                                      this._BCRetracement
                                  )
                              )),
                              this._bcLabelRenderer.setData(h),
                              t.append(this._bcLabelRenderer)),
                          this._points.length >= 5 &&
                              ((o = this._points[2]
                                  .add(this._points[4])
                                  .scaled(0.5)),
                              (h = r(
                                  o,
                                  this._numericFormatter.format(
                                      this._CDRetracement
                                  )
                              )),
                              this._cdLabelRenderer.setData(h),
                              t.append(this._cdLabelRenderer),
                              (c = s(this._points[0], this._points[4])),
                              this._xdRetracementTrend.setData(c),
                              t.append(this._xdRetracementTrend),
                              (o = this._points[0]
                                  .add(this._points[4])
                                  .scaled(0.5)),
                              (h = r(
                                  o,
                                  this._numericFormatter.format(
                                      this._XDRetracement
                                  )
                              )),
                              this._xdLabelRenderer.setData(h),
                              t.append(this._xdLabelRenderer)),
                          (h = r(this._points[0], "X")),
                          this._points[1].y > this._points[0].y
                              ? ((h.vertAlign = "bottom"), (h.offsetY = -10))
                              : ((h.vertAlign = "top"), (h.offsetY = 5)),
                          this._textRendererXLabel.setData(h),
                          t.append(this._textRendererXLabel),
                          (h = r(this._points[1], "A")),
                          this._points[1].y < this._points[0].y
                              ? ((h.vertAlign = "bottom"), (h.offsetY = -10))
                              : ((h.vertAlign = "top"), (h.offsetY = 5)),
                          this._textRendererALabel.setData(h),
                          t.append(this._textRendererALabel),
                          this._points.length > 2 &&
                              ((h = r(this._points[2], "B")),
                              this._points[2].y < this._points[1].y
                                  ? ((h.vertAlign = "bottom"),
                                    (h.offsetY = -10))
                                  : ((h.vertAlign = "top"), (h.offsetY = 5)),
                              this._textRendererBLabel.setData(h),
                              t.append(this._textRendererBLabel)),
                          this._points.length > 3 &&
                              ((h = r(this._points[3], "C")),
                              this._points[3].y < this._points[2].y
                                  ? ((h.vertAlign = "bottom"),
                                    (h.offsetY = -10))
                                  : ((h.vertAlign = "top"), (h.offsetY = 5)),
                              this._textRendererCLabel.setData(h),
                              t.append(this._textRendererCLabel)),
                          this._points.length > 4 &&
                              ((h = r(this._points[4], "D")),
                              this._points[4].y < this._points[3].y
                                  ? ((h.vertAlign = "bottom"),
                                    (h.offsetY = -10))
                                  : ((h.vertAlign = "top"), (h.offsetY = 5)),
                              this._textRendererDLabel.setData(h),
                              t.append(this._textRendererDLabel)),
                          this.addAnchors(t),
                          t)
                );
            }),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n, s;
                r.prototype._updateImpl.call(this),
                    this._source.points().length >= 3 &&
                        ((e = this._source.points()[0]),
                        (t = this._source.points()[1]),
                        (i = this._source.points()[2]),
                        (this._ABRetracement =
                            Math.round(
                                1e3 *
                                    Math.abs(
                                        (i.price - t.price) /
                                            (t.price - e.price)
                                    )
                            ) / 1e3)),
                    this._source.points().length >= 4 &&
                        ((n = this._source.points()[3]),
                        (this._BCRetracement =
                            Math.round(
                                1e3 *
                                    Math.abs(
                                        (n.price - i.price) /
                                            (i.price - t.price)
                                    )
                            ) / 1e3)),
                    this._source.points().length >= 5 &&
                        ((s = this._source.points()[4]),
                        (this._CDRetracement =
                            Math.round(
                                1e3 *
                                    Math.abs(
                                        (s.price - n.price) /
                                            (n.price - i.price)
                                    )
                            ) / 1e3),
                        (this._XDRetracement =
                            Math.round(
                                1e3 *
                                    Math.abs(
                                        (s.price - t.price) /
                                            (t.price - e.price)
                                    )
                            ) / 1e3));
            }),
            (t.Pattern5PaneView = n);
    },
    414: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._levels = []),
                (this._invalidated = !0),
                (this._baseTrendRenderer = new a()),
                (this._edgeTrendRenderer = new a());
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(16).TrendLineRenderer,
            o = i(117),
            l = i(4),
            h = i(8).CompositeRenderer,
            d = i(491).ArcWedgeRenderer,
            c = i(18).LineEnd;
        inherit(n, s),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype._updateImpl = function() {
                var e, t, i, n, a, o, l, h, d, c, p, _, u, f, g, v, w, y, m;
                if (
                    (s.prototype._updateImpl.call(this),
                    (this._cacheState = this._source
                        .getCache()
                        .updateSource(this._source)),
                    (this._levels = []),
                    !(this._points.length < 3))
                )
                    for (
                        e = this._points,
                            t = e[0],
                            i = e[1],
                            n = e[2],
                            a = i.subtract(t).normalized(),
                            o = n.subtract(t).normalized(),
                            l = new r(1, 0),
                            h = new r(0, 1),
                            d = Math.acos(a.dotProduct(l)),
                            a.dotProduct(h) < 0 && (d = 2 * Math.PI - d),
                            this._edge1 = d,
                            c = Math.acos(o.dotProduct(l)),
                            o.dotProduct(h) < 0 && (c = 2 * Math.PI - c),
                            this._edge2 = c,
                            d < c &&
                                ((this._edge1 = Math.max(d, c)),
                                (this._edge2 = Math.min(d, c) + 2 * Math.PI)),
                            Math.abs(d - c) > Math.PI &&
                                ((this._edge1 = Math.min(d, c)),
                                (this._edge2 = Math.max(d, c) - 2 * Math.PI)),
                            p = this._source.properties(),
                            _ = 1;
                        _ <= this._source.getCache().levelsCount();
                        _++
                    )
                        (u = "level" + _),
                            (f = p[u]),
                            f.visible.value() &&
                                ((g = f.coeff.value()),
                                (v = f.color.value()),
                                (w = i.subtract(t).length() * g),
                                (y = a
                                    .add(o)
                                    .scaled(0.5)
                                    .normalized()
                                    .scaled(w)),
                                (m = t.add(y)),
                                this._levels.push({
                                    coeff: g,
                                    color: v,
                                    radius: w,
                                    labelPoint: m,
                                    p1: t.add(a.scaled(w)),
                                    p2: t.add(o.scaled(w)),
                                    linewidth: f.linewidth.value(),
                                    linestyle: f.linestyle.value(),
                                    index: _
                                }));
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, r, s, a, p, _, u, f, g, v, w, y, m, x, b, S, P;
                if (
                    (this._invalidated &&
                        (this._updateImpl(), (this._invalidated = !1)),
                    (e = new h()),
                    this._points.length < 2)
                )
                    return e;
                if (
                    ((t = this._source.properties()),
                    (i = this._points),
                    (n = i[0]),
                    (r = i[1]),
                    (s = {
                        points: [n, r],
                        width: this._model.timeScale().width(),
                        height: this._source.priceScale().height(),
                        color: t.trendline.color.value(),
                        linewidth: t.trendline.visible.value()
                            ? t.trendline.linewidth.value()
                            : 0,
                        linestyle: t.trendline.linestyle.value(),
                        extendleft: !1,
                        extendright: !1,
                        leftend: c.Normal,
                        rightend: c.Normal
                    }),
                    this._baseTrendRenderer.setData(s),
                    e.append(this._baseTrendRenderer),
                    this._points.length < 3)
                )
                    return this.addAnchors(e), e;
                for (
                    a = i[2],
                        p = a.data,
                        _ = r.subtract(n).length(),
                        u = a.subtract(n).normalized(),
                        a = n.add(u.scaled(_)),
                        a.data = p,
                        s = {
                            points: [n, a],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: t.trendline.color.value(),
                            linewidth: t.trendline.visible.value()
                                ? t.trendline.linewidth.value()
                                : 0,
                            linestyle: t.trendline.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: c.Normal,
                            rightend: c.Normal
                        },
                        this._edgeTrendRenderer.setData(s),
                        e.append(this._edgeTrendRenderer),
                        f = this._model._fibWedgeLabelsCache,
                        g = f.canvas().get(0),
                        v = this._levels.length - 1;
                    v >= 0;
                    v--
                )
                    if (
                        ((w = this._levels[v]),
                        (y = {}),
                        (y.center = this._points[0]),
                        (y.radius = w.radius),
                        (y.prevRadius = v > 0 ? this._levels[v - 1].radius : 0),
                        (y.edge = this._edge),
                        (y.color = w.color),
                        (y.linewidth = w.linewidth),
                        (y.edge1 = this._edge1),
                        (y.edge2 = this._edge2),
                        (y.p1 = w.p1),
                        (y.p2 = w.p2),
                        (y.fillBackground = t.fillBackground.value()),
                        (y.transparency = t.transparency.value()),
                        (m = new d()),
                        m.setData(y),
                        m.setHitTest(new l(l.MOVEPOINT, null, w.index)),
                        e.append(m),
                        t.showCoeffs.value())
                    ) {
                        if (
                            !(x = this._cacheState.preparedCells.cells[
                                this._levels[v].index - 1
                            ])
                        )
                            continue;
                        (b = {
                            left: x.left,
                            top: f.topByRow(this._cacheState.row),
                            width: x.width,
                            height: f.rowHeight(this._cacheState.row)
                        }),
                            (S = {
                                left: Math.round(w.labelPoint.x - b.width),
                                top: Math.round(w.labelPoint.y - b.height / 2),
                                width: x.width,
                                height: b.height
                            }),
                            (P = new o(g, b, S)),
                            e.append(P);
                    }
                return (
                    this.isAnchorsRequired() &&
                        ((i = [n, r]),
                        this._model.lineBeingCreated() !== this._source &&
                            i.push(a),
                        e.append(this.createLineAnchor({points: i}))),
                    e
                );
            }),
            (t.FibWedgePaneView = n);
    },
    416: function(e, t, i) {
        "use strict";
        function n() {
            this._data = null;
        }
        function r(e, t, i, r, s, a, l) {
            o.call(this, e, t),
                (this._image = i),
                (this._offsetX = a || 0),
                (this._offsetY = l || 0),
                (this._width = r),
                (this._height = s),
                (this._invalidated = !0),
                (this._marksRenderer = new n());
        }
        var s = i(1).Point,
            a = i(49).pointInRectangle,
            o = i(12).LineSourcePaneView,
            l = i(4),
            h = i(74).SelectionRenderer,
            d = i(8).CompositeRenderer;
        (n.prototype.setData = function(e) {
            this._data = e;
        }),
            (n.prototype.draw = function(e) {
                var t, i;
                null !== this._data &&
                    0 !== this._data.points.length &&
                    ((t = this._data.points[0].x + this._data.offsetX),
                    (i = this._data.points[0].y + this._data.offsetY),
                    e.translate(-0.5, -0.5),
                    e.drawImage(
                        this._data.image,
                        t,
                        i,
                        this._data.width,
                        this._data.height
                    ));
            }),
            (n.prototype.hitTest = function(e) {
                if (null === this._data || 0 === this._data.points.length)
                    return null;
                var t = this._data.points[0].clone();
                return (
                    this._data.offsetX && (t.x += this._data.offsetX),
                    this._data.offsetY && (t.y += this._data.offsetY),
                    a(e, t, t.add(new s(this._data.width, this._data.height)))
                        ? new l(l.MOVEPOINT)
                        : null
                );
            }),
            inherit(r, o),
            (r.prototype.setAnchors = function(e) {
                this._anchorsOffset = e;
            }),
            (r.prototype.renderer = function() {
                var e, t, i, n;
                if (
                    (this._invalidated && this.updateImpl(),
                    (e = {}),
                    (e.points = this._points),
                    (e.color = this._source.properties().color.value()),
                    (e.image = this._image),
                    (e.offsetX = this._offsetX),
                    (e.offsetY = this._offsetY),
                    (e.width = this._width),
                    (e.height = this._height),
                    this._marksRenderer.setData(e),
                    this.isAnchorsRequired() && 1 === e.points.length)
                ) {
                    if (
                        ((t = new d()),
                        t.append(this._marksRenderer),
                        this._anchorsOffset)
                    ) {
                        for (i = [], n = 0; n < e.points.length; n++)
                            i.push(
                                e.points[n].clone().add(this._anchorsOffset)
                            );
                        t.append(new h({points: i}));
                    } else t.append(new h({points: e.points}));
                    return t;
                }
                return this._marksRenderer;
            }),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype.updateImpl = function() {
                o.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (t.MarkPaneView = r);
    },
    418: function(e, t, i) {
        "use strict";
        function n(e, t, i, n, r, a) {
            s.call(this, e, t),
                (this._offsetX = i),
                (this._offsetY = n),
                (this._vertAlign = r),
                (this._horzAlign = a),
                (this._renderer = null),
                (this._invalidated = !0),
                (this._noSelection = !1),
                (this._renderer = new o({}));
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(8).CompositeRenderer,
            o = i(27).TextRenderer;
        inherit(n, s),
            (n.prototype.disableSelection = function() {
                this._noSelection = !0;
            }),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                s.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, s, o, l, h, d, c, p;
                return (
                    this._invalidated && this.updateImpl(),
                    !(e = this._source.priceScale()) || e.isEmpty()
                        ? null
                        : ((t = {}),
                          (i = this._source.properties()),
                          (n = i.locked && i.locked.value()),
                          (t.points = n
                              ? this._source.fixedPoints()
                              : this._points),
                          (t.text = i.text.value()),
                          (t.color = i.color.value()),
                          (t.font = i.font.value()),
                          (t.offsetX = this._offsetX ? this._offsetX : 0),
                          (t.offsetY = this._offsetY ? this._offsetY : 0),
                          (t.vertAlign = this._vertAlign
                              ? this._vertAlign
                              : "top"),
                          (t.horzAlign = this._horzAlign
                              ? this._horzAlign
                              : "left"),
                          (t.fontsize = i.fontsize.value()),
                          i.fillBackground &&
                              i.fillBackground.value() &&
                              ((t.backgroundColor = i.backgroundColor.value()),
                              (t.backgroundTransparency =
                                  1 - i.backgroundTransparency.value() / 100 ||
                                  0)),
                          i.drawBorder &&
                              i.drawBorder.value() &&
                              (t.borderColor = i.borderColor.value()),
                          i.wordWrap &&
                              i.wordWrap.value() &&
                              (t.wordWrapWidth = i.wordWrapWidth.value()),
                          (t.bold = i.bold && i.bold.value()),
                          (t.italic = i.italic && i.italic.value()),
                          (t.highlightBorder =
                              this._model.selectedSource() === this._source),
                          n ||
                              !i.fixedSize ||
                              i.fixedSize.value() ||
                              ((t.scaleX =
                                  this._source._model.timeScale().barSpacing() /
                                  this._source._barSpacing),
                              (s = e.height() / e.priceRange().length()),
                              this._source._isPriceDencityLog &&
                                  !e.isLog() &&
                                  ((o = e.priceRange().minValue()),
                                  (l = e.priceRange().maxValue()),
                                  (o = e._toLog(o)),
                                  (l = e._toLog(l)),
                                  (h = l - o),
                                  (s = e.height() / h)),
                              !this._source._isPriceDencityLog &&
                                  e.isLog() &&
                                  ((o = e.priceRange().minValue()),
                                  (l = e.priceRange().maxValue()),
                                  (o = e._fromLog(o)),
                                  (l = e._fromLog(l)),
                                  (h = l - o),
                                  (s = e.height() / h)),
                              (t.scaleY = s / this._source._priceDencity),
                              (!isFinite(t.scaleY) || t.scaleY <= 0) &&
                                  delete t.scaleY),
                          this._renderer.setData(t),
                          this.isAnchorsRequired() &&
                          1 === t.points.length &&
                          !this._noSelection &&
                          t.wordWrapWidth
                              ? ((d = new a()),
                                d.append(this._renderer),
                                (c = t.points[0]),
                                (p = new r(
                                    c.x + t.wordWrapWidth + ~~(t.fontsize / 6),
                                    c.y +
                                        (t.lines
                                            ? t.lines.length * t.fontsize / 2 +
                                              ~~(t.fontsize / 6)
                                            : 0)
                                )),
                                (p.data = 0),
                                d.append(this.createLineAnchor({points: [p]})),
                                d)
                              : this._renderer)
                );
            }),
            (t.TextPaneView = n);
    },
    481: function(e, t) {
        "use strict";
        function i(e, t) {
            void 0 === t && (t = "&nbsp;");
            var i = (e + "").split(".");
            return (
                i[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) +
                (i[1] ? "." + i[1] : "")
            );
        }
        Object.defineProperty(t, "__esModule", {value: !0}),
            (t.splitThousands = i);
    },
    491: function(e, t, i) {
        "use strict";
        var n, r, s;
        Object.defineProperty(t, "__esModule", {value: !0}),
            (n = i(4)),
            (r = i(19)),
            (s = (function() {
                function e() {
                    (this._data = null),
                        (this._hitTest = new n(n.MOVEPOINT)),
                        (this._backHitTest = new n(n.MOVEPOINT_BACKGROUND));
                }
                return (
                    (e.prototype.setData = function(e) {
                        this._data = e;
                    }),
                    (e.prototype.setHitTest = function(e) {
                        this._hitTest = e;
                    }),
                    (e.prototype.draw = function(e) {
                        if (
                            null !== this._data &&
                            ((e.strokeStyle = this._data.color),
                            (e.lineWidth = this._data.linewidth),
                            e.beginPath(),
                            e.arc(
                                this._data.center.x,
                                this._data.center.y,
                                this._data.radius,
                                this._data.edge1,
                                this._data.edge2,
                                !0
                            ),
                            e.stroke(),
                            this._data.fillBackground)
                        ) {
                            if (
                                (e.arc(
                                    this._data.center.x,
                                    this._data.center.y,
                                    this._data.prevRadius,
                                    this._data.edge2,
                                    this._data.edge1,
                                    !1
                                ),
                                this._data.gradient)
                            ) {
                                var t = e.createRadialGradient(
                                    this._data.center.x,
                                    this._data.center.y,
                                    this._data.prevRadius,
                                    this._data.center.x,
                                    this._data.center.y,
                                    this._data.radius
                                );
                                t.addColorStop(
                                    0,
                                    r.generateColor(
                                        this._data.color1,
                                        this._data.transparency
                                    )
                                ),
                                    t.addColorStop(
                                        1,
                                        r.generateColor(
                                            this._data.color2,
                                            this._data.transparency
                                        )
                                    ),
                                    (e.fillStyle = t);
                            } else
                                e.fillStyle = r.generateColor(
                                    this._data.color,
                                    this._data.transparency,
                                    !0
                                );
                            e.fill();
                        }
                    }),
                    (e.prototype.hitTest = function(e) {
                        var t, i, n, r, s, a, o, l, h, d, c, p;
                        return null === this._data
                            ? null
                            : ((t = e.subtract(this._data.center)),
                              (i = t.length()),
                              Math.abs(i - this._data.radius) <= 4 &&
                              ((n = e.subtract(this._data.p1).length()),
                              (r = e.subtract(this._data.p2).length()),
                              (s = Math.max(n, r)),
                              (a = this._data.p1
                                  .subtract(this._data.p2)
                                  .length()),
                              s <= a)
                                  ? this._hitTest
                                  : this._data.fillBackground &&
                                    i <= this._data.radius &&
                                    ((o = this._data.p1
                                        .subtract(this._data.center)
                                        .normalized()),
                                    (l = this._data.p2
                                        .subtract(this._data.center)
                                        .normalized()),
                                    (h = t.normalized()),
                                    (d = o.dotProduct(l)),
                                    (c = h.dotProduct(o)),
                                    (p = h.dotProduct(l)),
                                    c >= d && p >= d)
                                      ? this._backHitTest
                                      : null);
                    }),
                    e
                );
            })()),
            (t.ArcWedgeRenderer = s);
    },
    492: function(e, t) {
        "use strict";
        function i(e, t, i, n) {
            var r,
                s,
                a,
                o,
                l,
                h = i.subtract(e).length() + i.subtract(t).length(),
                d = 3 / h;
            for (r = 0; r <= 1; r += d)
                if (
                    ((s = e.scaled((1 - r) * (1 - r))),
                    (a = i.scaled(2 * r * (1 - r))),
                    (o = t.scaled(r * r)),
                    (l = s.add(a).add(o)),
                    l.subtract(n).length() < 5)
                )
                    return !0;
            return !1;
        }
        function n(e, t, i, n, r) {
            var s,
                a,
                o,
                l,
                h,
                d,
                c =
                    i.subtract(e).length() +
                    n.subtract(i).length() +
                    t.subtract(n).length(),
                p = 3 / c;
            for (s = 0; s <= 1; s += p)
                if (
                    ((a = e.scaled((1 - s) * (1 - s) * (1 - s))),
                    (o = i.scaled(3 * (1 - s) * (1 - s) * s)),
                    (l = n.scaled(3 * (1 - s) * s * s)),
                    (h = t.scaled(s * s * s)),
                    (d = a
                        .add(o)
                        .add(l)
                        .add(h)),
                    d.subtract(r).length() < 5)
                )
                    return !0;
            return !1;
        }
        function r(e, t, i, n, r) {
            var s,
                a,
                o,
                l,
                h,
                d,
                c,
                p,
                _,
                u = i.subtract(e).length() + i.subtract(t).length();
            if (!u) return [];
            for (s = 3 / u, a = 500, o = [], l = 1; l <= a * s; l += s)
                (h = e.scaled((1 - l) * (1 - l))),
                    (d = i.scaled(2 * l * (1 - l))),
                    (c = t.scaled(l * l)),
                    (p = h.add(d).add(c)),
                    o.length > 0 &&
                        ((_ = o[o.length - 1]),
                        _.subtract(p).length() < 2 && (s *= 2)),
                    o.push(p);
            return o;
        }
        Object.defineProperty(t, "__esModule", {value: !0}),
            (t.quadroBezierHitTest = i),
            (t.cubicBezierHitTest = n),
            (t.extendQuadroBezier = r);
    },
    493: function(e, t, i) {
        "use strict";
        function n(e, t, i, n) {
            var r = l.equalPoints(i, n[0])
                ? l.equalPoints(i, n[1]) ? null : n[1]
                : n[0];
            return null !== e && null !== r
                ? c.intersectPolygonAndHalfplane(
                      e,
                      l.halfplaneThroughPoint(l.lineThroughPoints(t, i), r)
                  )
                : null;
        }
        function r(e) {
            return l.line(1, 0, -e);
        }
        function s(e, t, i) {
            return null !== e
                ? c.intersectPolygonAndHalfplane(
                      e,
                      l.halfplaneThroughPoint(r(t), new l.Point(i, 0))
                  )
                : null;
        }
        function a(e, t) {
            var i = t.points,
                n = i[0],
                r = i[1];
            return (
                t.extendleft || (e = s(e, n.x, r.x)),
                t.extendright || (e = s(e, r.x, n.x)),
                e
            );
        }
        var o, l, h, d, c, p, _, u, f, g, v;
        Object.defineProperty(t, "__esModule", {value: !0}),
            (o = i(21)),
            (l = i(1)),
            (h = i(49)),
            (d = i(33)),
            (c = i(98)),
            (p = i(115)),
            (_ = i(4)),
            (u = i(314)),
            (f = i(19)),
            (g = (function() {
                function e() {
                    (this._parallelChannelRenderer = new u.ParallelChannelRenderer()),
                        (this._disjointAngleIntersectionRenderer = new v()),
                        (this._selectedRenderer = this._disjointAngleIntersectionRenderer);
                }
                return (
                    (e.prototype.setData = function(e) {
                        var t, i, n, r, s, a, o;
                        e.points.length < 4 ||
                            ((t = e.points),
                            (i = t[0]),
                            (n = t[1]),
                            (r = t[2]),
                            (s = t[3]),
                            (a =
                                l.equalPoints(i, n) ||
                                l.equalPoints(r, s) ||
                                (d.distanceToLine(i, n, r).distance < 1e-6 &&
                                    d.distanceToLine(i, n, s).distance < 1e-6)),
                            a
                                ? (this._selectedRenderer = null)
                                : ((o = c.intersectLines(
                                      l.lineThroughPoints(i, n),
                                      l.lineThroughPoints(r, s)
                                  )),
                                  null !== o
                                      ? (this._disjointAngleIntersectionRenderer.setData(
                                            e
                                        ),
                                        (this._selectedRenderer = this._disjointAngleIntersectionRenderer))
                                      : (this._parallelChannelRenderer.setData({
                                            width: e.width,
                                            height: e.height,
                                            extendleft: e.extendleft,
                                            extendright: e.extendright,
                                            points: [i, n, s, r],
                                            fillBackground: !0,
                                            backcolor: e.backcolor,
                                            transparency: e.transparency,
                                            color: "rgba(0,0,0,0)",
                                            linestyle: p.LINESTYLE_SOLID,
                                            linewidth: 0,
                                            showMidline: !1,
                                            midcolor: "rgba(0,0,0,0)",
                                            midlinestyle: 0,
                                            midlinewidth: 0,
                                            hittestOnBackground:
                                                e.hittestOnBackground
                                        }),
                                        (this._selectedRenderer = this._parallelChannelRenderer))));
                    }),
                    (e.prototype.draw = function(e) {
                        null !== this._selectedRenderer &&
                            this._selectedRenderer.draw(e);
                    }),
                    (e.prototype.hitTest = function(e) {
                        return null !== this._selectedRenderer
                            ? this._selectedRenderer.hitTest(e)
                            : null;
                    }),
                    e
                );
            })()),
            (t.DisjointAngleRenderer = g),
            (v = (function() {
                function e() {
                    this._data = null;
                }
                return (
                    (e.prototype.setData = function(e) {
                        this._data = e;
                    }),
                    (e.prototype.draw = function(e) {
                        var t, i, n, r;
                        if (
                            !(
                                null === this._data ||
                                this._data.points.length < 4
                            )
                        )
                            for (
                                e.fillStyle = f.generateColor(
                                    this._data.backcolor,
                                    this._data.transparency
                                ),
                                    t = 0,
                                    i = this._visiblePolygons();
                                t < i.length;
                                t++
                            ) {
                                for (
                                    n = i[t],
                                        e.beginPath(),
                                        e.moveTo(n[0].x, n[0].y),
                                        r = 1;
                                    r < n.length;
                                    r++
                                )
                                    e.lineTo(n[r].x, n[r].y);
                                e.fill();
                            }
                    }),
                    (e.prototype.hitTest = function(e) {
                        var t, i, n;
                        if (
                            null === this._data ||
                            !this._data.hittestOnBackground
                        )
                            return null;
                        for (
                            t = 0, i = this._visiblePolygons();
                            t < i.length;
                            t++
                        )
                            if (((n = i[t]), h.pointInPolygon(e, n)))
                                return new _(_.MOVEPOINT_BACKGROUND);
                        return null;
                    }),
                    (e.prototype._visiblePolygons = function() {
                        var e,
                            t,
                            i,
                            r,
                            s,
                            h,
                            d,
                            p,
                            _ = o.ensureNotNull(this._data),
                            u = _.points,
                            f = u[0],
                            g = u[1],
                            v = u[2],
                            w = u[3];
                        return _.width <= 0 || _.height <= 0
                            ? []
                            : null ===
                              (e = c.intersectLines(
                                  l.lineThroughPoints(f, g),
                                  l.lineThroughPoints(v, w)
                              ))
                                ? []
                                : ((t = [
                                      new l.Point(0, 0),
                                      new l.Point(_.width, 0),
                                      new l.Point(_.width, _.height),
                                      new l.Point(0, _.height)
                                  ]),
                                  (i = []),
                                  (r = t),
                                  (s = f.subtract(g).add(e)),
                                  (h = w.subtract(v).add(e)),
                                  (r = n(r, e, s, [h, h])),
                                  (r = a(r, _)),
                                  null !== (r = n(r, h, e, [s, s])) &&
                                      i.push(r),
                                  (r = t),
                                  (d = g.subtract(f).add(e)),
                                  (p = v.subtract(w).add(e)),
                                  (r = n(r, e, d, [p, p])),
                                  (r = a(r, _)),
                                  null !== (r = n(r, p, e, [d, d])) &&
                                      i.push(r),
                                  i);
                    }),
                    e
                );
            })());
    },
    494: function(e, t, i) {
        "use strict";
        var n, r, s, a, o, l;
        Object.defineProperty(t, "__esModule", {value: !0}),
            (n = i(4)),
            (r = i(56)),
            (s = i(1)),
            (a = i(19)),
            (o = i(101)),
            (l = (function() {
                function e(e, t, i) {
                    (this._data = e),
                        (this._hitTest = t || new n(n.MOVEPOINT)),
                        (this._backgroundHitTest =
                            i || new n(n.MOVEPOINT_BACKGROUND));
                }
                return (
                    (e.prototype.draw = function(e) {
                        var t, i, n, r, s, l, h, d;
                        (e.lineCap = "butt"),
                            (e.strokeStyle = this._data.color),
                            (e.lineWidth = this._data.linewidth),
                            void 0 !== this._data.linestyle &&
                                o.setLineStyle(e, this._data.linestyle),
                            (t = this._data.points[0]),
                            (i = this._data.points[1]),
                            (n = Math.abs(t.x - i.x)),
                            (r = Math.abs(t.y - i.y)),
                            (s = t.add(i).scaled(0.5)),
                            n < 1 ||
                                r < 1 ||
                                ((l = 0),
                                this._data.wholePoints &&
                                    ((h = this._data.wholePoints[0]),
                                    (d = this._data.wholePoints[1]),
                                    (l = Math.abs(h.x - d.x))),
                                e.save(),
                                e.translate(s.x, s.y),
                                e.scale(1, r / n),
                                e.beginPath(),
                                e.arc(0, 0, n / 2, 0, 2 * Math.PI, !1),
                                e.restore(),
                                e.stroke(),
                                this._data.fillBackground &&
                                    (this._data.wholePoints &&
                                        (e.translate(s.x, s.y),
                                        e.scale(1, r / n),
                                        e.arc(0, 0, l / 2, 0, 2 * Math.PI, !0)),
                                    (e.fillStyle = a.generateColor(
                                        this._data.backcolor,
                                        this._data.transparency,
                                        !0
                                    )),
                                    e.fill()));
                    }),
                    (e.prototype.hitTest = function(e) {
                        var t, i, n, a, o, l, h, d, c, p;
                        return this._data.points.length < 2
                            ? null
                            : ((t = this._data.points[0]),
                              (i = this._data.points[1]),
                              (n = 0.5 * Math.abs(t.x - i.x)),
                              (a = Math.abs(t.x - i.x)),
                              (o = Math.abs(t.y - i.y)),
                              (l = t.add(i).scaled(0.5)),
                              (h = e.subtract(l)),
                              a < 1 || o < 1
                                  ? null
                                  : ((d = (i.y - t.y) / (i.x - t.x)),
                                    (h = new s.Point(h.x, h.y / d)),
                                    (c = h.x * h.x + h.y * h.y),
                                    (p = c - n * n),
                                    (p =
                                        r.sign(p) * Math.sqrt(Math.abs(p / n))),
                                    Math.abs(p) < 3
                                        ? this._hitTest
                                        : this._data.fillBackground &&
                                          !this._data.noHitTestOnBackground &&
                                          p < 3
                                            ? this._backgroundHitTest
                                            : null));
                    }),
                    e
                );
            })()),
            (t.EllipseRendererSimple = l);
    },
    834: function(e, t, i) {
        "use strict";
        function n(e, t) {
            r.call(this, e, t),
                (this._numericFormatter = new l()),
                (this._invalidated = !0),
                (this._lineRendererPoints01 = new s()),
                (this._lineRendererPoints12 = new s()),
                (this._lineRendererPoints23 = new s()),
                (this._abRetracementTrend = new s()),
                (this._cdRetracementTrend = new s()),
                (this._abLabelRenderer = new a({})),
                (this._cdLabelRenderer = new a({})),
                (this._textRendererALabel = new a({})),
                (this._textRendererBLabel = new a({})),
                (this._textRendererCLabel = new a({})),
                (this._textRendererDLabel = new a({}));
        }
        var r = i(12).LineSourcePaneView,
            s = i(16).TrendLineRenderer,
            a = i(27).TextRenderer,
            o = i(8).CompositeRenderer,
            l = i(38).NumericFormatter,
            h = i(19),
            d = i(18).LineEnd;
        inherit(n, r),
            (n.prototype.renderer = function() {
                var e, t, i, n, r, s, a, l, c;
                return (
                    this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    this._points.length < 2
                        ? null
                        : ((e = this._source.properties()),
                          (t = new o()),
                          (i = this._points),
                          (n = this),
                          (r = function(t, i) {
                              return {
                                  points: [t],
                                  text: i,
                                  color: e.textcolor.value(),
                                  vertAlign: "middle",
                                  horzAlign: "center",
                                  font: e.font.value(),
                                  offsetX: 0,
                                  offsetY: 0,
                                  bold: e.bold && e.bold.value(),
                                  italic: e.italic && e.italic.value(),
                                  fontsize: e.fontsize.value(),
                                  backgroundColor: n._source
                                      .properties()
                                      .color.value(),
                                  backgroundRoundRect: 4
                              };
                          }),
                          (s = function(t, i, r, s) {
                              return {
                                  points: [t, i],
                                  width: n._model.timeScale().width(),
                                  height: n._source.priceScale().height(),
                                  color: h.generateColor(
                                      n._source.properties().color.value(),
                                      r
                                  ),
                                  linewidth: s || e.linewidth.value(),
                                  linestyle: CanvasEx.LINESTYLE_SOLID,
                                  extendleft: !1,
                                  extendright: !1,
                                  leftend: d.Normal,
                                  rightend: d.Normal
                              };
                          }),
                          (a = s(i[0], i[1], 0)),
                          this._lineRendererPoints01.setData(a),
                          t.append(this._lineRendererPoints01),
                          i.length >= 3 &&
                              ((a = s(i[1], i[2], 0)),
                              this._lineRendererPoints12.setData(a),
                              t.append(this._lineRendererPoints12)),
                          4 === i.length &&
                              ((a = s(i[2], i[3], 0)),
                              this._lineRendererPoints23.setData(a),
                              t.append(this._lineRendererPoints23)),
                          (l = r(this._points[0], "A")),
                          this._points[1].y > this._points[0].y
                              ? ((l.vertAlign = "bottom"), (l.offsetY = -10))
                              : ((l.vertAlign = "top"), (l.offsetY = 5)),
                          this._textRendererALabel.setData(l),
                          t.append(this._textRendererALabel),
                          (l = r(this._points[1], "B")),
                          this._points[1].y < this._points[0].y
                              ? ((l.vertAlign = "bottom"), (l.offsetY = -10))
                              : ((l.vertAlign = "top"), (l.offsetY = 5)),
                          this._textRendererBLabel.setData(l),
                          t.append(this._textRendererBLabel),
                          this._points.length > 2 &&
                              ((l = r(this._points[2], "C")),
                              this._points[2].y < this._points[1].y
                                  ? ((l.vertAlign = "bottom"),
                                    (l.offsetY = -10))
                                  : ((l.vertAlign = "top"), (l.offsetY = 5)),
                              this._textRendererCLabel.setData(l),
                              t.append(this._textRendererCLabel)),
                          this._points.length > 3 &&
                              ((l = r(this._points[3], "D")),
                              this._points[3].y < this._points[2].y
                                  ? ((l.vertAlign = "bottom"),
                                    (l.offsetY = -10))
                                  : ((l.vertAlign = "top"), (l.offsetY = 5)),
                              this._textRendererDLabel.setData(l),
                              t.append(this._textRendererDLabel)),
                          this._points.length >= 3 &&
                              ((c = this._points[0]
                                  .add(this._points[2])
                                  .scaled(0.5)),
                              (a = s(this._points[0], this._points[2], 70, 1)),
                              this._abRetracementTrend.setData(a),
                              t.append(this._abRetracementTrend),
                              (l = r(
                                  c,
                                  this._numericFormatter.format(
                                      this._ABRetracement
                                  )
                              )),
                              this._abLabelRenderer.setData(l),
                              t.append(this._abLabelRenderer)),
                          this._points.length >= 4 &&
                              ((c = this._points[1]
                                  .add(this._points[3])
                                  .scaled(0.5)),
                              (a = s(this._points[1], this._points[3], 70, 1)),
                              this._cdRetracementTrend.setData(a),
                              t.append(this._cdRetracementTrend),
                              (l = r(
                                  c,
                                  this._numericFormatter.format(
                                      this._CDRetracement
                                  )
                              )),
                              this._cdLabelRenderer.setData(l),
                              t.append(this._cdLabelRenderer)),
                          this.addAnchors(t),
                          t)
                );
            }),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n;
                r.prototype._updateImpl.call(this),
                    this._source.points().length >= 3 &&
                        ((e = this._source.points()[0]),
                        (t = this._source.points()[1]),
                        (i = this._source.points()[2]),
                        (this._ABRetracement =
                            Math.round(
                                1e3 *
                                    Math.abs(
                                        (i.price - t.price) /
                                            (t.price - e.price)
                                    )
                            ) / 1e3)),
                    4 === this._source.points().length &&
                        ((n = this._source.points()[3]),
                        (this._CDRetracement =
                            Math.round(
                                1e3 *
                                    Math.abs(
                                        (n.price - i.price) /
                                            (i.price - t.price)
                                    )
                            ) / 1e3));
            }),
            (t.ABCDPaneView = n);
    },
    836: function(e, t, i) {
        "use strict";
        function n() {
            this._data = null;
        }
        function r(e, t) {
            p.call(this, e, t),
                (this._invalidated = !0),
                (this._renderer = new n());
        }
        var s = i(1).Point,
            a = i(33).distanceToLine,
            o = i(193),
            l = o.rotationMatrix,
            h = o.scalingMatrix,
            d = o.translationMatrix,
            c = o.transformPoint,
            p = i(12).LineSourcePaneView,
            _ = i(4),
            u = i(8).CompositeRenderer,
            f = i(19);
        (n.prototype.setData = function(e) {
            (this._data = e),
                (this._data.angleFrom = 0),
                (this._data.angleTo = Math.PI),
                (this._data.clockwise = !1);
        }),
            (n.prototype.draw = function(e) {
                var t, i, n, r, o, p, _, u, g, v, w, y, m, x;
                if (!(null === this._data || this._data.points.length < 2)) {
                    if (
                        ((t = this._data.points[0]),
                        (i = this._data.points[1]),
                        this._data.points.length < 3)
                    )
                        return (
                            (e.strokeStyle = this._data.color),
                            (e.lineWidth = this._data.linewidth),
                            e.beginPath(),
                            e.moveTo(t.x, t.y),
                            e.lineTo(i.x, i.y),
                            void e.stroke()
                        );
                    if (
                        ((n = this._data.points[2]),
                        (r = a(t, i, n).distance) < 1)
                    )
                        return (
                            (e.strokeStyle = this._data.color),
                            (e.lineWidth = this._data.linewidth),
                            e.beginPath(),
                            e.moveTo(t.x, t.y),
                            e.lineTo(i.x, i.y),
                            void e.stroke()
                        );
                    (o = i.subtract(t)),
                        (p = t.add(i).scaled(0.5)),
                        (_ = new s(-o.y, o.x)),
                        (_ = _.normalized()),
                        (n = p.add(_.scaled(r))),
                        (e.strokeStyle = this._data.color),
                        (e.lineWidth = this._data.linewidth),
                        (u = o.length()),
                        (g = o.x / u),
                        (v = o.y / u),
                        (w = Math.acos(g)),
                        v < 0 && (w = -w),
                        (y = this._data.points[2]),
                        (m = d(-p.x, -p.y)),
                        (y = c(m, y)),
                        (m = l(-w)),
                        (y = c(m, y)),
                        (m = h(1, u / (2 * r))),
                        (y = c(m, y)),
                        y.y < 0
                            ? (this._data.clockwise = !0)
                            : (this._data.clockwise = !1),
                        e.save(),
                        e.beginPath(),
                        e.translate(t.x, t.y),
                        e.rotate(w),
                        (x = 1 - Math.sqrt(3) / 2),
                        e.scale(1, r / (u * x)),
                        this._data.clockwise
                            ? e.arc(
                                  0.5 * u,
                                  u * Math.sqrt(3) / 2,
                                  u,
                                  -2 * Math.PI / 3,
                                  -Math.PI / 3,
                                  !1
                              )
                            : e.arc(
                                  0.5 * u,
                                  -u * Math.sqrt(3) / 2,
                                  u,
                                  Math.PI / 3,
                                  2 * Math.PI / 3,
                                  !1
                              ),
                        e.restore(),
                        e.stroke(),
                        this._data.fillBackground &&
                            ((e.fillStyle = f.generateColor(
                                this._data.backcolor,
                                this._data.transparency
                            )),
                            e.fill());
                }
            }),
            (n.prototype.hitTest = function(e) {
                var t, i, n, r, o, p, u, f, g, v, w, y, m, x, b, S, P;
                return null === this._data || this._data.points.length < 3
                    ? null
                    : ((t = 5),
                      (i = this._data.points[0]),
                      (n = this._data.points[1]),
                      (r = this._data.points[2]),
                      (o = a(i, n, r).distance) < 1
                          ? ((o = a(i, n, e).distance),
                            o < t ? new _(_.MOVEPOINT) : null)
                          : ((p = n.subtract(i)),
                            (u = p.length()),
                            (f = i.add(n).scaled(0.5)),
                            (g = r.subtract(f)),
                            (g = g.normalized()),
                            (r = f.add(g.scaled(o))),
                            (v = p.x / u),
                            (w = p.y / u),
                            (y = Math.acos(v)),
                            w < 0 && (y = -y),
                            (m = d(-i.x, -i.y)),
                            (e = c(m, e)),
                            (m = l(-y)),
                            (e = c(m, e)),
                            (g = c(m, g)),
                            (x = 1 - Math.sqrt(3) / 2),
                            (m = h(1, u * x / o)),
                            (e = c(m, e)),
                            (g = c(m, g)),
                            e.y * g.y < 0
                                ? null
                                : ((b =
                                      e.y < 0
                                          ? new s(0.5 * u, u * Math.sqrt(3) / 2)
                                          : new s(
                                                0.5 * u,
                                                -u * Math.sqrt(3) / 2
                                            )),
                                  (S = e.subtract(b)),
                                  (P = S.length()),
                                  Math.abs(P - u) <= t
                                      ? new _(_.MOVEPOINT)
                                      : null)));
            }),
            inherit(r, p),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype.updateImpl = function() {
                p.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (r.prototype.renderer = function() {
                var e, t, i, n, r, o, p, _, f, g, v, w, y, m, x, b, S, P, R, T;
                return (
                    this._invalidated && this.updateImpl(),
                    (e = {}),
                    (e.points = this._points),
                    (e.color = this._source.properties().color.value()),
                    (e.linewidth = this._source.properties().linewidth.value()),
                    (e.backcolor = this._source
                        .properties()
                        .backgroundColor.value()),
                    (e.fillBackground = this._source
                        .properties()
                        .fillBackground.value()),
                    (e.transparency = this._source
                        .properties()
                        .transparency.value()),
                    this._renderer.setData(e),
                    this.isAnchorsRequired()
                        ? ((t = new u()),
                          t.append(this._renderer),
                          (i = []),
                          (n = e.points[0]),
                          (r = new s(n.x, n.y)),
                          (r.data = 0),
                          i.push(r),
                          1 === e.points.length
                              ? t
                              : ((o = e.points[1]),
                                (p = new s(o.x, o.y)),
                                (p.data = 1),
                                2 === e.points.length
                                    ? (this.addAnchors(t), t)
                                    : (i.push(p),
                                      (_ = e.points[2]),
                                      (f = a(n, o, _).distance),
                                      (g = o.subtract(n)),
                                      (v = n.add(o).scaled(0.5)),
                                      (w = new s(-g.y, g.x)),
                                      (w = w.normalized()),
                                      (_ = v.add(w.scaled(f))),
                                      (y = v.add(w.scaled(-f))),
                                      (m = g.length()),
                                      (x = g.x / m),
                                      (b = g.y / m),
                                      (S = Math.acos(x)),
                                      b < 0 && (S = -S),
                                      (P = e.points[2]),
                                      (R = d(-v.x, -v.y)),
                                      (P = c(R, P)),
                                      (R = l(-S)),
                                      (P = c(R, P)),
                                      (R = h(1, m / (2 * f))),
                                      (P = c(R, P)),
                                      (T =
                                          P.y >= 0
                                              ? new s(_.x, _.y)
                                              : new s(y.x, y.y)),
                                      (T.data = 2),
                                      i.push(T),
                                      t.append(
                                          this.createLineAnchor({points: i})
                                      ),
                                      t)))
                        : this._renderer
                );
            }),
            (t.ArcPaneView = r);
    },
    839: function(e, t, i) {
        "use strict";
        function n(e) {
            (this._measureCache = e), (this._data = null);
        }
        function r(e, t) {
            o.call(this, e, t),
                (this._rendererCache = {}),
                (this._invalidated = !0),
                (this._renderer = new n(this._rendererCache));
        }
        var s = i(1).Point,
            a = i(49).pointInRectangle,
            o = i(12).LineSourcePaneView,
            l = i(74).SelectionRenderer,
            h = i(4),
            d = i(8).CompositeRenderer,
            c = i(19);
        (n.prototype.setData = function(e) {
            this._data = e;
        }),
            (n.prototype.draw = function(e) {
                var t, i, n, r, s, a, o;
                null !== this._data &&
                    0 !== this._data.points.length &&
                    ((e.font = [
                        this._data.fontWeight,
                        this._data.fontSize + "px",
                        this._data.fontFamily
                    ].join(" ")),
                    (t = e.measureText(this._data.label)),
                    (t.height = this._data.fontSize),
                    (i = 15),
                    (n = {left: i, top: (2 * i - t.height) / 2}),
                    (r = t.width + 2 * n.left),
                    (s = 2 * i),
                    (a = this._data.points[0].x - (n.left + 20)),
                    (o = this._data.points[0].y - (s + 9)),
                    this._measureCache &&
                        $.extend(this._measureCache, {
                            innerWidth: r,
                            innerHeight: s,
                            padding: n
                        }),
                    e.translate(0.5 + a, 0.5 + o),
                    e.beginPath(),
                    e.moveTo(i + 9, s),
                    e.lineTo(i, s),
                    e.arcTo(-1e3, 0, 1e3, 0, i),
                    e.lineTo(r - i, 0),
                    e.arcTo(1e3, s, -1e3, s, i),
                    e.lineTo(i + 18, s),
                    e.quadraticCurveTo(i + 18, s + 4, i + 20, s + 9),
                    e.quadraticCurveTo(i + 12, s + 6, i + 9, s),
                    (e.fillStyle = c.generateColor(
                        this._data.backgroundColor,
                        this._data.transparency
                    )),
                    e.fill(),
                    (e.strokeStyle = this._data.borderColor),
                    (e.lineWidth = 2),
                    e.stroke(),
                    e.closePath(),
                    (e.textBaseline = "top"),
                    (e.fillStyle = this._data.color),
                    e.fillText(this._data.label, n.left, n.top - 1));
            }),
            (n.prototype.hitTest = function(e) {
                var t, i;
                return null !== this._data &&
                    0 !== this._data.points.length &&
                    this._measureCache.padding
                    ? ((t =
                          this._data.points[0].x -
                          (this._measureCache.padding.left + 20)),
                      (i =
                          this._data.points[0].y -
                          (this._measureCache.innerHeight + 9)),
                      a(
                          e,
                          new s(t, i),
                          new s(
                              t + this._measureCache.innerWidth,
                              i + this._measureCache.innerHeight
                          )
                      )
                          ? new h(h.MOVEPOINT)
                          : null)
                    : null;
            }),
            inherit(r, o),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype.updateImpl = function() {
                o.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (r.prototype.renderer = function() {
                var e, t;
                return (
                    this._invalidated && this.updateImpl(),
                    (e = {}),
                    (e.points = this._points),
                    (e.color = this._source.properties().color.value()),
                    (e.borderColor = this._source
                        .properties()
                        .borderColor.value()),
                    (e.backgroundColor = this._source
                        .properties()
                        .backgroundColor.value()),
                    (e.transparency = this._source
                        .properties()
                        .transparency.value()),
                    (e.fontWeight = this._source
                        .properties()
                        .fontWeight.value()),
                    (e.fontSize = this._source.properties().fontsize.value()),
                    (e.fontFamily = this._source.properties().font.value()),
                    (e.label = this._source.properties().text.value()),
                    this._renderer.setData(e),
                    this.isAnchorsRequired() && 1 === e.points.length
                        ? ((t = new d()),
                          t.append(this._renderer),
                          t.append(new l({points: e.points})),
                          t)
                        : this._renderer
                );
            }),
            (t.BalloonPaneView = r);
    },
    842: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._invalidated = !0),
                (this._vertLineRenderer1 = new a()),
                (this._vertLineRenderer2 = new a()),
                (this._medianRenderer = new l());
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(146).VerticalLineRenderer,
            o = i(70).RectangleRenderer,
            l = i(16).TrendLineRenderer,
            h = i(4),
            d = i(212).PaneRendererLine,
            c = i(8).CompositeRenderer,
            p = i(19),
            _ = i(311).LineToolBarsPatternMode,
            u = i(18).LineEnd;
        inherit(n, s),
            (n.prototype.renderer = function() {
                var e,
                    t,
                    i,
                    n,
                    s,
                    a,
                    l,
                    f,
                    g,
                    v,
                    w,
                    y,
                    m,
                    x,
                    b,
                    S,
                    P,
                    R,
                    T,
                    L,
                    C,
                    k;
                if (
                    (this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    this._pattern && 2 === this._source.points().length)
                ) {
                    if (
                        ((e = this._source.points()[0].index),
                        (t = this._source.points()[1].index),
                        !(i = e < t ? this._points[0] : this._points[1]))
                    )
                        return new c();
                    if (
                        ((n = parseInt(
                            this._source.properties().mode.value(),
                            10
                        )),
                        (s = Math.abs(
                            (this._points[0].x - this._points[1].x) /
                                (this._pattern.length - 1)
                        )),
                        n === _.Bars || n === _.OpenClose)
                    ) {
                        for (
                            a = new c(),
                                l =
                                    n === _.Bars
                                        ? ["high", "low"]
                                        : ["open", "close"],
                                f = l[0],
                                g = l[1],
                                v = 0;
                            v < this._pattern.length;
                            v++
                        )
                            (w = Math.round(i.x + v * s + 0.5)),
                                (y = i.y + Math.round(this._pattern[v][f])),
                                (m = i.y + Math.round(this._pattern[v][g])),
                                (x = {}),
                                (x.points = [new r(w - 1, y), new r(w + 1, m)]),
                                (x.color = this._source
                                    .properties()
                                    .color.value()),
                                (x.linewidth = 1),
                                (x.backcolor = this._source
                                    .properties()
                                    .color.value()),
                                (x.fillBackground = !0),
                                (x.transparency = 10),
                                (b = new o()),
                                b.setData(x),
                                a.append(b);
                        return (
                            this.isAnchorsRequired() &&
                                a.append(
                                    this.createLineAnchor({
                                        points: this._points
                                    })
                                ),
                            a
                        );
                    }
                    return (
                        (a = new c()),
                        (x = {}),
                        (x.barSpacing = s),
                        (x.items = this._pattern),
                        (x.histogramBase = 0),
                        (x.lineIndex = 0),
                        (x.lineColor = p.generateColor(
                            this._source.properties().color.value(),
                            10
                        )),
                        (x.lineStyle = CanvasEx.LINESTYLE_SOLID),
                        (x.lineWidth = 2),
                        (x.hittest = new h(h.MOVEPOINT)),
                        a.append(new d(x)),
                        this.isAnchorsRequired() &&
                            a.append(
                                this.createLineAnchor({points: this._points})
                            ),
                        a
                    );
                }
                return (
                    (a = new c()),
                    this._points.length < 2
                        ? a
                        : ((S = this._model.timeScale().width()),
                          (P = this._source.priceScale().height()),
                          (R = this._points[0]),
                          (T = this._points[1]),
                          (L = {}),
                          (L.width = S),
                          (L.height = P),
                          (L.points = [R]),
                          (L.color = "#808080"),
                          (L.linewidth = 1),
                          (L.linestyle = CanvasEx.LINESTYLE_SOLID),
                          this._vertLineRenderer1.setData(L),
                          a.append(this._vertLineRenderer1),
                          (C = {}),
                          (C.width = S),
                          (C.height = P),
                          (C.points = [T]),
                          (C.color = "#808080"),
                          (C.linewidth = 1),
                          (C.linestyle = CanvasEx.LINESTYLE_SOLID),
                          this._vertLineRenderer2.setData(C),
                          a.append(this._vertLineRenderer2),
                          (k = {
                              points: [R, T],
                              width: this._model.timeScale().width(),
                              height: this._source.priceScale().height(),
                              color: "#808080",
                              linewidth: 1,
                              linestyle: CanvasEx.LINESTYLE_SOLID,
                              extendleft: !1,
                              extendright: !1,
                              leftend: u.Normal,
                              rightend: u.Normal
                          }),
                          this._medianRenderer.setData(k),
                          a.append(this._medianRenderer),
                          a)
                );
            }),
            (n.prototype.update = function() {
                s.prototype._updateImpl.call(this), (this._invalidated = !0);
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n, s, a, o, l, h, d, c, p, _, u, f, g;
                !this._source.priceScale() ||
                    this._source.priceScale().isEmpty() ||
                    this._points.length < 2 ||
                    (this._source._pattern &&
                    this._source._pattern.length > 0 &&
                    2 === this._source.points().length
                        ? ((e = this._source.priceScale()),
                          (t = this._source.firstPatternPrice()),
                          (i = this._source.pressCoeff()),
                          (e = this._source.priceScale()),
                          (n = this._source.ownerSource().firstValue()),
                          (s = e.priceRange()),
                          e.isPercent()
                              ? ((o = s.convertToPercent(t, n)),
                                (a = e.priceToCoordinate(o)))
                              : (a = e.priceToCoordinate(t)),
                          (l = function(r) {
                              var o = (r - t) * i + t;
                              return (
                                  e.isPercent() &&
                                      (o = s.convertToPercent(o, n)),
                                  e.priceToCoordinate(o) - a
                              );
                          }),
                          (h = parseInt(
                              this._source.properties().mode.value()
                          )),
                          (d = this._source.points()[0].index),
                          (c = this._source.points()[1].index),
                          (p = d > c ? 1 : 0),
                          (_ = this._points[p]),
                          (u = _.x),
                          (f = Math.abs(
                              (this._points[0].x - this._points[1].x) /
                                  (this._source._pattern.length - 1)
                          )),
                          (g = {
                              0: function(e) {
                                  return {
                                      high: l(e[TradingView.HIGH_PLOT]),
                                      low: l(e[TradingView.LOW_PLOT])
                                  };
                              },
                              1: function(e, t) {
                                  return new r(
                                      u + t * f,
                                      l(e[TradingView.CLOSE_PLOT]) + _.y
                                  );
                              },
                              2: function(e) {
                                  return {
                                      open: l(e[TradingView.OPEN_PLOT]),
                                      close: l(e[TradingView.CLOSE_PLOT])
                                  };
                              },
                              3: function(e, t) {
                                  return new r(
                                      u + t * f,
                                      l(e[TradingView.OPEN_PLOT]) + _.y
                                  );
                              },
                              4: function(e, t) {
                                  return new r(
                                      u + t * f,
                                      l(e[TradingView.HIGH_PLOT]) + _.y
                                  );
                              },
                              5: function(e, t) {
                                  return new r(
                                      u + t * f,
                                      l(e[TradingView.LOW_PLOT]) + _.y
                                  );
                              },
                              6: function(e, t) {
                                  return new r(
                                      u + t * f,
                                      l(
                                          (e[TradingView.HIGH_PLOT] +
                                              e[TradingView.LOW_PLOT]) /
                                              2
                                      ) + _.y
                                  );
                              }
                          }),
                          (this._pattern = this._source._pattern.map(g[h])))
                        : delete this._pattern);
            }),
            (t.BarsPatternPaneView = n);
    },
    844: function(e, t, i) {
        "use strict";
        function n() {
            this._data = null;
        }
        function r(e, t) {
            a.call(this, e, t),
                (this._invalidated = !0),
                (this._renderer = new n());
        }
        var s = i(33).distanceToSegment,
            a = i(12).LineSourcePaneView,
            o = i(16).TrendLineRenderer,
            l = i(4),
            h = i(8).CompositeRenderer,
            d = i(19),
            c = i(18).LineEnd,
            p = i(492);
        (n.prototype.setData = function(e) {
            this._data = e;
        }),
            (n.prototype.draw = function(e) {
                var t, i, n, r, s, a, l, h, p, _, u, f, g;
                if (null !== this._data)
                    if (
                        ((e.lineCap = "butt"),
                        (e.strokeStyle = this._data.color),
                        (e.lineWidth = this._data.linewidth),
                        CanvasEx.setLineStyle(e, this._data.linestyle),
                        (t = this._data.points[0]),
                        (i = this._data.points[1]),
                        2 === this._data.points.length)
                    )
                        e.beginPath(),
                            e.moveTo(t.x, t.y),
                            e.lineTo(i.x, i.y),
                            e.stroke(),
                            this._data.leftend === c.Arrow &&
                                o.prototype.drawArrow(i, t, e, e.lineWidth),
                            this._data.rightend === c.Arrow &&
                                o.prototype.drawArrow(t, i, e, e.lineWidth);
                    else {
                        if (
                            ((n = this._data.points[2]),
                            (r = this._data.points[3]),
                            (s = r.subtract(t)),
                            (a = n.subtract(s.scaled(0.25))),
                            (l = n.add(s.scaled(0.25))),
                            (h = i.subtract(n)),
                            (p = r.subtract(h.scaled(0.25))),
                            (_ = r.add(h.scaled(0.25))),
                            this._data.fillBack &&
                                this._data.points.length > 2 &&
                                ((e.fillStyle = d.generateColor(
                                    this._data.backcolor,
                                    this._data.transparency
                                )),
                                e.beginPath(),
                                e.moveTo(t.x, t.y),
                                e.quadraticCurveTo(a.x, a.y, n.x, n.y),
                                e.bezierCurveTo(l.x, l.y, p.x, p.y, r.x, r.y),
                                e.quadraticCurveTo(_.x, _.y, i.x, i.y),
                                e.fill()),
                            e.beginPath(),
                            this._data.extendLeftPoints.length > 0)
                        )
                            for (
                                u = this._data.extendLeftPoints[
                                    this._data.extendLeftPoints.length - 1
                                ],
                                    e.moveTo(u.x, u.y),
                                    f = this._data.extendLeftPoints.length - 2;
                                f >= 0;
                                f--
                            )
                                (g = this._data.extendLeftPoints[f]),
                                    e.lineTo(g.x, g.y);
                        for (
                            e.moveTo(t.x, t.y),
                                e.quadraticCurveTo(a.x, a.y, n.x, n.y),
                                e.bezierCurveTo(l.x, l.y, p.x, p.y, r.x, r.y),
                                e.quadraticCurveTo(_.x, _.y, i.x, i.y),
                                f = 0;
                            f < this._data.extendRightPoints.length;
                            f++
                        )
                            (g = this._data.extendRightPoints[f]),
                                e.lineTo(g.x, g.y);
                        e.stroke(),
                            this._data.leftend === c.Arrow &&
                                o.prototype.drawArrow(a, t, e, e.lineWidth),
                            this._data.rightend === c.Arrow &&
                                o.prototype.drawArrow(_, i, e, e.lineWidth);
                    }
            }),
            (n.prototype.hitTest = function(e) {
                var t, i, n, r, a, o, h, d, c, _, u, f;
                if (4 === this._data.points.length) {
                    if (
                        ((t = this._data.points[0]),
                        (i = this._data.points[1]),
                        (n = this._data.points[2]),
                        (r = this._data.points[3]),
                        (a = r.subtract(t)),
                        (o = n.subtract(a.scaled(0.25))),
                        (h = n.add(a.scaled(0.25))),
                        (d = i.subtract(n)),
                        (c = r.subtract(d.scaled(0.25))),
                        (_ = r.add(d.scaled(0.25))),
                        p.quadroBezierHitTest(n, t, o, e) ||
                            p.cubicBezierHitTest(n, r, h, c, e) ||
                            p.quadroBezierHitTest(r, i, _, e))
                    )
                        return new l(l.MOVEPOINT);
                    for (
                        u = 3, f = 1;
                        f < this._data.extendLeftPoints.length;
                        f++
                    )
                        if (
                            ((t = this._data.extendLeftPoints[f - 1]),
                            (i = this._data.extendLeftPoints[f]),
                            s(t, i, e).distance < u)
                        )
                            return new l(l.MOVEPOINT);
                    for (f = 1; f < this._data.extendRightPoints.length; f++)
                        if (
                            ((t = this._data.extendRightPoints[f - 1]),
                            (i = this._data.extendRightPoints[f]),
                            s(t, i, e).distance < u)
                        )
                            return new l(l.MOVEPOINT);
                }
                return null;
            }),
            inherit(r, a),
            (r.prototype.update = function() {
                a.prototype._updateImpl.call(this), (this._invalidated = !0);
            }),
            (r.prototype.updateImpl = function() {
                var e, t, i, n, r, s, a, o, l, h;
                (this._extendLeftPoints = []),
                    (this._extendRightPoints = []),
                    this._source.points().length < 4 ||
                        ((e = this._source.pointToScreenPoint(
                            this._source.points()[0]
                        )[1]),
                        (t = this._source.pointToScreenPoint(
                            this._source.points()[1]
                        )[1]),
                        (i = this._source.pointToScreenPoint(
                            this._source.points()[2]
                        )[1]),
                        (n = this._source.pointToScreenPoint(
                            this._source.points()[3]
                        )[1]),
                        (r = n.subtract(e)),
                        (s = i.subtract(r.scaled(0.25))),
                        (a = t.subtract(i)),
                        (o = n.add(a.scaled(0.25))),
                        (l = this._model.timeScale().width()),
                        (h = this._source.priceScale().height()),
                        this._source.properties().extendLeft.value() &&
                            (this._extendLeftPoints = p.extendQuadroBezier(
                                i,
                                e,
                                s,
                                l,
                                h
                            )),
                        this._source.properties().extendRight.value() &&
                            (this._extendRightPoints = p.extendQuadroBezier(
                                n,
                                t,
                                o,
                                l,
                                h
                            )));
            }),
            (r.prototype.renderer = function() {
                var e, t, i, n;
                return this._points.length < 2
                    ? new h()
                    : (this._invalidated &&
                          (this.updateImpl(), (this._invalidated = !1)),
                      (e = [].concat(this._points)),
                      this._source._controlPoints &&
                          (e.push(
                              this._source.pointToScreenPoint(
                                  this._source._controlPoints[0]
                              )[0]
                          ),
                          e.push(
                              this._source.pointToScreenPoint(
                                  this._source._controlPoints[1]
                              )[0]
                          )),
                      (t = {}),
                      (i = this._source.properties()),
                      (t.points = e),
                      (t.color = i.linecolor.value()),
                      (t.linewidth = i.linewidth.value()),
                      (t.linestyle = i.linestyle.value()),
                      (t.leftend = i.leftEnd.value()),
                      (t.rightend = i.rightEnd.value()),
                      (t.fillBack = i.fillBackground.value()),
                      (t.backcolor = i.backgroundColor.value()),
                      (t.transparency = i.transparency.value()),
                      (t.extendLeftPoints = this._extendLeftPoints),
                      (t.extendRightPoints = this._extendRightPoints),
                      this._renderer.setData(t),
                      (n = new h()),
                      n.append(this._renderer),
                      this.addAnchors(n),
                      n);
            }),
            (t.BezierCubicPaneView = r);
    },
    846: function(e, t, i) {
        "use strict";
        function n() {
            this._data = null;
        }
        function r(e, t) {
            a.call(this, e, t),
                (this._invalidated = !0),
                (this._renderer = new n());
        }
        var s = i(33).distanceToSegment,
            a = i(12).LineSourcePaneView,
            o = i(16).TrendLineRenderer,
            l = i(4),
            h = i(8).CompositeRenderer,
            d = i(19),
            c = i(18).LineEnd,
            p = i(492);
        (n.prototype.setData = function(e) {
            this._data = e;
        }),
            (n.prototype.draw = function(e) {
                var t, i, n, r, s, a, l, h, p;
                if (null !== this._data)
                    if (
                        ((t = this._data.points[0]),
                        (i = this._data.points[1]),
                        (e.lineCap = "butt"),
                        (e.strokeStyle = this._data.color),
                        (e.lineWidth = this._data.linewidth),
                        CanvasEx.setLineStyle(e, this._data.linestyle),
                        2 === this._data.points.length)
                    )
                        e.beginPath(),
                            e.moveTo(t.x, t.y),
                            e.lineTo(i.x, i.y),
                            e.stroke();
                    else {
                        if (
                            ((n = this._data.points[2]),
                            (r = i.subtract(t)),
                            (s = n.subtract(r.scaled(0.25))),
                            (a = n.add(r.scaled(0.25))),
                            this._data.fillBack &&
                                this._data.points.length > 2 &&
                                ((e.fillStyle = d.generateColor(
                                    this._data.backcolor,
                                    this._data.transparency
                                )),
                                e.beginPath(),
                                e.moveTo(t.x, t.y),
                                e.quadraticCurveTo(s.x, s.y, n.x, n.y),
                                e.quadraticCurveTo(a.x, a.y, i.x, i.y),
                                e.fill()),
                            e.beginPath(),
                            e.moveTo(t.x, t.y),
                            this._data.extendLeftPoints.length > 0)
                        )
                            for (
                                l = this._data.extendLeftPoints[
                                    this._data.extendLeftPoints.length - 1
                                ],
                                    e.moveTo(l.x, l.y),
                                    h = this._data.extendLeftPoints.length - 2;
                                h >= 0;
                                h--
                            )
                                (p = this._data.extendLeftPoints[h]),
                                    e.lineTo(p.x, p.y);
                        for (
                            e.quadraticCurveTo(s.x, s.y, n.x, n.y),
                                e.quadraticCurveTo(a.x, a.y, i.x, i.y),
                                h = 0;
                            h < this._data.extendRightPoints.length;
                            h++
                        )
                            (p = this._data.extendRightPoints[h]),
                                e.lineTo(p.x, p.y);
                        e.stroke(),
                            this._data.leftend === c.Arrow &&
                                o.prototype.drawArrow(s, t, e, e.lineWidth),
                            this._data.rightend === c.Arrow &&
                                o.prototype.drawArrow(a, i, e, e.lineWidth);
                    }
            }),
            (n.prototype.hitTest = function(e) {
                var t, i, n, r, a, o, h, d;
                if (null !== this._data && 3 === this._data.points.length) {
                    if (
                        ((t = this._data.points[0]),
                        (i = this._data.points[1]),
                        (n = this._data.points[2]),
                        (r = i.subtract(t)),
                        (a = n.subtract(r.scaled(0.25))),
                        (o = n.add(r.scaled(0.25))),
                        p.quadroBezierHitTest(n, t, a, e) ||
                            p.quadroBezierHitTest(n, i, o, e))
                    )
                        return new l(l.MOVEPOINT);
                    for (
                        h = 3, d = 1;
                        d < this._data.extendLeftPoints.length;
                        d++
                    )
                        if (
                            ((t = this._data.extendLeftPoints[d - 1]),
                            (i = this._data.extendLeftPoints[d]),
                            s(t, i, e).distance < h)
                        )
                            return new l(l.MOVEPOINT);
                    for (d = 1; d < this._data.extendRightPoints.length; d++)
                        if (
                            ((t = this._data.extendRightPoints[d - 1]),
                            (i = this._data.extendRightPoints[d]),
                            s(t, i, e).distance < h)
                        )
                            return new l(l.MOVEPOINT);
                }
                return null;
            }),
            inherit(r, a),
            (r.prototype.update = function() {
                a.prototype._updateImpl.call(this), (this._invalidated = !0);
            }),
            (r.prototype.updateImpl = function() {
                var e, t, i, n, r, s, a, o;
                (this._extendLeftPoints = []),
                    (this._extendRightPoints = []),
                    this._source.points().length < 3 ||
                        ((e = this._source.pointToScreenPoint(
                            this._source.points()[0]
                        )[1]),
                        (t = this._source.pointToScreenPoint(
                            this._source.points()[1]
                        )[1]),
                        (i = this._source.pointToScreenPoint(
                            this._source.points()[2]
                        )[1]),
                        (n = t.subtract(e)),
                        (r = i.subtract(n.scaled(0.25))),
                        (s = i.add(n.scaled(0.25))),
                        (a = this._model.timeScale().width()),
                        (o = this._source.priceScale().height()),
                        this._source.properties().extendLeft.value() &&
                            (this._extendLeftPoints = p.extendQuadroBezier(
                                i,
                                e,
                                r,
                                a,
                                o
                            )),
                        this._source.properties().extendRight.value() &&
                            (this._extendRightPoints = p.extendQuadroBezier(
                                i,
                                t,
                                s,
                                a,
                                o
                            )));
            }),
            (r.prototype.renderer = function() {
                var e, t, i, n;
                return this._points.length < 2
                    ? new h()
                    : (this._invalidated &&
                          (this.updateImpl(), (this._invalidated = !1)),
                      (e = [].concat(this._points)),
                      this._source._controlPoint &&
                          e.push(
                              this._source.pointToScreenPoint(
                                  this._source._controlPoint
                              )[0]
                          ),
                      (t = {}),
                      (i = this._source.properties()),
                      (t.points = e),
                      (t.color = i.linecolor.value()),
                      (t.linewidth = i.linewidth.value()),
                      (t.linestyle = i.linestyle.value()),
                      (t.leftend = i.leftEnd.value()),
                      (t.rightend = i.rightEnd.value()),
                      (t.fillBack = i.fillBackground.value()),
                      (t.backcolor = i.backgroundColor.value()),
                      (t.transparency = i.transparency.value()),
                      (t.extendLeftPoints = this._extendLeftPoints),
                      (t.extendRightPoints = this._extendRightPoints),
                      this._renderer.setData(t),
                      (n = new h()),
                      n.append(this._renderer),
                      this.addAnchors(n),
                      n);
            }),
            (t.BezierQuadroPaneView = r);
    },
    848: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._invalidated = !0),
                (this._model = t),
                (this._source = e),
                (this._poligonRenderer = new a());
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(164),
            o = i(74).SelectionRenderer,
            l = i(8).CompositeRenderer;
        inherit(n, s),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype._smoothArray = function(e, t) {
                var i,
                    n,
                    s,
                    a,
                    o,
                    l = Array(e.length);
                for (i = 0; i < e.length; i++) {
                    for (n = new r(0, 0), s = 0; s < t; s++)
                        (a = Math.max(i - s, 0)),
                            (o = Math.min(i + s, e.length - 1)),
                            (n = n.add(e[a])),
                            (n = n.add(e[o]));
                    l[i] = n.scaled(0.5 / t);
                }
                return l.push(e[e.length - 1]), l;
            }),
            (n.prototype._updateInternal = function() {
                var e, t, i, n, r, a, o, l, h;
                if (
                    (s.prototype._updateImpl.call(this),
                    (e = Math.max(1, this._source.properties().smooth.value())),
                    (t = this._points),
                    0 !== t.length)
                ) {
                    for (i = [t[0]], n = 1; n < t.length; n++) {
                        for (
                            r = t[n].subtract(t[n - 1]),
                                a = r.length(),
                                o = Math.min(5, Math.floor(a / e)),
                                l = r.normalized().scaled(a / o),
                                h = 0;
                            h < o - 1;
                            h++
                        )
                            i.push(t[n - 1].add(l.scaled(h)));
                        i.push(t[n]);
                    }
                    this._points = this._smoothArray(i, e);
                }
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n;
                return (
                    this._invalidated &&
                        (this._updateInternal(), (this._invalidated = !1)),
                    (e = {}),
                    (t = this._source.properties()),
                    (e.points = this._points),
                    (e.color = t.linecolor.value()),
                    (e.linewidth = t.linewidth.value()),
                    (e.linestyle = t.linestyle.value()),
                    (e.skipClosePath = !0),
                    (e.leftend = this._source.properties().leftEnd.value()),
                    (e.rightend = this._source.properties().rightEnd.value()),
                    t.fillBackground.value() &&
                        this._model.lineBeingCreated() !== this._source &&
                        ((e.filled = !0),
                        (e.fillBackground = !0),
                        (e.backcolor = t.backgroundColor.value()),
                        (e.transparency = t.transparency.value())),
                    this._poligonRenderer.setData(e),
                    this.isAnchorsRequired() && this._source.finished()
                        ? ((i = new l()),
                          i.append(this._poligonRenderer),
                          e.points.length > 0 &&
                              ((n = [
                                  e.points[0],
                                  e.points[e.points.length - 1]
                              ]),
                              i.append(new o({points: n}))),
                          i)
                        : this._poligonRenderer
                );
            }),
            (t.BrushPaneView = n);
    },
    850: function(e, t, i) {
        "use strict";
        function n(e) {
            (this._data = null), (this._textSizeCache = e);
        }
        function r(e, t) {
            a.call(this, e, t),
                (this._textSizeCache = {}),
                (this._invalidated = !0),
                (this._renderer = new n(this._textSizeCache));
        }
        var s = i(1).Point,
            a = i(12).LineSourcePaneView,
            o = i(4),
            l = i(8).CompositeRenderer,
            h = i(19),
            d = i(483).CalloutConsts;
        !(function() {
            function e() {
                var e = document.createElement("canvas");
                (e.width = 0),
                    (e.height = 0),
                    (t = e.getContext("2d")),
                    (e = null);
            }
            var t;
            n.prototype.wordWrap = function(i, n) {
                var r, s, a, o, l, h, d, c, p;
                if (
                    (t || e(),
                    (n = +n),
                    (i += ""),
                    (r = i.split(/[^\S\r\n]*(?:\r\n|\r|\n|$)/)),
                    r[r.length - 1] || r.pop(),
                    !isFinite(n) || n <= 0)
                )
                    return r;
                for (
                    t.font = this.fontStyle(), s = [], a = 0;
                    a < r.length;
                    a++
                )
                    if (((o = r[a]), (l = t.measureText(o).width) <= n))
                        s.push(o);
                    else
                        for (
                            h = o.split(/([-\)\]\},.!?:;])|(\s+)/);
                            h.length;

                        ) {
                            if (
                                (d = ~~(n / l * (h.length + 2) / 3)) <= 0 ||
                                t.measureText(h.slice(0, 3 * d - 1).join(""))
                                    .width <= n
                            )
                                for (
                                    ;
                                    t.measureText(
                                        h.slice(0, 3 * (d + 1) - 1).join("")
                                    ).width <= n;

                                )
                                    d++;
                            else
                                for (
                                    ;
                                    d > 0 &&
                                    t.measureText(
                                        h.slice(0, 3 * --d - 1).join("")
                                    ).width > n;

                                );
                            if (d > 0)
                                s.push(h.slice(0, 3 * d - 1).join("")),
                                    h.splice(0, 3 * d);
                            else {
                                if (
                                    ((c = h[0] + (h[1] || "")),
                                    (p =
                                        1 === p
                                            ? 1
                                            : ~~(
                                                  n /
                                                  t.measureText(c) *
                                                  c.length
                                              )),
                                    t.measureText(c.substr(0, p)).width <= n)
                                )
                                    for (
                                        ;
                                        t.measureText(c.substr(0, p + 1))
                                            .width <= n;

                                    )
                                        p++;
                                else
                                    for (
                                        ;
                                        p > 1 &&
                                        t.measureText(c.substr(0, --p)).width >
                                            n;

                                    );
                                p < 1 && (p = 1),
                                    s.push(c.substr(0, p)),
                                    (h[0] = c.substr(p)),
                                    (h[1] = "");
                            }
                            if ((l = t.measureText(h.join("")).width) <= n) {
                                s.push(h.join(""));
                                break;
                            }
                        }
                return s;
            };
        })(),
            (n.prototype.setData = function(e) {
                (this._data = e),
                    (this._data.lines = this.wordWrap(e.text, e.wordWrapWidth));
            }),
            (n.prototype.hitTest = function(e) {
                var t, i, n, r, s;
                return null === this._data || this._data.points.length < 2
                    ? null
                    : ((t = this._data.points[0]),
                      (i = this._data.points[1]),
                      (n = 3),
                      t.subtract(e).length() < n
                          ? new o(o.CHANGEPOINT, 0)
                          : ((r = i.x - this._textSizeCache.totalWidth / 2),
                            (s = i.y - this._textSizeCache.totalHeight / 2),
                            e.x >= r &&
                            e.x <= r + this._textSizeCache.totalWidth &&
                            e.y >= s &&
                            e.y <= s + this._textSizeCache.totalHeight
                                ? new o(o.MOVEPOINT)
                                : null));
            }),
            (n.prototype.fontStyle = function() {
                return (
                    (this._data.bold ? "bold " : "") +
                    (this._data.italic ? "italic " : "") +
                    this._data.fontSize +
                    "px " +
                    this._data.font
                );
            }),
            (n.prototype.draw = function(e) {
                var t, i, n, r, s, a, o, l, c, p, _, u, f, g;
                if (!(null === this._data || this._data.points.length < 2)) {
                    for (
                        t = this._data.points[0].clone(),
                            i = this._data.points[1].clone(),
                            e.lineCap = "butt",
                            e.strokeStyle = this._data.bordercolor,
                            e.lineWidth = this._data.linewidth,
                            e.textBaseline = "bottom",
                            e.font = this.fontStyle(),
                            n = this._data.fontSize * this._data.lines.length,
                            r =
                                this._data.wordWrapWidth ||
                                this._data.lines.reduce(function(t, i) {
                                    return Math.max(t, e.measureText(i).width);
                                }, 0),
                            this._textSizeCache.textHeight = n,
                            this._textSizeCache.textHeight = r,
                            s = d.RoundRadius,
                            a = d.TextMargins,
                            o = r + 2 * a + 2 * s,
                            l = n + 2 * a + 2 * s,
                            this._textSizeCache.totalWidth = o,
                            this._textSizeCache.totalHeight = l,
                            c = i.x - o / 2,
                            p = i.y - l / 2,
                            _ = 0,
                            u = r + 2 * a > 2 * s,
                            f = n + 2 * a > 2 * s,
                            t.x > c + o ? (_ = 20) : t.x > c && (_ = 10),
                            t.y > p + l ? (_ += 2) : t.y > p && (_ += 1),
                            e.save(),
                            e.translate(c, p),
                            t.x -= c,
                            t.y -= p,
                            i.x -= c,
                            i.y -= p,
                            e.beginPath(),
                            e.moveTo(s, 0),
                            10 === _
                                ? u
                                    ? (e.lineTo(i.x - s, 0),
                                      e.lineTo(t.x, t.y),
                                      e.lineTo(i.x + s, 0),
                                      e.lineTo(o - s, 0))
                                    : (e.lineTo(t.x, t.y), e.lineTo(o - s, 0))
                                : e.lineTo(o - s, 0),
                            20 === _
                                ? (e.lineTo(t.x, t.y), e.lineTo(o, s))
                                : e.arcTo(o, 0, o, s, s),
                            21 === _
                                ? f
                                    ? (e.lineTo(o, i.y - s),
                                      e.lineTo(t.x, t.y),
                                      e.lineTo(o, i.y + s),
                                      e.lineTo(o, l - s))
                                    : (e.lineTo(t.x, t.y), e.lineTo(o, l - s))
                                : e.lineTo(o, l - s),
                            22 === _
                                ? (e.lineTo(t.x, t.y), e.lineTo(o - s, l))
                                : e.arcTo(o, l, o - s, l, s),
                            12 === _
                                ? u
                                    ? (e.lineTo(i.x + s, l),
                                      e.lineTo(t.x, t.y),
                                      e.lineTo(i.x - s, l),
                                      e.lineTo(s, l))
                                    : (e.lineTo(t.x, t.y), e.lineTo(s, l))
                                : e.lineTo(s, l),
                            2 === _
                                ? (e.lineTo(t.x, t.y), e.lineTo(0, l - s))
                                : e.arcTo(0, l, 0, l - s, s),
                            1 === _
                                ? f
                                    ? (e.lineTo(0, i.y + s),
                                      e.lineTo(t.x, t.y),
                                      e.lineTo(0, i.y - s),
                                      e.lineTo(0, s))
                                    : (e.lineTo(t.x, t.y), e.lineTo(0, s))
                                : e.lineTo(0, s),
                            0 === _
                                ? (e.lineTo(t.x, t.y), e.lineTo(s, 0))
                                : e.arcTo(0, 0, s, 0, s),
                            e.stroke(),
                            e.fillStyle = h.generateColor(
                                this._data.backcolor,
                                this._data.transparency
                            ),
                            e.fill(),
                            e.fillStyle = this._data.color,
                            p = s + a + this._data.fontSize,
                            c = s + a,
                            g = 0;
                        g < this._data.lines.length;
                        g++
                    )
                        e.fillText(this._data.lines[g], c, p),
                            (p += this._data.fontSize);
                    e.restore();
                }
            }),
            inherit(r, a),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype.updateImpl = function() {
                a.prototype._updateImpl.call(this),
                    this._source._calculatePoint2();
            }),
            (r.prototype.renderer = function() {
                var e, t, i, n, r, a, o;
                return (
                    this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    this._points[0]
                        ? this._points.length < 2
                            ? void 0
                            : ((e = this._source.properties()),
                              (t = {}),
                              (t.points = []),
                              t.points.push(this._points[0]),
                              (i = this._points[1].clone()),
                              (i.x =
                                  this._points[0].x +
                                  this._source._barOffset *
                                      this._model.timeScale().barSpacing()),
                              t.points.push(i),
                              (t.color = e.color.value()),
                              (t.linewidth = e.linewidth.value()),
                              (t.backcolor = e.backgroundColor.value()),
                              (t.transparency = e.transparency.value()),
                              (t.text = e.text.value()),
                              (t.font = e.font.value()),
                              (t.fontSize = e.fontsize.value()),
                              (t.bordercolor = e.bordercolor.value()),
                              e.wordWrap &&
                                  e.wordWrap.value() &&
                                  (t.wordWrapWidth = e.wordWrapWidth.value()),
                              (t.bold = e.bold && e.bold.value()),
                              (t.italic = e.italic && e.italic.value()),
                              this._renderer.setData(t),
                              this.isAnchorsRequired()
                                  ? ((n = new l()),
                                    n.append(this._renderer),
                                    (r = t.points[1]),
                                    (a = [].concat(t.points)),
                                    a.splice(a.length - 1, 1),
                                    n.append(
                                        this.createLineAnchor({points: a})
                                    ),
                                    t.wordWrapWidth &&
                                        ((o = new s(
                                            r.x +
                                                (t.wordWrapWidth >> 1) +
                                                d.RoundRadius +
                                                d.TextMargins,
                                            r.y
                                        )),
                                        (o.data = 1),
                                        n.append(
                                            this.createLineAnchor({points: [o]})
                                        )),
                                    n)
                                  : this._renderer)
                        : new l()
                );
            }),
            (t.CalloutPaneView = r);
    },
    852: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._lines = []),
                (this._invalidated = !0),
                (this._trendRenderer = new o());
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(146).VerticalLineRenderer,
            o = i(16).TrendLineRenderer,
            l = i(4),
            h = i(8).CompositeRenderer,
            d = i(18).LineEnd;
        inherit(n, s),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n, r, a, o;
                if (
                    (s.prototype._updateImpl.call(this),
                    !(this._source.points().length < 2) &&
                        ((e = this._model.timeScale()),
                        this._source.priceScale() &&
                            !this._source.priceScale().isEmpty() &&
                            !e.isEmpty() &&
                            ((t = this._source.points()[0]),
                            (i = this._source.points()[1]),
                            (n = i ? i.index - t.index : 1),
                            (this._lines = []),
                            0 !== n)))
                )
                    if (((r = e.visibleBars()), n > 0))
                        for (a = t.index, o = a; o <= r.lastBar(); o += n)
                            this._lines.push({x: e.indexToCoordinate(o)});
                    else
                        for (a = t.index, o = a; o >= r.firstBar(); o += n)
                            this._lines.push({x: e.indexToCoordinate(o)});
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, s, o, c, p, _, u, f;
                if (
                    (this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = new h()),
                    this._points.length < 2)
                )
                    return e;
                for (
                    t = this._points[0],
                        i = this._points[1],
                        n = this._source.properties(),
                        s = {
                            points: [t, i],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: n.trendline.color.value(),
                            linewidth: n.trendline.linewidth.value(),
                            linestyle: n.trendline.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: d.Normal,
                            rightend: d.Normal
                        },
                        this._trendRenderer.setData(s),
                        e.append(this._trendRenderer),
                        o = this._model.timeScale().width(),
                        c = this._source.priceScale().height(),
                        n = this._source.properties(),
                        p = 0;
                    p < this._lines.length;
                    p++
                )
                    (_ = {
                        width: o,
                        height: c,
                        points: [new r(this._lines[p].x, 0)],
                        color: n.linecolor.value(),
                        linewidth: n.linewidth.value(),
                        linestyle: n.linestyle.value()
                    }),
                        (u = new a()),
                        u.setData(_),
                        e.append(u);
                return (
                    this.isAnchorsRequired() &&
                        (2 === this._source.points().length
                            ? ((f = [].concat(this._points)),
                              e.append(this.createLineAnchor({points: f})))
                            : e.append(
                                  this.createLineAnchor({
                                      points: [
                                          new r(
                                              this._points[0].x,
                                              this._source
                                                  .priceScale()
                                                  .height() / 2
                                          )
                                      ],
                                      hittestResult: l.MOVEPOINT
                                  })
                              )),
                    e
                );
            }),
            (t.LineToolCircleLinesPaneView = n);
    },
    854: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t), (this._invalidated = !0);
        }
        var r = i(12).LineSourcePaneView,
            s = i(412).Pattern5PaneView;
        inherit(n, s),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n, s;
                r.prototype._updateImpl.call(this),
                    this._source.points().length >= 3 &&
                        ((e = this._source.points()[0]),
                        (t = this._source.points()[1]),
                        (i = this._source.points()[2]),
                        (this._ABRetracement =
                            Math.round(
                                1e3 *
                                    Math.abs(
                                        (i.price - t.price) /
                                            (t.price - e.price)
                                    )
                            ) / 1e3)),
                    this._source.points().length >= 4 &&
                        ((n = this._source.points()[3]),
                        (this._BCRetracement =
                            Math.round(
                                1e3 *
                                    Math.abs(
                                        (n.price - e.price) /
                                            (t.price - e.price)
                                    )
                            ) / 1e3)),
                    this._source.points().length >= 5 &&
                        ((s = this._source.points()[4]),
                        (this._CDRetracement =
                            Math.round(
                                1e3 *
                                    Math.abs(
                                        (s.price - n.price) /
                                            (n.price - i.price)
                                    )
                            ) / 1e3),
                        (this._XDRetracement =
                            Math.round(
                                1e3 *
                                    Math.abs(
                                        (s.price - n.price) /
                                            (e.price - n.price)
                                    )
                            ) / 1e3));
            }),
            (t.CypherPaneView = n);
    },
    856: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._invalidated = !0),
                (this._percentageFormatter = new d()),
                (this._pipFormatter = null),
                (this._lastSymbolInfo = null),
                (this._topBorderRenderer = new l()),
                (this._bottomBorderRenderer = new l()),
                (this._leftBorderRenderer = new l()),
                (this._rightBorderRenderer = new l()),
                (this._distanceLineRenderer = new l()),
                (this._distancePriceRenderer = new l()),
                (this._backgroundRenderer = new o()),
                (this._textRenderer = new a({}));
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(27).TextRenderer,
            o = i(70).RectangleRenderer,
            l = i(16).TrendLineRenderer,
            h = i(8).CompositeRenderer,
            d = i(94).PercentageFormatter,
            c = i(175).TimeSpanFormatter,
            p = i(145).PipFormatter,
            _ = i(18).LineEnd;
        inherit(n, s),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                s.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (n.prototype.renderer = function() {
                var e,
                    t,
                    i,
                    n,
                    s,
                    a,
                    o,
                    l,
                    d,
                    u,
                    f,
                    g,
                    v,
                    w,
                    y,
                    m,
                    x,
                    b,
                    S,
                    P,
                    R,
                    T,
                    L,
                    C,
                    k,
                    I,
                    B,
                    M,
                    A,
                    D,
                    E;
                return (
                    this._invalidated && this.updateImpl(),
                    (e = new h()),
                    this._points.length < 2 || this._source.points().length < 2
                        ? e
                        : ((t = this._source.properties()),
                          t.fillBackground &&
                              t.fillBackground.value() &&
                              ((i = {}),
                              (i.points = this._points),
                              (i.color = "white"),
                              (i.linewidth = 0),
                              (i.backcolor = t.backgroundColor.value()),
                              (i.fillBackground = !0),
                              (i.transparency = t.backgroundTransparency.value()),
                              this._backgroundRenderer.setData(i),
                              e.append(this._backgroundRenderer)),
                          (n = this),
                          (s = function(t, i, r) {
                              var s = {};
                              (s.points = [i, r]),
                                  (s.width = n._model.timeScale().width()),
                                  (s.height = n._source.priceScale().height()),
                                  (s.color = n._source
                                      .properties()
                                      .linecolor.value()),
                                  (s.linewidth = n._source
                                      .properties()
                                      .linewidth.value()),
                                  (s.linestyle = CanvasEx.LINESTYLE_SOLID),
                                  (s.extendleft = !1),
                                  (s.extendright = !1),
                                  (s.leftend = _.Normal),
                                  (s.rightend = _.Normal),
                                  t.setData(s),
                                  e.append(t);
                          }),
                          (a = this._points[0]),
                          (o = this._points[1]),
                          s(this._topBorderRenderer, a, new r(o.x, a.y)),
                          s(this._bottomBorderRenderer, new r(a.x, o.y), o),
                          s(this._leftBorderRenderer, a, new r(a.x, o.y)),
                          s(this._rightBorderRenderer, new r(o.x, a.y), o),
                          (l = (a.y + o.y) / 2),
                          (d = new r(a.x, l)),
                          (u = new r(o.x, l)),
                          (i = {}),
                          (i.points = [d, u]),
                          (i.width = n._model.timeScale().width()),
                          (i.height = n._source.priceScale().height()),
                          (i.color = n._source.properties().linecolor.value()),
                          (i.linewidth = n._source
                              .properties()
                              .linewidth.value()),
                          (i.linestyle = CanvasEx.LINESTYLE_DASHED),
                          (i.extendleft = !1),
                          (i.extendright = !1),
                          (i.leftend = _.Normal),
                          (i.rightend = _.Arrow),
                          this._distanceLineRenderer.setData(i),
                          e.append(this._distanceLineRenderer),
                          (a = this._points[0]),
                          (o = this._points[1]),
                          (f = (a.x + o.x) / 2),
                          (d = new r(f, a.y)),
                          (u = new r(f, o.y)),
                          (i = {}),
                          (i.points = [d, u]),
                          (i.width = n._model.timeScale().width()),
                          (i.height = n._source.priceScale().height()),
                          (i.color = n._source.properties().linecolor.value()),
                          (i.linewidth = n._source
                              .properties()
                              .linewidth.value()),
                          (i.linestyle = CanvasEx.LINESTYLE_DASHED),
                          (i.extendleft = !1),
                          (i.extendright = !1),
                          (i.leftend = _.Normal),
                          (i.rightend = _.Arrow),
                          this._distancePriceRenderer.setData(i),
                          e.append(this._distancePriceRenderer),
                          (g = this._source.points()[0].price),
                          (v = this._source.points()[1].price),
                          (w = v - g),
                          (y = 100 * w / g),
                          (m = this._source.points()[0].index),
                          (x = this._source.points()[1].index),
                          (b = x - m),
                          (S = this._model.timeScale().indexToUserTime(m)),
                          (P = this._model.timeScale().indexToUserTime(x)),
                          (R = ""),
                          S &&
                              P &&
                              ((T = (P.valueOf() - S.valueOf()) / 1e3),
                              (R = ", " + new c().format(T))),
                          (L = this._model.mainSeries().symbolInfo()),
                          L &&
                              L !== this._lastSymbolInfo &&
                              ((this._pipFormatter = new p(
                                  L.pricescale,
                                  L.minmov,
                                  L.type,
                                  L.minmove2
                              )),
                              (this._lastSymbolInfo = L)),
                          (C =
                              this._source
                                  .priceScale()
                                  .formatter()
                                  .format(w) +
                              " (" +
                              this._percentageFormatter.format(
                                  Math.round(100 * y) / 100
                              ) +
                              ") " +
                              (this._pipFormatter
                                  ? this._pipFormatter.format(w)
                                  : "") +
                              "\n" +
                              $.t("{0} bars").format(b) +
                              R),
                          (i = {}),
                          v > g
                              ? ((k = o.clone()),
                                (k.y -= 2 * t.fontsize.value()),
                                (k.x = 0.5 * (a.x + o.x)),
                                (i.points = [k]))
                              : ((k = o.clone()),
                                (k.x = 0.5 * (a.x + o.x)),
                                (k.y += 0.7 * t.fontsize.value()),
                                (i.points = [k])),
                          (I = {x: 0, y: 10}),
                          (i.text = C),
                          (i.color = t.textcolor.value()),
                          (i.height = n._source.priceScale().height()),
                          (i.font = t.font.value()),
                          (i.offsetX = I.x),
                          (i.offsetY = I.y),
                          (i.padding = 5),
                          (i.vertAlign = "middle"),
                          (i.horzAlign = "center"),
                          (i.fontsize = t.fontsize.value()),
                          (i.backgroundRoundRect = 4),
                          (i.backgroundHorzInflate = 0.4 * t.fontsize.value()),
                          (i.backgroundVertInflate = 0.2 * t.fontsize.value()),
                          t.fillLabelBackground &&
                              t.fillLabelBackground.value() &&
                              ((i.backgroundColor = t.labelBackgroundColor.value()),
                              (i.backgroundTransparency =
                                  1 -
                                      t.labelBackgroundTransparency.value() /
                                          100 || 0)),
                          t.drawBorder &&
                              t.drawBorder.value() &&
                              (i.borderColor = t.borderColor.value()),
                          (B = 0.5 * (a.x + o.x)),
                          (M = o.y),
                          (A = new r(B, M)),
                          this._textRenderer.setData(i),
                          (D = this._textRenderer.measure()),
                          (E = {
                              x:
                                  B +
                                  i.backgroundHorzInflate +
                                  D.textBgPadding -
                                  D.width / D.textBgPadding,
                              y:
                                  a.y > o.y
                                      ? A.y -
                                            D.height -
                                            2 * D.textBgPadding -
                                            I.y >
                                        0
                                          ? M - D.height - I.y + D.textBgPadding
                                          : I.y - 2 * D.textBgPadding
                                      : A.y + D.height + D.textBgPadding + I.y >
                                        i.height
                                          ? i.height - D.height - I.y
                                          : M + D.textBgPadding
                          }),
                          this._textRenderer.setPoints([new r(B, E.y)]),
                          e.append(this._textRenderer),
                          this.addAnchors(e),
                          e)
                );
            }),
            (t.DateAndPriceRangePaneView = n);
    },
    858: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._invalidated = !0),
                (this._leftBorderRenderer = new l()),
                (this._rightBorderRenderer = new l()),
                (this._distancePriceRenderer = new l()),
                (this._backgroundRenderer = new o()),
                (this._textRenderer = new a({}));
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(27).TextRenderer,
            o = i(70).RectangleRenderer,
            l = i(16).TrendLineRenderer,
            h = i(8).CompositeRenderer,
            d = i(175).TimeSpanFormatter,
            c = i(18).LineEnd;
        inherit(n, s),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                s.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (n.prototype.renderer = function(e) {
                var t,
                    i,
                    n,
                    s,
                    a,
                    o,
                    l,
                    p,
                    _,
                    u,
                    f,
                    g,
                    v,
                    w,
                    y,
                    m,
                    x,
                    b,
                    S,
                    P,
                    R,
                    T,
                    L,
                    C,
                    k,
                    I,
                    B,
                    M;
                return (
                    this._invalidated && this.updateImpl(),
                    (t = new h()),
                    this._points.length < 2 || this._source.points().length < 2
                        ? t
                        : ((i = this._source.properties()),
                          (n = i.extendTop.value()),
                          (s = i.extendBottom.value()),
                          (a = this._points[0]),
                          (o = this._points[1]),
                          (l = n ? 0 : Math.min(a.y, o.y)),
                          (p = s ? e : Math.max(a.y, o.y)),
                          i.fillBackground &&
                              i.fillBackground.value() &&
                              ((_ = {}),
                              (_.points = [new r(a.x, l), new r(o.x, p)]),
                              (_.color = "white"),
                              (_.linewidth = 0),
                              (_.backcolor = i.backgroundColor.value()),
                              (_.fillBackground = !0),
                              (_.transparency = i.backgroundTransparency.value()),
                              this._backgroundRenderer.setData(_),
                              t.append(this._backgroundRenderer)),
                          (u = this),
                          (f = function(e, i, n) {
                              var r = {};
                              (r.points = [i, n]),
                                  (r.width = u._model.timeScale().width()),
                                  (r.height = u._source.priceScale().height()),
                                  (r.color = u._source
                                      .properties()
                                      .linecolor.value()),
                                  (r.linewidth = u._source
                                      .properties()
                                      .linewidth.value()),
                                  (r.linestyle = CanvasEx.LINESTYLE_SOLID),
                                  (r.extendleft = !1),
                                  (r.extendright = !1),
                                  (r.leftend = c.Normal),
                                  (r.rightend = c.Normal),
                                  e.setData(r),
                                  t.append(e);
                          }),
                          f(
                              this._leftBorderRenderer,
                              new r(a.x, l),
                              new r(a.x, p)
                          ),
                          f(
                              this._rightBorderRenderer,
                              new r(o.x, l),
                              new r(o.x, p)
                          ),
                          (g = (a.y + o.y) / 2),
                          (v = new r(a.x, g)),
                          (w = new r(o.x, g)),
                          (_ = {}),
                          (_.points = [v, w]),
                          (_.width = u._model.timeScale().width()),
                          (_.height = u._source.priceScale().height()),
                          (_.color = u._source.properties().linecolor.value()),
                          (_.linewidth = u._source
                              .properties()
                              .linewidth.value()),
                          (_.linestyle = CanvasEx.LINESTYLE_DASHED),
                          (_.extendleft = !1),
                          (_.extendright = !1),
                          (_.leftend = c.Normal),
                          (_.rightend = c.Arrow),
                          this._distancePriceRenderer.setData(_),
                          t.append(this._distancePriceRenderer),
                          (y = this._source.points()[0].index),
                          (m = this._source.points()[1].index),
                          (x = m - y),
                          (b = this._model.timeScale().indexToUserTime(y)),
                          (S = this._model.timeScale().indexToUserTime(m)),
                          (P = ""),
                          b &&
                              S &&
                              ((R = (S.valueOf() - b.valueOf()) / 1e3),
                              (P = ", " + new d().format(R))),
                          (T = $.t("{0} bars").format(x) + P),
                          (_ = {}),
                          (L = {x: 0, y: 10}),
                          (_.text = T),
                          (_.color = i.textcolor.value()),
                          (_.height = u._source.priceScale().height()),
                          (_.font = i.font.value()),
                          (_.offsetX = L.x),
                          (_.offsetY = L.y),
                          (_.vertAlign = "middle"),
                          (_.horzAlign = "center"),
                          (_.fontsize = i.fontsize.value()),
                          (_.backgroundRoundRect = 4),
                          (_.backgroundHorzInflate = 0.4 * i.fontsize.value()),
                          (_.backgroundVertInflate = 0.2 * i.fontsize.value()),
                          i.fillLabelBackground &&
                              i.fillLabelBackground.value() &&
                              ((_.backgroundColor = i.labelBackgroundColor.value()),
                              (_.backgroundTransparency =
                                  1 -
                                      i.labelBackgroundTransparency.value() /
                                          100 || 0)),
                          i.drawBorder &&
                              i.drawBorder.value() &&
                              (_.borderColor = i.borderColor.value()),
                          (C = 0.5 * (a.x + o.x)),
                          (k = o.y),
                          (I = new r(C, k)),
                          this._textRenderer.setData(_),
                          (B = this._textRenderer.measure()),
                          (M = {
                              x:
                                  C +
                                  _.backgroundHorzInflate +
                                  B.textBgPadding -
                                  B.width / B.textBgPadding,
                              y:
                                  a.y > o.y
                                      ? I.y -
                                            B.height -
                                            2 * B.textBgPadding -
                                            L.y >
                                        0
                                          ? k -
                                            B.height -
                                            L.y -
                                            2 * B.textBgPadding
                                          : L.y - 2 * B.textBgPadding
                                      : I.y + B.height + B.textBgPadding + L.y >
                                        _.height
                                          ? _.height - B.height - L.y
                                          : k + B.textBgPadding
                          }),
                          this._textRenderer.setPoints([new r(C, M.y)]),
                          t.append(this._textRenderer),
                          this.addAnchors(t),
                          t)
                );
            }),
            (t.DateRangePaneView = n);
    },
    860: function(e, t, i) {
        "use strict";
        function n(e, t) {
            r.call(this, e, t),
                (this._label = null),
                (this._invalidated = !0),
                (this._trendLineRendererPoints12 = new a()),
                (this._trendLineRendererPoints43 = new a()),
                (this._disjointAngleRenderer = new s()),
                (this._p1LabelRenderer = new o({})),
                (this._p2LabelRenderer = new o({})),
                (this._p3LabelRenderer = new o({})),
                (this._p4LabelRenderer = new o({}));
        }
        var r = i(12).LineSourcePaneView,
            s = i(493).DisjointAngleRenderer,
            a = i(16).TrendLineRenderer,
            o = i(27).TextRenderer,
            l = i(8).CompositeRenderer,
            h = i(105).PaneRendererClockIcon;
        inherit(n, r),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n;
                r.prototype._updateImpl.call(this),
                    (this._label = null),
                    this._source.points().length < 2 ||
                        (this._source.priceScale() &&
                            ((e = this._source.points()[0]),
                            (t = this._source.points()[1]),
                            (this._price1 = this._source
                                .priceScale()
                                .formatter()
                                .format(e.price)),
                            (this._price2 = this._source
                                .priceScale()
                                .formatter()
                                .format(t.price)),
                            3 === this._source.points().length &&
                                ((i = this._source.points()[2]),
                                (this._price3 = this._source
                                    .priceScale()
                                    .formatter()
                                    .format(i.price)),
                                (n = t.price - e.price),
                                (this._price4 = this._source
                                    .priceScale()
                                    .formatter()
                                    .format(i.price + n)))));
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, r, s, a, o, d, c, p, _, u, f, g, v, w;
                return (
                    this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = new l()),
                    this._points.length < 2
                        ? e
                        : ((t = this._points[0]),
                          (i = this._points[1]),
                          (s = this._source.properties()),
                          (a = this._model),
                          (o = this._source),
                          this._points.length >= 3 &&
                              ((n = this._points[2]),
                              (n.x = i.x),
                              (d = i.y - t.y),
                              (r = t.clone()),
                              (r.y = n.y + d),
                              (r.data = 3),
                              s.fillBackground.value() &&
                                  ((c = a.timeScale().width()),
                                  (p = o.priceScale().height()),
                                  (_ = s.extendLeft.value()),
                                  (u = s.extendRight.value()),
                                  this._disjointAngleRenderer.setData({
                                      width: c,
                                      height: p,
                                      extendleft: _,
                                      extendright: u,
                                      points: [t, i, n, r],
                                      backcolor: s.backgroundColor.value(),
                                      transparency: s.transparency.value(),
                                      hittestOnBackground: TradingView.isMobile.any()
                                  }),
                                  e.append(this._disjointAngleRenderer))),
                          (f = function(e, t) {
                              return {
                                  points: [e, t],
                                  width: a.timeScale().width(),
                                  height: o.priceScale().height(),
                                  color: s.linecolor.value(),
                                  linewidth: s.linewidth.value(),
                                  linestyle: s.linestyle.value(),
                                  extendleft: s.extendLeft.value(),
                                  extendright: s.extendRight.value(),
                                  leftend: s.leftEnd.value(),
                                  rightend: s.rightEnd.value()
                              };
                          }),
                          (g = this),
                          (v = function(t, i, n, r, s, a) {
                              var o;
                              g._source.properties().showPrices.value() &&
                                  ((o = {
                                      points: [n],
                                      text: s,
                                      color: g._source
                                          .properties()
                                          .textcolor.value(),
                                      horzAlign: n.x > r.x ? "left" : "right",
                                      vertAlign: "middle",
                                      font: g._source.properties().font.value(),
                                      offsetX: n.x > r.x ? -5 : 5,
                                      offsetY: -5,
                                      bold: g._source.properties().bold.value(),
                                      italic: g._source
                                          .properties()
                                          .italic.value(),
                                      fontsize: g._source
                                          .properties()
                                          .fontsize.value()
                                  }),
                                  t.setData(o),
                                  e.append(t),
                                  (o = {
                                      points: [r],
                                      text: a,
                                      color: g._source
                                          .properties()
                                          .textcolor.value(),
                                      horzAlign: n.x < r.x ? "left" : "right",
                                      vertAlign: "middle",
                                      font: g._source.properties().font.value(),
                                      offsetX: n.x > r.x ? -5 : 5,
                                      offsetY: -5,
                                      bold: g._source.properties().bold.value(),
                                      italic: g._source
                                          .properties()
                                          .italic.value(),
                                      fontsize: g._source
                                          .properties()
                                          .fontsize.value()
                                  }),
                                  i.setData(o),
                                  e.append(i));
                          }),
                          this._trendLineRendererPoints12.setData(f(t, i)),
                          e.append(this._trendLineRendererPoints12),
                          v(
                              this._p1LabelRenderer,
                              this._p2LabelRenderer,
                              t,
                              i,
                              this._price1,
                              this._price2
                          ),
                          2 === this._points.length
                              ? (this.addAnchors(e), e)
                              : (this._trendLineRendererPoints43.setData(
                                    f(r, n)
                                ),
                                e.append(this._trendLineRendererPoints43),
                                v(
                                    this._p3LabelRenderer,
                                    this._p4LabelRenderer,
                                    n,
                                    r,
                                    this._price3,
                                    this._price4
                                ),
                                this.isAnchorsRequired() &&
                                    ((w = [t, i, n, r]),
                                    this._model.lineBeingCreated() ===
                                        this._source && w.pop(),
                                    e.append(
                                        this.createLineAnchor({points: w})
                                    )),
                                !TradingView.printing &&
                                    this._source.hasAlert.value() &&
                                    !this._model.readOnly() &&
                                    t &&
                                    i &&
                                    this._source.getAlertIsActive(function(n) {
                                        e.append(
                                            new h({
                                                point1: t,
                                                point2: i,
                                                color: n
                                                    ? s.linecolor.value()
                                                    : defaults(
                                                          "chartproperties.alertsProperties.drawingIcon.color"
                                                      )
                                            })
                                        );
                                    }),
                                e))
                );
            }),
            (t.DisjointAnglePaneView = n);
    },
    862: function(e, t, i) {
        "use strict";
        function n() {
            this._data = null;
        }
        function r(e, t) {
            p.call(this, e, t),
                (this._invalidated = !0),
                (this._renderer = new n());
        }
        var s = i(1).Point,
            a = i(33).distanceToLine,
            o = i(193),
            l = o.rotationMatrix,
            h = o.scalingMatrix,
            d = o.translationMatrix,
            c = o.transformPoint,
            p = i(12).LineSourcePaneView,
            _ = i(4),
            u = i(8).CompositeRenderer,
            f = i(19);
        (n.prototype.setData = function(e) {
            (this._data = e),
                (this._data.angleFrom = 0),
                (this._data.angleTo = 2 * Math.PI),
                (this._data.clockwise = !1);
        }),
            (n.prototype.draw = function(e) {
                var t, i, n, r, o, p, _, u, g, v, w, y, m;
                if (!(null === this._data || this._data.points.length < 2)) {
                    if (
                        ((t = this._data.points[0]),
                        (i = this._data.points[1]),
                        this._data.points.length < 3)
                    )
                        return (
                            (e.strokeStyle = this._data.color),
                            (e.lineWidth = this._data.linewidth),
                            e.beginPath(),
                            e.moveTo(t.x, t.y),
                            e.lineTo(i.x, i.y),
                            void e.stroke()
                        );
                    if (
                        ((n = this._data.points[2]),
                        (r = a(t, i, n).distance) < 1)
                    )
                        return (
                            (e.strokeStyle = this._data.color),
                            (e.lineWidth = this._data.linewidth),
                            e.beginPath(),
                            e.moveTo(t.x, t.y),
                            e.lineTo(i.x, i.y),
                            void e.stroke()
                        );
                    (o = i.subtract(t)),
                        (p = t.add(i).scaled(0.5)),
                        (_ = new s(-o.y, o.x)),
                        (_ = _.normalized()),
                        (n = p.add(_.scaled(r))),
                        (e.strokeStyle = this._data.color),
                        (e.lineWidth = this._data.linewidth),
                        (u = o.length()),
                        (g = o.x / u),
                        (v = o.y / u),
                        (w = Math.acos(g)),
                        v < 0 && (w = -w),
                        (y = this._data.points[2]),
                        (m = d(-p.x, -p.y)),
                        (y = c(m, y)),
                        (m = l(-w)),
                        (y = c(m, y)),
                        (m = h(1, u / (2 * r))),
                        (y = c(m, y)),
                        y.y < 0
                            ? (this._data.clockwise = !0)
                            : (this._data.clockwise = !1),
                        e.save(),
                        e.beginPath(),
                        e.translate(p.x, p.y),
                        e.rotate(w),
                        e.scale(1, 2 * r / u),
                        e.arc(
                            0,
                            0,
                            0.5 * u,
                            this._data.angleFrom,
                            this._data.angleTo,
                            this._data.clockwise
                        ),
                        e.restore(),
                        e.stroke(),
                        this._data.fillBackground &&
                            ((e.fillStyle = f.generateColor(
                                this._data.backcolor,
                                this._data.transparency
                            )),
                            e.fill());
                }
            }),
            (n.prototype._additionalPointTest = function(e, t) {
                return !0;
            }),
            (n.prototype.hitTest = function(e) {
                var t, i, n, r, o, p, u, f, g, v, w, y, m, x, b;
                return null === this._data || this._data.points.length < 3
                    ? null
                    : ((t = this._data.points[0]),
                      (i = this._data.points[1]),
                      (n = this._data.points[2]),
                      (r = a(t, i, n).distance),
                      (o = i.subtract(t)),
                      (p = t.add(i).scaled(0.5)),
                      (u = new s(-o.y, o.x)),
                      (u = u.normalized()),
                      (n = p.add(u.scaled(r))),
                      (f = o.length()),
                      (g = o.x / f),
                      (v = o.y / f),
                      (w = Math.acos(g)),
                      v < 0 && (w = -w),
                      (y = d(-p.x, -p.y)),
                      (e = c(y, e)),
                      (m = c(y, this._data.points[2])),
                      (y = l(-w)),
                      (e = c(y, e)),
                      (m = c(y, m)),
                      (y = h(1, f / (2 * r))),
                      (e = c(y, e)),
                      (m = c(y, m)),
                      (x = e.length()),
                      (b = 3),
                      this._additionalPointTest(e, m)
                          ? Math.abs(x - 0.5 * f) <= b
                              ? new _(_.MOVEPOINT)
                              : this._data.fillBackground &&
                                !this._data.noHitTestOnBackground &&
                                x <= 0.5 * f
                                  ? new _(_.MOVEPOINT_BACKGROUND)
                                  : null
                          : null);
            }),
            inherit(r, p),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype.updateImpl = function() {
                p.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (r.prototype.renderer = function() {
                var e, t, i, n, r, o, l, h, d, c, p, _, f, g;
                return (
                    this._invalidated && this.updateImpl(),
                    this._points.length < 2
                        ? t
                        : ((e = {}),
                          (e.points = this._points),
                          (e.color = this._source.properties().color.value()),
                          (e.linewidth = this._source
                              .properties()
                              .linewidth.value()),
                          (e.backcolor = this._source
                              .properties()
                              .backgroundColor.value()),
                          (e.fillBackground = this._source
                              .properties()
                              .fillBackground.value()),
                          (e.transparency = this._source
                              .properties()
                              .transparency.value()),
                          this._renderer.setData(e),
                          this.isAnchorsRequired()
                              ? ((t = new u()),
                                t.append(this._renderer),
                                (i = e.points[0]),
                                (n = e.points[1]),
                                2 === this._points.length
                                    ? (this.addAnchors(t), t)
                                    : ((r = e.points[2]),
                                      (o = a(i, n, r).distance),
                                      (l = n.subtract(i)),
                                      (h = i.add(n).scaled(0.5)),
                                      (d = new s(-l.y, l.x)),
                                      (d = d.normalized()),
                                      (r = h.add(d.scaled(o))),
                                      (c = h.add(d.scaled(-o))),
                                      (p = new s(i.x, i.y)),
                                      (p.data = 0),
                                      (_ = new s(n.x, n.y)),
                                      (_.data = 1),
                                      (f = new s(r.x, r.y)),
                                      (f.data = 2),
                                      (g = new s(c.x, c.y)),
                                      (g.data = 3),
                                      t.append(
                                          this.createLineAnchor({
                                              points: [p, _, f, g]
                                          })
                                      ),
                                      t))
                              : this._renderer)
                );
            }),
            (t.EllipsePaneView = r);
    },
    864: function(e, t, i) {
        "use strict";
        function n(e, t) {
            (this._data = e), (this._adapter = t);
        }
        function r(e, t) {
            a.call(this, e, t), (this._invalidated = !0);
        }
        var s = i(1).Point,
            a = i(12).LineSourcePaneView,
            o = i(132),
            l = i(4);
        (n.prototype._textWidth = function(e) {
            var t, i;
            return 0 === this._adapter.getText().length
                ? 0
                : (e.save(),
                  (e.font = this._adapter.getFont()),
                  (t = 5),
                  (i = e.measureText(this._adapter.getText()).width),
                  e.restore(),
                  t + i);
        }),
            (n.prototype._drawArrow = function(e, t, i) {
                var n, r;
                e.save(),
                    (e.strokeStyle = this._adapter.getArrowColor()),
                    (e.fillStyle = this._adapter.getArrowColor()),
                    (n = this._adapter.getArrowHeight()),
                    (r = this._adapter.getDirection()),
                    e.translate(t, i),
                    "buy" !== r && e.rotate(Math.PI),
                    CanvasEx.drawArrow(e, 0, 0, 0, n),
                    e.restore();
            }),
            (n.prototype._drawText = function(e, t, i) {
                var n,
                    r,
                    s = this._adapter.getText();
                s &&
                    (e.save(),
                    (e.textAlign = "center"),
                    (e.textBaseline = "middle"),
                    (e.font = this._adapter.getFont()),
                    (e.fillStyle = this._adapter.getTextColor()),
                    (n = t + this._textWidth(e) / 2),
                    (r = i + o.fontHeight(this._adapter.getFont()) / 2),
                    e.fillText(s, n, r - 1),
                    e.restore());
            }),
            (n.prototype.draw = function(e) {
                var t,
                    i,
                    n,
                    r,
                    s,
                    a,
                    l = Math.round(this._data.points[0].x + 0.5),
                    h = Math.round(this._data.points[0].y);
                this._drawArrow(e, l, h),
                    0 !== (t = this._textWidth(e)) &&
                        ((i = this._adapter.getArrowHeight()),
                        (n = this._adapter.getArrowSpacing()),
                        (r = o.fontHeight(this._adapter.getFont())),
                        (s = this._adapter.getDirection()),
                        (a = "buy" === s ? h + i + n : h - i - n - r),
                        this._drawText(e, Math.round(l - t / 2), a));
            }),
            (n.prototype.hitTest = function(e) {
                var t,
                    i,
                    n,
                    r = Math.round(this._data.points[0].x),
                    s = Math.round(this._data.points[0].y),
                    a = this._adapter.getArrowHeight();
                return (
                    "buy" === this._adapter.getDirection()
                        ? ((t = s), (i = s + a))
                        : ((t = s - a), (i = s)),
                    e.x >= r - 2 && e.x <= r + 2 && e.y >= t && e.y <= i
                        ? ((n = this._adapter.getTooltip()),
                          new l(l.CUSTOM, {
                              mouseDownHandler: function() {
                                  TradingView.TradingWidget &&
                                      TradingView.TradingWidget.journalDialog();
                              },
                              tooltip:
                                  "" !== n
                                      ? {
                                            text: n,
                                            rect: {x: r, y: t, w: 2, h: i - t}
                                        }
                                      : null
                          }))
                        : null
                );
            }),
            inherit(r, a),
            (r.prototype._renderer = null),
            (r.prototype._rendererCached = !1),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype.updateImpl = function() {
                a.prototype._updateImpl.call(this),
                    (this._renderer = null),
                    (this._rendererCached = !1),
                    (this._invalidated = !1);
            }),
            (r.prototype.renderer = function(e) {
                var t, i, r, a, o, l, h, d;
                return (
                    this._invalidated && this.updateImpl(),
                    this._rendererCached
                        ? this._renderer
                        : ((this._rendererCached = !0),
                          (t = this._source),
                          (i = t.points()),
                          0 === i.length
                              ? null
                              : ((r = t._adapter),
                                (a = t._model.timeScale()),
                                (o = this._source._model
                                    .paneForSource(this._source)
                                    .executionsPositionController()),
                                (l = o.getXYCoordinate(r, a, i[0].index)),
                                !isFinite(l.y) || l.y < 0 || l.y > e || l.x < 0
                                    ? ((this._renderer = null), null)
                                    : ((h = [new s(l.x, l.y)]),
                                      (d = {points: h}),
                                      (this._renderer = new n(d, r)),
                                      this._renderer)))
                );
            }),
            (t.ExecutionPaneView = r);
    },
    866: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t);
        }
        function r(e, t) {
            a.call(this, e, t),
                (this._rendererCache = {}),
                (this._invalidated = !0),
                (this._baseLineRenderer = new o()),
                (this._lastLevelTrendRenderer = new o());
        }
        var s = i(314).ParallelChannelRenderer,
            a = i(12).LineSourcePaneView,
            o = i(16).TrendLineRenderer,
            l = i(117),
            h = i(8).CompositeRenderer,
            d = i(19),
            c = i(18).LineEnd;
        inherit(n, s),
            (n.prototype._getColor = function() {
                return d.generateColor(
                    this._data.backcolor,
                    this._data.transparency,
                    !0
                );
            }),
            inherit(r, a),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype._updateImpl = function() {
                a.prototype._updateImpl.call(this),
                    (this._cacheState = this._model._fibChannelLabelsCache.updateSource(
                        this._source
                    )),
                    this._floatPoints.length < 3 ||
                        this._source.points().length < 3 ||
                        (this.norm = this._floatPoints[2].subtract(
                            this._floatPoints[0]
                        ));
            }),
            (r.prototype.renderer = function() {
                function e(e, n, r) {
                    var s, a, h, c, _;
                    switch (i.horzLabelsAlign.value()) {
                        case "left":
                            s = e;
                            break;
                        case "center":
                            (s = e.add(n).scaled(0.5)),
                                (s.x += r.width / 2),
                                (s.x = Math.round(s.x));
                            break;
                        case "right":
                            (s = n.clone()),
                                (s.x += r.width),
                                (s.x = Math.round(s.x));
                    }
                    (a = {
                        left: r.left,
                        top: o.topByRow(p._cacheState.row),
                        width: r.width,
                        height: o.rowHeight(p._cacheState.row)
                    }),
                        (h = {
                            left: Math.round(s.x - a.width),
                            top: Math.round(s.y),
                            width: r.width,
                            height: a.height
                        }),
                        (c = i.vertLabelsAlign.value()),
                        "middle" === c && (h.top -= h.height / 2),
                        "bottom" === c && (h.top -= h.height),
                        (_ = new l(d, a, h)),
                        t.append(_);
                }
                var t,
                    i,
                    r,
                    s,
                    a,
                    o,
                    d,
                    p,
                    _,
                    u,
                    f,
                    g,
                    v,
                    w,
                    y,
                    m,
                    x,
                    b,
                    S,
                    P,
                    R,
                    T,
                    L,
                    C;
                if (
                    (this._invalidated &&
                        (this._updateImpl(), (this._invalidated = !1)),
                    (t = new h()),
                    this._floatPoints.length < 2)
                )
                    return this.addAnchors(t), t;
                if (
                    ((i = this._source.properties()),
                    (r = this._floatPoints[0]),
                    (s = this._floatPoints[1]),
                    this._floatPoints.length < 3)
                )
                    return (
                        (a = {
                            points: [r, s],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: i.level1.color.value(),
                            linewidth: i.levelsStyle.linewidth.value(),
                            linestyle: i.levelsStyle.linestyle.value(),
                            extendleft: i.extendLeft.value(),
                            extendright: i.extendRight.value(),
                            leftend: c.Normal,
                            rightend: c.Normal
                        }),
                        this._baseLineRenderer.setData(a),
                        t.append(this._baseLineRenderer),
                        this.addAnchors(t),
                        t
                    );
                for (
                    o = this._model._fibChannelLabelsCache,
                        d = o.canvas().get(0),
                        p = this,
                        _ = this._source.levelsCount(),
                        u = 1;
                    u < _;
                    u++
                )
                    if (((f = i["level" + u]), f.visible.value())) {
                        for (g = null, v = u + 1; v <= _; v++)
                            if (((w = i["level" + v]), w.visible.value())) {
                                g = w;
                                break;
                            }
                        if (!g) break;
                        (y = this.norm.scaled(f.coeff.value())),
                            (m = r.add(y)),
                            (x = s.add(y)),
                            (b = this.norm.scaled(g.coeff.value())),
                            (S = r.add(b)),
                            (P = s.add(b)),
                            (R = {}),
                            (R.points = [m, x, S, P]),
                            (R.color = f.color.value()),
                            (R.width = this._model.timeScale().width()),
                            (R.height = this._source.priceScale().height()),
                            (R.linewidth = i.levelsStyle.linewidth.value()),
                            (R.linestyle = i.levelsStyle.linestyle.value()),
                            (R.extendleft = i.extendLeft.value()),
                            (R.extendright = i.extendRight.value()),
                            (R.backcolor = f.color.value()),
                            (R.transparency = i.transparency.value()),
                            (R.skipTopLine = !0),
                            (R.fillBackground = i.fillBackground.value()),
                            (R.hittestOnBackground = !0),
                            (T = new n()),
                            T.setData(R),
                            t.append(T),
                            (i.showCoeffs.value() || i.showPrices.value()) &&
                                ((L = this._cacheState.preparedCells.cells[
                                    u - 1
                                ]),
                                e(m, x, L));
                    }
                for (C = null, u = _; u >= 1; u--)
                    if (((f = i["level" + u]), f.visible.value())) {
                        C = u;
                        break;
                    }
                return (
                    null != C &&
                        ((f = i["level" + C]),
                        f.visible.value() &&
                            ((y = this.norm.scaled(f.coeff.value())),
                            (m = r.add(y)),
                            (x = s.add(y)),
                            (a = {
                                points: [m, x],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: f.color.value(),
                                linewidth: i.levelsStyle.linewidth.value(),
                                linestyle: i.levelsStyle.linestyle.value(),
                                extendleft: i.extendLeft.value(),
                                extendright: i.extendRight.value(),
                                leftend: c.Normal,
                                rightend: c.Normal
                            }),
                            this._lastLevelTrendRenderer.setData(a),
                            t.append(this._lastLevelTrendRenderer),
                            (i.showCoeffs.value() || i.showPrices.value()) &&
                                e(
                                    m,
                                    x,
                                    this._cacheState.preparedCells.cells[C - 1]
                                ))),
                    this.addAnchors(t),
                    t
                );
            }),
            (t.FibChannelPaneView = r);
    },
    868: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._rendererCache = {}),
                (this._invalidated = !0),
                (this._numericFormatter = new d()),
                (this._trendLineRenderer = new a());
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(16).TrendLineRenderer,
            o = i(117),
            l = i(4),
            h = i(8).CompositeRenderer,
            d = i(38).NumericFormatter,
            c = i(494).EllipseRendererSimple,
            p = i(18).LineEnd;
        inherit(n, s),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype._updateImpl = function() {
                var e, t, i, n, a, o, l, h, d, c, p, _, u;
                if (
                    (s.prototype._updateImpl.call(this),
                    (this._cacheState = this._model._fibCirclesLabelsCache.updateSource(
                        this._source
                    )),
                    !(this._source.points().length < 2) &&
                        this._source.priceScale() &&
                        !this._source.priceScale().isEmpty() &&
                        !this._model.timeScale().isEmpty())
                )
                    for (
                        e = this._points[0],
                            t = this._points[1],
                            this._center = e.add(t).scaled(0.5),
                            i = Math.abs(t.x - e.x),
                            n = Math.abs(t.y - e.y),
                            this._levels = [],
                            a = this._source.properties(),
                            o = this._source.levelsCount(),
                            l = 1;
                        l <= o;
                        l++
                    )
                        (h = "level" + l),
                            (d = a[h]),
                            d.visible.value() &&
                                ((c = d.coeff.value()),
                                (p = d.color.value()),
                                (_ = []),
                                _.push(
                                    new r(
                                        this._center.x - 0.5 * i * c,
                                        this._center.y - 0.5 * n * c
                                    )
                                ),
                                _.push(
                                    new r(
                                        this._center.x + 0.5 * i * c,
                                        this._center.y + 0.5 * n * c
                                    )
                                ),
                                (u = new r(
                                    this._center.x,
                                    this._center.y + 0.5 * n * c
                                )),
                                this._levels.push({
                                    color: p,
                                    points: _,
                                    labelPoint: u,
                                    linewidth: d.linewidth.value(),
                                    linestyle: d.linestyle.value(),
                                    index: l
                                }));
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, r, s, a, d, _, u, f, g, v, w, y;
                if (
                    (this._invalidated &&
                        (this._updateImpl(), (this._invalidated = !1)),
                    (e = new h()),
                    this._points.length < 2)
                )
                    return e;
                for (
                    t = this._source.properties(),
                        i = t.fillBackground.value(),
                        n = t.transparency.value(),
                        r = this._model._fibCirclesLabelsCache,
                        s = r.canvas().get(0),
                        a = 0;
                    a < this._levels.length;
                    a++
                )
                    if (
                        ((d = this._levels[a]),
                        (_ = {}),
                        (_.points = d.points),
                        (_.color = d.color),
                        (_.linewidth = d.linewidth),
                        (_.backcolor = d.color),
                        a > 0 && (_.wholePoints = this._levels[a - 1].points),
                        (_.fillBackground = i),
                        (_.transparency = n),
                        (u = new l(l.MOVEPOINT, null, d.index)),
                        e.append(new c(_, u)),
                        t.showCoeffs.value())
                    ) {
                        if (
                            !(f = this._cacheState.preparedCells.cells[
                                this._levels[a].index - 1
                            ])
                        )
                            continue;
                        (g = {
                            left: f.left,
                            top: r.topByRow(this._cacheState.row),
                            width: f.width,
                            height: r.rowHeight(this._cacheState.row)
                        }),
                            (v = {
                                left: Math.round(d.labelPoint.x - g.width),
                                top: Math.round(d.labelPoint.y - g.height / 2),
                                width: f.width,
                                height: g.height
                            }),
                            (w = new o(s, g, v)),
                            e.append(w);
                    }
                return (
                    t.trendline.visible.value() &&
                        ((y = {
                            points: [this._points[0], this._points[1]],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: t.trendline.color.value(),
                            linewidth: t.trendline.linewidth.value(),
                            linestyle: t.trendline.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: p.Normal,
                            rightend: p.Normal
                        }),
                        this._trendLineRenderer.setData(y),
                        e.append(this._trendLineRenderer)),
                    this.addAnchors(e),
                    e
                );
            }),
            (t.FibCirclesPaneView = n);
    },
    870: function(e, t, i) {
        "use strict";
        function n(e, t) {
            a.call(this, e, t),
                (this._rendererCache = {}),
                (this._invalidated = !0),
                (this._trendLineRenderer = new o());
        }
        var r = i(1).Point,
            s = i(70).RectangleRenderer,
            a = i(12).LineSourcePaneView,
            o = i(16).TrendLineRenderer,
            l = i(117),
            h = i(4),
            d = i(8).CompositeRenderer,
            c = i(18).LineEnd;
        inherit(n, a),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype._updateImpl = function() {
                var e, t, i, n, r, s, o, l, h, d, c, p, _, u, f;
                if (
                    (a.prototype._updateImpl.call(this),
                    (this._cacheState = this._model._fibRetracementLabelsCache.updateSource(
                        this._source
                    )),
                    !(this._source.points().length < 2) &&
                        this._source.priceScale() &&
                        !this._source.priceScale().isEmpty() &&
                        !this._model.timeScale().isEmpty() &&
                        ((e = this._source.points()[0]),
                        (t = this._source.points()[1]),
                        (i = !1),
                        (n = this._source.properties()),
                        n.reverse &&
                            n.reverse.value() &&
                            (i = n.reverse.value()),
                        (this._levels = []),
                        (r = i ? t.price - e.price : e.price - t.price),
                        (s = i ? e.price : t.price),
                        !this._source.priceScale().isPercent() ||
                            null !==
                                (o = this._source.ownerSource().firstValue())))
                )
                    for (l = this._source.levelsCount(), h = 1; h <= l; h++)
                        (d = "level" + h),
                            (c = n[d]),
                            c.visible.value() &&
                                ((p = c.coeff.value()),
                                (_ = c.color.value()),
                                (u = s + p * r),
                                this._source.priceScale().isPercent() &&
                                    (u = this._source
                                        .priceScale()
                                        .priceRange()
                                        .convertToPercent(u, o)),
                                (f = this._source
                                    .priceScale()
                                    .priceToCoordinate(u)),
                                this._levels.push({
                                    color: _,
                                    y: f,
                                    linewidth: n.levelsStyle.linewidth.value(),
                                    linestyle: n.levelsStyle.linestyle.value(),
                                    index: h
                                }));
            }),
            (n.prototype.renderer = function() {
                var e,
                    t,
                    i,
                    n,
                    a,
                    p,
                    _,
                    u,
                    f,
                    g,
                    v,
                    w,
                    y,
                    m,
                    x,
                    b,
                    S,
                    P,
                    R,
                    T,
                    L,
                    C;
                if (
                    (this._invalidated &&
                        (this._updateImpl(), (this._invalidated = !1)),
                    (e = new d()),
                    this._points.length < 2)
                )
                    return e;
                for (
                    t = this._points[0],
                        i = this._points[1],
                        n = Math.min(t.x, i.x),
                        a = Math.max(t.x, i.x),
                        p = this._source.properties(),
                        _ = p.fillBackground.value(),
                        u = p.transparency.value(),
                        f = p.extendLines.value()
                            ? this._model.timeScale().width()
                            : a,
                        g = this._model._fibRetracementLabelsCache,
                        v = g.canvas().get(0),
                        w = 0;
                    w < this._levels.length;
                    w++
                )
                    if (
                        (w > 0 &&
                            _ &&
                            ((y = this._levels[w - 1]),
                            (t = new r(n, this._levels[w].y)),
                            (i = new r(f, y.y)),
                            (m = {}),
                            (m.points = [t, i]),
                            (m.color = this._levels[w].color),
                            (m.linewidth = 0),
                            (m.backcolor = this._levels[w].color),
                            (m.fillBackground = !0),
                            (m.transparency = u),
                            (x = new s(void 0, void 0, !0)),
                            x.setData(m),
                            e.append(x)),
                        (t = new r(n, this._levels[w].y)),
                        (i = new r(a, this._levels[w].y)),
                        (b = {
                            points: [t, i],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: this._levels[w].color,
                            linewidth: this._levels[w].linewidth,
                            linestyle: this._levels[w].linestyle,
                            extendleft: !1,
                            extendright: p.extendLines.value(),
                            leftend: c.Normal,
                            rightend: c.Normal
                        }),
                        (x = new o()),
                        x.setData(b),
                        x.setHitTest(
                            new h(h.MOVEPOINT, null, this._levels[w].index)
                        ),
                        e.append(x),
                        p.showCoeffs.value() || p.showPrices.value())
                    ) {
                        if (!this._cacheState.preparedCells) continue;
                        if (
                            !(S = this._cacheState.preparedCells.cells[
                                this._levels[w].index - 1
                            ])
                        )
                            continue;
                        switch (p.horzLabelsAlign.value()) {
                            case "left":
                                P = t;
                                break;
                            case "center":
                                (P = t.add(i).scaled(0.5)),
                                    (P.x += S.width / 2),
                                    (P.x = Math.round(P.x));
                                break;
                            case "right":
                                p.extendLines.value()
                                    ? (P = new r(f - 4, this._levels[w].y))
                                    : ((P = new r(f + 4, this._levels[w].y)),
                                      (P.x += S.width),
                                      (P.x = Math.round(P.x)));
                        }
                        (R = {
                            left: S.left,
                            top: g.topByRow(this._cacheState.row),
                            width: S.width,
                            height: g.rowHeight(this._cacheState.row)
                        }),
                            (T = {
                                left: P.x - R.width,
                                top: P.y,
                                width: S.width,
                                height: R.height
                            }),
                            (L = p.vertLabelsAlign.value()),
                            "middle" === L && (T.top -= T.height / 2),
                            "bottom" === L && (T.top -= T.height),
                            (C = new l(v, R, T)),
                            e.append(C);
                    }
                return (
                    p.trendline.visible.value() &&
                        ((b = {
                            points: [this._points[0], this._points[1]],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: p.trendline.color.value(),
                            linewidth: p.trendline.linewidth.value(),
                            linestyle: p.trendline.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: c.Normal,
                            rightend: c.Normal
                        }),
                        this._trendLineRenderer.setData(b),
                        e.append(this._trendLineRenderer)),
                    this.addAnchors(e),
                    e
                );
            }),
            (t.FibRetracementPaneView = n);
    },
    872: function(e, t, i) {
        "use strict";
        function n(e, t, i) {
            (this._data = e),
                (this._hittest = t || new d(d.MOVEPOINT)),
                (this._backHittest = i || new d(d.MOVEPOINT_BACKGROUND));
        }
        function r(e, t) {
            o.call(this, e, t),
                (this._rendererCache = {}),
                (this._invalidated = !0),
                (this._trendLineRenderer = new l());
        }
        var s = i(1).Point,
            a = i(56),
            o = i(12).LineSourcePaneView,
            l = i(16).TrendLineRenderer,
            h = i(117),
            d = i(4),
            c = i(8).CompositeRenderer,
            p = i(19),
            _ = i(18).LineEnd;
        (n.prototype.draw = function(e) {
            (e.lineCap = "butt"),
                (e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                e.translate(this._data.center.x, this._data.center.y),
                e.beginPath(),
                this._data.fullCircles
                    ? e.arc(0, 0, this._data.radius, 2 * Math.PI, 0, !1)
                    : this._data.dir > 0
                        ? e.arc(0, 0, this._data.radius, 0, Math.PI, !1)
                        : e.arc(0, 0, this._data.radius, Math.PI, 0, !1),
                e.stroke(),
                this._data.fillBackground &&
                    (this._data.radius2 &&
                        (this._data.fullCircles
                            ? e.arc(
                                  0,
                                  0,
                                  this._data.radius2,
                                  2 * Math.PI,
                                  0,
                                  !0
                              )
                            : this._data.dir > 0
                                ? e.arc(
                                      0,
                                      0,
                                      this._data.radius2,
                                      Math.PI,
                                      0,
                                      !0
                                  )
                                : e.arc(
                                      0,
                                      0,
                                      this._data.radius2,
                                      0,
                                      Math.PI,
                                      !0
                                  )),
                    (e.fillStyle = p.generateColor(
                        this._data.color,
                        this._data.transparency,
                        !0
                    )),
                    e.fill());
        }),
            (n.prototype.hitTest = function(e) {
                var t, i, n;
                return a.sign(e.y - this._data.center.y) === this._data.dir ||
                    this._data.fullCircles
                    ? ((t = e.subtract(this._data.center)),
                      (i = t.length()),
                      (n = 3),
                      Math.abs(i - this._data.radius) < n
                          ? this._hittest
                          : this._data.hittestOnBackground &&
                            Math.abs(i) <= this._data.radius + n
                              ? this._backHittest
                              : null)
                    : null;
            }),
            inherit(r, o),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype._updateImpl = function() {
                var e, t, i, n, r, l, h, d, c, p, _, u, f;
                if (
                    (o.prototype._updateImpl.call(this),
                    (this._cacheState = this._model._fibSpeedResistanceArcsLabelsCache.updateSource(
                        this._source
                    )),
                    !(this._floatPoints.length < 2) &&
                        this._source.priceScale() &&
                        !this._source.priceScale().isEmpty() &&
                        !this._model.timeScale().isEmpty())
                )
                    for (
                        e = this._floatPoints[0],
                            t = this._floatPoints[1],
                            i = e.subtract(t).length(),
                            this._levels = [],
                            n = this._source.properties(),
                            r = this._source.levelsCount(),
                            l = 1;
                        l <= r;
                        l++
                    )
                        (h = "level" + l),
                            (d = n[h]),
                            d.visible.value() &&
                                ((c = d.coeff.value()),
                                (p = d.color.value()),
                                (_ = t.subtract(e).length() * c),
                                (u = a.sign(t.y - e.y)),
                                (f = new s(e.x, e.y + u * i * c)),
                                this._levels.push({
                                    color: p,
                                    radius: _,
                                    dir: u,
                                    labelPoint: f,
                                    linewidth: d.linewidth.value(),
                                    linestyle: d.linestyle.value(),
                                    index: l
                                }));
            }),
            (r.prototype.renderer = function() {
                var e, t, i, r, s, a, o, l, p, u, f, g, v, w, y, m;
                if (
                    (this._invalidated &&
                        (this._updateImpl(), (this._invalidated = !1)),
                    (e = new c()),
                    this._floatPoints.length < 2)
                )
                    return e;
                for (
                    t = this._floatPoints[0],
                        i = this._source.properties(),
                        r = i.fillBackground.value(),
                        s = i.transparency.value(),
                        a = this._model._fibSpeedResistanceArcsLabelsCache,
                        o = a.canvas().get(0),
                        l = 0;
                    l < this._levels.length;
                    l++
                )
                    if (
                        ((p = this._levels[l]),
                        (u = {}),
                        (u.center = t),
                        (u.color = p.color),
                        (u.linewidth = p.linewidth),
                        (u.radius = p.radius),
                        (u.dir = p.dir),
                        (u.transparency = s),
                        (u.fillBackground = r),
                        (u.hittestOnBackground = !0),
                        (u.fullCircles = i.fullCircles.value()),
                        l > 0 && (u.radius2 = this._levels[l - 1].radius),
                        (f = new d(d.MOVEPOINT, null, p.index)),
                        e.append(new n(u, f)),
                        i.showCoeffs.value())
                    ) {
                        if (
                            !(g = this._cacheState.preparedCells.cells[
                                this._levels[l].index - 1
                            ])
                        )
                            continue;
                        (v = {
                            left: g.left,
                            top: a.topByRow(this._cacheState.row),
                            width: g.width,
                            height: a.rowHeight(this._cacheState.row)
                        }),
                            (w = {
                                left: Math.round(p.labelPoint.x - v.width),
                                top: Math.round(p.labelPoint.y - v.height / 2),
                                width: g.width,
                                height: v.height
                            }),
                            (y = new h(o, v, w)),
                            e.append(y);
                    }
                return (
                    i.trendline.visible.value() &&
                        ((m = {
                            points: [
                                this._floatPoints[0],
                                this._floatPoints[1]
                            ],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: i.trendline.color.value(),
                            linewidth: i.trendline.linewidth.value(),
                            linestyle: i.trendline.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: _.Normal,
                            rightend: _.Normal
                        }),
                        this._trendLineRenderer.setData(m),
                        e.append(this._trendLineRenderer)),
                    this.addAnchors(e),
                    e
                );
            }),
            (t.FibSpeedResistanceArcsPaneView = r);
    },
    874: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._numericFormatter = new c()),
                (this._invalidated = !0);
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(229).ChannelRenderer,
            o = i(27).TextRenderer,
            l = i(16).TrendLineRenderer,
            h = i(4),
            d = i(8).CompositeRenderer,
            c = i(38).NumericFormatter,
            p = i(18).LineEnd;
        inherit(n, s),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n, r, a, o, l, h, d, c, p, _, u;
                if (
                    (s.prototype._updateImpl.call(this),
                    !(this._source.points().length < 2) &&
                        this._source.priceScale() &&
                        !this._source.priceScale().isEmpty() &&
                        !this._model.timeScale().isEmpty())
                ) {
                    for (
                        e = this._source.points()[0],
                            t = this._source.points()[1],
                            this._hlevels = [],
                            i = t.price - e.price,
                            this._source.priceScale().isPercent() &&
                                (n = this._source.ownerSource().firstValue()),
                            r = 1;
                        r <= 7;
                        r++
                    )
                        (a = "hlevel" + r),
                            (o = this._source.properties()[a]),
                            o.visible.value() &&
                                ((l = o.coeff.value()),
                                (h = o.color.value()),
                                (d = e.price + l * i),
                                this._source.priceScale().isPercent() &&
                                    (d = this._source
                                        .priceScale()
                                        .priceRange()
                                        .convertToPercent(d, n)),
                                (c = this._source
                                    .priceScale()
                                    .priceToCoordinate(d, !0)),
                                this._hlevels.push({
                                    coeff: l,
                                    color: h,
                                    y: c,
                                    index: r
                                }));
                    for (
                        this._vlevels = [], p = t.index - e.index, r = 1;
                        r <= 7;
                        r++
                    )
                        (a = "vlevel" + r),
                            (o = this._source.properties()[a]),
                            o.visible.value() &&
                                ((l = o.coeff.value()),
                                (h = o.color.value()),
                                (_ = Math.round(e.index + l * p)),
                                (u = this._model
                                    .timeScale()
                                    .indexToCoordinate(_, !0)),
                                this._vlevels.push({
                                    coeff: l,
                                    color: h,
                                    x: u,
                                    index: r
                                }));
                }
            }),
            (n.prototype.renderer = function() {
                var e,
                    t,
                    i,
                    n,
                    s,
                    c,
                    _,
                    u,
                    f,
                    g,
                    v,
                    w,
                    y,
                    m,
                    x,
                    b,
                    S,
                    P,
                    R,
                    T,
                    L,
                    C,
                    k,
                    I;
                if (
                    (this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = new d()),
                    this._floatPoints.length < 2)
                )
                    return e;
                for (
                    t = this._floatPoints[0],
                        i = this._floatPoints[1],
                        n = Math.min(t.x, i.x),
                        s = Math.min(t.y, i.y),
                        c = Math.max(t.x, i.x),
                        _ = Math.max(t.y, i.y),
                        u = this._source.properties(),
                        f = u.grid.color.value(),
                        g = u.grid.linewidth.value(),
                        v = u.grid.linestyle.value(),
                        w = 0;
                    w < this._hlevels.length;
                    w++
                )
                    (t = new r(n, this._hlevels[w].y)),
                        (i = new r(c, this._hlevels[w].y)),
                        u.grid.visible.value() &&
                            ((y = {
                                points: [t, i],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: f,
                                linewidth: g,
                                linestyle: v,
                                extendleft: !1,
                                extendright: !1,
                                leftend: p.Normal,
                                rightend: p.Normal
                            }),
                            (m = new l()),
                            m.setData(y),
                            e.append(m)),
                        u.showLeftLabels.value() &&
                            ((x = {
                                points: [t],
                                text: this._numericFormatter.format(
                                    this._hlevels[w].coeff
                                ),
                                color: this._hlevels[w].color,
                                vertAlign: "middle",
                                horzAlign: "right",
                                font: u.font.value(),
                                offsetX: -5,
                                offsetY: 0,
                                fontsize: 12
                            }),
                            e.append(new o(x))),
                        u.showRightLabels.value() &&
                            ((b = {
                                points: [i],
                                text: this._numericFormatter.format(
                                    this._hlevels[w].coeff
                                ),
                                color: this._hlevels[w].color,
                                vertAlign: "middle",
                                horzAlign: "left",
                                font: u.font.value(),
                                offsetX: 5,
                                offsetY: 0,
                                fontsize: 12
                            }),
                            e.append(new o(b)));
                for (w = 0; w < this._vlevels.length; w++)
                    (t = new r(this._vlevels[w].x, s)),
                        (i = new r(this._vlevels[w].x, _)),
                        u.grid.visible.value() &&
                            ((y = {
                                points: [t, i],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: f,
                                linewidth: g,
                                linestyle: v,
                                extendleft: !1,
                                extendright: !1,
                                leftend: p.Normal,
                                rightend: p.Normal
                            }),
                            (m = new l()),
                            m.setData(y),
                            e.append(m)),
                        u.showTopLabels.value() &&
                            ((S = {
                                points: [t],
                                text: this._numericFormatter.format(
                                    this._vlevels[w].coeff
                                ),
                                color: this._vlevels[w].color,
                                vertAlign: "bottom",
                                horzAlign: "center",
                                font: u.font.value(),
                                offsetX: 0,
                                offsetY: -5,
                                fontsize: 12
                            }),
                            e.append(new o(S))),
                        u.showBottomLabels.value() &&
                            ((P = {
                                points: [i],
                                text: this._numericFormatter.format(
                                    this._vlevels[w].coeff
                                ),
                                color: this._vlevels[w].color,
                                vertAlign: "top",
                                horzAlign: "center",
                                font: u.font.value(),
                                offsetX: 0,
                                offsetY: 5,
                                fontsize: 12
                            }),
                            e.append(new o(P)));
                for (
                    R = u.fillBackground.value(),
                        T = u.transparency.value(),
                        t = this._floatPoints[0],
                        i = this._floatPoints[1],
                        w = 0;
                    w < this._hlevels.length;
                    w++
                )
                    (L = new r(i.x, this._hlevels[w].y)),
                        w > 0 &&
                            R &&
                            ((C = new r(i.x, this._hlevels[w - 1].y)),
                            (k = {}),
                            (k.width = this._model.timeScale().width()),
                            (k.height = this._source.priceScale().height()),
                            (k.p1 = t),
                            (k.p2 = L),
                            (k.p3 = t),
                            (k.p4 = C),
                            (k.color = this._hlevels[w].color),
                            (k.transparency = T),
                            (k.hittestOnBackground = !0),
                            (m = new a()),
                            m.setData(k),
                            e.append(m)),
                        (y = {
                            points: [t, L],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: this._hlevels[w].color,
                            linewidth: u.linewidth.value(),
                            linestyle: u.linestyle.value(),
                            extendleft: !1,
                            extendright: !0,
                            leftend: p.Normal,
                            rightend: p.Normal
                        }),
                        (m = new l()),
                        m.setData(y),
                        m.setHitTest(
                            new h(h.MOVEPOINT, null, {
                                type: "h",
                                index: this._hlevels[w].index
                            })
                        ),
                        e.append(m);
                for (w = 0; w < this._vlevels.length; w++)
                    (I = new r(this._vlevels[w].x, i.y)),
                        w > 0 &&
                            R &&
                            ((C = new r(this._vlevels[w - 1].x, i.y)),
                            (k = {}),
                            (k.width = this._model.timeScale().width()),
                            (k.height = this._source.priceScale().height()),
                            (k.p1 = t),
                            (k.p2 = I),
                            (k.p3 = t),
                            (k.p4 = C),
                            (k.color = this._vlevels[w].color),
                            (k.transparency = T),
                            (k.hittestOnBackground = !0),
                            (m = new a()),
                            m.setData(k),
                            e.append(m)),
                        (y = {
                            points: [t, I],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: this._vlevels[w].color,
                            linewidth: u.linewidth.value(),
                            linestyle: u.linestyle.value(),
                            extendleft: !1,
                            extendright: !0,
                            leftend: p.Normal,
                            rightend: p.Normal
                        }),
                        (m = new l()),
                        m.setData(y),
                        m.setHitTest(
                            new h(h.MOVEPOINT, null, {
                                type: "v",
                                index: this._vlevels[w].index
                            })
                        ),
                        e.append(m);
                return this.addAnchors(e), e;
            }),
            (t.FibSpeedResistanceFanPaneView = n);
    },
    876: function(e, t, i) {
        "use strict";
        function n() {
            this._data = null;
        }
        function r(e, t) {
            s.call(this, e, t),
                (this._invalidated = !0),
                (this._trendLineRenderer = new a()),
                (this._spiralRenderer = new n());
        }
        var s = i(12).LineSourcePaneView,
            a = i(16).TrendLineRenderer,
            o = i(4),
            l = i(8).CompositeRenderer,
            h = i(18).LineEnd;
        (n.prototype.setData = function(e) {
            this._data = e;
        }),
            (n.prototype._fibNumbers = function() {
                return [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
            }),
            (n.prototype._continiusFib = function(e) {
                var t,
                    i,
                    n = this._fibNumbers(),
                    r = Math.floor(e),
                    s = Math.ceil(e);
                return s >= n.length
                    ? null
                    : ((t = e - r),
                      (t = Math.pow(t, 1.15)),
                      (i = n[s] - n[r]),
                      n[r] + i * t);
            }),
            (n.prototype.hitTest = function(e) {
                var t, i, n, r, s, a, l, h, d, c, p, _, u;
                if (null === this._data) return null;
                for (
                    t = this._data.points[0],
                        i = this._data.points[1],
                        n = i.subtract(t),
                        r = e.subtract(t),
                        s = n.normalized(),
                        a = s.transposed(),
                        l = r.normalized(),
                        h = Math.acos(s.dotProduct(l)),
                        d = Math.asin(a.dotProduct(l)),
                        d < 0 && (h = 2 * Math.PI - h),
                        c = r.length(),
                        p = 0;
                    p < 4;
                    p++
                )
                    if (
                        ((_ = h / (0.5 * Math.PI)),
                        (u = this._continiusFib(_ + 4 * p)),
                        null !== (u = u * n.length() / 5) &&
                            Math.abs(u - c) < 5)
                    )
                        return new o(o.MOVEPOINT);
                return null;
            }),
            (n.prototype.draw = function(e) {
                var t, i, n, r, s, a, o, l, h, d, c, p;
                if (null !== this._data) {
                    for (
                        e.lineCap = "round",
                            e.strokeStyle = this._data.color,
                            t = this._data.points[0],
                            i = this._data.points[1],
                            e.translate(t.x, t.y),
                            n = i.subtract(t),
                            r = n.length(),
                            n = n.normalized(),
                            s = Math.acos(n.x),
                            Math.asin(n.y) < 0 && (s = 2 * Math.PI - s),
                            e.rotate(s),
                            e.scale(r / 5, r / 5),
                            e.lineWidth = this._data.linewidth,
                            CanvasEx.setLineStyle(e, this._data.linestyle),
                            a = 50,
                            o = Math.PI / (2 * a),
                            e.moveTo(0, 0),
                            l = 0;
                        l < (this._fibNumbers().length - 1) * a;
                        l++
                    )
                        (h = l * o),
                            (d = this._continiusFib(l / a)),
                            (c = Math.cos(h) * d),
                            (p = Math.sin(h) * d),
                            e.lineTo(c, p);
                    e.scale(5 / r, 5 / r), e.rotate(-s), e.stroke();
                }
            }),
            inherit(r, s),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype.updateImpl = function() {
                s.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (r.prototype.renderer = function() {
                var e, t;
                return (
                    this._invalidated && this.updateImpl(),
                    (e = new l()),
                    this._floatPoints.length < 2
                        ? e
                        : ((t = {}),
                          (t.points = this._floatPoints),
                          (t.width = this._model.timeScale().width()),
                          (t.height = this._source.priceScale().height()),
                          (t.color = this._source
                              .properties()
                              .linecolor.value()),
                          (t.linewidth = this._source
                              .properties()
                              .linewidth.value()),
                          (t.linestyle = this._source
                              .properties()
                              .linestyle.value()),
                          (t.extendleft = !1),
                          (t.extendright = !0),
                          (t.leftend = h.Normal),
                          (t.rightend = h.Normal),
                          this._trendLineRenderer.setData(t),
                          e.append(this._trendLineRenderer),
                          (t = {}),
                          (t.points = this._floatPoints),
                          (t.width = this._model.timeScale().width()),
                          (t.height = this._source.priceScale().height()),
                          (t.color = this._source
                              .properties()
                              .linecolor.value()),
                          (t.linewidth = this._source
                              .properties()
                              .linewidth.value()),
                          (t.linestyle = this._source
                              .properties()
                              .linestyle.value()),
                          this._spiralRenderer.setData(t),
                          e.append(this._spiralRenderer),
                          this.isAnchorsRequired() && this.addAnchors(e),
                          e)
                );
            }),
            (t.FibSpiralPaneView = r);
    },
    878: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._levels = []),
                (this._invalidated = !0),
                (this._trendRenderer = new h());
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(146).VerticalLineRenderer,
            o = i(27).TextRenderer,
            l = i(70).RectangleRenderer,
            h = i(16).TrendLineRenderer,
            d = i(4),
            c = i(8).CompositeRenderer,
            p = i(18).LineEnd;
        inherit(n, s),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n, r, a, o, l, h, d;
                if (
                    (s.prototype._updateImpl.call(this),
                    !(this._source.points().length < 1) &&
                        this._source.priceScale() &&
                        !this._source.priceScale().isEmpty() &&
                        !this._model.timeScale().isEmpty() &&
                        ((e = this._source.points()[0]),
                        2 === this._source.points().length &&
                            (t = this._source.points()[1]),
                        (i = this._source.properties()),
                        (n = this._source.points()[0].index),
                        null !== this._model.timeScale().visibleBars()))
                )
                    for (
                        this._levels = [], r = t ? t.index - e.index : 1, a = 1;
                        a <= 11;
                        a++
                    )
                        (o = i["level" + a]),
                            o.visible.value() &&
                                ((l = Math.round(n + o.coeff.value() * r)),
                                (h = this._model
                                    .timeScale()
                                    .indexToCoordinate(l)),
                                (d = {
                                    index: a,
                                    x: h,
                                    color: o.color.value(),
                                    width: o.linewidth.value(),
                                    style: o.linestyle.value()
                                }),
                                i.showLabels.value() &&
                                    ((d.text = o.coeff.value()),
                                    (d.y = this._source.priceScale().height())),
                                this._levels.push(d));
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, s, h, _, u, f, g, v, w, y, m, x, b, S, P;
                for (
                    this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                        e = this._model.timeScale().width(),
                        t = this._source.priceScale().height(),
                        i = new c(),
                        n = this._source.properties(),
                        s = 0;
                    s < this._levels.length;
                    s++
                )
                    if (
                        ((h = {}),
                        (h.width = e),
                        (h.height = t),
                        (h.points = [new r(this._levels[s].x, 0)]),
                        (h.color = this._levels[s].color),
                        (h.linewidth = this._levels[s].width),
                        (h.linestyle = this._levels[s].style),
                        (_ = new d(d.MOVEPOINT, null, this._levels[s].index)),
                        (u = new a()),
                        u.setData(h),
                        u.setHitTest(_),
                        i.append(u),
                        s > 0 &&
                            n.fillBackground.value() &&
                            ((f = this._levels[s - 1]),
                            (g = new r(this._levels[s].x, 0)),
                            (v = new r(
                                f.x,
                                this._source.priceScale().height()
                            )),
                            (w = {}),
                            (w.points = [g, v]),
                            (w.color = this._levels[s].color),
                            (w.linewidth = 0),
                            (w.backcolor = this._levels[s].color),
                            (w.fillBackground = !0),
                            (w.transparency = n.transparency.value()),
                            (u = new l(void 0, void 0, !0)),
                            u.setData(w),
                            i.append(u)),
                        void 0 !== this._levels[s].text)
                    ) {
                        switch (((b = n.horzLabelsAlign.value()),
                        (b =
                            "left" === b
                                ? "right"
                                : "right" === b ? "left" : "center"))) {
                            case "left":
                                m = 3;
                                break;
                            case "center":
                                m = 0;
                                break;
                            case "right":
                                m = -3;
                        }
                        switch (n.vertLabelsAlign.value()) {
                            case "top":
                                (y = new r(this._levels[s].x, 0)), (x = 5);
                                break;
                            case "middle":
                                (y = new r(
                                    this._levels[s].x,
                                    0.5 * this._levels[s].y
                                )),
                                    (x = 0);
                                break;
                            case "bottom":
                                (y = new r(
                                    this._levels[s].x,
                                    this._levels[s].y
                                )),
                                    (x = -10);
                        }
                        (S = {
                            points: [y],
                            text: "" + this._levels[s].text,
                            color: h.color,
                            vertAlign: "middle",
                            horzAlign: b,
                            font: n.font.value(),
                            offsetX: m,
                            offsetY: x,
                            fontsize: 12
                        }),
                            i.append(new o(S));
                    }
                return (
                    2 === this._points.length &&
                        ((P = {
                            points: [this._points[0], this._points[1]],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: n.trendline.color.value(),
                            linewidth: n.trendline.linewidth.value(),
                            linestyle: n.trendline.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: p.Normal,
                            rightend: p.Normal
                        }),
                        this._trendRenderer.setData(P),
                        i.append(this._trendRenderer)),
                    this.isAnchorsRequired() &&
                        (2 === this._source.points().length
                            ? i.append(
                                  this.createLineAnchor({points: this._points})
                              )
                            : this._points.length > 0 &&
                              i.append(
                                  this.createLineAnchor({
                                      points: [
                                          new r(
                                              this._points[0].x,
                                              this._source
                                                  .priceScale()
                                                  .height() / 2
                                          )
                                      ],
                                      hittestResult: d.MOVEPOINT
                                  })
                              )),
                    i
                );
            }),
            (t.FibTimeZonePaneView = n);
    },
    881: function(e, t, i) {
        "use strict";
        function n(e, t) {
            r.call(this, e, t),
                (this._label1 = null),
                (this._label2 = null),
                (this._invalidated = !0),
                (this._trendLineRendererPoints12 = new a()),
                (this._trendLineRendererPoints43 = new a()),
                (this._disjointAngleRenderer = new s()),
                (this._p1LabelRenderer = new o({})),
                (this._p2LabelRenderer = new o({})),
                (this._p3LabelRenderer = new o({})),
                (this._p4LabelRenderer = new o({}));
        }
        var r = i(12).LineSourcePaneView,
            s = i(493).DisjointAngleRenderer,
            a = i(16).TrendLineRenderer,
            o = i(27).TextRenderer,
            l = i(8).CompositeRenderer,
            h = i(105).PaneRendererClockIcon;
        inherit(n, r),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i;
                r.prototype._updateImpl.call(this),
                    (this._label1 = null),
                    (this._label2 = null),
                    this._source.points().length < 2 ||
                        (this._source.priceScale() &&
                            ((e = this._source.points()[0]),
                            (t = this._source.points()[1]),
                            (this._price1 = this._source
                                .priceScale()
                                .formatter()
                                .format(e.price)),
                            (this._price2 = this._source
                                .priceScale()
                                .formatter()
                                .format(t.price)),
                            3 === this._source.points().length &&
                                ((i = this._source.points()[2]),
                                (this._price3 = this._source
                                    .priceScale()
                                    .formatter()
                                    .format(i.price)))));
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, r, s, a, o, d, c, p, _, u, f, g, v;
                return (
                    this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = new l()),
                    this._points.length < 2
                        ? e
                        : ((t = this._points[0]),
                          (i = this._points[1]),
                          (s = this._source.properties()),
                          (a = this._model),
                          (o = this._source),
                          3 === this._points.length &&
                              ((n = this._points[2]),
                              (n.x = i.x),
                              (r = t.clone()),
                              (r.y = n.y),
                              (r.data = 3),
                              s.fillBackground.value() &&
                                  ((d = a.timeScale().width()),
                                  (c = o.priceScale().height()),
                                  (p = s.extendLeft.value()),
                                  (_ = s.extendRight.value()),
                                  this._disjointAngleRenderer.setData({
                                      width: d,
                                      height: c,
                                      extendleft: p,
                                      extendright: _,
                                      points: [t, i, n, r],
                                      backcolor: s.backgroundColor.value(),
                                      transparency: s.transparency.value(),
                                      hittestOnBackground: TradingView.isMobile.any()
                                  }),
                                  e.append(this._disjointAngleRenderer))),
                          (u = function(e, t) {
                              return {
                                  points: [e, t],
                                  width: a.timeScale().width(),
                                  height: o.priceScale().height(),
                                  color: s.linecolor.value(),
                                  linewidth: s.linewidth.value(),
                                  linestyle: s.linestyle.value(),
                                  extendleft: s.extendLeft.value(),
                                  extendright: s.extendRight.value(),
                                  leftend: s.leftEnd.value(),
                                  rightend: s.rightEnd.value()
                              };
                          }),
                          this._trendLineRendererPoints12.setData(u(t, i)),
                          e.append(this._trendLineRendererPoints12),
                          2 === this._points.length
                              ? (this.addAnchors(e), e)
                              : ((f = this),
                                (g = function(t, i, n, r, s, a) {
                                    var o;
                                    f._source.properties().showPrices.value() &&
                                        ((o = {
                                            points: [n],
                                            text: s,
                                            color: f._source
                                                .properties()
                                                .textcolor.value(),
                                            horzAlign:
                                                n.x > r.x ? "left" : "right",
                                            vertAlign: "middle",
                                            font: f._source
                                                .properties()
                                                .font.value(),
                                            offsetX: n.x > r.x ? -5 : 5,
                                            offsetY: -5,
                                            bold: f._source
                                                .properties()
                                                .bold.value(),
                                            italic: f._source
                                                .properties()
                                                .italic.value(),
                                            fontsize: f._source
                                                .properties()
                                                .fontsize.value()
                                        }),
                                        t.setData(o),
                                        e.append(t),
                                        (o = {
                                            points: [r],
                                            text: a,
                                            color: f._source
                                                .properties()
                                                .textcolor.value(),
                                            horzAlign:
                                                n.x < r.x ? "left" : "right",
                                            vertAlign: "middle",
                                            font: f._source
                                                .properties()
                                                .font.value(),
                                            offsetX: n.x > r.x ? -5 : 5,
                                            offsetY: -5,
                                            bold: f._source
                                                .properties()
                                                .bold.value(),
                                            italic: f._source
                                                .properties()
                                                .italic.value(),
                                            fontsize: f._source
                                                .properties()
                                                .fontsize.value()
                                        }),
                                        i.setData(o),
                                        e.append(i));
                                }),
                                g(
                                    this._p1LabelRenderer,
                                    this._p2LabelRenderer,
                                    t,
                                    i,
                                    this._price1,
                                    this._price2
                                ),
                                this._trendLineRendererPoints43.setData(
                                    u(r, n)
                                ),
                                e.append(this._trendLineRendererPoints43),
                                g(
                                    this._p3LabelRenderer,
                                    this._p4LabelRenderer,
                                    n,
                                    r,
                                    this._price3,
                                    this._price3
                                ),
                                this.isAnchorsRequired() &&
                                    ((v = [t, i, n, r]),
                                    this._model.lineBeingCreated() ===
                                        this._source && v.pop(),
                                    e.append(
                                        this.createLineAnchor({points: v})
                                    )),
                                !TradingView.printing &&
                                    this._source.hasAlert.value() &&
                                    !this._model.readOnly() &&
                                    t &&
                                    i &&
                                    this._source.getAlertIsActive(function(n) {
                                        e.append(
                                            new h({
                                                point1: t,
                                                point2: i,
                                                color: n
                                                    ? s.linecolor.value()
                                                    : defaults(
                                                          "chartproperties.alertsProperties.drawingIcon.color"
                                                      )
                                            })
                                        );
                                    }),
                                e))
                );
            }),
            (t.FlatBottomPaneView = n);
    },
    883: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t), (this._invalidated = !0);
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(229).ChannelRenderer,
            o = i(27).TextRenderer,
            l = i(16).TrendLineRenderer,
            h = i(4),
            d = i(8).CompositeRenderer,
            c = i(18).LineEnd;
        inherit(n, s),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n, r, a, o, l, h, d, c, p, _, u;
                if (
                    (s.prototype._updateImpl.call(this),
                    !(this._source.points().length < 2) &&
                        this._source.priceScale() &&
                        !this._source.priceScale().isEmpty() &&
                        !this._model.timeScale().isEmpty())
                )
                    for (
                        e = this._floatPoints[0],
                            t = this._floatPoints[1],
                            this._fans = [],
                            i = t.x - e.x,
                            n = t.y - e.y,
                            o = 1;
                        o <= 9;
                        o++
                    )
                        (l = "level" + o),
                            (h = this._source.properties()[l]),
                            h.visible.value() &&
                                ((d = h.coeff1.value()),
                                (c = h.coeff2.value()),
                                (p = d / c),
                                (_ = h.color.value()),
                                (u = d + "/" + c),
                                d > c
                                    ? ((r = t.x), (a = e.y + n / p))
                                    : ((r = e.x + i * p), (a = t.y)),
                                this._fans.push({
                                    label: u,
                                    color: _,
                                    x: r,
                                    y: a,
                                    linewidth: h.linewidth.value(),
                                    linestyle: h.linestyle.value(),
                                    index: o
                                }));
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, s, p, _, u, f, g, v, w;
                if (
                    (this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = new d()),
                    this._floatPoints.length < 2)
                )
                    return e;
                for (
                    t = this._floatPoints[0],
                        i = this._source.properties(),
                        n = this._source.properties().fillBackground.value(),
                        s = this._source.properties().transparency.value(),
                        p = 0;
                    p < this._fans.length;
                    p++
                )
                    (_ = new r(this._fans[p].x, this._fans[p].y)),
                        n &&
                            (this._fans[p].index < 4
                                ? ((u = new r(
                                      this._fans[p + 1].x,
                                      this._fans[p + 1].y
                                  )),
                                  (f = {}),
                                  (f.width = this._model.timeScale().width()),
                                  (f.height = this._source
                                      .priceScale()
                                      .height()),
                                  (f.p1 = t),
                                  (f.p2 = _),
                                  (f.p3 = t),
                                  (f.p4 = u),
                                  (f.color = this._fans[p].color),
                                  (f.transparency = s),
                                  (f.hittestOnBackground = !0),
                                  (g = new a()),
                                  g.setData(f),
                                  e.append(g))
                                : this._fans[p].index > 4 &&
                                  p > 0 &&
                                  ((u = new r(
                                      this._fans[p - 1].x,
                                      this._fans[p - 1].y
                                  )),
                                  (f = {}),
                                  (f.width = this._model.timeScale().width()),
                                  (f.height = this._source
                                      .priceScale()
                                      .height()),
                                  (f.p1 = t),
                                  (f.p2 = _),
                                  (f.p3 = t),
                                  (f.p4 = u),
                                  (f.color = this._fans[p].color),
                                  (f.transparency = s),
                                  (f.hittestOnBackground = !0),
                                  (g = new a()),
                                  g.setData(f),
                                  e.append(g))),
                        (v = {
                            points: [t, _],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: this._fans[p].color,
                            linewidth: this._fans[p].linewidth,
                            linestyle: this._fans[p].linestyle,
                            extendleft: !1,
                            extendright: !0,
                            leftend: c.Normal,
                            rightend: c.Normal
                        }),
                        (g = new l()),
                        g.setData(v),
                        g.setHitTest(
                            new h(h.MOVEPOINT, null, this._fans[p].index)
                        ),
                        e.append(g),
                        i.showLabels.value() &&
                            ((w = {
                                points: [_],
                                text: this._fans[p].label,
                                color: this._fans[p].color,
                                vertAlign: "middle",
                                horzAlign: "left",
                                font: i.font.value(),
                                offsetX: 0,
                                offsetY: -5,
                                fontsize: 12
                            }),
                            e.append(new o(w)));
                return this.addAnchors(e), e;
            }),
            (t.GannFanPaneView = n);
    },
    885: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._numericFormatter = new d()),
                (this._invalidated = !0);
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(27).TextRenderer,
            o = i(70).RectangleRenderer,
            l = i(16).TrendLineRenderer,
            h = i(8).CompositeRenderer,
            d = i(38).NumericFormatter,
            c = i(18).LineEnd;
        inherit(n, s),
            (n.prototype.renderer = function() {
                function e(e, t, i) {
                    function n(t) {
                        var i = new l();
                        i.setData(Object.assign({}, R, {points: t})),
                            e.append(i);
                    }
                    var a,
                        o,
                        h,
                        f,
                        g,
                        v,
                        w,
                        y,
                        m,
                        x = new r(s, d),
                        b = new r(p, d),
                        S = new r(s, _),
                        P = new r(p, _),
                        R = {
                            width: k._model.timeScale().width(),
                            height: k._source.priceScale().height(),
                            color: u.fans.color.value(),
                            linewidth: u.linewidth.value(),
                            linestyle: u.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: c.Normal,
                            rightend: c.Normal
                        };
                    for (a = 0; a < t.length; ++a)
                        (o = i ? _ : t[a]),
                            (h = i ? d : t[a]),
                            (f = i ? t[a] : s),
                            (g = i ? t[a] : p),
                            (v = new r(g, o)),
                            (w = new r(f, o)),
                            (y = new r(g, h)),
                            (m = new r(f, h)),
                            n([S, y]),
                            n([P, m]),
                            n([x, v]),
                            n([b, w]);
                }
                var t,
                    i,
                    n,
                    s,
                    d,
                    p,
                    _,
                    u,
                    f,
                    g,
                    v,
                    w,
                    y,
                    m,
                    x,
                    b,
                    S,
                    P,
                    R,
                    T,
                    L,
                    C,
                    k;
                if (
                    (this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (t = new h()),
                    this._points.length < 2)
                )
                    return this.addAnchors(t), t;
                for (
                    i = this._points[0],
                        n = this._points[1],
                        s = Math.min(i.x, n.x),
                        d = Math.min(i.y, n.y),
                        p = Math.max(i.x, n.x),
                        _ = Math.max(i.y, n.y),
                        u = this._source.properties(),
                        f = this._source
                            .properties()
                            .fillHorzBackground.value(),
                        g = this._source.properties().horzTransparency.value(),
                        v = this._source
                            .properties()
                            .fillVertBackground.value(),
                        w = this._source.properties().vertTransparency.value(),
                        y = 0;
                    y < this._hlevels.length;
                    y++
                )
                    y > 0 &&
                        f &&
                        ((m = this._hlevels[y - 1]),
                        (i = new r(s, this._hlevels[y].y)),
                        (n = new r(p, m.y)),
                        (x = {}),
                        (x.points = [i, n]),
                        (x.color = this._hlevels[y].color),
                        (x.linewidth = 0),
                        (x.backcolor = this._hlevels[y].color),
                        (x.fillBackground = !0),
                        (x.transparency = g),
                        (b = new o(void 0, void 0, !0)),
                        b.setData(x),
                        t.append(b)),
                        (i = new r(s, this._hlevels[y].y)),
                        (n = new r(p, this._hlevels[y].y)),
                        (S = {
                            points: [i, n],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: this._hlevels[y].color,
                            linewidth: u.linewidth.value(),
                            linestyle: u.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: c.Normal,
                            rightend: c.Normal
                        }),
                        (b = new l()),
                        b.setData(S),
                        t.append(b),
                        u.showLeftLabels.value() &&
                            ((P = {
                                points: [i],
                                text: this._numericFormatter.format(
                                    this._hlevels[y].coeff
                                ),
                                color: this._hlevels[y].color,
                                vertAlign: "middle",
                                horzAlign: "right",
                                font: u.font.value(),
                                offsetX: -5,
                                offsetY: 0,
                                fontsize: 12
                            }),
                            t.append(new a(P))),
                        u.showRightLabels.value() &&
                            ((R = {
                                points: [n],
                                text: this._numericFormatter.format(
                                    this._hlevels[y].coeff
                                ),
                                color: this._hlevels[y].color,
                                vertAlign: "middle",
                                horzAlign: "left",
                                font: u.font.value(),
                                offsetX: 5,
                                offsetY: 0,
                                fontsize: 12
                            }),
                            t.append(new a(R)));
                for (y = 0; y < this._vlevels.length; y++)
                    (i = new r(this._vlevels[y].x, d)),
                        (n = new r(this._vlevels[y].x, _)),
                        y > 0 &&
                            v &&
                            ((m = this._vlevels[y - 1]),
                            (T = new r(m.x, d)),
                            (x = {}),
                            (x.points = [T, n]),
                            (x.color = this._vlevels[y].color),
                            (x.linewidth = 0),
                            (x.backcolor = this._vlevels[y].color),
                            (x.fillBackground = !0),
                            (x.transparency = w),
                            (b = new o(void 0, void 0, !0)),
                            b.setData(x),
                            t.append(b)),
                        (S = {
                            points: [i, n],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: this._vlevels[y].color,
                            linewidth: u.linewidth.value(),
                            linestyle: u.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: c.Normal,
                            rightend: c.Normal
                        }),
                        (b = new l()),
                        b.setData(S),
                        t.append(b),
                        u.showTopLabels.value() &&
                            ((L = {
                                points: [i],
                                text: this._numericFormatter.format(
                                    this._vlevels[y].coeff
                                ),
                                color: this._vlevels[y].color,
                                vertAlign: "bottom",
                                horzAlign: "center",
                                font: u.font.value(),
                                offsetX: 0,
                                offsetY: -5,
                                fontsize: 12
                            }),
                            t.append(new a(L))),
                        u.showBottomLabels.value() &&
                            ((C = {
                                points: [n],
                                text: this._numericFormatter.format(
                                    this._vlevels[y].coeff
                                ),
                                color: this._vlevels[y].color,
                                vertAlign: "top",
                                horzAlign: "center",
                                font: u.font.value(),
                                offsetX: 0,
                                offsetY: 5,
                                fontsize: 12
                            }),
                            t.append(new a(C)));
                return (
                    (k = this),
                    e(t, this._hfans, !0),
                    e(t, this._vfans, !1),
                    this.addAnchors(t),
                    t
                );
            }),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n, r, a, o, l, h, d, c, p, _, u, f, g, v, w;
                if (
                    (s.prototype._updateImpl.call(this),
                    !(this._source.points().length < 2) &&
                        this._source.priceScale() &&
                        !this._source.priceScale().isEmpty() &&
                        !this._model.timeScale().isEmpty())
                ) {
                    for (
                        e = this._source.points()[0],
                            t = this._source.points()[1],
                            i = this._source.properties(),
                            n = i.reverse && i.reverse.value(),
                            this._hlevels = [],
                            r = n ? e.price - t.price : t.price - e.price,
                            a = n ? t.price : e.price,
                            this._source.priceScale().isPercent() &&
                                (o = this._source.ownerSource().firstValue()),
                            l = 1;
                        l <= 7;
                        l++
                    )
                        (h = "hlevel" + l),
                            (d = i[h]),
                            d.visible.value() &&
                                ((c = d.coeff.value()),
                                (p = d.color.value()),
                                (_ = a + c * r),
                                this._source.priceScale().isPercent() &&
                                    (_ = this._source
                                        .priceScale()
                                        .priceRange()
                                        .convertToPercent(_, o)),
                                (u = this._source
                                    .priceScale()
                                    .priceToCoordinate(_)),
                                this._hlevels.push({coeff: c, color: p, y: u}));
                    for (
                        this._vlevels = [],
                            f = n ? e.index - t.index : t.index - e.index,
                            g = n ? t.index : e.index,
                            l = 1;
                        l <= 7;
                        l++
                    )
                        (h = "vlevel" + l),
                            (d = i[h]),
                            d.visible.value() &&
                                ((c = d.coeff.value()),
                                (p = d.color.value()),
                                (v = Math.round(g + c * f)),
                                (w = this._model
                                    .timeScale()
                                    .indexToCoordinate(v)),
                                this._vlevels.push({coeff: c, color: p, x: w}));
                    if (
                        ((this._hfans = []),
                        (this._vfans = []),
                        i.fans.visible.value())
                    )
                        for (l = 1; l <= 7; l++)
                            (v = Math.round(
                                g + i["hlevel" + l].coeff.value() * f
                            )),
                                (_ = a + i["vlevel" + l].coeff.value() * r),
                                this._source.priceScale().isPercent() &&
                                    (_ = this._source
                                        .priceScale()
                                        .priceRange()
                                        .convertToPercent(_, o)),
                                this._hfans.push(
                                    this._model.timeScale().indexToCoordinate(v)
                                ),
                                this._vfans.push(
                                    this._source
                                        .priceScale()
                                        .priceToCoordinate(_)
                                );
                }
            }),
            (t.GannSquarePaneView = n);
    },
    887: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t), (this._invalidated = !0);
        }
        var r = i(56),
            s = i(12).LineSourcePaneView,
            a = i(16).TrendLineRenderer,
            o = i(4),
            l = i(279).PaneRendererCandles,
            h = i(8).CompositeRenderer,
            d = i(18).LineEnd;
        inherit(n, s),
            (n.prototype.update = function() {
                s.prototype._updateImpl.call(this), (this._invalidated = !0);
            }),
            (n.prototype.udpateImpl = function() {
                var e = this;
                (this._segments = []),
                    e._points.length < 2 ||
                        (this._segments = this._source
                            .segments()
                            .map(function(t, i) {
                                var n,
                                    s,
                                    a,
                                    o,
                                    l,
                                    h,
                                    d,
                                    c,
                                    p,
                                    _,
                                    u,
                                    f = e._source.points();
                                return i >= e._points.length - 1
                                    ? null
                                    : ((n = e._points[i].x),
                                      (s = f[i].price),
                                      (a = f[i + 1].price),
                                      (o = f[i + 1].index - f[i].index),
                                      (l =
                                          e._model.timeScale().barSpacing() *
                                          r.sign(o)),
                                      (h = (a - s) / (t.bars().length - 1)),
                                      (d = e._source.properties()),
                                      (c = d.candleStyle.upColor.value()),
                                      (p = d.candleStyle.downColor.value()),
                                      (_ = d.candleStyle.borderUpColor.value()),
                                      (u = d.candleStyle.borderDownColor.value()),
                                      {
                                          bars: t.bars().map(function(t, i) {
                                              var r = t.c >= t.o;
                                              return {
                                                  time: n + i * l,
                                                  open: e.priceToCoordinate(
                                                      t.o + s + i * h
                                                  ),
                                                  high: e.priceToCoordinate(
                                                      t.h + s + i * h
                                                  ),
                                                  low: e.priceToCoordinate(
                                                      t.l + s + i * h
                                                  ),
                                                  close: e.priceToCoordinate(
                                                      t.c + s + i * h
                                                  ),
                                                  color: r ? c : p,
                                                  borderColor: r ? _ : u,
                                                  hollow: !1
                                              };
                                          })
                                      });
                            })
                            .filter(function(e) {
                                return !!e;
                            }));
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, r, s, c, p, _, u, f, g, v;
                for (
                    this._invalidated &&
                        (this.udpateImpl(), (this._invalidated = !1)),
                        e = new h(),
                        t = 1;
                    t < this._points.length;
                    t++
                )
                    (i = this._points[t - 1]),
                        (n = this._points[t]),
                        (r = {
                            points: [i, n],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: "#808080",
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendleft: !1,
                            extendright: !1,
                            leftend: d.Normal,
                            rightend: d.Normal
                        }),
                        (s = new a()),
                        s.setData(r),
                        s.setHitTest(new o(o.MOVEPOINT, null)),
                        e.append(s);
                for (
                    c = this._source.properties(),
                        p = c.candleStyle.drawWick.value(),
                        _ = c.candleStyle.drawBorder.value(),
                        u = c.candleStyle.borderColor.value(),
                        f = c.candleStyle.wickColor.value(),
                        g = new h(),
                        g.setGlobalAlpha(1 - c.transparency.value() / 100),
                        t = 0;
                    t < this._segments.length;
                    t++
                )
                    (v = {
                        bars: this._segments[t].bars,
                        barSpacing: this._model.timeScale().barSpacing(),
                        drawWick: p,
                        drawBorder: _,
                        borderColor: u,
                        wickColor: f,
                        hittest: new o(o.MOVEPOINT, null)
                    }),
                        g.append(new l(v));
                return e.append(g), this.addAnchors(e), e;
            }),
            (t.GhostFeedPaneView = n);
    },
    889: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._invalidated = !0),
                (this._trendLineRenderer = new a()),
                (this._triangleRendererPoints234 = new o()),
                (this._intersect1Renderer = new o()),
                (this._intersect2Renderer = new o()),
                (this._leftShoulderLabelRenderer = new l({})),
                (this._headLabelRenderer = new l({})),
                (this._rightShoulderLabelRenderer = new l({}));
        }
        var r = i(98).intersectLineSegments,
            s = i(12).LineSourcePaneView,
            a = i(16).TrendLineRenderer,
            o = i(230).TriangleRenderer,
            l = i(27).TextRenderer,
            h = i(8).CompositeRenderer,
            d = i(19),
            c = i(18).LineEnd;
        inherit(n, s),
            (n.prototype._i18nCache = function() {
                return {
                    leftShoulder: $.t("Left Shoulder"),
                    rightShoulder: $.t("Right Shoulder"),
                    head: $.t("Head")
                };
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, r, s, o, l, p, _, u, f, g, v, w, y, m;
                if (
                    (this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    this._points.length < 2)
                )
                    return null;
                for (
                    e = this._source.properties(),
                        t = new h(),
                        i = this,
                        n = function(t, n) {
                            return {
                                points: [t],
                                text: $.t(n),
                                color: e.textcolor.value(),
                                horzAlign: "center",
                                font: e.font.value(),
                                offsetX: 0,
                                offsetY: 0,
                                bold: e.bold && e.bold.value(),
                                italic: e.italic && e.italic.value(),
                                fontsize: e.fontsize.value(),
                                backgroundColor: i._source
                                    .properties()
                                    .color.value(),
                                backgroundRoundRect: 4
                            };
                        },
                        r = function(t, n, r, s) {
                            return {
                                points: [t, n],
                                width: i._model.timeScale().width(),
                                height: i._source.priceScale().height(),
                                color: d.generateColor(
                                    i._source.properties().color.value(),
                                    r
                                ),
                                linewidth: s || e.linewidth.value(),
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                extendleft: !1,
                                extendright: !1,
                                leftend: c.Normal,
                                rightend: c.Normal
                            };
                        },
                        s = function(t, i, n) {
                            var r = [t, i, n],
                                s = {};
                            return (
                                (s.points = r),
                                (s.color = e.color.value()),
                                (s.linewidth = 0),
                                (s.backcolor = e.backgroundColor.value()),
                                (s.fillBackground = e.fillBackground.value()),
                                (s.transparency = e.transparency.value()),
                                s
                            );
                        },
                        o = 1;
                    o < this._points.length;
                    o++
                )
                    (l = r(this._points[o - 1], this._points[o], 0)),
                        (p = new a()),
                        p.setData(l),
                        t.append(p);
                return (
                    this._points.length >= 5 &&
                        ((f = !1),
                        (g = !1),
                        this._intersect1
                            ? (_ = this._intersect1)
                            : ((_ = this._points[2]), (f = !0)),
                        this._intersect2
                            ? (u = this._intersect2)
                            : ((u = this._points[4]), (g = !0)),
                        (l = r(_, u, 0)),
                        (l.extendleft = f),
                        (l.extendright = g),
                        this._trendLineRenderer.setData(l),
                        t.append(this._trendLineRenderer),
                        (v = s(
                            this._points[2],
                            this._points[3],
                            this._points[4]
                        )),
                        this._triangleRendererPoints234.setData(v),
                        t.append(this._triangleRendererPoints234)),
                    this._intersect1 &&
                        ((v = s(
                            this._intersect1,
                            this._points[1],
                            this._points[2]
                        )),
                        this._intersect1Renderer.setData(v),
                        t.append(this._intersect1Renderer)),
                    this._intersect2 &&
                        ((v = s(
                            this._points[4],
                            this._points[5],
                            this._intersect2
                        )),
                        this._intersect2Renderer.setData(v),
                        t.append(this._intersect2Renderer)),
                    (w = this._i18nCache()),
                    this._points.length >= 2 &&
                        ((y = this._points[1]),
                        (m = n(y, w.leftShoulder)),
                        this._points[1].y < this._points[0].y
                            ? ((m.vertAlign = "bottom"), (m.offsetY = -10))
                            : ((m.vertAlign = "top"), (m.offsetY = 5)),
                        this._leftShoulderLabelRenderer.setData(m),
                        t.append(this._leftShoulderLabelRenderer)),
                    this._points.length >= 4 &&
                        ((y = this._points[3]),
                        (m = n(y, w.head)),
                        this._points[3].y < this._points[2].y
                            ? ((m.vertAlign = "bottom"), (m.offsetY = -10))
                            : ((m.vertAlign = "top"), (m.offsetY = 5)),
                        this._headLabelRenderer.setData(m),
                        t.append(this._headLabelRenderer)),
                    this._points.length >= 6 &&
                        ((y = this._points[5]),
                        (m = n(y, w.rightShoulder)),
                        this._points[5].y < this._points[4].y
                            ? ((m.vertAlign = "bottom"), (m.offsetY = -10))
                            : ((m.vertAlign = "top"), (m.offsetY = 5)),
                        this._rightShoulderLabelRenderer.setData(m),
                        t.append(this._rightShoulderLabelRenderer)),
                    this.addAnchors(t),
                    t
                );
            }),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n, a, o, l, h;
                s.prototype._updateImpl.call(this),
                    delete this._intersect1,
                    delete this._intersect2,
                    this._points.length >= 5 &&
                        ((e = this._points[0]),
                        (t = this._points[1]),
                        (i = this._points[2]),
                        (n = this._points[4]),
                        (a = r(i, n, e, t)),
                        null !== a &&
                            ((o = n.subtract(i)),
                            (this._intersect1 = i.add(o.scaled(a)))),
                        7 === this._points.length &&
                            ((l = this._points[5]),
                            (h = this._points[6]),
                            null !== (a = r(i, n, l, h)) &&
                                ((o = n.subtract(i)),
                                (this._intersect2 = i.add(o.scaled(a))))));
            }),
            (t.LineToolHeadAndShouldersPaneView = n);
    },
    891: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._rendererCache = {}),
                (this._labelRenderer = new a({})),
                (this._lineRenderer = new h()),
                this._lineRenderer.setHitTest(new o(o.MOVEPOINT));
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(27).TextRenderer,
            o = i(4),
            l = i(8).CompositeRenderer,
            h = i(122).HorizontalLineRenderer,
            d = i(105).PaneRendererClockIcon;
        inherit(n, s),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                s.prototype._updateImpl.call(this);
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, s, a, o, h, c, p, _;
                return (
                    this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = new l()),
                    (t = {}),
                    (t.width = this._model.timeScale().width()),
                    (t.height = this._source.priceScale().height()),
                    (t.points = this._points),
                    (t.color = this._source.properties().linecolor.value()),
                    (t.linewidth = this._source.properties().linewidth.value()),
                    (t.linestyle = this._source.properties().linestyle.value()),
                    this._lineRenderer.setData(t),
                    (i = this._source.properties()),
                    e.append(this._lineRenderer),
                    this._source.properties().showLabel.value() &&
                        1 === this._points.length &&
                        ((n = i.vertLabelsAlign.value()),
                        (s = i.horzLabelsAlign.value()),
                        (a = this._points[0]),
                        (o = 0),
                        (h = 0),
                        "left" === s
                            ? (a.x = 3)
                            : "right" === s
                                ? ((a.x = this._model.timeScale().width()),
                                  (h = -5))
                                : (a.x = this._model.timeScale().width() / 2),
                        "middle" === n
                            ? (o =
                                  -this._source.properties().fontsize.value() /
                                  6)
                            : "bottom" === n && (o = -4),
                        (c = {
                            points: [a],
                            text: i.text.value(),
                            color: i.textcolor.value(),
                            vertAlign: n,
                            horzAlign: s,
                            font: i.font.value(),
                            offsetX: h,
                            offsetY: o,
                            bold: this._source.properties().bold.value(),
                            italic: this._source.properties().italic.value(),
                            fontsize: this._source.properties().fontsize.value()
                        }),
                        this._labelRenderer.setData(c),
                        e.append(this._labelRenderer)),
                    1 === this._points.length &&
                        this.isAnchorsRequired() &&
                        ((p = new r(
                            this._model.timeScale().width() / 2,
                            this._points[0].y
                        )),
                        (p.data = 0),
                        e.append(this.createLineAnchor({points: [p]}))),
                    TradingView.printing ||
                        !this._source.hasAlert.value() ||
                        this._model.readOnly() ||
                        1 !== this._points.length ||
                        ((_ = new r(
                            this._model.timeScale().width() / 2,
                            this._points[0].y
                        )),
                        this._source.getAlertIsActive(function(i) {
                            e.append(
                                new d({
                                    point1: _,
                                    color: i
                                        ? t.color
                                        : defaults(
                                              "chartproperties.alertsProperties.drawingIcon.color"
                                          )
                                })
                            );
                        })),
                    e
                );
            }),
            (t.HorzLinePaneView = n);
    },
    893: function(e, t, i) {
        "use strict";
        function n() {
            this._data = null;
        }
        function r(e, t) {
            s.call(this, e, t),
                (this._invalidated = !0),
                (this._renderer = new n()),
                (this._labelRenderer = new a({}));
        }
        var s = i(12).LineSourcePaneView,
            a = i(27).TextRenderer,
            o = i(4),
            l = i(8).CompositeRenderer,
            h = i(105).PaneRendererClockIcon;
        (n.prototype.setData = function(e) {
            this._data = e;
        }),
            (n.prototype.draw = function(e) {
                var t, i, n, r;
                if (null === this._data || 0 === this._data.points.length)
                    return null;
                (t = e.canvas.width),
                    (i = this._data.points[0].y),
                    (n = Math.max(0, this._data.points[0].x)),
                    (r = Math.max(t, this._data.points[0].x)),
                    (e.lineCap = "square"),
                    (e.strokeStyle = this._data.color),
                    (e.lineWidth = this._data.linewidth),
                    (e.lineStyle = this._data.linestyle),
                    CanvasEx.drawLine(e, n, i, r, i);
            }),
            (n.prototype.hitTest = function(e) {
                return null === this._data || 0 === this._data.points.length
                    ? null
                    : e.x < this._data.points[0].x
                        ? null
                        : Math.abs(e.y - this._data.points[0].y) <= 3
                            ? new o(this._data.hitTestResult)
                            : null;
            }),
            inherit(r, s),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype.updateImpl = function() {
                s.prototype._updateImpl.call(this);
            }),
            (r.prototype.renderer = function() {
                var e, t, i, n, r, s, a, d, c;
                return (
                    this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = new l()),
                    (t = {}),
                    (t.points = this._points),
                    (t.color = this._source.properties().linecolor.value()),
                    (t.linewidth = this._source.properties().linewidth.value()),
                    (t.linestyle = this._source.properties().linestyle.value()),
                    (t.hitTestResult = o.MOVEPOINT),
                    (i = this._source.properties()),
                    this._renderer.setData(t),
                    e.append(this._renderer),
                    this._source.properties().showLabel.value() &&
                        1 === this._points.length &&
                        ((n = i.vertLabelsAlign.value()),
                        (r = i.horzLabelsAlign.value()),
                        (s = this._points[0].clone()),
                        (a = 0),
                        (d = 0),
                        "right" === r
                            ? ((s.x = this._model.timeScale().width()),
                              (d = -5))
                            : "center" === r &&
                              (s.x =
                                  (s.x + this._model.timeScale().width()) / 2),
                        "middle" === n
                            ? (a =
                                  -this._source.properties().fontsize.value() /
                                  6)
                            : "bottom" === n && (a = -4),
                        (c = {
                            points: [s],
                            text: i.text.value(),
                            color: i.textcolor.value(),
                            vertAlign: n,
                            horzAlign: r,
                            font: i.font.value(),
                            offsetX: d,
                            offsetY: a,
                            bold: this._source.properties().bold.value(),
                            italic: this._source.properties().italic.value(),
                            fontsize: this._source.properties().fontsize.value()
                        }),
                        this._labelRenderer.setData(c),
                        e.append(this._labelRenderer)),
                    this.addAnchors(e),
                    TradingView.printing ||
                        !this._source.hasAlert.value() ||
                        this._model.readOnly() ||
                        1 !== this._points.length ||
                        this._source.getAlertIsActive(function(i) {
                            e.append(
                                new h({
                                    point1: t.points[0],
                                    color: i
                                        ? t.color
                                        : defaults(
                                              "chartproperties.alertsProperties.drawingIcon.color"
                                          )
                                })
                            );
                        }),
                    e
                );
            }),
            (t.HorzRayPaneView = r);
    },
    895: function(e, t, i) {
        "use strict";
        function n(e) {
            (this._data = null), (this._cache = e);
        }
        function r(e, t) {
            h.call(this, e, t),
                (this._cache = {}),
                (this._invalidated = !0),
                (this._dashRenderer = new d()),
                this._dashRenderer.setHitTest(null),
                (this._iconRenderer = new n(this._cache));
        }
        var s = i(1).Point,
            a = i(193),
            o = a.rotationMatrix,
            l = a.transformPoint,
            h = i(12).LineSourcePaneView,
            d = i(16).TrendLineRenderer,
            c = i(4),
            p = i(8).CompositeRenderer,
            _ = i(18).LineEnd;
        (n.prototype.setData = function(e) {
            this._data = e;
        }),
            (n.prototype.draw = function(e) {
                var t, i, n, r;
                null != this._data &&
                    ((t = String.fromCharCode(this._data.icon)),
                    (e.font = this._data.size + "px FontAwesome"),
                    (i = e.measureText(t).width),
                    (e.textBaseline = "middle"),
                    (n = this._data.point),
                    e.translate(n.x, n.y),
                    e.rotate(this._data.angle - Math.PI / 2),
                    e.scale(this._data.scale, 1),
                    (r = 65536 * this._data.icon + this._data.size),
                    (this._cache[r] = i),
                    this._data.selected &&
                        ((e.fillStyle = "rgba(80, 80, 80, 0.2)"),
                        e.fillRect(
                            -this._cache[r] / 2,
                            -this._data.size / 2,
                            this._cache[r],
                            this._data.size
                        )),
                    (e.fillStyle = this._data.color),
                    e.fillText(t, -this._cache[r] / 2, 0));
            }),
            (n.prototype.hitTest = function(e) {
                var t, i, n, r;
                return null === this._data
                    ? null
                    : ((t = 65536 * this._data.icon + this._data.size),
                      (i = this._cache[t] * this._data.scale),
                      (n = o(-this._data.angle)),
                      (r = e.subtract(this._data.point)),
                      (r = l(n, r)),
                      Math.abs(r.y) <= i / 2 &&
                      Math.abs(r.x) <= this._data.size / 2
                          ? new c(c.MOVEPOINT)
                          : null);
            }),
            inherit(r, h),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype.updateImpl = function() {
                h.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (r.prototype.renderer = function() {
                var e, t, i, n, r, a, h, d, c, u, f, g, v, w, y, m, x, b;
                return (
                    this._invalidated && this.updateImpl(),
                    (e = new p()),
                    this._points.length < 1
                        ? e
                        : ((t = this._source.properties()),
                          (i = {
                              point: this._points[0],
                              color: t.color.value(),
                              size: t.size.value(),
                              icon: t.icon.value(),
                              angle: t.angle.value(),
                              scale: t.scale.value(),
                              selected: this.isAnchorsRequired()
                          }),
                          (n = this._model),
                          (r = this._source),
                          this._iconRenderer.setData(i),
                          e.append(this._iconRenderer),
                          this.isAnchorsRequired() &&
                              ((a = 65536 * i.icon + i.size),
                              (h = this._cache[a]),
                              (d = i.size),
                              (c = this._points[0]),
                              (u = t.scale.value()),
                              (f = this._source.getAnchorLimit()),
                              (g = new s(Math.max(f, d) / 2, 0)),
                              (v = new s(0, Math.max(f, u * h) / 2)),
                              (w = o(t.angle.value())),
                              (g = l(w, g)),
                              (v = l(w, v)),
                              (y = c.add(g)),
                              (y.data = 0),
                              (m = c.subtract(g)),
                              (m.data = 1),
                              (x = c.add(v)),
                              (x.data = 2),
                              (x.square = !0),
                              (b = c.subtract(v)),
                              (b.data = 3),
                              (b.square = !0),
                              (i = {
                                  points: [y, m],
                                  width: n.timeScale().width(),
                                  height: r.priceScale().height(),
                                  color: "#808080",
                                  linewidth: 1,
                                  linestyle: CanvasEx.LINESTYLE_DASHED,
                                  extendleft: !1,
                                  extendright: !1,
                                  leftend: _.Normal,
                                  rightend: _.Normal
                              }),
                              this._dashRenderer.setData(i),
                              e.append(this._dashRenderer),
                              e.append(
                                  this.createLineAnchor({points: [y, m, x, b]})
                              )),
                          e)
                );
            }),
            (t.IconPaneView = r);
    },
    899: function(e, t, i) {
        "use strict";
        function n() {}
        function r(e) {
            (this._source = e), (this._data = null);
        }
        function s(e, t) {
            l.call(this, e, t),
                (this._rendererSource = new n()),
                (this._invalidated = !0),
                (this._renderer = new r(this._rendererSource));
        }
        var a = i(1).Point,
            o = i(49).pointInRectangle,
            l = i(12).LineSourcePaneView,
            h = i(27).TextRenderer,
            d = i(74).SelectionRenderer,
            c = i(4),
            p = i(8).CompositeRenderer,
            _ = i(19);
        (n.prototype.update = function(e) {
            (this._data &&
                (!this._data ||
                    (e.markerColor === this._data.markerColor &&
                        e.width === this._data.width &&
                        e.height === this._data.height))) ||
                this._createSource(e.width, e.height, e.markerColor),
                (this._data = e);
        }),
            (n.prototype._createSource = function(e, t, i) {
                var n, r;
                (this._sourceCanvas = document.createElement("canvas")),
                    (this._sourceCanvas.width = e),
                    (this._sourceCanvas.height = t),
                    (this._translate = new a(-e / 2, 0.5 - t)),
                    this._translate.x % 1 == 0 && (this._translate.x += 0.5),
                    (n = this._sourceCanvas.getContext("2d")),
                    (r = 0.6 * e),
                    (n.fillStyle = i),
                    n.beginPath(),
                    n.moveTo(e / 2, t),
                    n.quadraticCurveTo(e, e / 1.15, e, e / 2),
                    n.arc(e / 2, e / 2, e / 2, 0, Math.PI, !0),
                    n.quadraticCurveTo(0, e / 1.15, e / 2, t),
                    n.fill(),
                    (n.globalCompositeOperation = "destination-out"),
                    n.beginPath(),
                    n.moveTo((e - r) / 2, e / 2),
                    n.arc(e / 2, e / 2, r / 2, 0, 2 * Math.PI),
                    n.fill();
            }),
            (n.prototype.drawOn = function(e) {
                var t = new a(
                    Math.round(this._data.point.x),
                    Math.round(this._data.point.y)
                ).add(this._translate);
                e.drawImage(this._sourceCanvas, t.x, t.y);
            }),
            (n.prototype.hasPoint = function(e) {
                var t = this._data.point.add(this._translate),
                    i = new a(
                        this._data.point.x - this._translate.x,
                        this._data.point.y
                    );
                return o(e, t, i);
            }),
            (r.prototype.setData = function(e) {
                this._data = e;
            }),
            (r.prototype.draw = function(e) {
                null !== this._data &&
                    (this._source.drawOn(e),
                    this._data.tooltipVisible && this.drawTooltipOn(e));
            }),
            (r.prototype.drawTooltipOn = function(e) {
                var t, i, n, r, s, a, o, l, d, c, p, u, f, g, v;
                for (
                    e.save(),
                        t = (this._data.text + "")
                            .replace(/^\s+|\s+$/g, "")
                            .replace(/[\r\n]+/g, "\n"),
                        e.font =
                            (this._data.bold ? "bold " : "") +
                            (this._data.italic ? "italic " : "") +
                            this._data.fontSize +
                            "px " +
                            this._data.font,
                        i =
                            this._data.tooltipWidth -
                            2 * this._data.tooltipPadding,
                        n = h.prototype.wordWrap(t, i, e.font),
                        r = this._data.point,
                        s = this._data.tooltipLineSpacing,
                        a = this._data.tooltipWidth,
                        o =
                            n.length * this._data.fontSize +
                            2 * this._data.tooltipPadding,
                        n.length > 1 && (o += (n.length - 1) * s),
                        l = Math.round(r.x - a / 2),
                        d = Math.round(r.y - this._data.height - o - 8),
                        c = r.x < 20 || r.x + 20 > this._data.vpWidth,
                        p = c ? null : "top",
                        u = c ? null : Math.round(r.x),
                        d < 10 ? (d = r.y + 13) : (p = "bottom"),
                        l < 10
                            ? (l += Math.abs(l - 10))
                            : l + a + 10 > this._data.vpWidth &&
                              (l -= l + a + 10 - this._data.vpWidth),
                        e.fillStyle = _.generateColor(
                            this._data.backgroundColor,
                            this._data.backgroundTransparency
                        ),
                        e.strokeStyle = this._data.markerColor,
                        e.lineWidth = 1,
                        e.beginPath(),
                        e.moveTo(l, d),
                        c ||
                            "top" !== p ||
                            (e.lineTo(u - 7, d),
                            e.lineTo(u, d - 7),
                            e.lineTo(u + 7, d)),
                        e.lineTo(l + a, d),
                        e.lineTo(l + a, d + o),
                        c ||
                            "bottom" !== p ||
                            (e.lineTo(u + 7, d + o),
                            e.lineTo(u, d + o + 7),
                            e.lineTo(u - 7, d + o)),
                        e.lineTo(l, d + o),
                        e.closePath(),
                        e.fill(),
                        e.stroke(),
                        e.textBaseline = "middle",
                        e.fillStyle = this._data.textColor,
                        f = l + this._data.tooltipPadding,
                        g =
                            d +
                            this._data.tooltipPadding +
                            this._data.fontSize / 2,
                        v = 0;
                    v < n.length;
                    v++
                )
                    e.fillText(n[v].replace(/^\s+/, ""), f, g),
                        (g += this._data.fontSize + s);
                e.restore();
            }),
            (r.prototype.hitTest = function(e) {
                return null !== this._data && this._source.hasPoint(e)
                    ? new c(c.MOVEPOINT)
                    : null;
            }),
            inherit(s, l),
            (s.prototype.update = function() {
                this._invalidated = !0;
            }),
            (s.prototype.updateImpl = function() {
                l.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (s.prototype.isLabelVisible = function() {
                return this.isHoveredSource() || this.isSelectedSource();
            }),
            (s.prototype.renderer = function() {
                var e, t, i, n, r, s, a;
                return (
                    this._invalidated && this.updateImpl(),
                    (e = new p()),
                    (t = this._source.properties()),
                    (i = t.locked && t.locked.value()),
                    (n = i ? this._source.fixedPoints() : this._points),
                    n.length < 1
                        ? e
                        : ((r = this.isLabelVisible()),
                          (s = r),
                          (a = $.extend(t.state(), {
                              point: n[0],
                              width: 24,
                              height: 32,
                              tooltipVisible: s,
                              vpWidth: this._model.m_timeScale.m_width,
                              vpHeight: this._source.m_priceScale.m_height,
                              tooltipWidth: this._source.getTooltipWidth(),
                              tooltipPadding: this._source.getTooltipPadding(),
                              tooltipLineSpacing: this._source.getTooltipLineSpacing()
                          })),
                          this._rendererSource.update(a),
                          this._renderer.setData(a),
                          e.append(this._renderer),
                          r && e.append(new d({points: n})),
                          e)
                );
            }),
            (t.NotePaneView = s);
    },
    900: function(e, t, i) {
        "use strict";
        function n(e, t) {
            (this._data = null), (this._cache = e), (this._adapter = t);
        }
        function r(e, t) {
            a.call(this, e, t),
                (this._rendererCache = {}),
                (this._renderer = new n(this._rendererCache, e._adapter));
        }
        var s = i(132),
            a = i(12).LineSourcePaneView,
            o = i(4),
            l = i(481).splitThousands;
        (n.prototype.setData = function(e) {
            this._data = e;
        }),
            (n.prototype._height = function() {
                return Math.max(
                    20,
                    1 +
                        Math.max(
                            s.fontHeight(this._adapter.getBodyFont()),
                            s.fontHeight(this._adapter.getQuantityFont())
                        )
                );
            }),
            (n.prototype._bodyWidth = function(e) {
                var t, i, n;
                return 0 === this._adapter.getText().length
                    ? 0
                    : (e.save(),
                      (e.font = this._adapter.getBodyFont()),
                      (t = 10),
                      (i = 10),
                      (n = e.measureText(this._adapter.getText()).width),
                      e.restore(),
                      Math.round(t + i + n));
            }),
            (n.prototype._getQuantity = function() {
                return l(this._adapter.getQuantity(), " ");
            }),
            (n.prototype._quantityWidth = function(e) {
                var t, i;
                return 0 === this._getQuantity().length
                    ? 0
                    : (e.save(),
                      (e.font = this._adapter.getQuantityFont()),
                      (t = 10),
                      (i = e.measureText(this._getQuantity()).width),
                      e.restore(),
                      Math.round(Math.max(this._height(), t + i)));
            }),
            (n.prototype._cancelButtonWidth = function() {
                return this._adapter.isOnCancelCallbackPresent()
                    ? this._height()
                    : 0;
            }),
            (n.prototype._drawLines = function(e, t, i, n, r) {
                e.save(),
                    (e.strokeStyle = this._adapter.getLineColor()),
                    (e.lineStyle = this._adapter.getLineStyle()),
                    (e.lineWidth = this._adapter.getLineWidth()),
                    CanvasEx.drawLine(e, i, n, r, n),
                    this._adapter.getExtendLeft() &&
                        CanvasEx.drawLine(e, 0, n, t, n),
                    e.restore();
            }),
            (n.prototype._drawMovePoints = function(e, t, i) {
                var n, r, s, a, o, l, h, d;
                for (
                    e.save(),
                        e.strokeStyle = this._adapter.getBodyBorderColor(),
                        e.fillStyle = this._adapter.getBodyBorderColor(),
                        n = 2,
                        r = 4,
                        s = 5,
                        a = t + r,
                        o = a + n,
                        l = Math.floor((this._height() - 2 * s) / 2) + 1,
                        h = 0;
                    h < l;
                    ++h
                )
                    (d = i + s + 2 * h), CanvasEx.drawLine(e, a, d, o, d);
                e.restore();
            }),
            (n.prototype._drawBody = function(e, t, i) {
                var n, r;
                (e.strokeStyle = this._adapter.getBodyBorderColor()),
                    (e.fillStyle = this._adapter.getBodyBackgroundColor()),
                    (n = this._bodyWidth(e)),
                    (r = this._height()),
                    e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1),
                    e.strokeRect(t, i, n, r);
            }),
            (n.prototype._drawBodyText = function(e, t, i) {
                var n, r, s;
                (e.textAlign = "center"),
                    (e.textBaseline = "middle"),
                    (e.font = this._adapter.getBodyFont()),
                    (e.fillStyle = this._adapter.getBodyTextColor()),
                    (n = 5),
                    (r = t + this._bodyWidth(e) / 2),
                    (s = i + this._height() / 2),
                    e.fillText(this._adapter.getText(), n + r - 2, s);
            }),
            (n.prototype._drawQuantity = function(e, t, i, n) {
                var r, s;
                e.save(),
                    (e.strokeStyle = this._adapter.getQuantityBorderColor()),
                    (e.fillStyle = this._adapter.getQuantityBackgroundColor()),
                    (r = this._quantityWidth(e)),
                    (s = this._height()),
                    e.fillRect(t + 0.5, i + 0.5, r - 1, s - 1),
                    n &&
                        e.clip &&
                        (e.beginPath(),
                        e.rect(t + 0.5, i - 0.5, r + 1, s + 1),
                        e.clip()),
                    e.strokeRect(t, i, r, s),
                    e.restore();
            }),
            (n.prototype._drawQuantityText = function(e, t, i) {
                var n, r;
                e.save(),
                    (e.textAlign = "center"),
                    (e.textBaseline = "middle"),
                    (e.font = this._adapter.getQuantityFont()),
                    (e.fillStyle = this._adapter.getQuantityTextColor()),
                    (n = t + this._quantityWidth(e) / 2),
                    (r = i + this._height() / 2),
                    e.fillText(this._getQuantity(), n, r),
                    e.restore();
            }),
            (n.prototype._drawCancelButton = function(e, t, i, n) {
                var r, s, a, o, l, h, d;
                (e.strokeStyle = this._adapter.getCancelButtonBorderColor()),
                    (e.fillStyle = this._adapter.getCancelButtonBackgroundColor()),
                    (r = this._cancelButtonWidth()),
                    (s = this._height()),
                    e.fillRect(t + 0.5, i + 0.5, r - 1, s - 1),
                    this._adapter._blocked &&
                        ((e.fillStyle = "rgba(140, 140, 140, 0.75)"),
                        e.fillRect(t + 0.5, i + 0.5, r - 1, s - 1)),
                    e.save(),
                    n &&
                        e.clip &&
                        (e.beginPath(),
                        e.rect(t + 0.5, i - 0.5, r + 1, s + 1),
                        e.clip()),
                    e.strokeRect(t, i, r, s),
                    e.restore(),
                    (a = t + r),
                    (o = i + s),
                    (e.strokeStyle = this._adapter.getCancelButtonIconColor()),
                    (l = 8),
                    (h = (this._cancelButtonWidth() - l) / 2),
                    (d = (this._height() - l) / 2),
                    CanvasEx.drawPoly(
                        e,
                        [{x: t + h, y: i + d}, {x: a - h, y: o - d}],
                        !0
                    ),
                    CanvasEx.drawPoly(
                        e,
                        [{x: a - h, y: i + d}, {x: t + h, y: o - d}],
                        !0
                    );
            }),
            (n.prototype.draw = function(e) {
                var t, i, n, r, s, a, o, l, h, d, c;
                null === this._data ||
                    !this._data.points ||
                    this._data.points.length < 1 ||
                    ((t = this._data.width),
                    (i = this._bodyWidth(e)),
                    (n = this._quantityWidth(e)),
                    (r = i + n + this._cancelButtonWidth()),
                    (s = t - r),
                    (a = Math.max(this._adapter.getLineLength() / 100 * t, 1)),
                    (o = Math.round(t - Math.min(s, a))),
                    (l = o - r),
                    (h = Math.round(this._data.points[0].y)),
                    (d = Math.round(h - (this._height() + 1) / 2)),
                    (this._cache.bodyRight = l + i),
                    (this._cache.quantityRight = l + i + n),
                    (this._cache.top = d),
                    (this._cache.bottom = d + this._height()),
                    (this._cache.left = l),
                    (this._cache.right = o),
                    this._drawLines(e, l, o, h, t),
                    (c = !1),
                    0 !== i &&
                        (this._drawBody(e, l, d),
                        this._drawMovePoints(e, l, d),
                        this._drawBodyText(e, l, d),
                        (c = !0)),
                    0 !== n &&
                        (this._drawQuantity(e, l + i, d, c),
                        this._drawQuantityText(e, l + i, d),
                        (c = !0)),
                    0 !== this._cancelButtonWidth() &&
                        this._drawCancelButton(e, l + i + n, d, c));
            }),
            (n.prototype.hitTest = function(e) {
                return null === this._data || 0 === this._data.points.length
                    ? null
                    : e.y < this._cache.top || e.y > this._cache.bottom
                        ? null
                        : this._adapter._blocked &&
                          e.x >= this._cache.left &&
                          e.x < this._cache.right
                            ? new o(o.CUSTOM, {})
                            : this._adapter._editable &&
                              e.x >= this._cache.left &&
                              e.x < this._cache.bodyRight
                                ? 0 === this._adapter.getTooltip().length
                                    ? new o(o.MOVEPOINT)
                                    : new o(o.MOVEPOINT, {
                                          tooltip: {
                                              text: this._adapter.getTooltip(),
                                              rect: {
                                                  x: this._cache.left,
                                                  y: this._cache.top,
                                                  w:
                                                      this._cache.bodyRight -
                                                      this._cache.left,
                                                  h:
                                                      this._cache.bottom -
                                                      this._cache.top
                                              }
                                          }
                                      })
                                : this._adapter._editable &&
                                  e.x >= this._cache.bodyRight &&
                                  e.x < this._cache.quantityRight
                                    ? new o(o.CUSTOM, {
                                          mouseDownHandler: this._adapter.callOnModify.bind(
                                              this._adapter
                                          ),
                                          tooltip: {
                                              text: $.t("Edit Order"),
                                              rect: {
                                                  x: this._cache.bodyRight,
                                                  y: this._cache.top,
                                                  w:
                                                      this._cache
                                                          .quantityRight -
                                                      this._cache.bodyRight,
                                                  h:
                                                      this._cache.bottom -
                                                      this._cache.top
                                              }
                                          }
                                      })
                                    : this._adapter._editable &&
                                      e.x >= this._cache.quantityRight &&
                                      e.x < this._cache.right
                                        ? new o(o.CUSTOM, {
                                              mouseDownHandler: this._adapter.callOnCancel.bind(
                                                  this._adapter
                                              ),
                                              tooltip: {
                                                  text: $.t("Cancel Order"),
                                                  rect: {
                                                      x: this._cache
                                                          .quantityRight,
                                                      y: this._cache.top,
                                                      w:
                                                          this._cache.right -
                                                          this._cache
                                                              .quantityRight,
                                                      h:
                                                          this._cache.bottom -
                                                          this._cache.top
                                                  }
                                              }
                                          })
                                        : null;
            }),
            inherit(r, a),
            (r.prototype.renderer = function() {
                return (
                    this._invalidated &&
                        (this._updateImpl(), (this._invalidated = !1)),
                    this._renderer.setData({
                        points: this._points,
                        width: this._model.timeScale().width()
                    }),
                    this._renderer
                );
            }),
            (t.OrderPaneView = r);
    },
    902: function(e, t, i) {
        "use strict";
        function n(e, t) {
            r.call(this, e, t),
                (this._invalidated = !0),
                (this._renderer = new s()),
                (this._p3 = null),
                (this._p4 = null);
        }
        var r = i(12).LineSourcePaneView,
            s = i(314).ParallelChannelRenderer,
            a = i(105).PaneRendererClockIcon,
            o = i(8).CompositeRenderer;
        inherit(n, r),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n, s, a, o, l, h, d, c;
                r.prototype._updateImpl.call(this),
                    this._source.priceScale() &&
                        !this._source.priceScale().isEmpty() &&
                        0 !== this._source.points().length &&
                        (this._source._priceOffset ||
                            this._source.calculatePriceDiff(),
                        3 === this._points.length &&
                            this._source._priceOffset &&
                            ((e = this._points[0]),
                            (t = this._points[1]),
                            (i =
                                this._source._priceOffset +
                                this._source.points()[0].price),
                            (n =
                                this._source._priceOffset +
                                this._source.points()[1].price),
                            (this._p3 = e.clone()),
                            (this._p4 = t.clone()),
                            (s = this._source.priceScale()),
                            s.isLog()
                                ? ((a =
                                      0.5 * (i + n) -
                                      this._source._priceOffset),
                                  (o = 0.5 * (i + n)),
                                  (l = this._source
                                      .priceScale()
                                      .priceToCoordinate(a)),
                                  (h = this._source
                                      .priceScale()
                                      .priceToCoordinate(o)),
                                  (d = h - l),
                                  (this._p3.y += d),
                                  (this._p4.y += d))
                                : (s.isPercent() &&
                                      ((c = this._source
                                          .ownerSource()
                                          .firstValue()),
                                      (i = s
                                          .priceRange()
                                          .convertToPercent(i, c)),
                                      (n = s
                                          .priceRange()
                                          .convertToPercent(n, c))),
                                  (this._p3.y = this._source
                                      .priceScale()
                                      .priceToCoordinate(i)),
                                  (this._p4.y = this._source
                                      .priceScale()
                                      .priceToCoordinate(n)))));
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, r, s;
                return (
                    this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = {}),
                    (e.points = []),
                    this._points.length > 1 &&
                        (e.points.push(this._points[0]),
                        e.points.push(this._points[1])),
                    this._points.length > 2 &&
                        null !== this._p3 &&
                        null !== this._p4 &&
                        (e.points.push(this._p3), e.points.push(this._p4)),
                    (e.color = this._source.properties().linecolor.value()),
                    (e.width = this._model.timeScale().width()),
                    (e.height = this._source.priceScale().height()),
                    (t = this._source.properties()),
                    (e.linewidth = t.linewidth.value()),
                    (e.linestyle = t.linestyle.value()),
                    (e.extendleft = t.extendLeft.value()),
                    (e.extendright = t.extendRight.value()),
                    (e.fillBackground = t.fillBackground.value()),
                    (e.backcolor = t.backgroundColor.value()),
                    (e.transparency = t.transparency.value()),
                    (e.showMidline = t.showMidline.value()),
                    (e.midlinewidth = t.midlinewidth.value()),
                    (e.midlinestyle = t.midlinestyle.value()),
                    (e.midcolor = t.midlinecolor.value()),
                    (e.fillBackground = t.fillBackground.value()),
                    (e.hittestOnBackground = !0),
                    this._renderer.setData(e),
                    (i = new o()),
                    i.append(this._renderer),
                    this.isAnchorsRequired() &&
                        ((n = []),
                        this._points[0] && n.push(this._points[0]),
                        this._points[1] && n.push(this._points[1]),
                        this._p3 &&
                            (n.push(this._p3.add(this._p4).scaled(0.5)),
                            (n[n.length - 1].data = n.length - 1)),
                        (r = 3 === this._points.length && !this._p3),
                        this._model.lineBeingCreated() !== this._source ||
                            r ||
                            n.pop(),
                        i.append(this.createLineAnchor({points: n}))),
                    !TradingView.printing &&
                        this._source.hasAlert.value() &&
                        !this._model.readOnly() &&
                        this._points.length >= 2 &&
                        ((s = this._points),
                        this._source.getAlertIsActive(function(e) {
                            i.append(
                                new a({
                                    point1: s[0],
                                    point2: s[1],
                                    color: e
                                        ? t.linecolor.value()
                                        : defaults(
                                              "chartproperties.alertsProperties.drawingIcon.color"
                                          )
                                })
                            );
                        })),
                    i
                );
            }),
            (t.ParallelChannelPaneView = n);
    },
    904: function(e, t, i) {
        "use strict";
        function n(e, t) {
            r.call(this, e, t),
                (this._invalidated = !0),
                (this._medianRenderer = new a()),
                (this._sideRenderer = new a());
        }
        var r = i(12).LineSourcePaneView,
            s = i(229).ChannelRenderer,
            a = i(16).TrendLineRenderer,
            o = i(4),
            l = i(8).CompositeRenderer,
            h = i(18).LineEnd;
        inherit(n, r),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                r.prototype._updateImpl.call(this),
                    0 !== this._floatPoints.length &&
                        (3 === this._floatPoints.length
                            ? ((this._medianPoint = this._floatPoints[1]
                                  .add(this._floatPoints[2])
                                  .scaled(0.5)),
                              (this._medianPoint.data = 3))
                            : 2 === this._floatPoints.length
                                ? ((this._medianPoint = this._floatPoints[1]),
                                  (this._medianPoint.data = 3))
                                : ((this._medianPoint = this._floatPoints[0]),
                                  (this._medianPoint.data = 3)));
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, r, d, c, p, _, u, f, g, v, w, y, m;
                if (
                    (this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = new l()),
                    this._floatPoints.length < 2)
                )
                    return e;
                if (!this._medianPoint) return e;
                if (
                    ((t = {
                        points: [this._floatPoints[0], this._medianPoint],
                        width: this._model.timeScale().width(),
                        height: this._source.priceScale().height(),
                        color: this._source.properties().median.color.value(),
                        linewidth: this._source
                            .properties()
                            .median.linewidth.value(),
                        linestyle: this._source
                            .properties()
                            .median.linestyle.value(),
                        extendleft: !1,
                        extendright: !0,
                        leftend: h.Normal,
                        rightend: h.Normal
                    }),
                    this._medianRenderer.setData(t),
                    e.append(this._medianRenderer),
                    this._floatPoints.length < 3)
                )
                    return this.addAnchors(e), e;
                for (
                    i = {
                        points: [this._floatPoints[1], this._floatPoints[2]],
                        width: this._model.timeScale().width(),
                        height: this._source.priceScale().height(),
                        color: this._source.properties().median.color.value(),
                        linewidth: this._source
                            .properties()
                            .median.linewidth.value(),
                        linestyle: this._source
                            .properties()
                            .median.linestyle.value(),
                        extendleft: !1,
                        extendright: !1,
                        leftend: h.Normal,
                        rightend: h.Normal
                    },
                        this._sideRenderer.setData(i),
                        e.append(this._sideRenderer),
                        n = 0,
                        r = this._floatPoints[2]
                            .subtract(this._floatPoints[1])
                            .scaled(0.5),
                        d = this._source.properties().fillBackground.value(),
                        c = this._source.properties().transparency.value(),
                        p = 0;
                    p <= 8;
                    p++
                )
                    (_ = "level" + p),
                        (u = this._source.properties()[_]),
                        u.visible.value() &&
                            ((f = this._medianPoint.addScaled(
                                r,
                                u.coeff.value()
                            )),
                            (g = this._medianPoint.addScaled(
                                r,
                                -u.coeff.value()
                            )),
                            d &&
                                ((v = {}),
                                (v.width = this._model.timeScale().width()),
                                (v.height = this._source.priceScale().height()),
                                (v.p1 = this._floatPoints[0]),
                                (v.p2 = f),
                                (v.p3 = this._floatPoints[0]),
                                (v.p4 = this._medianPoint.addScaled(r, n)),
                                (v.color = u.color.value()),
                                (v.transparency = c),
                                (v.hittestOnBackground = !0),
                                (w = new s()),
                                w.setData(v),
                                e.append(w),
                                (v = {}),
                                (v.width = this._model.timeScale().width()),
                                (v.height = this._source.priceScale().height()),
                                (v.p1 = this._floatPoints[0]),
                                (v.p2 = g),
                                (v.p3 = this._floatPoints[0]),
                                (v.p4 = this._medianPoint.addScaled(r, -n)),
                                (v.color = u.color.value()),
                                (v.transparency = c),
                                (v.hittestOnBackground = !0),
                                (w = new s()),
                                w.setData(v),
                                e.append(w)),
                            (n = u.coeff.value()),
                            (y = {
                                points: [this._floatPoints[0], f],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: u.color.value(),
                                linewidth: u.linewidth.value(),
                                linestyle: u.linestyle.value(),
                                extendleft: !1,
                                extendright: !0,
                                leftend: h.Normal,
                                rightend: h.Normal
                            }),
                            (w = new a()),
                            w.setData(y),
                            w.setHitTest(new o(o.MOVEPOINT, null, p)),
                            e.append(w),
                            (m = {
                                points: [this._floatPoints[0], g],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: u.color.value(),
                                linewidth: u.linewidth.value(),
                                linestyle: u.linestyle.value(),
                                extendleft: !1,
                                extendright: !0,
                                leftend: h.Normal,
                                rightend: h.Normal
                            }),
                            (w = new a()),
                            w.setData(m),
                            w.setHitTest(new o(o.MOVEPOINT, null, p)),
                            e.append(w));
                return this.addAnchors(e), e;
            }),
            (t.PitchfanLinePaneView = n);
    },
    906: function(e, t, i) {
        "use strict";
        function n(e, t) {
            l.call(this, e, t),
                (this._invalidated = !0),
                (this._medianRenderer = new h()),
                (this._sideRenderer = new h());
        }
        function r(e, t) {
            n.call(this, e, t),
                (this._invalidated = !0),
                (this._backSideRenderer = new h());
        }
        function s(e, t) {
            r.call(this, e, t), (this._invalidated = !0);
        }
        function a(e, t) {
            n.call(this, e, t),
                (this._invalidated = !0),
                (this._backSideRenderer = new h()),
                (this._centerRenderer = new h());
        }
        var o = i(1).Point,
            l = i(12).LineSourcePaneView,
            h = i(16).TrendLineRenderer,
            d = i(229).ChannelRenderer,
            c = i(4),
            p = i(8).CompositeRenderer,
            _ = i(18).LineEnd;
        inherit(n, l),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                l.prototype._updateImpl.call(this),
                    0 !== this._floatPoints.length &&
                        (3 === this._floatPoints.length
                            ? ((this._medianPoint = this._floatPoints[1]
                                  .add(this._floatPoints[2])
                                  .scaled(0.5)),
                              (this._medianPoint.data = 3))
                            : 2 === this._floatPoints.length
                                ? ((this._medianPoint = this._floatPoints[1]),
                                  (this._medianPoint.data = 3))
                                : ((this._medianPoint = this._floatPoints[0]),
                                  (this._medianPoint.data = 3)));
            }),
            (n.prototype.renderer = function() {
                var e,
                    t,
                    i,
                    n,
                    r,
                    s,
                    a,
                    o,
                    l,
                    u,
                    f,
                    g,
                    v,
                    w,
                    y,
                    m,
                    x,
                    b,
                    S,
                    P,
                    R;
                if (
                    (this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = new p()),
                    this._floatPoints.length < 2)
                )
                    return e;
                if (!this._medianPoint) return e;
                if (
                    ((t = {
                        points: [this._floatPoints[0], this._medianPoint],
                        width: this._model.timeScale().width(),
                        height: this._source.priceScale().height(),
                        color: this._source.properties().median.color.value(),
                        linewidth: this._source
                            .properties()
                            .median.linewidth.value(),
                        linestyle: this._source
                            .properties()
                            .median.linestyle.value(),
                        extendleft: !1,
                        extendright: !0,
                        leftend: _.Normal,
                        rightend: _.Normal
                    }),
                    this._medianRenderer.setData(t),
                    e.append(this._medianRenderer),
                    this._floatPoints.length < 3)
                )
                    return this.addAnchors(e), e;
                for (
                    i = {
                        points: [this._floatPoints[1], this._floatPoints[2]],
                        width: this._model.timeScale().width(),
                        height: this._source.priceScale().height(),
                        color: this._source.properties().median.color.value(),
                        linewidth: this._source
                            .properties()
                            .median.linewidth.value(),
                        linestyle: this._source
                            .properties()
                            .median.linestyle.value(),
                        extendleft: !1,
                        extendright: !1,
                        leftend: _.Normal,
                        rightend: _.Normal
                    },
                        this._sideRenderer.setData(i),
                        e.append(this._sideRenderer),
                        n = this._floatPoints[2]
                            .subtract(this._floatPoints[1])
                            .scaled(0.5),
                        r = this._medianPoint.subtract(this._floatPoints[0]),
                        s = 0,
                        a = this._source.properties().fillBackground.value(),
                        o = this._source.properties().transparency.value(),
                        l = 0;
                    l <= 8;
                    l++
                )
                    (u = "level" + l),
                        (f = this._source.properties()[u]),
                        f.visible.value() &&
                            ((g = this._medianPoint.addScaled(
                                n,
                                f.coeff.value()
                            )),
                            (v = g.add(r)),
                            (w = this._medianPoint.addScaled(
                                n,
                                -f.coeff.value()
                            )),
                            (y = w.add(r)),
                            a &&
                                ((m = {}),
                                (m.p1 = g),
                                (m.p2 = v),
                                (m.p3 = this._medianPoint.addScaled(n, s)),
                                (m.p4 = m.p3.add(r)),
                                (m.color = f.color.value()),
                                (m.width = this._model.timeScale().width()),
                                (m.height = this._source.priceScale().height()),
                                (m.transparency = o),
                                (m.hittestOnBackground = !0),
                                (x = new d()),
                                x.setData(m),
                                e.append(x),
                                (m = {}),
                                (m.p1 = w),
                                (m.p2 = y),
                                (m.p3 = this._medianPoint.addScaled(n, -s)),
                                (m.p4 = m.p3.add(r)),
                                (m.color = f.color.value()),
                                (m.width = this._model.timeScale().width()),
                                (m.height = this._source.priceScale().height()),
                                (m.transparency = o),
                                (m.hittestOnBackground = !0),
                                (x = new d()),
                                x.setData(m),
                                e.append(x)),
                            (s = f.coeff.value()),
                            (b = {
                                points: [g, v],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: f.color.value(),
                                linewidth: f.linewidth.value(),
                                linestyle: f.linestyle.value(),
                                extendleft: !1,
                                extendright: !0,
                                leftend: _.Normal,
                                rightend: _.Normal
                            }),
                            (S = new h()),
                            S.setData(b),
                            S.setHitTest(new c(c.MOVEPOINT, null, l)),
                            e.append(S),
                            (P = {
                                points: [w, y],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: f.color.value(),
                                linewidth: f.linewidth.value(),
                                linestyle: f.linestyle.value(),
                                extendleft: !1,
                                extendright: !0,
                                leftend: _.Normal,
                                rightend: _.Normal
                            }),
                            (R = new h()),
                            R.setData(P),
                            R.setHitTest(new c(c.MOVEPOINT, null, l)),
                            e.append(R));
                return this.addAnchors(e), e;
            }),
            inherit(r, n),
            (r.prototype.renderer = function() {
                var e, t, i, n, r, s, a, o, l, u, f, g, v, w, y, m, x, b, S, P;
                if (
                    (this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = new p()),
                    this._floatPoints.length < 2)
                )
                    return e;
                if (
                    ((t = {
                        points: [this._floatPoints[0], this._floatPoints[1]],
                        width: this._model.timeScale().width(),
                        height: this._source.priceScale().height(),
                        color: this._source.properties().median.color.value(),
                        linewidth: this._source
                            .properties()
                            .median.linewidth.value(),
                        linestyle: this._source
                            .properties()
                            .median.linestyle.value(),
                        extendleft: !1,
                        extendright: !1,
                        leftend: _.Normal,
                        rightend: _.Normal
                    }),
                    this._backSideRenderer.setData(t),
                    e.append(this._backSideRenderer),
                    !this._medianPoint || !this._modifiedBase)
                )
                    return this.addAnchors(e), e;
                if (
                    ((i = {
                        points: [this._modifiedBase, this._medianPoint],
                        width: this._model.timeScale().width(),
                        height: this._source.priceScale().height(),
                        color: this._source.properties().median.color.value(),
                        linewidth: this._source
                            .properties()
                            .median.linewidth.value(),
                        linestyle: this._source
                            .properties()
                            .median.linestyle.value(),
                        extendleft: !1,
                        extendright: !0,
                        leftend: _.Normal,
                        rightend: _.Normal
                    }),
                    this._medianRenderer.setData(i),
                    e.append(this._medianRenderer),
                    this._floatPoints.length < 3)
                )
                    return this.addAnchors(e), e;
                for (
                    n = {
                        points: [this._floatPoints[1], this._floatPoints[2]],
                        width: this._model.timeScale().width(),
                        height: this._source.priceScale().height(),
                        color: this._source.properties().median.color.value(),
                        linewidth: this._source
                            .properties()
                            .median.linewidth.value(),
                        linestyle: this._source
                            .properties()
                            .median.linestyle.value(),
                        extendleft: !1,
                        extendright: !1,
                        leftend: _.Normal,
                        rightend: _.Normal
                    },
                        this._sideRenderer.setData(n),
                        e.append(this._sideRenderer),
                        r = this._floatPoints[2]
                            .subtract(this._floatPoints[1])
                            .scaled(0.5),
                        s = this._medianPoint.subtract(this._modifiedBase),
                        a = 0,
                        o = this._source.properties().fillBackground.value(),
                        l = this._source.properties().transparency.value(),
                        u = 0;
                    u <= 8;
                    u++
                )
                    (f = "level" + u),
                        (g = this._source.properties()[f]),
                        g.visible.value() &&
                            ((v = this._medianPoint.addScaled(
                                r,
                                g.coeff.value()
                            )),
                            (w = v.add(s)),
                            (y = this._medianPoint.addScaled(
                                r,
                                -g.coeff.value()
                            )),
                            (m = y.add(s)),
                            o &&
                                ((t = {}),
                                (t.p1 = v),
                                (t.p2 = w),
                                (t.p3 = this._medianPoint.addScaled(r, a)),
                                (t.p4 = t.p3.add(s)),
                                (t.color = g.color.value()),
                                (t.width = this._model.timeScale().width()),
                                (t.height = this._source.priceScale().height()),
                                (t.transparency = l),
                                (t.hittestOnBackground = !0),
                                (x = new d()),
                                x.setData(t),
                                e.append(x),
                                (t = {}),
                                (t.p1 = y),
                                (t.p2 = m),
                                (t.p3 = this._medianPoint.addScaled(r, -a)),
                                (t.p4 = t.p3.add(s)),
                                (t.color = g.color.value()),
                                (t.width = this._model.timeScale().width()),
                                (t.height = this._source.priceScale().height()),
                                (t.transparency = l),
                                (t.hittestOnBackground = !0),
                                (x = new d()),
                                x.setData(t),
                                e.append(x)),
                            (a = g.coeff.value()),
                            (b = {
                                points: [v, w],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: g.color.value(),
                                linewidth: g.linewidth.value(),
                                linestyle: g.linestyle.value(),
                                extendleft: !1,
                                extendright: !0,
                                leftend: _.Normal,
                                rightend: _.Normal
                            }),
                            (S = new h()),
                            S.setData(b),
                            S.setHitTest(new c(c.MOVEPOINT, null, u)),
                            e.append(S),
                            (P = {
                                points: [y, m],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: g.color.value(),
                                linewidth: g.linewidth.value(),
                                linestyle: g.linestyle.value(),
                                extendleft: !1,
                                extendright: !0,
                                leftend: _.Normal,
                                rightend: _.Normal
                            }),
                            (x = new h()),
                            x.setData(P),
                            x.setHitTest(new c(c.MOVEPOINT, null, u)),
                            e.append(x));
                return this.addAnchors(e), e;
            }),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype.updateImpl = function() {
                n.prototype.updateImpl.call(this),
                    this._floatPoints.length > 1 &&
                        (this._modifiedBase = this._floatPoints[0]
                            .add(this._floatPoints[1])
                            .scaled(0.5));
            }),
            inherit(s, r),
            (s.prototype.update = function() {
                this._invalidated = !0;
            }),
            (s.prototype.updateImpl = function() {
                var e, t, i;
                n.prototype.updateImpl.call(this),
                    this._floatPoints.length > 2 &&
                        ((e = this._floatPoints[0].x),
                        (t =
                            0.5 *
                            (this._floatPoints[0].y + this._floatPoints[1].y)),
                        (i = new o(e, t)),
                        (this._modifiedBase = i));
            }),
            inherit(a, n),
            (a.prototype.update = function() {
                this._invalidated = !0;
            }),
            (a.prototype.updateImpl = function() {
                n.prototype.updateImpl.call(this),
                    this._floatPoints.length > 1 &&
                        (this._modifiedBase = this._floatPoints[0]
                            .add(this._floatPoints[1])
                            .scaled(0.5));
            }),
            (a.prototype.renderer = function() {
                var e,
                    t,
                    i,
                    n,
                    r,
                    s,
                    a,
                    o,
                    l,
                    u,
                    f,
                    g,
                    v,
                    w,
                    y,
                    m,
                    x,
                    b,
                    S,
                    P,
                    R;
                if (
                    (this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = new p()),
                    this._floatPoints.length < 2)
                )
                    return e;
                if (!this._medianPoint || !this._modifiedBase)
                    return this.addAnchors(e), e;
                if (
                    (3 === this._floatPoints.length &&
                        ((t = {
                            points: [this._modifiedBase, this._floatPoints[2]],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: this._source
                                .properties()
                                .median.color.value(),
                            linewidth: this._source
                                .properties()
                                .median.linewidth.value(),
                            linestyle: this._source
                                .properties()
                                .median.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: _.Normal,
                            rightend: _.Normal
                        }),
                        this._medianRenderer.setData(t),
                        e.append(this._medianRenderer)),
                    (i = {
                        points: [this._floatPoints[0], this._floatPoints[1]],
                        width: this._model.timeScale().width(),
                        height: this._source.priceScale().height(),
                        color: this._source.properties().median.color.value(),
                        linewidth: this._source
                            .properties()
                            .median.linewidth.value(),
                        linestyle: this._source
                            .properties()
                            .median.linestyle.value(),
                        extendleft: !1,
                        extendright: !1,
                        leftend: _.Normal,
                        rightend: _.Normal
                    }),
                    this._backSideRenderer.setData(i),
                    e.append(this._backSideRenderer),
                    this._floatPoints.length < 3)
                )
                    return this.addAnchors(e), e;
                for (
                    n = {
                        points: [this._floatPoints[1], this._floatPoints[2]],
                        width: this._model.timeScale().width(),
                        height: this._source.priceScale().height(),
                        color: this._source.properties().median.color.value(),
                        linewidth: this._source
                            .properties()
                            .median.linewidth.value(),
                        linestyle: this._source
                            .properties()
                            .median.linestyle.value(),
                        extendleft: !1,
                        extendright: !1,
                        leftend: _.Normal,
                        rightend: _.Normal
                    },
                        this._sideRenderer.setData(n),
                        e.append(this._sideRenderer),
                        r = this._floatPoints[2]
                            .subtract(this._floatPoints[1])
                            .scaled(0.5),
                        s = this._floatPoints[2].subtract(this._modifiedBase),
                        a = 0,
                        o = this._source.properties().fillBackground.value(),
                        l = this._source.properties().transparency.value(),
                        u = {
                            points: [
                                this._medianPoint,
                                this._medianPoint.add(s)
                            ],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: this._source
                                .properties()
                                .median.color.value(),
                            linewidth: this._source
                                .properties()
                                .median.linewidth.value(),
                            linestyle: this._source
                                .properties()
                                .median.linestyle.value(),
                            extendleft: !1,
                            extendright: !0,
                            leftend: _.Normal,
                            rightend: _.Normal
                        },
                        this._centerRenderer.setData(u),
                        e.append(this._centerRenderer),
                        f = 0;
                    f <= 8;
                    f++
                )
                    (g = "level" + f),
                        (v = this._source.properties()[g]),
                        v.visible.value() &&
                            ((w = this._medianPoint.addScaled(
                                r,
                                v.coeff.value()
                            )),
                            (y = w.add(s)),
                            (m = this._medianPoint.addScaled(
                                r,
                                -v.coeff.value()
                            )),
                            (x = m.add(s)),
                            o &&
                                ((i = {}),
                                (i.p1 = w),
                                (i.p2 = y),
                                (i.p3 = this._medianPoint.addScaled(r, a)),
                                (i.p4 = i.p3.add(s)),
                                (i.color = v.color.value()),
                                (i.width = this._model.timeScale().width()),
                                (i.height = this._source.priceScale().height()),
                                (i.transparency = l),
                                (i.hittestOnBackground = !0),
                                (b = new d()),
                                b.setData(i),
                                e.append(b),
                                (i = {}),
                                (i.p1 = m),
                                (i.p2 = x),
                                (i.p3 = this._medianPoint.addScaled(r, -a)),
                                (i.p4 = i.p3.add(s)),
                                (i.color = v.color.value()),
                                (i.width = this._model.timeScale().width()),
                                (i.height = this._source.priceScale().height()),
                                (i.transparency = l),
                                (i.hittestOnBackground = !0),
                                (b = new d()),
                                b.setData(i),
                                e.append(b)),
                            (a = v.coeff.value()),
                            (S = {
                                points: [w, y],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: v.color.value(),
                                linewidth: v.linewidth.value(),
                                linestyle: v.linestyle.value(),
                                extendleft: !1,
                                extendright: !0,
                                leftend: _.Normal,
                                rightend: _.Normal
                            }),
                            (P = new h()),
                            P.setData(S),
                            P.setHitTest(new c(c.MOVEPOINT, null, f)),
                            e.append(P),
                            (R = {
                                points: [m, x],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: v.color.value(),
                                linewidth: v.linewidth.value(),
                                linestyle: v.linestyle.value(),
                                extendleft: !1,
                                extendright: !0,
                                leftend: _.Normal,
                                rightend: _.Normal
                            }),
                            (b = new h()),
                            b.setData(R),
                            b.setHitTest(new c(c.MOVEPOINT, null, f)),
                            e.append(b));
                return this.addAnchors(e), e;
            }),
            (t.PitchforkLinePaneView = n),
            (t.SchiffPitchforkLinePaneView = r),
            (t.SchiffPitchfork2LinePaneView = s),
            (t.InsidePitchforkLinePaneView = a);
    },
    907: function(e, t, i) {
        "use strict";
        function n(e, t) {
            r.call(this, e, t),
                (this._invalidated = !0),
                (this._renderer = new s());
        }
        var r = i(12).LineSourcePaneView,
            s = i(164),
            a = i(8).CompositeRenderer;
        inherit(n, r),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                r.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (n.prototype.renderer = function() {
                var e, t;
                return (
                    this._invalidated && this.updateImpl(),
                    (e = {}),
                    (e.points = this._points),
                    (e.color = this._source.properties().linecolor.value()),
                    (e.linewidth = this._source.properties().linewidth.value()),
                    (e.linestyle = this._source.properties().linestyle.value()),
                    (e.filled = this._source.properties().filled.value()),
                    (e.backcolor = this._source
                        .properties()
                        .backgroundColor.value()),
                    (e.fillBackground = this._source
                        .properties()
                        .fillBackground.value()),
                    (e.transparency = this._source
                        .properties()
                        .transparency.value()),
                    this._renderer.setData(e),
                    this.isAnchorsRequired()
                        ? ((t = new a()),
                          t.append(this._renderer),
                          this.addAnchors(t),
                          t)
                        : this._renderer
                );
            }),
            (t.PolylinePaneView = n);
    },
    909: function(e, t, i) {
        "use strict";
        function n(e, t) {
            (this._data = null), (this._cache = e), (this._adapter = t);
        }
        function r(e, t) {
            s.call(this, e, t),
                (this._rendererCache = {}),
                (this._renderer = new n(this._rendererCache, e._adapter));
        }
        var s = i(12).LineSourcePaneView,
            a = i(132),
            o = i(4),
            l = i(481).splitThousands;
        (n.prototype.setData = function(e) {
            this._data = e;
        }),
            (n.prototype._height = function() {
                return Math.max(
                    20,
                    1 +
                        Math.max(
                            a.fontHeight(this._adapter.getBodyFont()),
                            a.fontHeight(this._adapter.getQuantityFont())
                        )
                );
            }),
            (n.prototype._bodyWidth = function(e) {
                var t, i;
                return 0 === this._adapter.getText().length
                    ? 0
                    : (e.save(),
                      (e.font = this._adapter.getBodyFont()),
                      (t = 10),
                      (i = e.measureText(this._adapter.getText()).width),
                      e.restore(),
                      Math.round(t + i));
            }),
            (n.prototype._getQuantity = function() {
                return l(this._adapter.getQuantity(), " ");
            }),
            (n.prototype._quantityWidth = function(e) {
                var t, i;
                return 0 === this._getQuantity().length
                    ? 0
                    : (e.save(),
                      (e.font = this._adapter.getQuantityFont()),
                      (t = 10),
                      (i = e.measureText(this._getQuantity()).width),
                      e.restore(),
                      Math.round(Math.max(this._height(), t + i)));
            }),
            (n.prototype._reverseButtonWidth = function() {
                return this._adapter.isOnReverseCallbackPresent()
                    ? this._height()
                    : 0;
            }),
            (n.prototype._closeButtonWidth = function() {
                return this._adapter.isOnCloseCallbackPresent()
                    ? this._height()
                    : 0;
            }),
            (n.prototype._drawLines = function(e, t, i, n, r) {
                e.save(),
                    (e.strokeStyle = this._adapter.getLineColor()),
                    (e.lineStyle = this._adapter.getLineStyle()),
                    (e.lineWidth = this._adapter.getLineWidth()),
                    CanvasEx.drawLine(e, i, n, r, n),
                    this._adapter.getExtendLeft() &&
                        CanvasEx.drawLine(e, 0, n, t, n),
                    e.restore();
            }),
            (n.prototype._drawBody = function(e, t, i) {
                var n, r;
                (e.strokeStyle = this._adapter.getBodyBorderColor()),
                    (e.fillStyle = this._adapter.getBodyBackgroundColor()),
                    (n = this._bodyWidth(e)),
                    (r = this._height()),
                    e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1),
                    e.strokeRect(t, i, n, r);
            }),
            (n.prototype._drawBodyText = function(e, t, i) {
                var n, r;
                e.save(),
                    (e.textAlign = "center"),
                    (e.textBaseline = "middle"),
                    (e.font = this._adapter.getBodyFont()),
                    (e.fillStyle = this._adapter.getBodyTextColor()),
                    (n = t + this._bodyWidth(e) / 2),
                    (r = i + this._height() / 2),
                    e.fillText(this._adapter.getText(), n, r),
                    e.restore();
            }),
            (n.prototype._drawQuantity = function(e, t, i) {
                var n, r;
                (e.strokeStyle = this._adapter.getQuantityBorderColor()),
                    (e.fillStyle = this._adapter.getQuantityBackgroundColor()),
                    (n = this._quantityWidth(e)),
                    (r = this._height()),
                    e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1),
                    e.strokeRect(t, i, n, r);
            }),
            (n.prototype._drawQuantityText = function(e, t, i) {
                var n, r;
                e.save(),
                    (e.textAlign = "center"),
                    (e.textBaseline = "middle"),
                    (e.font = this._adapter.getQuantityFont()),
                    (e.fillStyle = this._adapter.getQuantityTextColor()),
                    (n = t + this._quantityWidth(e) / 2),
                    (r = i + this._height() / 2),
                    e.fillText(this._getQuantity(), n, r),
                    e.restore();
            }),
            (n.prototype._drawReverseButton = function(e, t, i) {
                var n, r, s, a, o, l, h;
                e.save(),
                    (e.strokeStyle = this._adapter.getReverseButtonBorderColor()),
                    (e.fillStyle = this._adapter.getReverseButtonBackgroundColor()),
                    (n = this._reverseButtonWidth()),
                    (r = this._height()),
                    e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1),
                    e.strokeRect(t, i, n, r),
                    (e.strokeStyle = this._adapter.getReverseButtonIconColor()),
                    (s = function(e, t) {
                        CanvasEx.drawLine(e, 0, 0, 0, t),
                            CanvasEx.drawLine(e, -1, 1, 1, 1),
                            CanvasEx.drawLine(e, -2, 2, 2, 2);
                    }),
                    (a = 6),
                    (o = 10),
                    (l = t + Math.round((this._reverseButtonWidth() - a) / 2)),
                    (h = i + 5),
                    e.save(),
                    e.translate(l, h),
                    s(e, o),
                    e.translate(a, o),
                    e.rotate(Math.PI),
                    s(e, o),
                    e.restore(),
                    this._adapter._blocked &&
                        ((e.fillStyle = "rgba(140, 140, 140, 0.75)"),
                        e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1)),
                    e.restore();
            }),
            (n.prototype._drawCloseButton = function(e, t, i) {
                var n, r, s, a, o, l, h;
                e.save(),
                    (e.strokeStyle = this._adapter.getCloseButtonBorderColor()),
                    (e.fillStyle = this._adapter.getCloseButtonBackgroundColor()),
                    (n = this._closeButtonWidth()),
                    (r = this._height()),
                    e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1),
                    e.strokeRect(t, i, n, r),
                    (s = t + n),
                    (a = i + r),
                    (e.strokeStyle = this._adapter.getCloseButtonIconColor()),
                    (o = 8),
                    (l = (this._closeButtonWidth() - o) / 2),
                    (h = (this._height() - o) / 2),
                    CanvasEx.drawPoly(
                        e,
                        [{x: t + l, y: i + h}, {x: s - l, y: a - h}],
                        !0
                    ),
                    CanvasEx.drawPoly(
                        e,
                        [{x: s - l, y: i + h}, {x: t + l, y: a - h}],
                        !0
                    ),
                    this._adapter._blocked &&
                        ((e.fillStyle = "rgba(140, 140, 140, 0.75)"),
                        e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1)),
                    e.restore();
            }),
            (n.prototype.draw = function(e) {
                var t, i, n, r, s, a, o, l, h, d, c;
                null === this._data ||
                    !this._data.points ||
                    this._data.points.length < 1 ||
                    ((t = this._data.width),
                    (i = this._bodyWidth(e)),
                    (n = this._quantityWidth(e)),
                    (r = this._reverseButtonWidth(e)),
                    (s = i + n + r + this._closeButtonWidth()),
                    (a = t - s),
                    (o = Math.max(this._adapter.getLineLength() / 100 * t, 1)),
                    (l = Math.round(t - Math.min(a, o))),
                    (h = l - s),
                    (d = Math.round(this._data.points[0].y)),
                    (c = Math.round(d - (this._height() + 1) / 2)),
                    (this._cache.bodyRight = h + i),
                    (this._cache.quantityRight = this._cache.bodyRight + n),
                    (this._cache.reverseButtonRight =
                        this._cache.quantityRight + r),
                    (this._cache.top = c),
                    (this._cache.bottom = c + this._height()),
                    (this._cache.left = h),
                    (this._cache.right = l),
                    this._drawLines(e, h, l, d, t),
                    0 !== i &&
                        (this._drawBody(e, h, c), this._drawBodyText(e, h, c)),
                    0 !== n &&
                        (this._drawQuantity(e, this._cache.bodyRight, c),
                        this._drawQuantityText(e, this._cache.bodyRight, c)),
                    0 !== r &&
                        this._drawReverseButton(
                            e,
                            this._cache.quantityRight,
                            c
                        ),
                    0 !== this._closeButtonWidth() &&
                        this._drawCloseButton(
                            e,
                            this._cache.reverseButtonRight,
                            c
                        ));
            }),
            (n.prototype.hitTest = function(e) {
                return null === this._data || 0 === this._data.points.length
                    ? null
                    : e.y < this._cache.top ||
                      e.y > this._cache.bottom ||
                      e.x < this._cache.left ||
                      this._cache.right < e.x
                        ? null
                        : this._adapter._blocked
                            ? new o(o.CUSTOM, {})
                            : e.x >= this._cache.bodyRight &&
                              e.x < this._cache.quantityRight &&
                              this._adapter._onModifyCallback
                                ? new o(o.CUSTOM, {
                                      mouseDownHandler: this._adapter.callOnModify.bind(
                                          this._adapter
                                      ),
                                      tooltip: {
                                          text: $.t("Edit Position"),
                                          rect: {
                                              x: this._cache.bodyRight,
                                              y: this._cache.top,
                                              w:
                                                  this._cache.quantityRight -
                                                  this._cache.bodyRight,
                                              h:
                                                  this._cache.bottom -
                                                  this._cache.top
                                          }
                                      }
                                  })
                                : e.x >= this._cache.quantityRight &&
                                  e.x < this._cache.reverseButtonRight
                                    ? new o(o.CUSTOM, {
                                          mouseDownHandler: this._adapter.callOnReverse.bind(
                                              this._adapter
                                          ),
                                          tooltip: {
                                              text: $.t("Reverse Position"),
                                              rect: {
                                                  x: this._cache.quantityRight,
                                                  y: this._cache.top,
                                                  w:
                                                      this._cache
                                                          .reverseButtonRight -
                                                      this._cache.quantityRight,
                                                  h:
                                                      this._cache.bottom -
                                                      this._cache.top
                                              }
                                          }
                                      })
                                    : e.x >= this._cache.reverseButtonRight &&
                                      e.x < this._cache.right
                                        ? new o(o.CUSTOM, {
                                              mouseDownHandler: this._adapter.callOnClose.bind(
                                                  this._adapter
                                              ),
                                              tooltip: {
                                                  text: $.t("Close Position"),
                                                  rect: {
                                                      x: this._cache
                                                          .reverseButtonRight,
                                                      y: this._cache.top,
                                                      w:
                                                          this._cache.right -
                                                          this._cache
                                                              .reverseButtonRight,
                                                      h:
                                                          this._cache.bottom -
                                                          this._cache.top
                                                  }
                                              }
                                          })
                                        : new o(o.REGULAR, {
                                              mouseDownHandler: function() {}
                                          });
            }),
            inherit(r, s),
            (r.prototype.renderer = function() {
                return (
                    this._invalidated &&
                        (this._updateImpl(), (this._invalidated = !1)),
                    this._renderer.setData({
                        points: this._points,
                        width: this._model.timeScale().width()
                    }),
                    this._renderer
                );
            }),
            (t.PositionPaneView = r);
    },
    911: function(e, t, i) {
        "use strict";
        function n() {
            (this._data = null),
                (this._targetFontSize1 = 11),
                (this._targetFontSize2 = 11),
                (this._targetFontSize3 = 14),
                (this._font = "Arial"),
                (this._sourceFontSize1 = 12),
                (this._sourceFontSize2 = 10);
        }
        function r(e, t) {
            h.call(this, e, t),
                (this._clockWhite = _(
                    "prediction-clock-white",
                    TradingView.wrapUrl("images/prediction-clock-white.png")
                )),
                (this._clockBlack = _(
                    "prediction-clock-black",
                    TradingView.wrapUrl("images/prediction-clock-black.png")
                )),
                (this._successIcon = _(
                    "prediction-success-white",
                    TradingView.wrapUrl("images/prediction-success-white.png")
                )),
                (this._failureIcon = _(
                    "prediction-failure-white",
                    TradingView.wrapUrl("images/prediction-failure-white.png")
                )),
                (this._percentageFormatter = new f()),
                (this._invalidated = !0),
                (this._renderer = new n());
        }
        var s = i(1).Point,
            a = i(53),
            o = a.parseRgb,
            l = a.rgbToBlackWhiteString,
            h = i(12).LineSourcePaneView,
            d = i(57).Interval,
            c = i(4),
            p = i(8).CompositeRenderer,
            _ = i(392),
            u = i(56),
            f = i(94).PercentageFormatter,
            g = i(228).DateFormatter,
            v = i(174).TimeFormatter,
            w = i(175).TimeSpanFormatter,
            y = i(19),
            m = i(487);
        (n.prototype.setData = function(e) {
            this._data = e;
        }),
            (n.prototype.drawBalloon = function(e, t, i, n, r, a) {
                var o,
                    l,
                    h = 6,
                    d = 5,
                    c = 5,
                    p = a || 20,
                    _ = 3;
                return (
                    e.beginPath(),
                    "down" === r
                        ? ((o = new s(t.x - p, t.y - h - c - n)),
                          e.moveTo(o.x + _, o.y),
                          e.lineTo(o.x + i - _, o.y),
                          e.arcTo(o.x + i, o.y, o.x + i, o.y + _, _),
                          e.lineTo(o.x + i, o.y + n - _),
                          e.arcTo(o.x + i, o.y + n, o.x + i - _, o.y + n, _),
                          e.lineTo(o.x + p + d, o.y + n),
                          e.lineTo(o.x + p, o.y + n + c),
                          e.lineTo(o.x + p - d, o.y + n),
                          e.lineTo(o.x + _, o.y + n),
                          e.arcTo(o.x, o.y + n, o.x, o.y + n - _, _),
                          e.lineTo(o.x, o.y + _),
                          e.arcTo(o.x, o.y, o.x + _, o.y, _),
                          o)
                        : ((l = new s(t.x - p, t.y + h + c + n)),
                          e.moveTo(l.x + _, l.y),
                          e.lineTo(l.x + i - _, l.y),
                          e.arcTo(l.x + i, l.y, l.x + i, l.y - _, _),
                          e.lineTo(l.x + i, l.y - n + _),
                          e.arcTo(l.x + i, l.y - n, l.x + i - _, l.y - n, _),
                          e.lineTo(l.x + p + d, l.y - n),
                          e.lineTo(l.x + p, l.y - n - c),
                          e.lineTo(l.x + p - d, l.y - n),
                          e.lineTo(l.x + _, l.y - n),
                          e.arcTo(l.x, l.y - n, l.x, l.y - n + _, _),
                          e.lineTo(l.x, l.y - _),
                          e.arcTo(l.x, l.y, l.x + _, l.y, _),
                          new s(l.x, l.y - n))
                );
            }),
            (n.prototype.drawTargetLabel = function(e) {
                var t,
                    i,
                    n,
                    r,
                    s,
                    a,
                    o,
                    l,
                    h,
                    d,
                    c,
                    p,
                    _,
                    u,
                    f,
                    g,
                    v,
                    w,
                    x,
                    b,
                    S,
                    P,
                    R = this._data.points[1];
                if (
                    (e.save(),
                    e.translate(0.5, 0.5),
                    (e.font =
                        "normal " + this._targetFontSize3 + "px " + this._font),
                    (t =
                        1.5 * this._targetFontSize1 +
                        1.5 * this._targetFontSize2 +
                        3),
                    (i = e.measureText(this._data.targetLine1).width),
                    (n = e.measureText(this._data.targetLine2).width),
                    (e.font =
                        "normal " + this._targetFontSize2 + "px " + this._font),
                    (r = e.measureText(this._data.targetLine3).width),
                    (s = e.measureText(this._data.targetLine4).width),
                    (a = Math.max(i + n, r + s + 10) + 20),
                    (o = "up" === this._data.direction ? "down" : "up"),
                    (l = R.x + a - e.canvas.width + 5),
                    (l = Math.max(20, Math.min(a - 15, l))),
                    (h = this.drawBalloon(e, R, a, t, o, l)),
                    e.save(),
                    (e.fillStyle = y.generateColor(
                        this._data.targetBackColor,
                        this._data.transparency
                    )),
                    e.fill(),
                    e.restore(),
                    e.save(),
                    (e.lineWidth = 2),
                    (e.strokeStyle = y.generateColor(
                        this._data.targetStrokeColor,
                        this._data.transparency
                    )),
                    e.stroke(),
                    e.restore(),
                    (d = 3),
                    e.beginPath(),
                    e.arc(R.x, R.y, d, 0, 2 * Math.PI, !1),
                    (e.fillStyle = this._data.centersColor),
                    e.fill(),
                    (e.textAlign = "left"),
                    (c = 6),
                    (p = 4),
                    (e.fillStyle = this._data.targetTextColor),
                    (e.font =
                        "normal " + this._targetFontSize3 + "px " + this._font),
                    e.fillText(
                        this._data.targetLine1,
                        h.x + c,
                        h.y + this._targetFontSize1 + p
                    ),
                    (_ = 13),
                    (u = 5),
                    e.fillText(
                        this._data.targetLine2,
                        h.x + c + i + u,
                        h.y + this._targetFontSize1 + p
                    ),
                    (e.font =
                        "normal " + this._targetFontSize2 + "px " + this._font),
                    (f =
                        h.y +
                        this._targetFontSize1 +
                        2 * p +
                        this._targetFontSize2),
                    e.fillText(this._data.targetLine3, h.x + c, f),
                    e.drawImage(
                        this._data.clockWhite,
                        h.x + c + r + 6,
                        f - this._targetFontSize2 + 3
                    ),
                    e.fillText(this._data.targetLine4, h.x + c + r + _ + 5, f),
                    !this._data.status)
                )
                    return void e.restore();
                switch (((g = this._targetFontSize1 + 4),
                (e.font = "bold " + this._targetFontSize1 + "px " + this._font),
                this._data.status)) {
                    case m.AlertStatus.Success:
                        (v = $.t("SUCCESS")),
                            (w = y.generateColor(
                                this._data.successBackground,
                                this._data.transparency
                            )),
                            (x = this._data.successTextColor),
                            (b = this._data.successIcon);
                        break;
                    case m.AlertStatus.Failure:
                        (v = $.t("FAILURE")),
                            (w = y.generateColor(
                                this._data.failureBackground,
                                this._data.transparency
                            )),
                            (x = this._data.failureTextColor),
                            (b = this._data.failureIcon);
                }
                (S = e.measureText(v).width),
                    (P = Math.round((a - S) / 2)),
                    (e.fillStyle = w),
                    "up" === this._data.direction
                        ? (e.roundRect(h.x - 1, h.y - g - 2, a + 2, g, 5),
                          e.fill(),
                          (e.fillStyle = x),
                          e.fillText(v, h.x + P, h.y - 5),
                          e.drawImage(b, h.x + P - 13, h.y - 14))
                        : (e.roundRect(h.x - 1, h.y + t + 3, a + 2, g, 5),
                          e.fill(),
                          (e.fillStyle = x),
                          e.fillText(v, h.x + P, h.y + t + g - 1),
                          e.drawImage(b, h.x + P - 13, h.y + t + 5)),
                    e.restore();
            }),
            (n.prototype.drawStartLabel = function(e) {
                var t, i, n, r, s, a, o, l, h;
                e.save(),
                    e.translate(0.5, 0.5),
                    (e.font =
                        "normal " + this._sourceFontSize1 + "px " + this._font),
                    (t =
                        1.5 * this._sourceFontSize1 +
                        1.5 * this._sourceFontSize2),
                    (i = e.measureText(this._data.sourceLine1).width),
                    (e.font = "normal " + this._fontsize2 + "px " + this._font),
                    (n = e.measureText(this._data.sourceLine2).width),
                    (r = Math.max(i, n) - 5),
                    (s = this._data.points[0]),
                    (a = this.drawBalloon(e, s, r, t, this._data.direction)),
                    (e.fillStyle = y.generateColor(
                        this._data.sourceBackColor,
                        this._data.transparency
                    )),
                    e.fill(),
                    (e.lineWidth = 2),
                    (e.strokeStyle = y.generateColor(
                        this._data.sourceStrokeColor,
                        this._data.transparency
                    )),
                    e.stroke(),
                    (o = 3),
                    e.beginPath(),
                    e.arc(s.x, s.y, o, 0, 2 * Math.PI, !1),
                    (e.fillStyle = this._data.centersColor),
                    e.fill(),
                    (e.textAlign = "left"),
                    (l = 3),
                    (h = 2),
                    (e.fillStyle = this._data.sourceTextColor),
                    (e.font =
                        "normal " + this._sourceFontSize1 + "px " + this._font),
                    e.fillText(
                        this._data.sourceLine1,
                        a.x + l,
                        a.y + this._sourceFontSize1 + h
                    ),
                    (e.font =
                        "normal " + this._sourceFontSize2 + "px " + this._font),
                    e.fillText(
                        this._data.sourceLine2,
                        a.x + l,
                        a.y +
                            this._sourceFontSize1 +
                            2 * h +
                            this._sourceFontSize2
                    ),
                    e.restore();
            }),
            (n.prototype.draw = function(e) {
                var t, i, n, r, s, a, o, l, h, d, c, p, _, u;
                if (!(null === this._data || this._data.points.length < 2)) {
                    if (
                        ((e.lineCap = "butt"),
                        (e.strokeStyle = this._data.color),
                        (e.lineWidth = this._data.linewidth),
                        (e.lineStyle = this._data.linestyle),
                        (t = this._data.points[0]),
                        (i = this._data.points[1]),
                        (n = i.subtract(t)),
                        Math.abs(n.x) < 1 || Math.abs(n.y) < 1
                            ? (e.beginPath(),
                              e.moveTo(t.x, t.y),
                              e.lineTo(i.x, i.y),
                              e.stroke())
                            : (e.save(),
                              e.beginPath(),
                              e.translate(t.x, t.y),
                              e.scale(1, n.y / n.x),
                              e.moveTo(0, 0),
                              e.arcTo(n.x, 0, n.x, n.x, Math.abs(n.x)),
                              e.lineTo(n.x, n.x),
                              e.restore(),
                              e.stroke()),
                        this.drawTargetLabel(e),
                        this.drawStartLabel(e),
                        (r = Math.max(8, 4 * this._data.linewidth)),
                        (e.fillStyle = this._data.color),
                        (s = n.y < 0 ? 1 : -1),
                        Math.abs(n.x) < 1 || Math.abs(n.y) < 1)
                    )
                        a = Math.atan(n.x / n.y);
                    else {
                        if (
                            ((o = Math.abs(n.x)),
                            (l = Math.abs(n.y)),
                            (h = 0),
                            (d = Math.PI / 2),
                            (c = (h + d) / 2),
                            n.length() > r)
                        )
                            for (;;) {
                                if (
                                    ((p = o * Math.sin(c)),
                                    (_ = l * (1 - Math.cos(c))),
                                    (u = Math.sqrt(
                                        (p - o) * (p - o) + (_ - l) * (_ - l)
                                    )),
                                    Math.abs(u - r) < 1)
                                )
                                    break;
                                u > r ? (h = c) : (d = c), (c = (h + d) / 2);
                            }
                        (a = Math.atan((o - p) / (l - _))),
                            n.x * n.y < 0 && (a = -a);
                    }
                    e.save(),
                        e.beginPath(),
                        e.translate(i.x, i.y),
                        e.rotate(-a),
                        e.moveTo(0, 0),
                        e.lineTo(-r / 2, s * r),
                        e.lineTo(r / 2, s * r),
                        e.lineTo(0, 0),
                        e.restore(),
                        e.fill();
                }
            }),
            (n.prototype.targetLabelHitTest = function(e) {
                var t,
                    i,
                    n,
                    r,
                    s,
                    a,
                    o,
                    l,
                    h,
                    d = this._data.points[1],
                    p =
                        1.5 * this._targetFontSize1 +
                        1.5 * this._targetFontSize2,
                    _ = this._targetFontSize1 * this._data.targetLine1.length,
                    u = this._targetFontSize1 * this._data.targetLine2.length,
                    f = this._targetFontSize2 * this._data.targetLine3.length,
                    g = this._targetFontSize2 * this._data.targetLine4.length;
                return (
                    this._data.status && (p += 1.5 * this._targetFontSize1),
                    (t = Math.max(_ + u, f + g) - 20),
                    (i = 20),
                    (n = 5),
                    (r = "up" === this._data.direction ? -1 : 1),
                    (s = d.x - i),
                    (a = d.y + n * r),
                    (o = d.y + (n + p) * r),
                    (l = Math.min(a, o)),
                    (h = Math.max(a, o)),
                    e.x >= s && e.x <= s + t && e.y >= l && e.y <= h
                        ? new c(c.MOVEPOINT)
                        : null
                );
            }),
            (n.prototype.sourceLabelHitTest = function(e) {
                var t =
                        1.5 * this._sourceFontSize1 +
                        1.5 * this._sourceFontSize2,
                    i = this._sourceFontSize1 * this._data.sourceLine1.length,
                    n = this._sourceFontSize2 * this._data.sourceLine2.length,
                    r = Math.max(i, n),
                    s = this._data.points[0],
                    a = 20,
                    o = 5,
                    l = "up" === this._data.direction ? 1 : -1,
                    h = s.x - a,
                    d = s.y + o * l,
                    p = s.y + (o + t) * l,
                    _ = Math.min(d, p),
                    u = Math.max(d, p);
                return e.x >= h && e.x <= h + r && e.y >= _ && e.y <= u
                    ? new c(c.MOVEPOINT)
                    : null;
            }),
            (n.prototype.hitTest = function(e) {
                var t, i, n, r, s, a, o, l;
                return null === this._data || this._data.points.length < 2
                    ? null
                    : ((t = this._data.points[0]),
                      (i = this._data.points[1]),
                      (n = i.subtract(t)),
                      (n = i.subtract(t)),
                      (r = e.subtract(t)),
                      (s = Math.abs(n.x)),
                      (a = Math.abs(n.y)),
                      (o =
                          u.sign(n.y) *
                          (a - a * Math.sqrt(1 - r.x * r.x / (s * s)))),
                      (l = 3),
                      Math.abs(o - r.y) < l
                          ? new c(c.MOVEPOINT)
                          : this.targetLabelHitTest(e) ||
                            this.sourceLabelHitTest(e));
            }),
            inherit(r, h),
            (r.prototype.renderer = function() {
                var e, t, i;
                return (
                    this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = {}),
                    (e.points = this._points),
                    (e.color = this._source.properties().linecolor.value()),
                    (e.linewidth = this._source.properties().linewidth.value()),
                    (e.targetLine1 = this._targetLine1),
                    (e.targetLine2 = this._targetLine2),
                    (e.targetLine3 = this._targetLine3),
                    (e.targetLine4 = this._targetLine4),
                    (e.status = this._source.properties().status.value()),
                    (e.transparency = this._source
                        .properties()
                        .transparency.value()),
                    (e.targetBackColor = this._source
                        .properties()
                        .targetBackColor.value()),
                    (e.targetStrokeColor = this._source
                        .properties()
                        .targetStrokeColor.value()),
                    (e.targetTextColor = this._source
                        .properties()
                        .targetTextColor.value()),
                    (e.sourceBackColor = this._source
                        .properties()
                        .sourceBackColor.value()),
                    (e.sourceStrokeColor = this._source
                        .properties()
                        .sourceStrokeColor.value()),
                    (e.sourceTextColor = this._source
                        .properties()
                        .sourceTextColor.value()),
                    (e.successBackground = this._source
                        .properties()
                        .successBackground.value()),
                    (e.successTextColor = this._source
                        .properties()
                        .successTextColor.value()),
                    (e.failureBackground = this._source
                        .properties()
                        .failureBackground.value()),
                    (e.failureTextColor = this._source
                        .properties()
                        .failureTextColor.value()),
                    (e.intermediateBackColor = this._source
                        .properties()
                        .intermediateBackColor.value()),
                    (e.intermediateTextColor = this._source
                        .properties()
                        .intermediateTextColor.value()),
                    (e.sourceLine1 = this._sourceLine1),
                    (e.sourceLine2 = this._sourceLine2),
                    (e.direction = this._direction),
                    (e.clockWhite = this._clockWhite),
                    (e.clockBlack = this._clockBlack),
                    (e.successIcon = this._successIcon),
                    (e.failureIcon = this._failureIcon),
                    (e.finished = this._finished),
                    (t = l(
                        o(
                            this._model._properties.paneProperties.background.value()
                        ),
                        150
                    )),
                    (e.centersColor = "black" === t ? "white" : "black"),
                    this._renderer.setData(e),
                    this.isAnchorsRequired()
                        ? ((i = new p()),
                          i.append(this._renderer),
                          this.addAnchors(i),
                          i)
                        : this._renderer
                );
            }),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype.updateImpl = function() {
                var e, t, i, n, r, s, a, o, l, c, p, _;
                h.prototype._updateImpl.call(this),
                    (this._targetLine1 = ""),
                    (this._targetLine2 = ""),
                    (this._targetLine3 = ""),
                    (this._targetLine4 = ""),
                    this._source.points().length < 2 ||
                        (this._source.priceScale() &&
                            ((e = this._source.points()[1]),
                            (t = this._source.points()[0]),
                            (this._targetLine3 = this._source
                                .priceScale()
                                .formatter()
                                .format(e.price)),
                            (i = e.price - t.price),
                            (n = i < 0 ? "-" : "+"),
                            (this._targetLine1 = this._source
                                .priceScale()
                                .formatter()
                                .format(Math.abs(i))),
                            (r = Math.abs(Math.round(i / t.price * 1e4) / 100)),
                            (this._targetLine1 =
                                n +
                                this._targetLine1 +
                                " (" +
                                n +
                                this._percentageFormatter.format(r) +
                                ")"),
                            (s = this._model
                                .timeScale()
                                .indexToUserTime(t.index)),
                            (a = this._model
                                .timeScale()
                                .indexToUserTime(e.index)),
                            (o = t.time && e.time),
                            o &&
                                ((s = TradingView.isString(t.time)
                                    ? new Date(Date.parse(t.time))
                                    : t.time),
                                (a = TradingView.isString(e.time)
                                    ? new Date(Date.parse(e.time))
                                    : e.time)),
                            (l = this._model.mainSeries().isDWM()),
                            (c =
                                d.kind(this._model.mainSeries().interval()) ===
                                d.SECONDS),
                            a &&
                                s &&
                                ((this._targetLine4 = new g().format(a)),
                                l ||
                                    (this._targetLine4 =
                                        this._targetLine4 +
                                        "  " +
                                        new v(c ? "%h:%m:%s" : "%h:%m").format(
                                            a
                                        )),
                                (p = (a.valueOf() - s.valueOf()) / 1e3),
                                (this._targetLine2 =
                                    $.t("in", {context: "dates"}) +
                                    " " +
                                    new w().format(p))),
                            (this._sourceLine1 = this._source
                                .priceScale()
                                .formatter()
                                .format(t.price)),
                            (this._sourceLine2 = ""),
                            (_ = this._model
                                .timeScale()
                                .indexToUserTime(t.index)),
                            _ &&
                                ((this._sourceLine2 = new g().format(_)),
                                l ||
                                    (this._sourceLine2 =
                                        this._sourceLine2 +
                                        " " +
                                        new v(c ? "%h:%m:%s" : "%h:%m").format(
                                            _
                                        ))),
                            (this._direction =
                                this._source.direction() === m.Direction.Up
                                    ? "up"
                                    : "down"),
                            (this._finished =
                                this._model.lineBeingCreated() !==
                                    this._source &&
                                this._model.lineBeingEdited() !==
                                    this._source &&
                                this._model.sourceBeingMoved() !==
                                    this._source)));
            }),
            (t.PredictionPaneView = r);
    },
    913: function(e, t, i) {
        "use strict";
        function n(e, t) {
            (this._data = null),
                (this._measureCache = e),
                (this._chartModel = t),
                (this._points = null);
        }
        function r(e, t, i) {
            o.call(this, e, t),
                (this._image = c(
                    "price_label",
                    TradingView.wrapUrl("images/price_label.png")
                )),
                (this._rendererCache = {}),
                (this._invalidated = !0),
                (this._renderer = new n(this._rendererCache, t));
        }
        var s = i(1).Point,
            a = i(49).pointInRectangle,
            o = i(12).LineSourcePaneView,
            l = i(74).SelectionRenderer,
            h = i(4),
            d = i(8).CompositeRenderer,
            c = i(392),
            p = i(19);
        (n.prototype.setData = function(e) {
            (this._data = e), (this._points = e.points);
        }),
            (n.prototype.draw = function(e) {
                var t, i, n, r, s, a, o, l, h;
                null !== this._data &&
                    null !== this._points &&
                    0 !== this._points.length &&
                    ((e.font = [
                        this._data.fontWeight,
                        this._data.fontSize + "px",
                        this._data.fontFamily
                    ].join(" ")),
                    (t = e.measureText(this._data.label)),
                    (t.height = this._data.fontSize),
                    (i = 3),
                    (n = 15),
                    (r = -9),
                    (s = {left: 10, top: 5}),
                    (a = t.width + 2 * s.left),
                    (o = t.height + 2 * s.top),
                    (l = this._points[0].x - r),
                    (h = this._points[0].y - (o + n)),
                    this._measureCache &&
                        $.extend(this._measureCache, {
                            innerWidth: a,
                            innerHeight: o,
                            tailLeft: r,
                            tailHeight: n
                        }),
                    e.translate(0.5 + l, 0.5 + h),
                    e.beginPath(),
                    e.moveTo(12, o),
                    e.lineTo(r, o + n),
                    e.lineTo(r - 1, o + n - 1),
                    e.lineTo(5, o),
                    e.lineTo(i, o),
                    e.arcTo(0, o, 0, 0, i),
                    e.lineTo(0, i),
                    e.arcTo(0, 0, a, 0, i),
                    e.lineTo(a - i, 0),
                    e.arcTo(a, 0, a, o, i),
                    e.lineTo(a, o - i),
                    e.arcTo(a, o, 0, o, i),
                    e.lineTo(12, o),
                    (e.fillStyle = p.generateColor(
                        this._data.backgroundColor,
                        this._data.transparency
                    )),
                    e.fill(),
                    (e.strokeStyle = this._data.borderColor),
                    (e.lineWidth = 2),
                    e.stroke(),
                    e.closePath(),
                    (e.textBaseline = "top"),
                    (e.fillStyle = this._data.color),
                    e.fillText(this._data.label, s.left, s.top - 1),
                    e.translate(-0.5, -0.5),
                    e.beginPath(),
                    e.arc(r, o + n, 2.5, 0, 2 * Math.PI, !1),
                    (e.fillStyle = p.generateColor(
                        this._data.borderColor,
                        this._data.transparency
                    )),
                    e.fill(),
                    (e.strokeStyle = this._chartModel.backgroundColor()),
                    (e.lineWidth = 1),
                    e.stroke(),
                    e.closePath());
            }),
            (n.prototype.hitTest = function(e) {
                var t, i;
                return null === this._data ||
                    null === this._points ||
                    0 === this._points.length
                    ? null
                    : ((t = this._points[0].x - this._measureCache.tailLeft),
                      (i =
                          this._points[0].y -
                          (this._measureCache.innerHeight +
                              this._measureCache.tailHeight)),
                      a(
                          e,
                          new s(t, i),
                          new s(
                              t + this._measureCache.innerWidth,
                              i + this._measureCache.innerHeight
                          )
                      )
                          ? new h(h.MOVEPOINT)
                          : null);
            }),
            inherit(r, o),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype.updateImpl = function() {
                var e, t, i;
                if (
                    (o.prototype._updateImpl.call(this),
                    this._source.points().length > 0)
                ) {
                    if (
                        ((e = this._source.points()[0].price),
                        !(t = this._source.priceScale()) || t.isEmpty())
                    )
                        return;
                    t.isPercent() &&
                        ((i = this._source.ownerSource().firstValue()),
                        (e = t.priceRange().convertToPercent(e, i))),
                        (this._priceLabel = t.formatter().format(e));
                }
            }),
            (r.prototype.renderer = function() {
                var e, t;
                return (
                    this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = {}),
                    (e.points = this._points),
                    (e.borderColor = this._source
                        .properties()
                        .borderColor.value()),
                    (e.backgroundColor = this._source
                        .properties()
                        .backgroundColor.value()),
                    (e.color = this._source.properties().color.value()),
                    (e.fontWeight = this._source
                        .properties()
                        .fontWeight.value()),
                    (e.fontSize = this._source.properties().fontsize.value()),
                    (e.fontFamily = this._source.properties().font.value()),
                    (e.transparency = this._source
                        .properties()
                        .transparency.value()),
                    (e.label = this._priceLabel),
                    (e.image = this._image),
                    this._renderer.setData(e),
                    this.isAnchorsRequired() && 1 === e.points.length
                        ? ((t = new d()),
                          t.append(this._renderer),
                          t.append(new l({points: e.points})),
                          t)
                        : this._renderer
                );
            }),
            (t.PriceLabelPaneView = r);
    },
    915: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._invalidated = !0),
                (this._percentageFormatter = new d()),
                (this._pipFormatter = null),
                (this._lastSymbolInfo = null),
                (this._topBorderRenderer = new l()),
                (this._bottomBorderRenderer = new l()),
                (this._distanceRenderer = new l()),
                (this._backgroundRenderer = new o()),
                (this._labelRenderer = new a({}));
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(27).TextRenderer,
            o = i(70).RectangleRenderer,
            l = i(16).TrendLineRenderer,
            h = i(8).CompositeRenderer,
            d = i(94).PercentageFormatter,
            c = i(145).PipFormatter,
            p = i(18).LineEnd;
        inherit(n, s),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                s.prototype._updateImpl.call(this);
            }),
            (n.prototype.renderer = function() {
                var e,
                    t,
                    i,
                    n,
                    s,
                    a,
                    o,
                    l,
                    d,
                    _,
                    u,
                    f,
                    g,
                    v,
                    w,
                    y,
                    m,
                    x,
                    b,
                    S,
                    P,
                    R,
                    T,
                    L,
                    C,
                    k,
                    I,
                    B;
                return (
                    this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = new h()),
                    this._points.length < 2 || this._source.points().length < 2
                        ? e
                        : ((t = this._source.properties()),
                          (i = t.extendLeft.value()),
                          (n = t.extendRight.value()),
                          (s = this._model.timeScale().width()),
                          (a = this._points[0]),
                          (o = this._points[1]),
                          (l = i ? 0 : Math.min(a.x, o.x)),
                          (d = n ? s : Math.max(a.x, o.x)),
                          t.fillBackground &&
                              t.fillBackground.value() &&
                              ((_ = {}),
                              (_.points = [new r(l, a.y), new r(d, o.y)]),
                              (_.color = "white"),
                              (_.linewidth = 0),
                              (_.backcolor = t.backgroundColor.value()),
                              (_.fillBackground = !0),
                              (_.transparency = t.backgroundTransparency.value()),
                              this._backgroundRenderer.setData(_),
                              e.append(this._backgroundRenderer)),
                          (u = this),
                          (f = function(t, i, n) {
                              var r = {};
                              (r.points = [i, n]),
                                  (r.width = u._model.timeScale().width()),
                                  (r.height = u._source.priceScale().height()),
                                  (r.color = u._source
                                      .properties()
                                      .linecolor.value()),
                                  (r.linewidth = u._source
                                      .properties()
                                      .linewidth.value()),
                                  (r.linestyle = CanvasEx.LINESTYLE_SOLID),
                                  (r.extendleft = !1),
                                  (r.extendright = !1),
                                  (r.leftend = p.Normal),
                                  (r.rightend = p.Normal),
                                  t.setData(r),
                                  e.append(t);
                          }),
                          f(
                              this._topBorderRenderer,
                              new r(l, a.y),
                              new r(d, a.y)
                          ),
                          f(
                              this._bottomBorderRenderer,
                              new r(l, o.y),
                              new r(d, o.y)
                          ),
                          (a = this._points[0]),
                          (o = this._points[1]),
                          (g = (a.x + o.x) / 2),
                          (v = new r(g, a.y)),
                          (w = new r(g, o.y)),
                          (_ = {}),
                          (_.points = [v, w]),
                          (_.width = u._model.timeScale().width()),
                          (_.height = u._source.priceScale().height()),
                          (_.color = u._source.properties().linecolor.value()),
                          (_.linewidth = u._source
                              .properties()
                              .linewidth.value()),
                          (_.linestyle = CanvasEx.LINESTYLE_DASHED),
                          (_.extendleft = !1),
                          (_.extendright = !1),
                          (_.leftend = p.Normal),
                          (_.rightend = p.Arrow),
                          this._distanceRenderer.setData(_),
                          e.append(this._distanceRenderer),
                          (y = this._source.points()[0].price),
                          (m = this._source.points()[1].price),
                          (x = m - y),
                          (b = 100 * x / y),
                          (S = this._model.mainSeries().symbolInfo()),
                          S &&
                              S !== this._lastSymbolInfo &&
                              ((this._pipFormatter = new c(
                                  S.pricescale,
                                  S.minmov,
                                  S.type,
                                  S.minmove2
                              )),
                              (this._lastSymbolInfo = S)),
                          (P =
                              this._source
                                  .priceScale()
                                  .formatter()
                                  .format(x) +
                              " (" +
                              this._percentageFormatter.format(b) +
                              ") " +
                              (this._pipFormatter
                                  ? this._pipFormatter.format(x)
                                  : "")),
                          (_ = {}),
                          m > y
                              ? ((R = o.clone()),
                                (R.y -= 2 * t.fontsize.value()),
                                (R.x = 0.5 * (a.x + o.x)),
                                (_.points = [R]))
                              : ((R = o.clone()),
                                (R.x = 0.5 * (a.x + o.x)),
                                (R.y += 0.7 * t.fontsize.value()),
                                (_.points = [R])),
                          (T = {x: 0, y: 10}),
                          (_.text = P),
                          (_.color = t.textcolor.value()),
                          (_.height = u._source.priceScale().height()),
                          (_.font = t.font.value()),
                          (_.offsetX = T.x),
                          (_.offsetY = T.y),
                          (_.vertAlign = "middle"),
                          (_.horzAlign = "center"),
                          (_.fontsize = t.fontsize.value()),
                          (_.backgroundRoundRect = 4),
                          (_.backgroundHorzInflate = 0.4 * t.fontsize.value()),
                          (_.backgroundVertInflate = 0.2 * t.fontsize.value()),
                          t.fillLabelBackground &&
                              t.fillLabelBackground.value() &&
                              ((_.backgroundColor = t.labelBackgroundColor.value()),
                              (_.backgroundTransparency =
                                  1 -
                                      t.labelBackgroundTransparency.value() /
                                          100 || 0)),
                          t.drawBorder &&
                              t.drawBorder.value() &&
                              (_.borderColor = t.borderColor.value()),
                          (L = 0.5 * (a.x + o.x)),
                          (C = o.y),
                          (k = new r(L, C)),
                          this._labelRenderer.setData(_),
                          (I = this._labelRenderer.measure()),
                          (B = {
                              x:
                                  L +
                                  _.backgroundHorzInflate +
                                  I.textBgPadding -
                                  I.width / I.textBgPadding,
                              y:
                                  a.y > o.y
                                      ? k.y -
                                            I.height -
                                            2 * I.textBgPadding -
                                            T.y >
                                        0
                                          ? C -
                                            I.height -
                                            T.y -
                                            2 * I.textBgPadding
                                          : T.y - 2 * I.textBgPadding
                                      : k.y + I.height + I.textBgPadding + T.y >
                                        _.height
                                          ? _.height - I.height - T.y
                                          : C + I.textBgPadding
                          }),
                          this._labelRenderer.setPoints([new r(L, B.y)]),
                          e.append(this._labelRenderer),
                          this.addAnchors(e),
                          e)
                );
            }),
            (t.PriceRangePaneView = n);
    },
    917: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._baseTrendRenderer = new a()),
                (this._edgeTrendRenderer = new a()),
                (this._arcWedgeRenderer = new r());
        }
        var r = i(491).ArcWedgeRenderer,
            s = i(414).FibWedgePaneView,
            a = i(16).TrendLineRenderer,
            o = i(8).CompositeRenderer,
            l = i(18).LineEnd;
        inherit(n, s),
            (n.prototype.update = function() {
                s.prototype.update.call(this);
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, r, s, a, h, d, c, p, _;
                return (
                    this._invalidated &&
                        (this._updateImpl(), (this._invalidated = !1)),
                    (e = new o()),
                    this._points.length < 2
                        ? e
                        : ((t = this._source.properties()),
                          (i = this._points),
                          (n = i[0]),
                          (r = i[1]),
                          (s = {
                              points: [n, r],
                              width: this._model.timeScale().width(),
                              height: this._source.priceScale().height(),
                              color: t.trendline.color.value(),
                              linewidth: t.linewidth.value(),
                              linestyle: t.trendline.linestyle.value(),
                              extendleft: !1,
                              extendright: !1,
                              leftend: l.Normal,
                              rightend: l.Normal
                          }),
                          this._baseTrendRenderer.setData(s),
                          e.append(this._baseTrendRenderer),
                          this._points.length < 3
                              ? (this.addAnchors(e), e)
                              : ((a = i[2]),
                                (h = a.data),
                                (d = r.subtract(n).length()),
                                (c = a.subtract(n).normalized()),
                                (a = n.add(c.scaled(d))),
                                (a.data = h),
                                (s = {
                                    points: [n, a],
                                    width: this._model.timeScale().width(),
                                    height: this._source.priceScale().height(),
                                    color: t.trendline.color.value(),
                                    linewidth: t.linewidth.value(),
                                    linestyle: t.trendline.linestyle.value(),
                                    extendleft: !1,
                                    extendright: !1,
                                    leftend: l.Normal,
                                    rightend: l.Normal
                                }),
                                this._edgeTrendRenderer.setData(s),
                                e.append(this._edgeTrendRenderer),
                                (p = this._levels[0]),
                                (_ = {}),
                                (_.center = this._points[0]),
                                (_.radius = p.radius),
                                (_.prevRadius = 0),
                                (_.edge = this._edge),
                                (_.color = t.trendline.color.value()),
                                (_.color1 = t.color1.value()),
                                (_.color2 = t.color2.value()),
                                (_.linewidth = t.linewidth.value()),
                                (_.edge1 = this._edge1),
                                (_.edge2 = this._edge2),
                                (_.p1 = p.p1),
                                (_.p2 = p.p2),
                                (_.fillBackground = t.fillBackground.value()),
                                (_.transparency = t.transparency.value()),
                                (_.gradient = !0),
                                this._arcWedgeRenderer.setData(_),
                                e.append(this._arcWedgeRenderer),
                                this.addAnchors(e),
                                e))
                );
            }),
            (t.ProjectionLinePaneView = n);
    },
    920: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._invalidated = !0),
                (this._renderer = new o());
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(8).CompositeRenderer,
            o = i(70).RectangleRenderer;
        inherit(n, s),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                s.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, s, o;
                return (
                    this._invalidated && this.updateImpl(),
                    (e = {}),
                    (e.points = this._points),
                    (e.color = this._source.properties().color.value()),
                    (e.linewidth = this._source.properties().linewidth.value()),
                    (e.backcolor = this._source
                        .properties()
                        .backgroundColor.value()),
                    (e.fillBackground = this._source
                        .properties()
                        .fillBackground.value()),
                    (e.transparency = this._source
                        .properties()
                        .transparency.value()),
                    this._renderer.setData(e),
                    this.isAnchorsRequired()
                        ? ((t = new a()),
                          t.append(this._renderer),
                          (i = this._points[0]),
                          (n = this._points[1]),
                          (s = new r(i.x, n.y)),
                          (s.data = 2),
                          (o = new r(n.x, i.y)),
                          (o.data = 3),
                          t.append(
                              this.createLineAnchor({points: [i, n, s, o]})
                          ),
                          t)
                        : this._renderer
                );
            }),
            (t.RectanglePaneView = n);
    },
    922: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._invalidated = !0),
                (this._percentageFormatter = new c()),
                (this._numericFormatter = new p()),
                (this._pipFormatter = null),
                (this._lastSymbolInfo = null),
                (this._entryLineRenderer = new a()),
                (this._stopLineRenderer = new a()),
                (this._targetLineRenderer = new a()),
                (this._positionLineRenderer = new a()),
                (this._fullStopBgRenderer = new l(
                    new h(h.MOVEPOINT),
                    new h(h.MOVEPOINT)
                )),
                (this._stopBgRenderer = new l(
                    new h(h.MOVEPOINT),
                    new h(h.MOVEPOINT)
                )),
                (this._fullTargetBgRenderer = new l(
                    new h(h.MOVEPOINT),
                    new h(h.MOVEPOINT)
                )),
                (this._targetBgRenderer = new l(
                    new h(h.MOVEPOINT),
                    new h(h.MOVEPOINT)
                )),
                (this._stopLabelRenderer = new o({})),
                (this._middleLabelRenderer = new o({})),
                (this._profitLabelRenderer = new o({}));
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(16).TrendLineRenderer,
            o = i(27).TextRenderer,
            l = i(70).RectangleRenderer,
            h = i(4),
            d = i(8).CompositeRenderer,
            c = i(94).PercentageFormatter,
            p = i(38).NumericFormatter,
            _ = i(145).PipFormatter,
            u = i(19),
            f = i(18).LineEnd,
            g = i(488).RiskRewardPointIndex;
        inherit(n, s),
            (n.prototype.i18nCache = {
                pnl: $.t("{0} P&L: {1}"),
                open: $.t("Open", {context: "line_tool_position"}),
                closed: $.t("Closed", {context: "line_tool_position"}),
                ratio: $.t("Risk/Reward Ratio: {0}"),
                stop: $.t("Stop: {0} ({1}) {2}, Amount: {3}"),
                target: $.t("Target: {0} ({1}) {2}, Amount: {3}"),
                qty: $.t("Qty: {0}")
            }),
            (n.prototype._formatInTicks = function(e) {
                var t = this._model.mainSeries().base();
                return Math.round(e * t);
            }),
            (n.prototype.isLabelVisible = function() {
                return this.isHoveredSource() || this.isSelectedSource();
            }),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype._updateImpl = function() {
                var e, t, i, n, r, a, o;
                s.prototype._updateImpl.call(this),
                    (this._stopLevel = null),
                    (this._profitLevel = null),
                    (e = this._model.timeScale()),
                    !(t = this._source.priceScale()) ||
                        t.isEmpty() ||
                        e.isEmpty() ||
                        (0 !== this._source.points().length &&
                            0 !== this._points.length &&
                            null !==
                                this._model
                                    .mainSeries()
                                    .bars()
                                    .last() &&
                            (this._source.points().length < 2 ||
                                (0 !== this._model.mainSeries().bars().length &&
                                    ((this._isClosed =
                                        4 === this._source.points().length),
                                    (i = this._source.lastBarData()) &&
                                        ((n = this._source.priceScale()),
                                        (r = this._source.stopPrice()),
                                        (a = this._source.profitPrice()),
                                        (this._pl =
                                            this._source.points().length > 1
                                                ? this._source.calculatePL(
                                                      i.closePrice
                                                  )
                                                : 0),
                                        n.isPercent() &&
                                            ((o = this._source
                                                .ownerSource()
                                                .firstValue()),
                                            (r = n
                                                .priceRange()
                                                .convertToPercent(r, o)),
                                            (a = n
                                                .priceRange()
                                                .convertToPercent(a, o)),
                                            (i.closePrice = n
                                                .priceRange()
                                                .convertToPercent(
                                                    i.closePrice,
                                                    o
                                                ))),
                                        (this._entryLevel = this._points[
                                            g.Entry
                                        ].y),
                                        (this._stopLevel = t.priceToCoordinate(
                                            r
                                        )),
                                        (this._profitLevel = t.priceToCoordinate(
                                            a
                                        )),
                                        (this._closeLevel = t.priceToCoordinate(
                                            i.closePrice
                                        )),
                                        (this._closeBar = this._source._model
                                            .timeScale()
                                            .indexToCoordinate(i.index)))))));
            }),
            (n.prototype.renderer = function() {
                var e,
                    t,
                    i,
                    n,
                    s,
                    a,
                    o,
                    l,
                    h,
                    c,
                    p,
                    v,
                    w,
                    y,
                    m,
                    x,
                    b,
                    S,
                    P,
                    R,
                    T,
                    L,
                    C,
                    k,
                    I,
                    B,
                    M,
                    A,
                    D,
                    E,
                    O,
                    N,
                    V,
                    z,
                    F,
                    W,
                    H,
                    Y;
                return (
                    this._invalidated &&
                        (this._updateImpl(), (this._invalidated = !1)),
                    (e = new d()),
                    this._points.length < 2 || this._source.points().length < 2
                        ? e
                        : ((t = this),
                          (i = this._source.properties()),
                          (n = this._points[g.Entry].x),
                          (s = this._points[g.ActualEntry]
                              ? this._points[g.ActualEntry].x
                              : this._points[g.Close].x),
                          (a = this._points[g.ActualClose]
                              ? this._points[g.ActualClose].x
                              : this._points[g.Close].x),
                          (o = this._points[g.Close].x),
                          (l = new r(n, this._entryLevel)),
                          (h = new r(o, this._stopLevel)),
                          (c = {}),
                          (c.points = [l, h]),
                          (c.color = "white"),
                          (c.linewidth = 0),
                          (c.backcolor = i.stopBackground.value()),
                          (c.fillBackground = !0),
                          (c.transparency = i.stopBackgroundTransparency.value()),
                          this._fullStopBgRenderer.setData(c),
                          e.append(this._fullStopBgRenderer),
                          this._pl < 0 &&
                              ((l = new r(s, this._entryLevel)),
                              (h = new r(a, this._closeLevel)),
                              (c = {}),
                              (c.points = [l, h]),
                              (c.color = "white"),
                              (c.linewidth = 0),
                              (c.backcolor = i.stopBackground.value()),
                              (c.fillBackground = !0),
                              (p = 0.01 * i.stopBackgroundTransparency.value()),
                              (v = 100 * (1 - p * p * p)),
                              (w = 100 - v),
                              (c.transparency = w),
                              this._stopBgRenderer.setData(c),
                              e.append(this._stopBgRenderer)),
                          (l = new r(n, this._entryLevel)),
                          (h = new r(o, this._profitLevel)),
                          (c = {}),
                          (c.points = [l, h]),
                          (c.color = "white"),
                          (c.linewidth = 0),
                          (c.backcolor = i.profitBackground.value()),
                          (c.fillBackground = !0),
                          (c.transparency = i.profitBackgroundTransparency.value()),
                          this._fullTargetBgRenderer.setData(c),
                          e.append(this._fullTargetBgRenderer),
                          this._pl > 0 &&
                              ((l = new r(s, this._entryLevel)),
                              (h = new r(a, this._closeLevel)),
                              (c = {}),
                              (c.points = [l, h]),
                              (c.color = "white"),
                              (c.linewidth = 0),
                              (c.backcolor = i.profitBackground.value()),
                              (c.fillBackground = !0),
                              (p =
                                  0.01 *
                                  i.profitBackgroundTransparency.value()),
                              (y = 100 * (1 - p * p * p)),
                              (m = 100 - y),
                              (c.transparency = m),
                              this._targetBgRenderer.setData(c),
                              e.append(this._targetBgRenderer)),
                          (x = function(i, n, r, s) {
                              var a = {};
                              (a.points = [n, r]),
                                  (a.width = t._model.timeScale().width()),
                                  (a.height = t._source.priceScale().height()),
                                  (a.color =
                                      s ||
                                      t._source.properties().linecolor.value()),
                                  (a.linewidth = t._source
                                      .properties()
                                      .linewidth.value()),
                                  (a.linestyle = CanvasEx.LINESTYLE_SOLID),
                                  (a.extendleft = !1),
                                  (a.extendright = !1),
                                  (a.leftend = f.Normal),
                                  (a.rightend = f.Normal),
                                  i.setData(a),
                                  e.append(i);
                          }),
                          this._points[g.ActualEntry] &&
                              ((l = this._points[g.ActualEntry]),
                              (h = this._isClosed
                                  ? this._points[g.ActualClose]
                                  : new r(this._closeBar, this._closeLevel)),
                              (c = {}),
                              (c.points = [l, h]),
                              (c.width = t._model.timeScale().width()),
                              (c.height = t._source.priceScale().height()),
                              (c.color = t._source
                                  .properties()
                                  .linecolor.value()),
                              (c.linewidth = 1),
                              (c.linestyle = CanvasEx.LINESTYLE_DASHED),
                              (c.extendleft = !1),
                              (c.extendright = !1),
                              (c.leftend = f.Normal),
                              (c.rightend = f.Arrow),
                              this._positionLineRenderer.setData(c),
                              e.append(this._positionLineRenderer)),
                          (t = this),
                          (b = function(n, r, s, a, o, l, h) {
                              if (t.isLabelVisible() || TradingView.printing) {
                                  var d = {};
                                  (d.points = [r]),
                                      (d.text = s),
                                      (d.color = i.textcolor.value()),
                                      (d.font = i.font.value()),
                                      (d.offsetX = 3),
                                      (d.offsetY = l),
                                      (d.vertAlign = o),
                                      (d.horzAlign = "center"),
                                      (d.backgroundRoundRect = 4),
                                      (d.backgroundColor = u.resetTransparency(
                                          a
                                      )),
                                      (d.fontsize = i.fontsize.value()),
                                      (d.backgroundHorzInflate = 4),
                                      (d.backgroundVertInflate = 2),
                                      h && (d.borderColor = h),
                                      n.setData(d),
                                      e.append(n);
                              }
                          }),
                          (S = this._source.entryPrice()),
                          (P = this._source.stopPrice()),
                          (R = this._source.profitPrice()),
                          (T = Math.abs(P - S)),
                          (L = Math.round(1e4 * T / S) / 100),
                          (C = Math.abs(R - S)),
                          (k = Math.round(1e4 * C / S) / 100),
                          (I = Math.abs(S - R) / Math.abs(S - P)),
                          (l = new r(n, this._points[g.Entry].y)),
                          (h = new r(o, this._points[g.Entry].y)),
                          x(this._entryLineRenderer, l, h),
                          (B = new r(
                              (n + o) / 2,
                              Math.round(this._points[0].y) + 0.5
                          )),
                          (M = ""),
                          (A = ""),
                          (D = this._numericFormatter.format(
                              Math.round(100 * I) / 100
                          )),
                          this._points[1] &&
                              void 0 !== this._pl &&
                              (A = this._source
                                  .priceScale()
                                  .formatter()
                                  .format(this._pl)),
                          i.compact.value()
                              ? ((M += A ? A + " ~ " : ""),
                                (M += i.qty.value() + "\n"),
                                (M += D))
                              : ((E = this._isClosed
                                    ? this.i18nCache.closed
                                    : this.i18nCache.open),
                                (M += A
                                    ? this.i18nCache.pnl.format(E, A) + ", "
                                    : ""),
                                (M +=
                                    this.i18nCache.qty.format(i.qty.value()) +
                                    "\n"),
                                (M += this.i18nCache.ratio.format(D) + " ")),
                          (O = i.linecolor.value()),
                          this._pl < 0
                              ? (O = i.stopBackground.value())
                              : this._pl > 0 &&
                                (O = i.profitBackground.value()),
                          b(
                              this._middleLabelRenderer,
                              B,
                              M,
                              O,
                              "middle",
                              0,
                              "white"
                          ),
                          (l = new r(n, this._stopLevel)),
                          (h = new r(o, this._stopLevel)),
                          x(
                              this._stopLineRenderer,
                              l,
                              h,
                              i.stopBackground.value()
                          ),
                          (N = this._model.mainSeries().symbolInfo()),
                          N &&
                              N !== this._lastSymbolInfo &&
                              ((this._pipFormatter = new _(
                                  N.pricescale,
                                  N.minmov,
                                  N.type,
                                  N.minmove2
                              )),
                              (this._lastSymbolInfo = N)),
                          (B = new r((n + o) / 2, this._stopLevel)),
                          (M = ""),
                          (V = this._source
                              .priceScale()
                              .formatter()
                              .format(T)),
                          (z = this._percentageFormatter.format(L)),
                          (M = i.compact.value()
                              ? V + " (" + z + ") " + i.amountStop.value()
                              : this.i18nCache.stop.format(
                                    this._source
                                        .priceScale()
                                        .formatter()
                                        .format(T),
                                    this._percentageFormatter.format(L),
                                    this._pipFormatter
                                        ? this._pipFormatter.format(T)
                                        : "",
                                    i.amountStop.value()
                                )),
                          b(
                              this._stopLabelRenderer,
                              B,
                              M,
                              i.stopBackground.value(),
                              S < P ? "bottom" : "top",
                              S < P ? -12 : -1
                          ),
                          (l = new r(n, this._profitLevel)),
                          (h = new r(o, this._profitLevel)),
                          x(
                              this._targetLineRenderer,
                              l,
                              h,
                              i.profitBackground.value()
                          ),
                          (B = new r((n + o) / 2, this._profitLevel)),
                          (M = ""),
                          (V = this._source
                              .priceScale()
                              .formatter()
                              .format(C)),
                          (z = this._percentageFormatter.format(k)),
                          (M = i.compact.value()
                              ? V + " (" + z + ") " + i.amountTarget.value()
                              : this.i18nCache.target.format(
                                    this._source
                                        .priceScale()
                                        .formatter()
                                        .format(C),
                                    this._percentageFormatter.format(k),
                                    this._pipFormatter
                                        ? this._pipFormatter.format(C)
                                        : "",
                                    i.amountTarget.value()
                                )),
                          b(
                              this._profitLabelRenderer,
                              B,
                              M,
                              i.profitBackground.value(),
                              S < P ? "top" : "bottom",
                              S < P ? -1 : -12
                          ),
                          this.isAnchorsRequired() &&
                              ((F = this._points[0].clone()),
                              (F.data = 0),
                              (W = new r(n, this._stopLevel)),
                              (W.data = 1),
                              (H = new r(n, this._profitLevel)),
                              (H.data = 2),
                              (Y = new r(o, F.y)),
                              (Y.data = 3),
                              e.append(
                                  this.createLineAnchor({points: [F, W, H, Y]})
                              )),
                          e)
                );
            }),
            (t.RiskRewardPaneView = n);
    },
    923: function(e, t, i) {
        "use strict";
        function n(e, t) {
            a.call(this, e, t),
                (this._invalidated = !0),
                (this._poligonRenderer = new l());
        }
        var r = i(1).Point,
            s = i(33).distanceToLine,
            a = i(12).LineSourcePaneView,
            o = i(16).TrendLineRenderer,
            l = i(164),
            h = i(8).CompositeRenderer,
            d = i(18).LineEnd;
        inherit(n, a),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                a.prototype._updateImpl.call(this),
                    (this._distance = 0),
                    3 === this._points.length &&
                        (this._distance = s(
                            this._points[0],
                            this._points[1],
                            this._points[2]
                        ).distance);
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, s, a, l, c, p, _, u, f, g, v;
                return (
                    this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = new h()),
                    (t = this._source.properties()),
                    (i = this._points[0]),
                    (n = this._points[1]),
                    2 === this._points.length
                        ? ((p = {}),
                          (p.points = this._points),
                          (p.floatPoints = this._floatPoints),
                          (p.width = this._model.timeScale().width()),
                          (p.height = this._source.priceScale().height()),
                          (p.color = t.color.value()),
                          (p.linewidth = 1),
                          (p.linestyle = CanvasEx.LINESTYLE_SOLID),
                          (p.extendleft = !1),
                          (p.extendright = !1),
                          (p.leftend = d.Normal),
                          (p.rightend = d.Normal),
                          (_ = new o()),
                          _.setData(p),
                          e.append(_))
                        : 3 === this._points.length &&
                          ((u = n.subtract(i)),
                          (f = new r(u.y, -u.x)
                              .normalized()
                              .scaled(this._distance)),
                          (g = f.scaled(-1)),
                          (s = i.add(f)),
                          (a = n.add(f)),
                          (l = i.add(g)),
                          (c = n.add(g)),
                          (p = {}),
                          (p.points = [s, a, c, l]),
                          (p.color = t.color.value()),
                          (p.linewidth = this._source
                              .properties()
                              .linewidth.value()),
                          (p.linestyle = CanvasEx.LINESTYLE_SOLID),
                          (p.filled = !0),
                          (p.backcolor = t.backgroundColor.value()),
                          (p.fillBackground = t.fillBackground.value()),
                          (p.transparency = t.transparency.value()),
                          this._poligonRenderer.setData(p),
                          e.append(this._poligonRenderer)),
                    this.isAnchorsRequired() &&
                        ((v = []),
                        v.push(i),
                        this._points.length >= 2 && v.push(n),
                        3 === this._points.length &&
                            ((s.data = 2),
                            (l.data = 2),
                            (a.data = 2),
                            (c.data = 2),
                            v.push(s),
                            v.push(l),
                            v.push(a),
                            v.push(c)),
                        e.append(this.createLineAnchor({points: v}))),
                    e
                );
            }),
            (t.RotatedRectanglePaneView = n);
    },
    927: function(e, t, i) {
        "use strict";
        function n(e) {
            this._data = e;
        }
        function r(e, t) {
            a.call(this, e, t), (this._invalidated = !0);
        }
        var s = i(1).Point,
            a = i(12).LineSourcePaneView,
            o = i(4),
            l = i(8).CompositeRenderer;
        (n.prototype.draw = function(e) {
            var t, i, n;
            for (
                e.strokeStyle = this._data.color,
                    e.lineWidth = this._data.linewidth,
                    CanvasEx.setLineStyle(e, this._data.linestyle),
                    e.beginPath(),
                    e.moveTo(this._data.point.x, this._data.point.y),
                    t = 1;
                t <= 2 * this._data.width;
                t++
            )
                (i = t * Math.PI / this._data.width),
                    (n = Math.sin(i - Math.PI / 2) * this._data.height / 2),
                    e.lineTo(
                        this._data.point.x + t,
                        this._data.point.y + n + this._data.height / 2
                    );
            e.stroke();
        }),
            (n.prototype.hitTest = function(e) {
                var t, i, n, r;
                return e.x < this._data.point.x ||
                    e.x > this._data.point.x + 2 * this._data.width
                    ? null
                    : ((t = e.x - this._data.point.x),
                      (i = t * Math.PI / this._data.width),
                      (n = Math.sin(i - Math.PI / 2) * this._data.height / 2),
                      (n = this._data.point.y + n + this._data.height / 2),
                      (r = 3),
                      Math.abs(n - e.y) <= r ? new o(o.MOVEPOINT) : null);
            }),
            inherit(r, a),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype.updateImpl = function() {
                a.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (r.prototype.renderer = function() {
                var e, t, i, r, a, o, h, d, c, p, _, u, f, g, v, w, y, m, x, b;
                if (
                    (this._invalidated && this.updateImpl(),
                    this._points.length < 2)
                )
                    return null;
                if (
                    ((e = this._source.points()),
                    (t = e[0]),
                    (i = e[1]),
                    (r = Math.min(t.index, i.index)),
                    (a = Math.max(t.index, i.index)),
                    (o = 2 * (a - r)),
                    (h = this._points[0]),
                    (d = this._points[1]),
                    (c = Math.abs(h.x - d.x)),
                    (p = d.y - h.y),
                    (_ = new l()),
                    (u = this._source.properties()),
                    (f = this._model.timeScale()),
                    0 === o)
                )
                    return null;
                for (g = f.indexToCoordinate(r), v = [], w = r; g > -c; w -= o)
                    (g = f.indexToCoordinate(w)), v.push(g);
                for (
                    g = g = f.indexToCoordinate(r + o), w = r + o;
                    g < f.width();
                    w += o
                )
                    (g = f.indexToCoordinate(w)), v.push(g);
                for (y = 0; y < v.length; y++)
                    (m = new s(v[y], h.y)),
                        (x = {
                            point: m,
                            width: c,
                            height: p,
                            color: u.linecolor.value(),
                            linewidth: u.linewidth.value(),
                            linestyle: u.linestyle.value()
                        }),
                        (b = new n(x)),
                        _.append(b);
                return this.addAnchors(_), _;
            }),
            (t.SineLinePaneView = r);
    },
    929: function(e, t, i) {
        "use strict";
        function n(e, t) {
            r.call(this, e, t),
                (this._numericFormatter = new l()),
                (this._invalidated = !0),
                (this._retrace1LabelRenderer = new a({})),
                (this._retrace12LabelRenderer = new a({}));
        }
        var r = i(12).LineSourcePaneView,
            s = i(16).TrendLineRenderer,
            a = i(27).TextRenderer,
            o = i(8).CompositeRenderer,
            l = i(38).NumericFormatter,
            h = i(19),
            d = i(18).LineEnd;
        inherit(n, r),
            (n.prototype.renderer = function() {
                var e, t, i, n, r, a, l, c, p, _;
                if (
                    (this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    this._points.length < 2)
                )
                    return null;
                for (
                    e = this._source.properties(),
                        t = new o(),
                        i = this,
                        n = function(t, n) {
                            return {
                                points: [t],
                                text: n,
                                color: e.textcolor.value(),
                                vertAlign: "middle",
                                horzAlign: "center",
                                font: e.font.value(),
                                offsetX: 0,
                                offsetY: 0,
                                bold: e.bold && e.bold.value(),
                                italic: e.italic && e.italic.value(),
                                fontsize: e.fontsize.value(),
                                backgroundColor: i._source
                                    .properties()
                                    .color.value(),
                                backgroundRoundRect: 4
                            };
                        },
                        r = function(t, n, r, s) {
                            return {
                                points: [t, n],
                                width: i._model.timeScale().width(),
                                height: i._source.priceScale().height(),
                                color: h.generateColor(
                                    i._source.properties().color.value(),
                                    r
                                ),
                                linewidth: s || e.linewidth.value(),
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                extendleft: !1,
                                extendright: !1,
                                leftend: d.Normal,
                                rightend: d.Normal
                            };
                        },
                        a = 1;
                    a < this._points.length;
                    a++
                )
                    (l = r(this._points[a - 1], this._points[a], 0)),
                        (c = new s()),
                        c.setData(l),
                        t.append(c);
                return (
                    this._retrace1 &&
                        ((l = r(this._points[1], this._points[3], 70, 1)),
                        (c = new s()),
                        c.setData(l),
                        t.append(c),
                        (p = this._points[1].add(this._points[3]).scaled(0.5)),
                        (_ = n(
                            p,
                            this._numericFormatter.format(this._retrace1)
                        )),
                        this._retrace1LabelRenderer.setData(_),
                        t.append(this._retrace1LabelRenderer)),
                    this._retrace2 &&
                        ((l = r(this._points[3], this._points[5], 70, 1)),
                        (c = new s()),
                        c.setData(l),
                        t.append(c),
                        (p = this._points[5].add(this._points[3]).scaled(0.5)),
                        (_ = n(
                            p,
                            this._numericFormatter.format(this._retrace2)
                        )),
                        this._retrace12LabelRenderer.setData(_),
                        t.append(this._retrace12LabelRenderer)),
                    this.addAnchors(t),
                    t
                );
            }),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n, s;
                r.prototype._updateImpl.call(this),
                    delete this._retrace1,
                    delete this._retrace2,
                    this._source.points().length >= 4 &&
                        ((e = this._source.points()[1]),
                        (t = this._source.points()[2]),
                        (i = this._source.points()[3]),
                        (this._retrace1 =
                            Math.round(
                                100 *
                                    Math.abs(
                                        (i.price - t.price) /
                                            (t.price - e.price)
                                    )
                            ) / 100)),
                    this._source.points().length >= 6 &&
                        ((i = this._source.points()[3]),
                        (n = this._source.points()[4]),
                        (s = this._source.points()[5]),
                        (this._retrace2 =
                            Math.round(
                                100 *
                                    Math.abs(
                                        (s.price - n.price) /
                                            (n.price - i.price)
                                    )
                            ) / 100));
            }),
            (t.LineToolThreeDrivesPaneView = n);
    },
    931: function(e, t, i) {
        "use strict";
        function n() {
            this._data = null;
        }
        function r(e, t) {
            a.call(this, e, t), (this._invalidated = !0);
        }
        var s = i(1).Point,
            a = i(12).LineSourcePaneView,
            o = i(4),
            l = i(8).CompositeRenderer,
            h = i(19);
        (n.prototype.setData = function(e) {
            this._data = e;
        }),
            (n.prototype.draw = function(e) {
                null !== this._data &&
                    ((e.strokeStyle = this._data.color),
                    (e.lineWidth = this._data.linewidth),
                    CanvasEx.setLineStyle(e, this._data.linestyle),
                    e.save(),
                    e.translate(this._data.point.x + 1, this._data.point.y),
                    e.scale(this._data.width, this._data.height),
                    e.beginPath(),
                    e.arc(0.5, 0, 0.5, Math.PI, 0, !1),
                    e.restore(),
                    e.stroke(),
                    this._data.fillBackground &&
                        ((e.fillStyle = h.generateColor(
                            this._data.backcolor,
                            this._data.transparency
                        )),
                        e.fill()));
            }),
            (n.prototype.hitTest = function(e) {
                var t, i, n, r, a;
                return null === this._data || e.y > this._data.point.y
                    ? null
                    : e.x < this._data.point.x ||
                      e.x > this._data.point.x + this._data.width
                        ? null
                        : ((t = new s(
                              this._data.point.x + this._data.width / 2,
                              this._data.point.y
                          )),
                          (i = e.subtract(t)),
                          (n = this._data.height / this._data.width),
                          (i.y /= n),
                          (r = i.length()),
                          (a = 3),
                          Math.abs(r - this._data.width / 2) < a
                              ? new o(o.MOVEPOINT)
                              : null);
            }),
            inherit(r, a),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype.updateImpl = function() {
                a.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (r.prototype.renderer = function() {
                var e, t, i, r, a, o, h, d, c, p, _, u, f, g, v, w, y, m, x;
                if (
                    (this._invalidated && this.updateImpl(),
                    this._points.length < 2)
                )
                    return null;
                if (
                    ((e = this._source.points()),
                    (t = e[0]),
                    (i = e[1]),
                    (r = Math.min(t.index, i.index)),
                    (a = Math.max(t.index, i.index)),
                    (o = a - r),
                    (h = this._points[0]),
                    (d = this._points[1]),
                    (c = Math.abs(h.x - d.x)),
                    (p = new l()),
                    (_ = this._source.properties()),
                    (u = this._model.timeScale()),
                    0 === o)
                )
                    return null;
                for (f = Math.min(h.x, d.x), g = [], v = r; f > -c; v -= o)
                    (f = u.indexToCoordinate(v)), g.push(f);
                for (f = Math.max(h.x, d.x), v = a; f < u.width(); v += o)
                    (f = u.indexToCoordinate(v)), g.push(f);
                for (w = 0; w < g.length; w++)
                    (y = new s(g[w], h.y)),
                        (m = {
                            point: y,
                            width: c,
                            height: c,
                            color: _.linecolor.value(),
                            linewidth: _.linewidth.value(),
                            linestyle: _.linestyle.value(),
                            fillBackground: _.fillBackground.value(),
                            backcolor: _.backgroundColor.value(),
                            transparency: _.transparency.value()
                        }),
                        (x = new n()),
                        x.setData(m),
                        p.append(x);
                return this.addAnchors(p), p;
            }),
            (t.TimeCyclesPaneView = r);
    },
    933: function(e, t, i) {
        "use strict";
        function n() {
            this._data = null;
        }
        function r(e, t) {
            a.call(this, e, t),
                (this._label = null),
                (this._rendererCache = {}),
                (this._invalidated = !0),
                (this._pipFormatter = null),
                (this._lastSymbolInfo = null),
                (this._trendLineRenderer = new h()),
                (this._angleRenderer = new n()),
                (this._angleLabelRenderer = new l({}));
        }
        var s = i(1).Point,
            a = i(12).LineSourcePaneView,
            o = i(423).TrendLineStatsRenderer,
            l = i(27).TextRenderer,
            h = i(16).TrendLineRenderer,
            d = i(8).CompositeRenderer,
            c = i(94).PercentageFormatter,
            p = i(74).SelectionRenderer,
            _ = i(145).PipFormatter,
            u = i(18).LineEnd,
            f = i(313).LabelSettings,
            g = i(105).PaneRendererClockIcon;
        (n.prototype.setData = function(e) {
            this._data = e;
        }),
            (n.prototype.hitTest = function() {
                return null;
            }),
            (n.prototype.draw = function(e) {
                var t, i;
                null !== this._data &&
                    (e.save(),
                    e.translate(this._data.point.x, this._data.point.y),
                    (e.strokeStyle = this._data.color),
                    (t = [1, 2]),
                    "function" == typeof e.setLineDash
                        ? e.setLineDash(t)
                        : void 0 !== e.mozDash
                            ? (e.mozDash = t)
                            : void 0 !== e.webkitLineDash &&
                              (e.webkitLineDash = t),
                    (i = this._data.size),
                    e.beginPath(),
                    e.moveTo(0, 0),
                    e.lineTo(i, 0),
                    e.arc(0, 0, i, 0, -this._data.angle, this._data.angle > 0),
                    e.stroke(),
                    e.restore());
            }),
            inherit(r, a),
            (r.prototype.update = function() {
                this._invalidated = !0;
            }),
            (r.prototype.updateImpl = function() {
                var e, t, i, n, r, o, l, h, d, p, u, f, g;
                a.prototype._updateImpl.call(this),
                    this._points.length > 0 &&
                        void 0 !== this._source._angle &&
                        ((e = this._points[0]),
                        (t = Math.cos(this._source._angle)),
                        (i = -Math.sin(this._source._angle)),
                        (n = new s(t, i)),
                        (this._secondPoint = e.addScaled(
                            n,
                            this._source._distance
                        )),
                        (this._secondPoint.data = 1),
                        (this._middlePoint = this._source.calcMiddlePoint(
                            this._points[0],
                            this._secondPoint
                        ))),
                    (this._label = null),
                    this._source.points().length < 2 ||
                        ((e = this._source.points()[0]),
                        (r = this._source.points()[1]),
                        (o = []),
                        this._source.properties().showPriceRange.value() &&
                            this._source.priceScale() &&
                            ((d = r.price - e.price),
                            (p = d / e.price),
                            (l =
                                this._source
                                    .priceScale()
                                    .formatter()
                                    .format(d) +
                                " (" +
                                new c().format(100 * p) +
                                ")"),
                            (u = this._model.mainSeries().symbolInfo()),
                            u &&
                                u !== this._lastSymbolInfo &&
                                ((this._pipFormatter = new _(
                                    u.pricescale,
                                    u.minmov,
                                    u.type,
                                    u.minmove2
                                )),
                                (this._lastSymbolInfo = u)),
                            (l += this._pipFormatter
                                ? ", " + this._pipFormatter.format(d)
                                : ""),
                            o.push("priceRange")),
                        (f = this._source.properties().showBarsRange.value()),
                        f &&
                            ((h = ""),
                            (g = r.index - e.index),
                            (h += $.t("{0} bars").format(g)),
                            o.push("barsRange")),
                        (this._label =
                            [l, h]
                                .filter(function(e) {
                                    return e;
                                })
                                .join("\n") || null),
                        (this._icons = o));
            }),
            (r.prototype.renderer = function() {
                var e, t, i, n, r, s, a, l, h, c, _;
                return (
                    this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = new d()),
                    (t = {}),
                    (i = this.isAnchorsRequired()),
                    (n =
                        i || this._source.properties().alwaysShowStats.value()),
                    (r =
                        (this.isHoveredSource() || this.isSelectedSource()) &&
                        this._source.properties().showMiddlePoint.value()),
                    this._secondPoint &&
                        this._points.length > 0 &&
                        ((t.points = [this._points[0], this._secondPoint]),
                        (t.width = this._model.timeScale().width()),
                        (t.height = this._source.priceScale().height()),
                        (t.color = this._source.properties().linecolor.value()),
                        (t.linewidth = this._source
                            .properties()
                            .linewidth.value()),
                        (t.linestyle = this._source
                            .properties()
                            .linestyle.value()),
                        (t.extendleft = this._source
                            .properties()
                            .extendLeft.value()),
                        (t.extendright = this._source
                            .properties()
                            .extendRight.value()),
                        (t.leftend = u.Normal),
                        (t.rightend = u.Normal),
                        this._trendLineRenderer.setData(t),
                        e.append(this._trendLineRenderer),
                        n &&
                            this._label &&
                            2 === this._points.length &&
                            ((s = {
                                points: [this._secondPoint],
                                text: this._label,
                                color: this._source
                                    .properties()
                                    .textcolor.value(),
                                font: f.font,
                                fontsize: f.fontSize,
                                lineSpacing: f.lineSpacing,
                                backgroundColor: f.bgColor,
                                borderColor: f.borderColor,
                                borderWidth: 1,
                                padding: f.padding,
                                paddingLeft: 30,
                                doNotAlignText: !0,
                                icons: this._icons
                            }),
                            (a = f.offset),
                            this._points[1].y < this._points[0].y
                                ? ((s.vertAlign = "bottom"), (s.offsetY = -a))
                                : (s.offsetY = a),
                            this._points[1].x < this._points[0].x
                                ? ((s.horzAlign = "right"), (s.offsetX = -a))
                                : (s.offsetX = a),
                            e.append(new o(s, this._rendererCache))),
                        r &&
                            this._middlePoint &&
                            e.append(new p({points: [this._middlePoint]})),
                        (l = {}),
                        (l.point = this._points[0]),
                        (l.angle = this._source._angle),
                        (l.color = this._source.properties().linecolor.value()),
                        (l.size = 50),
                        this._angleRenderer.setData(l),
                        e.append(this._angleRenderer),
                        (h = Math.round(180 * l.angle / Math.PI) + "º"),
                        (c = this._points[0].clone()),
                        (c.x = c.x + 50),
                        (_ = {
                            points: [c],
                            text: h,
                            color: this._source.properties().textcolor.value(),
                            horzAlign: "left",
                            font: this._source.properties().font.value(),
                            offsetX: 5,
                            offsetY: 0,
                            bold: this._source.properties().bold.value(),
                            italic: this._source.properties().italic.value(),
                            fontsize: this._source
                                .properties()
                                .fontsize.value(),
                            vertAlign: "middle"
                        }),
                        this._angleLabelRenderer.setData(_),
                        e.append(this._angleLabelRenderer)),
                    !TradingView.printing &&
                        this._source.hasAlert.value() &&
                        !this._model.readOnly() &&
                        t &&
                        t.points &&
                        t.points.length >= 2 &&
                        this._source.getAlertIsActive(function(i) {
                            e.append(
                                new g({
                                    point1: t.points[0],
                                    point2: t.points[1],
                                    color: i
                                        ? t.color
                                        : defaults(
                                              "chartproperties.alertsProperties.drawingIcon.color"
                                          )
                                })
                            );
                        }),
                    this._secondPoint &&
                        this._points.length > 0 &&
                        i &&
                        e.append(
                            this.createLineAnchor({
                                points: [this._points[0], this._secondPoint]
                            })
                        ),
                    e
                );
            }),
            (t.TrendAnglePaneView = r);
    },
    935: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._rendererCache = {}),
                (this._trendLineRendererPoints12 = new o()),
                (this._trendLineRendererPoints23 = new o());
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(70).RectangleRenderer,
            o = i(16).TrendLineRenderer,
            l = i(117),
            h = i(4),
            d = i(8).CompositeRenderer,
            c = i(18).LineEnd;
        inherit(n, s),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype._updateImpl = function() {
                var e, t, i, n, r, a, o, l, h, d, c, p, _, u, f;
                if (
                    (s.prototype._updateImpl.call(this),
                    (this._cacheState = this._model._trendBasedFibExtensionLabelsCache.updateSource(
                        this._source
                    )),
                    !(this._source.points().length < 3) &&
                        this._source.priceScale() &&
                        !this._source.priceScale().isEmpty() &&
                        !this._model.timeScale().isEmpty())
                )
                    for (
                        e = this._source.points()[0],
                            t = this._source.points()[1],
                            i = this._source.points()[2],
                            n = !1,
                            r = this._source.properties(),
                            r.reverse &&
                                r.reverse.value() &&
                                (n = r.reverse.value()),
                            this._levels = [],
                            a = n ? e.price - t.price : t.price - e.price,
                            this._source.priceScale().isPercent() &&
                                (o = this._source.ownerSource().firstValue()),
                            l = this._source.levelsCount(),
                            h = 1;
                        h <= l;
                        h++
                    )
                        (d = "level" + h),
                            (c = r[d]),
                            c.visible.value() &&
                                ((p = c.coeff.value()),
                                (_ = c.color.value()),
                                (u = i.price + p * a),
                                this._source.priceScale().isPercent() &&
                                    (u = this._source
                                        .priceScale()
                                        .priceRange()
                                        .convertToPercent(u, o)),
                                (f = this._source
                                    .priceScale()
                                    .priceToCoordinate(u)),
                                this._levels.push({
                                    color: _,
                                    y: f,
                                    linewidth: r.levelsStyle.linewidth.value(),
                                    linestyle: r.levelsStyle.linestyle.value(),
                                    index: h
                                }));
            }),
            (n.prototype.renderer = function() {
                var e,
                    t,
                    i,
                    n,
                    s,
                    p,
                    _,
                    u,
                    f,
                    g,
                    v,
                    w,
                    y,
                    m,
                    x,
                    b,
                    S,
                    P,
                    R,
                    T,
                    L,
                    C,
                    k,
                    I;
                if (
                    (this._invalidated &&
                        (this._updateImpl(), (this._invalidated = !1)),
                    (e = new d()),
                    this._points.length < 2)
                )
                    return e;
                if (
                    ((t = this._points[0]),
                    (i = this._points[1]),
                    (n = this._source.properties()),
                    n.trendline.visible.value() &&
                        ((s = {
                            points: [t, i],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: n.trendline.color.value(),
                            linewidth: n.trendline.linewidth.value(),
                            linestyle: n.trendline.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: c.Normal,
                            rightend: c.Normal
                        }),
                        this._trendLineRendererPoints12.setData(s),
                        e.append(this._trendLineRendererPoints12)),
                    this._points.length < 3)
                )
                    return this.addAnchors(e), e;
                for (
                    p = this._points[2],
                        n.trendline.visible.value() &&
                            ((s = {
                                points: [i, p],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: n.trendline.color.value(),
                                linewidth: n.trendline.linewidth.value(),
                                linestyle: n.trendline.linestyle.value(),
                                extendleft: !1,
                                extendright: !1,
                                leftend: c.Normal,
                                rightend: c.Normal
                            }),
                            this._trendLineRendererPoints23.setData(s),
                            e.append(this._trendLineRendererPoints23)),
                        _ = Math.min(p.x, i.x),
                        u = Math.max(p.x, i.x),
                        f = n.fillBackground.value(),
                        g = n.transparency.value(),
                        v = n.extendLines.value()
                            ? this._model.timeScale().width()
                            : u,
                        w = this._model._trendBasedFibExtensionLabelsCache,
                        y = w.canvas().get(0),
                        m = 0;
                    m < this._levels.length;
                    m++
                )
                    if (
                        (m > 0 &&
                            f &&
                            ((x = this._levels[m - 1]),
                            (t = new r(_, this._levels[m].y)),
                            (i = new r(v, x.y)),
                            (b = {}),
                            (b.points = [t, i]),
                            (b.color = this._levels[m].color),
                            (b.linewidth = 0),
                            (b.backcolor = this._levels[m].color),
                            (b.fillBackground = !0),
                            (b.transparency = g),
                            (S = new a(void 0, void 0, !0)),
                            S.setData(b),
                            e.append(S)),
                        (t = new r(_, this._levels[m].y)),
                        (i = new r(u, this._levels[m].y)),
                        (s = {
                            points: [t, i],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: this._levels[m].color,
                            linewidth: this._levels[m].linewidth,
                            linestyle: this._levels[m].linestyle,
                            extendleft: !1,
                            extendright: n.extendLines.value(),
                            leftend: c.Normal,
                            rightend: c.Normal
                        }),
                        (P = new o()),
                        P.setData(s),
                        P.setHitTest(
                            new h(h.MOVEPOINT, null, this._levels[m].index)
                        ),
                        e.append(P),
                        n.showCoeffs.value() || n.showPrices.value())
                    ) {
                        if (
                            !(R = this._cacheState.preparedCells.cells[
                                this._levels[m].index - 1
                            ])
                        )
                            continue;
                        switch (n.horzLabelsAlign.value()) {
                            case "left":
                                T = t;
                                break;
                            case "center":
                                (T = t.add(i).scaled(0.5)),
                                    (T.x += R.width / 2),
                                    (T.x = Math.round(T.x));
                                break;
                            case "right":
                                n.extendLines.value()
                                    ? (T = new r(v - 4, this._levels[m].y))
                                    : ((T = new r(v + 4, this._levels[m].y)),
                                      (T.x += R.width),
                                      (T.x = Math.round(T.x)));
                        }
                        (L = {
                            left: R.left,
                            top: w.topByRow(this._cacheState.row),
                            width: R.width,
                            height: w.rowHeight(this._cacheState.row)
                        }),
                            (C = {
                                left: T.x - L.width,
                                top: T.y,
                                width: R.width,
                                height: L.height
                            }),
                            (k = n.vertLabelsAlign.value()),
                            "middle" === k && (C.top -= C.height / 2),
                            "bottom" === k && (C.top -= C.height),
                            (I = new l(y, L, C)),
                            e.append(I);
                    }
                return this.addAnchors(e), e;
            }),
            (t.TrendBasedFibExtensionPaneView = n);
    },
    937: function(e, t, i) {
        "use strict";
        function n(e, t) {
            a.call(this, e, t),
                (this._invalidated = !0),
                (this._trendLineRendererPoints12 = new h()),
                (this._trendLineRendererPoints23 = new h());
        }
        var r = i(1).Point,
            s = i(146).VerticalLineRenderer,
            a = i(12).LineSourcePaneView,
            o = i(27).TextRenderer,
            l = i(70).RectangleRenderer,
            h = i(16).TrendLineRenderer,
            d = i(4),
            c = i(8).CompositeRenderer,
            p = i(18).LineEnd;
        inherit(n, a),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n, r, s, o, l, h, d, c, p, _, u;
                if (
                    (a.prototype._updateImpl.call(this),
                    !(this._source.points().length < 3) &&
                        this._source.priceScale() &&
                        !this._source.priceScale().isEmpty() &&
                        !this._model.timeScale().isEmpty() &&
                        ((e = this._source.points()[0]),
                        (t = this._source.points()[1]),
                        (i = this._source.points()[2]),
                        (this._levels = []),
                        t.index !== e.index &&
                            ((n = t.index - e.index),
                            (r = this._source.properties()),
                            (s = i.index),
                            null !== this._model.timeScale().visibleBars())))
                )
                    for (o = 1; o <= 11; o++)
                        (l = "level" + o),
                            (h = r[l]),
                            h.visible.value() &&
                                ((d = h.coeff.value()),
                                (c = h.color.value()),
                                (p = Math.round(s + d * n)),
                                (_ = this._model
                                    .timeScale()
                                    .indexToCoordinate(p)),
                                (u = {
                                    x: _,
                                    coeff: d,
                                    color: c,
                                    linewidth: h.linewidth.value(),
                                    linestyle: h.linestyle.value(),
                                    index: o
                                }),
                                r.showCoeffs.value() &&
                                    ((u.text = d),
                                    (u.y = this._source.priceScale().height())),
                                this._levels.push(u));
            }),
            (n.prototype.renderer = function() {
                var e,
                    t,
                    i,
                    n,
                    a,
                    h,
                    _,
                    u,
                    f,
                    g,
                    v,
                    w,
                    y,
                    m,
                    x,
                    b,
                    S,
                    P,
                    R,
                    T,
                    L;
                if (
                    (this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    (e = new c()),
                    this._points.length < 2)
                )
                    return e;
                if (
                    ((t = this._points[0]),
                    (i = this._points[1]),
                    (n = this._source.properties()),
                    n.trendline.visible.value() &&
                        ((a = {
                            points: [t, i],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: n.trendline.color.value(),
                            linewidth: n.trendline.linewidth.value(),
                            linestyle: n.trendline.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: p.Normal,
                            rightend: p.Normal
                        }),
                        this._trendLineRendererPoints12.setData(a),
                        e.append(this._trendLineRendererPoints12)),
                    this._points.length < 3)
                )
                    return this.addAnchors(e), e;
                for (
                    h = this._points[2],
                        n.trendline.visible.value() &&
                            ((a = {
                                points: [i, h],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: n.trendline.color.value(),
                                linewidth: n.trendline.linewidth.value(),
                                linestyle: n.trendline.linestyle.value(),
                                extendleft: !1,
                                extendright: !1,
                                leftend: p.Normal,
                                rightend: p.Normal
                            }),
                            this._trendLineRendererPoints23.setData(a),
                            e.append(this._trendLineRendererPoints23)),
                        _ = n.fillBackground.value(),
                        u = n.transparency.value(),
                        f = this._model.timeScale().width(),
                        g = this._source.priceScale().height(),
                        v = 0;
                    v < this._levels.length;
                    v++
                ) {
                    if (
                        (v > 0 &&
                            _ &&
                            ((w = this._levels[v - 1]),
                            (t = new r(w.x, 0)),
                            (i = new r(
                                this._levels[v].x,
                                this._source.priceScale().height()
                            )),
                            (y = {}),
                            (y.points = [t, i]),
                            (y.color = this._levels[v].color),
                            (y.linewidth = 0),
                            (y.backcolor = this._levels[v].color),
                            (y.fillBackground = !0),
                            (y.transparency = u),
                            (m = new l(void 0, void 0, !0)),
                            m.setData(y),
                            e.append(m)),
                        void 0 !== this._levels[v].text)
                    ) {
                        switch (((P = n.horzLabelsAlign.value()),
                        (P =
                            "left" === P
                                ? "right"
                                : "right" === P ? "left" : "center"))) {
                            case "left":
                                b = 3;
                                break;
                            case "center":
                                b = 0;
                                break;
                            case "right":
                                b = -3;
                        }
                        switch (n.vertLabelsAlign.value()) {
                            case "top":
                                (x = new r(this._levels[v].x, 0)), (S = 5);
                                break;
                            case "middle":
                                (x = new r(
                                    this._levels[v].x,
                                    0.5 * this._levels[v].y
                                )),
                                    (S = 0);
                                break;
                            case "bottom":
                                (x = new r(
                                    this._levels[v].x,
                                    this._levels[v].y
                                )),
                                    (S = -10);
                        }
                        (R = {
                            points: [x],
                            text: "" + this._levels[v].text,
                            color: this._levels[v].color,
                            vertAlign: "middle",
                            horzAlign: P,
                            font: n.font.value(),
                            offsetX: b,
                            offsetY: S,
                            fontsize: 12
                        }),
                            e.append(new o(R));
                    }
                    (T = {}),
                        (T.width = f),
                        (T.height = g),
                        (T.points = [new r(this._levels[v].x, 0)]),
                        (T.color = this._levels[v].color),
                        (T.linewidth = this._levels[v].linewidth),
                        (T.linestyle = this._levels[v].linestyle),
                        (L = new d(d.MOVEPOINT, null, this._levels[v].index)),
                        (m = new s()),
                        m.setData(T),
                        m.setHitTest(L),
                        e.append(m);
                }
                return this.addAnchors(e), e;
            }),
            (t.TrendBasedFibTimePaneView = n);
    },
    939: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._label = null),
                (this._rendererCache = {}),
                (this._invalidated = !0),
                (this._labelDataInvalidated = !0),
                (this._percentageFormatter = new h()),
                (this._numericFormatter = new d()),
                (this._pipFormatter = null),
                (this._lastSymbolInfo = null),
                (this._trendRenderer = new u());
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(117),
            o = i(105).PaneRendererClockIcon,
            l = i(8).CompositeRenderer,
            h = i(94).PercentageFormatter,
            d = i(38).NumericFormatter,
            c = i(175).TimeSpanFormatter,
            p = i(145).PipFormatter,
            _ = i(74).SelectionRenderer,
            u = i(16).TrendLineRenderer,
            f = i(313).LabelSettings;
        inherit(n, s),
            (n.prototype.update = function() {
                (this._invalidated = !0), (this._labelDataInvalidated = !0);
            }),
            (n.prototype.updateImpl = function() {
                var e,
                    t,
                    i,
                    n,
                    r,
                    a,
                    o,
                    l,
                    h,
                    d,
                    c = this._source.points();
                c.length < 2 ||
                    ((e = c[0]),
                    (t = c[1]),
                    null !== (i = this._model.timeScale().visibleBars()) &&
                        ((n = this._source.properties()),
                        (e.index < i.firstBar() &&
                            t.index < i.firstBar() &&
                            !n.extendLeft.value() &&
                            !n.extendRight.value()) ||
                            (s.prototype._updateImpl.call(this),
                            this._points.length < 2 ||
                                ((r = n.showBarsRange.value()),
                                (a = n.showDateTimeRange.value()),
                                (o = n.showDistance.value()),
                                (l = n.showPriceRange.value()),
                                (h = n.showAngle.value()),
                                l || r || a || o || h
                                    ? ((d = this),
                                      (this._statCache = this._model._trendLineStatsCache.updateSource(
                                          this._source,
                                          function() {
                                              return d._statLabelData();
                                          }
                                      )))
                                    : (this._model._trendLineStatsCache.removeSource(
                                          this._source.id()
                                      ),
                                      (this._label = null),
                                      this._labelData &&
                                          ((this._labelData.text = ""),
                                          (this._labelData.lines = []))),
                                (this._invalidated = !1)))));
            }),
            (n.prototype._statLabelData = function() {
                var e,
                    t,
                    i,
                    n,
                    s,
                    a,
                    o,
                    l,
                    h,
                    d,
                    _,
                    u,
                    g,
                    v,
                    w,
                    y,
                    m,
                    x,
                    b,
                    S,
                    P,
                    R,
                    T,
                    L,
                    C,
                    k,
                    I;
                return (
                    this._labelDataInvalidated &&
                        ((e = this._source.points()),
                        (t = e[0]),
                        (i = e[1]),
                        (n = this._source.properties()),
                        (s = []),
                        (_ = n.showPriceRange.value()),
                        _ &&
                            this._source.priceScale() &&
                            ((h = i.price - t.price),
                            (u = h / t.price),
                            (a =
                                this._source
                                    .priceScale()
                                    .formatter()
                                    .format(h) +
                                " (" +
                                this._percentageFormatter.format(100 * u) +
                                ")"),
                            (g = this._model.mainSeries().symbolInfo()),
                            g &&
                                g !== this._lastSymbolInfo &&
                                ((this._pipFormatter = new p(
                                    g.pricescale,
                                    g.minmov,
                                    g.type,
                                    g.minmove2
                                )),
                                (this._lastSymbolInfo = g)),
                            (a += this._pipFormatter
                                ? ", " + this._pipFormatter.format(h)
                                : ""),
                            s.push("priceRange")),
                        (v = n.showBarsRange.value()),
                        (w = n.showDateTimeRange.value()),
                        (y = n.showDistance.value()),
                        (v || w || y) &&
                            ((o = ""),
                            v &&
                                ((d = i.index - t.index),
                                (o += $.t("{0} bars").format(d))),
                            w &&
                                ((m = this._model
                                    .timeScale()
                                    .indexToUserTime(t.index)),
                                (x = this._model
                                    .timeScale()
                                    .indexToUserTime(i.index)),
                                m &&
                                    x &&
                                    ((b = (x.valueOf() - m.valueOf()) / 1e3),
                                    (S = new c().format(b)) &&
                                        (o += v ? " (" + S + ")" : S))),
                            y &&
                                (o && (o += ", "),
                                void 0 === h && (h = i.price - t.price),
                                void 0 === d && (d = i.index - t.index),
                                (P =
                                    Math.round(1e5 * Math.sqrt(h * h + d * d)) /
                                    1e5),
                                (o += $.t("distance: {0}").format(
                                    this._numericFormatter.format(P)
                                ))),
                            o && s.push("barsRange")),
                        (R = n.showAngle.value()),
                        R &&
                            ((T = this._source.pointToScreenPoint(t)),
                            (L = this._source.pointToScreenPoint(i)),
                            (T =
                                T instanceof Array
                                    ? T[0]
                                    : T instanceof r ? T : null),
                            (L =
                                L instanceof Array
                                    ? L[0]
                                    : L instanceof r ? L : null),
                            T instanceof r &&
                                L instanceof r &&
                                ((k = L.subtract(T)),
                                k.length() > 0 &&
                                    ((k = k.normalized()),
                                    (C = Math.acos(k.x)),
                                    k.y > 0 && (C = -C))),
                            "number" != typeof C ||
                                TradingView.isNaN(C) ||
                                ((l = Math.round(180 * C / Math.PI) + "º"),
                                s.push("angle"))),
                        (this._label =
                            [a, o, l]
                                .filter(function(e) {
                                    return e;
                                })
                                .join("\n") || null),
                        (this._icons = s),
                        (this._labelDataInvalidated = !1)),
                    (I = {
                        points: [this._points[1]],
                        text: this._label,
                        color: this._source.properties().textcolor.value(),
                        font: f.font,
                        fontsize: f.fontSize,
                        lineSpacing: f.lineSpacing,
                        backgroundColor: f.bgColor,
                        borderColor: f.borderColor,
                        borderWidth: 1,
                        padding: f.padding,
                        paddingLeft: 30,
                        doNotAlignText: !0,
                        icons: this._icons
                    }),
                    this._points[1].y < this._points[0].y &&
                        (I.vertAlign = "bottom"),
                    this._points[1].x < this._points[0].x &&
                        (I.horzAlign = "right"),
                    (this._labelData = I),
                    I
                );
            }),
            (n.prototype.renderer = function() {
                var e, t, i, n, r, s, h, d, c, p;
                return (
                    this._invalidated && this.updateImpl(),
                    (e = new l()),
                    this._invalidated
                        ? e
                        : this._source.priceScale()
                            ? ((t = {}),
                              (t.points = this._points),
                              (t.floatPoints = this._floatPoints),
                              (t.width = this._model.timeScale().width()),
                              (t.height = this._source.priceScale().height()),
                              (t.color = this._source
                                  .properties()
                                  .linecolor.value()),
                              (t.linewidth = this._source
                                  .properties()
                                  .linewidth.value()),
                              (t.linestyle = this._source
                                  .properties()
                                  .linestyle.value()),
                              (t.extendleft = this._source
                                  .properties()
                                  .extendLeft.value()),
                              (t.extendright = this._source
                                  .properties()
                                  .extendRight.value()),
                              (t.leftend = this._source
                                  .properties()
                                  .leftEnd.value()),
                              (t.rightend = this._source
                                  .properties()
                                  .rightEnd.value()),
                              this._trendRenderer.setData(t),
                              e.append(this._trendRenderer),
                              (i = this.isAnchorsRequired()),
                              (n =
                                  i ||
                                  this._source
                                      .properties()
                                      .alwaysShowStats.value()),
                              (r =
                                  (this.isHoveredSource() ||
                                      this.isSelectedSource()) &&
                                  this._source
                                      .properties()
                                      .showMiddlePoint.value()),
                              n &&
                                  this._label &&
                                  2 === this._points.length &&
                                  ((s = this._points[1]),
                                  (h = {
                                      left: 0,
                                      top: this._model._trendLineStatsCache.topByRow(
                                          this._statCache.row
                                      ),
                                      width: this._model._trendLineStatsCache.rowWidth(
                                          this._statCache.row
                                      ),
                                      height: this._model._trendLineStatsCache.rowHeight(
                                          this._statCache.row
                                      )
                                  }),
                                  (d = {
                                      left: s.x,
                                      top: s.y,
                                      width: h.width,
                                      height: h.height
                                  }),
                                  "right" === this._labelData.horzAlign
                                      ? (d.left -= f.padding + d.width)
                                      : (d.left += f.padding),
                                  "bottom" === this._labelData.vertAlign
                                      ? (d.top -= f.padding + d.height)
                                      : (d.top += f.padding),
                                  (c = this._model._trendLineStatsCache.canvas()),
                                  (p = new a(c.get(0), h, d)),
                                  e.append(p)),
                              r &&
                                  this._middlePoint &&
                                  e.append(
                                      new _({points: [this._middlePoint]})
                                  ),
                              this.addAnchors(e),
                              !TradingView.printing &&
                                  this._source.hasAlert.value() &&
                                  !this._model.readOnly() &&
                                  t.points.length >= 2 &&
                                  this._source.getAlertIsActive(function(i) {
                                      e.append(
                                          new o({
                                              point1: t.points[0],
                                              point2: t.points[1],
                                              color: i
                                                  ? t.color
                                                  : defaults(
                                                        "chartproperties.alertsProperties.drawingIcon.color"
                                                    )
                                          })
                                      );
                                  }),
                              e)
                            : e
                );
            }),
            (t.TrendLinePaneView = n);
    },
    940: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._invalidated = !0),
                (this._trendLineRendererPoints01 = new o()),
                (this._trendLineRendererPoints12 = new o()),
                (this._trendLineRendererPoints23 = new o()),
                (this._intersectionRenderer = new a()),
                (this._poligonRenderer = new h()),
                (this._aLabelRenderer = new l({})),
                (this._bLabelRenderer = new l({})),
                (this._cLabelRenderer = new l({})),
                (this._dLabelRenderer = new l({}));
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(230).TriangleRenderer,
            o = i(16).TrendLineRenderer,
            l = i(27).TextRenderer,
            h = i(164),
            d = i(8).CompositeRenderer,
            c = i(18).LineEnd;
        inherit(n, s),
            (n.prototype.renderer = function() {
                var e, t, i, n, r, s, a, o, l;
                return (
                    this._invalidated &&
                        (this.updateImpl(), (this._invalidated = !1)),
                    this._points.length < 2
                        ? null
                        : ((e = this._source.properties()),
                          (t = new d()),
                          (i = this),
                          (n = function(t, n) {
                              return {
                                  points: [t],
                                  text: n,
                                  color: e.textcolor.value(),
                                  vertAlign: "middle",
                                  horzAlign: "center",
                                  font: e.font.value(),
                                  offsetX: 0,
                                  offsetY: 0,
                                  bold: e.bold && e.bold.value(),
                                  italic: e.italic && e.italic.value(),
                                  fontsize: e.fontsize.value(),
                                  backgroundColor: i._source
                                      .properties()
                                      .color.value(),
                                  backgroundRoundRect: 4
                              };
                          }),
                          (r = function(t, n) {
                              return {
                                  points: [t, n],
                                  width: i._model.timeScale().width(),
                                  height: i._source.priceScale().height(),
                                  color: i._source.properties().color.value(),
                                  linewidth: e.linewidth.value(),
                                  linestyle: CanvasEx.LINESTYLE_SOLID,
                                  extendleft: !1,
                                  extendright: !1,
                                  leftend: c.Normal,
                                  rightend: c.Normal
                              };
                          }),
                          (s = r(this._points[0], this._points[1])),
                          this._trendLineRendererPoints01.setData(s),
                          t.append(this._trendLineRendererPoints01),
                          this._points.length >= 3 &&
                              ((s = r(this._points[1], this._points[2])),
                              this._trendLineRendererPoints12.setData(s),
                              t.append(this._trendLineRendererPoints12)),
                          4 === this._points.length &&
                              ((s = r(this._points[2], this._points[3])),
                              this._trendLineRendererPoints23.setData(s),
                              t.append(this._trendLineRendererPoints23),
                              this._intersectPoint
                                  ? ((a = [
                                        this._startPoint1,
                                        this._startPoint2,
                                        this._intersectPoint
                                    ]),
                                    (o = {}),
                                    (o.points = a),
                                    (o.color = e.color.value()),
                                    (o.linewidth = e.linewidth.value()),
                                    (o.backcolor = e.backgroundColor.value()),
                                    (o.fillBackground = e.fillBackground.value()),
                                    (o.transparency = e.transparency.value()),
                                    this._intersectionRenderer.setData(o),
                                    t.append(this._intersectionRenderer))
                                  : this._intersectPoint1 &&
                                    this._intersectPoint2 &&
                                    ((a = [
                                        this._startPoint1,
                                        this._startPoint2,
                                        this._intersectPoint2,
                                        this._intersectPoint1
                                    ]),
                                    (o = {}),
                                    (o.filled = !0),
                                    (o.fillBackground = !0),
                                    (o.points = a),
                                    (o.color = e.color.value()),
                                    (o.linewidth = e.linewidth.value()),
                                    (o.backcolor = e.backgroundColor.value()),
                                    (o.transparency = e.transparency.value()),
                                    this._poligonRenderer.setData(o),
                                    t.append(this._poligonRenderer))),
                          (l = n(this._points[0], "A")),
                          this._points[1].y > this._points[0].y
                              ? ((l.vertAlign = "bottom"), (l.offsetY = -10))
                              : ((l.vertAlign = "top"), (l.offsetY = 5)),
                          this._aLabelRenderer.setData(l),
                          t.append(this._aLabelRenderer),
                          (l = n(this._points[1], "B")),
                          this._points[1].y < this._points[0].y
                              ? ((l.vertAlign = "bottom"), (l.offsetY = -10))
                              : ((l.vertAlign = "top"), (l.offsetY = 5)),
                          this._bLabelRenderer.setData(l),
                          t.append(this._bLabelRenderer),
                          this._points.length > 2 &&
                              ((l = n(this._points[2], "C")),
                              this._points[2].y < this._points[1].y
                                  ? ((l.vertAlign = "bottom"),
                                    (l.offsetY = -10))
                                  : ((l.vertAlign = "top"), (l.offsetY = 5)),
                              this._cLabelRenderer.setData(l),
                              t.append(this._cLabelRenderer)),
                          this._points.length > 3 &&
                              ((l = n(this._points[3], "D")),
                              this._points[3].y < this._points[2].y
                                  ? ((l.vertAlign = "bottom"),
                                    (l.offsetY = -10))
                                  : ((l.vertAlign = "top"), (l.offsetY = 5)),
                              this._dLabelRenderer.setData(l),
                              t.append(this._dLabelRenderer)),
                          this.addAnchors(t),
                          t)
                );
            }),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                var e, t, i, n, a, o, l, h, d, c, p, _;
                if (
                    (s.prototype._updateImpl.call(this),
                    (this._valid = !1),
                    delete this._intersectPoint,
                    delete this._intersectPoint1,
                    delete this._intersectPoint2,
                    4 === this._points.length)
                ) {
                    if (
                        ((e = this._points[0]),
                        (t = this._points[1]),
                        (i = this._points[2]),
                        (n = this._points[3]),
                        Math.abs(i.x - e.x) < 1 || Math.abs(n.x - t.x) < 1)
                    )
                        return;
                    if (
                        ((a = Math.min(e.x, t.x)),
                        (a = Math.min(a, i.x)),
                        (a = Math.min(a, n.x)),
                        (o = (i.y - e.y) / (i.x - e.x)),
                        (l = e.y + (a - e.x) * o),
                        (h = (n.y - t.y) / (n.x - t.x)),
                        (d = t.y + (a - t.x) * h),
                        Math.abs(o - h) < 1e-6)
                    )
                        return;
                    (this._startPoint1 = new r(a, l)),
                        (this._startPoint2 = new r(a, d)),
                        (c = (t.y - e.y + (e.x * o - t.x * h)) / (o - h)),
                        (this._valid = !0),
                        c < a &&
                            ((p = Math.max(e.x, t.x)),
                            (p = Math.max(p, i.x)),
                            (p = Math.max(p, n.x)),
                            (l = e.y + (p - e.x) * o),
                            (d = t.y + (p - t.x) * h),
                            (this._startPoint1 = new r(p, l)),
                            (this._startPoint2 = new r(p, d))),
                        (_ = e.y + (c - e.x) * o),
                        (this._intersectPoint = new r(c, _));
                }
            }),
            (t.LineToolTrianglePatternPaneView = n);
    },
    942: function(e, t, i) {
        "use strict";
        function n(e, t) {
            r.call(this, e, t),
                (this._invalidated = !0),
                (this._renderer = new a());
        }
        var r = i(12).LineSourcePaneView,
            s = i(8).CompositeRenderer,
            a = i(230).TriangleRenderer;
        inherit(n, r),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                r.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (n.prototype.renderer = function() {
                var e, t;
                return (
                    this._invalidated && this.updateImpl(),
                    (e = {}),
                    (e.points = this._points),
                    (e.color = this._source.properties().color.value()),
                    (e.linewidth = this._source.properties().linewidth.value()),
                    (e.backcolor = this._source
                        .properties()
                        .backgroundColor.value()),
                    (e.fillBackground = this._source
                        .properties()
                        .fillBackground.value()),
                    (e.transparency = this._source
                        .properties()
                        .transparency.value()),
                    this._renderer.setData(e),
                    this.isAnchorsRequired()
                        ? ((t = new s()),
                          t.append(this._renderer),
                          this.addAnchors(t),
                          t)
                        : this._renderer
                );
            }),
            (t.TrianglePaneView = n);
    },
    944: function(e, t, i) {
        "use strict";
        function n(e, t) {
            s.call(this, e, t),
                (this._invalidated = !0),
                (this._lineRenderer = new l());
        }
        var r = i(1).Point,
            s = i(12).LineSourcePaneView,
            a = i(105).PaneRendererClockIcon,
            o = i(8).CompositeRenderer,
            l = i(146).VerticalLineRenderer;
        inherit(n, s),
            (n.prototype.update = function() {
                this._invalidated = !0;
            }),
            (n.prototype.updateImpl = function() {
                s.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (n.prototype.renderer = function() {
                var e, t, i;
                return (
                    this._invalidated && this.updateImpl(),
                    (e = {}),
                    (e.width = this._model.timeScale().width()),
                    (e.height = this._source.priceScale().height()),
                    (e.points = this._points),
                    (e.color = this._source.properties().linecolor.value()),
                    (e.linewidth = this._source.properties().linewidth.value()),
                    (e.linestyle = this._source.properties().linestyle.value()),
                    this._lineRenderer.setData(e),
                    (t = new o()),
                    t.append(this._lineRenderer),
                    this.addAnchors(t),
                    TradingView.printing ||
                        !this._source.hasAlert.value() ||
                        this._model.readOnly() ||
                        1 !== e.points.length ||
                        ((i = new r(
                            this._points[0].x,
                            this._source.priceScale().height() / 2
                        )),
                        this._source.getAlertIsActive(function(n) {
                            t.append(
                                new a({
                                    point1: i,
                                    color: n
                                        ? e.color
                                        : defaults(
                                              "chartproperties.alertsProperties.drawingIcon.color"
                                          )
                                })
                            );
                        })),
                    t
                );
            }),
            (t.VertLinePaneView = n);
    },
    1132: function(e, t, i) {
        "use strict";
        var n, r, s, a;
        Object.defineProperty(t, "__esModule", {value: !0}),
            (n = i(1)),
            (r = i(19)),
            (s = i(4)),
            (a = (function() {
                function e() {
                    this._data = null;
                }
                return (
                    (e.prototype.setData = function(e) {
                        this._data = e;
                    }),
                    (e.prototype.draw = function(e) {
                        var t, i, s, a, o, l;
                        null !== this._data &&
                            ((e.lineCap = "butt"),
                            (e.strokeStyle = this._data.color),
                            (e.lineWidth = this._data.linewidth),
                            e.translate(
                                this._data.center.x,
                                this._data.center.y
                            ),
                            (t = this._data.edge.subtract(this._data.center)),
                            (i = t.y / t.x),
                            (s = this._data.point.subtract(this._data.center)),
                            (s = new n.Point(s.x, s.y / i)),
                            (a = s.length()),
                            (o = this._data.prevPoint.subtract(
                                this._data.center
                            )),
                            (o = new n.Point(o.x, o.y / i)),
                            (l = o.length()),
                            e.scale(1, i),
                            this._data.fillBack &&
                                (this._data.point.x < this._data.center.x &&
                                    ((a = -a), (l = -l)),
                                e.beginPath(),
                                e.moveTo(l, 0),
                                e.lineTo(a, 0),
                                e.arcTo(a, a, 0, a, Math.abs(a)),
                                e.lineTo(0, l),
                                e.arcTo(l, l, l, 0, Math.abs(l)),
                                (e.fillStyle = r.generateColor(
                                    this._data.color,
                                    this._data.transparency,
                                    !0
                                )),
                                e.fill()),
                            e.beginPath(),
                            this._data.point.x > this._data.center.x
                                ? e.arc(0, 0, Math.abs(a), 0, Math.PI / 2, !1)
                                : e.arc(
                                      0,
                                      0,
                                      Math.abs(a),
                                      -Math.PI / 2,
                                      -Math.PI,
                                      !0
                                  ),
                            e.scale(1, 1 / i),
                            e.stroke());
                    }),
                    (e.prototype.hitTest = function(e) {
                        var t, i, r, a, o, l, h;
                        return null === this._data
                            ? null
                            : ((e = e.subtract(this._data.center)),
                              (t = this._data.edge.subtract(this._data.center)),
                              (i = t.y / t.x),
                              (e = new n.Point(e.x, e.y / i)),
                              (r = this._data.point.subtract(
                                  this._data.center
                              )),
                              (r = new n.Point(r.x, r.y / i)),
                              (a = r.length()),
                              (o = e.length()),
                              (l = this._data.prevPoint.subtract(
                                  this._data.center
                              )),
                              (l = new n.Point(l.x, l.y / i)),
                              (h = l.length()),
                              Math.abs(o - a) < 5 &&
                              t.x * e.x >= 0 &&
                              t.y * e.y >= 0
                                  ? new s(s.MOVEPOINT)
                                  : this._data.fillBack &&
                                    o >= h &&
                                    o <= a &&
                                    t.x * e.x >= 0 &&
                                    t.y * e.y >= 0
                                      ? new s(s.MOVEPOINT_BACKGROUND)
                                      : null);
                    }),
                    e
                );
            })()),
            (t.GannArcRenderer = a);
    },
    1133: function(e, t, i) {
        "use strict";
        var n, r, s, a, o, l, h, d, c;
        Object.defineProperty(t, "__esModule", {value: !0}),
            (n = i(5)),
            (r = i(1)),
            (s = i(12)),
            (a = i(16)),
            (o = i(8)),
            (l = i(18)),
            (h = i(115)),
            (d = i(1132)),
            (c = (function(e) {
                function t(t, i) {
                    var n = e.call(this, t, i) || this;
                    return (
                        (n._verticalLevelsRenderers = []),
                        (n._horizontalLevelsRenderers = []),
                        (n._fanRenderers = []),
                        (n._arcRenderers = []),
                        n._initRenderers(),
                        n
                    );
                }
                return (
                    n.__extends(t, e),
                    (t.prototype.renderer = function(e) {
                        var t, i, n, r, s, a, l, h, d, c, p, _, u, f;
                        return (
                            this._invalidated &&
                                (this._updateImpl(), (this._invalidated = !1)),
                            (t = this._getSource()),
                            (i = this._getPoints()),
                            (n = new o.CompositeRenderer()),
                            i.length < 2
                                ? (this.addAnchors(n), n)
                                : ((r = i[0]),
                                  (s = 3 === i.length ? i[2] : i[1]),
                                  (a = s.x - r.x),
                                  (l = s.y - r.y),
                                  (h = r),
                                  (d = s),
                                  (c = this._getModel()),
                                  (p = c.timeScale()),
                                  (_ = p.width()),
                                  (u = {
                                      paneHeight: e,
                                      paneWidth: _,
                                      barsCoordsRange: a,
                                      priceCoordsRange: l,
                                      startPoint: h,
                                      endPoint: d,
                                      p1: r,
                                      p2: s
                                  }),
                                  this._prepareLevels(n, u),
                                  this._prepareFanLines(n, u),
                                  this._prepareArcs(n, u),
                                  this.isAnchorsRequired() &&
                                      ((f = [r, i[1]]),
                                      c.lineBeingCreated() === t && f.pop(),
                                      n.append(
                                          this.createLineAnchor({points: f})
                                      )),
                                  n)
                        );
                    }),
                    (t.prototype._updateImpl = function() {
                        var t, i, n, r, s;
                        e.prototype._updateImpl.call(this),
                            (t = this._getSource()),
                            (i = this._getPoints()),
                            (n = t.getScreenPoints()),
                            i.length < 2 ||
                                n.length < 2 ||
                                ((r = n[0]),
                                (s = n[1]),
                                (i[1] = r),
                                (i[1].data = 1),
                                (i[2] = s));
                    }),
                    (t.prototype._initRenderers = function() {
                        var e,
                            t,
                            i,
                            n = this._getSource(),
                            r = n.levelsCount();
                        for (e = 0; e < r; e++)
                            this._verticalLevelsRenderers.push(
                                new a.TrendLineRenderer()
                            ),
                                this._horizontalLevelsRenderers.push(
                                    new a.TrendLineRenderer()
                                );
                        for (t = n.fanLinesCount(), e = 0; e < t; e++)
                            this._fanRenderers.push(new a.TrendLineRenderer());
                        for (i = n.arcsCount(), e = 0; e < i; e++)
                            this._arcRenderers.push(new d.GannArcRenderer());
                    }),
                    (t.prototype._prepareLevels = function(e, t) {
                        var i,
                            n,
                            s,
                            a,
                            o,
                            d,
                            c,
                            p,
                            _,
                            u,
                            f = t.startPoint,
                            g = t.endPoint,
                            v = t.paneHeight,
                            w = t.paneWidth,
                            y = t.barsCoordsRange,
                            m = t.priceCoordsRange,
                            x = this._getSource(),
                            b = x.levels();
                        for (i = 0, n = b; i < n.length; i++)
                            (s = n[i]),
                                s.visible &&
                                    ((a = s.index / 5),
                                    (o = f.x + a * y),
                                    (d = {
                                        points: [
                                            new r.Point(o, f.y),
                                            new r.Point(o, g.y)
                                        ],
                                        width: w,
                                        height: v,
                                        color: s.color,
                                        linewidth: s.width,
                                        linestyle: h.LINESTYLE_SOLID,
                                        extendleft: !1,
                                        extendright: !1,
                                        leftend: l.LineEnd.Normal,
                                        rightend: l.LineEnd.Normal
                                    }),
                                    (c = this._verticalLevelsRenderers[
                                        s.index
                                    ]),
                                    c.setData(d),
                                    e.append(c),
                                    (p = f.y + a * m),
                                    (_ = {
                                        points: [
                                            new r.Point(f.x, p),
                                            new r.Point(g.x, p)
                                        ],
                                        width: w,
                                        height: v,
                                        color: s.color,
                                        linewidth: s.width,
                                        linestyle: h.LINESTYLE_SOLID,
                                        extendleft: !1,
                                        extendright: !1,
                                        leftend: l.LineEnd.Normal,
                                        rightend: l.LineEnd.Normal
                                    }),
                                    (u = this._horizontalLevelsRenderers[
                                        s.index
                                    ]),
                                    u.setData(_),
                                    e.append(u));
                    }),
                    (t.prototype._prepareFanLines = function(e, t) {
                        var i,
                            n,
                            s,
                            a,
                            o,
                            d,
                            c,
                            p,
                            _,
                            u,
                            f = t.p1,
                            g = t.startPoint,
                            v = t.endPoint,
                            w = t.paneHeight,
                            y = t.paneWidth,
                            m = t.barsCoordsRange,
                            x = t.priceCoordsRange,
                            b = this._getSource(),
                            S = b.fanLines();
                        for (i = 0, n = S; i < n.length; i++)
                            (s = n[i]),
                                s.visible &&
                                    ((a = s.x),
                                    (o = s.y),
                                    (d = void 0),
                                    (c = void 0),
                                    a > o
                                        ? ((d = v.x),
                                          (p = o / a),
                                          (c = g.y + p * x))
                                        : ((c = v.y),
                                          (p = a / o),
                                          (d = g.x + p * m)),
                                    (_ = {
                                        points: [f, new r.Point(d, c)],
                                        width: y,
                                        height: w,
                                        color: s.color,
                                        linewidth: s.width,
                                        linestyle: h.LINESTYLE_SOLID,
                                        extendleft: !1,
                                        extendright: !1,
                                        leftend: l.LineEnd.Normal,
                                        rightend: l.LineEnd.Normal
                                    }),
                                    (u = this._fanRenderers[s.index]),
                                    u.setData(_),
                                    e.append(u));
                    }),
                    (t.prototype._prepareArcs = function(e, t) {
                        var i,
                            n,
                            s,
                            a,
                            o,
                            l,
                            h,
                            d,
                            c,
                            p = t.p1,
                            _ = t.startPoint,
                            u = t.endPoint,
                            f = t.barsCoordsRange,
                            g = t.priceCoordsRange,
                            v = p,
                            w = this._getSource(),
                            y = w.isArcsBackgroundFilled(),
                            m = w.arcsBackgroundTransparency(),
                            x = w.arcs();
                        for (i = 0, n = x; i < n.length; i++)
                            (s = n[i]),
                                s.visible &&
                                    ((a = s.x / 5),
                                    (o = s.y / 5),
                                    (l = _.x + a * f),
                                    (h = _.y + o * g),
                                    (d = {
                                        center: _,
                                        point: new r.Point(l, h),
                                        edge: u,
                                        color: s.color,
                                        linewidth: s.width,
                                        fillBack: y,
                                        transparency: m,
                                        prevPoint: v
                                    }),
                                    (c = this._arcRenderers[s.index]),
                                    c.setData(d),
                                    e.append(c),
                                    (v = d.point));
                    }),
                    t
                );
            })(s.LineSourcePaneView)),
            (t.GannComplexPaneView = c);
    }
});
