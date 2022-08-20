import React from "react";
import styled from "styled-components";


const colorSet = {
    'red' : '#db4242',
    'blue' : '#186bde',
}

const StyledButton = styled.button`
    margin-left : 5px;
    padding : 0.3rem 0.5rem;
    border-radius : 15px;
    background-color : ${props => colorSet[props.color]};
`

function ThemeButton(props){

    return(
        <StyledButton color={props.color}>
            {props.children}
        </StyledButton>
    )
}

export {ThemeButton}