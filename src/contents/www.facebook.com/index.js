import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import styles from "./style.module.scss";
import ButtonSaveAds from "../../components/common/buttons/ButtonSaveAds";
import { chromeStorage } from "../../utilities/extension/storage";
import { handleDownloadImage } from "../../utilities/functions/download";
const FacebookComponent = () => {
	const [dataAdsFacebook, setDataAdsFacebook] = useState([]);
	const url = window.location.href;

	useEffect(() => {
	}, [dataAdsFacebook]);
	const handleClickSave = async (e) => {
		e.preventDefault();
		const idSelect = e.target.getAttribute("data-id") || e.target.parentNode.getAttribute("data-id");

		if (idSelect) {
			const getDataFromStorage = await chromeStorage.get("dataAdsFacebook");
			const dataSaved = getDataFromStorage && getDataFromStorage.find((item) => item.adArchiveID === idSelect);

			if (dataSaved) {
				console.log("dataSaved", dataSaved);
				const dataSaveToLocal = dataSaved.snapshot;
				const dataGroups = {
					id: dataSaveToLocal?.adCreativeId,
					type: 1,
					video_url:
						dataSaveToLocal?.videos?.length > 0
							? dataSaveToLocal?.videos[0]?.video_sd_url || dataSaveToLocal?.videos[0]?.video_hd_url
							: (dataSaveToLocal?.cards && dataSaveToLocal?.cards[0]?.original_image_url) ||
							  (dataSaveToLocal?.cards && dataSaveToLocal?.cards[0]?.video_sd_url) ||
							  (dataSaveToLocal?.images && dataSaveToLocal?.images[0]?.original_image_url),
					title_card: dataSaveToLocal?.pageName || "Facebook Ads",
				};
				handleDownloadImage({ ...dataSaveToLocal, ...dataGroups });
			}
		}
	};

	useEffect(() => {
		window.addEventListener(
			"message",
			(event) => {
				if (event?.data?.action === "fbAdData")
					if (event?.data?.adJsons) {
						setDataAdsFacebook(JSON.parse(event.data.adJsons));
						chromeStorage.set("dataAdsFacebook", JSON.parse(event.data.adJsons));
					}
			},
			false
		);
		return () => window.removeEventListener("message", () => {});
	}, []);
	useEffect(() => {
		const checkLengthElement = document.querySelectorAll("._7jvw");
		const numberDiff = dataAdsFacebook.length - checkLengthElement?.length;
		let IdInterval;

		IdInterval = setInterval(() => {
			const ElementCard = document.querySelectorAll("._7jvw");
			const lengthElement = [...ElementCard];
			lengthElement.forEach((element, i) => {
				const newSibling = document.createElement("div");
				newSibling.id = "icon-supper-ads";
				newSibling.style = "width: 100%";
				const adId =
					(element && element.querySelector("hr").getAttribute("data-id")) ||
					dataAdsFacebook[i + numberDiff]?.adArchiveID;
				newSibling.setAttribute("data-id", adId);
				let conditionCheckAddDom = false;
				const conditionCheck = element.children[2].getAttribute("id") === "icon-supper-ads";
				const listElementChildren = element.children;
				const childArray = Array.from(listElementChildren);
				childArray.forEach((child) => {
					if (child && child.getAttribute("id") === "icon-supper-ads") {
						conditionCheckAddDom = true;
						child.setAttribute("data-id", adId);
						child.querySelector(".css-j9bb5n") &&
							child.querySelector(".css-j9bb5n").setAttribute("data-id", adId);
						child.querySelector("path") && child.querySelector("path").setAttribute("data-id", adId);
					}
				});
				if (!conditionCheckAddDom) {
					const referenceElement = element?.children[1];
					referenceElement.parentNode.insertBefore(newSibling, referenceElement);
					const extensionCodeRoot = ReactDOM.createRoot(newSibling);
					extensionCodeRoot.render(
						<div className={styles.group_lib}>
							<ButtonSaveAds
								textButton={"Save to Ads Library"}
								onClickButton={handleClickSave}
								idData={adId}
								styleCustom={{
									fontSize: "14px",
									fontFamily: "Inter !important",
									FontWeight: "600",
									marginTop: "10px",
								}}
							/>
						</div>
					);
				}
			});
		}, 1000);

		return () => clearInterval(IdInterval);
	}, [url, dataAdsFacebook]);

	return <div></div>;
};

export default FacebookComponent;
