import { Card, Avatar, Typography, Button } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";

import "./index.scss";
const { Meta } = Card;
const { Title, Text } = Typography;
const CardAdsComponent = ({
	dataCard
}) => {
	return (
		<Card
			className="custom-card"
			cover={<img alt="example" src="https://via.placeholder.com/300x150" />}
			actions={[
				<SettingOutlined key="setting" />,
				<EditOutlined key="edit" />,
				<EllipsisOutlined key="ellipsis" />,
			]}
			hoverable={true}
			// loading={true}
			title={<TopCardComponent />}
		>
			<div className="additional-info">
				<Title level={5}>Additional Info</Title>
				<Text type="secondary">
					Here is some more information about this product that is only revealed once clicked on.
				</Text>
			</div>
			<Button type="primary" className="custom-button">
				Learn More
			</Button>
		</Card>
	);
};

export default CardAdsComponent;

const TopCardComponent = () => {
	return (
		<Meta
			avatar={<Avatar src="https://via.placeholder.com/50" />}
			title="Card Title"
			description="This is the description"
		/>
	);
};
