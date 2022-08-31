import React from "react";
import styled from "styled-components";
import { Table } from "../../../../components/Table/Table";
import { TableBody } from "../../../../components/Table/TableBody";
import { TableCell } from "../../../../components/Table/TableCell";
import { TableHeader } from "../../../../components/Table/TableHeader";
import { TableHeaderCell } from "../../../../components/Table/TableHeaderCell";
import { TableRow } from "../../../../components/Table/TableRow";


const StyledTable = styled.table`
`

function PortfolioTable(props){

    return(
        <>
        <div><button>추가</button></div>
        <Table>
            <TableHeader>
                <TableHeaderCell>가</TableHeaderCell>
                <TableHeaderCell>나</TableHeaderCell>
            </TableHeader>
            <TableBody>
                <TableRow><TableCell>가</TableCell><TableCell>가</TableCell></TableRow>
                <TableRow><TableCell>가</TableCell><TableCell>가</TableCell></TableRow>
                <TableRow><TableCell>가</TableCell><TableCell>가</TableCell></TableRow>
                <TableRow><TableCell>가</TableCell><TableCell>가</TableCell></TableRow>
                <TableRow><TableCell>가</TableCell><TableCell>가</TableCell></TableRow>
                <TableRow><TableCell>가</TableCell><TableCell>가</TableCell></TableRow>
                <TableRow><TableCell>가</TableCell><TableCell>가</TableCell></TableRow>
                <TableRow><TableCell>가</TableCell><TableCell>가</TableCell></TableRow>

            </TableBody>
        </Table>
        </>
    )
}

export {PortfolioTable}