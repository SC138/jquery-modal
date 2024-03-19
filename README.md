# react-new-modal-plugin

## Description:

Le plugin react-new-modal-plugin fournit une solution complète et flexible pour intégrer des fenêtres modales dans vos applications React.

## Fonctionnalités:

- **Ouverture et fermeture de modales** : Gérez l'ouverture et la fermeture de vos modales avec simplicité grâce aux fonctions fournies par le ModalContext.
- **Contenu dynamique** : Chargez du contenu dynamiquement dans vos modales.
- **Gestion des événements** : Des callbacks tels que '**onBeforeOpen**', '**onOpen**', '**onBeforeClose**', et '**onClose**' donnent le contrôle sur le cycle de vie de la modale.
- **Support AJAX** : Chargez le contenu des modales via AJAX en utilisant l'URL fournie à la prop ajaxUrl, enrichissant ainsi le contenu de vos modales sans rechargement de page.
- **Fermeture avec la touche Escape** : Les utilisateurs peuvent fermer la modale actuellement ouverte en appuyant sur la touche Escape.
- **Style personnalisable** : Personnalisez l'apparence de vos modales en passant un objet de style via la prop '**style**'.

## Installation :

Pour installer ce composant, utilisez npm ou yarn, comme suit :

```bash
npm i react-new-modal-plugin
```

ou

```bash
yarn add react-new-modal-plugin
```

## Exemple d'utilisation :

Pour utiliser ce composant dans votre projet React, suivez les étapes suivantes:

1. **Englobez votre application avec 'ModalProvider'** pour rendre le contexte des modales accessible à travers toute l'application.
2. **Utilisez le 'ModalContext'** pour accéder aux fonctions '**openModal**' et '**closeModal**', vous permettant d'ouvrir et de fermer des modales où que vous soyez dans l'arbre des composants.
3. **Ouvrez des modales** en passant le contenu souhaité et un identifiant unique à la fonction '**openModal**'.

```JavaScript
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
```

## Props :

Les props suivantes sont disponible pour la `Modal`

|          Props | Description                                                           |
| -------------: | --------------------------------------------------------------------- |
|         isOpen | Fonction d'ouverture de la modale                                     |
|     closeModal | Fonction de fermeture de la modale                                    |
|       children | Contenu de la modale                                                  |
|        ajaxUrl | URL pour charger le contenu de la modale par AJAX                     |
|   onBeforeOpen | Fonction appelée avant que la modale ne s'ouvre                       |
|         onOpen | Fonction appelée après que la modale s'est ouverte                    |
|  onBeforeClose | Fonction appelée avant que la modale ne se ferme                      |
|        onClose | Fonction appelée après que la modale s'est fermée                     |
|  onContentLoad | Fonction appelée après que le contenu AJAX de la modale a été chargé  |
| onContentError | Fonction appelée si le chargement du contenu AJAX de la modale échoue |
|          style | Style pour la modale                                                  |

## Bonne pratique :

- Utilisez des identifiants uniques pour chaque type de modale pour éviter les doublons et gérer efficacement l'état des modales ouvertes.

## FAQ :

**Q:** **Est-il possible d'avoir plusieurs modales ouvertes en même temps ?**  
- R: Oui, le système de gestion des modales permet d'ouvrir plusieurs modales. Chaque modale est identifiée par un identifiant unique et peut être fermée individuellement.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](src/lib/LICENSE.txt) pour plus de détails.

## Contribution

Les contributions à ce projet sont les bienvenues.
