import './footer.scss';

import React from 'react';

import GithubSvg from '../../media/links/github.svg';
import HackerrankSvg from '../../media/links/hackerrank.svg';
import LinkedInSvg from '../../media/links/linkedin.svg';
import StackoverflowSvg from '../../media/links/stackoverflow.svg';
import TelegramSvg from '../../media/links/telegram.svg';
import VkSvg from '../../media/links/vk.svg';
import bemFactory from '../../utils/bem-factory';
import { IconLink } from '../my-components/icon-link/icon-link';

const footerBem = bemFactory('footer');

function Footer() {
    return (
        <div className={footerBem.block()}>
            <div className={footerBem.element('prefix')} />
            <div className={footerBem.element('links')}>
                <IconLink
                    title={'Source code of this page'}
                    href={'https://github.com/AGrigorii/cv'}
                    svgIcon={<GithubSvg />}
                />
                <IconLink
                    title={'Me in LinkedIn'}
                    href={'https://www.linkedin.com/in/grigorii-akhremenko/'}
                    svgIcon={<LinkedInSvg />}
                />
                <IconLink title={'Me in Telegram'} href={'https://t.me/agrigorii'} svgIcon={<TelegramSvg />} />
                <IconLink title={'Me in Vkontakte'} href={'https://vk.com/pauleta'} svgIcon={<VkSvg />} />
                <IconLink
                    title={'Me in Hackerrank'}
                    href={'https://www.hackerrank.com/_AGrigorii_'}
                    svgIcon={<HackerrankSvg />}
                />
                <IconLink
                    title={'Me in StackOverflow'}
                    href={'https://stackoverflow.com/users/12349211/agrigorii'}
                    svgIcon={<StackoverflowSvg />}
                />
            </div>

            <span className={footerBem.element('copyright-block')}>
                &copy; Akhremenko Grigorii, 2020-{`${new Date().getFullYear()}`}
            </span>
        </div>
    );
}

export default React.memo(Footer);
