import React from 'react';
import styled from 'styled-components';

// Components
import Button from '../ui/Button';

// Styles
const Wrapper = styled.div `
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
    margin-top: 9rem;
    z-index: 2;
`;

const Title = styled.h1 `
    text-transform: uppercase;
    font-size: 2rem;
`;

const Desc = styled.p `
    color: #fff;
    text-transform: uppercase;
    font-size: 1.9rem;
    line-height: 1.3;
    margin: 0 0 2rem;
    `;

const styles = {
    fontSize: '2rem',
    padding: '1.5rem 2.1rem',
    textTransform: 'uppercase'
}

const ShowcaseContent = () => (
    <Wrapper>
        <Title>
            See what's next
        </Title>
        <Desc>
            Watch anywhere. Cancel anytime.
        </Desc>
        <Button 
            title={'whatch free for 30 days'}
            showIcon={true}
            addStyles={styles}
        />
    </Wrapper>
);

export default ShowcaseContent;