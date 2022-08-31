import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";


const StyledToggleContainer = styled.div`
    display:flex;
    height : 2.5rem;
    justify-content: flex-end;
`

const StyledArrowButton = styled.button`

    position : absolute;    
    border : none;
    margin-top : 0.5rem;
    margin-right : 0.5rem;

    ::after {
    position: absolute;
    left: 0; 
    top: 0; 
    content: '';
    width: 0.3rem;
    height: 0.3rem; 
    border-top: 2px solid #000; 
    border-right: 2px solid #000; 
    transform: ${props => props.isOpen ? 'rotate(225deg)' : 'rotate(45deg)'}; 
}

`

function SidebarToggle(props){
 
    return(
    <StyledToggleContainer>
        <StyledArrowButton isOpen={props.isOpen} onClick={props.toggleHandler}/>
    </StyledToggleContainer>
    )
}

export {SidebarToggle}