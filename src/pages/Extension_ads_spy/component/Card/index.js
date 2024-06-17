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
import iconCardShopDefault from "../../../../assets/cards/avtar_shop.png";
import iconShare from "../../../../assets/icons/share.svg";
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

	const handleClickCard = (dataComponentCard) => {
		const urlRedirect = dataComponentCard?.domain
			? `https://${dataComponentCard.domain}`
			: `/pages/option.html?detail=1&id=${dataComponentCard.ad_key}&type=${dataComponentCard.type}&created_at=${dataComponentCard.created_at}&app_type=${dataComponentCard.app_type}`;
		window.open(urlRedirect, "_blank");
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
			onClick={() => handleClickCard(dataComponentCard)}
		>
			<div>
				{dataComponentCard?.domain ? (
					<Typography>{dataComponentCard?.domain}</Typography>
				) : (
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
								<img alt="icon share" src={iconShare} width={12} size={12} />
								<p
									style={{
										paddingTop: "3px",
									}}
								>
									{dataComponentCard?.share_count}
								</p>
							</Flex>
						</Flex>
						{dataComponentCard?.created_at && (
							<p
								style={{
									fontSize: "12px",
								}}
							>
								{formatDateFromTimestamp(dataComponentCard?.created_at)}
							</p>
						)}
					</Flex>
				)}
				<Flex
					justify="space-between"
					style={{
						width: "100%",
						marginTop: "10px",
					}}
					align="center"
				>
					<p
						style={{
							fontWeight: "bold",
							width: "60%",
							fontSize: "13px",
						}}
						className={`text-ellipsis`}
					>
						{dataComponentCard.advertiser_name || dataComponentCard?.title}
					</p>
					{/* <span>{dataComponentCard.industry}</span> */}
					<Tag>{dataComponentCard?.call_to_action_type || "Landing Page"}</Tag>
				</Flex>
				{!dataComponentCard?.domain && (
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
				)}
			</div>
		</Card>
	);
};

export default CardAdsComponent;

const TopCardComponent = ({ dataComponentCard }) => {
	return (
		<div>
			<Flex align="center" gap={5}>
				<Avatar src={dataComponentCard.logo_url || iconCardShopDefault} size={40} shape="circle" />
				<div
					style={{
						width: "80%",
					}}
				>
					<p
						className="single-line-ellipsis"
						style={{
							fontSize: "14px",
						}}
					>
						{dataComponentCard?.page_name || dataComponentCard?.advertiser_name}
					</p>
					<Flex></Flex>
				</div>
			</Flex>
			<Tooltip title={dataComponentCard.message} color={"#fff"}>
				<p
					className="single-line-ellipsis"
					style={{
						fontSize: "14px",
						fontWeight: "500",
						marginTop: "5px",
					}}
				>
					{dataComponentCard.message}
				</p>
			</Tooltip>
		</div>
	);
};

const ImageCardComponent = ({ dataComponentCard }) => {
	return (
		<div
			style={{
				backgroundColor: "black",
			}}
			className={"image-card"}
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
