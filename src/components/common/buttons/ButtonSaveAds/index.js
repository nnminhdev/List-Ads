import { Button, Spin } from "antd";
import styles from "./style.module.scss";
import { useEffect, useRef, useState } from "react";
import { DownloadOutlined, LoadingOutlined } from "@ant-design/icons";

function ButtonSaveAds({
	textButton,
	onClickButton = () => {},
	idData,
	disableButton = false,
	styleCustom,
	noDisable = false,
}) {
	return (
		<>
			<CircularIntegration
				styleCustom={styleCustom}
				onClickButton={onClickButton}
				idData={idData}
				noDisable={noDisable}
			/>
		</>
	);
}

export default ButtonSaveAds;

export function CircularIntegration({ onClickButton, idData, noDisable, styleCustom }) {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const timer = useRef();

	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);

	const bgcButton = {
		backgroundColor: "#0c8cfa",
		fontSize: "14px",
		fontFamily: "Inter",
		width: "100%",
		height: "43px",
		minHeight: "43px",
		borderRadius: "12px",
		fontWeight: "500",
		color: "#fff",
		...styleCustom,
		"&:hover": {
			backgroundColor: "#0c8cfa",
		},
	};
	const buttonSx = {
		...bgcButton,
		...(success && {
			backgroundColor: "#0c8cfa",
			"&:hover": {
				backgroundColor: "#0c8cfa",
			},
		}),
	};

	useEffect(() => {
		return () => {
			clearTimeout(timer.current);
		};
	}, []);

	const handleButtonClick = (e) => {
		e.preventDefault();
		onClickButton(e);
		if (!loading) {
			setSuccess(false);
			setLoading(true);
			timer.current = setTimeout(() => {
				setSuccess(true);
				setLoading(false);
				setOpen(true);
			}, 3500);
		}
	};

	const label = {
		"data-id": idData,
	};

	return (
		<>
			<div style={{ display: "flex", alignItems: "center", width: "100%" }}>
				<div style={{ position: "relative", width: "100%", height: "42px", marginTop: "10px" }}>
					<Button
						variant="contained"
						style={buttonSx}
						disabled={loading}
						onClick={(e) => handleButtonClick(e)}
						data-id={idData}
					>
						{loading ? (
							<Spin
								indicator={<LoadingOutlined spin />}
								size="small"
								style={{ color: "white", marginRight: "5px" }}
							/>
						) : (
							<DownloadOutlined />
						)}
						Download
					</Button>
				</div>
			</div>
		</>
	);
}
