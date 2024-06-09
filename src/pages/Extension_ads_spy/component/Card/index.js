import { Card, Avatar, Typography, Button, Flex, Tooltip, Dropdown, Menu, Tag } from "antd";
import {
	EditOutlined,
	EllipsisOutlined,
	LikeFilled,
	LikeTwoTone,
	MessageFilled,
	MessageTwoTone,
	SettingOutlined,
} from "@ant-design/icons";

import "./index.scss";
import { useEffect, useState } from "react";
import { formatDateFromTimestamp } from "../../../../utilities/functions/datetime";
import { extension } from "../../../../utilities/extension/chrome";
const { Meta, Grid } = Card;
const { Title, Text } = Typography;

const menu = (
	<Menu>
		<Menu.Item key="1">Tùy chọn 1</Menu.Item>
		<Menu.Item key="2">Tùy chọn 2</Menu.Item>
		<Menu.Item key="3">Tùy chọn 3</Menu.Item>
	</Menu>
);
const CardAdsComponent = ({ dataComponentCard }) => {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	});

	const handleClickCard = () => {
		window.open(
			`/pages/detail.html?detail&id=${dataComponentCard.ad_key}&type=${dataComponentCard.type}&created_at=${dataComponentCard.created_at}&app_type=${dataComponentCard.app_type}`
		);
	};

	return (
		<Card
			className="custom-card"
			cover={<ImageCardComponent dataComponentCard={dataComponentCard} />}
			loading={isLoading}
			title={<TopCardComponent dataComponentCard={dataComponentCard} />}
			style={{
				width: "19%",
			}}
			bordered={true}
			// extra={
			// 	<Dropdown
			// 		overlay={menu}
			// 		trigger={["click"]}
			// 		style={{
			// 			marginTop: "20px",
			// 		}}
			// 	>
			// 		<Button type="text" icon={<EllipsisOutlined />} />
			// 	</Dropdown>
			// }
			onClick={() => handleClickCard()}
		>
			<div>
				<Flex justify="space-between" align="center">
					<Flex
						style={{
							fontSize: "12px",
						}}
						justify="start"
						gap={8}
					>
						<Flex justify="start" gap={2}>
							<LikeTwoTone size={12} />
							<p
								style={{
									paddingTop: "3px",
								}}
							>
								{dataComponentCard?.like_count}
							</p>
						</Flex>
						<Flex justify="start" gap={2}>
							<MessageTwoTone size={12} />
							<p
								style={{
									paddingTop: "3px",
								}}
							>
								{dataComponentCard?.comment_count}
							</p>
						</Flex>
						<Flex justify="start" gap={2}>
							<MessageTwoTone size={12} />
							<p
								style={{
									paddingTop: "3px",
								}}
							>
								{dataComponentCard?.share_count}
							</p>
						</Flex>
					</Flex>
					<p
						style={{
							fontSize: "12px",
						}}
					>
						{formatDateFromTimestamp(dataComponentCard?.created_at)}
					</p>
				</Flex>
				<Flex
					justify="space-between"
					style={{
						width: "100%",
						marginTop: "10px",
					}}
				>
					<p
						style={{
							fontWeight: "bold",
						}}
					>
						{dataComponentCard.advertiser_name}
					</p>
					{/* <span>{dataComponentCard.industry}</span> */}
					<Tag>{dataComponentCard.industry}</Tag>
				</Flex>
				<Flex
					justify="space-between"
					align="center"
					style={{
						marginTop: "10px",
					}}
				>
					<div
						style={{
							textAlign: "center",
						}}
					>
						<p
							style={{
								fontWeight: "500",
								fontSize: "12px",
							}}
						>
							{"Popularity"}
						</p>
						<p
							style={{
								fontSize: "12px",
								fontWeight: "normal",
							}}
						>
							{dataComponentCard?.heat}
						</p>
					</div>
					<div
						style={{
							textAlign: "center",
						}}
					>
						<p
							style={{
								fontWeight: "500",
								fontSize: "12px",
							}}
						>
							impression
						</p>
						<p
							style={{
								fontSize: "12px",
								fontWeight: "normal",
							}}
						>
							{dataComponentCard.impression}
						</p>
					</div>
					<div
						style={{
							textAlign: "center",
						}}
					>
						<p
							style={{
								fontWeight: "500",
								fontSize: "12px",
							}}
						>
							Duration
						</p>
						<p
							style={{
								fontSize: "12px",
								fontWeight: "normal",
							}}
						>
							{dataComponentCard.video_duration}
						</p>
					</div>
					<div
						style={{
							textAlign: "center",
						}}
					>
						<p
							style={{
								fontWeight: "500",
								fontSize: "12px",
							}}
						>
							Last Seen
						</p>
						<p
							style={{
								fontSize: "12px",
								fontWeight: "normal",
							}}
						>
							{dataComponentCard.last_seen}
						</p>
					</div>
				</Flex>
			</div>
		</Card>
	);
};

export default CardAdsComponent;

const TopCardComponent = ({ dataComponentCard }) => {
	return (
		<div>
			<Flex align="center" gap={5}>
				<Avatar src={dataComponentCard.logo_url} size={40} />
				<div>
					<p>{dataComponentCard.page_name}</p>
					<Flex></Flex>
				</div>
			</Flex>
			<Tooltip title={dataComponentCard.message} color={"#fff"}>
				<p className="single-line-text">{dataComponentCard.message}</p>
			</Tooltip>
		</div>
	);
};

const ImageCardComponent = ({ dataComponentCard }) => {
	return (
		<div
			style={{
				width: "100%",
				height: "300px",
				backgroundColor: "black",
			}}
		>
			<img
				alt=" card detail"
				title=" card"
				src={
					dataComponentCard?.preview_img_url
						? dataComponentCard?.preview_img_url
						: dataComponentCard?.resource_urls[0]
						? dataComponentCard?.resource_urls[0]?.image_url
						: ""
				}
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					transform: "none",
					display: "block",
					borderTopLeftRadius: "0px",
					borderTopRightRadius: "0px",
				}}
			/>
		</div>
	);
};
