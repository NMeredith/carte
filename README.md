Mobile projet - M2GI - 2021-2022

Général

Le projet consiste à réaliser une application utilisant les principaux éléments du développement mobile avec React Native. Vous avez une liste de spécifications ainsi que des maquettes mais l’objectif est de vous impliquer dans la réalisation; nouvelles fonctionnalités, design de l’interface etc...

Vous serez évalué sur :

- les fonctionnalités requises
- vos propres fonctionnalités
- l’aspect visuel de l’application
- la qualité du code

Concernant les fonctionnalités : la liste ci-dessous est **non-exhaustive**; vous devez ajouter vos propres idées.

Concernant l’aspect visuel : les maquettes sont volontairement réalisées en basse fidélité. A vous de personnaliser votre design, voire même de proposer quelque chose de différent. Vous pouvez utiliser une bibliothèque graphique si vous le souhaitez (comme UI Kitten par exemple).

Concernant le code : faites attention à ne pas faire de duplication, suivez les principes de React, gérez les erreurs…

Composition des groupes : jusqu’à 3 personnes.

Merci de m’envoyer un mail à <n.fournier.edu@gmail.com> avec la composition des groupes. Si vous avez des questions sur le projet, n’hésitez pas non plus à me contacter.

Rendu

*05/03/2021 au plus tard*

Envoyez moi un mail avec le lien du projet GitHub (il doit être publique). C’est la limite pour push votre code.

Merci d’inclure un Readme à la racine rappelant:

- la composition du groupe
- les fonctionnalités ajoutées à l’application
- toutes remarques utiles

*12/03/2021*

Présentation en groupe. Vous ferez une démonstration de l’application sur votre appareil. Vous devrez également présenter votre code et vous serez interrogé sur celui-ci (comment

vous avez développé une fonctionnalité par exemple).

Spécifications

Voici quelques pistes pour implémenter les spécifications. Si vous souhaitez explorer d’autres solutions, faites le !

- Composant pour la carte : [MapView (Expo)](https://docs.expo.dev/versions/latest/sdk/map-view/) - [git (+ doc)](https://github.com/react-native-maps/react-native-maps)
- Framework UI : [UI Kitten](https://akveo.github.io/react-native-ui-kitten/)
- Geocoding : [positionstack](https://positionstack.com/documentation)

J'insiste sur le fait que la liste suivante est non-exhaustive. Le but est que vous cherchiez par vous même des fonctionnalités intéressantes à ajouter.

N’oubliez également pas de gérer les erreurs API et réseau, ajouter des feedbacks aux actions utilisateur, empty state…

Général

L’application permet à l’utilisateur d’enregistrer des lieux. Ces derniers sont localisés et sont consultables sur une carte.

Page de recherche d’un lieu enregistré

Cette page permet à l’utilisateur de consulter les lieux enregistrés. Chaque lieu est affiché dans une liste. En cliquant sur un élément de la liste, l’utilisateur est redirigé sur la page de détails du lieu.

L’utilisateur peut effectuer une recherche par:

- terme
- catégorie
- location (parmi la liste des villes des enregistrement OU en utilisant la position du téléphone) + rayon

Par exemple, si l'utilisateur sélectionne la ville de metz et un rayon de 50 km, les lieux enregistrés à Thionville doivent s’afficher.

Par défaut, la liste contient tous les enregistrements. Si une recherche est effectuée, seulement les enregistrements correspondants sont affichés. Les résultats peuvent être triés par distance ou par date d’ajout.

Page carte

Cette page est séparé en 2 :

- une carte
- une liste de lieux

La carte affiche la position des lieux enregistrés via des marqueurs. L’utilisateur doit être capable d’identifier la catégorie du lieu en fonction du marqueur.

Par défaut, la carte est centrée sur la position de l’utilisateur. Cette dernière est interactive (l’utilisateur peut déplacer la vue, zoomer etc…).

La liste contient uniquement les lieux présents sur la carte (dans la vue). Si l’utilisateur déplace la vue de la carte, cette liste est mise à jour.

Un bouton est présent sur chaque entrée de la liste pour centrer la vue de la carte sur la position du lieu en question.

En cliquant sur un élément de la liste, l’utilisateur est redirigé sur la page de détails du lieu.

Un bouton permet à l’utilisateur d’ajouter un nouveau lieu.

Ajouter un lieu

L'utilisateur doit saisir les informations du lieu qu’il souhaite enregistrer :

- nom
- description
- catégorie(s)
- location

Les catégories sont à choisir parmi une liste pré-établie.

La location peut être saisie de 2 manières : en utilisant la position de l’utilisateur ou en renseignant l’adresse.

Page d’un lieu

Cette page contient les détails d’un lieu enregistré (position sur la carte, adresse, nom, description, catégorie).

L’utilisateur doit pouvoir modifier le lieu ou le supprimer.

![](Aspose.Words.7df55f3c-e44c-4687-aaf9-3c0c547e40a5.001.png)![](Aspose.Words.7df55f3c-e44c-4687-aaf9-3c0c547e40a5.002.png)

![](Aspose.Words.7df55f3c-e44c-4687-aaf9-3c0c547e40a5.003.png)![](Aspose.Words.7df55f3c-e44c-4687-aaf9-3c0c547e40a5.004.png)
