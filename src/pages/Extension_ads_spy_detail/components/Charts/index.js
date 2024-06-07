import React, { useEffect } from "react";
import * as echarts from "echarts";
import "echarts/theme/macarons"; // Import a theme if you want to use one

const ChartsComponent = ({ classAppendChar = "char" }) => {
	useEffect(() => {
		const chartDom = document.getElementById(classAppendChar);
		const myChart = echarts.init(chartDom);

		const option = {
			tooltip: {
				trigger: "item",
			},
			legend: {
				top: "5%",
				left: "center",
			},
			series: [
				{
					name: "Access From",
					type: "pie",
					radius: ["40%", "70%"],
					avoidLabelOverlap: false,
					itemStyle: {
						borderRadius: 10,
						borderColor: "#fff",
						borderWidth: 2,
					},
					label: {
						show: false,
						position: "center",
					},
					emphasis: {
						label: {
							show: true,
							fontSize: 40,
							fontWeight: "bold",
						},
					},
					labelLine: {
						show: false,
					},
					data: [
						{ value: 1048, name: "Search Engine" },
						{ value: 735, name: "Direct" },
						{ value: 580, name: "Email" },
						{ value: 484, name: "Union Ads" },
						{ value: 300, name: "Video Ads" },
					],
				},
			],
		};

		myChart.setOption(option);

		// Clean up the chart instance on component unmount
		return () => {
			myChart.dispose();
		};
	}, []);

	return <div id={classAppendChar} style={{ width: "100%", height: "400px" }}></div>;
};

export default ChartsComponent;
