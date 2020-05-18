import { AccessibleLanguages, Lang } from '../../storage/reducer';
import React from 'react';
import EnglandIcon from '../../media/england-flag.svg';
import RussiaIcon from '../../media/russian-flag.svg';

export function LangIcon(lang: AccessibleLanguages, onChange: any) {
    const switcherOffClassName = 'hover-switcher--off';
    const switcherOnClassName = 'hover-switcher--on';

    const toShowWithoutHover =
        lang === Lang.ru ? (
            <RussiaIcon className={switcherOffClassName} />
        ) : (
            <EnglandIcon className={switcherOffClassName} />
        );

    const toShowOnHover =
        lang !== Lang.ru ? (
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
