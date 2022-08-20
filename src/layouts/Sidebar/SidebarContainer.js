import styled from "styled-components"
import React, { useState } from "react"
import {SidebarToggle} from './SidebarToggle'
import { SidebarNav } from "./SIdebarNav"

const StyledSidebarC= styled.div`   
    flex-basis : ${props => props.isOpen? '250px;' : '50px;' }
    margin : 0;
    padding: 0;
    left : 0;
    height : 100vh;
    background-color : #fff;
    box-shadow : 0 0.125rem 9.375rem rgb(90 97 105 / 10%), 0 0.25rem 0.5rem rgb(90 97 105 / 12%), 0 0.9375rem 1.375rem rgb(90 97 105 / 10%), 0 0.4375rem 2.1875rem rgb(165 182 201 / 10%);
    font-size : 0.8rem;
    z-index : 1000;
`

function SidebarContainer(props){

    const [isOpen,setIsOpen] = useState(true)

    const toggleHandler = () => {setIsOpen(!isOpen)}

    return(
        <StyledSidebarC isOpen={isOpen}>
            <SidebarToggle toggleHandler={toggleHandler}/>
            {isOpen &&<SidebarNav/>}
            {props.children}
        </StyledSidebarC>
    )
}

export {SidebarContainer}