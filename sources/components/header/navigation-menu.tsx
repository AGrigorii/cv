import React from 'react';
import { AccessibleLanguages, actions, Lang } from '../../storage/reducer';
import { LangIcon } from './change-language-icon';
import { getText } from '../../storage/text-provider';

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
                <li className="navigation-menu-item">{getText(this.props.lang, 'myName')}</li>
                <li className="empty-space" />
                <li className="navigation-menu-item">
                    <span>{getText(this.props.lang, 'careerLink')}</span>
                </li>
                <li className="navigation-menu-item">{getText(this.props.lang, 'cvLink')}</li>
                <li className="navigation-menu-item">{getText(this.props.lang, 'skillsLink')}</li>
                <li className="navigation-menu-item">{getText(this.props.lang, 'contactLink')}</li>
                <li>{LangIcon(this.props.lang, this.changeLanguage(this.props.lang))}</li>
            </ul>
        );
    }
}
