import { Select, Space } from "antd";

const SelectInput = ({ PopupComponent, placeholderSelect }) => {
	return (
		<Space wrap>
			<Select
				style={{
					width: 150,
				}}
				// onChange={handleChange}
				dropdownRender={() => <PopupComponent />}
				popupMatchSelectWidth={false}
				// placeholder={placeholderSelect}
                defaultValue={placeholderSelect}
				open={true}
			/>
		</Space>
	);
};

export default SelectInput;
