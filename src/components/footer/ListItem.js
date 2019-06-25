import React from 'react';
import styled from 'styled-components';

// Styles
const Wrapper = styled.li `
    line-height: 1.9
`;

const Link = styled.a ``;

const ListItem = ({title}) => (
    <Wrapper>
        <Link href="#">
           {title}
        </Link>
    </Wrapper>
);

export default ListItem;