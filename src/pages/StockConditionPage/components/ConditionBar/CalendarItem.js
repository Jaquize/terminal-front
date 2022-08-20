import React, { useState } from "react";
import Calendar from 'react-calendar';
import styled from "styled-components";

const StyledContainer = styled.span`
    border : solid 1px black;
    margin-left : 10px;
`


function CalendarItem(props){

    const [toggle,setToggle] = useState(false)

    return(
        <StyledContainer>
        <span>{props.name}</span>
        <span onClick={() => {setToggle(!toggle)}} >{props.field.toLocaleDateString()}</span>
        {toggle ? <div style={{'zIndex':200,'position':'absolute'}}><Calendar onChange={props.setField} value={props.field}/></div> : ''}
        </StyledContainer>
    )
}

export {CalendarItem}