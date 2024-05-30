import { Button, Flex, Typography } from "antd";
import style from "./style.module.scss";
import { MarketingObjectivesConstant } from "../constant";
const MarketingObjectives = () => {
	return (
		<div className={style.country__wrap}>
			<div className={style.country__top}>
				<Flex justify="space-between" align="center">
					<Typography>Marketing Objectives(CTA)</Typography>
					<Flex justify="start" gap={10}>
						<Button>MultiSelect</Button>
						<Button>All</Button>
					</Flex>
				</Flex>
			</div>
			<div className={style.country__bottom}>
				{MarketingObjectivesConstant.map((item, index) => {
					return (
						<div>
							<Typography className={style.country__bottom__item} key={index}>
								{" "}
								{item.topic}
							</Typography>
							<Flex justify="start" gap={10} wrap>
								{item?.list_data?.map((item, index) => {
									return <Typography>{item.label}</Typography>;
								})}
							</Flex>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MarketingObjectives;
