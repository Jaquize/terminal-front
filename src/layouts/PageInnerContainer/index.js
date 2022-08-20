import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    display : flex;
    

`

function PageInnerContainer(props){

    return(
        <StyledContainer>{props.children}</StyledContainer>
    )
}

export default PageInnerContainer

