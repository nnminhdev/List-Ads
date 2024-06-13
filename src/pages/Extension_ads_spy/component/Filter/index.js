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
import EngagementComponent from "../PopupSelect/Engagement";

const FilterComponent = ({ funcCallApiSearch }) => {
	return (
		<div className={`shadow-common-light ${style.filter__container}`}>
			<div className={`${style.filter__item}`}>
				<Flex justify="space-between" style={{ width: "100%" }} align="center">
					<div className={style.filter__item__title}>
						<span>NetWorks:</span>
					</div>
					<div className={style.filter__item__right}>
						<Flex justify="start" gap={10} align="center">
							{listFilterNetworks.map((item, index) => {
								return (
									<NetWorkComponent
										platForm={item?.platForm}
										icon={item?.icon}
										value={item?.value}
										funcCallApiSearch={funcCallApiSearch}
									/>
								);
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
							{/* <SelectInput
								PopupComponent={Country}
								placeholderSelect={"Country/Region"}
								funcCallApiSearch={funcCallApiSearch}
							/>
							<SelectInput
								PopupComponent={Language}
								placeholderSelect={"Language"}
								funcCallApiSearch={funcCallApiSearch}
							/>
							<SelectInput
								PopupComponent={MarketingObjectives}
								placeholderSelect={"Marketing Objectives"}
								funcCallApiSearch={funcCallApiSearch}
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
						<Flex justify="start" gap={10}>
							{/* <SelectInput
								PopupComponent={AudienceAnalysis}
								placeholderSelect={"Audience Analysis"}
								funcCallApiSearch={funcCallApiSearch}
							/> */}
							<SelectInput
								PopupComponent={EngagementComponent}
								placeholderSelect={"Engagement"}
								funcCallApiSearch={funcCallApiSearch}
							/>
						</Flex>
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
								<Placement funcCallApiSearch={funcCallApiSearch} />
							</div>
							<DatePickerRange funcCallApiSearch={funcCallApiSearch} />
						</Flex>
					</div>
				</Flex>
			</div>
		</div>
	);
};

export default FilterComponent;

const NetWorkComponent = ({ icon, platForm, value, funcCallApiSearch }) => {
	const handleClickFilterPlatform = (e) => {
		const valuePlatform = {
			Instagram: 5,
			Facebook: 1,
			Twitter: 2,
			TikTok: 4,
		};
		if (valuePlatform[e.target.textContent] === 4) {
			window.open(process.env.REACT_APP_LINK_TOP_ADS, "_blank");
		}
		funcCallApiSearch({
			platform: valuePlatform[e.target.textContent] || 1,
		});
	};
	return (
		<Flex
			justify="start"
			gap={2}
			align="center"
			style={{
				fontSize: "14px",
				cursor: "pointer",
			}}
			value={value}
			onClick={(e) => handleClickFilterPlatform(e)}
		>
			<img
				style={{
					width: "18px",
					height: "auto",
					objectFit: "conver",
				}}
				src={icon}
				alt="icon-platform"
				value={value}
			/>
			<span
				style={{
					marginLeft: "5px",
				}}
				value={value}
				className="hover-item"
			>
				{platForm}
			</span>
		</Flex>
	);
};
