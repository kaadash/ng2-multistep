/*
 * These are globally available directives in any template
 */
"use strict";
var core_1 = require('@angular/core');
// Angular 2 Router
var router_deprecated_1 = require('@angular/router-deprecated');
// Angular 2 Material 2
// TODO(gdi2290): replace with @angular2-material/all
var angular2_material2_1 = require('./angular2-material2');
// application_directives: directives that are global through out the application
exports.APPLICATION_DIRECTIVES = router_deprecated_1.ROUTER_DIRECTIVES.concat(angular2_material2_1.MATERIAL_DIRECTIVES);
exports.DIRECTIVES = [
    { provide: core_1.PLATFORM_DIRECTIVES, multi: true, useValue: exports.APPLICATION_DIRECTIVES }
];
//# sourceMappingURL=directives.js.map