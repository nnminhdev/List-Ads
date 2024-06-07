import { Button, Flex, Table, Tooltip, Typography } from "antd";
import style from "./style.module.scss";
import { columns, dataSource } from "../../constant";
import { CalendarTwoTone } from "@ant-design/icons";
const AdAnalysisComponent = ({ dataDateLine }) => {
	console.log(dataDateLine);
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
					<Flex justify="start" wrap gap={10}>
						{Object.keys(dataDateLine)?.map((item, index) => {
							return (
								<Tooltip title={item}>
									<Button type="primary"></Button>
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
					<Table dataSource={dataSource} columns={columns} />
				</div>
			</Flex>
			<div className={style.box__bottom}>
			<Flex className={style.box__top} justify="start" gap={10} align="center">
						<CalendarTwoTone />
						<Typography>Related text</Typography>
					</Flex>
				<Table dataSource={dataSource} columns={columns} />
			</div>
		</div>
	);
};

export default AdAnalysisComponent;
