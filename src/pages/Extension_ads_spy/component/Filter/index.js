import { listFilterNetworks } from "../../../../utilities/constants/adsSpy/filter";
import style from "./index.module.scss";
const FilterComponent = () => {
	return (
		<div className={`shadow-common-light ${style.filter__container}`}>
			<div className={`d-flex justify-start ${style.filter__item}`}>
				<div>
					<span>NetWorks:</span>
				</div>
				<div className={`d-flex justify-start `}>
					{listFilterNetworks.map((item, index) => {
						return <NetWorkComponent platForm={item?.platForm} icon={item?.icon} />;
					})}
				</div>
			</div>

			<div className={`d-flex justify-start ${style.filter__item}`}>
				<div>
					<span>Basic:</span>
				</div>
				<div className={`d-flex justify-start `}>
					{listFilterNetworks.map((item, index) => {
						return <NetWorkComponent platForm={item?.platForm} icon={item?.icon} />;
					})}
				</div>
			</div>

			<div className={`d-flex justify-start ${style.filter__item}`}>
				<div>
					<span>Advanced:</span>
				</div>
				<div className={`d-flex justify-start `}>
					{listFilterNetworks.map((item, index) => {
						return <NetWorkComponent platForm={item?.platForm} icon={item?.icon} />;
					})}
				</div>
			</div>

			<div className={`d-flex justify-start ${style.filter__item}`}>
				<div>
					<span>Time:</span>
				</div>
				<div className={`d-flex justify-start `}>
					{listFilterNetworks.map((item, index) => {
						return <NetWorkComponent platForm={item?.platForm} icon={item?.icon} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default FilterComponent;

const NetWorkComponent = ({ icon, platForm }) => {
	return (
		<div
			className="d-flex"
			style={{
				marginLeft: "10px",
			}}
		>
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
