import { Button, Checkbox, Flex, Input, Tooltip, Typography } from "antd";
import { listCountry } from "../constant";
import { useState } from "react";
import style from "./style.module.scss";
import { handleSearchSelectCountry } from "../helper";

const Country = ({ funcCallApiSearch, handleBlur }) => {
	const [selectMulti, setSelectMulti] = useState(false);
	const [searchSelect, setSearchSelect] = useState("");
	const [listDataCountry, setListDataCountry] = useState(listCountry);
	const [listDataCountrySelect, setListDataCountrySelect] = useState([]);
	const [topicSelect, setTopicSelect] = useState("");


	const handleSearchSelect = (e) => {
		setSearchSelect(e.target.value);
		if (e.target.value !== "") {
			const dataFilterSelect = handleSearchSelectCountry(e.target.value);
			setListDataCountry(dataFilterSelect);
		} else {
			setListDataCountry(listCountry);
		}
	};
	const handleSelectTopic = (e) => {
		setTopicSelect(e.target.value);
	};

	const handleClickFilterItem = (valueSearch) => {
		handleBlur();
		funcCallApiSearch({
			geo: valueSearch,
		});
	};

	const handleSelectFilterListItems = (e) => {
		if (e.target.checked) {
			setListDataCountrySelect((prev) => [...prev, e.target.value]);
		} else {
			const newArray = listDataCountrySelect.filter((item) => item !== e.target.value);
			setListDataCountrySelect([...newArray]);
		}
	};

	const handleClickFilterItemList = () => {
		handleBlur();
		funcCallApiSearch({
			geo: listDataCountrySelect.join(","),
		});
	};

	const handleClickCancelDropDown = () => {
		handleBlur();
	}

	const handleSelectAllFilterItemList = () => {
		handleBlur();
		funcCallApiSearch();
	};

	return (
		<div className={style.country__wrap}>
			<div className={style.country__menu}>
				<Flex justify="space-between" align="center" className={`w-100`}>
					<div
						style={{
							width: "40%",
						}}
					>
						<Input placeholder="Select" onChange={(e) => handleSearchSelect(e)} value={searchSelect} />
					</div>
					<div>
						<Flex justify="start" gap={10}>
							{/* <Button onClick={handleSelectMultiSelect}>MultiSelect</Button> */}
							<Button onClick={handleSelectAllFilterItemList}>All</Button>
						</Flex>
					</div>
				</Flex>
			</div>
			<div className={style.country__content__wrapper}>
				{listDataCountry.map((item, index) => {
					return (
						<div
							style={{
								width: "100%",
								marginTop: "10px",
							}}
							key={index}
						>
							<Flex justify="start" gap={5} align="center">
								{selectMulti && <Checkbox value={item.topic} onChange={(e) => handleSelectTopic(e)} />}
								<p className={`${style.country__list__topic}`}>{item.topic}</p>
							</Flex>
							<Flex justify="start" gap={15} wrap>
								{item?.list_country?.map((element, index2) => {
									return (
										<Flex
											gap={5}
											style={{
												width: "150px",
											}}
											key={index2}
										>
											{/* {selectMulti && <Checkbox checked={topicSelect === item.topic} />} */}
											<Checkbox
												onChange={(e) => handleSelectFilterListItems(e)}
												value={element?.value}
											/>
											<Flex justify="start" gap={5} align="center">
												<img
													src={element?.image_country}
													width={16}
													height={"auto"}
													alt="icon country"
												/>
												{element.name.length > 11 ? (
													<Tooltip title={element.name}>
														<Typography.Paragraph
															ellipsis={true}
															style={{
																width: "70%",
																marginBottom: "0px",
																cursor: "pointer",
																color: listDataCountrySelect.includes(item?.value) ? "#1890ff" : "#000000",
															}}
															className={`hover-item`}
															onClick={() => handleClickFilterItem(element?.value)}
														>
															{element.name}
														</Typography.Paragraph>
													</Tooltip>
												) : (
													<p
													
														style={{
															cursor: "pointer",
															color: listDataCountrySelect.includes(item?.value) ? "#1890ff" : "#000000",
														}}
														key={index}
														className={`hover-item`}
														onClick={() => handleClickFilterItem(element?.value)}
													>
														{element.name}
													</p>
												)}
											</Flex>
										</Flex>
									);
								})}
							</Flex>
						</div>
					);
				})}
			</div>
			<div>
				<Flex justify="center" gap={10} style={{ marginTop: "20px" }}>
					<Button type="primary" onClick={handleClickFilterItemList}>
						OK
					</Button>
					<Button onClick={handleClickCancelDropDown}>Cancel</Button>
				</Flex>
			</div>
		</div>
	);
};

export default Country;
