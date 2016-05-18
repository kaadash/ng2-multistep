// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module
"use strict";
// Angular 2
require('@angular/platform-browser');
require('@angular/platform-browser-dynamic');
require('@angular/core');
require('@angular/common');
require('@angular/http');
require('@angular/router-deprecated');
// RxJS
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
// Angular 2 Material 2
require('@angular2-material/button');
require('@angular2-material/card');
require('@angular2-material/checkbox');
require('@angular2-material/sidenav');
require('@angular2-material/input');
require('@angular2-material/list');
require('@angular2-material/radio');
require('@angular2-material/progress-bar');
require('@angular2-material/progress-circle');
require('@angular2-material/toolbar');
// look in src/platform/angular2-material2 and src/platform/providers
if ('production' === ENV) {
}
else {
}
//# sourceMappingURL=vendor.js.map