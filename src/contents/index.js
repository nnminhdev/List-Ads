/*global chrome */
import { useEffect } from "react";
import DefaultContent from "./default";
import FacebookComponent from "./www.facebook.com";

const ContentScript = () => {
	const location = window.location.origin;

	useEffect(() => {
		const facebookDomScript = document.createElement("script");
		facebookDomScript.src = chrome.runtime.getURL("library/ads-fb-library.js");
		(document.head || document.documentElement).appendChild(facebookDomScript);
	}, []);

	const renderComponent = (location) => {
		switch (location) {
			case "https://www.facebook.com":
				return <FacebookComponent />;
			default:
				return;
		}
	};
	return (
		<>
			<DefaultContent />
			{renderComponent(location)}
		</>
	);
};

export default ContentScript;
