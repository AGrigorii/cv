import './header.scss';

import React, { useCallback, useMemo } from 'react';

import { LOCAL_STORAGE_LANGUAGE_KEY } from '../../constants';
import EnglandIcon from '../../media/england-flag.svg';
import RussianIcon from '../../media/russian-flag.svg';
import { getText } from '../../storage/text-provider';
import { Language, Languages, Page, Pages } from '../../types';
import bemFactory from '../../utils/bem-factory';
import Dropdown from '../my-components/dropdown/dropdown';

type HeaderProps = {
    language: Language;
    changePageHandler: (page: Page) => void;
    changeLanguageHandler: (language: Language) => void;
};

const headerBem = bemFactory('header');
const menuBem = bemFactory('menu');

export function Header({ language, changePageHandler, changeLanguageHandler }: HeaderProps) {
    const changeLanguage = useCallback(
        (code: string) => {
            changeLanguageHandler(code as Language);
            localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, code);
        },
        [changeLanguageHandler]
    );

    const changePage = useCallback(
        (navigateTo: Page) => {
            return () => {
                changePageHandler(navigateTo);
            };
        },
        [changePageHandler]
    );

    const languages = useMemo(
        () => [
            { code: Languages.en, icon: <EnglandIcon /> },
            { code: Languages.ru, icon: <RussianIcon /> }
        ],
        []
    );

    const languageInitialIndex = useMemo(() => languages.findIndex((x) => x.code === language), [languages]);
    return (
        <div className={headerBem.block()}>
            <div />
            <div className={menuBem.block()}>
                <div className={menuBem.element('item')} onClick={changePage(Pages.main)}>
                    {getText(language, 'mainLink')}
                </div>
                <div className={menuBem.element('item')} onClick={changePage(Pages.career)}>
                    {getText(language, 'careerLink')}
                </div>
                <div className={menuBem.element('item')} onClick={changePage(Pages.skills)}>
                    {getText(language, 'skillsLink')}
                </div>
                <div className={menuBem.element('item')} onClick={changePage(Pages.contacts)}>
                    {getText(language, 'contactLink')}
                </div>
                <div className={menuBem.element('item')} onClick={changePage(Pages.cv)}>
                    {getText(language, 'cvLink')}
                </div>
            </div>
            <div className={headerBem.element('postfix')}>
                <Dropdown
                    items={languages}
                    handleItemChange={changeLanguage}
                    initiallySelectedItemIndex={languageInitialIndex}
                />
            </div>
        </div>
    );
}
