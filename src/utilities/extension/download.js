const downloadBase64File = (base64Data, fileName) => {
	const link = document.createElement("a");
	link.href = base64Data;
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

const convertBlobToBase64 = (blob) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onloadend = function () {
			resolve(reader.result);
		};
	});
};
export { downloadBase64File, convertBlobToBase64 };
