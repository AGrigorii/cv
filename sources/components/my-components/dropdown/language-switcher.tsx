import './language-switcher.scss';

import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import RightArrow from '../../../media/right-arrow.svg';
import { Language } from '../../../storage/reducer';

type DropdownState = {
    open: boolean;
    selectedIndex: number;
};

type DropdownProps = {
    items: Array<{ code: Language; icon: JSX.Element }>;
    changeLanguage: (code: Language) => void;
};

function MenuItem(elem: { code: string; icon: JSX.Element; onSelect: any }) {
    return (
        <div className="switcher-menu-item" onClick={elem.onSelect}>
            <span className="switcher-menu-item__code">{elem.code}</span>
            <div className="switcher-menu-item__icon">{elem.icon}</div>
        </div>
    );
}

export default class LanguageSwitcher extends React.Component<DropdownProps, DropdownState> {
    constructor(props: DropdownProps) {
        super(props);

        this.state = {
            open: false,
            selectedIndex: 0
        };
    }

    getSelectedIcon = () => {
        const { items } = this.props;
        const { selectedIndex } = this.state;

        return items[selectedIndex].icon;
    };

    closeMenu = () => {
        this.setState({ open: false });
    };

    openCloseMenu = () => {
        const { open } = this.state;
        this.setState({ open: !open });
    };

    selectItem = (index: number) => {
        const { items } = this.props;
        return () => {
            this.props.changeLanguage(items[index].code);
            this.setState({ selectedIndex: index, open: false });
        };
    };

    render() {
        return (
            <OutsideClickHandler onOutsideClick={this.closeMenu}>
                <div className="switcher">
                    <div className={'switcher__selected'} onClick={this.openCloseMenu}>
                        <RightArrow className={`switcher__selected-arrow ${this.state.open ? 'down' : 'right'}`} />
                        <div className="switcher__selected-icon">{this.getSelectedIcon()}</div>
                    </div>
                    {this.state.open && (
                        <div className="switcher__switcher-menu">
                            {this.props.items.map((x, index) => (
                                <MenuItem {...x} onSelect={this.selectItem(index)} key={x.code} />
                            ))}
                        </div>
                    )}
                </div>
            </OutsideClickHandler>
        );
    }
}
