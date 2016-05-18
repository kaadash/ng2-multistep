"use strict";
var testing_1 = require('@angular/core/testing');
// Load the implementations that should be tested
var app_component_1 = require('./app.component');
var app_service_1 = require('./app.service');
describe('App', function () {
    // provide our implementations or mocks to the dependency injector
    testing_1.beforeEachProviders(function () { return [
        app_service_1.AppState,
        app_component_1.App
    ]; });
    testing_1.it('should have a url', testing_1.inject([app_component_1.App], function (app) {
        expect(app.url).toEqual('https://twitter.com/AngularClass');
    }));
});
//# sourceMappingURL=app.spec.js.map