function formatNumberToK(number) {
	if (isNaN(number) || number < 10000) {
		return number.toString();
	}
	let formattedNumber = (number / 1000).toFixed(1);

	if (formattedNumber.endsWith(".0")) {
		formattedNumber = formattedNumber.slice(0, -2);
	}
	return formattedNumber + "K";
}

export { formatNumberToK };
