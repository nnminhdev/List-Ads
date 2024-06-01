import { Button, Checkbox, Flex, Input } from "antd";
import { listCountry } from "../constant";
import { useState } from "react";
import style from "./style.module.scss";
import { handleSearchSelectCountry } from "../helper";

const Country = () => {
	const [selectMulti, setSelectMulti] = useState(false);
	const [searchSelect, setSearchSelect] = useState("");
	const [listDataCountry, setListDataCountry] = useState(listCountry);
	const [topicSelect, setTopicSelect] = useState("");
	const handleSelectMultiSelect = () => {
		setSelectMulti((prev) => !prev);
	};

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
		console.log(e.target.value);
		setTopicSelect(e.target.value)
	}
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
							<Button onClick={handleSelectMultiSelect}>MultiSelect</Button>
							<Button>All</Button>
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
								marginTop: '10px'
							}}
						>
							<Flex justify="start" gap={5} align="center">
								{selectMulti && <Checkbox value={item.topic} onChange={(e) => handleSelectTopic(e)} />}
								<p className={`${style.country__list__topic}`}>{item.topic}</p>
							</Flex>
							<Flex justify="start" gap={15} wrap>
								{item?.list_country?.map((element, index) => {
									return (
										<Flex
											gap={5}
											style={{
												width: "150px",
											}}
										>
											{selectMulti && <Checkbox checked={topicSelect === item.topic}  />}
											<Flex justify="start" gap={5} align="center">
												<img
													src={element?.image_country}
													width={16}
													height={"auto"}
													alt="icon country"
												/>
												<p
													style={{
														width: "80%",
													}}
													key={index}
												>
													{element.name}
												</p>
											</Flex>
										</Flex>
									);
								})}
							</Flex>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Country;
