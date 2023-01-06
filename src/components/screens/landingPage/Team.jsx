import React from 'react';
import styled from 'styled-components';
import Gallery1 from '../../../assets/images/team/Shabeeb.png';
import Gallery2 from '../../../assets/images/team/Afeef.png';
import Gallery3 from '../../../assets/images/team/Amal.png';
import Gallery4 from '../../../assets/images/team/Jose.png';
import Gallery5 from '../../../assets/images/team/Sachin.png';
import Gallery6 from '../../../assets/images/team/Dilju.png';
import LinkedInLogo from '../../../assets/images/linkedin.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLinkedin } from "@fortawesome/free-solid-svg-icons";

function Team() {
    const teamData = [
        {
            "id" : 1,
            "image" : Gallery1,
            "title" : "Shabeeb P A",
            "linkedin" : "https://linkedin.com/idendt"
        },
        {
            "id" : 2,
            "image" : Gallery2,
            "title" : "Afeef Abbas",
            "linkedin" : "https://linkedin.com/idendt"
        },
        {
            "id" : 3,
            "image" : Gallery3,
            "title" : "Amal Sajan",
            "linkedin" : "https://linkedin.com/idendt"
        },
        {
            "id" : 4,
            "image" : Gallery4,
            "title" : "Jose Chacko",
            "linkedin" : "https://linkedin.com/idendt"
        },
        {
            "id" : 5,
            "image" : Gallery5,
            "title" : "Sachin Ajayan",
            "linkedin" : "https://linkedin.com/idendt"
        },
        {
            "id" : 6,
            "image" : Gallery6,
            "title" : "Dilju Sukumaran",
            "linkedin" : "https://linkedin.com"
        },
    ];
    return (
        <MainContainer>
            <WrapperContainer>
                <Title>OUR TEAM</Title>
                <ImageGallery>
                    {teamData.map((item) => (
                        <ImageContainer>
                            <img src={item.image} alt="Image" />
                            <BottomContent>
                                <ContentHeading>{item.title}</ContentHeading>
                                <ContentDescription href={item.linkedin} target="_blank" >
                                    {/* <FontAwesomeIcon icon={faLinkedin}/>    */}
                                    <img src={LinkedInLogo} alt="Linkedin Logo" />
                                </ContentDescription>
                            </BottomContent>
                        </ImageContainer>
                    ))}
                </ImageGallery>
            </WrapperContainer>
        </MainContainer>
    )
}

export default Team;

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
const ImageGallery = styled.div `
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    margin-bottom: 30px;
`;
const ImageContainer = styled.div `
    position: relative;
    img {
        width: 100%;
        display: block;
    }
`;
const BottomContent = styled.div `
    padding: 10px;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
`;
const ContentHeading = styled.h5`
    font-size: 22px;
    font-weight: 600;
    margin-right: 10px;
`;
const ContentDescription = styled.a`
    font-size: 20px;
    width: 20px;
    border-radius: 50%;
    overflow: hidden;
    img{
        display: block;
        width: 100%;
    }
`;
const DescriptionBox = styled.p`
    font-size: 20px;
`;