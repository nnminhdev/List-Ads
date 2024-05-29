import { Layout, Row, Col, Typography, Space } from "antd";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const FooterComponent = () => {
	return (
		<Footer style={{ background: "#001529", color: "#fff", padding: "40px 20px" }}>
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={12} md={8}>
					<Title level={4} style={{ color: "#fff" }}>
						About Us
					</Title>
					<Text style={{ color: "#ccc" }}>
						We are a team of professionals committed to providing the best services. Contact us for more
						information.
					</Text>
				</Col>
				<Col xs={24} sm={12} md={8}>
					<Title level={4} style={{ color: "#fff" }}>
						Quick Links
					</Title>
					<Space direction="vertical">
						<Link href="#" style={{ color: "#ccc" }}>
							Home
						</Link>
						<Link href="#" style={{ color: "#ccc" }}>
							About
						</Link>
						<Link href="#" style={{ color: "#ccc" }}>
							Services
						</Link>
						<Link href="#" style={{ color: "#ccc" }}>
							Contact
						</Link>
					</Space>
				</Col>
				<Col xs={24} sm={12} md={8}>
					<Title level={4} style={{ color: "#fff" }}>
						Follow Us
					</Title>
					<Space size="large">
						<Link href="https://facebook.com" target="_blank" style={{ color: "#ccc" }}>
							<FacebookOutlined style={{ fontSize: "24px" }} />
						</Link>
						<Link href="https://twitter.com" target="_blank" style={{ color: "#ccc" }}>
							<TwitterOutlined style={{ fontSize: "24px" }} />
						</Link>
						<Link href="https://instagram.com" target="_blank" style={{ color: "#ccc" }}>
							<InstagramOutlined style={{ fontSize: "24px" }} />
						</Link>
						<Link href="https://linkedin.com" target="_blank" style={{ color: "#ccc" }}>
							<LinkedinOutlined style={{ fontSize: "24px" }} />
						</Link>
					</Space>
				</Col>
			</Row>
			<Row justify="center" style={{ marginTop: "20px" }}>
				<Col>
					<Text style={{ color: "#ccc" }}>© 2023 Your Company. All rights reserved.</Text>
				</Col>
			</Row>
		</Footer>
	);
};

export default FooterComponent;
