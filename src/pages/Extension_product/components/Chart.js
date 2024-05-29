import * as React from "react";
import { useEffect, useState } from "react";
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from "recharts";
import { getChartReq } from "../../../services/api/product";
import { Spin } from "antd";
import { SAMPLE_CHART, formatDate } from "../constants";
export default React.memo(function Chart({ id = null, productId, variantId }) {
	const [data, setData] = useState([]);
	const chartRef = React.useRef(null);
	useEffect(() => {
		getChartReq(
			`/products/chart/${productId}/${variantId}/`,
			(data) => {
				const chartData = data?.chart?.map((item) => {
					return { ...item, date: formatDate(item.date, true) };
				});
				setData(chartData);
			},
			(errors) => {
				if (!!errors) {
					const chartData = SAMPLE_CHART.map((item) => {
						return { ...item, date: formatDate(item.date, true) };
					});
					setData(chartData);
				}
			}
		);
	}, [productId, variantId]);
	useEffect(() => {
		const chartRefValue = chartRef.current;
		if (chartRefValue) {
			const container = chartRefValue.container;
			const containerWidth = container.offsetWidth;
			console.log({ container });
			document.querySelector(`#chart-id-${id}`)?.setAttribute("viewBox", `0 0 100% 200`);
		}
	}, [data, id]);

	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip">
					<p className="date">{`${payload[0]?.payload?.date}`}</p>
					<p className="value">${payload[0]?.payload?.value}</p>
				</div>
			);
		}

		return null;
	};
	return data.length ? (
		<AreaChart
			width={1600}
			height={200}
			data={data}
			margin={{
				top: 10,
				right: 30,
				left: 0,
				bottom: 0,
			}}
			ref={chartRef}
			id={`chart-id-${id}`}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="date" />
			<YAxis />
			<Tooltip content={CustomTooltip} />
			<Area type="monotone" dataKey="value" stroke="#ff4c00" fill="#ff4c0011" />
		</AreaChart>
	) : (
		<Spin />
	);
});
