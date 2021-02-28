import './dropdown-menu.scss';

import React from 'react';

import bemFactory from '../../../../utils/bem-factory';

const bemMenu = bemFactory('dropdown-menu');

export type DropdownMenuItem = {
    code: string;
    icon: JSX.Element;
};

function MenuItem(elem: DropdownMenuItem & { onSelect: () => void }) {
    return (
        <div className={bemMenu.element('menu-item')} onClick={elem.onSelect}>
            <span className={bemMenu.element('code')}>{elem.code}</span>
            <div className={bemMenu.element('icon')}>{elem.icon}</div>
        </div>
    );
}

export function DropdownMenu({
    onSelectItem,
    items,
    isOpen
}: {
    items: DropdownMenuItem[];
    onSelectItem: (index: number) => () => void;
    isOpen: boolean;
}) {
    return (
        <div className={isOpen ? bemMenu.block() : bemMenu.block('hidden')}>
            {items.map((x, index) => (
                <MenuItem {...x} onSelect={onSelectItem(index)} key={x.code} />
            ))}
        </div>
    );
}
