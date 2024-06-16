/*global chrome*/
import "./styles/globalStyle.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import ExtensionPopup from "./pages/Extension_popup";
import ExtensionOption from "./pages/Extension_option";
import ExtensionNewTab from "./pages/Extension_newtab";
import ExtensionInstallSuccess from "./pages/Extension_install_success";
import ExtensionUninstall from "./pages/Extension_uninstall";
import ExtensionAdsDetail from "./pages/Extension_ads_spy_detail";

// console.log = () => {}
const root = document.getElementById(`Oq465NRHaOKegSCssrnhCql2WEIDuYU0`);
if (root) {
	const dataComponent = root.dataset.component;
	const renderPage = (component) => {
		return ReactDOM.createRoot(root).render(<React.StrictMode>{component}</React.StrictMode>);
		// return ReactDOM.createRoot(root).render(<React.StrictMode>{<ExtensionOption />}</React.StrictMode>);
	};
	// renderPage();
	switch (dataComponent) {
		case "popup":
			renderPage(<ExtensionPopup />);
			break;
		case "option":
			renderPage(<ExtensionOption />);
			break;

		case "detail":
			renderPage(<ExtensionAdsDetail />);
			break;

		case "new_tab":
			renderPage(<ExtensionNewTab />);
			break;

		case "install_success":
			renderPage(<ExtensionInstallSuccess />);
			break;
		case "uninstall":
			renderPage(<ExtensionUninstall />);
			break;
		// case "product":
		// 	renderPage(<ExtensionProduct />);
		// 	break;
		// case "research":
		// 	renderPage(<ExtensionCompetitorResearch />);
		// 	break;

		default:
			//todo
			break;
	}
} else {
	// const extensionBox = document.createElement("div");
	// extensionBox.id = `${chrome.runtime.id}`;
	// const body = document.getElementsByTagName("body")[0];
	// body.append(extensionBox);
	// const extensionCodeRoot = ReactDOM.createRoot(extensionBox);
	// extensionCodeRoot.render(
	// 	<React.StrictMode>
	// 		{/* <Provider store={storeContent}> */}
	// 		{/* <ContentScript /> */}
	// 		{/* </Provider> */}
	// 	</React.StrictMode>
	// );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
