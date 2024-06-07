import { Flex, Table } from "antd";
import { columns, dataSource } from "../../constant";
import ChartsComponent from "../Charts";

const CreativeAnalysisComponent = () => {
	return (
		<div>
			<Table dataSource={dataSource} columns={columns} />
			<Flex justify="space-between" gap={20}>
				<div
					style={{
						width: "50%",
					}}
				>
					<ChartsComponent classAppendChar={"char-left"} />
				</div>
				<div
					style={{
						width: "50%",
					}}
				>
					<ChartsComponent classAppendChar={"char-right"} />
				</div>
			</Flex>
		</div>
	);
};

export default CreativeAnalysisComponent;
