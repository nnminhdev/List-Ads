import { Flex } from "antd";
import { listFilterNetworks } from "../../../../utilities/constants/adsSpy/filter";
import DatePickerRange from "../Common/DatePickerRange";
import Placement from "../Common/Placement";
import SelectInput from "../Common/SelectInput";
import AudienceAnalysis from "../PopupSelect/AudienceAnalysis";
import style from "./index.module.scss";
import Country from "../PopupSelect/Country";
import MarketingObjectives from "../PopupSelect/Marketing Objectives";
import Language from "../PopupSelect/LanguageComponent";

const FilterComponent = () => {
	return (
		<div className={`shadow-common-light ${style.filter__container}`}>
			<div className={`${style.filter__item}`}>
				<Flex justify="space-between" style={{ width: "100%" }} align="center">
					<div className={style.filter__item__title}>
						<span>NetWorks:</span>
					</div>
					<div className={style.filter__item__right}>
						<Flex justify="start" gap={10}>
							{listFilterNetworks.map((item, index) => {
								return <NetWorkComponent platForm={item?.platForm} icon={item?.icon} />;
							})}
						</Flex>
					</div>
				</Flex>
			</div>

			<div className={`d-flex justify-start ${style.filter__item}`}>
				<Flex justify="space-between" style={{ width: "100%" }} align="center">
					<div className={style.filter__item__title}>
						<span>Basic:</span>
					</div>
					<div className={style.filter__item__right}>
						<Flex justify="start" gap={10}>
							<SelectInput PopupComponent={Country} placeholderSelect={"Country/Region"} />
							{/* <SelectInput PopupComponent={Language} placeholderSelect={"Language"} /> */}
							{/* <SelectInput
								PopupComponent={MarketingObjectives}
								placeholderSelect={"Marketing Objectives"}
							/> */}
						</Flex>
					</div>
				</Flex>
			</div>

			<div className={`d-flex justify-start ${style.filter__item}`}>
				<Flex justify="space-between" style={{ width: "100%" }} align="center">
					<div className={style.filter__item__title}>
						<span>Advanced:</span>
					</div>
					<div className={style.filter__item__right}>
						<div>
							{/* <SelectInput PopupComponent={AudienceAnalysis} placeholderSelect={"Audience Analysis"} /> */}
						</div>
					</div>
				</Flex>
			</div>

			<div className={`d-flex justify-start align-item-center ${style.filter__item}`}>
				<Flex justify="space-between" style={{ width: "100%" }} align="center">
					<div className={style.filter__item__title}>
						<span>Time:</span>
					</div>
					<div className={style.filter__item__right}>
						<Flex justify="start" gap={10}>
							<div>
								<Placement />
							</div>
							<DatePickerRange />
						</Flex>
					</div>
				</Flex>
			</div>
		</div>
	);
};

export default FilterComponent;

const NetWorkComponent = ({ icon, platForm }) => {
	return (
		<div className="d-flex">
			<img
				style={{
					width: "18px",
					height: "auto",
					objectFit: "conver",
				}}
				src={icon}
				alt="icon-platform"
			/>
			<span
				style={{
					marginLeft: "5px",
				}}
			>
				{platForm}
			</span>
		</div>
	);
};
