import React from "react";
import styled from "styled-components";


const StyledButton = styled.button`
    display:inline-flex;
    background-color:transparent;
    outline:0px;
    border:0px;
    text-align:center;
`
const StyledSVG = styled.svg`
`
const StyledSpan = styled.span`
`
function Button(props){

    return(
        <StyledButton onClick={props.onClick}>
            {props.href ? <StyledSVG href={props.href}></StyledSVG> : ''}
            <StyledSpan>{props.children}</StyledSpan>
        </StyledButton>
    )

}

export {Button}