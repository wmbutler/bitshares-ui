webpackJsonp([0], {
    299: function(t, e, o) {
        "use strict";
        function i(t, e, o, i) {
            (this._sourcesPropertiesGetter = t),
                (this._chartModel = o),
                (this._items = {}),
                (this._scroll = null),
                (this._selectedItemId = ""),
                (this._$tabContainer = i.addClass(
                    "tv-objects-tree-dialog-tab"
                )),
                (this._$contentWrapper = $(
                    '<div class="tv-objects-tree-dialog-tab__content">'
                ).appendTo(this._$tabContainer)),
                (this._list = new r(this._chartModel, e)),
                this._list.setItemActivateListener(
                    this._onActiveSourceChanged.bind(this)
                ),
                (this._sourceRemovedHandler = this._onSourceRemoved.bind(this)),
                (this._sourcesRemovedHandler = this._onSourcesRemoved.bind(
                    this
                ));
        }
        var s = o(145).SidebarCustomScroll,
            r = o(654).ObjectTreeItemsController,
            n = o(21),
            a = o(127).unifiedSpinner;
        o(506),
            (i.prototype._removeSourceFromView = function(t) {}),
            (i.prototype._removeSourcesFromView = function(t) {}),
            (i.prototype._renderViewInternal = function(t) {}),
            (i.prototype.destroy = function() {
                this._unsubscribeListeners();
            }),
            (i.prototype.initView = function() {
                this._chartModel.selectedSource() &&
                    (this._selectedItemId = this._chartModel
                        .selectedSource()
                        .id()),
                    this._subscribeListeners(),
                    this._renderView(null),
                    this._addScroll();
            }),
            (i.prototype._sourceForId = function(t) {
                return this._chartModel.dataSourceForId(t);
            }),
            (i.prototype._selectedSourceId = function() {
                return this._selectedItemId;
            }),
            (i.prototype._onActiveSourceChanged = function(t) {
                if (!t) return void (this._selectedItemId = "");
                (this._selectedItemId = t.id()),
                    this._chartModel.setSelectedSource(t),
                    this._chartModel.invalidate(new n(n.LIGHT_UPDATE));
            }),
            (i.prototype._getItemForSourceId = function(t) {
                return this._$contentWrapper.find("#" + t);
            }),
            (i.prototype._markItemForSource = function(t, e) {
                t.attr("id", e.id());
            }),
            (i.prototype._getSourceIdForItem = function(t) {
                return t.attr("id");
            }),
            (i.prototype._getSourceForItem = function(t) {
                return this._sourceForId(this._getSourceIdForItem(t));
            }),
            (i.prototype._listAccessor = function() {
                return this._list;
            }),
            (i.prototype._showSpinner = function() {
                (this.spinner = a().spin(this._$tabContainer.get(0))),
                    this._$contentWrapper.css("visibility", "hidden");
            }),
            (i.prototype._hideSpinner = function() {
                this.spinner &&
                    (this.spinner.stop(),
                    this._$contentWrapper.css("visibility", "visible"));
            }),
            (i.prototype._onSourceRemoved = function(t) {
                t &&
                    (this._removeSourceFromView(t),
                    this._scroll.updateScrollBar());
            }),
            (i.prototype._onSourcesRemoved = function(t) {
                Array.isArray(t) &&
                    (this._removeSourcesFromView(t),
                    this._scroll.updateScrollBar());
            }),
            (i.prototype._subscribeListeners = function() {
                this._chartModel.on("removeSource", this._sourceRemovedHandler),
                    this._chartModel.on(
                        "removeSources",
                        this._sourcesRemovedHandler
                    );
            }),
            (i.prototype._unsubscribeListeners = function() {
                this._chartModel.removeListener(
                    "removeSource",
                    this._sourceRemovedHandler
                ),
                    this._chartModel.removeListener(
                        "removeSources",
                        this._sourcesRemovedHandler
                    );
            }),
            (i.prototype._getItems = function() {
                return this._items;
            }),
            (i.prototype._reloadItems = function() {
                this._items = this._sourcesPropertiesGetter();
            }),
            (i.prototype._renderView = function(t) {
                this._$contentWrapper.empty(),
                    this._hideSpinner(),
                    this._showSpinner(),
                    this._reloadItems(),
                    this._renderViewInternal(
                        function() {
                            this._hideSpinner(), t && t();
                        }.bind(this)
                    );
            }),
            (i.prototype._addScroll = function() {
                this._scroll = new s(
                    this._$tabContainer,
                    this._$contentWrapper,
                    {
                        showTopShadow: !1,
                        showBottomShadow: !1,
                        scrollMarginTop: 0
                    }
                );
            }),
            (t.exports = i);
    },
    300: function(t, e, o) {
        (function(e) {
            "use strict";
            function i(t, e) {
                (this.options = t || {}),
                    (this._chartWidget = t.chartWidget),
                    (this._model = e);
            }
            function s(t, e) {
                e.__init || (t.initView(), (e.__init = !0));
            }
            var r,
                n = o(656),
                a = o(652),
                l = o(1).LineDataSource,
                c = o(263).createTabbedDialog,
                d = o(33).trackEvent;
            o(507),
                (r = null),
                (i.prototype.getSourceProperties = function() {
                    var t,
                        e,
                        o,
                        i,
                        s,
                        r,
                        n,
                        a = {
                            groups: [],
                            drawings: [],
                            currentSymbol: this._model.mainSeries().symbol()
                        };
                    for (t = 0; t < this._model.panes().length; t++) {
                        for (
                            e = this._model.panes()[t],
                                o = [],
                                i = e.orderedSources(),
                                s = 0;
                            s < i.length;
                            s++
                        )
                            (r = i[s]),
                                r.showInObjectTree() &&
                                    o.push({datasource: r, name: r.title()});
                        for (n = e.dataSources(), s = 0; s < n.length; s++)
                            (r = n[s]) instanceof l &&
                                r.showInObjectTree() &&
                                a.drawings.push({
                                    datasource: r,
                                    name: r.title(),
                                    symbol: r.symbol()
                                });
                        o.length && a.groups.push({children: o});
                    }
                    return a;
                }),
                (i.prototype.show = function() {
                    var t, o, i, l, h, p, u, _, m, v;
                    d("GUI", "Objects Tree"),
                        (t = []),
                        (o = $()),
                        (i = $("<div>")),
                        (l = this.getSourceProperties.bind(this)),
                        (h = $("<div>")),
                        (p = new n(l, this._chartWidget, this._model, h, i)),
                        (o = o.add(i)),
                        t.push({
                            customControl: i,
                            name: $.t("Objects Tree"),
                            page: h,
                            onActivate: s.bind(null, p)
                        }),
                        (u = null),
                        e.enabled("support_manage_drawings") &&
                            ((_ = $("<div>")),
                            (m = $("<div>")),
                            (u = new a(
                                l,
                                this._chartWidget,
                                this._model,
                                m,
                                _
                            )),
                            (o = o.add(_)),
                            t.push({
                                customControl: _,
                                name: $.t("Manage Drawings"),
                                page: m,
                                onActivate: s.bind(null, u)
                            })),
                        (v = c({
                            tabs: t,
                            width: 520,
                            tabStateSaveKey: "ObjectsTreeDialog.tab",
                            activeTab: this.options.activeTab,
                            customControlsContainerAddClass:
                                "tv-objects-tree-dialog__custom-controls-container",
                            customControls: o,
                            destroyOnClose: !0,
                            height: 480,
                            withScroll: !1,
                            contentAddClass: "js-dialog__scroll-wrap",
                            isClickOutFn: function(t) {
                                if (
                                    $(t.target)
                                        .parents()
                                        .andSelf()
                                        .is(
                                            "._tv-dialog, .properties-toolbar, .colorpicker, .tvcolorpicker-popup, .symbol-edit-popup, .context-menu"
                                        )
                                )
                                    return !1;
                            }
                        })),
                        v.tabs.tabChanged.subscribe(null, function(e) {
                            t[e].onActivate(t[e]);
                            for (var o = 0; o < t.length; ++o)
                                t[o].customControl.toggleClass(
                                    "i-hidden",
                                    e !== o
                                );
                            v.tabs.checkScrollArrows(!0);
                        }),
                        t[v.tabs.index()].onActivate(t[v.tabs.index()]),
                        v.dialog.on("beforeClose", function() {
                            p.destroy(), u && u.destroy(), (r = null);
                        }),
                        r && r.close(),
                        (r = v.dialog),
                        v.dialog.open();
                }),
                (t.exports.ObjectTreeDialog = i);
        }.call(e, o(3)));
    },
    505: function(t, e) {},
    506: function(t, e) {},
    507: function(t, e) {},
    508: function(t, e) {},
    509: function(t, e) {},
    510: function(t, e) {},
    518: function(t, e) {},
    652: function(t, e, o) {
        "use strict";
        function i(t, e, o, i, r) {
            s.call(this, t, e, o, i),
                (this._clearRemoveNodeTimerId = null),
                (this._$emptyListMessage = $(
                    '<div class="tv-manage-drawings-tab__empty-drawings">'
                ).text($.t("No drawings yet"))),
                this._$emptyListMessage.appendTo(this._$tabContainer),
                (this._$totalValueContainer = $("<div>").appendTo(r));
        }
        var s = o(299);
        o(505),
            inherit(i, s),
            (i.prototype.destroy = function() {
                this._clearRemoveNodeTimer(), s.prototype.destroy.call(this);
            }),
            (i.prototype.initView = function() {
                this._listAccessor().setNodeExpandCollapseCallback(
                    this._renderViewForSymbol.bind(this)
                ),
                    this._listAccessor().setNodeRemoveCallback(
                        this._onNodeRemoveClick.bind(this)
                    ),
                    s.prototype.initView.call(this);
            }),
            (i.prototype._clearRemoveNodeTimer = function() {
                clearInterval(this._clearRemoveNodeTimerId),
                    (this._clearRemoveNodeTimerId = null);
            }),
            (i.prototype._renderViewForSymbol = function(t, e, o) {
                var i,
                    s,
                    r,
                    n,
                    a,
                    l = "tv-manage-drawings-tab__symbol-drawings";
                if (t.next().hasClass(l))
                    return (
                        t.next().toggleClass("i-expanded", o),
                        void this._scroll.updateScrollBar()
                    );
                for (
                    i = $('<div class="i-expanded ' + l + '">'),
                        s = this._symbolDrawingsMap[e],
                        r = 0;
                    r < s.length;
                    ++r
                )
                    (n = s[r]),
                        (a = this._listAccessor().createItem(n, {
                            showHide: !1,
                            lockUnlock: !1,
                            draggable: !1,
                            largeLeftPadding: !0,
                            addContextMenu: !1
                        })),
                        this._markItemForSource(a, n.datasource),
                        i.append(a);
                i.insertAfter(t), this._scroll.updateScrollBar();
            }),
            (i.prototype._createSymbolItem = function(t) {
                var e = this._list.createTreeNodeItem(
                    t,
                    this._symbolDrawingsMap[t],
                    {isCurrent: this._getItems().currentSymbol === t}
                );
                e.attr("data-symbol", t), this._$contentWrapper.append(e);
            }),
            (i.prototype._renderViewInternal = function(t) {
                var e, o, i;
                for (
                    this._symbolDrawingsMap = {},
                        e = this._getItems().drawings,
                        o = 0;
                    o < e.length;
                    o++
                )
                    (i = e[o]),
                        (this._symbolDrawingsMap[i.symbol] =
                            this._symbolDrawingsMap[i.symbol] || []),
                        this._symbolDrawingsMap[i.symbol].push(i);
                Object.keys(this._symbolDrawingsMap)
                    .sort(
                        function(t, e) {
                            return this._symbolDrawingsMap[t].length <
                                this._symbolDrawingsMap[e].length
                                ? 1
                                : -1;
                        }.bind(this)
                    )
                    .forEach(this._createSymbolItem.bind(this)),
                    this._renderEmptyListMessageIfNeeded(),
                    this._updateTotalCounter(),
                    t();
            }),
            (i.prototype._updateTotalCounter = function() {
                var t = 0;
                Object.keys(this._symbolDrawingsMap).forEach(
                    function(e) {
                        t += 0 | this._symbolDrawingsMap[e].length;
                    }.bind(this)
                ),
                    this._$totalValueContainer.text($.t("Total") + ": " + t),
                    this._$totalValueContainer.toggleClass("i-hidden", 0 === t);
            }),
            (i.prototype._renderEmptyListMessageIfNeeded = function() {
                this._$emptyListMessage.toggleClass(
                    "js-hidden",
                    0 !== Object.keys(this._symbolDrawingsMap).length
                );
            }),
            (i.prototype._removeSourceFromView = function(t) {
                var e,
                    o,
                    i,
                    s = this._getItemForSourceId(t.id());
                if (0 === s.length) return void this._renderView(null);
                t.id() === this._selectedSourceId() &&
                    this._listAccessor().activateItem(null, null),
                    (e = s.parent()),
                    (o = e.prev()),
                    (i = o.attr("data-symbol")),
                    (this._symbolDrawingsMap[i] = this._symbolDrawingsMap[
                        i
                    ].filter(function(e) {
                        return e.datasource !== t;
                    })),
                    0 === this._symbolDrawingsMap[i].length
                        ? (e.remove(),
                          o.remove(),
                          delete this._symbolDrawingsMap[i],
                          this._renderEmptyListMessageIfNeeded())
                        : (s.remove(),
                          this._listAccessor().updateNodeItem(
                              o,
                              i,
                              this._symbolDrawingsMap[i],
                              {isCurrent: this._getItems().currentSymbol === i}
                          )),
                    this._updateTotalCounter();
            }),
            (i.prototype._onNodeRemoveClick = function(t, e) {
                if (!this._clearRemoveNodeTimerId) {
                    var e = t.attr("data-symbol");
                    this._chartModel.beginUndoMacro(
                        $.t("Remove all line tools for ") + e
                    ),
                        (this._clearRemoveNodeTimerId = setInterval(
                            function() {
                                var t = this._symbolDrawingsMap[e],
                                    o = t.splice(0, 200).map(function(t) {
                                        return t.datasource;
                                    });
                                this._chartModel.removeLineTools(o),
                                    0 === t.length &&
                                        (this._chartModel.endUndoMacro(),
                                        this._clearRemoveNodeTimer());
                            }.bind(this),
                            50
                        ));
                }
            }),
            (i.prototype._removeSourcesFromView = function(t) {
                this._renderView(
                    function() {
                        this._scroll.scrollToStart();
                    }.bind(this)
                );
            }),
            (t.exports = i);
    },
    654: function(t, e, o) {
        (function(e, i) {
            "use strict";
            function s(t, e) {
                (this._chartWidget = e),
                    (this._chartModel = t),
                    (this._$activeItem = null),
                    (this._nodeExpandCollapseCallback = null),
                    (this._nodeRemoveCallback = null),
                    (this._itemActivateCallback = null);
            }
            var r,
                n,
                a,
                l,
                c,
                d,
                h,
                p,
                u = o(1).LineDataSource,
                _ = o(118),
                m = o(195),
                v = o(76),
                b = o(217).lineToolsInfo,
                g = o(290);
            o(508),
                o(287),
                (r = o(379)),
                (n = o(844)),
                (a = o(843)),
                (l = o(377)),
                (c = o(841)),
                (d = o(842)),
                (h = o(840)),
                (p =
                    '<div class="tv-objects-tree-item {{#largeLeftPadding}}tv-objects-tree-item--large-left-padding{{/largeLeftPadding}}">{{#draggable}}<div class="tv-objects-tree-item__drag-icon js-drag-icon">' +
                    r +
                    '</div>{{/draggable}}{{#treeNode}}<div class="tv-objects-tree-item__control-buttons tv-objects-tree-item__control-buttons--left"><span class="tv-objects-tree-item__button tv-objects-tree-item__button--expand">' +
                    n +
                    '</span><span class="tv-objects-tree-item__button tv-objects-tree-item__button--collapse">' +
                    a +
                    '</span></div>{{/treeNode}}{{^treeNode}}<div class="tv-objects-tree-item__icon js-icon-container"></div>{{/treeNode}}<div class="tv-objects-tree-item__title {{#wideTitle}}tv-objects-tree-item__title--wide{{/wideTitle}} js-title-container"></div><div class="tv-objects-tree-item__control-buttons">{{#lockUnlockIcon}}<span class="tv-objects-tree-item__button tv-objects-tree-item__button--lock js-lock-unlock-btn">' +
                    l +
                    '</span>{{/lockUnlockIcon}}{{#showHideIcon}}<span class="tv-objects-tree-item__button js-show-hide-btn">' +
                    c +
                    "</span>{{/showHideIcon}}{{^treeNode}}" +
                    (e.enabled("property_pages")
                        ? '<span class="tv-objects-tree-item__button js-format-btn">' +
                          d +
                          "</span>"
                        : "") +
                    '{{/treeNode}}<span class="tv-objects-tree-item__button js-remove-btn">' +
                    h +
                    "</span></div></div>"),
                (s.prototype.setItemActivateListener = function(t) {
                    this._itemActivateCallback = t;
                }),
                (s.prototype.setNodeExpandCollapseCallback = function(t) {
                    this._nodeExpandCollapseCallback = t;
                }),
                (s.prototype.setNodeRemoveCallback = function(t) {
                    this._nodeRemoveCallback = t;
                }),
                (s.prototype.activateItem = function(t, e, o) {
                    (o && o.originalEvent.defaultPrevented) ||
                        (this._$activeItem &&
                            0 !== this._$activeItem.length &&
                            this._$activeItem.removeClass("i-active"),
                        (this._$activeItem = t),
                        this._$activeItem &&
                            0 !== this._$activeItem.length &&
                            this._$activeItem.addClass("i-active"),
                        this._itemActivateCallback &&
                            this._itemActivateCallback(e));
                }),
                (s.prototype.createSortableForItemsList = function(t, e, o) {
                    t.sortable({
                        scroll: !0,
                        scrollSensitivity: 100,
                        scrollSpeed: 100,
                        axis: "y",
                        handle: ".js-drag-icon",
                        placeholder:
                            "tv-objects-tree-item tv-objects-tree-item--placeholder",
                        start: e,
                        stop: o
                    });
                }),
                (s.prototype.createTreeNodeItem = function(t, e, o) {
                    var s,
                        r = $(
                            i.render(p, {
                                draggable: !1,
                                lockUnlockIcon: !1,
                                formatIcon: !1,
                                showHideIcon: !1,
                                treeNode: !0,
                                title: t,
                                wideTitle: !0
                            })
                        );
                    return (
                        this.updateNodeItem(r, t, e, o),
                        r.click(
                            this._onNodeToggleExpandCollapse.bind(this, r, t)
                        ),
                        (s = r
                            .find(".js-remove-btn")
                            .attr(
                                "title",
                                $.t("Delete all drawing for this symbol")
                            )),
                        s.click(
                            function(e) {
                                e.preventDefault(),
                                    this._nodeRemoveCallback &&
                                        this._nodeRemoveCallback(r, t);
                            }.bind(this)
                        ),
                        r
                    );
                }),
                (s.prototype.createItem = function(t, e) {
                    var o, s;
                    return (
                        (e = e || {}),
                        (o = $(
                            i.render(p, {
                                draggable: e.draggable,
                                lockUnlockIcon: e.lockUnlock,
                                showHideIcon: e.showHide,
                                treeNode: !1,
                                largeLeftPadding: e.largeLeftPadding
                            })
                        )),
                        this.updateItem(o, t),
                        (s = t.datasource),
                        o.click(this.activateItem.bind(this, o, s)),
                        s.userEditEnabled() &&
                            (e.lockUnlock &&
                                this._setupLockUnlockButton(
                                    o.find(".js-lock-unlock-btn"),
                                    s
                                ),
                            e.showHide &&
                                this._setupItemPropertyButton(
                                    o.find(".js-show-hide-btn"),
                                    s,
                                    "visible",
                                    $.t("Show/Hide"),
                                    "Show/Hide ",
                                    !0
                                ),
                            this._setupFormatButton(
                                o.find(".js-format-btn"),
                                s
                            ),
                            this._canShowEditObjectDialog(s) &&
                                (o.dblclick(
                                    this._showEditObjectDialog.bind(this, s)
                                ),
                                e.addContextMenu &&
                                    o.on(
                                        "contextmenu",
                                        function(t) {
                                            this._showContextMenu(t, s),
                                                t.preventDefault();
                                        }.bind(this)
                                    )),
                            this._setupItemRemoveButton(
                                o.find(".js-remove-btn"),
                                s
                            )),
                        o
                    );
                }),
                (s.prototype.updateNodeItem = function(t, e, o, i) {
                    var s = t.find(".js-title-container");
                    s.toggleClass("i-bold", i.isCurrent),
                        (s[0].innerHTML = e + " (" + o.length + ")");
                }),
                (s.prototype.updateItem = function(t, e) {
                    (t.find(
                        ".js-title-container"
                    )[0].innerHTML = TradingView.clean($.t(e.name))),
                        this._setDataSourceIcon(t, e.datasource),
                        this._setItemVisible(t, e.datasource);
                }),
                (s.prototype._showContextMenu = function(t, o) {
                    if (e.enabled("objects_tree_context_menu")) {
                        this._chartWidget
                            .paneByState(this._chartModel.paneForSource(o))
                            .showContextMenuForSource(o, t);
                    }
                }),
                (s.prototype._canShowEditObjectDialog = function(t) {
                    return (
                        !(t instanceof u && !t.isActualSymbol()) &&
                        ((t !== this._chartModel.mainSeries() ||
                            !this._chartWidget ||
                            !this._chartWidget.onWidget()) &&
                            (m.hasStylesPropertyPage(t) ||
                                m.hasInputsPropertyPage(t)))
                    );
                }),
                (s.prototype._showEditObjectDialog = function(t) {
                    new v(t, this._chartModel).show();
                }),
                (s.prototype._setupLockUnlockButton = function(t, e) {
                    TradingView.isInherited(e.constructor, u)
                        ? this._setupItemPropertyButton(
                              t,
                              e,
                              "frozen",
                              $.t("Lock/Unlock"),
                              "Lock/Unlock ",
                              !1
                          )
                        : t.addClass("i-hidden");
                }),
                (s.prototype._setupFormatButton = function(t, e) {
                    if (!this._canShowEditObjectDialog(e))
                        return void t.addClass("i-hidden");
                    t
                        .attr("title", $.t("Format"))
                        .click(this._showEditObjectDialog.bind(this, e));
                }),
                (s.prototype._setItemVisible = function(t, e) {
                    var o = e.properties().visible.value();
                    t.toggleClass("i-prop-hidden", !o);
                }),
                (s.prototype._setDataSourceIcon = function(t, e) {
                    var o,
                        i,
                        s,
                        r,
                        n,
                        a,
                        l = t.find(".js-icon-container").empty();
                    l.removeClass("i-text-icon i-empty"),
                        (o = e instanceof u),
                        (i = e instanceof _),
                        (s = e === this._chartModel.mainSeries()),
                        (o && !i) || s
                            ? ((r = null),
                              s
                                  ? (r = g[e.properties().style.value()])
                                  : (n = b[e.getType()]) && (r = n.icon),
                              r
                                  ? $(r)
                                        .attr({width: 20, height: 20})
                                        .appendTo(l)
                                  : l.addClass("i-empty"))
                            : i
                                ? ((a = e.properties().icon.value()),
                                  l.addClass("i-text-icon"),
                                  l.text(String.fromCharCode(a)))
                                : l.addClass("i-empty"),
                        t.prepend(l);
                }),
                (s.prototype._onItemPropertyButtonClicked = function(t, e) {
                    this._chartModel.setProperty(t, !t.value(), e);
                }),
                (s.prototype._onItemPropertyChanged = function(t, e, o) {
                    t.toggleClass("i-active", e ? !o.value() : o.value());
                }),
                (s.prototype._syncStateAndSubscribe = function(t, e, o) {
                    e.subscribe(
                        null,
                        this._onItemPropertyChanged.bind(this, t, o)
                    ),
                        this._onItemPropertyChanged(t, o, e);
                }),
                (s.prototype._setupItemPropertyButton = function(
                    t,
                    e,
                    o,
                    i,
                    s,
                    r
                ) {
                    t.attr("title", i).click(
                        function(t) {
                            this._onItemPropertyButtonClicked(
                                e.properties()[o],
                                s + e.title()
                            );
                        }.bind(this)
                    ),
                        this._syncStateAndSubscribe(t, e.properties()[o], r);
                }),
                (s.prototype._setupItemRemoveButton = function(t, e) {
                    e !== this._chartModel.mainSeries() && e.isUserDeletable()
                        ? t.attr("title", $.t("Delete")).click(
                              function(t) {
                                  t.preventDefault(),
                                      this._chartModel.removeSource(e);
                              }.bind(this)
                          )
                        : t.addClass("i-transparent");
                }),
                (s.prototype._onNodeToggleExpandCollapse = function(t, e) {
                    var o = "i-expanded",
                        i = t.hasClass(o);
                    t.toggleClass(o, !i),
                        this._nodeExpandCollapseCallback &&
                            this._nodeExpandCollapseCallback(t, e, !i);
                }),
                (t.exports.ObjectTreeItemsController = s);
        }.call(e, o(3), o(30)));
    },
    655: function(t, e, o) {
        (function(e, i) {
            "use strict";
            function s(t) {
                this._$filter = $(e.render(r, {filters: this._getActions()}))
                    .appendTo(t)
                    .tvDropdown();
                var o = this;
                this._$filter.on(
                    Modernizr.touch ? "touchend" : "click",
                    ".js-dropdown-item",
                    function(t) {
                        o._$filter.tvDropdown("close"),
                            o._$filter
                                .find(".js-dropdown-item.i-active")
                                .removeClass("i-active"),
                            $(this).addClass("i-active");
                    }
                ),
                    this._$filter.on("afterCloseMenu", function() {
                        o.setValue(
                            o._$filter
                                .find(".js-dropdown-item.i-active")
                                .attr("data-name")
                        );
                    }),
                    this._$filter.on("beforeOpenMenu", function() {
                        o._$filter.find(".js-dropdown-item").each(function() {
                            var t = $(this);
                            t.toggleClass(
                                "i-active",
                                t.attr("data-name") === o._value
                            );
                        });
                    }),
                    (this.onChange = new i()),
                    this.setValue("all"),
                    this._$filter
                        .find(
                            '.js-dropdown-item[data-name="' + this._value + '"]'
                        )
                        .addClass("i-active");
            }
            var r,
                n = o(31).Study,
                a = o(43),
                l = o(1).LineDataSource;
            o(137),
                o(518),
                o(509),
                o(261),
                (r =
                    '<div class="tv-dropdown tv-dropdown-behavior"><div class="tv-dropdown-behavior__button js-dropdown-toggle tv-objects-tree-tab-filter__button"><span class="js-filter-title"></span><span class="tv-caret"></span></div><div class="tv-dropdown__body tv-dropdown-behavior__body i-hidden">{{#filters}}<div class="tv-dropdown-behavior__item"><div class="tv-dropdown__item js-dropdown-item" data-name="{{name}}">{{title}}</div></div>{{/filters}}</div></div>'),
                (s.prototype.value = function() {
                    return this._value;
                }),
                (s.prototype.setValue = function(t) {
                    if (t !== this._value) {
                        this._value = t;
                        var e = this._getActions().filter(function(e) {
                            return e.name === t;
                        })[0];
                        this._$filter.find(".js-filter-title").text(e.title),
                            this.onChange.fire(t);
                    }
                }),
                (s.prototype.applyToGroup = function(t) {
                    var e, o, i, s, r;
                    if ("all" === this._value) return t;
                    for (e = [], o = 0; o < t.length; o++)
                        (i = t[o]),
                            (s = TradingView.isInherited(
                                i.datasource.constructor,
                                a
                            )),
                            (r = TradingView.isInherited(
                                i.datasource.constructor,
                                "drawings" === this._value ? n : l
                            )),
                            (!s && r) || e.push(i);
                    return e;
                }),
                (s.prototype._getActions = function() {
                    return [
                        {name: "all", title: $.t("All")},
                        {name: "drawings", title: $.t("Drawings")},
                        {name: "studies", title: $.t("Studies")}
                    ];
                }),
                (t.exports.ObjectsTreeTabFilter = s);
        }.call(e, o(30), o(15)));
    },
    656: function(t, e, o) {
        "use strict";
        function i(t, e, o, i, s) {
            r.call(this, t, e, o, i),
                (this._delayedRenderIntervals = {}),
                (this._$filterContainer = s),
                (this._boundUpdateView = this._updateView.bind(this)),
                (this._boundRenderView = this._renderView.bind(this, null)),
                (this._zorderChangedHandler = this._onZorderChanged.bind(this));
        }
        var s = o(655).ObjectsTreeTabFilter,
            r = o(299);
        o(510),
            inherit(i, r),
            (i.prototype.destroy = function() {
                Object.keys(this._delayedRenderIntervals).forEach(function(t) {
                    clearInterval(t);
                }),
                    (this._delayedRenderIntervals = null),
                    r.prototype.destroy.call(this);
            }),
            (i.prototype.initView = function() {
                (this._filter = new s(this._$filterContainer)),
                    this._filter.onChange.subscribe(
                        this,
                        function() {
                            this._renderView(
                                this._scroll.scrollToStart.bind(this._scroll)
                            );
                        }.bind(this)
                    ),
                    r.prototype.initView.call(this);
            }),
            (i.prototype._addSortableToList = function(t, e) {
                var o = 0;
                this._listAccessor().createSortableForItemsList(
                    t,
                    function(t, e) {
                        o = e.item.index();
                    },
                    function(t, i) {
                        var s,
                            r,
                            n,
                            a,
                            l,
                            c,
                            d,
                            h,
                            p,
                            u = i.item.index();
                        if (o !== u) {
                            for (
                                s = o > u ? i.item.next() : i.item.prev(),
                                    r = this._getSourceIdForItem(i.item),
                                    n = this._getSourceIdForItem(s),
                                    a = -1,
                                    l = -1,
                                    c = 0;
                                c < e.length;
                                ++c
                            )
                                (d = e[c]),
                                    d.datasource.id() === r
                                        ? (a = c)
                                        : d.datasource.id() === n && (l = c);
                            for (
                                h = this._chartModel.dataSourceForId(r),
                                    this._chartModel.removeListener(
                                        "changeZOrder",
                                        this._zorderChangedHandler
                                    ),
                                    this._chartModel.beginUndoMacro(
                                        "Change " + h.title() + " Z order"
                                    ),
                                    p = a > l ? 1 : -1,
                                    c = 0;
                                c < Math.abs(a - l);
                                c++
                            )
                                this._chartModel.changeZOrder(h, p);
                            this._chartModel.endUndoMacro(),
                                this._chartModel.on(
                                    "changeZOrder",
                                    this._zorderChangedHandler
                                );
                        }
                    }.bind(this)
                );
            }),
            (i.prototype._getNewSelectedIdOnRemoval = function(t) {
                var e = t.next();
                0 === e.length && (e = t.prev()),
                    this._listAccessor().activateItem(
                        e,
                        this._getSourceForItem(e)
                    );
            }),
            (i.prototype._moveItemUp = function(t) {
                var e = t.prev();
                e.length && (t.insertBefore(e), this._scroll.scrollTo(t));
            }),
            (i.prototype._moveItemDown = function(t) {
                var e = t.next();
                e.length && (t.insertAfter(e), this._scroll.scrollTo(t));
            }),
            (i.prototype._removeSourceFromView = function(t) {
                var e,
                    o = this._getItemForSourceId(t.id()),
                    i = t.id() === this._selectedSourceId();
                i && this._getNewSelectedIdOnRemoval(o),
                    (e = o.parent()),
                    1 === e.children().length ? e.remove() : o.remove(),
                    this._selectedSourceId() &&
                        i &&
                        this._scroll.scrollTo(
                            this._getItemForSourceId(this._selectedSourceId())
                        );
            }),
            (i.prototype._removeSourcesFromView = function(t) {
                this._renderView(
                    function() {
                        this._scroll.scrollToStart();
                    }.bind(this)
                );
            }),
            (i.prototype._onZorderChanged = function(t, e) {
                if (t)
                    if (e) {
                        var o = this._getItemForSourceId(t.id());
                        1 === e ? this._moveItemUp(o) : this._moveItemDown(o);
                    } else
                        this._renderView(
                            function() {
                                this._scroll.scrollTo(
                                    this._getItemForSourceId(t.id())
                                );
                            }.bind(this)
                        );
            }),
            (i.prototype._subscribeListeners = function() {
                r.prototype._subscribeListeners.call(this),
                    this._chartModel.on("setProperty", this._boundUpdateView),
                    this._chartModel.on("cloneLineTool", this._boundRenderView),
                    this._chartModel.on(
                        "setChartStyleProperty",
                        this._boundUpdateView
                    ),
                    this._chartModel.on(
                        "changeZOrder",
                        this._zorderChangedHandler
                    ),
                    this._chartModel.on("moveSource", this._boundRenderView);
            }),
            (i.prototype._unsubscribeListeners = function() {
                r.prototype._unsubscribeListeners.call(this),
                    this._chartModel.removeListener(
                        "setProperty",
                        this._boundUpdateView
                    ),
                    this._chartModel.removeListener(
                        "cloneLineTool",
                        this._boundRenderView
                    ),
                    this._chartModel.removeListener(
                        "setChartStyleProperty",
                        this._boundUpdateView
                    ),
                    this._chartModel.removeListener(
                        "changeZOrder",
                        this._zorderChangedHandler
                    ),
                    this._chartModel.removeListener(
                        "moveSource",
                        this._boundRenderView
                    );
            }),
            (i.prototype._updateView = function() {
                var t, e, o, i, s, r;
                for (
                    this._reloadItems(), t = this._getItems().groups, e = 0;
                    e < t.length;
                    ++e
                )
                    if (((o = t[e]), o.children.length))
                        for (i = o.children.length - 1; i >= 0; --i)
                            (s = o.children[i]),
                                (r = this._getItemForSourceId(
                                    s.datasource.id()
                                )),
                                0 !== r.length &&
                                    this._listAccessor().updateItem(r, s);
            }),
            (i._groupRenderSize = 50),
            (i.prototype._renderGroup = function(t) {
                var e, o;
                (t = t || {}),
                    (e = 0),
                    (o = setInterval(
                        function() {
                            var s = t.items.slice(e, e + i._groupRenderSize);
                            s.forEach(
                                function(e) {
                                    var o = this._list.createItem(e, {
                                        lockUnlock: t.showLocks,
                                        showHide: !0,
                                        draggable: !0,
                                        addContextMenu: !0
                                    });
                                    this._markItemForSource(o, e.datasource),
                                        e.datasource.id() ===
                                            this._selectedSourceId() &&
                                            this._listAccessor().activateItem(
                                                o,
                                                e.datasource
                                            ),
                                        t.$group.append(o);
                                }.bind(this)
                            ),
                                (e += i._groupRenderSize),
                                s.length ||
                                    (clearInterval(o),
                                    delete this._delayedRenderIntervals[o],
                                    0 === --this._fillListGroupsCount &&
                                        t.callback());
                        }.bind(this),
                        100
                    )),
                    (this._delayedRenderIntervals[o] = !0);
            }),
            (i.prototype._renderViewInternal = function(t) {
                var e,
                    o,
                    i,
                    s,
                    r =
                        "studies" !== this._filter.value() &&
                        this._items.drawings.length;
                for (
                    this._fillListGroupsCount = 0,
                        e = this._getItems().groups,
                        o = 0;
                    o < e.length;
                    o++
                )
                    (i = this._filter.applyToGroup(e[o].children)),
                        i.length &&
                            ((s = $(
                                '<div class="tv-objects-tree-tab__group">'
                            ).appendTo(this._$contentWrapper)),
                            this._addSortableToList(s, e[o].children),
                            i.reverse(),
                            this._renderGroup({
                                showLocks: r,
                                callback: t,
                                items: i,
                                $group: s
                            }),
                            this._fillListGroupsCount++);
            }),
            (t.exports = i);
    },
    840: function(t, e) {
        t.exports =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill-rule="evenodd" d="M0 2.006C0 .898.897 0 2.006 0h9.988C13.102 0 14 .897 14 2.006v9.988A2.005 2.005 0 0 1 11.994 14H2.006A2.005 2.005 0 0 1 0 11.994V2.006zM5.586 7L3.293 4.707 2.586 4 4 2.586l.707.707L7 5.586l2.293-2.293.707-.707L11.414 4l-.707.707L8.414 7l2.293 2.293.707.707L10 11.414l-.707-.707L7 8.414l-2.293 2.293-.707.707L2.586 10l.707-.707L5.586 7z"/></svg>';
    },
    841: function(t, e) {
        t.exports =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill-rule="evenodd" d="M0 2.006C0 .898.897 0 2.006 0h9.988C13.102 0 14 .897 14 2.006v9.988A2.005 2.005 0 0 1 11.994 14H2.006A2.005 2.005 0 0 1 0 11.994V2.006zM7 11c3.314 0 6-4 6-4s-2.686-4-6-4-6 4-6 4 2.686 4 6 4zm0-2c-1.111 0-2-.889-2-2s.889-2 2-2 2 .889 2 2-.906 2-2 2z"/></svg>';
    },
    842: function(t, e) {
        t.exports =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill-rule="evenodd" d="M0 2.006C0 .898.897 0 2.006 0h9.988C13.102 0 14 .897 14 2.006v9.988A2.005 2.005 0 0 1 11.994 14H2.006A2.005 2.005 0 0 1 0 11.994V2.006zm11.119 4.28s-.357 0-.452-.334a3.415 3.415 0 0 0-.334-.81c-.143-.309.096-.547.096-.547l.357-.357c.143-.143.143-.38 0-.548l-.476-.476c-.143-.143-.381-.143-.548 0l-.357.357s-.238.239-.548.096a3.415 3.415 0 0 0-.81-.334c-.333-.095-.333-.452-.333-.452v-.5A.376.376 0 0 0 7.334 2h-.667a.376.376 0 0 0-.381.381v.5s0 .357-.334.452c-.285.072-.547.19-.81.334-.309.143-.547-.096-.547-.096l-.357-.357c-.143-.143-.38-.143-.548 0l-.476.476c-.143.143-.143.381 0 .548l.357.357s.239.238.096.548a3.415 3.415 0 0 0-.334.81c-.095.309-.452.333-.452.333h-.5a.376.376 0 0 0-.381.38v.667c0 .215.167.381.381.381h.5s.357 0 .452.334c.072.285.19.547.334.81.143.309-.096.547-.096.547l-.357.357c-.143.143-.143.38 0 .548l.476.476c.143.143.381.143.548 0l.357-.357s.238-.239.548-.096c.262.143.524.262.81.334.309.095.333.452.333.452v.5c0 .214.166.381.38.381h.667a.376.376 0 0 0 .381-.381v-.5s0-.357.334-.452c.285-.072.547-.19.81-.334.309-.143.547.096.547.096l.357.357c.143.143.38.143.548 0l.476-.476c.143-.143.143-.381 0-.548l-.357-.357s-.239-.238-.096-.548c.143-.262.262-.524.334-.81.095-.309.452-.333.452-.333h.5a.376.376 0 0 0 .381-.38v-.667a.376.376 0 0 0-.381-.381h-.5zM7 9c-1.111 0-2-.889-2-2s.889-2 2-2 2 .889 2 2-.906 2-2 2z"/></svg>';
    },
    843: function(t, e) {
        t.exports =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill-rule="evenodd" d="M0 2.006C0 .898.897 0 2.006 0h9.988C13.102 0 14 .897 14 2.006v9.988A2.005 2.005 0 0 1 11.994 14H2.006A2.005 2.005 0 0 1 0 11.994V2.006zM6 6H3v2h8V6H6z"/></svg>';
    },
    844: function(t, e) {
        t.exports =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill-rule="evenodd" d="M0 2.006C0 .898.897 0 2.006 0h9.988C13.102 0 14 .897 14 2.006v9.988A2.005 2.005 0 0 1 11.994 14H2.006A2.005 2.005 0 0 1 0 11.994V2.006zm8 1.19H6v3H3v2h3v3h2v-3h3v-2H8v-3z"/></svg>';
    }
});
