import React from "react";
import styled from "styled-components";

const StyledPaper= styled.div`
    display : flex;
    flex-direction : column;
    background-color : #fff;
    border : none;
    border-radius : 0.625rem;
    box-shadow: 0 2px 0 rgb(90 97 105 / 11%), 0 4px 8px rgb(90 97 105 / 12%), 0 10px 10px rgb(90 97 105 / 6%), 0 7px 70px rgb(90 97 105 / 10%);
    width : 100%;
    height : 100%; 
`

function Paper(props){

    return(
        <StyledPaper>
            {props.children}
        </StyledPaper>
    )
}

export {Paper}