"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalProvider = exports.ModalContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _uuid = require("uuid");
var _modal = _interopRequireDefault(require("../modal"));
// Crée un contexte pour gérer l'état et les actions des modales à travers l'application
const ModalContext = exports.ModalContext = /*#__PURE__*/(0, _react.createContext)();

// Définit un composant fournisseur pour encapsuler la logique et l'état des modales
const ModalProvider = _ref => {
  let {
    children
  } = _ref;
  const [modals, setModals] = (0, _react.useState)([]); // Initialise l'état avec un tableau vide pour stocker les modales

  // Fonction pour ouvrir une modale avec un contenu et un type spécifiés
  const openModal = (modalContent, modalType) => {
    // Vérifie si une modale du même type est déjà ouverte pour éviter les doublons
    const isModalOpen = modals.some(modal => modal.type === modalType);

    // Si aucune modale du même type n'est ouverte, crée une nouvelle modale
    if (!isModalOpen) {
      const modalId = (0, _uuid.v4)(); // Génère un identifiant unique pour la modale
      // Ajoute le modalType à l'objet de la modale
      setModals(prevModals => [...prevModals, {
        id: modalId,
        content: modalContent,
        type: modalType
      } // Ajoute la nouvelle modale à l'état
      ]);
    }
  };
  // Fonction pour fermer une modale en fonction de son identifiant
  const closeModal = modalId => {
    // Filtre les modales pour supprimer celle avec l'identifiant spécifié
    setModals(prevModals => prevModals.filter(modal => modal.id !== modalId));
  };
  return /*#__PURE__*/_react.default.createElement(ModalContext.Provider, {
    value: {
      modals,
      openModal,
      closeModal
    }
  }, children, " ", modals.map((modal, index) =>
  /*#__PURE__*/
  // Utilise le composant Modal pour afficher chaque modale
  _react.default.createElement(_modal.default, {
    key: modal.id // Utilise l'identifiant unique de la modale comme clé
    ,
    isOpen: true // Indique que la modale est ouverte
    ,
    closeModal: () => closeModal(modal.id) // Utilise la fonction de fermeture avec l'identifiant
    ,
    style: {
      top: "".concat(10 + index * 10, "%")
    } // Style pour positionner les modales
  }, modal.content, " ")));
};
exports.ModalProvider = ModalProvider;