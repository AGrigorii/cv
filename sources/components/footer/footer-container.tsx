import React from 'react';
import LocationSvg from '../../media/location.svg';
import { getText } from '../../storage/text-provider';

export class FooterContainer extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <ul className="footer-container">
                <li className="current-location">
                    <LocationSvg />
                    <span>{getText(this.props.lang, 'currentLocation')}</span>
                </li>
                <li className="footer-divider" />
                <li className="current-status">
                    <LocationSvg />
                    <span>{getText(this.props.lang, 'currentWorkStatus')}</span>
                </li>
            </ul>
        );
    }
}
