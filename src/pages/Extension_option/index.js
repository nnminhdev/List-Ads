import { useEffect, useState } from "react";

import { DefaultLayout } from "../../components/layouts/options";
import ExtensionProduct from "../Extension_product";
import ExtensionCompetitorResearch from "../Extension_competitor_research";
import AdsSpyComponent from "../Extension_ads_spy";
import ExtensionAdsDetail from "../Extension_ads_spy_detail";
import UpgradeComponent from "../Extension_ads_spy/component/Upgrade";

const ExtensionOption = () => {
	const [indexMenu, setIndexMenu] = useState(1);
	const [isShowPopupUpgrades, setShowPopupUpgrades] = useState(false);

	const renderComponent = (keyMenu) => {
		const conditionComponent = {
			1: <AdsSpyComponent />,
			2: <ExtensionProduct />,
			3: <ExtensionCompetitorResearch />,
			4: <ExtensionAdsDetail />,
		};
		return conditionComponent[keyMenu] || <ExtensionProduct />;
	};

	const queryString = window.location.search;
	useEffect(() => {
		const urlParams = new URLSearchParams(queryString);
		if (urlParams.get("detail")) {
			setIndexMenu(4);
		}
	}, [queryString]);

	useEffect(() => {
		const intervalId = setTimeout(() => {
			setShowPopupUpgrades(true);
		}, 1000 * 60);
		return () => {
			clearInterval(intervalId);
		};
	}, []);
	return (
		<>
			<DefaultLayout setIndexMenu={setIndexMenu}>
				<div>{renderComponent(indexMenu)}</div>
				<UpgradeComponent setShowPopupUpgrades={setShowPopupUpgrades} display={isShowPopupUpgrades} />
			</DefaultLayout>
		</>
	);
};
export default ExtensionOption;
