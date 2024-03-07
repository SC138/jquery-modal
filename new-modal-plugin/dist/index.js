"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function () {
    return _modal.default;
  }
});
Object.defineProperty(exports, "ModalContext", {
  enumerable: true,
  get: function () {
    return _ModalContext.ModalContext;
  }
});
Object.defineProperty(exports, "ModalProvider", {
  enumerable: true,
  get: function () {
    return _ModalContext.ModalProvider;
  }
});
var _modal = _interopRequireDefault(require("./modal"));
var _ModalContext = require("./contexts/ModalContext");