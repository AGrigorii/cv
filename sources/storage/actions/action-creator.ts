import { Language, Page } from '../../types';
import { ActionTypes } from './action-types';

export function changeLanguageAction(language: Language) {
    return {
        type: ActionTypes.SET_LANGUAGE,
        language
    } as const;
}

export function changePageAction(page: Page) {
    return {
        type: ActionTypes.NAVIGATE_TO_PAGE,
        page
    } as const;
}
