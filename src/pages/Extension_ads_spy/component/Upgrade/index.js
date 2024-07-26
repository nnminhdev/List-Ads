import { Button, Flex, Typography } from "antd";
import styles from "./style.module.scss";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const { Text } = Typography;
const UpgradeComponent = ({ setShowPopupUpgrades, display }) => {
	const [listDataPopup, setDataPopup] = useState({});
	const handleClickSahreGoToPremium = () => {
		const url = encodeURIComponent("https://spyads.com");
		const quote = encodeURIComponent("Đây là nội dung bài đăng");
		const hashtag = encodeURIComponent("#SpyAds");
		const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${quote}&hashtag=${hashtag}`;

		window.open(listDataPopup?.link || facebookShareUrl, "_blank");
	};
	useEffect(() => {
		const handleFetchDataPopup = async () => {
			try {
				const response = await fetch(`${process.env.REACT_APP_FETCH_DATA_POPUP}`);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				if (data?.length > 0) {
					const ArrayData = data.filter((item, index) => index !== 0);
					setDataPopup(ArrayData[Math.floor(Math.random() * ArrayData.length)]);
				}
			} catch (err) {
				console.log(err);
			}
		};
		handleFetchDataPopup();
	}, []);
	return (
		<div
			className={`${styles.upgrade}`}
			style={{
				display: display ? "block" : "none",
			}}
		>
			<Flex justify="end">
				<CloseCircleOutlined onClick={() => setShowPopupUpgrades(false)} />
			</Flex>
			<div
				style={
					{
						// marginTop: "20px",
					}
				}
			>
				<Text
					style={{
						fontWeight: "bold",
					}}
				>
					{listDataPopup?.title || "Upgrade To Premium For Free"}
				</Text>
				<br />
				<p
					style={{
						fontWeight: "400",
						marginTop: "10px",
					}}
				>
					{listDataPopup?.body ||
						"Share the Extension with public post mode to upgrade to Premium and receive unlimited search andmany other appealing features."}
				</p>
				<Button
					type="primary"
					style={{
						fontWeight: "500",
						marginTop: "10px",
					}}
					onClick={handleClickSahreGoToPremium}
				>
					{" "}
					Share to Premium
				</Button>
			</div>
		</div>
	);
};

export default UpgradeComponent;
