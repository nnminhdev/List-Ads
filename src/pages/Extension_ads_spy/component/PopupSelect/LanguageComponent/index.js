import { Button, Checkbox, Flex, Typography } from "antd";
import { ListLanguages } from "../constant";

import style from "./style.module.scss";
import { useState } from "react";
const Language = () => {
	const [showCheckBox, setShowCheckBox] = useState(false);
	const handleClickMultiSelect = () => {
		setShowCheckBox((prev) => !prev);
	};
	return (
		<div className={style.language__wrap}>
			<div className={style.language__top}>
				<Flex justify="space-between" align="center">
					<Typography>Language</Typography>
					<Flex justify="start" gap={10}>
						<Button onClick={handleClickMultiSelect}>MultiSelect</Button>
						<Button>All</Button>
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
								{showCheckBox && <Checkbox />}
								<Typography
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
					<Flex justify="center" align="center" gap={10} style={{
						marginTop: '30px'
					}}>
						<Button className="primary">OK</Button>
						<Button>Cancel</Button>
					</Flex>
				)}
			</div>
		</div>
	);
};

export default Language;
