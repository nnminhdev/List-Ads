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
export { formatDateFromTimestamp };
