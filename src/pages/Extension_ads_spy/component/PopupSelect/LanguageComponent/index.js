import { Button, Flex, Typography } from "antd";
import { ListLanguages } from "../constant";

import style from "./style.module.scss";
const Language = () => {
	return (
		<div className={style.language__wrap}>
			<div className={style.language__top}>
				<Flex justify="space-between" align="center">
					<Typography>Language</Typography>
					<Flex justify="start" gap={10}>
						<Button>MultiSelect</Button>
						<Button>All</Button>
					</Flex>
				</Flex>
			</div>
			<div className={style.language__bottom}>
				<Flex justify="space-between" gap={10} wrap>
					{ListLanguages.map((item, index) => {
						return (
							<Typography className={style.language__bottom__item} key={index}>
								{" "}
								{item.label}
							</Typography>
						);
					})}
				</Flex>
			</div>
		</div>
	);
};

export default Language;
