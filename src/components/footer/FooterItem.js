import React from 'react';
import styled from 'styled-components';

// Components
import ListItem from './ListItem';

const Wrapper = styled.ul ``;

const FooterItem = ({titles}) => (
    <Wrapper >
      {
          titles ? 
            titles.map((item,i) => (
                <ListItem key={i} title={item.title} />
            ))
            : null
      }
    </Wrapper>
);

export default FooterItem;