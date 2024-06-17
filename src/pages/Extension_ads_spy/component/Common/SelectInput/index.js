import { Select, Space } from "antd";
import { useRef, useState } from "react";

const SelectInput = ({ PopupComponent, placeholderSelect, funcCallApiSearch }) => {
	const [isOpen, setIsOpen] = useState(false);
	const selectRef = useRef(null);
	const handleBlur = () => {
		console.log("handleBlur ==========>");
		if (selectRef.current) {
			console.log("handleBlur ==========> 2222222");
			selectRef.current.blur();
			setIsOpen(false);
		}
	};
	return (
		<Space wrap>
			<Select
				ref={selectRef}
				style={{
					width: 150,
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
