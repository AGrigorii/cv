import React from 'react';

import { AppProps } from '../app';
import { NavigationMenu } from './navigation-menu';

export type HeaderContainerProps = AppProps;

export class HeaderContainer extends React.Component<HeaderContainerProps> {
    constructor(props: HeaderContainerProps) {
        super(props);
    }

    render() {
        return <NavigationMenu {...this.props} />;
    }
}
