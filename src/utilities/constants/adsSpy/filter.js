import FacebookIcon from "../../../assets/platform/facebook-icon.svg";
import InstagramIcon from "../../../assets/platform/instagram-icon.svg";
import TwitterIcon from "../../../assets/platform/x-icon.svg";
import TikTokIcon from "../../../assets/icons/tiktok_search.svg";
import SelectAllIcon from '../../../assets/platform/all.png';

const listFilterNetworks = [
	{
		platForm: "All Networks",
		icon: SelectAllIcon,
		value: 1,
	},
	{
		platForm: "Facebook",
		icon: FacebookIcon,
		value: 1,
	},
	{
		platForm: "Instagram",
		icon: InstagramIcon,
		value: 5,
	},
	{
		platForm: "Twitter",
		icon: TwitterIcon,
		value: 2,
	},
	{
		platForm: "TikTok",
		icon: TikTokIcon,
		value: 1,
	},
];

export { listFilterNetworks };
