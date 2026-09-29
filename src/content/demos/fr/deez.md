---
title: Projet final collégial
order: 3
img: ../../../assets/deez_wines.png
alt: logo de Deez Wines
stack: [Laravel, PHP, MySQL, Blade, Laravel Scout, Guzzle, DomCrawler]
repo: https://github.com/philmalo/deez
link: https://deez.philippemalo.dev
modal: true
---

Application web « mobile first » de gestion de celliers, réalisée en équipe avec
[Louis Roby](https://www.linkedin.com/in/louis-roby-619899a5/) et [Émile
Daigneault](https://www.linkedin.com/in/%C3%A9mile-daigneault-224225252/) pour
conclure l’AEC au Collège de Maisonneuve.

On y gère plusieurs celliers, les quantités de chaque bouteille, des notes de
dégustation et une liste d’achats. Le catalogue est importé du site de la SAQ
par un robot de collecte (Guzzle et DomCrawler), puis indexé avec Laravel Scout
pour la recherche. L’application est bilingue et comporte un volet
d’administration.
