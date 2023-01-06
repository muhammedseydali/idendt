import React from 'react';
import styled from 'styled-components'
import Footer from '../general/Footer';
import Header from '../general/Header';
import BlogFaq from './landingPage/BlogFaq';
import Contact from './landingPage/Contact';
import DrivesUs from './landingPage/DrivesUs';
import HeroSection from './landingPage/HeroSection';
import OurCompany from './landingPage/OurCompany';
import Services from './landingPage/Services';
import Team from './landingPage/Team';

function HomePage() {
    return (
        <MainContainer>
            <Header />
            <HeroSection />
            <OurCompany />
            <DrivesUs />
            <Services />
            <Team />
            <BlogFaq />
            <Contact />
            <Footer />
        </MainContainer>
    )
}

export default HomePage;

const MainContainer = styled.div `
    /* height: 100vh; */
`;