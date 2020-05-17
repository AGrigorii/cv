import React from 'react';
import { State } from '../../storage/reducer';
import { NavigationMenu } from './navigation-menu';

export class HeaderContainer extends React.Component<State> {
    constructor(props: State) {
        super(props);
    }

    render() {
        return <NavigationMenu {...this.props} />;
    }
}
