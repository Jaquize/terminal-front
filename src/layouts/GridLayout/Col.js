import React from "react";
import styled from "styled-components";
import clsx from 'clsx'
import { createProps } from "./utils/createProps";

const StyledCol = styled.div`
  
 `

 const option = {
    col : 'col',
    offset : 'col-offset',
}

 function Col(props){

    const _className = Object.keys(props).filter(key => option[key]).map(key => option[key] + '-' + props[key])

    return (
        <StyledCol className={clsx(props.className,_className)} props={createProps(props,option)}>
            {props.children}
        </StyledCol>
    )
 }

 export {Col}