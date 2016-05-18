"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// App
__export(require('./app.component'));
__export(require('./app.service'));
var app_service_2 = require('./app.service');
// Application wide providers
exports.APP_PROVIDERS = [
    app_service_2.AppState
];
//# sourceMappingURL=index.js.map