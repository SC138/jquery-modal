"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalProvider = exports.ModalContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _uuid = require("uuid");
const ModalContext = exports.ModalContext = /*#__PURE__*/(0, _react.createContext)({
  modals: [],
  openModal: () => {},
  closeModal: () => {}
});
const ModalProvider = _ref => {
  let {
    children
  } = _ref;
  const [modals, setModals] = (0, _react.useState)([]);
  const openModal = ModalContent => {
    // Génère un identifiant unique à chaque modale
    const modalId = (0, _uuid.v4)();
    setModals(prevModals => [...prevModals, {
      id: modalId,
      content: ModalContent
    }]);
  };
  const closeModal = modalId => {
    setModals(prevModals => prevModals.filter(modal => modal.id !== modalId));
  };
  return /*#__PURE__*/_react.default.createElement(ModalContext.Provider, {
    value: {
      modals,
      openModal,
      closeModal
    }
  }, children);
};
exports.ModalProvider = ModalProvider;