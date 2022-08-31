import React, { useEffect, useState } from "react";

import { Table } from "../../../components/Table/Table";
import { TableBody } from "../../../components/Table/TableBody";
import { TableCell } from "../../../components/Table/TableCell";
import { TableHeader } from "../../../components/Table/TableHeader";
import { TableHeaderCell } from "../../../components/Table/TableHeaderCell";
import { TableRow } from "../../../components/Table/TableRow";

import styled from "styled-components";
import { CONDITION } from "../../../query/allQuery";
import { useLazyQuery } from "@apollo/client";
import { SortButton } from "../../../components/SortButton/SortButton";
import { CONDITION_BOX_LIST } from "../../../data/ConditionBoxList";
import { useRouter } from "next/router";


const StyledContainer = styled.div`
    position:relative;
    height:100%;
    overflow:auto;
    margin:1rem 0;
`

const StyledTitle = styled.div`
    position:sticky;
    height:3rem;
    top:0px;
    background-color:white;
    z-index:1000;
    font-weight:bold;
    padding-left:20px;
`

function StockCondition(props) {

    const router = useRouter()

    const condition = router.query.condition == undefined ? 'volumeUp' : router.query.condition[0]
    
    const onClickEventHandler = props.onClickHandler

    const [tableList, setTableList] = useState(undefined)
    const [getConditionQuery, { loading, error, data }] = useLazyQuery(CONDITION[condition]
        , {
            onCompleted: (d) => { setTableList(d[condition]) }
        })

    useEffect(() => { getConditionQuery() }, [condition])

    const ConditionBox = CONDITION_BOX_LIST[condition]

    const conditionBoxOnClickHandler = (variables) => {
        getConditionQuery(variables)
    }

    const sortFun = (method) => {

        let sortList = [...tableList]

        sortList.sort(method)
        setTableList(sortList)

    }

    const createTableHeader = (datas) => {

        // if (datas == undefined || datas[condition] === undefined || datas[condition].length == 0) { return (<tr><td>No Data!</td></tr>) }

        if (datas == undefined || datas == 0) { return (<tr><td>No Data!</td></tr>) }

        else {

            let dataKey = Object.keys(datas[0])
            dataKey = dataKey.filter(val => val != '__typename')

            return (
                <tr>{
                    dataKey.map((valH, idxH) => (
                        <TableHeaderCell key={idxH}>{valH}<SortButton field={valH} onClick={sortFun}>a</SortButton></TableHeaderCell>
                    ))}
                </tr>)
        }
    }

    const createTableRow = (datas) => {

        // if (datas == undefined || datas[condition] === undefined || datas[condition].length == 0) { return (<tr><td>No Data!</td></tr>) }

        if (datas == undefined || datas == 0) { return (<tr><td>No Data!</td></tr>) }

        else {

            let dataKey = Object.keys(datas[0])
            dataKey = dataKey.filter(val => val != '__typename')

            return (
                datas.map((valR, idxR) =>
                (
                    <TableRow key={idxR} onClick={() => { onClickEventHandler(valR.stockName) }}>
                        {dataKey.map((valC, idxK) => (
                            <TableCell key={idxK}>{valR[valC]}</TableCell>
                        ))}
                    </TableRow>
                )
                )
            )
        }
    }

    return (
        <>
            <StyledTitle>{condition}</StyledTitle>
            <ConditionBox onClick={conditionBoxOnClickHandler}/>
            <Table>
                <TableHeader>
                    {createTableHeader(tableList)}                    
                </TableHeader>
                <TableBody>
                    {createTableRow(tableList)}
                </TableBody>
            </Table>
        </>
    )
}

export { StockCondition }

