"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _01_functions_js_1 = require("./01-functions.js");
const names = ['Jean', 'Eric'];
names.push('Paul');
for (const n of names) {
    console.log((0, _01_functions_js_1.hello)(n));
}
