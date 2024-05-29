import React, { useCallback, useState } from "react";
import { Table, Modal, Button, Flex, Image, Skeleton } from "antd";
import { formatDataTable, formatDate, formatMoney } from "../constants";
import { RightOutlined, PictureOutlined, UpOutlined } from "@ant-design/icons";
import Chart from "./Chart";
import { getReq } from "../../../services/api/product";
import BreakDownModal from "./BreakDownModal";
import FilterProduct from "../FilterProduct";

const { Column, ColumnGroup } = Table;
const TableProduct = () => {
	const renderProductUrl = (domain, handle) => {
		return `https://${domain}/products/${handle}`;
	};
	const [loading, setLoading] = useState(false);
	const [dataTable, setDataTable] = useState([]);
	const [filters, setFilter] = useState({});
	const [initTable, setInitTable] = useState(true);
	const [pagination, setPagination] = useState({
		total: 0,
		current: 1,
		pageSize: 50,
	});
	const [isOpenDS, setIsOpenDS] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [numberItem, setItemModal] = useState({});
	const [sortOrder, setSortOrder] = useState({ created_at: "descend" });
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
	const fetchDataTable = useCallback(async (filters = {}, payload = null, endPoint = "/search/default/") => {
		try {
			let tablePayload = {};
			if (!payload) {
				tablePayload = {
					ordering: ["-created_at"],
					page: 1,
					page_size: 50,
				};
			} else {
				tablePayload = { ...payload };
			}
			setLoading(true);
			const response = await getReq(endPoint, {
				...filters,
				...tablePayload,
			});
			// console.log({ response });
			const listProducts = formatDataTable(response?.data?.results);
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
	}, []);

	// useEffect(() => {
	//   fetchDataTable();
	// }, []);

	const handleChangeTable = useCallback(async (tableInfo, sortOrder, filters) => {
		const page = tableInfo.current;
		const pageSize = tableInfo.pageSize;
		let orderType = sortOrder.columnKey;
		console.log({ filters });
		const orderVal = sortOrder.order;
		if (orderType && orderVal) {
			if (orderVal === "descend") {
				orderType = "-" + orderType;
			}
		}
		setDataTable([]);
		const payload = {
			page: page,
			page_size: pageSize,
			ordering: [orderType],
		};
		setSortOrder({ [`${sortOrder.columnKey}`]: orderVal });
		setPagination((prev) => {
			return { ...prev, pageSize: pageSize, current: page };
		});
		await fetchDataTable(filters, payload, "/search/");
	}, []);

	// const handleSort = useCallback(
	//   async (type, key) => {
	//     let order = key;
	//     console.log({ key });
	//     setSortOrder({
	//       [`${key}`]: type,
	//     });
	//     if (type === "descend") {
	//       order = "-" + key;
	//     }
	//     setDataTable([]);
	//     const payload = {
	//       ordering: [order],
	//       ...paginationPayload,
	//     };
	//     console.log("payload 1", payload);
	//     await fetchDataTable(payload);
	//   },
	//   [paginationPayload]
	// );
	return (
		<div>
			<div>
				<FilterProduct
					title="Product Database"
					loading={loading}
					initTable={initTable}
					onFinish={(filters, isInit) => {
						console.log({ isInit });
						const endpoint = isInit ? "/search/default/" : "/search/";
						setInitTable(false);
						setFilter({ filters, new_search: true });
						fetchDataTable({ filters, new_search: true }, null, endpoint);
						setPagination({
							current: 1,
							pageSize: 50,
						});
						setSortOrder({ created_at: "descend" });
					}}
					onReset={() => {
						setPagination({
							current: 1,
							pageSize: 50,
						});
						setSortOrder({ created_at: "descend" });
						fetchDataTable();
					}}
				/>
			</div>
			{!loading ? (
				<div>
					<Table
						sticky={true}
						scroll={{ x: 1300, y: 600 }}
						dataSource={dataTable}
						className="product-database-table"
						expandable={{
							expandedRowRender: (record) => {
								console.log({ record });
								return <Chart productId={record.product.id} variantId={record.product.variantId} />;
							},
							// expandRowByClick: true,
							expandIcon: ({ expanded, onExpand, record }) =>
								expanded ? (
									<UpOutlined onClick={(e) => onExpand(record, e)} />
								) : (
									<RightOutlined onClick={(e) => onExpand(record, e)} />
								),
						}}
						onChange={(val, filter, sorter) => {
							console.log({ val });
							handleChangeTable(val, sorter, filters);
						}}
						pagination={{
							...pagination,
							showSizeChanger: true,
							defaultPageSize: 20,
							defaultCurrent: 1,
							showLessItems: true,
							pageSizeOptions: [20, 50, 100, 150],
							showTotal: (total, range) => (
								<span>
									Total: <b>{total}</b>
								</span>
							),
							simple: true,
							position: ["topRight"],
							onChange: (page, pageSize) => {
								// handleChangePagination(page, pageSize, sortOrder);
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
									{/* <RightOutlined /> */}
									<div className="product--img">
										<Image width={50} height={50} src={item.main_image} alt={item.title} />
										{/* <img src={item.main_image} alt={item.title} /> */}
										<div className="product--img-qty">
											<PictureOutlined />
											<small>{item.images}</small>
										</div>
									</div>
									<div className="product--title">
										<p className="product-title">{item.title}</p>
										<p className="product--title-domain">
											<a
												href={renderProductUrl(item.original_domain, item.handle)}
												rel="noreferrer"
												target="_blank"
											>
												{item.custom_domain}
											</a>
											<span>
												{item.variants} {item.variants === 1 ? "Variant" : "Variants"}
											</span>
										</p>
									</div>
								</div>
							)}
						/>
						{/* <Column
          width={100}
          className="external-buttons"
          title=" "
          dataIndex="external"
          key="external"
          render={(item) => {
            return (
              <div className="column-external">
                <Tooltip title="Search on AliExpress">
                  <img
                    onClick={() => handleSearchAli(item.ali_url)}
                    src={imageURL.inExtension(aliPath)}
                    alt="aliexpress"
                  />
                </Tooltip>
                <Tooltip title="Import Product to AutoDS">
                  <img onClick={() => setIsOpenDS(true)} src={imageURL.inExtension(dsPath)} alt="ds" />
                </Tooltip>
              </div>
            );
          }}
        /> */}
						<Column
							title="Price"
							dataIndex="price"
							key="usd_price"
							width={150}
							responsive={["lg", "md", "sm"]}
							sortDirections={["descend", "ascend", "descend"]}
							sorter={true}
							sortOrder={sortOrder.usd_price ?? ""}
							render={(item) => (
								<div className="column-price--wrapper">
									<p
										onClick={() => setItemModal({ price: item.usd_price_min })}
										style={{ cursor: "pointer" }}
									>
										{item.usd_price_max !== undefined ? (
											<span className="column-price--range">
												${item.usd_price_min} - ${item.usd_price_max}
											</span>
										) : (
											<span className="column-price--range">${item.usd_price_min}</span>
										)}
									</p>
									{item.original_price ? (
										<span className="column-price--original">
											{Number(item.original_price).toFixed(2)} {item.currency}
										</span>
									) : (
										""
									)}
								</div>
							)}
						/>
						<Column
							width={150}
							title="Monthly Sales"
							responsive={["lg", "md", "sm"]}
							sortDirections={["descend", "ascend", "descend"]}
							sorter={true}
							dataIndex="monthly_sales"
							sortOrder={sortOrder.monthly_sales ?? ""}
							key="monthly_sales"
						/>
						<Column
							width={150}
							title="Monthly Revenue"
							responsive={["lg", "md", "sm"]}
							dataIndex="monthly_revenue"
							key="monthly_revenue"
							sortOrder={sortOrder.monthly_revenue ?? ""}
							sortDirections={["descend", "ascend", "descend"]}
							sorter={true}
							render={(item) => <span>{formatMoney(item)}</span>}
						/>
						<Column
							width={150}
							title="Store Info"
							dataIndex="store_products_count"
							key="store_products_count"
							sortOrder={sortOrder.store_products_count ?? ""}
							sortDirections={["descend", "ascend", "descend"]}
							sorter={true}
							render={(item) => <span>{item} Products</span>}
						/>
						<Column
							width={150}
							title="Product Creation Date"
							dataIndex="created_at"
							responsive={["lg", "md"]}
							key="created_at"
							sortDirections={["descend", "ascend", "descend"]}
							sortOrder={sortOrder.created_at ?? ""}
							sorter={true}
							render={(item) => <span>{formatDate(item)}</span>}
						/>
						<Column
							width={150}
							title="Store Creation Date"
							dataIndex="store_created_at"
							key="store_created_at"
							responsive={["lg", "md"]}
							sortOrder={sortOrder.store_created_at ?? ""}
							sortDirections={["descend", "ascend", "descend"]}
							sorter={true}
							render={(item) => <span>{formatDate(item)}</span>}
						/>
						<Column
							width={200}
							title="Category"
							dataIndex="category"
							key="category"
							sortOrder={sortOrder.category ?? ""}
							responsive={["lg", "md"]}
							sortDirections={["descend", "ascend", "descend"]}
							sorter={true}
						/>
						<Column
							width={150}
							title="Product Type"
							dataIndex="product_type"
							key="product_type"
							sortOrder={sortOrder.product_type ?? ""}
							responsive={["lg", "md"]}
							sortDirections={["descend", "ascend", "descend"]}
							sorter={true}
						/>
						{/* <Column
          width={200}
          title=" "
          dataIndex="action"
          key="action"
          fixed="right"
          render={(item) => {
            return (
              <div className="column-action--wrapper">
                <ActionMore />
                <Button type="primary" className="track-button">
                  Track <img src={imageURL.inExtension(trackPath)} alt="track" />
                </Button>
              </div>
            );
          }}
        /> */}
					</Table>
					{Object.keys(numberItem).length > 0 && (
						<BreakDownModal
							open={Object.keys(numberItem).length}
							price={numberItem.price}
							onClose={handleClose}
						/>
					)}
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
						<p>
							Click button below, and you will be redirected to AutoDS to connect your account to
							Dropship.
						</p>
					</Modal>
				</div>
			) : (
				<div style={{ textAlign: "center" }}>
					<Flex gap={10}>
						{Array.from({
							length: 6,
						}).map((_, i) => (
							<Skeleton key={`line_${i}`} active />
						))}
					</Flex>
				</div>
			)}
		</div>
	);
};
export default TableProduct;
