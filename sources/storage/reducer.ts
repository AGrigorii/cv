export enum Languages {
    en = 'en',
    ru = 'ru'
}
export type Language = keyof typeof Languages;

export type State = {
    language: Language;
};

const initialState: State = {
    language: Languages.en
};

export const actionTypes = {
    SET_LANGUAGE: 'SET_LANGUAGE' as 'SET_LANGUAGE'
};

interface IAction {
    type: keyof typeof actionTypes;
}

export type Action = IAction & { language: Language };

export default function (state = initialState, action: Action): State {
    switch (action.type) {
        case actionTypes.SET_LANGUAGE:
            return { ...state, language: action.language };
        default:
            return initialState;
    }
}
