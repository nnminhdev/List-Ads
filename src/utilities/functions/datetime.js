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

function getTimestampDaysAgo(numberDays = 7) {
	const now = new Date();

	return Math.floor(now.getTime() / 1000) - Number(numberDays) * 24 * 60 * 60;
}

function getCurrentDate() {
	// Get current date
	let currentDate = new Date();

	// Get date components
	let year = currentDate.getFullYear(); // Year
	let month = currentDate.getMonth() + 1; // Month (0-11), add 1 to convert to 1-12
	let day = currentDate.getDate(); // Day of the month

	// Format the date string as "YYYY/MM/DD"
	let formattedDate = `${year}/${month.toString().padStart(2, "0")}/${day.toString().padStart(2, "0")}`;

	return formattedDate;
}

export { formatDateFromTimestamp, convertDateFormat, getTimestampDaysAgo, getCurrentDate };
