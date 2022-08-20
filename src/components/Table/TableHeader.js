import React from "react";
import styled from "styled-components";


const StyledTableHeader = styled.thead`
    position : sticky;
    top : 6rem;
    vertical-align : middle;
    background-color : #fff;

`

function TableHeader(props){
    return(
        <StyledTableHeader>
          {props.children}
        </StyledTableHeader>
    )
}

export {TableHeader}