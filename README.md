# Projet développement mobile - BONNET Kloé DONAT-BOUILLUD Lallie

## Présentation du projet

Notre projet s'intitule "Fais comme l'oiseau".
C'est une application mobile qui utilise l'API de Spotify afin de permettre à chaque utilisateur de regarder ses playlists en détails et d'avoir, pour chacune d'elles, un ou plusieurs oiseau(x) qui la représente. Il existe actuellement 10 types d'oiseaux différents qui correspondent à diverses caractéristiques. Cette application se veut ludique et permet ainsi à chacun d’en découvrir un peu plus sur soi-même, de façon humoristique… <(^v^)>

Notre application est **entièrement responsive** et comporte 5 pages différentes dans lesquelles on peut facilement circuler à l'aide d'une barre de navigation et de boutons facilement identifiables par leur forme et leur couleur. Dans chaque page, on peut se connecter, se déconnecter et rafraîchir la page actuelle.
La barre de navigation en bas de l’écran permet d’accéder à 3 pages : “Mon oiseau”, “Tous les oiseaux” et “Playlist” qui la page où l’utilisateur se trouve par défaut en ouvrant l’application.

- **Playlists :** Sur cette page, l’utilisateur peut voir la liste de toutes ses playlists avec leur titre, leur créateur et d'autres informations. Il est ensuite possible de cliquer sur une des playlists listées pour se rendre sur une autre page “Ma playlist”. Cette dernière présente une liste de toutes les musiques de la playlist sélectionnée.
- **Mon oiseau :** Cette page présente aussi la liste de toutes les playlists de l’utilisateur. Cependant, si ce dernier clique sur la playlist de son choix, il peut découvrir le ou les oiseaux se cachant derrière cette playlist, ainsi que des recommandations de musique.
- **Tous les oiseaux :** Cette page présente tous les oiseaux possibles.
- **Votre playlist :** Page listant toutes les musiques de la playlist sélectionnée.
- **Les oiseaux de votre playlist :** Présente le ou les oiseaux de la playlist sélectionnée.

## Liste des fonctionnalités

Voici les différentes fonctionnalités de notre application mobile :

- Se connecter/déconnecter/rafraîchir la page
- Barre de navigation (en bas de l’écran)
- Voir toutes les playlists d'un utilisateur : _“Mes Playlists” et “Mon oiseau”_
- Voir tous les oiseaux possibles : _“Tous les oiseaux”_
- La page **Votre playlist** :
  - Affiche le nombre de musique, l'auteur de la playlist, le titre de chaque musique, la durée, l'artiste et le nom de l'album.
- La page **Mon Oiseau** qui permet d'accéder à/aux oiseau(x) de la playlist choisie :
  - Apparition aléatoire des émojis sur le côté droit des playlists. Un son d’oiseau est émis lorsque l’on clique pour découvrir le ou les oiseaux de la playlist sélectionnée.
  - Permet d'accéder à la page **Les oiseaux de ma playlist** en cliquant sur une des playlists.
- La page **Les oiseaux de ma playlist** :
  - Affiche le ou les oiseaux de chaque playlist (nom, photo et descriptions) ainsi que les données générales de la playlist sélectionnée (popularité moyenne, durée moyenne, date de sortie moyenne).
  - Propose des recommandations calculées à l'aide de la première musique de la playlist. Un temps minimum et maximum est calculé en fonction de la durée moyenne des musiques de la playlist, de même pour le score de popularité minimum et maximum.
- Navigation facile du détail d'une playlist au(x) oiseau(x) qui la compose et inversement à l'aide d'un bouton (en vert) sur chacune de ces pages.

## Les différents oiseaux

Notre application comporte pour le moment 10 oiseaux différents
| Nom de l'oiseau | Condition d'apparition | Description |
| -------------------- | ---------------------- | ----------- |
| Oiseau de caractère | Moins de 5 chansons dans une playlist | Vous aimez seulement quelques chansons et vous savez lesquelles, pas la peine d'en chercher d'autres ! |
| Oiseau touche à tout | Plus de 80 chansons dans une playlist | Cette chanson est bien... mais celle-ci aussi ! Il me les faut toutes! |
| Oiseau populaire | Popularité moyenne des chansons supérieure à 60 | Vous suivez surtout les tendances vous, non ? |
| Oiseau Étrange | Popularité moyenne des chansons inférieure à 35 | Disons que vous avez des goûts...originaux... |
| Oiseau Rapide | Durée moyenne des chansons inférieure à 2min10 | Pas le temps pour une chanson ! Faut que ça enchaîne ! |
| Oiseau prend son temps | Durée moyenne des chansons supérieure à 4min10 | J'aime bien prendre le temps d'écouter le bruit des vagues..... zzzzzzzzzzzzzzzzzzz |
| Oiseau ancien | Date moyenne de sortie des chansons avant 1900 | Vous savez que tous les artistes que vous écoutez sont morts ? |
| Oiseau rétro | Date moyenne de sortie des chansons entre 1900 et 2000 | Vous auriez aimé être né à la décennie précédente ! |
| Oiseau nouveau | Date moyenne de sortie des chansons après 2000 | Les chansons actuelles, ça vous connaît ! On voit bien que vous êtes encore un jeune oisillon dans votre tête |
| Oiseau banal | Si vous n'avez aucun oiseau, vous aurez l'oiseau banal | Vous n'avez pas de particularité. Certains diront que cette absence de particularité est, finalement, votre particularité. Qu'en pensez-vous ? |

## L'url du site déployé

Le site a été déployé à l'aide de Netlify à l'url suivante : https://birdspot.netlify.app/ .

## La procédure d'installation

Pour installer notre projet, voici la procédure à suivre :

- Lancer Visual Studio Code et ouvrir un terminal.
- Choisissez le chemin d'accès dans lequel vous souhaitez installer le projet.
- Ecrire `git clone https://github.com/ensc-mobi/projet-2024-bonnet-donatbouillud.git`
- Ouvrez le projet qui vient de se télécharger dans Visual Studio Code.
- Ecrire `cd spotify` puis `npm install` et `npm start`
- Votre navigateur par défaut devrait se lancer à l'adresse suivante : http://localhost:3000/ . Si ce n'est pas le cas, tapez ce lien dans le navigateur de votre choix.

Félicitations, vous venez de lancer notre projet !

## Conseils d’utilisation

Pour apprécier au mieux l’utilisation de notre application, nous vous conseillons d’activer le son de votre appareil. Vous devez avoir un compte Spotify pour utiliser cette application, vous pouver utiliser un compte gratuit. A l'ouverture de l'application, merci de vous connecter à votre compte Spotify à l'aide du bouton "Login". Enfin, vous pouvez utiliser cette application sans crainte, elle ne peut supprimer ou modifier vos playlist 🙂

