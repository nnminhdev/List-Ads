import { downloadBase64File } from "../extension/images";

/*global chrome*/


const handleDownloadImage = async (dataDetail) => {
	const statusCheckLink = handleDetectVideo(dataDetail?.video_url);
	try {
		if (!statusCheckLink) {
			const response = await chrome.runtime.sendMessage({
				message: "download-image",
				data: dataDetail?.video_url,
			});
			downloadBase64File(response.data, `${dataDetail?.title_card}.jpg`);
		} else {
			await chrome.runtime.sendMessage({
				message: "download-video-library",
				data: dataDetail?.video_url,
				fileName: `${dataDetail?.title_card}`,
			});
		}
	} catch (e) {
		console.error("Error fetching the file:", e);
	}
};

function isImgUrl(url) {
	return /\.(jpg|jpeg|png|webp|avif|gif)$/.test(url);
}

const allVideoFormats = ["mp4", "mov", "flv", "webm", "3gp", "ogg", "m4a", "mp3", "wav", "bin", "video"];

const handleDetectVideo = (url) => {
	let isVideoUrl = false;
	allVideoFormats.some(function (format) {
		if (url?.indexOf(format) !== -1) {
			isVideoUrl = true;
			return true;
		}
	});
	return isVideoUrl;
};

export { handleDownloadImage, isImgUrl, handleDetectVideo };
