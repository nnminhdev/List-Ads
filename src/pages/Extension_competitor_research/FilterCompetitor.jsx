import { Button, Card, Divider, Flex, Form, Space, Switch } from "antd";
import FilterStorage from "./FilterStorage";
import FilterSave from "./FilterSave";
import Keywords from "../../components/Filters/Keywords";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import MinMaxOptions from "../../components/Filters/MinMaxOptions";
import SelectionAndDate from "../../components/Filters/SelectionAndDate";
import React, { useState } from "react";
import { INITIAL_COMPETITOR_SEARCH } from "../../utilities/constants/common";
import PlatformIcon from "../../components/common/PlatformIcon";

const FilterCompetitor = ({ onFinish, loading }) => {
	const [form] = Form.useForm();
	const [isDisabled, setDisabled] = useState(true);
	const [showAdvanced, setShowAdvanced] = useState(false);

	return (
		<Card
			extra={
				<Space>
					<FilterStorage
						keyName="competitor_preset"
						onLoad={(item) => {
							form.setFieldsValue(item.options);
						}}
					/>
					<FilterSave keyName="competitor_preset" disabled={isDisabled} form={form} />
				</Space>
			}
			title={<PlatformIcon />}
		>
			<Form
				onValuesChange={(changedValues, values) => {
					setDisabled(Object.keys(values).length === 0);
				}}
				form={form}
				onFinish={onFinish}
				// initialValues={INITIAL_COMPETITOR_SEARCH.filters}
				layout="vertical"
			>
				<Keywords />
				<Divider>
					<Button
						type="text"
						onClick={() => setShowAdvanced(!showAdvanced)}
						icon={
							showAdvanced ? (
								<DownOutlined style={{ fontWeight: "bold", fontSize: 16 }} />
							) : (
								<UpOutlined style={{ fontWeight: "bold", fontSize: 16 }} />
							)
						}
					>
						<span style={{ fontWeight: "bold", fontSize: 16 }}>Advanced Filters</span>
					</Button>
				</Divider>
				{showAdvanced && (
					<>
						<MinMaxOptions md={12} sm={24} />
						<Divider />
						<SelectionAndDate />
						<Divider />
					</>
				)}

				<Flex gap="middle" justify="space-between">
					<Space align="center">
						<Form.Item valuePropName="checked" noStyle name="exclude_unavailable">
							<Switch size="small" />
						</Form.Item>
						<span>Exclude Unavailable Products</span>
					</Space>
					<Space>
						<Button disabled={loading} onClick={() => form.resetFields()} size="large">
							Reset filter
						</Button>
						<Button loading={loading} onClick={form.submit} type="primary" size="large">
							Search
						</Button>
					</Space>
				</Flex>
			</Form>
		</Card>
	);
};
export default FilterCompetitor;
