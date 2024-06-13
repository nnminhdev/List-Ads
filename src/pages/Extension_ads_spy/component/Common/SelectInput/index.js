import { Select, Space } from "antd";
import { useState } from "react";

const SelectInput = ({ PopupComponent, placeholderSelect, funcCallApiSearch }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Space wrap>
			<Select
				style={{
					width: 150,
				}}
				// onChange={handleChange}
				dropdownRender={() => <PopupComponent funcCallApiSearch={funcCallApiSearch} fncSetIsOpen={setIsOpen} />}
				popupMatchSelectWidth={false}
				// placeholder={placeholderSelect}
				defaultValue={placeholderSelect}
				open={true}
				// onFocus={() => setIsOpen(true)}
				// onBlur={() => setIsOpen(false)}
			/>
		</Space>
	);
};

export default SelectInput;
