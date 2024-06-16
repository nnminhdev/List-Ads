import shopify from "../../assets/icons/shopify.svg";
import ali from "../../assets/icons/ali.svg";
import amazon from "../../assets/icons/amazon.svg";
import esty from "../../assets/icons/esty.svg";

import Woocomerce from "../../assets/platform/wooCommerce_logo.png";
import Aliexpress from "../../assets/platform/aliexpress_logo.png";
import Bigcomerce from "../../assets/platform/big-ecommerce.png";
const PlatformIcon = () => {
	const wrapStyle = {
		height: 50,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};
	const imgStyle = { display: "flex", objectFit: "cover" };
	return (
		<div style={{ display: "flex", alignItems: "center", gap: 15, maxWidth: "100%" }}>
			<a style={wrapStyle} href="#">
				<img style={imgStyle} src={ali} width={60} alt="Alibaba" />
			</a>
			<a style={wrapStyle} href="#">
				<img style={imgStyle} src={shopify} width={40} alt="shopify" />
			</a>
			<a style={wrapStyle} href="#">
				<img style={imgStyle} src={amazon} width={80} alt="Amazon" />
			</a>
			<a style={wrapStyle} href="#">
				<img style={imgStyle} src={esty} width={60} alt="Esty" />
			</a>

			<a style={wrapStyle} href="#">
				<img style={imgStyle} src={Woocomerce} width={40} alt="Woocomerce" />
			</a>
			<a style={wrapStyle} href="#">
				<img style={imgStyle} src={Aliexpress} width={80} alt="Aliexpress" />
			</a>
			<a style={wrapStyle} href="#">
				<img
					style={{ ...imgStyle, transform: "scale(1.5)", marginLeft: "12px" }}
					src={Bigcomerce}
					width={60}
					alt="Bigcomerce"
				/>
			</a>
		</div>
	);
};
export default PlatformIcon;
