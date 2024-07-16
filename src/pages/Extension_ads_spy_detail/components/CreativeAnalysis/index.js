import { Flex, Table, Typography } from "antd";
import { callApiAnalysisInfo, callApiGetRelatedAds, columnRelatedAds, columns, dataSource } from "../../constant";
import ChartsComponent from "../Charts";
import style from "./style.module.scss";
import { useEffect, useState } from "react";
const CreativeAnalysisComponent = () => {
	const [dataChannel, setDataChannel] = useState(
		callApiAnalysisInfo?.data?.channel_data?.map((item, index) => {
			return {
				name: item.channel === 1 ? "Facebook" : item.channel,
				value: item.channel_percent,
			};
		})
	);
	const [dataGeo, setGeoData] = useState(
		callApiAnalysisInfo?.data?.geo_data?.map((item, index) => {
			return {
				name: item?.geo,
				value: item.geo_percent,
			};
		})
	);

	useEffect(() => {
		const dataChannelChar = callApiAnalysisInfo?.data?.channel_data?.map((item, index) => {
			return {
				name: item.channel === 1 ? "Facebook" : item.channel,
				value: item.channel_percent,
			};
		});
		const dataGeoChar = callApiAnalysisInfo?.data?.geo_data?.map((item, index) => {
			return {
				name: item?.geo,
				value: item.geo_percent,
			};
		});
		if (dataChannelChar.length > 0) setDataChannel(dataChannelChar);
		if (dataGeoChar.length > 0) setGeoData(dataGeoChar);
	}, []);
	console.log(dataChannel, dataGeo);
	return (
		<div className={style.creative}>
			<div className={style.table}>
				<Table dataSource={callApiGetRelatedAds?.data} columns={columnRelatedAds} />
			</div>

			<Flex justify="space-between" gap={20}>
				<div
					style={{
						width: "50%",
					}}
					className={style.analytics}
				>
					<Flex
						justify="start"
						style={{
							padding: "20px",
							borderBottom: "1px solid #eee",
						}}
					>
						<Typography>Network Analysis</Typography>
					</Flex>
					<Flex
						justify="center"
						align="center"
						style={{
							marginTop: "20px",
							marginBottom: "20px",
						}}
					>
						{/* <ChartsComponent classAppendChar={"char-left"} dataChar={dataChannel} /> */}
					</Flex>
				</div>
				<div
					style={{
						width: "50%",
					}}
					className={style.analytics}
				>
					<Flex
						justify="start"
						style={{
							padding: "20px",
							borderBottom: "1px solid #eee",
						}}
					>
						<Typography>Related Country&Region</Typography>
					</Flex>
					<Flex
						justify="center"
						align="center"
						style={{
							marginTop: "20px",
							marginBottom: "20px",
						}}
					>
						{/* <ChartsComponent classAppendChar={"char-right"} dataChar={dataGeo} /> */}
					</Flex>
				</div>
			</Flex>
		</div>
	);
};

export default CreativeAnalysisComponent;
