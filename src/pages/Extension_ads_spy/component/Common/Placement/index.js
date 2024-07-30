import { useState } from "react";
import { DatePicker, Radio, Select } from "antd";
import "./index.scss";
import { getTimestampDaysAgo } from "../../../../../utilities/functions/datetime";


const Placement = ({ funcCallApiSearch }) => {
	const [placement, SetPlacement] = useState("7");

	const placementChange = (e) => {
		const listPlacement = ["7", "30", "90"];
		if (listPlacement.includes(e.target.value)) {
			SetPlacement(e.target.value);
		}
		funcCallApiSearch({
			seen_begin: getTimestampDaysAgo(e.target.value),
			seen_end: Math.floor(new Date().getTime() / 1000),
		});
	};

	const handleSelectDays = (value, option) => {
		SetPlacement("");
		funcCallApiSearch({
			seen_begin: getTimestampDaysAgo(value),
			seen_end: Math.floor(new Date().getTime() / 1000),
		});
	};

	return (
		<>
			<Radio.Group
				value={placement}
				onChange={placementChange}
				style={{
					fontSize: "13px",
				}}
			>
				<Radio.Button value="7" defaultChecked>
					7 days
				</Radio.Button>
				<Radio.Button value="30">30 days</Radio.Button>
				<Radio.Button value="90">90 days</Radio.Button>
				{/* <Radio.Button value="bottomRight"> */}
				<Select
					placeholder="More"
					style={{ flex: 1, width: "100px", height: "32px", marginTop: "1px" }}
					className="custom-select"
					options={[
						{ value: "180", label: "180 days" },
						{ value: "365", label: "1 years" },
						{ value: "730", label: "2 years" },
					]}
					dropdownClassName="custom-dropdown"
					onSelect={handleSelectDays}
				/>
				{/* </Radio.Button> */}
			</Radio.Group>
		</>
	);
};

export default Placement;
