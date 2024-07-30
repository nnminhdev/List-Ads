import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { getCurrentDate, getTimestampDaysAgo } from "../../../../../utilities/functions/datetime";
import "./index.scss";
import { useSelector } from "react-redux";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";

const getCurrentTimestamp = () => dayjs().unix();
const oneMonthAgoTimestamp = () => dayjs().subtract(7, "days").unix();
const DatePickerRange = ({ funcCallApiSearch }) => {
	const getDataRangeDate = useSelector((state) => state.filterSlice);
	const timeStart = getDataRangeDate?.payload?.seen_begin || oneMonthAgoTimestamp;
	const timeEnd = getDataRangeDate?.payload?.seen_end || getCurrentTimestamp();


	const handleChangeDatePicker = (date, dateString) => {
		funcCallApiSearch({
			seen_begin: Math.floor(new Date(dateString[0]) / 1000),
			seen_end: Math.floor(new Date(dateString[1]) / 1000),
		});
	};
	return (
		<Space direction="vertical" size={12}>
			<RangePicker
				style={{
					fontSize: "13px",
				}}
				defaultValue={[dayjs(oneMonthAgoTimestamp() * 1000), dayjs(getCurrentTimestamp() * 1000)]}
				value={[dayjs(timeStart * 1000), dayjs(timeEnd * 1000)]}
				format={dateFormat}
				onChange={handleChangeDatePicker}
			/>
		</Space>
	);
};

export default DatePickerRange;
