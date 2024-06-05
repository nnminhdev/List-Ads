// import { Col, Layout, Row, Flex } from "antd";
import style from "./style.module.scss";
import { Layout, Menu, Avatar, Dropdown, Space } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import logoSpypro from "../../../../../assets/layout/logo-spypro.png";
const styleHeader = {};

const userMenu = (
	<Menu>
		<Menu.Item key="1" icon={<SettingOutlined />}>
			Settings
		</Menu.Item>
		<Menu.Item key="2" icon={<LogoutOutlined />}>
			Logout
		</Menu.Item>
	</Menu>
);

const HeaderComponent = ({ setIndexMenu }) => {
	const { Header } = Layout;
	const handleChangeMenu = (e) => {
		setIndexMenu(e?.key);
	};
	return (
		<Header
			style={{
				display: "flex",
				justifyContent: "space-between",
				background: "#fff",
				padding: "0 100px",
			}}
			className={style.nav}
		>
			<div className="logo" style={{ fontSize: "20px", fontWeight: "bold" }}>
				<img src={logoSpypro} alt="logo" width={"110px"} height={"auto"} />
			</div>
			<Menu
				theme="light"
				mode="horizontal"
				defaultSelectedKeys={["1"]}
				style={{ flex: 1, justifyContent: "center", fontWeight: 600, fontSize: ".87em" }}
				onClick={handleChangeMenu}
			>
				<Menu.Item key="1">AD SPY</Menu.Item>
				<Menu.Item key="2">SEARCH PRODUCT</Menu.Item>
				<Menu.Item key="3">COMPETITOR SEARCH</Menu.Item>
			</Menu>
			<Dropdown overlay={userMenu} trigger={["click"]}>
				<Space>
					<Avatar icon={<UserOutlined />} />
				</Space>
			</Dropdown>
		</Header>
	);
};

export default HeaderComponent;
