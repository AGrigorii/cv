import React from 'react';

import { Language, Languages, Page, Pages, actionTypes } from '../../storage/reducer';
import { getText } from '../../storage/text-provider';
import { HeaderContainerProps } from './header-container';
import { LangIcon } from './language-switcher';

type NavigationMenuProps = HeaderContainerProps;

export class NavigationMenu extends React.Component<NavigationMenuProps> {
    constructor(props: NavigationMenuProps) {
        super(props);
        this.changeLanguage = this.changeLanguage.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    changeLanguage(currentLanguage: Language) {
        const { dispatch } = this.props;
        return () => {
            dispatch({
                type: actionTypes.SET_LANGUAGE,
                language: currentLanguage === Languages.en ? Languages.ru : Languages.en
            });
        };
    }

    changePage(navigateTo: Page) {
        const { dispatch } = this.props;
        return () => {
            dispatch({
                type: actionTypes.NAVIGATE_TO_PAGE,
                page: navigateTo
            });
        };
    }

    render() {
        const { language } = this.props;
        return (
            <ul className="navigation-menu">
                <li className="navigation-menu-item" onClick={this.changePage(Pages.main)}>
                    {getText(language, 'myName')}
                </li>
                <li className="empty-space" />
                <li className="navigation-menu-item" onClick={this.changePage(Pages.career)}>
                    {getText(language, 'careerLink')}
                </li>
                <li className="navigation-menu-item" onClick={this.changePage(Pages.cv)}>
                    {getText(language, 'cvLink')}
                </li>
                <li className="navigation-menu-item" onClick={this.changePage(Pages.skills)}>
                    {getText(language, 'skillsLink')}
                </li>
                <li className="navigation-menu-item" onClick={this.changePage(Pages.contacts)}>
                    {getText(language, 'contactLink')}
                </li>
                <li>{LangIcon(language, this.changeLanguage(language))}</li>
            </ul>
        );
    }
}
