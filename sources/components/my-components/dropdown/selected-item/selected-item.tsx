import './selected-item.scss';

import React from 'react';

import RightArrow from '../../../../media/right-arrow.svg';
import bemFactory from '../../../../utils/bem-factory';

const bemSelectedLanguage = bemFactory('selected-item');

export function SelectedItem({
    selectedIcon,
    onMenuToggle,
    isOpen
}: {
    selectedIcon: JSX.Element;
    onMenuToggle: () => void;
    isOpen: boolean;
}) {
    return (
        <div className={bemSelectedLanguage.block()} onClick={onMenuToggle}>
            <RightArrow className={bemSelectedLanguage.element('arrow', isOpen ? 'down' : 'right')} />
            <div className={bemSelectedLanguage.element('icon')}>{selectedIcon}</div>
        </div>
    );
}
