import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { getCurrentDate } from "../../../../../utilities/functions/datetime";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";
const weekFormat = "MM/DD";

const DatePickerRange = ({ funcCallApiSearch }) => {
	const handleChangeDatePicker = (date, dateString) => {
		funcCallApiSearch({
			seen_begin: Math.floor(new Date(dateString[0]) / 1000),
			seen_end: Math.floor(new Date(dateString[1]) / 1000),
		});
	};
	return (
		<Space direction="vertical" size={12}>
			<RangePicker
				defaultValue={[dayjs(getCurrentDate(), dateFormat), dayjs(getCurrentDate(), dateFormat)]}
				format={dateFormat}
				onChange={handleChangeDatePicker}
			/>
		</Space>
	);
};

export default DatePickerRange;
