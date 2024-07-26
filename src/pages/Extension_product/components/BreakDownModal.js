import React, { useCallback, useEffect, useState } from "react";
import { Table, Flex, theme, Button, Card, Tooltip, Spin, Modal, Divider } from "antd";
import { SAMPLE_DATA, calcNumbers, formatDataTable, formatDate, numberBreaksDown } from "../constants";
import { DollarOutlined, ShoppingOutlined, MoreOutlined } from "@ant-design/icons";
import { imageURL } from "../../../utilities/extension/images";
import Chart from "./Chart";
import { getReq } from "../../../services/api/product";
import NumberInput from "./NumberInput";
import NumberResult from "./NumberResult";
const { Column, ColumnGroup } = Table;

const BreakDownModal = ({ open, price, onClose }) => {
	const [numbersBreakdown, setNumbersBreakdown] = useState({
		sellingPrice: price,
		orders: 100,
		POTProfit: 0,
		goodSold: 0,
		shippingCost: 0,
		feePerOrder: 0,
		CPA: 0,
		PCRatio: 0,
		BECPA: 0,
		BEROAS: 0,
		profitMargin: 0,
	});
	const handleChangeNumber = useCallback((numbers) => {
		const newNumbers = calcNumbers(numbers);
		setNumbersBreakdown(newNumbers);
	}, []);
	useEffect(() => {
		const newNumbers = calcNumbers(numbersBreakdown);
		setNumbersBreakdown(newNumbers);
	}, [price]);
	return (
		<Modal
			open={open}
			title="Numbers Breakdown"
			footer={null}
			width={900}
			onCancel={onClose}
			className="modal-breakdown"
			destroyOnClose={true}
		>
			<p>
				Input the cost of good sold and shipping cost per item to get the numbers breakdown on the product.
				Other numbers can also be customized to your needs.
			</p>
			<Divider />
			<Flex gap={20} justify="space-between">
				<NumberInput
					title="Selling Price"
					prefix={<DollarOutlined />}
					keyNumber="sellingPrice"
					value={numbersBreakdown.sellingPrice}
					description="This is the price you plan on charging your customers."
					width={200}
					handleChange={(value, key) => {
						const newNumbers = { ...numbersBreakdown };
						newNumbers[key] = value;
						handleChangeNumber(newNumbers);
					}}
					step={0.01}
					slider={{
						key: "price",
						value: numbersBreakdown.sellingPrice,
						min: 0,
						max: 500,
						step: 0.01,
						marks: {
							0: "$0",
							500: "$500+",
						},
					}}
				/>
				<NumberInput
					title="Example Orders"
					prefix={<ShoppingOutlined />}
					keyNumber="orders"
					value={numbersBreakdown.orders}
					width={200}
					handleChange={(value, key) => {
						const newNumbers = { ...numbersBreakdown };
						newNumbers[key] = value;
						handleChangeNumber(newNumbers);
					}}
					description="The amount of units you expect to sell. This is the default value we put across all products."
					slider={{
						key: "orders",
						value: numbersBreakdown.orders,
						min: 0,
						max: 100000,
						step: 1,
						marks: {
							0: "0",
							100000: "100,000+",
						},
					}}
				/>
				<NumberInput
					value={numbersBreakdown.POTProfit}
					title="POT. Profit"
					prefix={<DollarOutlined />}
					isProfit={true}
					description="The potential profit is calculated by subtracting BECPA with the CPA of the product, and the difference is multiplied by 25,000 to give you an idea of the potential profit if you sold that many units."
				/>
			</Flex>
			<Divider />
			<Flex vertical gap={40}>
				<Flex gap={30} justify="space-between">
					<NumberInput
						title="Est. Cost of Good Sold"
						prefix={<DollarOutlined />}
						keyNumber="goodSold"
						value={numbersBreakdown.goodSold}
						description="The amount you expect to pay your supplier for each unit."
						handleChange={(value, key) => {
							const newNumbers = { ...numbersBreakdown };
							newNumbers[key] = value;
							handleChangeNumber(newNumbers);
						}}
					/>
					<NumberInput
						title="Est. Shipping Cost"
						prefix={<DollarOutlined />}
						keyNumber="shippingCost"
						handleChange={(value, key) => {
							const newNumbers = { ...numbersBreakdown };
							newNumbers[key] = value;
							handleChangeNumber(newNumbers);
						}}
						value={numbersBreakdown.shippingCost}
						description="The amount you expect to pay your supplier for each unit shipped."
					/>
					<NumberInput
						value={numbersBreakdown.feePerOrder}
						title="Est. Fees Per Order"
						keyNumber="feePerOrder"
						prefix={<DollarOutlined />}
						handleChange={(value, key) => {
							const newNumbers = { ...numbersBreakdown };
							newNumbers[key] = value;
							handleChangeNumber(newNumbers);
						}}
						description="The estimated fee you expect to pay your payment processor per order. Calculated as 2.9% + $0.3 per order."
					/>
					<NumberInput
						value={numbersBreakdown.CPA}
						title="Est. CPA"
						keyNumber="CPA"
						prefix={<DollarOutlined />}
						handleChange={(value, key) => {
							const newNumbers = { ...numbersBreakdown };
							newNumbers[key] = value;
							handleChangeNumber(newNumbers);
						}}
						description="The price to cost ratio is calculated by dividing the product cost with the selling price."
					/>
				</Flex>
				<Flex gap={30} justify="space-between">
					<NumberResult
						disabled={true}
						title="P/C Ratio"
						value={numbersBreakdown.PCRatio}
						description="The price to cost ratio is calculated by dividing the product cost with the selling price."
					/>
					<NumberResult
						disabled={true}
						title="BECPA"
						value={numbersBreakdown.BECPA}
						description="The breakeven cost per acquisition (BECPA) is the maximum CPA you should aim to get to breakeven on the product."
					/>
					<NumberResult
						disabled={true}
						value={numbersBreakdown.BEROAS}
						title="BEROAS"
						description="The breakeven return on ad spend (BEROAS) is the minimum ROAS you should aim to get to breakeven on the product."
					/>
					<NumberResult
						disabled={true}
						value={numbersBreakdown.profitMargin}
						title="Profit Margin"
						description="This is the profit margin you can expect after taking into account all the numbers in the “Numbers Breakdown”."
					/>
				</Flex>
			</Flex>
		</Modal>
	);
};
export default BreakDownModal;
