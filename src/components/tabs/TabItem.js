import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
const Wrapper = styled.div `
    transition: all 1s linear
    &:hover{
        cursor: pointer;
        border-bottom: 5px solid rgb(42, 32, 32)
    }`;
const Desc = styled.p `
    font-size: 1.2rem;
    color: #fff;
    padding-top: 0.5rem;
`;

const styles= {
    borderBottom: '5px solid rgb(42, 32, 32)'
}

const TabItem = ({title, icon, border}) => (
    <Wrapper style={ border ? styles : null} >
       <FontAwesomeIcon icon={icon} size="lg" />
       <Desc>{title}</Desc>
    </Wrapper>  
);

export default TabItem;