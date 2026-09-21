import { defineCollection } from "astro/content/config";
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// mon interprétation, à valider: on défini dans un fichier .md chacune de mes pages et on va ajouter dans [page].md/mdx le titre et la description, j'imagine avec la version française et anglaise du contenu.. donc par exemple, about.md, contact.md etc avec meta titre et description..
const pages = defineCollection({
    loader: glob({ base: './src/content', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

// mon interprétation, à valider: un fichier json qui va contenir les mots "statiques" du site, les choses qui changent pas/rarement. Par exemple la navigation, les méta données etc
const strings = defineCollection({
    loader: file('src/content/strings.json'),
    schema: z.object({
        languageName: z.string(),
        nav: z.object({
            home: z.string(),
            about: z.string(),
            demos: z.string(),
            contact: z.string(),
            explore: z.string(),
        }),
        meta: z.object({
            index: z.object({
                title: z.string(),
                description: z.string(),
                ogTitle: z.string(),
                ogDescription: z.string(),
            }),
            demos: z.object({
                title: z.string(),
                description: z.string(),
            }),
            notFound: z.object({
                title: z.string(),
                description: z.string(),
            }),
        }),
        notFound: z.object({
            backLabel: z.string(),
            errorMessage: z.string(),
        }),
    }),
});

// mon interprétation, à valider : contenu de ce qui va s'afficher dans mes cartes sur ma page démos..
const demos =  defineCollection({
    loader: file('src/content/demos.json'),
    schema: ({ image }) => z.object({
        order: z.number(),
        img: image(),
        link: z.string().optional(),
        fr: z.object({
            title: z.string(),
            body: z.string(),
            alt: z.string(),
        }),
        en: z.object({
            title: z.string(),
            body: z.string(),
            alt: z.string(),
        })
    })
});

export const collections = { pages, strings, demos };