import React from 'react';

import EnglandIcon from '../../media/england-flag.svg';
import RussianIcon from '../../media/russian-flag.svg';
import { Language, Languages, Page, Pages, actionTypes } from '../../storage/reducer';
import { getText } from '../../storage/text-provider';
import Dropdown from '../my-components/dropdown/dropdown';
import { HeaderContainerProps } from './header-container';

type NavigationMenuProps = HeaderContainerProps;

export class NavigationMenu extends React.Component<NavigationMenuProps> {
    changeLanguage = (code: string) => {
        const { dispatch } = this.props;

        dispatch({
            type: actionTypes.SET_LANGUAGE,
            language: code as Language
        });
    };

    changePage = (navigateTo: Page) => {
        const { dispatch } = this.props;
        return () => {
            dispatch({
                type: actionTypes.NAVIGATE_TO_PAGE,
                page: navigateTo
            });
        };
    };

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
                <li>
                    <Dropdown
                        items={[
                            { code: Languages.en, icon: <EnglandIcon /> },
                            { code: Languages.ru, icon: <RussianIcon /> }
                        ]}
                        handleItemChange={this.changeLanguage}
                        initiallySelectedItemIndex={0}
                    />
                </li>
            </ul>
        );
    }
}
