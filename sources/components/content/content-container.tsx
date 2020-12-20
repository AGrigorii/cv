import React from 'react';

import { Pages, State } from '../../storage/reducer';
import AboutMe from './pages/about-me';
import ContactMe from './pages/contact-me';
import Cv from './pages/cv';
import MyCareer from './pages/my-career';
import Skills from './pages/skills';

export default function ContentContainer({ currentPage }: Partial<State>) {
    return (
        <>
            {currentPage === Pages.main && <AboutMe />}
            {currentPage === Pages.career && <MyCareer />}
            {currentPage === Pages.cv && <Cv />}
            {currentPage === Pages.skills && <Skills />}
            {currentPage === Pages.contacts && <ContactMe />}
        </>
    );
}
