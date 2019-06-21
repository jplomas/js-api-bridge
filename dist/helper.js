"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QrlAddressValidator = QrlAddressValidator;

/* eslint import/prefer-default-export: 0 */
var validate = require('@theqrl/validate-qrl-address').hexString;

function QrlAddressValidator(addr) {
  return validate(addr).result;
}
//# sourceMappingURL=helper.js.map