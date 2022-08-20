import clsx from "clsx";
import React from "react";
import styled from "styled-components";

const StyledRow = styled.div`
    
`

function Row(props){
    return(<StyledRow className={clsx('row')}>
        {props.children}
    </StyledRow>)
}

export {Row}