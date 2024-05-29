import { ConfigProvider, Layout, Table, Image, Modal, Skeleton, Button, Flex, Typography } from "antd";
import styles from "./styles/index.module.scss";
import React, { useCallback, useEffect, useState } from "react";
import FilterCompetitor from "./FilterCompetitor";
import { decryptString, formatDataTable, formatDate } from "../Extension_product/constants";
import { getCompetitorReq } from "../../services/api/competitor";
import { PictureOutlined } from "@ant-design/icons";
import BreakDownModal from "../Extension_product/components/BreakDownModal";
import Sidebar from "../../components/common/sidebar";

const { Column } = Table;
const { Title } = Typography;

const ExtensionCompetitorResearch = () => {
	const renderProductUrl = (domain, handle) => {
		return `https://${domain}/products/${handle}`;
	};
	const [loading, setLoading] = useState(false);
	const [dataTable, setDataTable] = useState([]);
	const [pagination, setPagination] = useState({
		total: 0,
		current: 1,
		pageSize: 50,
	});
	const [filters, setFilter] = useState({});
	const [isOpenDS, setIsOpenDS] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [numberItem, setItemModal] = useState({});
	const handleDSConnect = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			setIsOpenDS(false);
		}, 1000);
	};
	const handleSearchAli = (url) => {
		console.log({ url });
		window.open(url);
	};

	const handleConfirmModalDS = () => {
		setIsOpenDS(false);
	};

	const handleClose = () => {
		setItemModal({});
	};

	const fetchDataTable = useCallback(
		async (filters = null) => {
			try {
				setLoading(true);
				const response = await getCompetitorReq("/competitors/search/", {
					filters,
					page_size: pagination.pageSize,
					page: pagination.current,
				});

				const listProducts = formatDataTable(response?.data.results);
				const total = response?.data.total || 0;
				setPagination((prev) => ({ ...prev, total }));
				if (listProducts.length) {
					setDataTable(listProducts);
				}
			} catch (e) {
				setDataTable([]);
			} finally {
				setLoading(false);
			}
		},
		[filters, pagination]
	);

	const handleChangePagination = useCallback(
		async (page, pageSize) => {
			setDataTable([]);
			const payload = {
				page: page,
				page_size: pageSize,
				...filters,
			};
			setPagination((prev) => {
				return { ...prev, pageSize: pageSize, current: page };
			});
			await fetchDataTable(payload);
		},
		[fetchDataTable, filters]
	);

	return (
		<>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: "#FF4C00",
					},
					components: {
						Select: {
							controlHeight: 40,
						},
						Input: {
							controlHeight: 40,
						},
						InputNumber: {
							controlHeight: 40,
							borderRadiusLG: 6,
							colorBorder: "#f2f3f8",
						},
					},
				}}
			>
				<Layout>
					{/* <Sidebar /> */}
					<Layout.Content className={styles.container}>
						<div style={{ margin: `20px 0` }}>
							<Flex justify="space-between" align="center">
								<Title level={3}>Competitor Research</Title>
							</Flex>
						</div>
						<FilterCompetitor
							loading={loading}
							onFinish={async (filters) => {
								setFilter(filters);
								setPagination((prev) => ({ ...prev, current: 1 }));
								await fetchDataTable(filters);
							}}
						/>

						<div>
							{!loading ? (
								<div style={{ marginTop: 50 }}>
									<Table
										sticky={true}
										scroll={{ x: 1300, y: 600 }}
										dataSource={dataTable}
										className="product-database-table"
										pagination={{
											...pagination,
											showSizeChanger: true,
											defaultPageSize: 20,
											defaultCurrent: 1,
											showLessItems: true,
											pageSizeOptions: [20, 50, 100, 150],
											showTotal: (total, range) => (
												<div>
													<b>Total: {total}</b>
												</div>
											),
											simple: true,
											position: ["topRight"],
											onChange: (page, pageSize) => {
												handleChangePagination(page, pageSize);
											},
										}}
									>
										<Column
											title="Product"
											dataIndex="product"
											key="product"
											fixed="left"
											width={400}
											responsive={["lg", "md", "sm"]}
											render={(item) => (
												<div className="column-product--wrapper">
													<div className="product--img">
														<Image
															width={50}
															height={50}
															src={item.main_image}
															alt={item.title}
														/>
														<div className="product--img-qty">
															<PictureOutlined />
															<small>{item.images}</small>
														</div>
													</div>
													<div className="product--title">
														<p className="product-title">{item.title}</p>
														<p className="product--title-domain">
															<a
																href={renderProductUrl(
																	item.original_domain,
																	item.handle
																)}
																rel="noreferrer"
																target="_blank"
															>
																{item.custom_domain}
															</a>
															<div>
																{item.variants}{" "}
																{item.variants === 1 ? "Variant" : "Variants"}
															</div>
														</p>
													</div>
												</div>
											)}
										/>
										<Column
											title="Price"
											dataIndex="price"
											key="price"
											width={150}
											responsive={["lg", "md", "sm"]}
											sorter={(a, b) => {
												return a?.price?.usd_price_min - b?.price?.usd_price_min;
											}}
											render={(item) => (
												<div className="column-price--wrapper">
													<p
														onClick={() => setItemModal({ price: item.usd_price_min })}
														style={{ cursor: "pointer" }}
													>
														{item.usd_price_max !== undefined ? (
															<div className="column-price--range">
																${item.usd_price_min} - ${item.usd_price_max}
															</div>
														) : (
															<div className="column-price--range">
																${item.usd_price_min}
															</div>
														)}
													</p>
													{item.original_price ? (
														<div className="column-price--original">
															{Number(item.original_price).toFixed(2)} {item.currency}
														</div>
													) : (
														""
													)}
												</div>
											)}
										/>
										<Column
											width={150}
											title="Store Info"
											dataIndex="products_count"
											key="products_count"
											sorter={(a, b) => a.products_count - b.products_count}
											render={(item) => <span>{item} Products</span>}
										/>
										<Column
											width={150}
											title="Product Creation Date"
											dataIndex="created_at"
											responsive={["lg", "md"]}
											key="created_at"
											sorter={(a, b) =>
												new Date(a.created_at).getTime() > new Date(b.created_at).getTime()
											}
											render={(item) => <span>{formatDate(item)}</span>}
										/>
										<Column
											width={150}
											title="Store Creation Date"
											dataIndex="store_created_at"
											key="store_created_at"
											responsive={["lg", "md"]}
											sorter={(a, b) =>
												new Date(a.store_created_at).getTime() >
												new Date(b.store_created_at).getTime()
											}
											render={(item) => <span>{formatDate(item)}</span>}
										/>
										<Column
											width={150}
											title="Product"
											dataIndex="product_type"
											key="product_type"
											responsive={["lg", "md"]}
											sorter={(a, b) =>
												a.product_type.toUpperCase() > b.product_type.toUpperCase()
											}
										/>
									</Table>
									{Object.keys(numberItem).length > 0 && (
										<BreakDownModal
											open={Object.keys(numberItem).length}
											price={numberItem.price}
											onClose={handleClose}
										/>
									)}
								</div>
							) : (
								<div style={{ textAlign: "center", marginTop: 50 }}>
									<Flex gap={10}>
										{Array.from({
											length: 6,
										}).map((_, i) => (
											<Skeleton active />
										))}
									</Flex>
								</div>
							)}
						</div>
					</Layout.Content>
				</Layout>
			</ConfigProvider>
			<Modal
				className="modal-ds-connect"
				centered={true}
				destroyOnClose={true}
				cancelButtonProps={false}
				footer={() => (
					<Button size="large" loading={isLoading} type="primary" onClick={handleDSConnect}>
						Connect
					</Button>
				)}
				title="Connect Store"
				open={isOpenDS}
				onOk={handleConfirmModalDS}
				onCancel={() => setIsOpenDS(false)}
			>
				<p>Click button below, and you will be redirected to AutoDS to connect your account to Dropship.</p>
			</Modal>
		</>
	);
};
export default ExtensionCompetitorResearch;
