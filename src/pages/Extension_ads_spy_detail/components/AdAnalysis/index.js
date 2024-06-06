import { Flex, Table } from "antd";
import style from "./style.module.scss";
import { columns, dataSource } from "../../constant";
const AdAnalysisComponent = () => {
	return (
		<div className={style.analysis}>
			<Flex justify="space-between" gap={20}>
				<div className={style.box}>
					<Flex>Launch calendar</Flex>
					<Flex>
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
					<Flex justify="start" wrap gap={10}></Flex>
				</div>
				<div className={style.box}>
					<Flex>
						<p>Country distribution</p>
					</Flex>
					<Table dataSource={dataSource} columns={columns} />
				</div>
			</Flex>
			<div className={style.box__bottom}>
				<Flex>
					<p>Country distribution</p>
				</Flex>
				<Table dataSource={dataSource} columns={columns} />
			</div>
		</div>
	);
};

export default AdAnalysisComponent;
