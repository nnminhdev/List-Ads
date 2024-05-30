import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";
const weekFormat = "MM/DD";

const DatePickerRange = () => (
	<Space direction="vertical" size={12}>
		<RangePicker
			defaultValue={[dayjs("2015/01/01", dateFormat), dayjs("2015/01/01", dateFormat)]}
			format={dateFormat}
		/>
	</Space>
);

export default DatePickerRange;
