import CryptoJS from "crypto-js";

export const TABLE_COLUMNS = [
	{
		title: "Product",
		dataIndex: "product",
		key: "product",
		fixed: "left",
		width: 400,
	},
	{
		title: "Price",
		dataIndex: "price",
		key: "price",
		align: 'center'
	},
	{
		title: "Monthly Sales",
		dataIndex: "monthly_sales",
		key: "monthly_sales",
		align: 'center'
	},
	{
		title: "Monthly Revenue",
		dataIndex: "monthly_revenue",
		key: "monthly_revenue",
		align: 'center'
	},
	{
		title: "Store Info",
		dataIndex: "products_count",
		key: "products_count",
		align: 'center'
	},
	{
		title: "Product Creation Date",
		dataIndex: "created_at",
		key: "created_at",
		align: 'center'
	},
	{
		title: "Store Creation Date",
		dataIndex: "store_created_at",
		key: "store_created_at",
		align: 'center'
	},
	{
		title: "Category",
		dataIndex: "category",
		key: "category",
		align: 'center'
	},
	{
		title: "Product Type",
		dataIndex: "product_type",
		key: "product_type",
		align: 'center'
	},
	{
		title: "",
		dataIndex: "action",
		key: "action",
		fixed: "right",
		width: 200,
	},
];

export const SAMPLE_DATA = [
	{
		key: "1",
		product: {
			id: 13990982,
			variantId: 8374144893247,
			images: 9,
			title: "Professional Grade Apron for Kitchen, Grill, and BBQ (Black) - HDG805",
			variants: 2,
			custom_domain: "abc.com",
			original_domain: "abc.com",
			handle: "hdg805-hudson-durable-goods-professional-grade-cotton-kitchen-grill-and-bbq-apron-black-adjusts-up-to-xxl-for-men-women",
			main_image:
				"https://cdn.shopify.com/s/files/1/1221/6088/products/hudson-durable-goods-home-professional-grade-apron-for-kitchen-grill-and-bbq-hdg805-3575987961964.jpg?v=1533138759",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=Professional Grade Apron for Kitchen, Grill, and BBQ (Black) - HDG805",
		},
		price: {
			usd_price: 29.95,
			usd_price_min: 29.95,
			usd_price_max: 50.77,
			currency: "USD",
			original_price: 799,
		},
		monthly_sales: 371,
		products_count: 24,
		monthly_revenue: 21278.48,
		created_at: "2023-01-30T08:23:02.000000Z",
		store_created_at: "2023-01-29T08:23:02.000000Z",
		category: "Home & Kitchen & Dining",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
];
export const DUMP_DATA = [
	{
		key: 10640949774,
		product: {
			images: 9,
			title: "Professional Grade Apron for Kitchen, Grill, and BBQ (Black) - HDG805",
			variants: 1,
			custom_domain: "hudsondurablegoods.com",
			original_domain: "hudson-durable-goods.myshopify.com",
			handle: "hdg805-hudson-durable-goods-professional-grade-cotton-kitchen-grill-and-bbq-apron-black-adjusts-up-to-xxl-for-men-women",
			main_image:
				"https://cdn.shopify.com/s/files/1/1221/6088/products/hudson-durable-goods-home-professional-grade-apron-for-kitchen-grill-and-bbq-hdg805-3575987961964.jpg?v=1533138759",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=Professional Grade Apron for Kitchen, Grill, and BBQ (Black) - HDG805",
		},
		price: {
			usd_price: 29.95,
			usd_price_min: 29.95,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 371,
		products_count: 24,
		monthly_revenue: 11111.45,
		created_at: "2017-05-12T01:43:30.000000Z",
		store_created_at: "2017-05-11T00:00:00.000000Z",
		category: "Home & Kitchen & Dining",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8102920913113,
		product: {
			images: 9,
			title: "Nano Portable Espresso Machine (Forest Green)",
			variants: 1,
			custom_domain: "fera.pl",
			original_domain: "outin-inc.myshopify.com",
			handle: "nano-portable-espresso-machine-forest-green",
			main_image:
				"https://cdn.shopify.com/s/files/1/0663/6319/5609/files/1_c2c3765a-bcc9-4e1d-b7a3-22eb782623b9.webp?v=1710319860",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Nano Portable Espresso Machine (Forest Green)",
		},
		price: {
			usd_price: 139.99,
			usd_price_min: 139.99,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 152,
		products_count: 17,
		monthly_revenue: 21278.48,
		created_at: "2023-01-30T08:23:02.000000Z",
		store_created_at: "2021-12-17T00:00:00.000000Z",
		category: "Appliances",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 7047359922281,
		product: {
			images: 7,
			title: "3 in 1 Probiotic Chews for Dogs",
			variants: 1,
			custom_domain: "googipet.com",
			original_domain: "googipet.myshopify.com",
			handle: "3-in-1-probiotic-chews-for-dogs",
			main_image: "https://cdn.shopify.com/s/files/1/0295/1410/4937/files/PL1.jpg?v=1711592261",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=3 in 1 Probiotic Chews for Dogs",
		},
		price: {
			usd_price: 27.5,
			usd_price_min: 27.5,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 521,
		products_count: 7,
		monthly_revenue: 14353.54,
		created_at: "2023-09-19T18:00:56.000000Z",
		store_created_at: "2020-05-12T00:00:00.000000Z",
		category: "Pet Supplies",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 7624597995701,
		product: {
			images: 9,
			title: "WAVE Heated barrel brush multi-styler Olive",
			variants: 1,
			custom_domain: "mdlondon.co.uk",
			original_domain: "md-london.myshopify.com",
			handle: "wave-heated-barrel-brush-multi-styler-olive",
			main_image: "https://cdn.shopify.com/s/files/1/0571/0158/2517/files/IMG_0036A.jpg?v=1706031565",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=WAVE Heated barrel brush multi-styler Olive",
		},
		price: {
			usd_price: 155.66,
			usd_price_min: 155.66,
			currency: "GBP",
			original_price: 125,
		},
		monthly_sales: 116,
		products_count: 13,
		monthly_revenue: 18303.19,
		created_at: "2024-01-23T17:38:22.000000Z",
		store_created_at: "2019-03-22T00:00:00.000000Z",
		category: "Health & Household",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 9046043492671,
		product: {
			images: 10,
			title: "TRIO ULTRA 3-in-1 Fast Wireless Charging Station",
			variants: 1,
			custom_domain: "journeyofficial.com",
			original_domain: "journey-europe.myshopify.com",
			handle: "trio-ultra-3-in-1-fast-wireless-charging-station",
			main_image: "https://cdn.shopify.com/s/files/1/0810/5600/6463/files/Trio-MFM-C1.jpg?v=1701925802",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=TRIO ULTRA 3-in-1 Fast Wireless Charging Station",
		},
		price: {
			usd_price: 190.98,
			usd_price_min: 190.98,
			currency: "EUR",
			original_price: 179,
		},
		monthly_sales: 16,
		products_count: 19,
		monthly_revenue: 3095.48,
		created_at: "2023-12-05T01:52:55.000000Z",
		store_created_at: "2023-08-15T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 9085645881635,
		product: {
			images: 3,
			title: "Portable Bladeless Hanging Rechargeable Neck Fan",
			variants: 1,
			custom_domain: "rathimart.com",
			original_domain: "0d8bdd-7a.myshopify.com",
			handle: "portable-bladeless-hanging-rechargeable-neck-fan",
			main_image: "https://cdn.shopify.com/s/files/1/0868/2523/8819/files/8483132276.jpg?v=1711026713",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Portable Bladeless Hanging Rechargeable Neck Fan",
		},
		price: {
			usd_price: 11.96,
			usd_price_min: 11.96,
			currency: "INR",
			original_price: 999,
		},
		monthly_sales: 1269,
		products_count: 18,
		monthly_revenue: 15202.62,
		created_at: "2024-03-21T13:11:53.000000Z",
		store_created_at: "2024-03-16T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8438178611519,
		product: {
			images: 9,
			title: "Anti-Aging Cloud Cream",
			variants: 1,
			custom_domain: "www.tallowmepretty.com",
			original_domain: "a413e1-2.myshopify.com",
			handle: "anti-aging-cloud-cream",
			main_image: "https://cdn.shopify.com/s/files/1/0751/4652/7039/files/Anti-AgingCloudCream.png?v=1710880362",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Anti-Aging Cloud Cream",
		},
		price: {
			usd_price: 112,
			usd_price_min: 112,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 64,
		products_count: 14,
		monthly_revenue: 7168,
		created_at: "2023-06-06T13:57:42.000000Z",
		store_created_at: "2023-05-18T00:00:00.000000Z",
		category: "Health & Household",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8348343992555,
		product: {
			images: 6,
			title: "Portable Mini Washing Machine Ultrasonic Turbine Washer",
			variants: 1,
			custom_domain: "storeheaven.shop",
			original_domain: "3ab19b-6a.myshopify.com",
			handle: "portable-mini-washing-machine-ultrasonic-turbine-washer",
			main_image: "https://cdn.shopify.com/s/files/1/0695/8658/3787/files/5041787819.jpg?v=1711972049",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=Portable Mini Washing Machine Ultrasonic Turbine Washer",
		},
		price: {
			usd_price: 10.75,
			usd_price_min: 10.75,
			currency: "INR",
			original_price: 899,
		},
		monthly_sales: 400,
		products_count: 21,
		monthly_revenue: 4311.22,
		created_at: "2024-04-01T11:47:29.000000Z",
		store_created_at: "2024-03-29T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8669240918362,
		product: {
			images: 13,
			title: "ATEM - Bundle (3 in 1)",
			variants: 4,
			custom_domain: "www.nextbreath.de",
			original_domain: "fb3597.myshopify.com",
			handle: "atem",
			main_image:
				"https://cdn.shopify.com/s/files/1/0785/0963/7978/files/5_O1CN017NssfI2IC64JekJL5__2207564519249-0-cib.png?v=1710178659",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=ATEM - Bundle (3 in 1)",
		},
		price: {
			usd_price: 27,
			usd_price_min: 27,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 218,
		products_count: 3,
		monthly_revenue: 6098,
		created_at: "2023-12-17T13:26:51.000000Z",
		store_created_at: "2023-12-17T00:00:00.000000Z",
		category: "Grocery & Gourmet Food",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 7726236008645,
		product: {
			images: 3,
			title: "Portable Bladeless Hanging Rechargeable Neck Fan",
			variants: 1,
			custom_domain: "www.basicsbox.in",
			original_domain: "65953e-e8.myshopify.com",
			handle: "portable-bladeless-hanging-rechargeable-neck-fan",
			main_image: "https://cdn.shopify.com/s/files/1/0652/8879/8405/files/8483132276.jpg?v=1711794614",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Portable Bladeless Hanging Rechargeable Neck Fan",
		},
		price: {
			usd_price: 13.15,
			usd_price_min: 13.15,
			currency: "INR",
			original_price: 1099,
		},
		monthly_sales: 216,
		products_count: 18,
		monthly_revenue: 2843.42,
		created_at: "2024-03-30T10:30:14.000000Z",
		store_created_at: "2024-03-30T00:00:00.000000Z",
		category: "Patio Lawn & Garden",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8796690710845,
		product: {
			images: 3,
			title: "Thermotex Far Infrared Heating Pad - Professional",
			variants: 1,
			custom_domain: "www.thermotex.com",
			original_domain: "c0658c-2.myshopify.com",
			handle: "thermotex-far-infrared-heating-pad-professional",
			main_image: "https://cdn.shopify.com/s/files/1/0833/0222/0093/files/Professional-1.png?v=1712864471",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=Thermotex Far Infrared Heating Pad - Professional",
		},
		price: {
			usd_price: 799,
			usd_price_min: 799,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 4,
		products_count: 18,
		monthly_revenue: 2772.89,
		created_at: "2023-09-29T15:41:52.000000Z",
		store_created_at: "2023-09-26T00:00:00.000000Z",
		category: "Health & Household",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 6918336381088,
		product: {
			images: 22,
			title: "Herren – Anti-Schweiß-Boxershorts",
			variants: 20,
			custom_domain: "www.fibershirts.nl",
			original_domain: "fibershirts-de.myshopify.com",
			handle: "herren-anti-schweiss-boxershorts",
			main_image: "https://cdn.shopify.com/s/files/1/0586/0638/7360/products/Boxerwit-RAW-1.jpg?v=1630505638",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Herren – Anti-Schweiß-Boxershorts",
		},
		price: {
			usd_price: 29.8,
			usd_price_min: 29.8,
			currency: "EUR",
			original_price: 28,
		},
		monthly_sales: 314,
		products_count: 6,
		monthly_revenue: 9486.35,
		created_at: "2021-08-24T07:59:41.000000Z",
		store_created_at: "2021-08-24T00:00:00.000000Z",
		category: "Clothing & Shoes & Jewelry",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 7371426332725,
		product: {
			images: 9,
			title: "Portable Air Duster Wireless Vacuum Cleaner",
			variants: 1,
			custom_domain: "trandingculture6282.myshopify.com",
			original_domain: "2b0748-2b.myshopify.com",
			handle: "portable-air-duster-wireless-vacuum-cleaner",
			main_image: "https://cdn.shopify.com/s/files/1/0619/3155/2821/products/8000969967.jpg?v=1709230191",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Portable Air Duster Wireless Vacuum Cleaner",
		},
		price: {
			usd_price: 11.95,
			usd_price_min: 11.95,
			currency: "INR",
			original_price: 999,
		},
		monthly_sales: 402,
		products_count: 24,
		monthly_revenue: 4814.009999999999,
		created_at: "2024-02-29T18:09:51.000000Z",
		store_created_at: "2024-02-26T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 9161094627644,
		product: {
			images: 7,
			title: "Meneflix Portable Mini Hair Straightener",
			variants: 1,
			custom_domain: "cartsflex.in",
			original_domain: "dd812a-eb.myshopify.com",
			handle: "meneflix-portable-mini-hair-straightener-cordless-rechargeable-mini-adjustable-hair-straightener-hot-comb",
			main_image: "https://cdn.shopify.com/s/files/1/0863/0802/8732/products/6559336766.jpg?v=1709983622",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Meneflix Portable Mini Hair Straightener",
		},
		price: {
			usd_price: 9.56,
			usd_price_min: 9.56,
			currency: "INR",
			original_price: 799,
		},
		monthly_sales: 2173,
		products_count: 16,
		monthly_revenue: 20809.87,
		created_at: "2024-03-09T11:27:02.000000Z",
		store_created_at: "2024-02-22T00:00:00.000000Z",
		category: "Health & Household",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8374271869174,
		product: {
			images: 8,
			title: "Portable Air Duster Wireless Vacuum Cleaner",
			variants: 1,
			custom_domain: "sabarsh.myshopify.com",
			original_domain: "5f7ee8-6.myshopify.com",
			handle: "portable-air-duster-wireless-vacuum-cleaner",
			main_image: "https://cdn.shopify.com/s/files/1/0688/8105/5990/products/4656702038.jpg?v=1708697592",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Portable Air Duster Wireless Vacuum Cleaner",
		},
		price: {
			usd_price: 9.56,
			usd_price_min: 9.56,
			currency: "INR",
			original_price: 799,
		},
		monthly_sales: 2436,
		products_count: 10,
		monthly_revenue: 23340.32,
		created_at: "2024-02-23T10:48:56.000000Z",
		store_created_at: "2024-02-23T00:00:00.000000Z",
		category: "Patio Lawn & Garden",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 7632201973932,
		product: {
			images: 8,
			title: "MC Adjustable Wide Trike Seat",
			variants: 2,
			custom_domain: "mooncool.com",
			original_domain: "mooncool-2.myshopify.com",
			handle: "mooncool-seat",
			main_image: "https://cdn.shopify.com/s/files/1/0567/3821/8156/files/s-04.jpg?v=1698888252",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=MC Adjustable Wide Trike Seat",
		},
		price: {
			usd_price: 59.99,
			usd_price_min: 59.99,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 67,
		products_count: 24,
		monthly_revenue: 4019.33,
		created_at: "2023-05-25T09:53:37.000000Z",
		store_created_at: "2023-05-05T00:00:00.000000Z",
		category: "Home & Kitchen & Dining",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 9085658333473,
		product: {
			images: 9,
			title: "Goods Galaxy Portable Mini Car Vacuum Cleaner: A 2-in-1 USB Rechargeable Wireless Handheld Vacuum Cleaner, Perfect for Traveling, Camping, and More!",
			variants: 1,
			custom_domain: "goodsgalaxy.in",
			original_domain: "3b5128-42.myshopify.com",
			handle: "portable-air-duster-wireless-vacuum-cleaner",
			main_image: "https://cdn.shopify.com/s/files/1/0861/7066/5249/products/4656702038.jpg?v=1712730296",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=Goods Galaxy Portable Mini Car Vacuum Cleaner: A 2-in-1 USB Rechargeable Wireless Handheld Vacuum Cleaner, Perfect for Traveling, Camping, and More!",
		},
		price: {
			usd_price: 9.55,
			usd_price_min: 9.55,
			currency: "INR",
			original_price: 799,
		},
		monthly_sales: 1777,
		products_count: 24,
		monthly_revenue: 16999,
		created_at: "2024-03-18T06:14:34.000000Z",
		store_created_at: "2024-03-18T00:00:00.000000Z",
		category: "Patio Lawn & Garden",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 9068912541978,
		product: {
			images: 6,
			title: "Meneflix Portable Mini Hair Straightener Cordless Rechargeable Mini Adjustable Hair Straightener Hot Comb",
			variants: 1,
			custom_domain: "rsnv.store",
			original_domain: "dd2bde-e8.myshopify.com",
			handle: "meneflix-portable-mini-hair-straightener-cordless-rechargeable-mini-adjustable-hair-straightener-hot-comb",
			main_image:
				"https://cdn.shopify.com/s/files/1/0868/2415/7466/files/6559336766.remini-enhanced.png?v=1711638786",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=Meneflix Portable Mini Hair Straightener Cordless Rechargeable Mini Adjustable Hair Straightener Hot Comb",
		},
		price: {
			usd_price: 8.35,
			usd_price_min: 8.35,
			currency: "INR",
			original_price: 699,
		},
		monthly_sales: 467,
		products_count: 13,
		monthly_revenue: 3907.04,
		created_at: "2024-03-28T07:28:17.000000Z",
		store_created_at: "2024-03-26T00:00:00.000000Z",
		category: "Health & Household",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 7988595097873,
		product: {
			images: 7,
			title: "FRETE GRÁTIS - Base Moisture Cushion 40g - Anti Manchas & Expressões",
			variants: 3,
			custom_domain: "www.lojamulherpoderosa.com",
			original_domain: "9594c0.myshopify.com",
			handle: "base-moisture-anti-manchas-expressoes-frete-gratis",
			main_image:
				"https://cdn.shopify.com/s/files/1/0672/2928/6673/products/CapturadeTela2022-11-05as17.22.55.png?v=1667680273",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=FRETE GRÁTIS - Base Moisture Cushion 40g - Anti Manchas & Expressões",
		},
		price: {
			usd_price: 5.71,
			usd_price_min: 5.71,
			currency: "BRL",
			original_price: 29.9,
		},
		monthly_sales: 2457,
		products_count: 10,
		monthly_revenue: 13224.65,
		created_at: "2022-11-05T20:31:10.000000Z",
		store_created_at: "2022-11-05T00:00:00.000000Z",
		category: "Arts Crafts & Sewing",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8405351956713,
		product: {
			images: 4,
			title: "Mini Fan and Portable Dual Bladeless Air Conditioner",
			variants: 1,
			custom_domain: "www.urbantecho.com",
			original_domain: "143f4d-6c.myshopify.com",
			handle: "mini-fan-and-portable-dual-bladeless-air-conditioner",
			main_image: "https://cdn.shopify.com/s/files/1/0685/1198/9993/products/7855354742.jpg?v=1710875308",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=Mini Fan and Portable Dual Bladeless Air Conditioner",
		},
		price: {
			usd_price: 5.97,
			usd_price_min: 5.97,
			currency: "INR",
			original_price: 499,
		},
		monthly_sales: 745,
		products_count: 23,
		monthly_revenue: 4459.41,
		created_at: "2024-03-19T19:08:28.000000Z",
		store_created_at: "2024-02-29T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8924044460339,
		product: {
			images: 9,
			title: "Bubble Bum Portable Fan for Stroller, Rechargeable Travel Fan, Clip on Baby Stroller Fan for Bed, Car, Treadmill and Bike, Mini Portable Fan w/ 3 Speed and Light Settings plus 360° Rotation – Black",
			variants: 1,
			custom_domain: "www.bubblebum.co",
			original_domain: "bubblebum-booster-seats.myshopify.com",
			handle: "bubble-bum-portable-fan-for-stroller-rechargeable-travel-fan-clip-on-baby-stroller-fan-for-bed-car-treadmill-and-bike-mini-portable-fan-w-3-speed-and-light-settings-plus-360-rotation-black",
			main_image: "https://cdn.shopify.com/s/files/1/0722/9872/5683/files/Image_3.png?v=1706012339",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=Bubble Bum Portable Fan for Stroller, Rechargeable Travel Fan, Clip on Baby Stroller Fan for Bed, Car, Treadmill and Bike, Mini Portable Fan w/ 3 Speed and Light Settings plus 360° Rotation – Black",
		},
		price: {
			usd_price: 29.99,
			usd_price_min: 29.99,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 391,
		products_count: 18,
		monthly_revenue: 11726.09,
		created_at: "2024-01-23T12:18:54.000000Z",
		store_created_at: "2016-12-30T00:00:00.000000Z",
		category: "Baby",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8962643362101,
		product: {
			images: 15,
			title: "No Cover Twist Cup Travel Portable Cup Double Insulation Tumbler.",
			variants: 6,
			custom_domain: "falaestore.com",
			original_domain: "falaestore-9503.myshopify.com",
			handle: "no-cover-twist-cup-travel-portable-cup-double-insulation-tumbler-straw-sippy-water-bottles-portable-for-children-adults",
			main_image:
				"https://cdn.shopify.com/s/files/1/0731/6396/4725/files/0dbdff8a-7c85-4a9b-8e22-91d01f58dc13.jpg?v=1701368171",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=No Cover Twist Cup Travel Portable Cup Double Insulation Tumbler.",
		},
		price: {
			usd_price: 18.65,
			usd_price_min: 18.65,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 496,
		products_count: 16,
		monthly_revenue: 9250.4,
		created_at: "2023-11-30T18:16:09.000000Z",
		store_created_at: "2023-03-10T00:00:00.000000Z",
		category: "Home & Kitchen & Dining",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 7707118370993,
		product: {
			images: 6,
			title: "Portable Air Duster Wireless Vacuum Cleaner",
			variants: 1,
			custom_domain: "shopidor.net.in",
			original_domain: "f3faa1-3.myshopify.com",
			handle: "portable-air-duster-wireless-vacuum-cleaner",
			main_image: "https://cdn.shopify.com/s/files/1/0637/8337/0929/files/7130496472.jpg?v=1711368203",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Portable Air Duster Wireless Vacuum Cleaner",
		},
		price: {
			usd_price: 7.66,
			usd_price_min: 7.66,
			currency: "INR",
			original_price: 641,
		},
		monthly_sales: 1065,
		products_count: 15,
		monthly_revenue: 8185.76,
		created_at: "2024-03-25T12:03:23.000000Z",
		store_created_at: "2024-01-06T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8992322421026,
		product: {
			images: 4,
			title: "Portable Electric USB Juice Maker Bottle | Blender Grinder Mixer | Rechargeable Bottle with 6 Blades",
			variants: 1,
			custom_domain: "www.homifyi.com",
			original_domain: "9c551f-65.myshopify.com",
			handle: "portable-electric-usb-juice-maker-bottle-blender-grinder-mixer-rechargeable-bottle-with-6-blades",
			main_image: "https://cdn.shopify.com/s/files/1/0865/3085/1106/files/5882452198.jpg?v=1711637367",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=Portable Electric USB Juice Maker Bottle | Blender Grinder Mixer | Rechargeable Bottle with 6 Blades",
		},
		price: {
			usd_price: 10.16,
			usd_price_min: 10.16,
			currency: "INR",
			original_price: 849,
		},
		monthly_sales: 609,
		products_count: 24,
		monthly_revenue: 6198.29,
		created_at: "2024-03-28T14:49:27.000000Z",
		store_created_at: "2024-03-08T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 9000566784287,
		product: {
			images: 5,
			title: "Professional Electric Hair Straightener Comb Brush",
			variants: 1,
			custom_domain: "shopping-karto.myshopify.com",
			original_domain: "782399-3e.myshopify.com",
			handle: "professional-electric-hair-straightener-comb-brush",
			main_image: "https://cdn.shopify.com/s/files/1/0857/8796/7775/files/5561272441.jpg?v=1711104780",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=Professional Electric Hair Straightener Comb Brush",
		},
		price: {
			usd_price: 10.75,
			usd_price_min: 10.75,
			currency: "INR",
			original_price: 899,
		},
		monthly_sales: 1213,
		products_count: 25,
		monthly_revenue: 13074.72,
		created_at: "2024-03-22T10:53:00.000000Z",
		store_created_at: "2024-02-20T00:00:00.000000Z",
		category: "Health & Household",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8922360611128,
		product: {
			images: 10,
			title: "Portable 2 in 1 Air Duster Wireless Vacuum Cleaner",
			variants: 1,
			custom_domain: "waldenmart.in",
			original_domain: "95c955-2.myshopify.com",
			handle: "portable-air-duster-wireless-vacuum-cleaner",
			main_image: "https://cdn.shopify.com/s/files/1/0857/7689/2216/products/4471561838.jpg?v=1704297288",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=Portable 2 in 1 Air Duster Wireless Vacuum Cleaner",
		},
		price: {
			usd_price: 9.56,
			usd_price_min: 9.56,
			currency: "INR",
			original_price: 799,
		},
		monthly_sales: 278,
		products_count: 8,
		monthly_revenue: 2664.27,
		created_at: "2024-01-03T15:54:48.000000Z",
		store_created_at: "2024-01-03T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8083566100756,
		product: {
			images: 12,
			title: "Portable Electric Coffee Grinder Ceramic Grinding Core Coffee Beans Grinder",
			variants: 2,
			custom_domain: "chefsekitchen.com",
			original_domain: "4db6ac.myshopify.com",
			handle: "new-upgrade-portable-electric-coffee-grinder-type-c-usb-charge-profession-ceramic-grinding-core-coffee-beans-grinder",
			main_image:
				"https://cdn.shopify.com/s/files/1/0681/8562/0756/products/74b88304-d8a5-4949-92e1-179f3c52586c.jpg?v=1673888614",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=Portable Electric Coffee Grinder Ceramic Grinding Core Coffee Beans Grinder",
		},
		price: {
			usd_price: 39.99,
			usd_price_min: 39.99,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 171,
		products_count: 16,
		monthly_revenue: 6838.29,
		created_at: "2023-01-16T17:03:34.000000Z",
		store_created_at: "2022-11-18T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 9095683866944,
		product: {
			images: 5,
			title: "PORTABLE SEALING MACHINE - GIZMO CRUFT™",
			variants: 1,
			custom_domain: "royalproductshop.com",
			original_domain: "62fc7e-2.myshopify.com",
			handle: "portable-mini-sealing-machine-battery-operated",
			main_image: "https://cdn.shopify.com/s/files/1/0861/2397/0880/products/4321133283.jpg?v=1709719298",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=PORTABLE SEALING MACHINE - GIZMO CRUFT™",
		},
		price: {
			usd_price: 5.97,
			usd_price_min: 5.97,
			currency: "INR",
			original_price: 499,
		},
		monthly_sales: 1021,
		products_count: 10,
		monthly_revenue: 6113.089999999999,
		created_at: "2024-03-06T10:01:37.000000Z",
		store_created_at: "2024-02-13T00:00:00.000000Z",
		category: "Home & Kitchen & Dining",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 7418356498588,
		product: {
			images: 3,
			title: "GlyphoDetox™ Professional",
			variants: 1,
			custom_domain: "www.clinicalsynergyformulas.com",
			original_domain: "clinical-synergy-formulas.myshopify.com",
			handle: "glyphodetox™-professional",
			main_image: "https://cdn.shopify.com/s/files/1/0254/4294/3048/products/Untitleddesign_90.png?v=1663374400",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=GlyphoDetox™ Professional",
		},
		price: {
			usd_price: 31.2,
			usd_price_min: 31.2,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 89,
		products_count: 25,
		monthly_revenue: 2776.8,
		created_at: "2022-09-17T00:24:33.000000Z",
		store_created_at: "2016-10-28T00:00:00.000000Z",
		category: "Health & Household",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8247071211822,
		product: {
			images: 32,
			title: 'WalkingPad Standing Desk Height Adjustable 27.5" to 47.2" (14 Styles)',
			variants: 14,
			custom_domain: "www.walkingpad.com",
			original_domain: "uk-walkingpad.myshopify.com",
			handle: "walkingpad-standing-desk-height-adjustable",
			main_image:
				"https://cdn.shopify.com/s/files/1/0697/7817/8350/products/WalkingPadHeightAdjustable-standing-desk-5.jpg?v=1690774671",
		},
		external: {
			ali_url:
				'https://www.aliexpress.com/wholesale?SearchText=WalkingPad Standing Desk Height Adjustable 27.5" to 47.2" (14 Styles)',
		},
		price: {
			usd_price: 471.97,
			usd_price_min: 471.97,
			currency: "GBP",
			original_price: 379,
		},
		monthly_sales: 11,
		products_count: 14,
		monthly_revenue: 5247.89,
		created_at: "2023-04-12T09:39:05.000000Z",
		store_created_at: "2022-12-29T00:00:00.000000Z",
		category: "Sports & Outdoors",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 9044108280096,
		product: {
			images: 6,
			title: "14,000 BTU Portable Air Conditioner, WiFi Enabled AC Unit Cools Up To 650 Sq. Ft",
			variants: 1,
			custom_domain: "dellahome.com",
			original_domain: "dellahome-store.myshopify.com",
			handle: "14-000-btu-portable-air-conditioner-wifi-enabled-ac-unit-cools-up-to-650-sq-ft",
			main_image: "https://cdn.shopify.com/s/files/1/0785/7763/1520/files/048-OPAC-9B_01.jpg?v=1708650645",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=14,000 BTU Portable Air Conditioner, WiFi Enabled AC Unit Cools Up To 650 Sq. Ft",
		},
		price: {
			usd_price: 429.96,
			usd_price_min: 429.96,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 10,
		products_count: 25,
		monthly_revenue: 4299.6,
		created_at: "2024-02-23T01:10:41.000000Z",
		store_created_at: "2018-07-06T00:00:00.000000Z",
		category: "Appliances",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 5355655299116,
		product: {
			images: 5,
			title: "Professional Steel Tip Darts Set - 12 pieces Mega Blast",
			variants: 1,
			custom_domain: "shop.ignatgames.com",
			original_domain: "ignatgames.myshopify.com",
			handle: "ignatgames-steel-tip-darts-set-professional-darts-with-aluminum-shafts-rubber-orings-and-extra-flights-dart-sharpener-brass-12-pack-mega-blast",
			main_image: "https://cdn.shopify.com/s/files/1/0343/9453/8028/products/B06Y1113D2.MAIN.jpg?v=1682095370",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=Professional Steel Tip Darts Set - 12 pieces Mega Blast",
		},
		price: {
			usd_price: 69.99,
			usd_price_min: 69.99,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 118,
		products_count: 22,
		monthly_revenue: 8284.2,
		created_at: "2020-09-02T06:53:50.000000Z",
		store_created_at: "2020-09-02T00:00:00.000000Z",
		category: "Toys & Games",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 7785541861558,
		product: {
			images: 6,
			title: "Portable Air Duster Wireless Vacuum Cleaner",
			variants: 1,
			custom_domain: "b711a5-14.myshopify.com",
			original_domain: "b711a5-14.myshopify.com",
			handle: "portable-air-duster-wireless-vacuum-cleaner",
			main_image: "https://cdn.shopify.com/s/files/1/0642/7820/0502/products/7130496472.jpg?v=1709215228",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Portable Air Duster Wireless Vacuum Cleaner",
		},
		price: {
			usd_price: 9.45,
			usd_price_min: 9.45,
			currency: "INR",
			original_price: 790,
		},
		monthly_sales: 413,
		products_count: 16,
		monthly_revenue: 3913.4600000000005,
		created_at: "2024-02-29T14:00:28.000000Z",
		store_created_at: "2024-02-29T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 6972732309550,
		product: {
			images: 6,
			title: "Portable Mini Electric Shaver, Pocket Beard Trimmer 🔥50% OFF TODAY🔥",
			variants: 1,
			custom_domain: "www.lynedlove.com",
			original_domain: "1c69ed-1a.myshopify.com",
			handle: "mini-electric-shaver",
			main_image: "https://cdn.shopify.com/s/files/1/0562/3470/4942/files/61Lcsu7pgxL._SL1000.jpg?v=1712314296",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=Portable Mini Electric Shaver, Pocket Beard Trimmer 🔥50% OFF TODAY🔥",
		},
		price: {
			usd_price: 8.36,
			usd_price_min: 8.36,
			currency: "INR",
			original_price: 699,
		},
		monthly_sales: 2348,
		products_count: 23,
		monthly_revenue: 19683.08,
		created_at: "2024-03-20T14:53:04.000000Z",
		store_created_at: "2024-03-12T00:00:00.000000Z",
		category: "Health & Household",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 6739888078963,
		product: {
			images: 25,
			title: "2-in-1 Leafy Face Mask and Bucket Hat (Adjustable, OSFM)",
			variants: 12,
			custom_domain: "quikcamo.com",
			original_domain: "quikcamo.myshopify.com",
			handle: "bucket-hats-mossy-oak-and-realtree-camo",
			main_image:
				"https://cdn.shopify.com/s/files/1/0056/9389/8850/products/MossyOakandRealtreeLeafyCamoBucketHatFaceMaskforHunting.webp?v=1674030318",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=2-in-1 Leafy Face Mask and Bucket Hat (Adjustable, OSFM)",
		},
		price: {
			usd_price: 38.95,
			usd_price_min: 38.95,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 156,
		products_count: 20,
		monthly_revenue: 6076.2,
		created_at: "2022-01-23T04:22:55.000000Z",
		store_created_at: "2019-05-17T00:00:00.000000Z",
		category: "Camera & Photo",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8214010593516,
		product: {
			images: 6,
			title: "Goggle Mask Anti Scratch UV Protective",
			variants: 1,
			custom_domain: "47c42f-65.myshopify.com",
			original_domain: "47c42f-65.myshopify.com",
			handle: "goggle-mask-anti-scratch-uv-protective",
			main_image: "https://cdn.shopify.com/s/files/1/0691/7095/4476/products/5745312016.jpg?v=1709214380",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Goggle Mask Anti Scratch UV Protective",
		},
		price: {
			usd_price: 7.17,
			usd_price_min: 7.17,
			currency: "INR",
			original_price: 599,
		},
		monthly_sales: 513,
		products_count: 15,
		monthly_revenue: 3688.309999999999,
		created_at: "2024-02-29T13:46:20.000000Z",
		store_created_at: "2024-02-29T00:00:00.000000Z",
		category: "Sports & Outdoors",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8275073335530,
		product: {
			images: 4,
			title: "Portable Bladeless Hanging Rechargeable Neck Fan",
			variants: 1,
			custom_domain: "mallickgroup.in",
			original_domain: "1c7338-82.myshopify.com",
			handle: "portable-bladeless-hanging-rechargeable-neck-fan",
			main_image: "https://cdn.shopify.com/s/files/1/0676/9488/7146/files/8483132276.jpg?v=1711097606",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Portable Bladeless Hanging Rechargeable Neck Fan",
		},
		price: {
			usd_price: 11.94,
			usd_price_min: 11.94,
			currency: "INR",
			original_price: 998,
		},
		monthly_sales: 1766,
		products_count: 14,
		monthly_revenue: 21121.23,
		created_at: "2024-03-22T08:53:26.000000Z",
		store_created_at: "2024-03-20T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 7128095096874,
		product: {
			images: 6,
			title: "Portable Air Duster Wireless Vacuum Cleaner",
			variants: 1,
			custom_domain: "beemart.in",
			original_domain: "8e7860-25.myshopify.com",
			handle: "portable-air-duster-wireless-vacuum-cleaner",
			main_image: "https://cdn.shopify.com/s/files/1/0601/6814/2890/files/7130496472.jpg?v=1711544627",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Portable Air Duster Wireless Vacuum Cleaner",
		},
		price: {
			usd_price: 9.56,
			usd_price_min: 9.56,
			currency: "INR",
			original_price: 799,
		},
		monthly_sales: 322,
		products_count: 11,
		monthly_revenue: 3086.1,
		created_at: "2024-03-27T13:03:47.000000Z",
		store_created_at: "2024-03-27T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 6665404317768,
		product: {
			images: 7,
			title: "GRECELL Portable Power Station 1000W",
			variants: 1,
			custom_domain: "grecell.com",
			original_domain: "poweraddmall-co-uk.myshopify.com",
			handle: "portable-power-station-1000w",
			main_image: "https://cdn.shopify.com/s/files/1/0284/7306/5544/products/GR-SE000301.jpg?v=1666683776",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=GRECELL Portable Power Station 1000W",
		},
		price: {
			usd_price: 469,
			usd_price_min: 469,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 8,
		products_count: 20,
		monthly_revenue: 3752,
		created_at: "2022-10-25T07:42:56.000000Z",
		store_created_at: "2022-10-21T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8014772043974,
		product: {
			images: 6,
			title: "Portable Air Duster Wireless Vacuum Cleaner",
			variants: 1,
			custom_domain: "thedeck.store",
			original_domain: "b27c2e-f3.myshopify.com",
			handle: "portable-air-duster-wireless-vacuum-cleaner",
			main_image: "https://cdn.shopify.com/s/files/1/0625/8943/6102/files/7130496472.jpg?v=1711948801",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Portable Air Duster Wireless Vacuum Cleaner",
		},
		price: {
			usd_price: 7.78,
			usd_price_min: 7.78,
			currency: "INR",
			original_price: 650,
		},
		monthly_sales: 483,
		products_count: 12,
		monthly_revenue: 3762.03,
		created_at: "2024-04-01T05:20:01.000000Z",
		store_created_at: "2024-03-31T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8068526440728,
		product: {
			images: 7,
			title: "Anti-Aging Cream",
			variants: 1,
			custom_domain: "factorfiveskin.com",
			original_domain: "factorfive-skincare.myshopify.com",
			handle: "anti-aging-cream",
			main_image: "https://cdn.shopify.com/s/files/1/0694/8267/6504/products/anti_aging_cream.png?v=1673220542",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Anti-Aging Cream",
		},
		price: {
			usd_price: 189,
			usd_price_min: 189,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 34,
		products_count: 20,
		monthly_revenue: 6426,
		created_at: "2022-12-21T22:35:54.000000Z",
		store_created_at: "2017-02-10T00:00:00.000000Z",
		category: "Grocery & Gourmet Food",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 7939153330342,
		product: {
			images: 8,
			title: "QUOYA QL600 Smart Electric Curtain Track, Motorized motor, Adjustable track length, compatible with Alexa, google, Siri, Apple Watch (QL600, up to 118 inches (3m))",
			variants: 3,
			custom_domain: "www.quoyaliving.com",
			original_domain: "quoya-living.myshopify.com",
			handle: "quoya-ql600-smart-electric-curtain-track-motorized-motor-adjustable-track-length-compatible-with-alexa-google-siri-apple-watch-ql600-up-to-118-inches-3m",
			main_image: "https://cdn.shopify.com/s/files/1/0457/5985/6806/products/71j3k-HjKHL.jpg?v=1708630910",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=QUOYA QL600 Smart Electric Curtain Track, Motorized motor, Adjustable track length, compatible with Alexa, google, Siri, Apple Watch (QL600, up to 118 inches (3m))",
		},
		price: {
			usd_price: 198.01,
			usd_price_min: 198.01,
			usd_price_max: 247.82,
			currency: "GBP",
			original_price: 159,
		},
		monthly_sales: 39,
		products_count: 22,
		monthly_revenue: 9593.45,
		created_at: "2024-02-22T19:41:50.000000Z",
		store_created_at: "2020-08-24T00:00:00.000000Z",
		category: "Appliances",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8956085797165,
		product: {
			images: 9,
			title: "INCHARGEx BYD Perfect Combo 32A 5pin Single Phase 7kW Portable EV Charger & 32A 7kW Type 2 to Type 2 Charging Cable",
			variants: 1,
			custom_domain: "inchargex.com.au",
			original_domain: "inchargex.myshopify.com",
			handle: "inchargex-byd-perfect-combo-32a-5pin-single-phase-7kw-portable-ev-charger-32a-7kw-type-2-to-type-2-charging-cable",
			main_image:
				"https://cdn.shopify.com/s/files/1/0682/7127/6333/products/BYD-perfect-combo-466020.jpg?v=1698715508",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=INCHARGEx BYD Perfect Combo 32A 5pin Single Phase 7kW Portable EV Charger & 32A 7kW Type 2 to Type 2 Charging Cable",
		},
		price: {
			usd_price: 359.28,
			usd_price_min: 359.28,
			currency: "AUD",
			original_price: 557.99,
		},
		monthly_sales: 21,
		products_count: 23,
		monthly_revenue: 7635.89,
		created_at: "2023-10-30T02:44:49.000000Z",
		store_created_at: "2022-11-19T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8860591751477,
		product: {
			images: 1,
			title: "Eyglow's Portable Projector",
			variants: 5,
			custom_domain: "eyglow.com",
			original_domain: "0706c0.myshopify.com",
			handle: "eyglows-portable-projector",
			main_image: "https://cdn.shopify.com/s/files/1/0844/2865/2853/files/PortableProjector.jpg?v=1700168593",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Eyglow's Portable Projector",
		},
		price: {
			usd_price: 151.84,
			usd_price_min: 151.84,
			currency: "ISK",
			original_price: 21490,
		},
		monthly_sales: 34,
		products_count: 3,
		monthly_revenue: 4859.51,
		created_at: "2023-10-28T14:37:05.000000Z",
		store_created_at: "2023-10-28T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 7963600355485,
		product: {
			images: 5,
			title: "Professional Electric Hair Straightener Comb Brush",
			variants: 1,
			custom_domain: "www.buywaw.com",
			original_domain: "buywaw.myshopify.com",
			handle: "professional-electric-hair-straightener-comb-brush",
			main_image: "https://cdn.shopify.com/s/files/1/0398/7885/2765/products/5561272441.jpg?v=1707741711",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=Professional Electric Hair Straightener Comb Brush",
		},
		price: {
			usd_price: 10.16,
			usd_price_min: 10.16,
			currency: "INR",
			original_price: 849,
		},
		monthly_sales: 1238,
		products_count: 24,
		monthly_revenue: 12603.51,
		created_at: "2024-02-12T12:41:51.000000Z",
		store_created_at: "2023-07-14T00:00:00.000000Z",
		category: "Health & Household",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 9077978464533,
		product: {
			images: 4,
			title: "Portable Neck Fan",
			variants: 1,
			custom_domain: "the7evenstore.in",
			original_domain: "8594e6-4.myshopify.com",
			handle: "portable-bladeless-hanging-rechargeable-neck-fan",
			main_image: "https://cdn.shopify.com/s/files/1/0839/1511/2725/files/61I6Fh7rftS._SX679.jpg?v=1713188283",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Portable Neck Fan",
		},
		price: {
			usd_price: 10.76,
			usd_price_min: 10.76,
			currency: "INR",
			original_price: 899,
		},
		monthly_sales: 660,
		products_count: 6,
		monthly_revenue: 7073.95,
		created_at: "2024-04-15T07:29:51.000000Z",
		store_created_at: "2024-01-21T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 9086559584566,
		product: {
			images: 3,
			title: "3 in 1 High Protection Quick Car Ceramic Coating Spray - Car Wax Polish Spray",
			variants: 2,
			custom_domain: "fineselectionsekart.in",
			original_domain: "fine-selections-e-kartt-4907.myshopify.com",
			handle: "3-in-1-high-protection-quick-car-ceramic-coating-spray-car-wax-polish-spray",
			main_image: "https://cdn.shopify.com/s/files/1/0760/0858/7574/products/8093756053.jpg?v=1706793556",
		},
		external: {
			ali_url:
				"https://www.aliexpress.com/wholesale?SearchText=3 in 1 High Protection Quick Car Ceramic Coating Spray - Car Wax Polish Spray",
		},
		price: {
			usd_price: 8.16,
			usd_price_min: 8.16,
			usd_price_max: 8.77,
			currency: "INR",
			original_price: 682,
		},
		monthly_sales: 351,
		products_count: 16,
		monthly_revenue: 2927.3799999999997,
		created_at: "2024-02-01T13:19:16.000000Z",
		store_created_at: "2023-04-29T00:00:00.000000Z",
		category: "Home & Kitchen & Dining",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 10715598717246,
		product: {
			images: 8,
			title: "Portable Air Duster Wireless Vacuum Cleaner",
			variants: 1,
			custom_domain: "tehgatheringpoint.myshopify.com",
			original_domain: "131bc3-2.myshopify.com",
			handle: "portable-air-duster-wireless-vacuum-cleaner",
			main_image: "https://cdn.shopify.com/s/files/1/0833/9236/4862/products/4471561838.jpg?v=1702604486",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Portable Air Duster Wireless Vacuum Cleaner",
		},
		price: {
			usd_price: 9.56,
			usd_price_min: 9.56,
			currency: "INR",
			original_price: 799,
		},
		monthly_sales: 349,
		products_count: 13,
		monthly_revenue: 3342.97,
		created_at: "2023-12-15T01:41:26.000000Z",
		store_created_at: "2023-10-01T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8121940508931,
		product: {
			images: 6,
			title: "I am Small/Multi Pocket Cargos",
			variants: 30,
			custom_domain: "gkikz.com",
			original_domain: "gkikz-2-0.myshopify.com",
			handle: "colours-haul-group-i-am-small-pocket-cargos",
			main_image: "https://cdn.shopify.com/s/files/1/0438/3857/0647/files/5.png?v=1690816635",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=I am Small/Multi Pocket Cargos",
		},
		price: {
			usd_price: 56.99,
			usd_price_min: 56.99,
			currency: "USD",
			original_price: null,
		},
		monthly_sales: 147,
		products_count: 20,
		monthly_revenue: 8377.53,
		created_at: "2023-07-31T15:02:04.000000Z",
		store_created_at: "2020-02-28T00:00:00.000000Z",
		category: "Clothing & Shoes & Jewelry",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
	{
		key: 8471391928616,
		product: {
			images: 5,
			title: "Pulse Pro Amoled Smart Watch",
			variants: 4,
			custom_domain: "danytech.com.pk",
			original_domain: "dany-tech-pk.myshopify.com",
			handle: "pulse-pro-smart-watch",
			main_image: "https://cdn.shopify.com/s/files/1/0259/4412/9622/files/PulsePro-Black.png?v=1691686415",
		},
		external: {
			ali_url: "https://www.aliexpress.com/wholesale?SearchText=Pulse Pro Amoled Smart Watch",
		},
		price: {
			usd_price: 23.77,
			usd_price_min: 23.77,
			currency: "PKR",
			original_price: 6599,
		},
		monthly_sales: 129,
		products_count: 16,
		monthly_revenue: 3063.49,
		created_at: "2023-08-10T16:53:33.000000Z",
		store_created_at: "2016-03-18T00:00:00.000000Z",
		category: "Electronics",
		product_type: "Physical",
		action: {
			is_tracked: false,
		},
	},
];
export const SAMPLE_CHART = [
	{
		date: "2024-03-21",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-03-22",
		value: 0,
		invalid: false,
		message: null,
	},
];
export const SAMPLE_CHART_DATA = [
	{
		date: "2024-03-21",
		value: 962.98,
		invalid: false,
		message: null,
	},
	{
		date: "2024-03-22",
		value: 907.26,
		invalid: false,
		message: null,
	},
	{
		date: "2024-03-23",
		value: 1118.05,
		invalid: false,
		message: null,
	},
	{
		date: "2024-03-24",
		value: 946,
		invalid: false,
		message: null,
	},
	{
		date: "2024-03-25",
		value: 1505,
		invalid: false,
		message: null,
	},
	{
		date: "2024-03-26",
		value: 980.98,
		invalid: false,
		message: null,
	},
	{
		date: "2024-03-27",
		value: 798.45,
		invalid: false,
		message: null,
	},
	{
		date: "2024-03-28",
		value: 603.72,
		invalid: false,
		message: null,
	},
	{
		date: "2024-03-29",
		value: 161.7,
		invalid: false,
		message: null,
	},
	{
		date: "2024-03-30",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-03-31",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-01",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-02",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-03",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-04",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-05",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-06",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-07",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-08",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-09",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-10",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-11",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-12",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-13",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-14",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-15",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-16",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-17",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-18",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-19",
		value: 0,
		invalid: false,
		message: null,
	},
	{
		date: "2024-04-20",
		value: 0,
		invalid: false,
		message: null,
	},
];

export const formatDate = (dateString, isHideYear = false) => {
	let date = new Date(dateString);
	let options = { year: "numeric", month: "short", day: "2-digit" };
	if (isHideYear) {
		options = { month: "short", day: "2-digit" };
	}
	return date.toLocaleDateString("en-US", options);
};
export const formatDataTable = (products) => {
	const newFormat = products.map((item) => {
		const aliUrl = item.quick_search?.find((item) => item.platform == "aliexpress")?.link;
		return {
			key: item.id,
			product: {
				images: item.images,
				title: item.title,
				variants: item.variants,
				custom_domain: item?.store?.custom_domain,
				original_domain: item?.store?.original_domain,
				handle: item.handle,
				main_image: item.main_image,
				id: item.store.id,
				variantId: item.id,
			},
			external: {
				ali_url: aliUrl,
			},
			price: {
				usd_price: item.usd_price,
				usd_price_min: item.usd_price_min,
				usd_price_max: item.usd_price_max,
				currency: item.store.currency,
				original_price: item.original_price,
			},
			monthly_sales: item.monthly_sales,
			store_products_count: item.store.products_count,
			monthly_revenue: item.monthly_revenue,
			created_at: item.created_at,
			store_created_at: item.store.created_at,
			category: item.category,
			product_type: item.product_type,
			action: {
				is_tracked: item.is_tracked,
			},
		};
	});
	return newFormat;
};

export const formatMoney = (number, isRound = false) => {
	if (isRound) {
		const roundedNumber = Math.round(number);
		return roundedNumber.toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
	}
	return Number(number).toLocaleString("en-US", { style: "currency", currency: "USD" });
};

export const numberBreaksDown = {
	calcPOT: (sellingPrice, goodSold, shippingCost, feePerOrder, CPA, orders) => {
		return Number((sellingPrice - goodSold - shippingCost - feePerOrder - CPA) * orders);
	},
	calcPCRatio: (sellingPrice, goodSold, shippingCost) => {
		return Number(sellingPrice / (goodSold + shippingCost));
	},
	calcBECPA: (sellingPrice, goodSold, shippingCost, feePerOrder) => {
		return Number(sellingPrice - goodSold - shippingCost - feePerOrder);
	},
	calcBEROAS: (sellingPrice, BECPA) => {
		return Number(sellingPrice / BECPA);
	},
	calcProfitMargin: (POTProfit, sellingPrice, orders) => {
		return Number((POTProfit * 100) / (sellingPrice * orders)).toFixed(2) + "%";
	},
};

export const calcNumbers = (numbers) => {
	const { sellingPrice, goodSold, shippingCost, feePerOrder, CPA, orders } = numbers;
	const POTProfit = numberBreaksDown.calcPOT(sellingPrice, goodSold, shippingCost, feePerOrder, CPA, orders);

	const PCRatio =
		goodSold === 0 && shippingCost === 0 ? 0 : numberBreaksDown.calcPCRatio(sellingPrice, goodSold, shippingCost);
	const BECPA = numberBreaksDown.calcBECPA(sellingPrice, goodSold, shippingCost, feePerOrder);
	const BEROAS = BECPA !== 0 ? numberBreaksDown.calcBEROAS(sellingPrice, BECPA) : 0;
	const profitMargin =
		sellingPrice == 0 || orders == 0 ? "0.00%" : numberBreaksDown.calcProfitMargin(POTProfit, sellingPrice, orders);
	const formatPOTProfit = formatMoney(POTProfit, true);
	const formatPCRatio = Number(PCRatio).toFixed(2) + "X";
	const formatBECPA = formatMoney(BECPA);
	const formatBEROAS = Number(BEROAS).toFixed(2);
	return {
		...numbers,
		POTProfit: formatPOTProfit,
		PCRatio: formatPCRatio,
		BECPA: formatBECPA,
		BEROAS: formatBEROAS,
		profitMargin,
	};
};

export const getEncrypted = (data) => {
	const time = Date.parse(new Date()).toString();
	const newData = { ...data, time: time, timestamp: time };
	const stringifiedData = JSON.stringify(newData);
	const base64ToHex = (str) => {
		const raw = atob(str);
		let result = "";
		for (let i = 0; i < raw.length; i++) {
			const hex = raw.charCodeAt(i).toString(16);
			result += hex.length === 2 ? hex : "0" + hex;
		}
		return result;
	};

	const t = base64ToHex("uV7HJdHDlqqJN6Fuyl8ulILoGSeccbyCpr6h3wBerpw=");

	const signingKeyHex = t.slice(0, 32);
	const signingKey = CryptoJS.enc.Hex.parse(signingKeyHex);
	const encryptionKeyHex = t.slice(32);
	const encryptionKey = CryptoJS.enc.Hex.parse(encryptionKeyHex);

	const iv = CryptoJS.lib.WordArray.random(128 / 8);
	var encrypted = CryptoJS.AES.encrypt(stringifiedData, encryptionKey, { iv: iv }).ciphertext;
	var i = CryptoJS.enc.Hex.parse("80");
	var o = CryptoJS.enc.Hex.parse("80");

	const dateStr = CryptoJS.enc.Hex.parse(time);
	i = i.concat(dateStr).concat(iv).concat(encrypted);
	i = CryptoJS.HmacSHA256(i, signingKey);
	o = (o = (o = (o = o.concat(dateStr)).concat(iv)).concat(encrypted)).concat(i);
	// i = (i = (i = i.concat(time)).concat(iv)).concat(encrypted);
	return o.toString(CryptoJS.enc.Base64);
};

export const getEncrypted2 = (data) => {
	const time = Date.parse(new Date()).toString();
	const newData = { ...data, time: time, timestamp: time };
	const stringifiedData = JSON.stringify(newData);
	const base64ToHex = (str) => {
		const raw = atob(str);
		let result = "";
		for (let i = 0; i < raw.length; i++) {
			const hex = raw.charCodeAt(i).toString(16);
			result += hex.length === 2 ? hex : "0" + hex;
		}
		return result;
	};

	const t = base64ToHex("uV7HJdHDlqqJN6Fuyl8ulILoGSeccbyCpr6h3wBerpw=");

	const signingKeyHex = t.slice(0, 32);
	const signingKey = CryptoJS.enc.Hex.parse(signingKeyHex);
	const encryptionKeyHex = t.slice(32);
	const encryptionKey = CryptoJS.enc.Hex.parse(encryptionKeyHex);

	const iv = CryptoJS.lib.WordArray.random(128 / 8);
	var encrypted = CryptoJS.AES.encrypt(stringifiedData, encryptionKey, { iv: iv }).ciphertext;
	var i = CryptoJS.enc.Hex.parse("80");
	var o = CryptoJS.enc.Hex.parse("80");

	const dateStr = CryptoJS.enc.Hex.parse(time);
	i = i.concat(dateStr).concat(iv).concat(encrypted);
	i = CryptoJS.HmacSHA256(i, signingKey);
	o = (o = (o = (o = o.concat(dateStr)).concat(iv)).concat(encrypted)).concat(i);
	// i = (i = (i = i.concat(time)).concat(iv)).concat(encrypted);
	return o.toString(CryptoJS.enc.Base64);
};
