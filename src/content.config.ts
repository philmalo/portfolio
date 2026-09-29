import { defineCollection } from "astro/content/config";
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
    loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

const demos =  defineCollection({
    loader: glob({ base: './src/content/demos', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        order: z.number(),
        img: image(),
        alt: z.string(),
        stack: z.array(z.string()).default([]),
        repo: z.url({ protocol: /^https$/ }).optional(),
        link: z.url({ protocol: /^https$/ }).optional(),
    })
});

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



export const collections = { pages, strings, demos };