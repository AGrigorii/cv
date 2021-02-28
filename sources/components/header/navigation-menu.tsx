import React, { useCallback, useMemo } from 'react';

import EnglandIcon from '../../media/england-flag.svg';
import RussianIcon from '../../media/russian-flag.svg';
import { Language, Languages, Page, Pages, actionTypes } from '../../storage/reducer';
import { getText } from '../../storage/text-provider';
import Dropdown from '../my-components/dropdown/dropdown';
import { HeaderContainerProps } from './header-container';

type NavigationMenuProps = HeaderContainerProps;

export function NavigationMenu(props: NavigationMenuProps) {
    const { dispatch, language } = props;
    const changeLanguage = useCallback(
        (code: string) => {
            dispatch({
                type: actionTypes.SET_LANGUAGE,
                language: code as Language
            });
            localStorage.setItem('lastSelectedLanguageCode', code);
        },
        [dispatch]
    );

    const changePage = useCallback(
        (navigateTo: Page) => {
            return () => {
                dispatch({
                    type: actionTypes.NAVIGATE_TO_PAGE,
                    page: navigateTo
                });
            };
        },
        [dispatch]
    );

    const languages = useMemo(
        () => [
            { code: Languages.en, icon: <EnglandIcon /> },
            { code: Languages.ru, icon: <RussianIcon /> }
        ],
        []
    );

    return (
        <ul className="navigation-menu">
            <li className="navigation-menu-item" onClick={changePage(Pages.main)}>
                {getText(language, 'myName')}
            </li>
            <li className="empty-space" />
            <li className="navigation-menu-item" onClick={changePage(Pages.career)}>
                {getText(language, 'careerLink')}
            </li>
            <li className="navigation-menu-item" onClick={changePage(Pages.cv)}>
                {getText(language, 'cvLink')}
            </li>
            <li className="navigation-menu-item" onClick={changePage(Pages.skills)}>
                {getText(language, 'skillsLink')}
            </li>
            <li className="navigation-menu-item" onClick={changePage(Pages.contacts)}>
                {getText(language, 'contactLink')}
            </li>
            <li>
                <Dropdown
                    items={languages}
                    handleItemChange={changeLanguage}
                    initiallySelectedItemIndex={languages.findIndex((x) => x.code === language)}
                />
            </li>
        </ul>
    );
}
