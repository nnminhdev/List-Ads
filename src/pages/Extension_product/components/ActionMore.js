import React, { useEffect, useState } from "react";
import { Table, Dropdown, theme, Button, Card, Tooltip, Spin } from "antd";
import { SAMPLE_DATA, formatDataTable, formatDate } from "../constants";
import { RightOutlined, PictureOutlined, MoreOutlined } from "@ant-design/icons";
import { imageURL } from "../../../utilities/extension/images";
import Chart from "./Chart";
import { getReq } from "../../../services/api/product";
const { Column, ColumnGroup } = Table;

const ActionMore = () => {
	const items = [
		{
			key: "1",
			label: <div>Competitor</div>,
		},
		{
			key: "2",
			label: <div>Shopify</div>,
		},
		{
			key: "3",
			label: <div>DS</div>,
		},
	];

	return (
		<Dropdown
			menu={{
				items,
			}}
			placement="bottomRight"
		>
			<Button>
				<MoreOutlined />
			</Button>
		</Dropdown>
	);
};
export default ActionMore;
