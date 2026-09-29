---
title: CycloTrix
order: 1
img: ../../../assets/cyclotrix.svg
alt: logo temporaire de CycloTrix
stack: [nginx, PHP-FPM, MariaDB, Caddy, Docker, mise, Bash]
repo: https://github.com/philmalo/CycloTrix
---

Stack LEMP de développement sous Linux. [Pascal
Meunier](https://github.com/milhouse1337), un ami de longue date, m’avait
partagé la configuration macOS qu’il utilisait chez Trinary, et je l’avais
transposée à Linux avec son aide en 2023.

CycloTrix en est la refonte, enrichie par mes deux années à l’APCHQ. Chaque
projet est servi sur son propre sous-domaine avec un vrai certificat HTTPS
wildcard, accessible depuis tout appareil du réseau local, sans autorité de
certification à installer. L’installation est automatisée en tâches
[mise](https://mise.jdx.dev) qu’on peut relancer sans risque, et qui
sauvegardent chaque fichier avant de le modifier.
