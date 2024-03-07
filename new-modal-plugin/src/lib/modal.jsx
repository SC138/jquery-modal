import "./global.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

// Composant de modale avec diverses fonctionnalités (props)
const Modal = ({
  isOpen, // Indique si la modale est ouverte
  closeModal, // Fonction pour fermer la modale
  children, // Contenu de la modale
  ajaxUrl, // URL pour charger le contenu de la modale par AJAX
  onBeforeOpen, // Appelé avant que la modale ne s'ouvre
  onOpen, // Appelé après que la modale s'est ouverte
  onBeforeClose, // Appelé avant que la modale ne se ferme
  onClose, // Appelé après que la modale s'est fermée
  onContentLoad, // Appelé après que le contenu AJAX de la modale a été chargé
  onContentError, // Appelé si le chargement du contenu AJAX de la modale échoue
  style, // Style pour la modale
}) => {
  // Utilise un état local pour stocker le contenu de la modale via AJAX
  const [content, setContent] = useState(null);

  // Effectue une opération AJAX au montage si isOpen et ajaxUrl sont définis
  useEffect(() => {
    // Si la modale est ouverte et qu'une URL AJAX est fournie, charge le contenu.
    if (isOpen && ajaxUrl) {
      onBeforeOpen?.(); // Vérifie si la prop est fournie et l'appelle si c'est le cas.
      fetch(ajaxUrl)
        .then((response) => response.json()) // Ou .text() si on attends du HTML ou du texte
        .then((data) => {
          onContentLoad?.(data); // Appelle le callback avec les données chargées
          setContent(data);
          onOpen?.(); // Appelle le callback après que le contenu est chargé
        })
        .catch((error) => {
          onContentError?.(error); // Appelle le callback d'erreur
          console.error("Error loading modal content:", error);
        });
    }
  }, [isOpen, ajaxUrl, onBeforeOpen, onOpen, onContentLoad, onContentError]); // Dépendances pour l'effet

  // Ajoute un écouteur d'événement pour la touche "Escape" au montage
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onBeforeClose?.(); // Vérifie si la prop est fournie et l'appelle
        closeModal(); // Ferme la modale
        onClose?.(); // Appelle le callback après que la modale est fermée
      }
    };
    // Ajoute l'écouteur d'événement pour la touche "Escape"
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey); // Retire l'écouteur d'événement
    };
  }, [closeModal, onBeforeClose, onClose]); // Dépendances pour l'effet

  // Le contenu de la modale n'est rendu que si isOpen est vrai
  return isOpen ? (
    <div
      // className="modal-blocker" // Ajoute une classe pour masquer le reste de la page si besoin
      onClick={() => {
        onBeforeClose?.(); // Appelé juste avant que la modale ne se ferme
        closeModal();
        onClose?.(); // Appelé après que la modale est fermée
      }}
    >
      <div
        className="modal-content"
        style={style} // Applique le style fourni
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture de la modale si on clique à l'intérieur
      >
        {/* Affichage conditionnel du contenu AJAX ou des enfants */}
        {content || children}
        <button
          className="close-btn "
          onClick={() => {
            onBeforeClose?.(); // Appelé juste avant que la modale ne se ferme
            closeModal();
            onClose?.(); // Appelé après que la modale est fermée
          }}
        >
          <FontAwesomeIcon icon={faCircleXmark} /> {/* Icône de fermeture */}
        </button>
      </div>
    </div>
  ) : null; // Ne rend rien si la modale n'est pas ouverte (isOpen est faux)
};

// Définition des defaultProps pour les callbacks
// Cela permet de les appeler sans vérifier s'ils sont définis
Modal.defaultProps = {
  onBeforeOpen: null,
  onOpen: null,
  onBeforeClose: null,
  onClose: null,
  onContentLoad: null,
  onContentError: null,
};

export default Modal;
