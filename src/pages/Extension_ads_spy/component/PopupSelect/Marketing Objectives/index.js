import { Button, Checkbox, Flex, Typography } from "antd";
import style from "./style.module.scss";
import { MarketingObjectivesConstant } from "../constant";
import { useState } from "react";
const MarketingObjectives = () => {
	const [showCheckBox, setShowCheckBox] = useState(false);
	const handleClickMultiSelect = () => {
		setShowCheckBox((prev) => !prev);
	};
	return (
		<div className={style.marketing__wrap}>
			<div className={style.marketing__top}>
				<Flex justify="space-between" align="center">
					<Typography>Marketing Objectives(CTA)</Typography>
					<Flex justify="start" gap={10}>
						<Button onClick={handleClickMultiSelect}>MultiSelect</Button>
						<Button>All</Button>
					</Flex>
				</Flex>
			</div>
			<div className={style.marketing__menu}>
				<div className={style.marketing__menu__list}>
					{MarketingObjectivesConstant.map((item, index) => {
						return (
							<div className={style.marketing__menu}>
								<Typography className={style.marketing__menu__title} key={index}>
									{" "}
									{item.topic}
								</Typography>
								<Flex justify="start" gap={10} wrap>
									{item?.list_data?.map((item, index) => {
										return (
											<Flex
												justify="start"
												gap={5}
												style={{
													width: "150px",
												}}
											>
												{showCheckBox && <Checkbox />}

												<Typography>{item.label}</Typography>
											</Flex>
										);
									})}
								</Flex>
							</div>
						);
					})}
				</div>

				{showCheckBox && (
					<Flex
						justify="center"
						gap={10}
						style={{
							marginTop: "20px",
						}}
					>
						<Button>OK</Button>
						<Button>Cancel</Button>
					</Flex>
				)}
			</div>
		</div>
	);
};

export default MarketingObjectives;
