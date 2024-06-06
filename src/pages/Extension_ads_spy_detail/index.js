import AdAnalysisComponent from "./components/AdAnalysis";
import CreativeAnalysisComponent from "./components/CreativeAnalysis";
import DetailSpyComponent from "./components/DetailSpy";
import { detail } from "./constant";
import style from "./styles/style.module.scss";
const ExtensionAdsDetail = () => {
	return (
		<div className={`${style.detail__wrap}`}>
			<DetailSpyComponent dataDetail={detail} />
			<div className={style.title}>
				<p>Ad Analysis</p>
			</div>
			<AdAnalysisComponent />
			<div className={style.title}>
				<p>Creative Analysis</p>
			</div>
            <CreativeAnalysisComponent />
		</div>
	);
};

export default ExtensionAdsDetail;
