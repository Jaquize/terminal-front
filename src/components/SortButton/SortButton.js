import React, { useState } from "react";
import styled from "styled-components"


const StyledButton = styled.button`
`

function SortButton(props){

    const [isAscending,setIsAscending] = useState(false)

    const onClickHandler = (e) => {

        const compareFunc = isAscending ? (o,t) => { if(o[props.field] >= t[props.field]){return 1} return -1 } : (o,t) => { if(o[props.field] <= t[props.field]){return 1} return -1} 

        props.onClick(compareFunc)
        setIsAscending(!isAscending)
        
        e.stopPropagation()
    }

    return (
        <StyledButton onClick={onClickHandler}>
            {props.children}
        </StyledButton>
    )
}

export {SortButton}
