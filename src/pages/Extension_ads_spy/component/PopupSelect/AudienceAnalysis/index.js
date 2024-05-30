import { Button, Checkbox, Flex } from "antd";
import { options, optionsAge } from "../constant";

import style from "./style.module.scss";

const AudienceAnalysis = () => {
	const handleChangeSelectCheckBox = () => {};
	return (
		<div className={style.audience__wrap}>
			<div className={style.audience__top}>
				<span>Audience Analysis</span>
			</div>
			<div className={style.audience__bottom}>
				<div className={style.audience__bottom__gender}>
					<Flex justify="space-between" gap={10}>
						<div className={style.audience__bottom__title}>
							<span>Gender</span>
						</div>
						<Flex
							style={{
								width: "90%",
							}}
						>
							<Checkbox.Group options={options} onChange={handleChangeSelectCheckBox} />
						</Flex>
					</Flex>
				</div>
				<div className={style.audience__bottom__age}>
					<Flex justify="space-between" gap={10}>
						<div className={style.audience__bottom__title}>
							<span>Age</span>
						</div>
						<Flex
							style={{
								width: "90%",
							}}
						>
							<Checkbox.Group options={optionsAge} onChange={handleChangeSelectCheckBox} />
						</Flex>
					</Flex>
				</div>
				<div className={style.audience__group_button}>
					<Flex gap="small" wrap justify="center">
						<Button type="primary">OK</Button>
						<Button>Cancel</Button>
					</Flex>
				</div>
			</div>
		</div>
	);
};

export default AudienceAnalysis;
