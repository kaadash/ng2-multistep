"use strict";
var core_1 = require('@angular/core');
var lang_1 = require('@angular/core/src/facade/lang');
var router_deprecated_1 = require('@angular/router-deprecated');
/**
 * RouterActive dynamically finds the first element with routerLink and toggles the active class
 *
 * ## Use
 *
 * ```
 * <li router-active="active"><a [routerLink]=" ['/Home'] ">Home</a></li>
 * <li [routerActive]=" activeStringValue "><a [routerLink]=" ['/Home'] ">Home</a></li>
 * ```
 */
var RouterActive = (function () {
    function RouterActive(router, element, renderer, routerLink, routerActiveAttr) {
        this.router = router;
        this.element = element;
        this.renderer = renderer;
        this.routerLink = routerLink;
        this.routerActive = undefined;
        this.routerActiveAttr = 'active';
        this.routerActiveAttr = this._defaultAttrValue(routerActiveAttr);
    }
    RouterActive.prototype.ngOnInit = function () {
        var _this = this;
        this.routerLink.changes.subscribe(function () {
            if (_this.routerLink.first) {
                _this._updateClass();
                _this._findRootRouter().subscribe(function () {
                    _this._updateClass();
                });
            }
        });
    };
    RouterActive.prototype._findRootRouter = function () {
        var router = this.router;
        while (lang_1.isPresent(router.parent)) {
            router = router.parent;
        }
        return router;
    };
    RouterActive.prototype._updateClass = function () {
        var active = this.routerLink.first.isRouteActive;
        this.renderer.setElementClass(this.element.nativeElement, this._attrOrProp(), active);
    };
    RouterActive.prototype._defaultAttrValue = function (attr) {
        return this.routerActiveAttr = attr || this.routerActiveAttr;
    };
    RouterActive.prototype._attrOrProp = function () {
        return lang_1.isPresent(this.routerActive) ? this.routerActive : this.routerActiveAttr;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RouterActive.prototype, "routerActive", void 0);
    RouterActive = __decorate([
        core_1.Directive({
            selector: '[router-active]'
        }),
        __param(3, core_1.Query(router_deprecated_1.RouterLink)),
        __param(4, core_1.Optional()),
        __param(4, core_1.Attribute('router-active')), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, core_1.ElementRef, core_1.Renderer, core_1.QueryList, String])
    ], RouterActive);
    return RouterActive;
}());
exports.RouterActive = RouterActive;
//# sourceMappingURL=router-active.directive.js.map