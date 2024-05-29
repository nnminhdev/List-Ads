/*global chrome*/
const env = process.env.REACT_APP_ENV;
const rootLink = process.env.REACT_APP_ROOT_LINK;

// console.log({ env });
const image = {
	inExtension: (path) => {
		return `chrome-extension://${chrome.runtime.id}${path}`;
	},
	favicon: (url) => {
		return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(
			url
		)}&size=32`;
	},
};
const downloadBase64File = (base64Data, fileName) => {
	const link = document.createElement("a");
	link.href = base64Data;
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

const imageURL = {
	inExtension: (path) => {
		if (env === "localhost" || env === undefined) {
			return rootLink + path;
		}
		return `chrome-extension://${chrome.runtime.id}${path}`;
	},
	favicon: (url) => {
		return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(
			url
		)}&size=32`;
	},
};

export { image, imageURL, downloadBase64File };
