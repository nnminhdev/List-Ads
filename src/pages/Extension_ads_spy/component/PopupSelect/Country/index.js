import { Button, Flex, Typography } from "antd";
import { ListLanguages } from "../constant";

import style from "./style.module.scss";
const Country = () => {
	return (
		<div className={style.country__wrap}>
			<div className={style.country__top}>
				<Flex justify="space-between" align="center">
					<Typography>Language</Typography>
					<Flex justify="start" gap={10}>
						<Button>MultiSelect</Button>
						<Button>All</Button>
					</Flex>
				</Flex>
			</div>
			<div className={style.country__bottom}>
				<Flex justify="space-between" gap={10} wrap>
					{ListLanguages.map((item, index) => {
						return <Typography className={style.country__bottom__item} key={index}> {item.label}</Typography>;
					})}
				</Flex>
			</div>
		</div>
	);
};

export default Country;
