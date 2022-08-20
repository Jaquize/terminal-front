import React from "react";
import styled from "styled-components";


const StyledListItem = styled.li`
    // display : flex;
    // align-items : center;
    padding : 1em 0.5em;
    background-color : transparent;
    border-bottom : 1px solid black;
    margin-bottom : 0.5rem;
`
function ListItem(props){

    return(<StyledListItem>{props.children}</StyledListItem>)
}

export {StyledListItem,ListItem}