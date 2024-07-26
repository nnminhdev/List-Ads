import { Button, Flex, Table, Tooltip, Typography } from "antd";
import style from "./style.module.scss";
import { callApiGetEcomDetail, columnRelated, columns } from "../../constant";
import { CalendarTwoTone } from "@ant-design/icons";
const AdAnalysisComponent = ({ dataDateLine, dataCountryDistribution, dataAdsDetailMoreDetail }) => {
	return (
		<div className={style.analysis}>
			<Flex justify="space-between" gap={20}>
				<div className={style.box}>
					<Flex justify="start" gap={10} align="center" className={style.box__top}>
						<CalendarTwoTone />
						<Typography>Launch calendar</Typography>
					</Flex>
					<Flex className={style.box__title} gap={30} justify="start" align="center">
						<Flex justify="start" gap={5}>
							<p>First Seen: </p>
							<p>2024-06-07</p>
						</Flex>
						<Flex justify="start" gap={5}>
							<p>First Seen: </p>
							<p>2024-06-07</p>
						</Flex>
						<Flex justify="start" gap={5}>
							<p>First Seen: </p>
							<p>2024-06-07</p>
						</Flex>
					</Flex>
					<Flex justify="start" wrap gap={4}>
						{Object.keys(dataDateLine)?.map((item, index) => {
							return (
								<Tooltip
									className=""
									title={
										<div
											style={{
												backgroundColor: "#fff",
											}}
										>
											<Typography
												style={{
													fontWeight: "bold",
													paddingBottom: "5px",
													borderBottom: "1px solid #eee",
													fontSize: "12px",
												}}
											>
												Ad campaign in 100 days
											</Typography>
											<Flex
												justify="start"
												align="center"
												gap={10}
												style={{
													paddingTop: "5px",
												}}
											>
												<Typography
													style={{
														fontSize: "11px",
													}}
												>
													{item}
												</Typography>
												<Typography
													style={{
														fontSize: "11px",
													}}
												>
													{dataDateLine[`${item}`] === 1 ? "Discovered" : "Undiscovered"}
												</Typography>
											</Flex>
										</div>
									}
									key={index}
								>
									<Button
										style={{
											backgroundColor: dataDateLine[`${item}`] !== 1 && "#eee",
											border: "none",
											width: "4.5%",
										}}
										type={dataDateLine[`${item}`] === 1 ? "primary" : ""}
									></Button>
								</Tooltip>
							);
						})}
					</Flex>
				</div>
				<div className={style.box}>
					<Flex className={style.box__top} justify="start" gap={10} align="center">
						<CalendarTwoTone />
						<Typography>Country distribution</Typography>
					</Flex>
					<Table
						dataSource={
							dataCountryDistribution?.similar_country || callApiGetEcomDetail?.data?.similar_country
						}
						columns={columns}
					/>
				</div>
			</Flex>
			<div className={style.box__bottom}>
				<Flex
					className={style.box__top}
					justify="start"
					gap={10}
					align="center"
					style={{
						padding: "15px",
					}}
				>
					<CalendarTwoTone />
					<Typography>Related text</Typography>
				</Flex>
				{dataAdsDetailMoreDetail?.similar_message?.length > 0 && (
					<Table dataSource={dataAdsDetailMoreDetail?.similar_message} columns={columnRelated} />
				)}
			</div>
		</div>
	);
};

export default AdAnalysisComponent;
