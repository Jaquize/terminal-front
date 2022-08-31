import React from "react";
import styled from "styled-components";


const StyledTableRow = styled.tr`

    transition : box-shadow 1s;
    text-align : center;

    &:hover {
        box-shadow: 5px 5px 10px black;
    }
  
`

function TableRow(props){

    return(<StyledTableRow onClick={props.onClick}>{props.children}</StyledTableRow>)
}

export {TableRow}