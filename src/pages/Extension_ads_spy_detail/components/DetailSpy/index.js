/* global chrome */
import { Avatar, Button, Carousel, Flex, Skeleton, Tooltip, Typography } from "antd";
import { getCode, getName } from "country-list";
import style from "./style.module.scss";
import { convertDateFormat, formatDateFromTimestamp } from "../../../../utilities/functions/datetime";
import { DownloadOutlined } from "@ant-design/icons";
import { checkPlatForm } from "../../../../utilities/functions/platform";
import { formatNumberToK } from "../../../../utilities/functions/number";
import iconCardShopDefault from "../../../../assets/cards/avtar_shop.png";

const { Text } = Typography;
const DetailSpyComponent = ({ dataDetail }) => {
	const handleClickLandingPage = () => {
		window.open(dataDetail?.store_url, "_blank");
	};

	const handleDownloadAsset = () => {
		console.log(dataDetail?.resource_urls[0]?.video_url);
		chrome.downloads.download({
			url:
				dataDetail?.resource_urls[0]?.type === 1
					? dataDetail?.resource_urls[0]?.image_url
					: dataDetail?.resource_urls[0]?.video_url,
			filename: dataDetail?.resource_urls[0]?.type === 1 ? `image.png` : `video.mp4`,
		});
	};
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
				<Avatar shape="square" size={64} src={dataDetail?.logo_url || iconCardShopDefault} />
				<div>
					<Typography
						style={{
							fontSize: "20px",
						}}
					>
						{dataDetail?.advertiser_name}
					</Typography>
					<Flex justify="start" align="center" gap={20}>
						<Typography>{dataDetail?.top_domain}</Typography>
						<Flex justify="start" gap={10} align="center">
							<Typography>Category:</Typography>
							<Typography>{dataDetail?.industry}</Typography>
						</Flex>
					</Flex>
				</div>
			</Flex>
			<Flex justify="space-between" gap={30}>
				<div
					style={{
						width: "60%",
					}}
				>
					<div>
						<Tooltip title={dataDetail?.message}>
							<Text style={{ width: "100%", display: "block" }} ellipsis>
								{dataDetail?.message}
							</Text>
						</Tooltip>
					</div>
					<div className={style.preview}>
						{dataDetail?.resource_urls ? (
							dataDetail?.resource_urls?.length === 1 ? (
								<div>
									{dataDetail?.resource_urls[0]?.type === 1 ? (
										<img
											src={dataDetail?.resource_urls[0]?.image_url}
											alt="url detail"
											style={{
												width: "400px",
												height: "auto",
												objectFit: "cover",
												maxHeight: "400px",
											}}
										/>
									) : (
										<video
											src={dataDetail?.resource_urls[0]?.video_url}
											alt="url detail"
											style={{
												width: "400px",
												height: "auto",
												objectFit: "cover",
											}}
											controls
										/>
									)}
								</div>
							) : (
								<Carousel
									arrows
									infinite={false}
									style={{
										width: "400px",
									}}
									arrowSize={32}
								>
									{dataDetail?.resource_urls?.map((item, index) => {
										return (
											<div key={index}>
												{item?.type === 1 ? (
													<img
														src={item?.image_url}
														alt="url detail"
														style={{
															width: "400px",
															height: "auto",
															objectFit: "cover",
														}}
													/>
												) : (
													<video
														src={item?.image_url}
														alt="url detail"
														style={{
															width: "400px",
															height: "auto",
															objectFit: "cover",
														}}
														controls
													/>
												)}
											</div>
										);
									})}
								</Carousel>
							)
						) : (
							<Skeleton.Image
								active={true}
								style={{
									width: "200px",
									height: "200px",
								}}
							/>
						)}
					</div>
					<Flex justify="space-between" align="center">
						<Text
							style={{ transition: "color 0.3s", cursor: "pointer", "&:hover": { color: "blue" } }}
							ellipsis
						>
							{dataDetail?.title}
						</Text>
						<Button onClick={handleClickLandingPage}>Landing Page</Button>
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
								padding: "20px 100px",
								borderBottom: "1px solid #eee",
							}}
						>
							<div className={style.item}>
								<p>{formatNumberToK(dataDetail?.impression)}</p>
								<p>Impression</p>
							</div>
							<div className={style.item}>
								<p>{formatNumberToK(dataDetail?.days_count)}</p>
								<p>Duration</p>
							</div>
							<div className={style.item}>
								<p>{formatNumberToK(dataDetail?.heat)}</p>
								<p>Popularity</p>
							</div>
						</Flex>
						<div className={style.detail__info__bottom}>
							<Flex justify="start" align="center" gap={20}>
								<p
									style={{
										fontWeight: "bold",
									}}
								>
									Duration:
								</p>
								<p
									style={{
										fontSize: "14px",
									}}
								>{`${convertDateFormat(dataDetail?.first_seen)} ~ ${convertDateFormat(
									dataDetail?.last_seen
								)}`}</p>
							</Flex>
							<Flex justify="start" align="center" gap={20} className={style.item__detail}>
								{dataDetail?.platform && (
									<>
										<p>NetWork:</p>
										<p>{checkPlatForm(dataDetail?.platform)}</p>
									</>
								)}
							</Flex>
							<Flex justify="start" align="center" gap={20} className={style.item__detail}>
								{dataDetail?.os && (
									<>
										<p>OS:</p>
										<p>{dataDetail?.os}</p>
									</>
								)}
							</Flex>
							<Flex justify="start" align="center" gap={20} className={style.item__detail}>
								{dataDetail?.relate_ads && (
									<>
										<p>Related Ads:</p>
										<p>{dataDetail?.relate_ads}</p>
									</>
								)}
							</Flex>
							<Flex justify="start" align="center" gap={20} className={style.item__detail}>
								{dataDetail?.countries?.length > 0 && (
									<>
										<p>Country/Region :</p>
										<p>{getName(dataDetail?.countries[0]) || dataDetail?.countries[0]}</p>
										<p>{dataDetail?.region}</p>
									</>
								)}
							</Flex>
							<Flex justify="start" align="center" gap={20} className={style.item__detail}>
								{dataDetail?.language && (
									<>
										<p>Language :</p>
										<p>{dataDetail?.language}</p>
									</>
								)}
							</Flex>
							<Flex justify="start" align="center" gap={20} className={style.item__detail}>
								<p>Size :</p>
								<p>{`${dataDetail?.ads_format}/${dataDetail?.ad_width} * ${dataDetail?.ad_height}`}</p>
							</Flex>
							<Flex justify="start" align="center" gap={20} className={style.item__detail}>
								{dataDetail?.type && (
									<>
										<p>Type :</p>
										<p>{dataDetail?.type}</p>
									</>
								)}
							</Flex>
							<Flex justify="start" align="center" gap={20} className={style.item__detail}>
								{dataDetail?.page_id && (
									<>
										<p>Page ID :</p>
										<p
											style={{
												color: "blue",
											}}
										>
											{dataDetail?.page_id}
										</p>
									</>
								)}
							</Flex>
							<Flex justify="start" align="center" gap={20} className={style.item__detail}>
								{dataDetail?.page_name && (
									<>
										<p>Page Name :</p>
										<p>{dataDetail?.page_name}</p>
									</>
								)}
							</Flex>
							{dataDetail?.source_url && (
								<Flex justify="start" align="center" gap={20} className={style.item__detail}>
									<p>Original Post :</p>
									<a href={dataDetail?.source_url} style={{ textDecoration: "none" }} target="_blank">
										{dataDetail?.source_url}
									</a>
								</Flex>
							)}

							{/* <Flex justify="start" align="center" gap={20} className={style.item__detail}>
								<p>Engagement :</p>
								<p>11111</p>
							</Flex> */}
						</div>
					</div>
					<div>
						<Button type="primary" icon={<DownloadOutlined />} size={32} onClick={handleDownloadAsset}>
							Download
						</Button>
					</div>
				</div>
			</Flex>
		</div>
	);
};

export default DetailSpyComponent;
