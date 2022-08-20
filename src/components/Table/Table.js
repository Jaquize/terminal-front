import React from "react";
import styled from "styled-components";


const StyledTable = styled.table`
    position : relative;
    width : 100%;
    background-color : white;
    
`

function Table(props){

    return(
        <StyledTable>{props.children}</StyledTable>
    )
}

export {Table}