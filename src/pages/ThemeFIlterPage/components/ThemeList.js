import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import styled from "styled-components";
import { MANAGE } from "../../../query/allQuery";
import { StockContent } from "./StockContent";


const StyledList = styled.li`
    padding : 1.5rem 2rem;
    line
`

const StyledChildren = styled.div`
    display : flex;
    justify-content : space-between;
`

const StyledStaticList= styled.li`

`

const StyledMarkedVoca = styled.span`
    background-color : yellow;
`

const StyledStaticListDiv = styled.div`
    background-color : ${props => props.isOpen ? '#1f64c4' : 'white'};
    padding : 1.5rem 2rem;
`

function ThemeList(props){

    const [isOpen,setOpen] = useState(false)
    const [report,setReport] = useState("")
    const [getStockReport,{loading,error,data}] = useLazyQuery(MANAGE['stock_report'],{
        onCompleted : (d) => {setReport(d.tempThemeInfo.report)}
    })
    

    const onClickHandler = () => {

        if(!isOpen){
            getStockReport({
                variables : {
                    stockName : props.stockName
                }
            })
        }
     
        setOpen(!isOpen)
    }

    const markToTheme = () => {

        if (report != undefined){

            let themePos = report.search(props.sub)
            let firstIdx = report.lastIndexOf(".",themePos)
            let lastIdx = report.indexOf('.',themePos)

            return <>
            <span>{report.substring(firstIdx+1,themePos)}</span>
            <StyledMarkedVoca>{props.sub}</StyledMarkedVoca>
            <span>{report.substring(themePos + props.sub.length,lastIdx)}</span>
            </>
        }        
    }

    return(
        <StyledList>
            <StyledChildren onClick={onClickHandler}>{props.children}</StyledChildren>
            {isOpen && <StockContent>{markToTheme()}</StockContent>}
        </StyledList>
    )
}

function ThemeListStatic(props){

    const [isOpen,setOpen] = useState(false)

    const onClickHandler = () => {
        setOpen(!isOpen)
    }

    return(
        <StyledStaticList>
            <StyledStaticListDiv isOpen={isOpen} onClick={onClickHandler}>{props.theme}</StyledStaticListDiv>
            {isOpen && props.children}
        </StyledStaticList>

    )
}

export {ThemeList,ThemeListStatic}