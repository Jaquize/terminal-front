import React from "react";
import styled from 'styled-components'


const StyledContent = styled.div`
    line-height : 1.5rem;
`

function StockContent(props){
    return(
        <StyledContent>
            {props.children}
        </StyledContent>
    )
}

export {StockContent}