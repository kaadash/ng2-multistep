"use strict";
// Angular 2
var core_1 = require('@angular/core');
// Environment Providers
var PROVIDERS = [];
if ('production' === ENV) {
    // Production
    core_1.enableProdMode();
    PROVIDERS = PROVIDERS.slice();
}
else {
    // Development
    PROVIDERS = PROVIDERS.slice();
}
exports.ENV_PROVIDERS = PROVIDERS.slice();
//# sourceMappingURL=environment.js.map