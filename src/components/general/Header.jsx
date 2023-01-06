import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from "../../assets/images/logo-white.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [ toggle, setToggle ] = useState(false);

    return (
        <MainContainer>
            <WrapperContainer>
                <LeftBox>
                    <LogoContainer> 
                        <LogoImage src={Logo} alt="Image-Logo"/>
                    </LogoContainer>
                </LeftBox>
                <RightBox>
                    <MenuBar onClick={() => setToggle(true)}>
                        <FontAwesomeIcon icon={faBars} />
                    </MenuBar>
                    <MenuContent className={toggle ? "offset" : ""}>
                        <CloseContainer>
                            <FontAwesomeIcon icon={faXmark} onClick={() => setToggle(false)}/>
                        </CloseContainer>
                        <span>About</span>
                        <span>Services</span>
                        <span>Our Team</span>
                        <span>Contact</span>
                    </MenuContent>
                </RightBox>
            </WrapperContainer>
        </MainContainer>
    )
}

export default Header;

const MainContainer = styled.div `
`;
const WrapperContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0;
    width: 80%;
    margin: 0 auto;
`;
const LeftBox = styled.div `
    width: 30%;
`;
const LogoContainer = styled.div `
    width: 200px;
`;
const LogoImage = styled.img `
    width: 100%;
    display: block;
`;
const RightBox = styled.div `
    width: 60%;
    display: flex;
    justify-content: flex-end;

    span{
        margin-left: 15px;
    }
`;
const MenuContent = styled.div `
    background-color: #293239;
    padding: 65px 30px;
    position: fixed;
    top: 0;
    right: -400px;
    height: 100vh;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    transition: all 0.5s ease;
    z-index: 10;

    &.offset {
        right: 0;
        transition: all 0.5s ease;
    }

    span {
        margin: 10px 0 30px;
        font-size: 25px;
    }

    svg {
        font-size: 30px;
        margin-bottom: 30px;
    }
`;
const CloseContainer = styled.div`
    cursor: pointer;
    /* width: 100%;
    text-align: center; */
`;
const MenuBar = styled.div `
    cursor: pointer;
    svg{
        font-size: 30px;
    }
`;