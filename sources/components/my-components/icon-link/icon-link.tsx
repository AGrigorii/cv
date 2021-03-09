import './icon-link.scss';

import React from 'react';

import bemFactory from '../../../utils/bem-factory';

type IconLinkProps = {
    title: string;
    href: string;
    svgIcon: JSX.Element;
};
const iconLinkBem = bemFactory('icon-link');
export function IconLink({ title, href, svgIcon }: IconLinkProps) {
    return (
        <span className={iconLinkBem.block()}>
            <a className={iconLinkBem.element('image')} href={href} title={title} target="_blank" rel="noreferrer">
                {svgIcon}
            </a>
        </span>
    );
}
