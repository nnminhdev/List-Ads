import { Layout } from "antd";
import styles from "./styles/style.module.scss";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";

const { Content } = Layout;
function DefaultLayout({ children, setIndexMenu }) {
	return (
		<div>
			<HeaderComponent setIndexMenu={setIndexMenu} />
			<Content style={{ minHeight: "100vh", padding: "20px 100px" }}>
				<div>{children}</div>
			</Content>
			<FooterComponent />
		</div>
	);
}
export default DefaultLayout;
