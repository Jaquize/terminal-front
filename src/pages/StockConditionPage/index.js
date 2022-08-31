import React, { useEffect, useState } from "react";

import { Row } from "../../layouts/GridLayout/Row";
import { Col } from "../../layouts/GridLayout/Col";
import { Grid } from "../../layouts/GridLayout/Grid";
import { Paper } from "../../components/Paper/Paper";
import { SelectBar } from "../../layouts/SelectBar/SelectBar";
import StockInfoPage from "../StockInfoPage";
import ThemeInfoPage from "../ThemeInfoPage/";

import styled from "styled-components";
import { StockCondition } from "./components/StockCondition";
import { useRouter } from "next/router";

const StyledContainer = styled.div`
    width : 100%;
    height : calc(100vh - 5.5rem);
    margin : 1.25rem;
`

function StockConditionPage(props) {

    const [selectedItem, setSelectedItem] = useState('stock')
    const [tableItem, setTableItem] = useState("삼성전자")

    const rowClickEventHandler = (stockName) => {

        if (tableItem != stockName) {
            setTableItem(stockName)
        }
    } 

    const selectEventHandler = (item) => {
        setSelectedItem(item)
    } 

    return (
        <StyledContainer>
            <Grid>
                <Row>
                    <Col col={6}>
                        <Paper>
                            <StockCondition onClickHandler={rowClickEventHandler}/>
                        </Paper>
                    </Col>
                    <Col col={6}>
                        <Paper>
                            <div style={{ 'height': '100%', 'overflowY': 'auto', 'margin': '1rem 0'}}>
                                <SelectBar items={['stock', 'theme']} selectedItem={selectedItem} onClick={selectEventHandler}></SelectBar>
                                {selectedItem == 'stock' ? <StockInfoPage name={tableItem} /> : <ThemeInfoPage name={tableItem} />}
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        </StyledContainer>
    )
}

export default StockConditionPage