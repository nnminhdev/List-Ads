import React, { useEffect, useState } from "react";
import { Table, InputNumber, Flex, Slider, Typography, Tooltip, Spin, Modal, Divider, Space } from "antd";
import { SAMPLE_DATA, formatDataTable, formatDate } from "../constants";
import { InfoCircleOutlined, PictureOutlined, MoreOutlined } from "@ant-design/icons";
import { imageURL } from "../../../utilities/extension/images";
import Chart from "./Chart";
import { getReq } from "../../../services/api/product";
const { Column, ColumnGroup } = Table;
const { Title } = Typography;
const NumberInput = ({
	isProfit = false,
	title,
	description,
	width = "100%",
	value,
	max,
	step = 1,
	disabled = false,
	slider = {},
	prefix = false,
	keyNumber = "",
	handleChange = () => {},
}) => {
	const handleChangeSlider = (value) => {
		handleChange(value, keyNumber);
	};
	return (
		<Flex vertical gap={5}>
			<p>
				<strong>{title}</strong>{" "}
				<Tooltip title={description}>
					<InfoCircleOutlined />
				</Tooltip>
			</p>
			{isProfit ? (
				<Title className="profit-value" level={2}>
					≈ {value}
				</Title>
			) : (
				<InputNumber
					disabled={disabled}
					value={value}
					min={0}
					max={max}
					step={step}
					prefix={prefix}
					id={keyNumber}
					style={{ width: width }}
					onChange={(value) => {
						if (!isNaN(value)) {
							handleChange(value, keyNumber);
						}
					}}
					// changeOnBlur={false}
				/>
			)}
			{Object.keys(slider).length > 0 && (
				<Slider
					onChange={handleChangeSlider}
					marks={slider.marks}
					defaultValue={slider.defaultValue}
					min={slider.min}
					max={slider.max}
					step={slider.step}
					value={value}
				/>
			)}
		</Flex>
	);
};
export default NumberInput;
