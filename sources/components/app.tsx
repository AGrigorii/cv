import React from 'react';
import './entry.scss';
import { HeaderContainer } from './header/header-container';
import { ContentContainer } from './content/content-container';
import { FooterContainer } from './footer/footer-container';
import { connect } from 'react-redux';
import { State } from '../storage/reducer';

class App extends React.Component<State> {
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
    const { lang } = state;
    return { lang };
}

export default connect(mapStateToProps, null)(App);
