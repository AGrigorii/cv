import './styles-common/general.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { changeLanguage, changePage } from '../storage/actions/action-creator';
import { State } from '../storage/reducer';
import { Language, Page } from '../types';
import ContentContainer from './content/content-container';
import Footer from './footer/footer';
import { Header } from './header/header';

type AppProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

class App extends React.Component<AppProps> {
    changePageHandler = (page: Page) => {
        this.props.changePage(page);
    };

    changeLanguageHandler = (lang: Language) => {
        this.props.changeLanguage(lang);
    };

    render() {
        const { language, currentPage } = this.props;
        return (
            <>
                <Header
                    language={language}
                    changePageHandler={this.changePageHandler}
                    changeLanguageHandler={this.changeLanguageHandler}
                />
                <ContentContainer currentPage={currentPage} />
                <Footer />
            </>
        );
    }
}

function mapStateToProps(state: State) {
    const { language, currentPage } = state;
    return { language, currentPage };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ changePage, changeLanguage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
