import { Flex, Layout } from "antd";
import { DefaultLayout } from "../../components/layouts/options";
import ExtensionProduct from "../Extension_product";
import ExtensionCompetitorResearch from "../Extension_competitor_research";
import AdsSpyComponent from "../Extension_ads_spy";
import { useState } from "react";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
	textAlign: "center",
	color: "#fff",
	height: 64,
	paddingInline: 48,
	lineHeight: "64px",
	backgroundColor: "#4096ff",
};

const ExtensionOption = () => {
	const [indexMenu, setIndexMenu] = useState(1);
	const renderComponent = (keyMenu) => {
		const conditionComponent = {
			1: <AdsSpyComponent />,
			2: <ExtensionProduct />,
			3: <ExtensionCompetitorResearch />,
		};
		return conditionComponent[keyMenu] || <ExtensionProduct />;
	};
	return (
		<>
			<DefaultLayout setIndexMenu={setIndexMenu}>
				<div>{renderComponent(indexMenu)}</div>
			</DefaultLayout>
		</>
	);
};
export default ExtensionOption;
