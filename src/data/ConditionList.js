import PorfolioPage from "../pages/PortfolioPage"
import { StockConditionPage } from "../pages/StockConditionPage/StockConditionPage"
import { StockInfoPage } from "../pages/StockInfoPage/StockInfoPage"
import { ThemeConditionPage } from "../pages/ThemeConditionPage/ThemeConditionPage"
import ThemeFilterPage from "../pages/ThemeFIlterPage"
import { ThemeInfoPage } from "../pages/ThemeInfoPage/ThemeInfoPage"

const PATH = [

    {
        title:'StockConditions',
        url:'/',
        component:<StockConditionPage/>,
        sub: 
        [
            {
                title:'거래량',
                sub:
                [{
                    title:'거래량 급등 조회',
                    url:'volumeUp'
                }]
            },
            {
                title:'횡보',
                sub:
                [{
                    title:'횡보 내 상태 변경 조회',
                    url:'boxingStatus'
                 },
                 {
                     title:'횡보 내 횡보 일자, 상태 기준 조회',
                     url:'boxingBoxStatus'
                 },
                 {
                     title:'횡보 상단 돌파 조회',
                     url:'breakBoxingTop'
                 },
                 {
                     title:'횡보 하단 돌파 조회',
                     url:'breakBoxingLow'
                 }]
            }
        ]

        
    },
    {
        title:'ThemeConditions',
        url:'/theme',
        component:<ThemeConditionPage/>,
        sub:null
    },
    {
        title:'StockInfo',
        url:'/stock_info',
        component:<StockInfoPage/>,
        sub:null
    },
    {
        title:'ThemeInfo',
        url:'/theme_info',
        component:<ThemeInfoPage/>,
        sub:null
    },{
        title:'ThemeFilter',
        url:'/theme_filter',
        component:<ThemeFilterPage/>,
        sub:null
    },{
        title:'Portfolio',
        url:'/portfolio',
        component:<PorfolioPage/>,
        sub:null
    }
]


export {PATH}
