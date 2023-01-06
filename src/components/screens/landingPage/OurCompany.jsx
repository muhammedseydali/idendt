import React from 'react';
import styled from 'styled-components';
import OurCompanyImage from '../../../assets/images/landingPage/OurIdendtOne.png';

function OurCompany() {
    return (
        <MainContainer>
            <WrapperContainer>
                <LeftBoxContainer>
                    <Title>OUR IdenDT</Title>
                    <ContentContainer>
                        At idenDT, we help businesses grow and develop
                        by combining insightful strategic thinking with
                        imaginative design to create impact and desire.
                        Our magic recipe blends innovative strategy,
                        creative design, and cutting-edge technology to
                        make beautiful, brilliant brand experiences,
                        expanding the business’s future vision. 
                    </ContentContainer>
                    <ContentContainer>
                        Our family consists of a group of individuals who
                        are passionate about collaborating, sharing ideas,
                        and working as a team with the primary goal of
                        advancing accountability and quality. We know
                        that helping helps, and that is why our procedures
                        are productive and economical. To make the
                        process run more smoothly, we adjust costs to
                        your needs without sacrificing the quality of our
                        services.
                    </ContentContainer>
                </LeftBoxContainer>
                <RightBoxContainer>
                    <ImageContainer>
                        <CompanyImage src={OurCompanyImage} alt="Company Image" />
                    </ImageContainer>
                    <ContentBottom>
                        "YOUR BUSINESS IS <br />OUR BUSINESS."
                    </ContentBottom>
                </RightBoxContainer>
            </WrapperContainer>
        </MainContainer>
    )
}

export default OurCompany;

const MainContainer = styled.div `
    /* height: calc(100vh - 220px); */
    padding-bottom: 80px;
`;
const WrapperContainer = styled.div `
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;
const LeftBoxContainer = styled.div `
    width: 50%;
`;
const Title = styled.h3 `
    margin-bottom: 20px;
    font-size: 32px;
`;
const ContentContainer = styled.p `
    margin-bottom: 20px;
    font-size: 20px;
`;
const RightBoxContainer = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ImageContainer = styled.div`
    width: 50%;
`;
const CompanyImage = styled.img`
    display: block;
    width: 100%;
`;
const ContentBottom = styled.small`
    font-size: 28px;
    font-style: italic;
    margin-top: 10px;
`;