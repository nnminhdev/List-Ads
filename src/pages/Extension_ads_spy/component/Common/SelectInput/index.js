import { Select, Space } from "antd";
import { useRef, useState } from "react";
import "./index.scss";
const SelectInput = ({ PopupComponent, placeholderSelect, funcCallApiSearch }) => {
	const [isOpen, setIsOpen] = useState(false);
	const selectRef = useRef(null);
	const handleBlur = () => {
		if (selectRef.current) {
			selectRef.current.blur();
			setIsOpen(false);
		}
	};
	return (
		<Space wrap>
			<Select
				className="select-input"
				ref={selectRef}
				style={{
					width: 150,
					span: {
						fontSize: "13px",
					},
				}}
				// onChange={handleChange}
				dropdownRender={() => (
					<PopupComponent
						funcCallApiSearch={funcCallApiSearch}
						fncSetIsOpen={setIsOpen}
						handleBlur={handleBlur}
					/>
				)}
				popupMatchSelectWidth={false}
				// placeholder={placeholderSelect}
				defaultValue={placeholderSelect}
				// open={true}
				onFocus={() => setIsOpen(true)}
				// onBlur={() => setIsOpen(false)}
				dropdownStyle={{
					display: !isOpen && "none",
				}}
			/>
		</Space>
	);
};

export default SelectInput;
