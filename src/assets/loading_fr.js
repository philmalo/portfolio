const year = new Date().getFullYear();
const text = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
</head>
<body>
    <header>
        <div>
            <h1>Philippe Malo</h1>
            <h2>Développeur Web</h2>
        </div>
        <div>
            <nav>
                <a href="/home">~</a>
                <a href="/about">À propos de moi</a>
                <a href="/demos">Démos</a>
                <a href="/contact">Me contacter</a>
            </nav>
            <nav>
                <a href="/en/home">English</a>
                <a href="/home">Français</a>
            </nav>
        </div>
    </header>
    <main>
        <p class="code">me@philippemalo.dev:~$ </p>
    </main>
    <footer>
        <p>2023 - ${year} Philippe Malo</p>
    </footer>
</body>
</html>`;

export default text;