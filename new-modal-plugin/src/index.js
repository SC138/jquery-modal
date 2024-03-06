import React, { useContext } from "react";
import { createRoot } from "react-dom/client";
import { ModalProvider, ModalContext } from "./lib/contexts/ModalContext";
import "./lib/global.css";

// Trouve l'élément racine de l'application
const container = document.getElementById("root");
// Crée un composant pour le contenu enfant de la modale
const ModalContent = ({ children }) => <div>{children}</div>;

const App = () => {
  // Récupère la fonction openModal du contexte ModalContext
  const { openModal } = useContext(ModalContext);

  // Fonction pour ouvrir la première modale avec le contenu "Hello World! #1" et un type identifié par "Type1"
  const openFirstModal = () => {
    openModal(<ModalContent>Hello World! #1</ModalContent>, "Type1");
  };
  // Fonction pour ouvrir la deuxième modale avec le contenu "Hello World! #2" et un type identifié par "Type2"
  const openSecondModal = () => {
    openModal(<ModalContent>Hello World! #2</ModalContent>, "Type2");
  };

  // Rendu de l'application qui contient deux boutons pour ouvrir les modales
  return (
    <div className="App">
      <button onClick={openFirstModal}>Modal 1</button>
      <button onClick={openSecondModal}>Modal 2</button>
    </div>
  );
};

// Crée un élément racine pour l'application et rend le composant App
const root = createRoot(container);
// Utilise la nouvelle API Root pour rendre l'application,
// englobée par le ModalProvider pour permettre l'utilisation du contexte des modales
root.render(
  <ModalProvider>
    <App />
  </ModalProvider>
);

export default App;
