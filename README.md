# Projet_TravelLog

## Introduction
Dans le cadre de notre formation à la HEIG-VD, nous avons réalisé une application mobile. L’application en question est une application de voyage. Un utilisateur peut ajouter les voyages qu’il a effectué ainsi que les places qu’il a visité. Le but d’un tel projet est de mettre en pratique les divers éléments vu lors des cours de Mathias Oberson. 

Nous avons repris l’API proposé par Mathias. Nous avons fait ce choix, car celle que nous avons développée, lors du précédent cours, comportait beaucoup trop d’erreurs et modifications à apporter. Comme le temps nous est compté, nous avons préféré partir sur une API valide.

## Login
Pour pouvoir utiliser notre application, un compte utilisateur est nécessaire. C'est pourquoi, la première page de notre application est une page de login.

![Page de login](images_doc/Login/Login.png "Page de login")


## Page Home
Une fois le login effectué, l’utilisateur se retrouve sur la page d’accueil de l’application qui s'affiche comme ceci :

![Homepage](images_doc/Home/Home.png "Homepage")

### Logout
Si l’utilisateur souhaite se déconnecter de l’application, il peut le faire, à tout moment, en cliquant sur l’icône présente sur le haut de l’application : 

![Bouton logout](images_doc/Home/Logout/Logout.png "Bouton logout")

### Menu
Le menu de l’application est visible sur le bas de l’écran. Il comporte 5 éléments :
1. **Account :** permet de se rendre sur la page “Account”
2. **Trips :** permet de se rendre sur la page qui liste tous les voyages
3. **Places :** permet de se rendre sur la page qui liste toutes les places
4. **Map :** permet de se rendre sur la page qui indique sur une carte la position actuelle de l'utilisateur ainsi que toutes les places
5. **Stats :** permet de se rendre sur la page qui indique les statistiques de l’application en temps réel

![Menu](images_doc/Home/Menu/Menu.png "Menu")

## Page “Account”
La page “Account” se présente comme ceci :

![Page account](images_doc/Account/Account.png "Page account")

Sur cette page, l'utilisateur a la possibilité de modifier son nom d'utilisateur et/ou son mot de passe. Pour valider les changements effectués, il suffit de cliquer sur le bouton “UPDATE ACCOUNT” (à noter que cette fonctionnalité n'est pas implémentée).

Il a également la possibilité de voir tous ses propres voyages qu’il a enregistré. Pour se faire, il doit cliquer sur le bouton “MY TRIPS”.

Le dernier bouton présent sur la page “MY GALLERY” permet à l'utilisateur de prendre des photos, depuis son smartphone, et/ou de voir les photos précédemment prises.

### My Trips
La page “My Trips” se présente comme ceci :

![Page My Trips](images_doc/Account/MyTrips/My-trips-1.png "Page My Trips")
![Page My Trips](images_doc/Account/MyTrips/My-trips-2.png "Page My Trips")

Sur le haut de l’application, un filtre est mis à disposition de l’utilisateur, pour qu’il puisse filtrer les résultats affichés.

![Filter](images_doc/Account/MyTrips/Filter.png "Filter")

Juste en dessous, une courte phrase indique le nombre de résultats affichés.

![Number of trips](images_doc/Account/MyTrips/Number-results-trips.png "Number of trips")

Chaque résultat apparaît dans un rectangle. On retrouve le nom du voyage, la description et deux boutons. Le premier permet de supprimer le voyage en question. Le second permet de mettre à jour les informations concernant le voyage sélectionné.

![Trip presentation](images_doc/Account/MyTrips/Trip-presentation.png "Trip presentation")

Si l'utilisateur clique sur un voyage, il est redirigé sur la page qui liste toutes les places reliées au voyage sélectionné.

![See a trip](images_doc/Account//One-place.png "See a trip")

Si l'utilisateur clique sur le bouton jaune-orange, il est redirigé sur la page qui permet de modifier le voyage. Cette page se présente de cette manière :

![Trip update](images_doc/Account/MyTrips//UpdateTrip/Update-trip.png "Trip update")

Il peut alors modifier les informations grâce au formulaire à disposition. En cliquant sur le bouton "CANCEL", il revient à la page précédente. S'il clique sur le bouton "UPDATE", les données entrées sont enregistrées dans l'API à la place des données initiales.

Au bas de la page "My Trips", deux boutons sont présents :

![Buttons](images_doc/Account/MyTrips/Buttons-my-trips.png "Buttons")

Le bouton “BACK TO ACCOUNT PAGE” permet de retourner à la page précédente. Le bouton “CREATE A TRIP” permet à l’utilisateur de créer un voyage. 

#### Create de Trip
La page “Create Trip” se présente comme ceci :

![Form create a trip](images_doc/Account/MyTrips/CreateTrip/Create-trip.png "Form create a tripns")

Pour enregistrer un nouveau voyage, il suffit de remplir le formulaire. Le premier champ correspond au titre du voyage, le second à sa description. 

Le bouton “CANCEL” permet de retourner à la page précédente (à savoir “My Trips”).

Le bouton “CREATE” permet d’enregistrer les données et ainsi, créer le voyage. Si la requête est validée, l’utilisateur est redirigé sur la page “All Trips”.

### My Gallery
En cliquant sur le bouton “My Gallery”, l’utilisateur est dirigé sur une page qui regroupe toutes les photos prises ainsi que la possibilité d’en prendre des nouvelles.

![Page Gallery](images_doc/Account/Gallery/Gallery.png "Page Gallery")

En cliquant sur le bouton plus avec l’icône de l’appareil photo, l’utilisateur peut prendre une photo à l’aide de son smartphone. 

Il est possible que l’utilisateur doive autoriser l’application à prendre des photos et accéder à celles-ci.

![Authorizazion](images_doc/Account/Gallery/Authorization-1.png "Authorizazion")
![Authorizazion](images_doc/Account/Gallery/Authorization-2.png "Authorizazion")

Après avoir accepté ces différentes autorisations, l’utilisateur peut prendre la photo qu’il souhaite.

![Take a photo](images_doc/Account/Gallery/Photo-1.png "Take a photo")

Dès que la photo est prise, l’utilisateur peut valider le clicher ou le refuser pour en reprendre un autre.

![Validate photo](images_doc/Account/Gallery/Photo-2.png "Validate photo")

Dès que la photo est validée, l’utilisateur est redirigé sur la page d’accueil de la galerie. C’est à cet endroit qu’il peut voir toutes les photos qu’il a.

![Gallery](images_doc/Account/Gallery/Photo-3.png "Gallery")

## Page “Trips”
La page “All Trips” se présente comme ceci :

![Page Trips](images_doc/Trips/All-trips.png "Page Trips")

Sur le haut de l’application, un filtre est mis à disposition de l’utilisateur, pour qu’il puisse filtrer les résultats affichés.

![Filter](images_doc/Trips/Filter.png "Filter")

Juste en dessous, une courte phrase indique le nombre de résultats affichés.

![Number of results](images_doc/Trips/Number-results-trips.png "Number of results")

Chaque résultat apparaît dans un rectangle. On retrouve le nom du voyage et sa description.

![Place presentation](images_doc/Trips/Trip-presentation-trips.png "Place presentation")

## Page “Places”
La page “All Places” se présente comme ceci :

![Page Places](images_doc/Places/All-places.png "Page Places")

Sur le haut de l’application, un filtre est mis à disposition de l’utilisateur, pour qu’il puisse filtrer les résultats affichés.

![Filter](images_doc/Places/Filter.png "Filter")

Juste en dessous, une courte phrase indique le nombre de résultats affichés.

![Number of results](images_doc/Places/Number-results-places.png "Number of results")

Chaque résultat apparaît dans un rectangle. On retrouve le nom de la place et la description.

![Place presentation](images_doc/Places/Place-presentation.png "Place presentation")

## Page “Map”
La page “Maps” se présente comme ceci :

![Page Map](images_doc/Map/Map.png "Page Map")

Sur cette carte, l’utilisateur peut voir sa position actuelle ainsi que toutes les places enregistrées dans l'API.  

## Page “Stats”

Sur la page de statistiques, l'utilisateur peut voir le nombre de voyages et le nombre de places actuellement enregistrés sur l'API.

![Page Stats](images_doc/Stats/Stats.png "Page Stats")
