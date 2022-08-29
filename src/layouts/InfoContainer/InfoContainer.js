import React from "react";
import styled from "styled-components";




const StyledInfoContainer = styled.div`
    margin : 3rem 10px;
`

const StyledHeader = styled.div`
    font-size : 1.5rem;
    margin : 1rem 0px;
`


function InfoContainer(props){

    return(
        <StyledInfoContainer>
            <StyledHeader>{props.title}</StyledHeader>
            {props.children}
        </StyledInfoContainer>
    )
}

export {InfoContainer}