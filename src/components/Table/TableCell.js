import React from "react";
import styled from "styled-components";


const StyledTableCell = styled.td`
    border : 1px solid #dee2e6 ;
    border-right: 0px;
    border-left: 0px;
    padding : 1em 0.5em;
`

function TableCell(props){
    return(<StyledTableCell>{props.children}</StyledTableCell>)
}

export {TableCell}