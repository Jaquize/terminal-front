import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { StyledList } from "../../components/List/ListGroup";
import { PATH } from "../../data/ConditionList";
import { SidebarNavItem } from "./SIdebarNavItem";


const StyledNav = styled(StyledList)`
    margin-top : ${props => props.isMargin ? '10px' : '0'}
`


function SidebarNav(props) {
   
    const makeNavList = (path) => (path.map((val,key) => 
            
            <SidebarNavItem key={val.title} position ={'upper'}>
                <NavLink to={val.url}><span>{val.title}</span></NavLink>
                    {
                        val.sub && val.sub.map((val,key) => (
                            <StyledNav isMargin key={val.title}>
                                <SidebarNavItem  position={'middle'}>
                                    <span>{val.title}</span>
                                    <StyledNav>
                                    {val.sub && val.sub.map((val,key)=>(
                                        <SidebarNavItem  key={val.title} position={'lower'}>
                                            <NavLink to={val.url}>
                                                <span>{val.title}</span>
                                            </NavLink>
                                        </SidebarNavItem>   
                                    ))}
                                    </StyledNav>
                                </SidebarNavItem>
                            </StyledNav>      
                            )) 
                    }                
            </SidebarNavItem>
    ))

    return (
        <StyledNav>
            {makeNavList(PATH)}
        </StyledNav>
    )
}

export { SidebarNav }
