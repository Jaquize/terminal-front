import React, { useRef, useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.span`
    border : solid 1px black;
    margin-left : 10px;
`
function IntItem(props){

    const inputRef = useRef(null)

    return(
        <StyledContainer>
            <span>{props.name}</span>
            <input onChange={() => {props.setField(inputRef.current.value)}} ref={inputRef} value={props.field}/>
        </StyledContainer>
    )
}

export {IntItem}