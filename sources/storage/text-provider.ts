import { AccessibleLanguages } from './reducer';

type TextEntity = {
    myName: string;
    contactLink: string;
    careerLink: string;
    skillsLink: string;
    cvLink: string;
};

type Vocabulary = {
    en: TextEntity;
    ru: TextEntity;
};

const vocabulary: Vocabulary = {
    en: {
        myName: 'Akhremenko Grigorii',
        contactLink: 'Contacts',
        careerLink: 'Career',
        skillsLink: 'Skills',
        cvLink: 'Cv'
    },
    ru: {
        myName: 'Ахременко Григорий',
        contactLink: 'Контакты',
        careerLink: 'Карьера',
        skillsLink: 'Умения',
        cvLink: 'Резюме'
    }
};

export function getText(lang: AccessibleLanguages, textIdentifier: keyof TextEntity): string {
    return vocabulary[lang][textIdentifier];
}
