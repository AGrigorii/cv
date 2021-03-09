import { Language, Page } from '../../types';
import { ActionTypes } from './action-types';

export function changeLanguage(language: Language) {
    return {
        type: ActionTypes.SET_LANGUAGE,
        language
    } as const;
}

export function changePage(page: Page) {
    return {
        type: ActionTypes.NAVIGATE_TO_PAGE,
        page
    } as const;
}
