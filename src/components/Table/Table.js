import React from "react";
import styled from "styled-components";


const StyledContainer = styled.div`
    height: 100%;
    overflow-y:auto;
`


const StyledTable = styled.table`
    position : relative;
    background-color : white;
    width : 100%;
`

function Table(props){

    return(
        <StyledContainer>
        <StyledTable>{props.children}</StyledTable>
        </StyledContainer>
    )
}

export {Table}