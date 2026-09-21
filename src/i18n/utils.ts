import { i18n } from "astro:config/server";

export function getStaticPaths() {
    return i18n?.locales.map((locale) => {
        const path = typeof locale === 'string' ? locale : locale.path;
        return {
            params: { lang: path === i18n?.defaultLocale ? undefined : path },
        }
    });
}