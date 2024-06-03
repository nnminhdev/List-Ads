import { Flex, Pagination, Input, Space } from "antd";

import style from "./styles/index.module.scss";
import CardAdsComponent from "./component/Card";
import FilterComponent from "./component/Filter";
import databases from "../../databases/list_ads.json";
import { useState } from "react";

const AdsSpyComponent = () => {
	const [isSearch, setSearch] = useState(false);
	const [numberItem, setNumberItem] = useState(10);
	const handleSearch = (value, _e, info) => {
		console.log(info?.source, value);
		setSearch(true);
		setTimeout(() => {
			setSearch(false);
		}, 1000);
	};
	const { Search } = Input;
	const handleChangePagination = (page, pageSize) => {
		console.log(page, pageSize);
		setNumberItem(page * pageSize);
	};
	return (
		<div>
			<div
				style={{
					width: "550px",
				}}
			>
				<Search
					placeholder="input search text ..."
					allowClear
					enterButton="Search"
					size="large"
					onSearch={handleSearch}
					loading={isSearch}
				/>
			</div>
			<FilterComponent />
			<div className={style.content__list}>
				<Flex justify="start" wrap gap={20}>
					{databases.data.slice(0, numberItem).map((item, index) => {
						return <CardAdsComponent dataComponentCard={item} />;
					})}
				</Flex>
			</div>
			<div className={style.content__pagination}>
				<Pagination defaultCurrent={1} total={databases.data.length} onChange={handleChangePagination} />
			</div>
		</div>
	);
};

export default AdsSpyComponent;
