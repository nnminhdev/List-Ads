import { Button, Flex, Input, Space } from "antd";
import style from "./style.module.scss";
const list_engagement = [
	{
		title: "Like",
	},
	{
		title: "Comment",
	},
	{
		title: "Share",
	},
];

const EngagementComponent = () => {
	return (
		<div className={style.engagement}>
			<div className={`${style.engagement__top}`}>
				<Flex justify="start">
					<p>Engagement</p>
				</Flex>
			</div>
			<div className={`${style.engagement__bottom}`}>
				{list_engagement.map((item, index) => {
					return (
						<Flex
							justify="space-between"
							align="center"
							gap={20}
							key={index}
							style={{
								marginTop: "10px",
							}}
						>
							<Flex>
								<p>{item.title}</p>
							</Flex>
							<Flex justify="space-between" align="center" gap={30}>
								<Button type="primary">All</Button>
								<p className={style.item}>1~100</p>
								<p className={style.item}>101~1000</p>
								<p className={style.item}> {"> 1000"}</p>
								<Space.Compact block>
									<Input style={{ width: 100, textAlign: "center" }} placeholder="Minimum" />
									<Input
										className="site-input-split"
										style={{
											width: 30,
											borderLeft: 0,
											borderRight: 0,
											pointerEvents: "none",
										}}
										placeholder="~"
										disabled
									/>
									<Input
										className="site-input-right"
										style={{
											width: 100,
											textAlign: "center",
										}}
										placeholder="Maximum"
									/>
								</Space.Compact>
							</Flex>
						</Flex>
					);
				})}
			</div>
			<div>
				<Flex justify="start" className={style.engagement__top} align="center">
					<p
						style={{
							width: "5%",
						}}
					>
						Reset
					</p>
					<Flex
						justify="center"
						gap={20}
						style={{
							width: "95%",
						}}
					>
						<Button>Cancel</Button>
						<Button type="primary">OK</Button>
					</Flex>
				</Flex>
			</div>
		</div>
	);
};

export default EngagementComponent;
