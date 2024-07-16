import { Flex, Pagination, Input, Space } from "antd";

import style from "./styles/index.module.scss";
import CardAdsComponent from "./component/Card";
import FilterComponent from "./component/Filter";
import databases from "../../databases/list_ads.json";
import { useEffect, useState } from "react";
import { apiGetDataAds } from "../../services/api/ads";

import ExtensionAdsDetail from "../Extension_ads_spy_detail/index";

const AdsSpyComponent = () => {
	const [isSearch, setSearch] = useState(false);
	const [numberItem, setNumberItem] = useState(10);
	const [listAds, setListAds] = useState([]);
	const [isPageDetail, setIsPageDetail] = useState(false);

	const getPath = window.location.pathname;

	const handleSearch = (value, _e, info) => {
		setSearch(true);
		setTimeout(() => {
			setSearch(false);
		}, 1000);
	};
	const { Search } = Input;
	const handleChangePagination = (page, pageSize) => {
		setNumberItem(page * pageSize);
	};
	const getDataApiAds = async () => {
		const responseDataApi = await apiGetDataAds();
		if (responseDataApi?.length > 0) setListAds(responseDataApi);
	};
	useEffect(() => {
		getDataApiAds();
	}, []);

	useEffect(() => {
		if (getPath === "/detail") {
			setIsPageDetail(true);
		} else {
			setIsPageDetail(false);
		}
	}, [getPath]);

	return (
		<div>
			{!isPageDetail ? (
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
					<FilterComponent />
					<div className={style.content__list}>
						<Flex justify="start" wrap gap={20}>
							{listAds.slice(0, numberItem).map((item, index) => {
								return <CardAdsComponent key={index} dataComponentCard={item} />;
							})}
						</Flex>
					</div>
					<div className={style.content__pagination}>
						<Pagination
							defaultCurrent={1}
							total={databases.data.length}
							onChange={handleChangePagination}
						/>
					</div>
				</>
			) : (
				<ExtensionAdsDetail />
			)}
		</div>
	);
};

export default AdsSpyComponent;
