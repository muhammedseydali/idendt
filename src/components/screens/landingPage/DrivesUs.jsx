import React from 'react';
import styled from 'styled-components';
import Dm2 from '../../../assets/images/landingPage/WhatDrivesUs.png';

function DrivesUs() {
    return (
        <MainContainer>
            <WrapperContainer>
                <Title>WHAT DRIVES US</Title>
                <ImageContainer>
                    <img src={Dm2} alt="Image" />
                </ImageContainer>
                <TagLine>“ SIMPLIFY MARKETING. GROW AS A BRAND. LEAD THE MARKET. ”</TagLine>
                <DescriptionBox>
                    Becoming a brand and being just a business is different. We believe in brands as
                    business drivers; powerful tools to help organisations unlock their potential. Great
                    brands can connect and inspire all who work for, know about, and engage with them.
                    At idenDT’s, it's the passion and love to create brands that are both brilliant and
                    beautiful that drives us ahead. We want brands to be beautiful, as in visually
                    impactful, and brilliant, as in having a compelling brand purpose, story, and global
                    acceptance. Our process of creation is multi-faceted. We believe in working together
                    in collaboration with our clients; we believe in asking many questions and openly
                    listening to feedback. We see the process of creation as a journey and the outcome
                    as purposeful, often surprising, and ultimately impactful.
                </DescriptionBox>
            </WrapperContainer>
        </MainContainer>
    )
}

export default DrivesUs;

const MainContainer = styled.div `
    /* height: calc(100vh - 220px); */
    padding-bottom: 80px;
`;
const WrapperContainer = styled.div `
    width: 80%;
    margin: 0 auto;
`;
const Title = styled.h3 `
    font-size: 32px;
    margin-bottom: 20px;
`;
const ImageContainer = styled.div `
    width: 50%;
    margin: 0 auto 20px;
    img {
        width: 100%;
        display: block;
    }
`;
const TagLine = styled.small`
    font-size: 28px;
    font-style: italic;
    display: block;
    text-align: center;
    margin-bottom: 25px;
`;
const DescriptionBox = styled.p`
    font-size: 20px;
`;