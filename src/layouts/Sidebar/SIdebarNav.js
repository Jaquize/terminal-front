import React from "react";
import styled from "styled-components";
import { StyledList } from "../../components/List/ListGroup";
import { PATH } from "../../data/Path"
import { SidebarItemBox } from "./SIdebarItemBox";

const StyledNav = styled(StyledList)`
    margin-top : ${props => props.isMargin ? '15px' : '0'}
`

function SidebarNav(props) {
   

    return (
        <StyledNav>
            {
                PATH.map((val, idx) => (
                    <SidebarItemBox key={val.title} data={val}/>))
            }
     
        </StyledNav>
    )
}

export { SidebarNav }
