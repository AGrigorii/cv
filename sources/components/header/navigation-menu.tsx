import React from 'react';
import { AccessibleLanguages, actions, Lang } from '../../storage/reducer';
import { LangIcon } from './change-language-icon';

export class NavigationMenu extends React.Component<any> {
    constructor(props: any) {
        super(props);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(currentLanguage: AccessibleLanguages) {
        const { dispatch } = this.props;
        return () => {
            dispatch({ type: actions.SET_LANGUAGE, lang: currentLanguage === Lang.en ? Lang.ru : Lang.en });
        };
    }

    render() {
        return (
            <ul className="navigation-menu">
                <li className="navigation-menu-item home-link">Akhremenko Grigorii</li>
                <li className="navigation-menu-item">Career</li>
                <li className="navigation-menu-item">Cv</li>
                <li className="navigation-menu-item">Skills</li>
                <li className="navigation-menu-item">Contacts</li>
                <li className="navigation-menu-item">
                    {LangIcon(this.props.lang, this.changeLanguage(this.props.lang))}
                </li>
            </ul>
        );
    }
}
