import { ConfigProvider, Layout } from "antd";
import styles from "./styles/style.module.scss";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";

const { Content } = Layout;

const DefaultLayout = ({ children, setIndexMenu }) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "#0C8CFA",
					fontFamily: "Inter",
					colorBgSpotlight: "#fff",
				},
				components: {
					Carousel: {
						arrowSize: 25,
					},
				},
			}}
		>
			<div>
				<HeaderComponent setIndexMenu={setIndexMenu} />
				<Content style={{ minHeight: "100vh", padding: "20px 100px" }}>
					<div>{children}</div>
				</Content>
				<FooterComponent />
			</div>
		</ConfigProvider>
	);
};
export default DefaultLayout;
