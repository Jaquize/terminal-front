import React from "react";
import styled from "styled-components";

const StyledNameBar = styled.div`
    margin-bottom : 1.5rem;
    font-size : 1.5rem;
    font-weight : bold;
    text-align : center;
    text-decoration : underline;
    text-underline-position:under;
`

function NameBar(props){

    return(
        <StyledNameBar>{props.children}</StyledNameBar>
    )
}

export {NameBar}