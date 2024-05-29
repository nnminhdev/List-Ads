import { Typography, Layout, ConfigProvider, theme, Button, Card, Flex } from "antd";
import TableProduct from "./components/Table";
import "./index.scss";
import { getEncrypted } from "./constants";
import Sidebar from "../../components/common/sidebar";

const { Title } = Typography;
const { Header, Content, Footer } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
	key: String(index + 1),
	label: `nav ${index + 1}`,
}));
const ExtensionProduct = () => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	getEncrypted();
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "#FF4C00",
				},
				components: {
					Select: {
						controlHeight: 40,
					},
				},
			}}
		>
			<Layout>
				{/* <Sidebar /> */}
				<Content
					style={{
						padding: "0 24px 24px",
						background: "white",
						// marginLeft: 250,
					}}
				>
					<Flex justify="space-between" align="center">
						<Title level={3}>Product Database</Title>
					</Flex>
					<TableProduct />
				</Content>
			</Layout>
		</ConfigProvider>
	);
};
export default ExtensionProduct;
