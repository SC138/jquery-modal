"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./global.css");
var _react = _interopRequireWildcard(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
// Composant de modale avec diverses fonctionnalités (props)
const Modal = _ref => {
  let {
    isOpen,
    // Indique si la modale est ouverte
    closeModal,
    // Fonction pour fermer la modale
    children,
    // Contenu de la modale
    ajaxUrl,
    // URL pour charger le contenu de la modale par AJAX
    onBeforeOpen,
    // Appelé avant que la modale ne s'ouvre
    onOpen,
    // Appelé après que la modale s'est ouverte
    onBeforeClose,
    // Appelé avant que la modale ne se ferme
    onClose,
    // Appelé après que la modale s'est fermée
    onContentLoad,
    // Appelé après que le contenu AJAX de la modale a été chargé
    onContentError,
    // Appelé si le chargement du contenu AJAX de la modale échoue
    style // Style pour la modale
  } = _ref;
  // Utilise un état local pour stocker le contenu de la modale via AJAX
  const [content, setContent] = (0, _react.useState)(null);

  // Effectue une opération AJAX au montage si isOpen et ajaxUrl sont définis
  (0, _react.useEffect)(() => {
    // Si la modale est ouverte et qu'une URL AJAX est fournie, charge le contenu.
    if (isOpen && ajaxUrl) {
      onBeforeOpen === null || onBeforeOpen === void 0 ? void 0 : onBeforeOpen(); // Vérifie si la prop est fournie et l'appelle si c'est le cas.
      fetch(ajaxUrl).then(response => response.json()) // Ou .text() si on attends du HTML ou du texte
      .then(data => {
        onContentLoad === null || onContentLoad === void 0 ? void 0 : onContentLoad(data); // Appelle le callback avec les données chargées
        setContent(data);
        onOpen === null || onOpen === void 0 ? void 0 : onOpen(); // Appelle le callback après que le contenu est chargé
      }).catch(error => {
        onContentError === null || onContentError === void 0 ? void 0 : onContentError(error); // Appelle le callback d'erreur
        console.error("Error loading modal content:", error);
      });
    }
  }, [isOpen, ajaxUrl, onBeforeOpen, onOpen, onContentLoad, onContentError]); // Dépendances pour l'effet

  // Ajoute un écouteur d'événement pour la touche "Escape" au montage
  (0, _react.useEffect)(() => {
    const handleEscapeKey = event => {
      if (event.key === "Escape") {
        onBeforeClose === null || onBeforeClose === void 0 ? void 0 : onBeforeClose(); // Vérifie si la prop est fournie et l'appelle
        closeModal(); // Ferme la modale
        onClose === null || onClose === void 0 ? void 0 : onClose(); // Appelle le callback après que la modale est fermée
      }
    };
    // Ajoute l'écouteur d'événement pour la touche "Escape"
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey); // Retire l'écouteur d'événement
    };
  }, [closeModal, onBeforeClose, onClose]); // Dépendances pour l'effet

  // Le contenu de la modale n'est rendu que si isOpen est vrai
  return isOpen ? /*#__PURE__*/_react.default.createElement("div", {
    // className="modal-blocker" // Ajoute une classe pour masquer le reste de la page si besoin
    onClick: () => {
      onBeforeClose === null || onBeforeClose === void 0 ? void 0 : onBeforeClose(); // Appelé juste avant que la modale ne se ferme
      closeModal();
      onClose === null || onClose === void 0 ? void 0 : onClose(); // Appelé après que la modale est fermée
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    style: style // Applique le style fourni
    ,
    onClick: e => e.stopPropagation() // Empêche la fermeture de la modale si on clique à l'intérieur
  }, content || children, /*#__PURE__*/_react.default.createElement("button", {
    className: "close-btn ",
    onClick: () => {
      onBeforeClose === null || onBeforeClose === void 0 ? void 0 : onBeforeClose(); // Appelé juste avant que la modale ne se ferme
      closeModal();
      onClose === null || onClose === void 0 ? void 0 : onClose(); // Appelé après que la modale est fermée
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCircleXmark
  }), " "))) : null; // Ne rend rien si la modale n'est pas ouverte (isOpen est faux)
};

// Définition des defaultProps pour les callbacks
// Cela permet de les appeler sans vérifier s'ils sont définis
Modal.defaultProps = {
  onBeforeOpen: null,
  onOpen: null,
  onBeforeClose: null,
  onClose: null,
  onContentLoad: null,
  onContentError: null
};
var _default = exports.default = Modal;