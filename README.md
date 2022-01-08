
# Projet de Développement Mobile M2GI - 2021-2022

## Composition du groupe 6 : 
- Mérédith Nolin** meredith.nolin9@etu.univ-lorraine.fr
- Hugo Brangbour** brangbour.hugo@gmail.com 

## Fonctionnalité générales
L’application permet à l’utilisateur d’enregistrer des lieux. Ces derniers sont localisés et sont
consultables sur une carte.

L'application devrait les fonctionnalités suivantes : 

- [ ] **Page d’un lieux**
- [ ] **Page de recherche d’un lieu enregistré**
- [ ] **Page carte**
- [ ] **Ajouter un lieu**
- [ ] **Annuler une recherche**
- [ ] **Ajouter/retirer un lieu visité**
- [ ] **Ajouter/ retirer un lieu à visiter**
- [ ] **Affichage des lieux visité**
- [ ] **Affichage des lieux à visiter**
- [ ] **Bouton pour filtrer sur la carte**
- [ ] **Proposer l'application en français et en anglais**
- [ ] **Utiliser une API pour récupérer une liste de lieu (et l'afficher)**
- [ ] **Filtrer sur la page recherche les lieux enregistré/de l'API**
- [ ] **Préremplir l'ajout d'un lieu par rapport à un lieu de l'API**
- [ ] **Étoffer l'intéraction avec les lieux de l'API**
- [ ] **Pouvoir afficher l'itinéraire vers un lieu depuis l'utilisateur**
- [ ] **Bouton de filtre "Maintenant" pour afficher ce qui est actuellement ouvert**

### Détails des fonctionnalités

- **Page d’un lieu** : Contient les détails d'un lieu (nom, adresse, description, catégorie, sous-catégorie, position sur la carte). Est aussi suggéré des lieux à proximité. Si on clique sur la carte, on est redirigé vers la page carte centré sur ce lieu.
- **Page de recherche d’un lieu enregistré** : Permet de consulter les lieux enregistrés, ils sont affiché dans une liste. Quand on clique sur un élément, on est redirigé vers la page de ce lieu. On peut faire une recherche par Terme, Catégorie, Sous-Catégorie et Localisation (position + rayon). Scroller permet d'afficher plus de résultat. Par défaut, la liste contient tous les enregistrements. Si une recherche est effectuée, seulement les enregistrements correspondants sont affichés. Les résultats peuvent être triés par distance ou par date d’ajout.
- **Page carte** : Affiche uniquement la carte (contrairement au sujet). Affichage des positions de tous(?) les lieux avec un marqueur idientifiable, dépendant de la catégorie du lieu. Par défaut la carte est centré sur la position de l'utilisateur, par défaut centré sur Metz. La carte est intéractive (zoom, déplacement, page de détail d'un lieu). Cliquer sur un lieu permet d'afficher une petite fenêtre qui donne un résumé du lieu, cliquer sur ce résumé redirige vers la page de détail du lieu. On peux effectuer la recherche sur la page carte. 
- **Ajouter un lieu** : Permet d'enregistrer un lieu personnalisé (avec nom, description, catégorie(s), location), les catégories sont à choisir parmi une liste pré-établie. Le bouton ajouter un lieu est visible depuis les barres de recherche de la page de recherche et de la page carte.
- **Annuler une recherche** : Réinitialise la recherche (vider le champ de recherche et remet sur l'utilisateur centré sur la carte)
- **Ajouter/Retirer un lieu visité/à visiter** : Avoir deux boutons pour mettre dans la liste correspondante
- **Affichage des lieux visité/à visiter** : Fait office d'historique et de whishlist
- **Bouton pour filtrer sur la carte** : Avoir un bonton pour filtrer par catégories sur la carte
- **Proposer l'application en français et en anglais** : Proposer une version traduite de l'application
- **Utiliser une API pour récupérer une liste de lieu (et l'afficher)** : Utilisation d'une API pour récupérer une liste de lieux
- **Filtrer sur la page recherche les lieux enregistrer/de l'API** : Pouvoir avoir un filtre pour n'afficher que les lieux enregistrer ou les lieux de l'API
- **Préremplir l'ajout d'un lieu par rapport à un lieu de l'API** : Si les informations rentrées dans l'application sont trop proches d'un lieu de l'API, une proposition de remplacement/annulation est faite
- **Étoffer l'intéraction avec les lieux de l'API** : Essayer de trouver de nouvelles intéractions avec l'API
- **Pouvoir afficher l'itinéraire vers un lieu depuis l'utilisateur** : Permet de faire un itinéraire entre le lieu choisi et l'utilisateur
- **Bouton de filtre "Maintenant" pour afficher ce qui est actuellement ouvert** : Le bouton permet de filtrer les lieux ouvert actuellement
