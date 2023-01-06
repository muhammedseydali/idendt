import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeroImage from '../../../assets/images/landingPage/Cover.png';
import Pattern from '../../../assets/images/landingPage/Pattern.png';

function HeroSection() {
  return (
    <MainContainer>
        <WrapperContainer>
            <HeroImageContainer>
                <img src={HeroImage} alt="Hero image" />
            </HeroImageContainer>
            <ContentContainer>
                <Title>
                    BRANDING & BEYOND
                </Title>
                <SubTitle>
                    Step by step, Brick by brick, We’ll help you build your brand
                </SubTitle>
                <IdentifyButton>
                    Get Identified
                </IdentifyButton>
            </ContentContainer>
        </WrapperContainer>
        <BottomImageContainer>
            <img src={Pattern} alt="Image" />
        </BottomImageContainer>
    </MainContainer>
  )
}

export default HeroSection;

const MainContainer = styled.div`
    /* height: 100vh; */
    /* height: calc(100vh - 100px); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
const WrapperContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
`;
const HeroImageContainer = styled.div`
    width: 45%;
    margin: 0 auto;
    img{
        width: 100%;
        display: block;
    }
`;
const ContentContainer = styled.div`
    margin: -100px 0 0;
`;
const BottomImageContainer = styled.div`
    position: relative;
    height: 350px;
    width: 100%;
    img {
        width: 100%;
        display: block;
        position: absolute;
        bottom: 0;
        z-index: -1;
    }
`;
const Title = styled.h3`
    font-size: 38px;
    margin-bottom: 15px;
    `;
const SubTitle = styled.h5`
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 25px;
`;
const IdentifyButton = styled.div`
    cursor: pointer;
    border-right: 2.5px solid #fff;
    border-bottom: 2.5px solid #fff;
    width: fit-content;
    padding: 8px 12px;
    font-size: 25px;
    margin: 0 auto;
    transition: all 0.3s ease-in-out;
    :hover{
        background-color: #fff;
        color: #000;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
    }
`;