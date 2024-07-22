import { get, post } from "./baseApi";


const apiGetDataAds = async (dataPayLoad = {}) => {
	try {
		const headerPayloadSend = {
			...dataPayLoad,
		};
		const response = await post("/spy-ad/ads", headerPayloadSend);
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
