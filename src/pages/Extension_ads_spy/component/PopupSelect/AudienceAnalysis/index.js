import { Button, Checkbox, Flex } from "antd";
import { options, optionsAge } from "../constant";

import style from "./style.module.scss";
import "./index.scss";
import { useState } from "react";

const AudienceAnalysis = ({ funcCallApiSearch, handleBlur }) => {
	const [listValueSex, setValueSex] = useState([]);
	const [listValueAge, setValueAge] = useState([]);
	const handleCheckAudienceSex = (e) => {
		if (e.target.checked) {
			setValueSex((prev) => [...prev, e.target.value]);
		} else {
			const newArray = listValueSex.filter((item) => item !== e.target.value);
			setValueSex([...newArray]);
		}
	};
	const handleCheckAudienceAge = (e) => {
		if (e.target.checked) {
			setValueAge((prev) => [...prev, e.target.value]);
		} else {
			const newArray = listValueAge.filter((item) => item !== e.target.value);
			setValueAge([...newArray]);
		}
	};
	const handleSubmitAudience = () => {
		handleBlur();
		funcCallApiSearch({
			audience_sex: listValueSex.join(","),
			audience_age: listValueAge.join(","),
		});
	};
	return (
		<div className={style.audience__wrap}>
			<div className={style.audience__top}>
				<span>Audience Analysis</span>
			</div>
			<div className={style.audience__bottom}>
				<div className={style.audience__bottom__gender}>
					<Flex justify="space-between" gap={10}>
						<div className={style.audience__bottom__title}>
							<span>Gender</span>
						</div>
						<Flex
							style={{
								width: "90%",
							}}
							wrap
							justify="start"
							align="center"
						>
							{/* <Checkbox.Group options={options} onChange={handleChangeSelectCheckBox} /> */}
							{options.map((item, index) => {
								return (
									<Flex
										style={{
											width: "150px",
										}}
										gap={5}
									>
										<Checkbox value={item?.value} onChange={(e) => handleCheckAudienceSex(e)} />
										<span
											style={{
												color: listValueSex.includes(item?.value) ? "#1890ff" : "#000000",
											}}
											className="hover-item"
										>
											{item.label}
										</span>
									</Flex>
								);
							})}
						</Flex>
					</Flex>
				</div>
				<div className={style.audience__bottom__age}>
					<Flex justify="space-between" gap={10}>
						<div className={style.audience__bottom__title}>
							<span>Age</span>
						</div>
						<Flex
							style={{
								width: "90%",
							}}
							wrap
							justify="start"
							align="center"
						>
							{optionsAge.map((item, index) => {
								return (
									<Flex
										style={{
											width: "150px",
										}}
										gap={5}
									>
										<Checkbox value={item?.value} onChange={(e) => handleCheckAudienceAge(e)} />
										<span
											style={{
												color: listValueAge.includes(item?.value) ? "#1890ff" : "#000000",
											}}
										>
											{item.label}
										</span>
									</Flex>
								);
							})}
						</Flex>
					</Flex>
				</div>
				<div className={style.audience__group__button}>
					<Flex gap="small" wrap justify="center">
						<Button type="primary" onClick={handleSubmitAudience}>
							OK
						</Button>
						<Button>Cancel</Button>
					</Flex>
				</div>
			</div>
		</div>
	);
};

export default AudienceAnalysis;
