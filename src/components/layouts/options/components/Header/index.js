// import { Col, Layout, Row, Flex } from "antd";
import style from "./style.module.scss";
import { Layout, Menu, Avatar, Dropdown, Space } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
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
		// <Header className={style.nav} style={styleHeader}>
		// 	<Row flex>
		// 		<Col span={2}>
		// 			<div>
		// 				<img />
		// 			</div>
		// 		</Col>
		// 		<Col span={20}>
		// 			<ul className={style.menu}>
		// 				<Flex justify="space-between">
		// 					<li>AD SPY</li>
		// 					<li>SEARCH PRODUCT</li>
		// 					<li>COMPETITOR SEARCH</li>
		// 				</Flex>
		// 			</ul>
		// 		</Col>
		// 	</Row>
		// </Header>

		<Header
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				background: "#fff",
				padding: "0 100px",
			}}
			className={style.nav}
		>
			<div className="logo" style={{ fontSize: "20px", fontWeight: "bold" }}>
				MyLogo
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
