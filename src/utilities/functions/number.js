function formatNumberToK(number) {
	// Kiểm tra nếu number không phải là một số hoặc nhỏ hơn 10,000
	if (isNaN(number) || number < 10000) {
		return number.toString();
	}

	// Chuyển đổi number thành số chục nghìn và làm tròn đến 1 chữ số thập phân
	let formattedNumber = (number / 1000).toFixed(1);

	// Kiểm tra nếu số thập phân cuối cùng là 0 thì loại bỏ nó
	if (formattedNumber.endsWith(".0")) {
		formattedNumber = formattedNumber.slice(0, -2);
	}

	// Thêm hậu tố 'K' vào số đã định dạng
	return formattedNumber + "K";
}

export { formatNumberToK };
