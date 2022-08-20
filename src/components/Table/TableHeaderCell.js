import React from "react";
import styled from "styled-components";


const StlyedHeaderCell = styled.th`
    padding : 1em 0.5em;
    font-weight : bold;
`

function TableHeaderCell(props){
    
    return(
        <StlyedHeaderCell>{props.children}</StlyedHeaderCell>
    )
}

export {TableHeaderCell}