import React from 'react';
import styled from 'styled-components';
import { faDoorOpen} from '@fortawesome/free-solid-svg-icons';
import { faTabletAlt} from '@fortawesome/free-solid-svg-icons';
import { faTags} from '@fortawesome/free-solid-svg-icons';

// Components
import TabItem from './TabItem';

// Styles
const Wrapper = styled.section `
    background-color: black;
    padding-top: 1rem;
    border-bottom: 3px solid #e50914`;

const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 70%;
    margin: auto;
    overflow: hidden;
    padding: 15px
    `;

const Tabs = () => (
    <Wrapper>
        <Container>
          <TabItem title='Cancel Anytime.' icon={faDoorOpen} border={true}/>
          <TabItem title='Whatch Anywhere' icon={faTabletAlt}/>
          <TabItem title='Pick your price' icon={faTags}/>
        </Container>
    </Wrapper>
);

export default Tabs;