import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Styles 
const ButtonCustom = styled.button `
display: inline-block;
background-color: #e50914;
color: #fff;
padding: .4rem;
font-size: 1rem;
text-align: center;
border: none;
cursor: pointer;
margin-right: .5rem;
outline: none;
box-shadow: 0 1px 0 rgba(0,0,0,.45);
border-radius: 2px;
&:hover{
    opacity: .9
}`;

const Button = ({title, addStyles, showIcon}) => (
    <ButtonCustom style={addStyles}>
       {title}
       {
           showIcon ? <FontAwesomeIcon icon={faChevronRight} 
           pull="right" />
        : null
        }
    </ButtonCustom>
);

export default Button;