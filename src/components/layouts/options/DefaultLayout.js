import { ConfigProvider, Layout } from "antd";
import styles from "./styles/style.module.scss";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";

const { Content } = Layout;

function DefaultLayout({ children, setIndexMenu }) {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "#0C8CFA",
					fontFamily: "Inter",
					colorBgSpotlight: "#fff",
					colorLinkHover: "#0C8CFA",
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
				<Content className={`${styles.content__container}`}>
					<div>{children}</div>
				</Content>
				<FooterComponent />
			</div>
		</ConfigProvider>
	);
}
export default DefaultLayout;
