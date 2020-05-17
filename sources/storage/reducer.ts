export enum Lang {
    en = 'en',
    ru = 'ru'
}
export type AccessibleLanguages = keyof typeof Lang;

export type State = {
    lang: AccessibleLanguages;
};

const initialState: State = {
    lang: Lang.en
};

export const actions = {
    SET_LANGUAGE: 'SET_LANGUAGE'
};

export default function (state = initialState, action: { type: keyof typeof actions; lang: AccessibleLanguages }) {
    switch (action.type) {
        case actions.SET_LANGUAGE:
            return { ...state, lang: action.lang };
        default:
            return initialState;
    }
}
