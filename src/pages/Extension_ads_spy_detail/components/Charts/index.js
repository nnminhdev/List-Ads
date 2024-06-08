import React, { useEffect } from "react";
import * as echarts from "echarts";
import "echarts/theme/macarons"; // Import a theme if you want to use one

const ChartsComponent = ({ classAppendChar = "char", dataChar }) => {
	useEffect(() => {
		const chartDom = document.getElementById(classAppendChar);
		const myChart = echarts.init(chartDom);

		const option = {
			tooltip: {
				trigger: "item",
			},
			legend: {
				bottom: "0",
				left: "center",
			},
			series: [
				{
					name: "data",
					type: "pie",
					radius: ["40%", "55%"],
					avoidLabelOverlap: true,
					itemStyle: {
						borderRadius: 10,
						borderColor: "#fff",
						borderWidth: 2,
						fontFamily: "Inter"
					},
					// label: {
					// 	show: false,
					// 	position: "center",
					// },
					emphasis: {
						label: {
							show: true,
							fontSize: 18,
							fontWeight: "bold",
						},
					},
					labelLine: {
						show: true,
					},
					// data: [
					// 	{ value: 1048, name: "Search Engine" },
					// 	{ value: 735, name: "Direct" },
					// 	{ value: 580, name: "Email" },
					// 	{ value: 484, name: "Union Ads" },
					// 	{ value: 300, name: "Video Ads" },
					// ],
					data: dataChar,
				},
			],
		};

		myChart.setOption(option);

		// Clean up the chart instance on component unmount
		return () => {
			myChart.dispose();
		};
	}, []);

	return <div id={classAppendChar} style={{ width: "80%", height: "400px" }}></div>;
};

export default ChartsComponent;
