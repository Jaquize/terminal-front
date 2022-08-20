import {gql} from '@apollo/client'

// const day = new Date()
// const today = day.getFullYear()+'-'+("0"+(day.getMonth()+1)).slice(-2)+'-'+ ("0" + day.getDate()).slice(-2)

const today = "2022-07-25"

const GET_VOLUMNEUP = gql`
    query getVolumeUp($regDate : String = "${today}") {
        volumeUp(regDate : $regDate) {
            stockName
            times
            regDate
        }
    }
`

const GET_BOXING_NEW_STATUS = gql`
    query GetBoxingNewStatus($status : Int = 0 , $statusDate : String = "${today}" , $regDate : String = "2022-05-01" ) {
        boxingStatus(status : $status, statusDate : $statusDate , regDate : $regDate ) {
            stockName
            status
            statusDate
            regDate
        }
    }
`

const GET_BOXING_BOX_STATUS = gql`
    query GetBoxingBoxStatus($boxing : Int = 3, $status : Int = 0, $regDate : String = "2022-07-22" ){
        boxingBoxStatus(boxing:$boxing,status:$status,regDate:$regDate){
            stockName
            status
            boxing
            regDate
        }
    }
`

const GET_BREAK_TOP_TABLE = gql`
    query GetBreakTopTable($type:Int = 1, $statusDate:String = "${today}" ){
        breakBoxingTop(type:$type,statusDate:$statusDate){
            stockName
            type
            statusDate
            regDate
        }
    }
`

const GET_BREAK_LOW_TABLE = gql`
    query GetBreakLowTable($statusDate:String = "${today}" ){
        breakBoxingLow(statusDate:$statusDate){
            stockName
            statusDate
            regDate
        }
    }
`

const CONDITION = {
    'volumeUp' : GET_VOLUMNEUP,
    'boxingStatus' : GET_BOXING_NEW_STATUS,
    'boxingBoxStatus': GET_BOXING_BOX_STATUS,
    'breakBoxingTop' : GET_BREAK_TOP_TABLE,
    'breakBoxingLow' : GET_BREAK_LOW_TABLE
}


const GET_DAILY_INFO = gql`
    query getDailyInfo($stockName : String!) {
        dailyInfo(stockName : $stockName) {
            stockName
            dailyInfo {
                val_open
                val_close
                val_high
                val_low
                vol
                stock_date
            }
        }
    }
`
const STOCKINFO = {
    'dailyInfo' : GET_DAILY_INFO
}

const GET_STOCK_REPOT = gql`
query GetTempThemeInfo($stockName:String!){
    tempThemeInfo(stockName:$stockName){
        stockName
        report
    }
}
`

const GET_MATCHED_THEME = gql`
query GetMatchedTheme{
    matchedTheme{
        main
        sub
        stockList
    }
}
`

const MANAGE = {
    'stock_report' : GET_STOCK_REPOT,
    'matched_theme' : GET_MATCHED_THEME
}

export {CONDITION, STOCKINFO,MANAGE}