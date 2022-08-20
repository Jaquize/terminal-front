import React from "react";
import styled from "styled-components";


const StyledTableBody = styled.tbody`
`

function TableBody(props){
    return(<StyledTableBody>{props.children}</StyledTableBody>)
}

export {TableBody}