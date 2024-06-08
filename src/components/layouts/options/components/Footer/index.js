import { Layout, Row, Col, Typography, Space } from "antd";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const FooterComponent = () => {
	return (
		<Footer style={{ background: "#eee", color: "#000000", padding: "40px 100px", marginTop: '40px' }}>
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={12} md={8}>
					<Title level={4} style={{ color: "#000000" }}>
						About Us
					</Title>
					<Text style={{ color: "#000000" }}>
						We are a team of professionals committed to providing the best services. Contact us for more
						information.
					</Text>
				</Col>
				<Col xs={24} sm={12} md={8}>
					<Title level={4} style={{ color: "#000000" }}>
						Quick Links
					</Title>
					<Space direction="vertical">
						<Link href="#" style={{ color: "#000000" }}>
							Home
						</Link>
						<Link href="#" style={{ color: "#000000" }}>
							About
						</Link>
						<Link href="#" style={{ color: "#000000" }}>
							Services
						</Link>
						<Link href="#" style={{ color: "#000000" }}>
							Contact
						</Link>
					</Space>
				</Col>
				<Col xs={24} sm={12} md={8}>
					<Title level={4} style={{ color: "#000000" }}>
						Follow Us
					</Title>
					<Space size="large">
						<Link href="https://facebook.com" target="_blank" style={{ color: "#000000" }}>
							<FacebookOutlined style={{ fontSize: "24px" }} />
						</Link>
						<Link href="https://twitter.com" target="_blank" style={{ color: "#000000" }}>
							<TwitterOutlined style={{ fontSize: "24px" }} />
						</Link>
						<Link href="https://instagram.com" target="_blank" style={{ color: "#000000" }}>
							<InstagramOutlined style={{ fontSize: "24px" }} />
						</Link>
						<Link href="https://linkedin.com" target="_blank" style={{ color: "#000000" }}>
							<LinkedinOutlined style={{ fontSize: "24px" }} />
						</Link>
					</Space>
				</Col>
			</Row>
			<Row justify="center" style={{ marginTop: "20px" }}>
				<Col>
					<Text style={{ color: "#000000" }}>© 2023 Your Company. All rights reserved.</Text>
				</Col>
			</Row>
		</Footer>
	);
};

export default FooterComponent;
