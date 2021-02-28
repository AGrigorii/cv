import './entry.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../storage/reducer';
import ContentContainer from './content/content-container';
import { FooterContainer } from './footer/footer-container';
import { HeaderContainer } from './header/header-container';

export type AppProps = State & { dispatch: Dispatch };

class App extends React.Component<AppProps> {
    render() {
        return (
            <div className="app">
                <HeaderContainer {...this.props} />
                <ContentContainer {...this.props} />
                <FooterContainer {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state: State) {
    const { language, currentPage } = state;
    return { language, currentPage };
}

export default connect(mapStateToProps, null)(App);
