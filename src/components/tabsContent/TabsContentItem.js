import React from 'react';
import styled from 'styled-components';
import labtop from '../../img/tab-content-1.png';

// Components
import Button from '../ui/Button';

// Styles
const Wrapper = styled.div `
    width: 100%;
    display: flex;`;
    
const Left = styled.div `flex: 1`;

const Desc = styled.p `
    line-height: 1.2; 
    font-size: 1.5rem;
    color: grey
`;

const Right = styled.div `width: 40%`;

const Img = styled.img ``;

const styles = {
    fontSize: '2rem',
    padding: '7px 15px',
    backgroundColor: 'black',
    color: '#e50914',
    amrginTop: '1em',
    textTransform: 'uppercase'
}

const TabContentItem = () => (
    <Wrapper>
        <Left>
            <Desc>
                If you decide Netflix isn't for you - no problem. No commitment. cancel online anytime.
            </Desc>
            <Button
              title='Watch free for free 30 days' 
              addStyles={styles}
            />
        </Left>
            
        <Right>
            <Img src={labtop} alt='labtop' title='labtop' />
        </Right>
    </Wrapper>
);

export default TabContentItem;