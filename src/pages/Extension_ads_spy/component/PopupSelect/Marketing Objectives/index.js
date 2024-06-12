import { Button, Checkbox, Flex, Tooltip, Typography } from "antd";
import style from "./style.module.scss";
import { MarketingObjectivesConstant } from "../constant";
import { useState } from "react";
const MarketingObjectives = ({ funcCallApiSearch }) => {
	const [isCTA, setCTA] = useState([]);

	const handleChangeSelect = (e) => {
		if (e.target.checked) {
			setCTA((prev) => [...prev, e.target.value]);
		} else {
			const newArray = isCTA.filter((item) => item !== e.target.value);
			setCTA([...newArray]);
		}
	};
	const handleFilterCTA = () => {
		funcCallApiSearch({
			cta_type: isCTA.join(","),
		});
	};

	const handleClickCancel = (e) => {
		// e.target.blur();
	}
	return (
		<div className={style.marketing__wrap}>
			<div className={style.marketing__top}>
				<Flex justify="space-between" align="center">
					<Typography>Marketing Objectives(CTA)</Typography>
					<Flex justify="start" gap={10}>
						{/* <Button onClick={handleClickMultiSelect}>MultiSelect</Button> */}
						<Button onClick={() => funcCallApiSearch()}>All</Button>
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
												{/* {showCheckBox && <Checkbox />} */}
												<Checkbox onChange={(e) => handleChangeSelect(e)} value={item?.value} />
												{item.label.length > 11 ? (
													<Tooltip title={item.label}>
														<Typography.Paragraph
															ellipsis={true}
															style={{
																width: "70%",
																marginBottom: "0px",
																cursor: "pointer",
																color: isCTA.includes(item?.value)
																	? "#1890ff"
																	: "#000000",
															}}
															className={`hover-item`}
															// onClick={() => handleClickFilterItem(item.label)}
														>
															{item.label}
														</Typography.Paragraph>
													</Tooltip>
												) : (
													<Typography
														onClick={() =>
															funcCallApiSearch({
																cta_type: item?.value,
															})
														}
														className={style.language__bottom__item + " " + `hover-item`}
														key={index}
														style={{
															cursor: "pointer",
															color: isCTA.includes(item?.value) ? "#1890ff" : "#000000",
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
												)}
											</Flex>
										);
									})}
								</Flex>
							</div>
						);
					})}
				</div>

				{/* {showCheckBox && ( */}
				<Flex
					justify="center"
					gap={10}
					style={{
						marginTop: "20px",
					}}
				>
					<Button type="primary" onClick={handleFilterCTA}>
						OK
					</Button>
					<Button onClick={(e) => handleClickCancel(e)}>Cancel</Button>
				</Flex>
				{/* )} */}
			</div>
		</div>
	);
};

export default MarketingObjectives;
