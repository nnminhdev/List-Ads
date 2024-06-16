/* global chrome */
import { useEffect, useLayoutEffect, useState } from "react";
import AdAnalysisComponent from "./components/AdAnalysis";
import CreativeAnalysisComponent from "./components/CreativeAnalysis";
import DetailSpyComponent from "./components/DetailSpy";
import { detail } from "./constant";
import style from "./styles/style.module.scss";
import {
	apiGetDataAdsAnalysis,
	apiGetDataAdsAnalysisInfo,
	apiGetDataAdsDetail,
	apiGetMaterialAnalysis,
	apiGetRelatedAds,
} from "../../services/api/ads";
import DefaultLayoutDetail from "../../components/layouts/detail/DefaultLayout";
import { Button, Flex } from "antd";
import { LeftCircleTwoTone } from "@ant-design/icons";
const ExtensionAdsDetail = () => {
	const [dataAdsDetail, setDataAdsDetail] = useState(detail);
	const [dataAdsDetailMoreDetail, setDataAdsDetailMoreDetail] = useState();
	const [dataAdsAnalysisInfo, setDataAdsDetailAnalysisInfo] = useState();
	const [dataRelatedAdvertisers, setDataRelatedAdvertisers] = useState();
	const [dataRelatedAds, setDataRelatedAds] = useState();
	const [materialId, setMaterialId] = useState(null);

	const urlParams = new URLSearchParams(window.location.search);

	useEffect(() => {
		const handleFetchApiGetDetailAds = async () => {
			const responseFromApiGetDetailAds = await apiGetDataAdsDetail({
				ad_key: urlParams.get("id"),
				industry: urlParams.get("app_type"),
				created_at: urlParams.get("created_at"),
			});
			if (responseFromApiGetDetailAds) {
				setDataAdsDetail(responseFromApiGetDetailAds);
				setMaterialId(responseFromApiGetDetailAds?.material_id);
			}
		};

		const handleFetchApiGetDetailAdsMore = async () => {
			const responseFromApiGetDetailAdsMore = await apiGetDataAdsAnalysis({
				creative_key: urlParams.get("id"),
				industry: urlParams.get("app_type"),
			});
			if (responseFromApiGetDetailAdsMore) setDataAdsDetailMoreDetail(responseFromApiGetDetailAdsMore);
		};

		handleFetchApiGetDetailAds();
		handleFetchApiGetDetailAdsMore();
	}, []);
	useEffect(() => {
		const handleFetchApiGetDetailAdsAnalysisInfo = async () => {
			const responseFromApiGetDetailAdsAnalysisInfo = await apiGetDataAdsAnalysisInfo({
				material_id: materialId,
				app_type: urlParams.get("app_type"),
				created_at: urlParams.get("created_at"),
			});
			if (responseFromApiGetDetailAdsAnalysisInfo) {
				setDataAdsDetailAnalysisInfo(responseFromApiGetDetailAdsAnalysisInfo);
			}
		};

		const handleFetchApiGetRelatedAds = async () => {
			const responseFromApiGetRelatedAds = await apiGetRelatedAds({
				material_id: materialId,
				page: urlParams.get("page") || 1,
				ad_key: urlParams.get("id"),
				created_at: urlParams.get("created_at"),
				app_type: urlParams.get("type"),
			});
			if (responseFromApiGetRelatedAds) setDataRelatedAds(responseFromApiGetRelatedAds);
		};

		const handleFetchApiGetRelatedAdvertisers = async () => {
			const responseFromApiGetRelatedAdvertisers = await apiGetMaterialAnalysis({
				material_id: materialId,
				page: urlParams.get("page") || 1,
				ad_key: urlParams.get("id"),
				created_at: urlParams.get("created_at"),
				app_type: urlParams.get("type"),
			});
			if (responseFromApiGetRelatedAdvertisers) setDataRelatedAdvertisers(responseFromApiGetRelatedAdvertisers);
		};

		if (materialId) {
			handleFetchApiGetDetailAdsAnalysisInfo();
			handleFetchApiGetRelatedAds();
			handleFetchApiGetRelatedAdvertisers();
		}
	}, [materialId]);
	return (
		// <DefaultLayoutDetail>
		<div className={`${style.detail__wrap}`}>
			<Flex
				justify="end"
				gap={5}
				style={{
					marginBottom: "20px",
				}}
			>
				<LeftCircleTwoTone />
				<a href="/pages/option.html">Back To Home</a>
			</Flex>
			<DetailSpyComponent dataDetail={dataAdsDetail} />
			<div className={style.title}>
				<p>Ad Analysis</p>
			</div>
			<AdAnalysisComponent
				dataDateLine={detail?.date_line}
				dataCountryDistribution={dataAdsDetailMoreDetail}
				dataAdsDetailMoreDetail={dataAdsDetailMoreDetail}
			/>
			<div className={style.title}>
				<p>Creative Analysis</p>
			</div>
			<CreativeAnalysisComponent dataAdsAnalysisInfo={dataAdsAnalysisInfo} dataRelatedAds={dataRelatedAds} />
		</div>
		// </DefaultLayoutDetail>
	);
};

export default ExtensionAdsDetail;
