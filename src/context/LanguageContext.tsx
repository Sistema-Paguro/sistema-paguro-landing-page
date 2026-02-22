import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../locales/translations';

type Language = 'ES' | 'EN';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Try to get language from local storage, default to ES
    const [language, setLanguageState] = useState<Language>('ES');

    useEffect(() => {
        const savedLang = localStorage.getItem('paguro_language') as Language;
        if (savedLang) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('paguro_language', lang);
    };

    // Helper to get nested translation keys (e.g. "hero.title")
    const t = (key: string): any => {
        const keys = key.split('.');
        let current: any = translations[language];

        for (const k of keys) {
            if (current[k] === undefined) {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
            current = current[k];
        }

        return current as string;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
