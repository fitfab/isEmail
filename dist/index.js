"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param str
 */
function isEmail(str) {
    // Verify : https://regex101.com/r/VBGyXV/1
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(str);
}
exports.isEmail = isEmail;
