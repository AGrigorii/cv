import React from 'react';

import GithubSvg from '../../media/links/github.svg';
import HackerrankSvg from '../../media/links/hackerrank.svg';
import LinkedInSvg from '../../media/links/linkedin.svg';
import StackoverflowSvg from '../../media/links/stackoverflow.svg';
import TelegramSvg from '../../media/links/telegram.svg';
import VkSvg from '../../media/links/vk.svg';

export class FooterContainer extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <ul className="footer-container">
                <li className="empty-space" />
                <li>
                    <a
                        href="https://github.com/AGrigorii/cv"
                        title="Source code of this page"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GithubSvg />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/grigorii-akhremenko/"
                        title="Me in LinkedIn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LinkedInSvg />
                    </a>
                </li>
                <li>
                    <a href="https://t.me/agrigorii" title="Me in Telegram" target="_blank" rel="noreferrer">
                        <TelegramSvg />
                    </a>
                </li>
                <li>
                    <a href="https://vk.com/pauleta" title="Me in Vkontakte" target="_blank" rel="noreferrer">
                        <VkSvg />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.hackerrank.com/_AGrigorii_"
                        title="Me in Hackerrank"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <HackerrankSvg />
                    </a>
                </li>
                <li>
                    <a
                        href="https://stackoverflow.com/users/12349211/agrigorii"
                        title="Me in Stackoverflow"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <StackoverflowSvg />
                    </a>
                </li>
                <li className="copyright-block">&copy; Akhremenko Grigorii, 2020 </li>
            </ul>
        );
    }
}
