import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "Fog Machine": "Fog Machine",
            "POWER": "POWER",
            "FOG": "FOG",
            "POWER ON": "POWER ON",
            "POWER OFF": "POWER OFF",
            "FOG ON": "FOG ON",
            "FOG OFF": "FOG OFF"
        }
    },
    fr: {
        translation: {
            "Fog Machine": "Machine à brume",
            "POWER": "COURANT 220V",
            "FOG": "BRUME",
            "POWER ON": "MARCHE",
            "POWER OFF": "ARRÊT",
            "FOG ON": "BRUME OUVERTE",
            "FOG OFF": "BRUME FERMÉE"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;