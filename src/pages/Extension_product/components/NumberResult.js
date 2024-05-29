import React, { useEffect, useState } from "react";
import { Table, InputNumber, Flex, Slider, Typography, Tooltip, Spin, Modal, Divider, Space } from "antd";
import { SAMPLE_DATA, formatDataTable, formatDate } from "../constants";
import { InfoCircleOutlined, PictureOutlined, MoreOutlined } from "@ant-design/icons";
import { imageURL } from "../../../utilities/extension/images";
import Chart from "./Chart";
import { getReq } from "../../../services/api/product";
const { Column, ColumnGroup } = Table;
const { Title } = Typography;
const NumberResult = ({
	isProfit = false,
	title,
	description,
	width = "100%",
	value,
	max = 100,
	step = 1,
	disabled = false,
	slider = {},
	prefix = false,
}) => {
	const handleChangeSlider = (value) => {
		console.log({ value });
	};
	return (
		<Flex vertical gap={5} className="number-result-wrapper">
			<p>
				<strong>{title}</strong>{" "}
				<Tooltip title={description}>
					<InfoCircleOutlined />
				</Tooltip>
			</p>
			<div disabled={disabled} style={{ width: width }} className="number-result-disabled">
				<span>{value}</span>
			</div>
		</Flex>
	);
};
export default NumberResult;
