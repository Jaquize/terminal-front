import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { StyledList } from "../../components/List/ListGroup";
import { PATH } from "../../data/Path"
import { SidebarNavItem } from "./SIdebarNavItem";


const StyledNav = styled(StyledList)`
    margin-top : ${props => props.isMargin ? '10px' : '0'}
`


function SidebarNav(props) {

    // const makeNavList = (path) => (path.map((val,key) => 

    //         <SidebarNavItem key={val.title} position ={'upper'}>
    //             <NavLink to={val.url}><span>{val.title}</span></NavLink>
    //                 {
    //                     val.sub && val.sub.map((val,key) => (
    //                         <StyledNav isMargin key={val.title}>
    //                             <SidebarNavItem  position={'middle'}>
    //                                 <span>{val.title}</span>
    //                                 <StyledNav>
    //                                 {val.sub && val.sub.map((val,key)=>(
    //                                     <SidebarNavItem  key={val.title} position={'lower'}>
    //                                         <NavLink to={val.url}>
    //                                             <span>{val.title}</span>
    //                                         </NavLink>
    //                                     </SidebarNavItem>   
    //                                 ))}
    //                                 </StyledNav>
    //                             </SidebarNavItem>
    //                         </StyledNav>      
    //                         )) 
    //                 }                
    //         </SidebarNavItem>
    // ))

    return (
        <StyledNav>
            {
                PATH.map((val, idx) => (
                    <SidebarNavItem position={'upper'}>
                        <Link key={val.title} href={val.path}><a>{val.title}</a></Link>
                    </SidebarNavItem>
                ))
            }
        </StyledNav>
    )
}

export { SidebarNav }
