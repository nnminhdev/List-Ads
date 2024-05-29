import iconShopify from "../../../assets/inputs/icon_shopify.png";
import iconMagento from "../../../assets/platform/magento.png";
import iconShoplaza from "../../../assets/platform/shoplaza.png";
import iconShopLine from "../../../assets/platform/shopline.png";
import iconShoppy from "../../../assets/platform/shoppy.png";
import iconSquare from "../../../assets/platform/square.png";
import iconAll from "../../../assets/platform/WindowsLogo.png";
import iconWix from "../../../assets/platform/wix.png";
import iconWoo from "../../../assets/platform/woo.png";
import iconYoutubeAds from "../../../assets/platform/youtube.png";
import iconFacebook from "../../../assets/platform/fb-icon.png";
import iconTiktok from "../../../assets/platform/icon_tiktok.png";
const dataListPlatform = [
	{
		platform: "All",
		icon: iconAll,
	},
	{
		platform: "Shopify",
		icon: iconShopify,
	},
	{
		platform: "Woo Commerce",
		icon: iconWoo,
	},
	{
		platform: "Shoplazza",
		icon: iconShoplaza,
	},
	{
		platform: "Wix",
		icon: iconWix,
	},
	{
		platform: "Shopline",
		icon: iconShopLine,
	},
	{
		platform: "Squarespace",
		icon: iconSquare,
	},
	{
		platform: "Shopyy",
		icon: iconShoppy,
	},
	{
		platform: "Magento",
		icon: iconMagento,
	},
];

const dataListPlatformSearchAndSave = [
	{
		platform: "Youtube Ads",
		icon: iconYoutubeAds,
		link: "https://adstransparency.google.com/advertiser/AR16446231045482741761?region=anywhere",
	},
	{
		platform: "Facebook Ads Library",
		icon: iconFacebook,
		link: "https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=ALL&q=trending%20product&sort_data[direction]=desc&sort_data[mode]=relevancy_monthly_grouped&search_type=keyword_unordered&media_type=all",
	},
	{
		platform: "TikTok Creative Center",
		icon: iconTiktok,
		link: "https://ads.tiktok.com/business/creativecenter/inspiration/topads/pc/en?period=30&region=US",
	},
	{
		platform: "TikTok Ads Library",
		icon: iconTiktok,
		link: "https://library.tiktok.com/ads?region=all&start_time=1664557200000&end_time=1712737716505&adv_name=&adv_biz_ids=&query_type=&sort_type=last_shown_date,desc",
	},
];

const Period = [
	{
		title: "All time",
	},
	{
		title: "Last 7 days",
	},
	{
		title: "Last 30 days",
	},
	{
		title: "Custom More",
	},
];

const selectGroup = [
	{
		title: "Library",
		id: 1,
	},
];

const ListMediaType = ["All", "Video", "Audio"];
export { dataListPlatform, ListMediaType, Period, selectGroup, dataListPlatformSearchAndSave };
