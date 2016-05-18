"use strict";
var button_1 = require('@angular2-material/button');
var card_1 = require('@angular2-material/card');
var checkbox_1 = require('@angular2-material/checkbox');
var input_1 = require('@angular2-material/input');
var list_1 = require('@angular2-material/list');
var progress_bar_1 = require('@angular2-material/progress-bar');
var progress_circle_1 = require('@angular2-material/progress-circle');
var radio_1 = require('@angular2-material/radio');
var sidenav_1 = require('@angular2-material/sidenav');
var toolbar_1 = require('@angular2-material/toolbar');
/*
 * we are grouping the module so we only need to manage the imports in one location
 */
exports.MATERIAL_PIPES = [];
exports.MATERIAL_DIRECTIVES = sidenav_1.MD_SIDENAV_DIRECTIVES.concat([
    button_1.MdAnchor,
    button_1.MdButton,
    toolbar_1.MdToolbar,
    checkbox_1.MdCheckbox,
    radio_1.MdRadioButton,
    radio_1.MdRadioGroup,
    progress_circle_1.MdSpinner,
    progress_bar_1.MdProgressBar,
    progress_circle_1.MdProgressCircle
], input_1.MD_INPUT_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, card_1.MD_CARD_DIRECTIVES);
exports.MATERIAL_PROVIDERS = [
    radio_1.MdRadioDispatcher
];
//# sourceMappingURL=index.js.map