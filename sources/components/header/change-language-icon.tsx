import { AccessibleLanguages, Lang } from '../../storage/reducer';
import React from 'react';
import EnglandIcon from '../../media/england-flag.svg';
import RussiaIcon from '../../media/russian-flag.svg';

export function LangIcon(lang: AccessibleLanguages, onChange: any) {
    return (
        <div className="lang-icon" onClick={onChange}>
            {lang === Lang.ru ? <EnglandIcon /> : <RussiaIcon />}
        </div>
    );
}
