export const showDefaultLang = false;

export const languages = {
    en: 'English',
    fr: 'Français',
};

export const defaultLang = 'fr';

export const ui = {
    en: {
        //! Meta tags
        'title.index': 'Website in production...',
        'title.home': 'Home',
        'title.about': 'About me',
        'title.demos': 'My projects',
        'title.contact': 'Contact me',

        'og.title.index': 'Philippe Malo, Full Stack Web Developer',
        'og.description.index': 'Full stack web developer portfolio: projects, background, and contact info.',

        'description.index': 'Website in production...',
        'description.home': `There's no place like 127.0.0.1`,
        'description.about': 'Learn more about me and what I have learned so far',
        'description.demos': 'A list of all the projects I have done/participated in',
        'description.contact': 'The ways you can contact me',

        //! Navigation
        'nav.home': '~',
        'nav.about': 'About',
        'nav.demos': 'Demos',
        'nav.contact': 'Contact',
        'nav.explore': 'Explore',

        //! home.astro
        'homepage.text': `<section><p>Welcome to my humble home on the internet. This is a place where you will find information about myself and see examples of work I've done throughout my new career as a web developer.</p></section><section><p>I have chosen this path after 17 years as a dental technician to get more in line with my interests and passions.</p></section>`,

        //! about.astro
        'about.text': `<section>
        <h2>Who am I as a web developer?</h2>
        <p>I am a self-taught, curious, and persevering individual. I am capable of programming both at the front-end and back-end levels.</p>
    </section>
    <section>
        <h2>What have I done in my career?</h2>
        <p><a class='links' href='/cv_en.pdf'>Here</a>you can take a gander at my resume.</p>
    </section>
    <section>
        <h2>My Skills</h2>
        <p>Here is a brief, non-exhaustive list of languages and platforms I have experience with:</p>
        <ul>
            <li>Laravel</li>
            <li>Astro</li>
            <li>Vue</li>
            <li>React</li>
            <li>WordPress</li>
            <li>Node</li>
            <li>MySQL</li>
        </ul>
        <ul>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
        </ul>
    </section>
    <section>
        <h2>My Goals</h2>
        <p>I aspire to become a reliable web developer, capable of providing assistance to anyone on the team who might need it.</p>
    </section>
    `,

        //! demos.astro
        'demo.title.yodio': "Yodio migration to Astro",
        'demo.body.yodio': `Weekend projet with a friend of mine,<a class="links" href="https://pascalmeunier.info/">Pascal Meunier</a>who built it originally with Laravel and wanted to convert it to<a class="links" href="https://astro.build">Astro</a>.`,
        'demo.url.yodio': "https://yodio.ca",
        'demo.alt.yodio': "Yodio's logo",

        'demo.title.deez': "Final college project",
        'demo.body.deez': `Project built with<a class="links" href="https://www.linkedin.com/in/louis-roby-619899a5/">Louis Roby</a>and <a class="links" href="https://www.linkedin.com/in/%C3%A9mile-daigneault-224225252/">Émile Daigneault</a>. A "mobile-first" web app to manage one's wine collection/cellars. Developed with the Laravel framework and using an SQL database. Check out the repo<a class="links" href="https://github.com/philmalo/deez">here</a>.`,
        'demo.url.deez': "https://deez.philippemalo.dev",
        'demo.alt.deez': "Deez Wines' logo",

        'demo.title.astro': "This portfolio",
        'demo.body.astro': `I have used this opportunity to learn the<a class="links" href="https://astro.build">Astro</a>framework for deploying static web pages. This is the end result. You can check out my repo<a class="links" href="https://github.com/philmalo/short-saturn">here</a>.`,
        'demo.alt.astro': "My website's logo",

        //! contact.astro
        'contact.text': `<section>
        <h2>Contact me</h2>
    </section>
    <section>
        <p>Here are some of the ways you can contact me</p>
        <ul>
            <li>Email: <a class="links" href="mailto:me@philippemalo.dev">me@philippemalo.dev</a></li>
            <li>LinkedIn: <a class="links" href="https://www.linkedin.com/in/philmalo">www.linkedin.com/in/philmalo</a></li>
            <li>Github: <a class="links" href="https://github.com/philmalo">github.com/philmalo</a></li>
        </ul>
    </section>`,
    },
    fr: {
        //? Meta tags
        'title.index': 'Production du site en cours...',
        'title.home': 'Accueil',
        'title.about': 'À propos de moi',
        'title.demos': 'Mes projets',
        'title.contact': 'Contactez moi',

        'og.title.index': 'Philippe Malo, développeur web full stack',
        'og.description.index': 'Portfolio de développeur web full stack : projets, parcours et façon de me contacter.',

        'description.index': 'Site web en production...',
        'description.home': `Il n'y a pas de place comme 127.0.0.1`,
        'description.about': `En apprendre davantage sur moi et ce que j'ai appris jusqu'à présent`,
        'description.demos': `Une liste de tous les projets que j'ai réalisés/auxquels j'ai participé`,
        'description.contact': 'Les moyens de me contacter',

        //? Navigation
        'nav.home': '~',
        'nav.about': 'À propos de moi',
        'nav.demos': 'Démos',
        'nav.contact': 'Me contacter',
        'nav.explore': 'Explorer',


        //? home.astro
        'homepage.text': `<section>
        <p>Bienvenue sur ma modeste demeure sur internet. C'est un endroit où vous trouverez des informations sur moi-même et verrez des exemples du travail que j'ai accompli tout au long de ma nouvelle carrière en tant que développeur web.</p>
    </section>
    <section>
        <p>J'ai choisi cette voie après 17 ans en tant que technicien dentaire pour être plus en phase avec mes intérêts et mes passions.</p>
    </section>
    `,

        //? about.astro
        'about.text': `<section>
        <h2>Qui suis-je en tant que développeur web?</h2>
        <p>Je suis quelqu'un d'autodidacte, curieux et persévérant. Je suis en mesure de programmer tant au niveau front-end que back-end. </p>
    </section>
    <section>
        <h2>Qu'ai-je accompli dans ma carrière?</h2>
        <p>mon CV est disponible pour consultation<a class='links' href='/cv.pdf'>ici</a>.</p>
    </section>
    <section>
        <h2>mes Compétences</h2>
        <p>Voici une brève liste non exhaustive des langages et plateformes avec lesquelles j'ai expérimenté:</p>
        <ul>
            <li>Laravel</li>
            <li>Astro</li>
            <li>Vue</li>
            <li>React</li>
            <li>WordPress</li>
            <li>Node</li>
            <li>MySQL</li>
        </ul>
        <ul>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
        </ul>
    </section>
    <section>
        <h2>Mes objectifs</h2>
        <p>J'aimerais être en mesure de devenir un développeur web fiable, qui est en mesure de porter assistance à quiconque dans l'équipe qui en aurait besoin.</p>
    </section>`,

        //? demos.astro
        'demo.title.yodio': "Migration Yodio vers Astro",
        'demo.body.yodio': `Projet de fin de semaine en collaboration avec un ami,<a class="links" href="https://pascalmeunier.info/">Pascal Meunier</a>, qui a originalement développé le site avec Laravel et était intéressé à le transposer dans le framework<a class="links" href="https://astro.build">Astro</a>.`,
        'demo.url.yodio': 'https://yodio.ca',
        'demo.alt.yodio': 'logo de yodio.ca',

        'demo.title.deez': "Projet final collégial",
        'demo.body.deez': `Projet développé en collaboration avec <a class="links" href="https://www.linkedin.com/in/louis-roby-619899a5/">Louis Roby</a> et <a class="links" href="https://www.linkedin.com/in/%C3%A9mile-daigneault-224225252/">Émile Daigneault</a>. Un site "mobile first" dédié à la gestion de collections de bouteilles de vin/celliers. Développé à l'aide de Laravel et avec base de données SQL. Explorez le dépôt <a class="links" href="https://github.com/philmalo/deez">ici</a>.`,
        'demo.url.deez': 'https://deez.philippemalo.dev',
        'demo.alt.deez': 'logo de Deez Wines',

        'demo.title.astro': "Ce portfolio",
        'demo.body.astro': `J'ai profité de l'opportunité en créant ce site à l'aide du framework<a class="links" href="https://astro.build">Astro</a>. vous pouvez consulter mon dépôt github<a class="links" href="https://github.com/philmalo/short-saturn">ici</a>.`,
        'demo.alt.astro': 'logo de mon site',

        //? contact.astro
        'contact.text': `<section>
        <h2>Me contacter</h2>
    </section>
    <section>
        <p>Voici quelques moyens pour entrer en contact :</p>
        <ul>
            <li>Email: <a class="links" href="mailto:me@philippemalo.dev">me@philippemalo.dev</a></li>
            <li>LinkedIn: <a class="links" href="https://www.linkedin.com/in/philmalo">www.linkedin.com/in/philmalo</a></li>
            <li>Github: <a class="links" href="https://github.com/philmalo">github.com/philmalo</a></li>
        </ul>
    </section>`,
    },
} as const;

export type TranslationKey = keyof typeof ui[typeof defaultLang];

export const routes = {
    en: {
        'home': 'home',
        'about': 'about',
        'demos': 'demos',
        'contact': 'contact'
    },
    fr: {
        'home': 'home',
        'about': 'about',
        'demos': 'demos',
        'contact': 'contact'
    },
}