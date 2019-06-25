import React from 'react';
import styled from 'styled-components';

// Components
import FooterCols from './FooterCols';

// Styles
const Wrapper  = styled.footer `
    background-color: black;
    padding-top: 1rem;
    border-bottom: 3px solid #e50914
    color: #fff
`;

const Container = styled.div `
    max-width: 70%;
    margin: auto;
    overflow: hidden;
    padding: 15px
`;

const Desc = styled.p `
    margin-top: 10px; 
    color: #e50914
`;

const Footer = () => (
    <Wrapper>
        <Container>
            <Desc>Questions? call 1-889-877-8748</Desc>
            <FooterCols />
        </Container>
    </Wrapper>
);

export default Footer;