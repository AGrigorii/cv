import React from 'react';

import EnglandIcon from '../../media/england-flag.svg';
import RussiaIcon from '../../media/russian-flag.svg';
import { Language, Languages } from '../../storage/reducer';

export function LangIcon(lang: Language, onChange: any) {
    const switcherOffClassName = 'hover-switcher--off';
    const switcherOnClassName = 'hover-switcher--on';

    const toShowWithoutHover =
        lang === Languages.ru ? (
            <RussiaIcon className={switcherOffClassName} />
        ) : (
            <EnglandIcon className={switcherOffClassName} />
        );

    const toShowOnHover =
        lang !== Languages.ru ? (
            <RussiaIcon className={switcherOnClassName} onClick={onChange} />
        ) : (
            <EnglandIcon className={switcherOnClassName} onClick={onChange} />
        );

    return (
        lang && (
            <span className="hover-switcher lang-icon">
                {toShowWithoutHover}
                {toShowOnHover}
            </span>
        )
    );
}
