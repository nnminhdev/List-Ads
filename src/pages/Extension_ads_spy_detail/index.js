/* global chrome */
import AdAnalysisComponent from "./components/AdAnalysis";
import CreativeAnalysisComponent from "./components/CreativeAnalysis";
import DetailSpyComponent from "./components/DetailSpy";
import { detail } from "./constant";
import style from "./styles/style.module.scss";
const ExtensionAdsDetail = () => {
	const shareFacebook = () => {
		// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		// 	var activeTab = tabs[0];
		// 	var url = activeTab.url;

		var facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
			window.location.href
		)}`;

		window.open(facebookShareUrl, "_blank", "width=600,height=400");
		// });
	};
	return (
		<div className={`${style.detail__wrap}`}>
			<DetailSpyComponent dataDetail={detail} />
			<div className={style.title}>
				<p>Ad Analysis</p>
			</div>
			<AdAnalysisComponent dataDateLine={detail?.date_line} />
			<div className={style.title}>
				<p>Creative Analysis</p>
			</div>
			<CreativeAnalysisComponent />
		</div>
	);
};

export default ExtensionAdsDetail;
