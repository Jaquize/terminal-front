import React from "react";
import styled from "styled-components";


const StyledList = styled.ul`
    margin : 0px;
    padding: 0px;
    width:100%
`

function ListGroup(props){

    return(
        <StyledList>{props.children}</StyledList>
    )

}

export {StyledList,ListGroup}