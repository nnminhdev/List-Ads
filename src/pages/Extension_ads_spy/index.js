import { Flex, Pagination, Input, Space, Spin, Button } from "antd";

import style from "./styles/index.module.scss";
import CardAdsComponent from "./component/Card";
import FilterComponent from "./component/Filter";
import databases from "../../databases/list_ads.json";
import { useEffect, useState } from "react";
import { apiGetDataAds } from "../../services/api/ads";
import { getTimestampDaysAgo } from "../../utilities/functions/datetime";
import UpgradeComponent from "./component/Upgrade";
import { useDispatch, useSelector } from "react-redux";
import { fetchListAds, resetFilter } from "../../store/Filter/FilterReducer";

const { Search } = Input;

const AdsSpyComponent = () => {
	const [isSearch, setSearch] = useState(false);
	const [listDataAds, setListAds] = useState({});

	const getListAdsFromStore = useSelector(state => state.filterSlice.data);
	const dispatch = useDispatch();

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
		dispatch(fetchListAds(dataPayload));
		// const responseDataApi = await apiGetDataAds(dataPayload);
		// if (responseDataApi) setListAds(responseDataApi);
	};

	const handleClickResetFilter = () => {
		dispatch(resetFilter())
	}
	useEffect(() => {
		document.title = "Spy Ads";
	}, []);
	useEffect(() => {
		getDataApiAds({
			seen_begin: getTimestampDaysAgo(),
			seen_end: Math.floor(new Date().getTime() / 1000),
		});
	}, []);

	useEffect(() => {
		if (getListAdsFromStore) setListAds(getListAdsFromStore);
	}, [getListAdsFromStore])

	return (
		<div>
			<>
				<Flex
					style={{
						width: "100%",
						marginBottom: "20px",
					}}
					justify="space-between"
					align="center"
				>
					<Search
						placeholder="input search text ..."
						allowClear
						enterButton="Search"
						size="large"
						onSearch={handleSearch}
						loading={isSearch}
						style={{
							width: "550px",
						}}
					/>
					<Button onClick={() => window.location.reload()}>Reset</Button>
				</Flex>
				<FilterComponent funcCallApiSearch={getDataApiAds} />
				<div className={style.content__list}>
					<Flex justify="start" wrap gap={15}>
						{listDataAds?.data?.length > 0 ? (
							listDataAds?.data
								?.filter((elm) => !elm.domain)
								.map((item, index) => {
									return <CardAdsComponent dataComponentCard={item} key={index} />;
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
					<Pagination
						defaultCurrent={1}
						total={listDataAds?.total}
						onChange={handleChangePagination}
						defaultPageSize={60}
					/>
				</div>
			</>
		</div>
	);
};

export default AdsSpyComponent;
