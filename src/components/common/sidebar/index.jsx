import { Divider, Flex, Layout, Menu } from "antd";
import {
	FilterOutlined,
	LaptopOutlined,
	NotificationOutlined,
	ProductOutlined,
	SearchOutlined,
	UserOutlined,
} from "@ant-design/icons";
import Logo from "../../../assets/layout/logo.png";
import facebook from "../../../assets/icons/facebook.svg";
import tiktok from "../../../assets/icons/tiktok.svg";
import tiktokads from "../../../assets/icons/tiktoks.svg";
import library from "../../../assets/icons/lib.svg";
import { extension } from "../../../utilities/extension/chrome";

const isDev = process.env.REACT_APP_ENV === "localhost";

function getLink(name = "product") 
{
	if (isDev) {
        return "";
    }
	return `chrome-extension://${extension.getId()}/pages/${name}.html`;
}

const menus = [
	{
		key: "product",
		label: <a href={getLink("product")}>Product Database</a>,
		url: getLink("product"),
		icon: <ProductOutlined style={{ fontSize: 18 }} />,
	},
	{
		key: "search_engine",
		label: "Search & save ads",
		icon: <FilterOutlined style={{ fontSize: 18 }} />,
		children: [
			{
				key: "facebook",
				label: "Facebook Ads Library",
				icon: <img alt="Youtube ads" width={18} src={facebook} />,
			},
			{
				key: "tiktok_creative",
				label: "Tiktok Creative Center",
				icon: <img alt="Youtube ads" width={18} src={tiktok} />,
			},
			{
				key: "tiktok_ads",
				label: "Tiktok Ads",
				icon: <img alt="Youtube ads" width={18} src={tiktokads} />,
			},
		],
	},
	{
		key: "competitor",
		label: <a href={getLink("competitor-research")}>Competitor Research</a>,
		url: getLink("competitor-research"),
		icon: <SearchOutlined style={{ fontSize: 18 }} />,
	},
];
const Sidebar = () => {
	return (
		<Layout.Sider
			theme="light"
			style={{
				overflow: "hidden",
				height: "100vh",
				position: "fixed",
				left: 0,
				top: 0,
				bottom: 0,
				paddingTop: 20,
			}}
			width={250}
		>
			<Flex align="center" justify="center">
				<img width={150} src={Logo} alt={"logo supper ads"} />
			</Flex>
			<Divider />
			<Menu
				mode="inline"
				defaultOpenKeys={["search_engine"]}
				style={{ height: "100%", borderRight: 0 }}
				items={menus}
			/>
			<div
				style={{
					position: "fixed",
					bottom: 0,
					height: 50,
					width: 250,
					background: "#002140",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<a
					style={{
						color: "white",
						fontWeight: "bold",
						textAlign: "center",
						display: "flex",
						alignItems: "center",
						gap: 10,
					}}
					href={getLink("my-library")}
				>
					<img width={24} alt="my library" src={library} />
					<span>My Library</span>
				</a>
			</div>
		</Layout.Sider>
	);
};
export default Sidebar;
