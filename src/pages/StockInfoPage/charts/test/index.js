

import React, { useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";
import { STOCKINFO } from '../../../../query/allQuery';
import { useQuery } from '@apollo/client';
import { timeParse } from "d3-time-format";


function parseData(d) {

	let newData = {}

	newData.date = timeParse("%Y-%m-%d")(d.stock_date);
	newData.open = +d.val_open;
	newData.high = +d.val_high;
	newData.low = +d.val_low;
	newData.close = +d.val_close;
	newData.volume = +d.vol;

	return newData;

}

function preventWheelEvent(e){
	e.preventDefault()
}

function ChartComponent(props) {

	const wheelTag = useRef(null)

	const { loading, error, data } = useQuery(STOCKINFO.dailyInfo, { variables: { stockName: props.stockName } })

	useEffect(() => {

		if(wheelTag.current != null){

		wheelTag.current.addEventListener('wheel',preventWheelEvent,false)}

	},[wheelTag.current])

	const makeData = (_data) => {

		let makedData = []

		_data.dailyInfo.dailyInfo.forEach(element => {
			makedData.push(parseData(element))
		});

		return makedData
	}


	if (loading) {
		return <div>Loading...</div>
	}

	else if(error){
		return <div>Error...</div>
	}

	return (
		<div ref={wheelTag}>
		<TypeChooser>
			{type => <Chart type={type} data={makeData(data)} />}
		</TypeChooser>
		</div>
	)
	
}

// function ChartComponent(props){
// 	const { widgetProps, widgetPropsAny } = props;
//     let containerId = "advanced-chart-widget-container";
//     if (widgetProps === null || widgetProps === void 0 ? void 0 : widgetProps.container_id) {
//         containerId = widgetProps === null || widgetProps === void 0 ? void 0 : widgetProps.container_id;
//     }
//     const ref = React.createRef();
//     React.useEffect(() => {
//         let refValue;
//         if (ref.current) {
//             const script = document.createElement("script");
//             script.src = "https://s3.tradingview.com/tv.js";
//             script.async = true;
//             script.onload = () => {
//                 if (typeof TradingView !== "undefined") {
// 					 /* global TradingView */
//                     new TradingView.widget(Object.assign(Object.assign({ "width": "100%", "height": "640px", "symbol": "BITMEX:XBTUSD", "interval": "240", "range": "1M", "timezone": "Etc/UTC", "theme": "dark", "style": "9", "locale": "en", "toolbar_bg": "rgba(0, 0, 0, 0.8)", "hide_top_toolbar": false, "hide_side_toolbar": false, "withdateranges": true, "save_image": true, "enable_publishing": false, "container_id": containerId }, widgetProps), widgetPropsAny));
//                 }
//             };
//             ref.current.appendChild(script);
//             refValue = ref.current;
//         }
//         return () => {
//             if (refValue) {
//                 while (refValue.firstChild) {
//                     refValue.removeChild(refValue.firstChild);
//                 }
//             }
//         };
//     }, [ref, widgetProps, widgetPropsAny, containerId]);


// 	const onClickHandler = () => {
// 		new TradingView.widget(
// 	{
// 	  "width": "100%",
// 	  "height": "640px",
// 	  "symbol": "NASDAQ:AAPL",
// 	  "interval": "240",
// 	  "range": "1M",
// 	  "timezone": "Etc/UTC",
// 	  "theme": "dark",
// 	  "style": "9",
// 	  "locale": "en",
// 	  "toolbar_bg": "rgba(0, 0, 0, 0.8)",
// 	  "hide_top_toolbar": false,
// 	  "hide_side_toolbar": false,
// 	  "withdateranges": true,
// 	  "save_image": true,
// 	  "enable_publishing": false,
// 	  "container_id": containerId,
// 	}
//   );
// 	}

//     return (
// 	<React.Fragment>
// 		<button onClick={onClickHandler}></button>
// 		<div id={containerId} ref={ref}></div>
// 	</React.Fragment>
// 	)

// }

export { ChartComponent }
