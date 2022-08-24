import React from "react";
import { ListGroup } from "../../components/List/ListGroup";
import { ListItem } from "../../components/List/ListItem";
import { Tag } from "../../components/Tag/Tag";
import { Col } from "../../layouts/GridLayout/Col";
import { Grid } from "../../layouts/GridLayout/Grid";
import { Row } from "../../layouts/GridLayout/Row";
import { InfoContainer } from "../../layouts/InfoContainer/InfoContainer";
import { NameBar } from "./charts/components/NameBar";
import { ChartComponent } from "./charts/test";


function StockInfoPage(props) {

    return (
        <div style={{ 'width': '100%' }}>
            <Grid>
                <Row>
                    <Col col={12}><NameBar>{props.name}</NameBar></Col>
                </Row>
                <Row>
                    <Col col={12}>
                        <InfoContainer title={'차트'}>
                            <ChartComponent stockName={props.name}/>
                        </InfoContainer>
                    </Col>
                </Row>
                <Row><Col col={12}>
                    <InfoContainer title={'정보'}>
                        <ListGroup>
                            <ListItem><Tag tagKey={'종목명'} tagValue={'삼성전자'}></Tag></ListItem>
                            <ListItem><Tag tagKey={'주가'} tagValue={'3000'}></Tag></ListItem>
                            <ListItem><Tag tagKey={'거래량'} tagValue={3000}></Tag></ListItem>
                            <ListItem><Tag tagKey={'투자자'} tagValue={[{ key: '기관', value: 1000 }, { key: '외국인', value: 2000 }, { key: '개인', value: 3000 }]}></Tag></ListItem>
                            <ListItem><Tag tagKey={'유통주식'} tagValue={[{ key: '총', value: 3000 }, { key: '유통', value: 2000 }, { key: '비율', value: '66%' }]}></Tag></ListItem>
                            <ListItem><Tag tagKey={'신용'} tagValue={'10%'}></Tag></ListItem>
                            <ListItem><Tag tagKey={'조건'} tagValue={'volumeUp Box ClosedBox'}></Tag></ListItem>
                        </ListGroup>
                    </InfoContainer></Col></Row>
                <Row>
                    <Col col={12}>
                        <InfoContainer title={'테마'}>
                        <span style={{'display' : 'inline-block', 'margin' : '1rem'}}><Tag tagKey={'반도체'} tagValue={'3%'}></Tag></span>
                            <span style={{'display' : 'inline-block', 'margin' : '1rem'}}><Tag tagKey={'반도체'} tagValue={'3%'}></Tag></span>
                        </InfoContainer>
                    </Col>
                </Row>
                <Row>
                    <Col col={12}>
                        <InfoContainer title={'뉴스'}>
                             <ListGroup>
                                <ListItem>삼성전자 D램 매출 2개 분기 연속 하락…점유율은 43%로 세계 1위</ListItem>
                                <ListItem>삼성전자, 로블록스에 체험형 가상공간 '삼성 스페이스 타이쿤' 공개</ListItem>
                                <ListItem>삼성전자 D램 매출 2개 분기 연속 하락…점유율은 43%로 세계 1위</ListItem>
                                <ListItem>삼성전자, 로블록스에 체험형 가상공간 '삼성 스페이스 타이쿤' 공개</ListItem>
                                <ListItem>삼성전자, 로블록스에 체험형 가상공간 '삼성 스페이스 타이쿤' 공개</ListItem>
                            </ListGroup>
                        </InfoContainer>
                    </Col></Row>
            </Grid>
        </div>
    )
}

export default StockInfoPage