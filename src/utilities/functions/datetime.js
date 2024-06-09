function formatDateFromTimestamp(timestamp) {
	var date = new Date(timestamp * 1000);
	var day = date.getDate();
	var month = date.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
	var year = date.getFullYear();

	// Đảm bảo rằng ngày và tháng có định dạng hh:mm:ss
	if (day < 10) {
		day = "0" + day;
	}
	if (month < 10) {
		month = "0" + month;
	}

	return day + "-" + month + "-" + year;
}

function convertDateFormat(dateString) {
	let date = new Date(dateString);

	let year = date.getFullYear();
	let month = (date.getMonth() + 1).toString().padStart(2, "0");
	let day = date.getDate().toString().padStart(2, "0");

	return `${year}-${month}-${day}`;
}

function getTimestampDaysAgo(numberDays = 90) {
	const now = new Date();

	const thirtyDaysAgo = now.getTime() - Number(numberDays) * 24 * 60 * 60 * 1000;

	return thirtyDaysAgo;
}
export { formatDateFromTimestamp, convertDateFormat, getTimestampDaysAgo };
