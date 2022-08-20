import React from "react";
import styled from 'styled-components';


const StyledListItem = styled.span`
    font-weight : bold;
`

function ThemeListItem(props){
    return(
        <StyledListItem>
            {props.children}
        </StyledListItem>
    )
}

export {ThemeListItem}