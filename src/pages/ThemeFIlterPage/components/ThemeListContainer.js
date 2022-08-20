import { useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import { MANAGE } from "../../../query/allQuery";
import { ThemeButton } from "./Button/ThemeButton";
import { ThemeList, ThemeListStatic } from "./ThemeList";
import { ThemeListItem } from "./ThemeListItem";


const StyledList = styled.ul`
    overflow-y:auto;
`

function ThemeListContainer(props) {

    const { loading, error, data } = useQuery(MANAGE['matched_theme'])

    const makeList = () => {

        if (error) { return <li>Error!</li> }

        else if (loading) { return <li>Loading!</li> }

        else {
            return (
                <>
                    {data.matchedTheme.map((valF, idx) =>
                        <ThemeListStatic key={valF.main} theme={valF.main + ' - ' + valF.sub}>
                            {
                                valF.stockList.map((val, idx) => (
                                    <StyledList key={val}>
                                        <ThemeList stockName={val} sub={valF.sub}><ThemeListItem>{val}</ThemeListItem><ThemeListItem><ThemeButton color={'red'}>추가</ThemeButton><ThemeButton color={'blue'}>삭제</ThemeButton></ThemeListItem></ThemeList>
                                    </StyledList>
                                ))
                            }
                        </ThemeListStatic>)}</>
            )
        }
    }

    return (
        <StyledList>
          {makeList()}
        </StyledList>
    )
}



export { ThemeListContainer }