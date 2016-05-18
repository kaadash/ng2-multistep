"use strict";
/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var app_service_1 = require('./app.service');
var home_1 = require('./home');
var router_active_1 = require('./router-active');
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(appState) {
        this.appState = appState;
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.loading = false;
        this.name = 'Angular 2 Webpack Starter';
        this.url = 'https://twitter.com/AngularClass';
    }
    App.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            pipes: [],
            providers: [],
            directives: [router_active_1.RouterActive],
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [
                require('normalize.css'),
                require('./app.css')
            ],
            template: "\n    <md-content>\n      <md-toolbar color=\"primary\">\n          <span>{{ name }}</span>\n          <span class=\"fill\"></span>\n          <button md-button router-active [routerLink]=\" ['Index'] \">\n            Index\n          </button>\n          <button md-button router-active [routerLink]=\" ['Home'] \">\n            Home\n          </button>\n          <button md-button router-active [routerLink]=\" ['About'] \">\n            About\n          </button>\n      </md-toolbar>\n\n      <md-progress-bar mode=\"indeterminate\" color=\"primary\" *ngIf=\"loading\"></md-progress-bar>\n\n      <router-outlet></router-outlet>\n\n      <pre class=\"app-state\">this.appState.state = {{ appState.state | json }}</pre>\n\n      <footer>\n        <img [src]=\"angularclassLogo\" width=\"6%\">\n        WebPack Angular 2 Starter by <a [href]=\"url\">@AngularClass</a>\n      </footer>\n      </md-content>\n  "
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'Index', component: home_1.Home, useAsDefault: true },
            { path: '/home', name: 'Home', component: home_1.Home },
            // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
            { path: '/about', name: 'About', loader: function () { return require('es6-promise!./about')('About'); } }
        ]), 
        __metadata('design:paramtypes', [app_service_1.AppState])
    ], App);
    return App;
}());
exports.App = App;
/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
//# sourceMappingURL=app.component.js.map