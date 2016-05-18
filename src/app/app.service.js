"use strict";
var core_1 = require('@angular/core');
var angular2_hmr_1 = require('angular2-hmr');
var AppState = (function () {
    function AppState() {
        // @HmrState() is used by HMR to track the state of any object during a hot module replacement
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state[prop] || state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    __decorate([
        angular2_hmr_1.HmrState(), 
        __metadata('design:type', Object)
    ], AppState.prototype, "_state", void 0);
    AppState = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppState);
    return AppState;
}());
exports.AppState = AppState;
//# sourceMappingURL=app.service.js.map