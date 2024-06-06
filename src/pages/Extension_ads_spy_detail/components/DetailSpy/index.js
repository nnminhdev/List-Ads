import { Avatar, Button, Flex, Tooltip, Typography } from "antd";
import style from "./style.module.scss";
import { formatDateFromTimestamp } from "../../../../utilities/functions/datetime";
import { DownloadOutlined } from "@ant-design/icons";
const DetailSpyComponent = ({ dataDetail }) => {
	return (
		<div className={style.detail__wrapper}>
			<Flex
				align="center"
				justify="start"
				gap={20}
				style={{
					marginBottom: "20px",
				}}
			>
				<Avatar shape="square" size={64} src={dataDetail?.logo_url} />
				<Typography
					style={{
						fontSize: "20px",
					}}
				>
					{dataDetail?.advertiser_name}
				</Typography>
			</Flex>
			<Flex justify="space-between" gap={30}>
				<div
					style={{
						width: "60%",
					}}
				>
					<div>
						<Tooltip title={dataDetail?.message}>
							<Typography style={{ width: "100%", display: "block" }} ellipsis>
								{dataDetail?.message}
							</Typography>
						</Tooltip>
					</div>
					<div className={style.preview}>
						<img
							src={dataDetail?.preview_img_url}
							alt="url detail"
							style={{
								width: "400px",
								height: "auto",
								objectFit: "cover",
							}}
						/>
					</div>
					<Flex justify="space-between" align="center">
						<Typography>{dataDetail?.title}</Typography>
						<Button>Landing Page</Button>
					</Flex>
				</div>
				<div
					style={{
						width: "40%",
					}}
				>
					<Button type="primary">Ad Details</Button>
					<div className={style.detail__info}>
						<Flex
							justify="space-between"
							align="center"
							style={{
								padding: "20px 50px",
								borderBottom: "1px solid #eee",
							}}
						>
							<div className={style.item}>
								<p>4.2K</p>
								<p>Impressions</p>
							</div>
							<div className={style.item}>
								<p>4.2K</p>
								<p>Impressions</p>
							</div>
							<div className={style.item}>
								<p>4.2K</p>
								<p>Impressions</p>
							</div>
						</Flex>
						<div className={style.detail__info__bottom}>
							<Flex justify="start" align="center" gap={20}>
								<p>Duration:</p>
								<p>
									`${dataDetail?.first_seen}-${dataDetail?.last_seen}`
								</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>NetWork:</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>OS:</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Related Ads:</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Country/Region :</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Language :</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Size :</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Type :</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Page ID :</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Page Name :</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Original Post :</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Engagement :</p>
								<p>11111</p>
							</Flex>
						</div>
					</div>
					<div>
						<Button type="primary" icon={<DownloadOutlined />} size={32}>
							Download
						</Button>
					</div>
				</div>
			</Flex>
		</div>
	);
};

export default DetailSpyComponent;
