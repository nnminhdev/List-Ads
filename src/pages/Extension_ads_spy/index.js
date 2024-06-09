import { Flex, Pagination, Input, Space, Spin } from "antd";

import style from "./styles/index.module.scss";
import CardAdsComponent from "./component/Card";
import FilterComponent from "./component/Filter";
import databases from "../../databases/list_ads.json";
import { useEffect, useState } from "react";
import { apiGetDataAds } from "../../services/api/ads";

const AdsSpyComponent = () => {
	const [isSearch, setSearch] = useState(false);
	const [numberItem, setNumberItem] = useState(10);
	const [listAds, setListAds] = useState([]);

	const handleSearch = async (value, _e, info) => {
		await getDataApiAds({
			keyword: value,
		});
		setSearch(true);
		setTimeout(() => {
			setSearch(false);
		}, 1000);
	};
	const { Search } = Input;
	const handleChangePagination = (page, pageSize) => {
		setNumberItem(page * pageSize);
	};
	const getDataApiAds = async (dataPayload) => {
		setListAds([]);
		const responseDataApi = await apiGetDataAds(dataPayload);
		if (responseDataApi?.length > 0) setListAds(responseDataApi);
	};
	useEffect(() => {
		getDataApiAds();
	}, []);

	return (
		<div>
			<>
				<div
					style={{
						width: "550px",
						marginBottom: "20px",
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
				<FilterComponent funcCallApiSearch={getDataApiAds} />
				<div className={style.content__list}>
					<Flex justify="start" wrap gap={20}>
						{listAds.length > 0 ? (
							listAds?.slice(0, numberItem).map((item, index) => {
								return <CardAdsComponent dataComponentCard={item} />;
							})
						) : (
							<Flex
								style={{
									width: "100%",
									marginTop: "200px",
								}}
								justify="center"
								align="center"
							>
								<Spin size="large" tip="Loading Data ..." />
							</Flex>
						)}
					</Flex>
				</div>
				<div className={style.content__pagination}>
					<Pagination defaultCurrent={1} total={listAds?.length} onChange={handleChangePagination} />
				</div>
			</>
		</div>
	);
};

export default AdsSpyComponent;
