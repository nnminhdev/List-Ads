import { Flex, Table } from "antd";
import { callApiGetRelatedAds, columnRelatedAds, columns, dataSource } from "../../constant";
import ChartsComponent from "../Charts";
import style from "./style.module.scss";
const CreativeAnalysisComponent = () => {
	return (
		<div className={style.creative}>
			<Table dataSource={callApiGetRelatedAds?.data} columns={columnRelatedAds} />
			<Flex justify="space-between" gap={20}>
				<div
					style={{
						width: "50%",
					}}
					className={style.analytics}
				>
					<ChartsComponent classAppendChar={"char-left"} />
				</div>
				<div
					style={{
						width: "50%",
					}}
					className={style.analytics}
				>
					<ChartsComponent classAppendChar={"char-right"} />
				</div>
			</Flex>
		</div>
	);
};

export default CreativeAnalysisComponent;
