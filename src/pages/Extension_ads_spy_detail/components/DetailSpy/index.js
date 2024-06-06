import { Avatar, Button, Flex, Typography } from "antd";

const DetailSpyComponent = () => {
	return (
		<div>
			<Flex>
				<Avatar />
				<Typography />
			</Flex>
			<Flex justify="space-between">
				<div
					style={{
						width: "50%",
					}}
				>
					<div>
						<img />
					</div>
					<div>
						<Button>Landing Page</Button>
					</div>
				</div>
				<div
					style={{
						width: "50%",
					}}
				>
					<Button type="primary">Ad Details</Button>
					<div>
						<Flex justify="space-between" align="center">
							<div>
								<p>4.2K</p>
								<p>Impressions</p>
							</div>
							<div>
								<p>4.2K</p>
								<p>Impressions</p>
							</div>
							<div>
								<p>4.2K</p>
								<p>Impressions</p>
							</div>
						</Flex>
						<div>
							<Flex justify="start" align="center" gap={20}>
								<p>Duration:</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Duration:</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Duration:</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Duration:</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Duration:</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Duration:</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Duration:</p>
								<p>11111</p>
							</Flex>
							<Flex justify="start" align="center" gap={20}>
								<p>Duration:</p>
								<p>11111</p>
							</Flex>
						</div>
					</div>
				</div>
			</Flex>
		</div>
	);
};

export default DetailSpyComponent;
