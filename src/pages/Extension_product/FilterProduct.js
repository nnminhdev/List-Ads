import { Button, Card, Col, Divider, Flex, Form, Layout, Row, Tag, Space, Switch, Checkbox } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { CATEGORIES } from "../../utilities/constants/common";
import React, { useEffect, useMemo, useRef, useState } from "react";
import FilterStorage from "../Extension_competitor_research/FilterStorage";
import FilterSave from "../Extension_competitor_research/FilterSave";
import MinMaxOptions from "../../components/Filters/MinMaxOptions";
import SelectionAndDate from "../../components/Filters/SelectionAndDate";
import Keywords from "../../components/Filters/Keywords";
import PlatformIcon from "../../components/common/PlatformIcon";

const FilterProduct = ({ onFinish, title = "Competitor Research", loading = false, onReset, initTable }) => {
	const [form] = Form.useForm();
	const [selectedAll, setSelectedAll] = useState(true);
	const [showAdvanced, setShowAdvanced] = useState(false);
	const categories = useMemo(() => {
		return CATEGORIES.map((item) => item.id);
	}, []);
	const [selected, setSelected] = useState(categories);
	const searchBtnRef = useRef(null);
	const [isDisabled, setDisabled] = useState(true);

	useEffect(() => {
		if (searchBtnRef.current) {
			setSelected(categories);
			setTimeout(() => {
				searchBtnRef.current.click();
			}, 0);
		}
	}, []);

	return (
		<Card
			extra={
				<Space>
					<FilterStorage
						keyName="product_preset"
						onLoad={(item) => {
							form.setFieldsValue(item);
						}}
						showDropFilter={true}
					/>
					<FilterSave form={form} disabled={isDisabled} keyName="product_preset" />
				</Space>
			}
			title={<PlatformIcon />}
		>
			<Form
				form={form}
				onFinish={(filters) => onFinish(filters, initTable)}
				onValuesChange={(changedValues, values) => {
					setDisabled(Object.keys(values).length === 0);
				}}
				layout="vertical"
			>
				<Row gutter={24}>
					<Col md={12} sm={24}>
						<Flex justify="space-between">
							<h4>Filter</h4>
						</Flex>
						<MinMaxOptions />
					</Col>
					<Col md={12} sm={24}>
						<Flex justify="space-between">
							<h4>Select one or multiple categories *</h4>
							<Button
								htmlType="button"
								onClick={() => {
									const categories = CATEGORIES.map((item) => item.id);
									const value = selectedAll ? [] : categories;
									form.setFieldValue("categories", value);
									setSelectedAll(!selectedAll);
									setSelected(value);
								}}
								type="link"
							>
								{selectedAll ? "Deselect All" : "Select All"}
							</Button>
						</Flex>
						<Form.Item
							initialValue={categories}
							style={{ marginBottom: 0 }}
							valuePropName="checked"
							rules={[{ type: "array" }]}
							name="categories"
						>
							<Checkbox.Group value={selected} onChange={setSelected} name="categories">
								<Row gutter={24}>
									{CATEGORIES.map((item, index) => {
										return (
											<Col xl={12} lg={12} md={24} sm={24} key={`item_${index}`}>
												<Checkbox style={{ marginBottom: 5 }} value={Number(item.id)}>
													{item.value}
												</Checkbox>
											</Col>
										);
									})}
								</Row>
							</Checkbox.Group>
						</Form.Item>
					</Col>
				</Row>
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
						<SelectionAndDate />
						<Divider />
						<Keywords />
						<Divider />
					</>
				)}
				<Flex gap="middle" justify="space-between">
					<Space size="large">
						<Space align="center">
							<Form.Item noStyle name="exclude_unavailable">
								<Switch size="small" />
							</Form.Item>
							<span>Exclude Unavailable Products</span>
						</Space>
						<Space align="center">
							<Form.Item noStyle name="only_dropshipping">
								<Switch size="small" />
							</Form.Item>
							<span>Only Dropshipping Products</span>
							<Tag color="blue">BETA</Tag>
						</Space>
						<Space align="center">
							<Form.Item noStyle name="exclude_top_brands">
								<Switch size="small" />
							</Form.Item>
							<span>Only POD Products</span>
							<Tag color="blue">BETA</Tag>
						</Space>
					</Space>
					<Space>
						<Button
							onClick={() => {
								form.resetFields();
								onReset();
							}}
							disabled={loading}
							size="large"
						>
							Reset filter
						</Button>
						<Button loading={loading} onClick={form.submit} ref={searchBtnRef} type="primary" size="large">
							Search
						</Button>
					</Space>
				</Flex>
			</Form>
		</Card>
	);
	// </ConfigProvider>
};
export default FilterProduct;
