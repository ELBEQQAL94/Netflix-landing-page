import React from 'react';
import styled from 'styled-components';


// Components
import TabsContentItem from './TabsContentItem';

// Styles
const Wrapper = styled.section `
    width: 100%;
    padding: 3rem 0;
    color: #fff
`;

const Container = styled.div `
    max-width: 70%;
    margin: auto;
    overflow: hidden;
    padding: 15px
`;

const TabsContent = () => (
    <Wrapper>
        <Container>
            <TabsContentItem />
        </Container>
    </Wrapper>
);

export default TabsContent;