import { get } from "./baseApi";

const headerPayload = {
	favorite_app_flag: 0,
	ecom_category: "",
	search_type: 1,
	platform: "",
	category: "",
	tag_ids: "",
	ad_positions: "",
	ads_ai_category: "",
	video_duration_type: "",
	os: 0,
	ads_promote_type: 0,
	geo: "",
	exclude_geo: "",
	audience_sex: "",
	audience_age: "",
	game_play: "",
	game_style: "",
	type: 0,
	page: 1,
	industry: 3,
	language: "",
	keyword: "",
	sort_field: "first_seen",
	region: "",
	seen_begin: 1709744400,
	seen_end: 1717520399,
	original_flag: 0,
	is_preorder: "",
	resume_or_new_ads: "",
	is_real_person: 0,
	theme: "",
	text_md5: "",
	ads_size: 0,
	size: 60,
	ads_format: 0,
	exclude_keyword: "",
	cod_flag: 0,
	is_theater: 0,
	is_ai_app: 0,
	landing_page: 0,
	cta_type: 0,
	new_ads_flag: 0,
	like_begin: "",
	like_end: "",
	comment_begin: "",
	comment_end: "",
	share_begin: "",
	share_end: "",
	position: 0,
	is_hide_advertiser: 0,
	advertiser_key: "",
	dynamic: 0,
	shopping: 0,
	duplicate: 0,
	software_types: "",
	ecom_types: "",
	social_account: "",
	modules: "ecomad",
	page_id: "",
	landing_type: 0,
	is_first: 1,
	page_load_more: 1,
	source_app: "",
	redirect_filter_type: "",
};

const apiGetDataAds = async (dataPayLoad = {}) => {
	try {
		const headerPayloadSend = {
			...headerPayload,
			...dataPayLoad,
		};
		const response = await get("/ecom/get-ecom-ads", headerPayloadSend);
		return response?.data;
	} catch (err) {
		console.error(err);
	}
};

const apiGetDataAdsDetail = async (dataPayLoad = {}) => {
	try {
		const headerPayloadSend = {
			...dataPayLoad,
		};
		const response = await get("/ecom/get-ecom-detail", headerPayloadSend);
		return response?.data?.data;
	} catch (err) {
		console.log(err);
	}
};

const apiGetDataAdsAnalysis = async (dataPayLoad = {}) => {
	try {
		const headerPayloadSend = {
			...dataPayLoad,
		};
		const response = await get("/ecom/get-ecom-more-detail", headerPayloadSend);
		return response?.data?.data;
	} catch (err) {
		console.log(err);
	}
};

const apiGetDataAdsAnalysisInfo = async (dataPayLoad = {}) => {
	try {
		const headerPayloadSend = {
			...dataPayLoad,
		};
		const response = await get("/material-analysis/get-analysis-info", headerPayloadSend);
		return response?.data?.data;
	} catch (err) {
		console.log(err);
	}
};

const apiGetRelatedAds = async (dataPayload = {}) => {
	try {
		const headerPayloadSend = {
			...dataPayload,
		};
		const response = await get("/material-analysis/get-related-ads", headerPayloadSend);
		return response?.data?.data;
	} catch (err) {
		console.log(err);
	}
};

const apiGetMaterialAnalysis = async (dataPayload = {}) => {
	try {
		const headerPayloadSend = {
			...dataPayload,
		};
		const response = await get("/material-analysis/get-related-advertisers", headerPayloadSend);
		return response?.data?.data;
	} catch (err) {
		console.log(err);
	}
};

export {
	apiGetDataAds,
	apiGetDataAdsDetail,
	apiGetDataAdsAnalysis,
	apiGetDataAdsAnalysisInfo,
	apiGetRelatedAds,
	apiGetMaterialAnalysis,
};
