import { Flex, Pagination, Input, Space, Spin } from "antd";

import style from "./styles/index.module.scss";
import CardAdsComponent from "./component/Card";
import FilterComponent from "./component/Filter";
import databases from "../../databases/list_ads.json";
import { useEffect, useState } from "react";
import { apiGetDataAds } from "../../services/api/ads";
import { getTimestampDaysAgo } from "../../utilities/functions/datetime";

const { Search } = Input;

const AdsSpyComponent = () => {
	const [isSearch, setSearch] = useState(false);
	const [listAds, setListAds] = useState({});

	const handleSearch = async (value, _e, info) => {
		await getDataApiAds({
			keyword: value,
		});
		setSearch(true);
		setTimeout(() => {
			setSearch(false);
		}, 1000);
	};
	const handleChangePagination = async (page, pageSize) => {
		await getDataApiAds({
			page,
			size: pageSize,
		});
	};
	const getDataApiAds = async (dataPayload) => {
		setListAds({});
		const responseDataApi = await apiGetDataAds(dataPayload);
		if (responseDataApi) setListAds(responseDataApi);
	};
	useEffect(() => {
		document.title = "Spy Ads";
	}, []);
	useEffect(() => {
		getDataApiAds({
			seen_begin: getTimestampDaysAgo(),
			seen_end: Math.floor(new Date().getTime() / 1000),
		});
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
					<Flex justify="start" wrap gap={15}>
						{listAds?.data?.length > 0 ? (
							listAds?.data?.map((item, index) => {
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
					<Pagination defaultCurrent={1} total={listAds?.total} onChange={handleChangePagination} />
				</div>
			</>
		</div>
	);
};

export default AdsSpyComponent;
