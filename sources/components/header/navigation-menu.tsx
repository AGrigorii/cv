import React from 'react';

import { Language, Languages, actionTypes } from '../../storage/reducer';
import { getText } from '../../storage/text-provider';
import { HeaderContainerProps } from './header-container';
import { LangIcon } from './language-switcher';

type NavigationMenuProps = HeaderContainerProps;

export class NavigationMenu extends React.Component<NavigationMenuProps> {
    constructor(props: NavigationMenuProps) {
        super(props);
        this.changeLanguage = this.changeLanguage.bind(this);
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

    render() {
        const { language } = this.props;
        return (
            <ul className="navigation-menu">
                <li className="navigation-menu-item">{getText(language, 'myName')}</li>
                <li className="empty-space" />
                <li className="navigation-menu-item">{getText(language, 'careerLink')}</li>
                <li className="navigation-menu-item">{getText(language, 'cvLink')}</li>
                <li className="navigation-menu-item">{getText(language, 'skillsLink')}</li>
                <li className="navigation-menu-item">{getText(language, 'contactLink')}</li>
                <li>{LangIcon(language, this.changeLanguage(language))}</li>
            </ul>
        );
    }
}
