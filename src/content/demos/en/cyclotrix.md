---
title: CycloTrix
order: 1
img: ../../../assets/cyclotrix.svg
alt: CycloTrix temporary logo
stack: [nginx, PHP-FPM, MariaDB, Caddy, Docker, mise, Bash]
repo: https://github.com/philmalo/CycloTrix
---

A LEMP development stack for Linux. [Pascal
Meunier](https://github.com/milhouse1337), a longtime friend, shared the macOS
setup he used at Trinary, and in 2023 he helped me port it to Linux.

CycloTrix is the rewrite, shaped by my two years at APCHQ. Every project is
served on its own subdomain with a real wildcard HTTPS certificate, reachable
from any device on the local network, with no certificate authority to install.
Setup is automated as [mise](https://mise.jdx.dev) tasks that are safe to
re-run and back up every file before changing it. Documentation is in French.
