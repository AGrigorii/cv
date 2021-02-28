import './dropdown.scss';

import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import bemFactory from '../../../utils/bem-factory';
import { DropdownMenu, DropdownMenuItem } from './dropdown-menu/dropdown-menu';
import { SelectedItem } from './selected-item/selected-item';

type DropdownState = {
    open: boolean;
    selectedIndex: number;
};

type DropdownProps = {
    items: DropdownMenuItem[];
    handleItemChange: (code: string) => void;
    initiallySelectedItemIndex?: number;
};

const bemSwitcher = bemFactory('switcher');

export default class Dropdown extends React.Component<DropdownProps, DropdownState> {
    constructor(props: DropdownProps) {
        super(props);
        const { initiallySelectedItemIndex } = props;
        this.state = {
            open: false,
            selectedIndex: initiallySelectedItemIndex || 0
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
            this.props.handleItemChange(items[index].code);
            this.setState({ selectedIndex: index, open: false });
        };
    };

    render() {
        const { items } = this.props;
        const { open } = this.state;

        return (
            <OutsideClickHandler onOutsideClick={this.closeMenu}>
                <div className={bemSwitcher.block()}>
                    <SelectedItem
                        selectedIcon={this.getSelectedIcon()}
                        onMenuToggle={this.openCloseMenu}
                        isOpen={open}
                    />
                    <DropdownMenu items={items} onSelectItem={this.selectItem} isOpen={open} />
                </div>
            </OutsideClickHandler>
        );
    }
}
