import React from "react";
import styled from "styled-components";
import clsx from 'clsx'
import { createProps } from "./utils/createProps";

const StyledGrid = styled.div`
  
 `

const option = { 
}

function Grid(props){

    return (
        <StyledGrid className={clsx(props.className,'container')} props={createProps(props,option)}>
            {props.children}
        </StyledGrid>
    )

}

export {Grid}