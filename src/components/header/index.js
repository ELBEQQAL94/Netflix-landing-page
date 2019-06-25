import React from 'react';
import styled from 'styled-components';
import background from '../../img/landing-page.jpg';

// Components 
import ShowcaseTop from './ShowcaseTop';
import ShowcaseContent from './ShowcaseContent';

// Styles
const HeaderWrapper = styled.header `
    width: 100%;
    height: 100vh;
    position: relative;
    background: url(${background}) no-repeat center center/cover;
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(0,0,0,.5);
        box-shadow: inset 120px 100px 250px black,
                    inset -120px -100px 250px black;
    }
`;

const Header = () => (
    <HeaderWrapper>
        <ShowcaseTop />
        <ShowcaseContent />
    </HeaderWrapper>
);

export default Header;