import { Layout, Row, Col, Typography, Space } from "antd";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const FooterComponent = () => {
	return (
		<Footer
			style={{
				background: "#eee",
				color: "#000000",
				padding: "40px 100px",
				marginTop: "40px",
				minHeight: "200px",
			}}
		>
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={12} md={8}></Col>
				<Col xs={24} sm={12} md={8}></Col>
				<Col xs={24} sm={12} md={8}></Col>
			</Row>
			<Row justify="center" style={{ marginTop: "20px" }}>
				<Col></Col>
			</Row>
		</Footer>
	);
};

export default FooterComponent;
