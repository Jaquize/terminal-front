import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";


const StyledToggleContainer = styled.div`
    display:flex;
    height : 2.5rem;
    justify-content: flex-end;
`


function SidebarToggle(props){
 
    return(
    <StyledToggleContainer>
        <Button onClick={props.toggleHandler}>버튼</Button>
    </StyledToggleContainer>
    )
}

export {SidebarToggle}