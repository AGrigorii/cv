import { Language } from '../types';

export type TextEntity = {
    myName: string;
    mainLink: string;
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
        mainLink: 'Main',
        contactLink: 'Contact me',
        careerLink: 'Career',
        skillsLink: 'Skills',
        cvLink: 'Download cv',
        //slideshow panel
        currentLocation: 'Current location: Russia, Moscow',
        currentWorkStatus: 'Current status: working at Confirmit inc.',
        whoIAm: 'Position: Software engineer',
        specialization: 'Specialization: Node.js & React/Redux Full-stack developer',
        qualificationLevel: 'Qualification level: Middle'
    },
    ru: {
        myName: 'Ахременко Григорий',
        mainLink: 'Главная',
        contactLink: 'Связаться со мной',
        careerLink: 'Карьера',
        skillsLink: 'Умения',
        cvLink: 'Скачать резюме',
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
