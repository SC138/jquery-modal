import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "../modal";
// Crée un contexte pour gérer l'état et les actions des modales à travers l'application
export const ModalContext = createContext();

// Définit un composant fournisseur pour encapsuler la logique et l'état des modales
export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]); // Initialise l'état avec un tableau vide pour stocker les modales

  // Fonction pour ouvrir une modale avec un contenu et un type spécifiés
  const openModal = (modalContent, modalType) => {
    // Vérifie si une modale du même type est déjà ouverte pour éviter les doublons
    const isModalOpen = modals.some((modal) => modal.type === modalType);

    // Si aucune modale du même type n'est ouverte, crée une nouvelle modale
    if (!isModalOpen) {
      const modalId = uuidv4(); // Génère un identifiant unique pour la modale
      // Ajoute le modalType à l'objet de la modale
      setModals((prevModals) => [
        ...prevModals,
        { id: modalId, content: modalContent, type: modalType }, // Ajoute la nouvelle modale à l'état
      ]);
    }
  };
  // Fonction pour fermer une modale en fonction de son identifiant
  const closeModal = (modalId) => {
    // Filtre les modales pour supprimer celle avec l'identifiant spécifié
    setModals((prevModals) =>
      prevModals.filter((modal) => modal.id !== modalId)
    );
  };

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children} {/* Rendu des composants enfants */}
      {/* Mappe chaque modale dans l'état pour la rendre à l'écran */}
      {modals.map((modal, index) => (
        // Utilise le composant Modal pour afficher chaque modale
        <Modal
          key={modal.id} // Utilise l'identifiant unique de la modale comme clé
          isOpen={true} // Indique que la modale est ouverte
          closeModal={() => closeModal(modal.id)} // Utilise la fonction de fermeture avec l'identifiant
          style={{ top: `${10 + index * 10}%` }} // Style pour positionner les modales
        >
          {modal.content} {/* Affiche le contenu de la modale */}
        </Modal>
      ))}
    </ModalContext.Provider>
  );
};
