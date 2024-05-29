import { Pagination } from "antd";

import style from "./styles/index.module.scss";
import CardAdsComponent from "./component/Card";
import FilterComponent from "./component/Filter";
const AdsSpyComponent = () => {
	return (
		<div>
            <FilterComponent />
            <div>
                <CardAdsComponent />
            </div>
			<div className={style.content__pagination}>
				<Pagination defaultCurrent={1} total={50} />
			</div>
		</div>
	);
};

export default AdsSpyComponent;
