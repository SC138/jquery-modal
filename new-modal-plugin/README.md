# react-new-modal-plugin

Description:  
Une modal dymanique pour react.

## Installation

Pour installer ce composant, utilisez npm ou yarn, comme suit :

```bash
npm i react-new-modal-plugin
```

ou

```bash
yarn add react-new-modal-plugin
```

## Utilisation

Pour utiliser ce composant dans votre projet React

```bash
import Modal from "react-new-modal-plugin";
import React, { useState } from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Ouvrir la modal</button>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        children={"Hello, je suis une modal !"}
      />
    </div>
  );
};

export default App;
```

## Props

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

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE] (LICENSE. txt) pour plus de détails.

## Contribution

Les contributions à ce projet sont les bienvenues. Veuillez consulter les issues ouverts ou soumettre des pull requests.
