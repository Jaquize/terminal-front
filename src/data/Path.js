const ROOT = '/stock'
const STOCK_CONDITION_ROOT = '/stock/StockConditionPage'

const PATH = [

    {
        title : '주식 조건 리스트',
        path : false,
        sub: 
        [
            {
                title:'거래량',
                sub:
                [{
                    title:'거래량 급등 조회',
                    url: STOCK_CONDITION_ROOT + '/volumeUp'
                }]
            },
            {
                title:'횡보',
                sub:
                [{
                    title:'횡보 내 상태 변경 조회',
                    url: STOCK_CONDITION_ROOT + '/boxingStatus'
                 },
                 {
                     title:'횡보 내 횡보 일자, 상태 기준 조회',
                     url: STOCK_CONDITION_ROOT + '/boxingBoxStatus'
                 },
                 {
                     title:'횡보 상단 돌파 조회',
                     url: STOCK_CONDITION_ROOT + '/breakBoxingTop'
                 },
                 {
                     title:'횡보 하단 돌파 조회',
                     url: STOCK_CONDITION_ROOT + '/breakBoxingLow'
                 }]
            }
        ]
    },
    {
        title : '주식 정보 조회',
        path : ROOT + '/stockInfoPage',
        sub:null
    },
    {
        title : '테마 조건 리스트',
        path : ROOT + '/themeConditionPage',
        sub:null
    },{
        title : '테마 정보 조회',
        path : ROOT + '/themeInfoPage',
        sub:null
    },{
        title : '포트폴리오',
        path : ROOT + '/portfolioPage',
        sub:null
    }
]

export {PATH}