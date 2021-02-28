export enum Languages {
    en = 'en',
    ru = 'ru'
}

export enum Pages {
    main = 'main',
    career = 'career',
    cv = 'cv',
    skills = 'skills',
    contacts = 'contacts'
}

export type Language = Languages;
export type Page = keyof typeof Pages;

export type State = {
    language: Language;
    currentPage: Page;
};

const initialState: State = {
    language: Languages.en,
    currentPage: Pages.main
};

export const actionTypes = {
    SET_LANGUAGE: 'SET_LANGUAGE' as 'SET_LANGUAGE',
    NAVIGATE_TO_PAGE: 'NAVIGATE_TO_PAGE' as 'NAVIGATE_TO_PAGE'
};

interface IAction {
    type: keyof typeof actionTypes;
}

export type Action = IAction & { language?: Language; page?: Page };

export default function (state = initialState, action: Action): State {
    switch (action.type) {
        case actionTypes.SET_LANGUAGE:
            return <State>{ ...state, language: action.language };
        case actionTypes.NAVIGATE_TO_PAGE:
            return <State>{ ...state, currentPage: action.page };
        default:
            return initialState;
    }
}
