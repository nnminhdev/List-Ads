import { Button, Checkbox, Flex } from "antd";
import { options, optionsAge } from "../constant";

import style from "./style.module.scss";
import "./index.scss";

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
							wrap
							justify="start"
							align="center"
						>
							{/* <Checkbox.Group options={options} onChange={handleChangeSelectCheckBox} /> */}
							{options.map((item, index) => {
								return (
									<Flex
										style={{
											width: "150px",
										}}
										gap={5}
									>
										<Checkbox />
										<span>{item.label}</span>
									</Flex>
								);
							})}
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
							wrap
							justify="start"
							align="center"
						>
							{optionsAge.map((item, index) => {
								return (
									<Flex
										style={{
											width: "150px",
										}}

										gap={5}

									>
										<Checkbox />
										<span>{item.label}</span>
									</Flex>
								);
							})}
						</Flex>
					</Flex>
				</div>
				<div className={style.audience__group__button}>
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
