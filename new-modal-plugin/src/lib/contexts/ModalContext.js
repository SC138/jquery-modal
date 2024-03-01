import React, {createContext, useState} from "react";
import { v4 as uuidv4 } from "uuid";

export const ModalContext = createContext({
    modals: [],
    openModal: () => {},
    closeModal: () => {},
});

export const ModalProvider = ({children}) => {
    const [modals, setModals] = useState([]);

    const openModal = (ModalContent) => {
        // Génère un identifiant unique à chaque modale
        const modalId = uuidv4();
        setModals(prevModals =>[...prevModals, { id: modalId, content: ModalContent }]);
    };

    const closeModal = (modalId) => {
        setModals(prevModals => prevModals.filter(modal => modal.id !== modalId));
    };

    return (
        <ModalContext.Provider value={{modals, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    );
}