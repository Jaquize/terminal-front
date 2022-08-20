import React, { useState } from 'react'
import styled from 'styled-components'


import { SelectItem, SelectedItem } from './SelectItem'

const StyledContainer = styled.div`
    padding : 1em 0.5em;
    margin-bottom : 1.5rem;
`

function SelectBar(props){

    return(
        <StyledContainer>
           {
               props.items.map((val,idx) => {

                return(
                   props.selectedItem == val || props.selectedItem == idx ? <SelectedItem key={idx} onClick={props.onClick}>{val}</SelectedItem> : <SelectItem key={idx}  onClick={props.onClick}>{val}</SelectItem>
               )})
           } 
        </StyledContainer>
    )
}

export {SelectBar}