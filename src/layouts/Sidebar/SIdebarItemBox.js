import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledList } from '../../components/List/ListGroup'
import { SidebarNavItemLast, SidebarNavItemMain, SidebarNavItemMiddle } from './SIdebarNavItem'

const StyledNav = styled(StyledList)`
    margin-top : ${props => props.isMargin ? '15px' : '0'};
    list-style : ${props => props.isStyle ? 'lower-roman' : 'none'};
    margin-left : 10px;
 
`
const StyledArrowButton = styled.button`

    position : relative;    
    border : none;
    background-color : none;

    ::after {
    position: absolute;
    left: 0; 
    top: 0; 
    content: '';
    width: 0.3rem;
    height: 0.3rem; 
    border-top: 2px solid #000; 
    border-right: 2px solid #000; 
    transform: ${props => props.isOpen ? 'rotate(315deg)'  : 'rotate(135deg)'}; 
}

`

function SidebarItemBox({ data }) {

    const [isOpen, setIsOpen] = useState(false)

    const makeSubItem = () => {
        return (
            data.sub && data.sub.map((val, key) => (
                <StyledNav isMargin key={val.title}>
                    <SidebarNavItemMiddle >
                        <span>{val.title}</span>
                        <StyledNav isMargin isStyle>
                            {val.sub && val.sub.map((val, key) => (
                                <SidebarNavItemLast key={val.title} >
                                    <Link href={val.url}>
                                        <span>{val.title}</span>
                                    </Link>
                                </SidebarNavItemLast>
                            ))}
                        </StyledNav>
                    </SidebarNavItemMiddle>
                </StyledNav>
            ))
        )
    }

    const linkMain = () => {
        if (data.path) {
            return (<Link href={data.path}><div>{data.title}</div></Link>)
        }
        else {
            return(<div style= {{'display' : 'flex', 'justify-content' : 'space-between' }} onClick={(e) => {console.log(isOpen); setIsOpen(!isOpen) }}><span>{data.title}</span><StyledArrowButton isOpen={isOpen}/></div>)
        }
    }

    return (
        <SidebarNavItemMain key={data.title}>
            {linkMain()}
            {
                isOpen && makeSubItem()
            }
        </SidebarNavItemMain>
    )
}


export { SidebarItemBox }