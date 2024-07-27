/* global chrome */
import { convertBlobToBase64 } from "../utilities/extension/download";
chrome.action.onClicked.addListener((tab) => chrome.runtime.openOptionsPage());

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.message === "download-image") {
		fetch(request.data)
			.then((response) => {
				if (!response.ok) throw new Error("Network response was not ok");
				return response.blob();
			})
			.then(async (blob) => {
				sendResponse({
					code: 1,
					data: await convertBlobToBase64(blob),
				});
			})
			.catch((error) => {
				console.error("Fetch error:", error);
				sendResponse({
					code: 0,
				});
			});
		return true;
	}
});

const handleDownloadVideos = (urlVideoDownload, fileName) => {
    console.log(`Downloading ${urlVideoDownload}`, fileName);
	chrome.declarativeNetRequest.updateDynamicRules(
		{
			addRules: [
				{
					id: 2,
					priority: 1,
					action: {
						type: "modifyHeaders",
						responseHeaders: [
							{
								header: "Content-Disposition",
								operation: "set",
								value: 'attachment; filename="' + fileName + '"',
							},
						],
					},
					condition: { urlFilter: urlVideoDownload, resourceTypes: ["main_frame"] },
				},
			],
			removeRuleIds: [2],
		},
		() => {
			chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
				if (!tabs || !tabs.length) {
				
					return 0;
				}
				chrome.tabs.update(tabs[0].id, { url: urlVideoDownload, active: false }, function (tab) {
					setTimeout(() => {
					
						chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: [2] });
					}, 2000);
				});
			});
		}
	);
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	const onHeadersReceivedListener = function (details) {
		if (details.statusCode === 302) {
			const redirectURL = details.responseHeaders.find(
				(header) => header.name.toLowerCase() === "location"
			).value;
			handleDownloadVideos(redirectURL, `${request?.fileName || 'video'}.mp4`);
			// Gỡ bỏ bộ lắng nghe 'onHeadersReceived' sau khi xử lý
			chrome.webRequest.onHeadersReceived.removeListener(onHeadersReceivedListener);
		}
	};
	if (request.message === "download-video-library") {
		chrome.webRequest.onHeadersReceived.addListener(
            onHeadersReceivedListener,
            { urls: ["<all_urls>"] },
            ["responseHeaders"]
        );
		fetch(request.data)
			.then((response) => {
				if (response.ok) {
					const redirectURL = response.headers.get("location");
				} else {
					console.error("Failed to fetch:", response.status);
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
});
