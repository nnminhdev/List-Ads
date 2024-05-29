import { Checkbox, Flex, Form, Input, Select } from "antd";
import DateRangePicker from "../common/DateRangePicker";
import dayjs from "dayjs";
import { CalendarOutlined, ChromeOutlined, DollarOutlined, GlobalOutlined } from "@ant-design/icons";
import React from "react";
import { CURRENCIES, DOMAINS, LANGUAGES } from "../../utilities/constants/common";

const SelectionAndDate = () => {
	const form = Form.useFormInstance();
	return (
		<Flex gap="middle" style={{ marginTop: 50 }} wrap="wrap">
			<Form.Item hidden name={["product_created_at", "min"]}>
				<Input />
			</Form.Item>
			<Form.Item hidden name={["product_created_at", "max"]}>
				<Input />
			</Form.Item>
			<Form.Item hidden name={["store_created_at", "min"]}>
				<Input />
			</Form.Item>
			<Form.Item hidden name={["store_created_at", "max"]}>
				<Input />
			</Form.Item>
			<Form.Item style={{ flex: 1 }} label="Product Creation Date">
				<DateRangePicker
					onChange={(date) => {
						if (!date) return;
						const min = date[0] ? dayjs(date[0]).format("YYYY-MM-DD") : null;
						const max = date[1] ? dayjs(date[1]).format("YYYY-MM-DD") : null;
						form.setFieldValue(["product_created_at", "min"], min);
						form.setFieldValue(["product_created_at", "max"], max);
					}}
					suffixIcon={<CalendarOutlined style={{ fontSize: 18 }} />}
					id="product_creation"
				/>
			</Form.Item>
			<Form.Item style={{ flex: 1 }} label="Store Creation Date">
				<DateRangePicker
					onChange={(date) => {
						if (!date) return;
						const min = date[0] ? dayjs(date[0]).format("YYYY-MM-DD") : null;
						const max = date[1] ? dayjs(date[1]).format("YYYY-MM-DD") : null;
						form.setFieldValue(["store_created_at", "min"], min);
						form.setFieldValue(["store_created_at", "max"], max);
					}}
					suffixIcon={<CalendarOutlined style={{ fontSize: 18 }} />}
					id="stire_creation"
				/>
			</Form.Item>
			<Form.Item name="language" style={{ flex: 1 }} label="Store Language">
				<Select
					placeholder="ALL"
					suffixIcon={<GlobalOutlined style={{ fontSize: 24 }} />}
					mode="multiple"
					style={{ width: "100%" }}
					allowClear
					maxTagCount={2}
					fieldNames={{ label: "value", value: "id" }}
					options={[{ value: "All", id: null }, ...LANGUAGES]}
				/>
			</Form.Item>
			<Form.Item style={{ flex: 1 }} name="currency" label="Store Currency">
				<Select
					placeholder="ALL"
					suffixIcon={<DollarOutlined style={{ fontSize: 24 }} />}
					mode="multiple"
					maxTagCount={2}
					style={{ width: "100%" }}
					allowClear
					fieldNames={{ label: "name", value: "id" }}
					options={[{ name: "All", id: null }, ...CURRENCIES]}
					optionRender={({ data, value, label }) => {
						return (
							<div style={{ display: "flex", gap: 10 }}>
								{data.flag && <img src={data.flag} width={32} alt={value} />}
								<div
									style={{
										flex: 1,
										display: "flex",
										fontSize: 13,
										flexDirection: "column",
									}}
								>
									<span style={{ fontWeight: "bold" }}>{data.code}</span>
									<span style={{ whiteSpace: "wrap" }}>{label}</span>
								</div>
							</div>
						);
					}}
				/>
			</Form.Item>
			<Form.Item name="domain_tld" style={{ flex: 1 }} label="Domain TLD">
				<Select
					placeholder="ALL"
					suffixIcon={<ChromeOutlined style={{ fontSize: 24 }} />}
					mode="multiple"
					maxTagCount={3}
					style={{ width: "100%" }}
					allowClear
					fieldNames={{ label: "value", value: "id" }}
					options={[{ value: "All", id: null }, ...DOMAINS]}
				/>
			</Form.Item>
		</Flex>
	);
};
export default SelectionAndDate;
