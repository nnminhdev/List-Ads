import { Button, Checkbox, Flex, Typography } from "antd";
import { ListLanguages } from "../constant";

import style from "./style.module.scss";
import { useState } from "react";
const Language = ({ funcCallApiSearch, fncSetIsOpen }) => {
	const [showCheckBox, setShowCheckBox] = useState(false);
	const [listLanguage, setLanguages] = useState([]);
	const handleClickMultiSelect = () => {
		setShowCheckBox((prev) => !prev);
	};
	const handleChangeLanguage = (e) => {
		if (e.target.checked) {
			setLanguages((prev) => [...prev, e.target.value]);
		} else {
			const newArray = listLanguage.filter((item) => item !== e.target.value);
			setLanguages([...newArray]);
		}
	};
	const handleFilterLanguage = () => {
		fncSetIsOpen(false);
		funcCallApiSearch({
			language: listLanguage.join(","),
		});
	};
	const handleFilterAllLanguage = () => {
		const AllLanguages = ListLanguages.map((item) => item?.value);
		funcCallApiSearch({
			language: AllLanguages.join(","),
		});
	};
	return (
		<div className={style.language__wrap}>
			<div className={style.language__top}>
				<Flex justify="space-between" align="center">
					<Typography>Language</Typography>
					<Flex justify="start" gap={10}>
						<Button onClick={handleClickMultiSelect}>MultiSelect</Button>
						<Button onClick={handleFilterAllLanguage}>All</Button>
					</Flex>
				</Flex>
			</div>
			<div className={style.language__bottom}>
				<Flex justify="space-between" gap={10} wrap>
					{ListLanguages.map((item, index) => {
						return (
							<Flex
								justify="start"
								gap={5}
								style={{
									width: "150px",
								}}
							>
								{showCheckBox && (
									<Checkbox value={item?.value} onChange={(e) => handleChangeLanguage(e)} />
								)}
								<Typography
									onClick={() =>
										funcCallApiSearch({
											language: item?.value,
										})
									}
									className={style.language__bottom__item}
									key={index}
									style={{
										cursor: "pointer",
										"&:hover": {
											color: "#1890ff",
											textDecoration: "underline",
											textDecorationColor: "#1890ff",
											textDecorationStyle: "solid",
											textDecorationThickness: "2px",
											textDecorationSkip: "ink",
											textDecorationSkipInk: "none",
										},
									}}
								>
									{" "}
									{item.label}
								</Typography>
							</Flex>
						);
					})}
				</Flex>
				{showCheckBox && (
					<Flex
						justify="center"
						align="center"
						gap={10}
						style={{
							marginTop: "30px",
						}}
					>
						<Button type="primary" onClick={handleFilterLanguage}>
							OK
						</Button>
						<Button>Cancel</Button>
					</Flex>
				)}
			</div>
		</div>
	);
};

export default Language;
