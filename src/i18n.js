import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: "/assets/i18n/{{ns}}/{{lng}}.json"
        },
        debug: false, // disabled in production 
        fallbackLng: "en",
        ns: ["navbar", "common", "home", "page1", "page2"],
        interpolation: {
            escapeValue: false,
            formatSeparator: ","
        },
        react: {
            // wait: true 
        }
    });

export default i18n;