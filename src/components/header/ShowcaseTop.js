import React from 'react';
import styled from 'styled-components';

// components
import logo from '../../img/logo.png';
import Button from '../ui/Button';

// Styles
const Wrapper = styled.div `
    position: relative;
    height: 90px;
    z-index: 2;
`;
const Img = styled.img `
    left: 50%;
    position: absolute;
    top: 50%;
    width: 170px;
    @media (max-width: 600px){
        left: 33%
    }
`;

const styles = {
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translate(-50%, -50%)'
}


const ShowcaseTop = () => (
    <Wrapper>
        <Img  src={logo} alt='netflix' title='netflix' />
        <Button title='Sign In' addStyles={styles}/>
    </Wrapper>
);

export default ShowcaseTop;