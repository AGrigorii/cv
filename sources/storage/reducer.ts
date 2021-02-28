import { Language, Languages, Page, Pages } from '../types';
import { InferValueTypes } from '../utils/types';
import * as actions from './actions/action-creator';
import { ActionTypes } from './actions/action-types';

export type State = {
    language: Language;
    currentPage: Page;
};

const initialState: State = {
    language: (localStorage.getItem('lastSelectedLanguageCode') as Language) || Languages.en,
    currentPage: Pages.main
};

export type Action = ReturnType<InferValueTypes<typeof actions>>;

export default function (state = initialState, action: Action): State {
    switch (action.type) {
        case ActionTypes.SET_LANGUAGE:
            return { ...state, language: action.language };
        case ActionTypes.NAVIGATE_TO_PAGE:
            return { ...state, currentPage: action.page };
        default:
            return initialState;
    }
}
