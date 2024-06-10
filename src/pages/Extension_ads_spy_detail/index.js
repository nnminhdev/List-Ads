/* global chrome */
import { useEffect, useLayoutEffect, useState } from "react";
import AdAnalysisComponent from "./components/AdAnalysis";
import CreativeAnalysisComponent from "./components/CreativeAnalysis";
import DetailSpyComponent from "./components/DetailSpy";
import { detail } from "./constant";
import style from "./styles/style.module.scss";
import { apiGetDataAdsAnalysis, apiGetDataAdsAnalysisInfo, apiGetDataAdsDetail } from "../../services/api/ads";
import DefaultLayoutDetail from "../../components/layouts/detail/DefaultLayout";
const ExtensionAdsDetail = () => {
	const [dataAdsDetail, setDataAdsDetail] = useState(detail);
	const [dataAdsDetailMoreDetail, setDataAdsDetailMoreDetail] = useState();
	const [dataAdsAnalysisInfo, setDataAdsDetailAnalysisInfo] = useState();

	const urlParams = new URLSearchParams(window.location.search);
	console.log("detail ===========>", urlParams, urlParams.get("id"));

	useEffect(() => {
		console.log("call api detail");
		const handleFetchApiGetDetailAds = async () => {
			const responseFromApiGetDetailAds = await apiGetDataAdsDetail({
				ad_key: urlParams.get("id"),
				industry: urlParams.get("app_type"),
				created_at: urlParams.get("created_at"),
			});
			console.log("responseFromApiGetDetailAds", responseFromApiGetDetailAds);
			if (responseFromApiGetDetailAds) setDataAdsDetail(responseFromApiGetDetailAds);
		};

		const handleFetchApiGetDetailAdsMore = async () => {
			const responseFromApiGetDetailAdsMore = await apiGetDataAdsAnalysis({
				creative_key: urlParams.get("id"),
				industry: urlParams.get("app_type"),
			});
			console.log("responseFromApiGetDetailAdsMore", responseFromApiGetDetailAdsMore);
			if (responseFromApiGetDetailAdsMore) setDataAdsDetailMoreDetail(responseFromApiGetDetailAdsMore);
		};

		const handleFetchApiGetDetailAdsAnalysisInfo = async () => {
			const responseFromApiGetDetailAdsAnalysisInfo = await apiGetDataAdsAnalysisInfo({
				creative_key: urlParams.get("id"),
				industry: urlParams.get("app_type"),
			});
			console.log("responseFromApiGetDetailAdsAnalysisInfo", responseFromApiGetDetailAdsAnalysisInfo);
			if (responseFromApiGetDetailAdsAnalysisInfo)
				setDataAdsDetailAnalysisInfo(responseFromApiGetDetailAdsAnalysisInfo);
		};

		handleFetchApiGetDetailAds();
		handleFetchApiGetDetailAdsMore();
		handleFetchApiGetDetailAdsAnalysisInfo();
	}, []);
	useLayoutEffect(() => {
		const handleFetchApiGetDetailAdsAnalysisInfo = async () => {
			const responseFromApiGetDetailAdsAnalysisInfo = await apiGetDataAdsAnalysisInfo({
				material_id: urlParams.get("id"),
				app_type: urlParams.get("app_type"),
				created_at: urlParams.get("created_at"),
			});
			console.log("responseFromApiGetDetailAdsAnalysisInfo", responseFromApiGetDetailAdsAnalysisInfo);
			if (responseFromApiGetDetailAdsAnalysisInfo)
				setDataAdsDetailAnalysisInfo(responseFromApiGetDetailAdsAnalysisInfo);
		};
		handleFetchApiGetDetailAdsAnalysisInfo();
	}, []);
	return (
		<DefaultLayoutDetail>
			<div className={`${style.detail__wrap}`}>
				<DetailSpyComponent dataDetail={dataAdsDetail} />
				<div className={style.title}>
					<p>Ad Analysis</p>
				</div>
				<AdAnalysisComponent
					dataDateLine={detail?.date_line}
					dataCountryDistribution={dataAdsDetailMoreDetail}
				/>
				<div className={style.title}>
					<p>Creative Analysis</p>
				</div>
				<CreativeAnalysisComponent dataAdsAnalysisInfo={dataAdsAnalysisInfo} />
			</div>
		</DefaultLayoutDetail>
	);
};

export default ExtensionAdsDetail;
