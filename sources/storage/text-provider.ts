import { Language } from './reducer';

export type TextEntity = {
    myName: string;
    contactLink: string;
    careerLink: string;
    skillsLink: string;
    cvLink: string;
    //slideshow panel
    currentLocation: string;
    currentWorkStatus: string;
    whoIAm: string;
    specialization: string;
    qualificationLevel: string;
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
        cvLink: 'Cv',
        //slideshow panel
        currentLocation: 'Current location: Russia, Moscow',
        currentWorkStatus: 'Current status: working at Confirmit inc.',
        whoIAm: 'Position: Software engineer',
        specialization: 'Specialization: Node.js & React/Redux Full-stack developer',
        qualificationLevel: 'Qualification level: Middle'
    },
    ru: {
        myName: 'Ахременко Григорий',
        contactLink: 'Контакты',
        careerLink: 'Карьера',
        skillsLink: 'Умения',
        cvLink: 'Резюме',
        //slideshow panel
        currentLocation: 'Текущая локация: Россия, Москва',
        currentWorkStatus: 'Текущий статус: работаю в Confirmit',
        whoIAm: 'Должность: Software engineer',
        specialization: 'Специализация: Node.js & React/Redux Фуллстек разработчик',
        qualificationLevel: 'Уровень квалификации: Middle'
    }
};

export function getText(lang: Language, textIdentifier: keyof TextEntity): string {
    return vocabulary[lang][textIdentifier];
}
