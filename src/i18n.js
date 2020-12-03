import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

import translation_en from "../public/locales/en/translation.json";
import translation_fr from "../public/locales/fr/translation.json";

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,

        react: {
            useSuspense: false
        },

        lng: 'en',
        fallbackLng: 'en',
        whitelist: ['en', 'fr'],

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        resources: {
            en: {
                translation: translation_en               // 'common' is our custom namespace
            },
            fr: {
                translation: translation_fr
            },
        },
    });

export default i18n;