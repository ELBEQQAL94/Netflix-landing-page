import React from 'react';
import styled from 'styled-components';

// Compoenets
import FooterItem from './FooterItem';

// Styles
const Wrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem
`;

const titles = [
    {
        title: 'FAQ'
    },
    {
        title: 'Investor Relations'
    },
    {
        title: 'Ways To Watch'
    },
    {
        title: 'Corporate Information'
    },
    {
        title: 'Netflix Originals'
    }
];

const FooterCols = () => (
    <Wrapper>
      <FooterItem titles={titles}/>
      <FooterItem titles={titles}/>
      <FooterItem titles={titles}/>
      <FooterItem titles={titles}/>
    </Wrapper>

);

export default FooterCols;