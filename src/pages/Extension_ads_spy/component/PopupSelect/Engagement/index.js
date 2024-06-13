import { Button, Flex, Input, Space } from "antd";
import style from "./style.module.scss";
import { useState } from "react";
const list_engagement = [
	{
		title: "Like",
		data: [
			{
				content: "All",
				isActive: true,
				dataStart: "",
				dataEnd: "",
			},
			{
				content: "1~100",
				dataStart: 1,
				dataEnd: 100,
				isActive: false,
			},
			{
				content: "101~1000",
				dataStart: 101,
				dataEnd: 1000,
				isActive: false,
			},
			{
				content: ">1000",
				dataStart: 1001,
				dataEnd: 100,
				isActive: false,
			},
		],
	},
	{
		title: "Comment",
		data: [
			{
				content: "All",
				dataStart: "",
				dataEnd: "",
				isActive: true,
			},
			{
				content: "1~100",
				dataStart: 1,
				dataEnd: 100,
				isActive: false,
			},
			{
				content: "101~1000",
				dataStart: 101,
				dataEnd: 1000,
				isActive: false,
			},
			{
				content: ">1000",
				dataStart: 1000,
				dataEnd: "",
				isActive: false,
			},
		],
	},
	{
		title: "Share",
		data: [
			{
				content: "All",
				isActive: true,
				dataStart: "",
				dataEnd: "",
			},
			{
				content: "1~100",
				dataStart: 1,
				dataEnd: 100,
				isActive: false,
			},
			{
				content: "101~1000",
				dataStart: 101,
				dataEnd: 1000,
				isActive: false,
			},
			{
				content: ">1000",
				dataStart: 1000,
				dataEnd: "",
				isActive: false,
			},
		],
	},
];

const EngagementComponent = ({ funcCallApiSearch }) => {
	const [likeBegin, setLikeBegin] = useState("");
	const [likeEnd, setLikeEnd] = useState("");
	const [commentBegin, setCommentBegin] = useState("");
	const [commentEnd, setCommentEnd] = useState("");
	const [shareBegin, setShareBegin] = useState("");
	const [shareEnd, setShareEnd] = useState("");
	const [listDataFilterEngagement, setListDataFilterEngagement] = useState(list_engagement);
	const [rangeStartValueLike, setStartRangeValueLike] = useState("");
	const [rangeEndValueLike, setStartEndValueLike] = useState("");
	const [rangeStartValueComment, setRangeStartValueComment] = useState("");
	const [rangeEndValueComment, setRangeEndValueComment] = useState("");
	const [rangeStartValueShare, setRangeStartValueShare] = useState("");
	const [rangeEndValueShare, setRangeEndValueShare] = useState("");

	const listValue = {
		Like: {
			start: rangeStartValueLike,
			end: rangeEndValueLike,
			renderStart: setStartRangeValueLike,
			renderEnd: setStartEndValueLike,
		},
		Comment: {
			start: rangeStartValueComment,
			end: rangeEndValueComment,
			renderStart: setRangeStartValueComment,
			renderEnd: setRangeEndValueComment,
		},
		Share: {
			start: rangeStartValueShare,
			end: rangeEndValueShare,
			renderStart: setRangeStartValueShare,
			renderEnd: setRangeEndValueShare,
		},
	};

	const listConditionCheck = {
		Like: {
			start: setLikeBegin,
			end: setLikeEnd,
		},
		Comment: {
			start: setCommentBegin,
			end: setCommentEnd,
		},
		Share: {
			start: setShareBegin,
			end: setShareEnd,
		},
	};

	const handleFilterEngagement = (e) => {
		funcCallApiSearch({
			like_begin: likeBegin,
			like_end: likeEnd,
			comment_begin: commentBegin,
			comment_end: commentEnd,
			share_begin: shareBegin,
			share_end: shareEnd,
		});
	};
	const handleChangeValueWhenClick = (e) => {
		const type = e.target.getAttribute("data-type");
		const start = e.target.getAttribute("data-start");
		const end = e.target.getAttribute("data-end");
		const indexElement = e.target.getAttribute("data-index");

		const newListFilterEngagement = listDataFilterEngagement.map((item) => {
			if (item?.title === type) {
				return {
					...item,
					data: item.data.map((element, index) => ({
						...element,
						isActive: index === Number(indexElement),
					})),
				};
			}
			return item;
		});

		setListDataFilterEngagement(newListFilterEngagement);

		if (listConditionCheck[type]) {
			listConditionCheck[type].start(Number(start));
			listConditionCheck[type].end(Number(end));
		}
	};
	const handleChangeValue = (e, typeValue) => {
		const typeInput = e.target.getAttribute("data-type");
		const valueInput = e.target.value;

		listValue[typeInput][typeValue](valueInput);

		const newListFilterEngagement = listDataFilterEngagement.map((item) => {
			if (item?.title === typeInput) {
				if (valueInput !== "") {
					return {
						...item,
						data: item.data.map((element, index) => ({
							...element,
							isActive: false,
						})),
					};
				} else {
					return {
						...item,
						data: item.data.map((element, index) => ({
							...element,
							isActive: index === 0,
						})),
					};
				}
			}
			return item;
		});

		setListDataFilterEngagement(newListFilterEngagement);
	};

	const renderValueInput = (typeInput, typeValue) => listValue[typeInput][typeValue];

	return (
		<div className={style.engagement}>
			<div className={`${style.engagement__top}`}>
				<Flex justify="start">
					<p>Engagement</p>
				</Flex>
			</div>
			<div className={`${style.engagement__bottom}`}>
				{listDataFilterEngagement.map((item, index) => {
					return (
						<Flex
							justify="space-between"
							align="center"
							gap={20}
							key={index}
							style={{
								marginTop: "10px",
							}}
						>
							<Flex
								style={{
									fontWeight: "bold",
								}}
							>
								<p>{item.title}</p>
							</Flex>
							<Flex
								justify="space-between"
								align="center"
								gap={30}
								style={{
									width: "85%",
								}}
							>
								{item.data.map((element, index) => {
									return (
										<p
											key={index}
											className={`${style.item} ${element?.isActive && style.filter__active}`}
											data-start={element?.dataStart}
											data-end={element?.dataEnd}
											data-type={item?.title}
											data-index={index}
											onClick={(e) => handleChangeValueWhenClick(e)}
										>
											{element?.content}
										</p>
									);
								})}

								<Space.Compact
									block
									style={{
										width: "auto",
									}}
								>
									<Input
										style={{ width: 100, textAlign: "center" }}
										placeholder="Minimum"
										onChange={(e, index) => handleChangeValue(e, "renderStart")}
										data-type={item?.title}
										value={renderValueInput(item?.title, "start")}
									/>
									<Input
										className="site-input-split"
										style={{
											width: 30,
											borderLeft: 0,
											borderRight: 0,
											pointerEvents: "none",
										}}
										placeholder="~"
										disabled
									/>
									<Input
										className="site-input-right"
										style={{
											width: 100,
											textAlign: "center",
										}}
										placeholder="Maximum"
										data-type={item?.title}
										onChange={(e, index) => handleChangeValue(e, "renderEnd")}
										value={renderValueInput(item?.title, "end")}
									/>
								</Space.Compact>
							</Flex>
						</Flex>
					);
				})}
			</div>
			<div>
				<Flex justify="start" className={style.engagement__top} align="center">
					<p
						style={{
							width: "5%",
						}}
					>
						Reset
					</p>
					<Flex
						justify="center"
						gap={20}
						style={{
							width: "95%",
						}}
					>
						<Button>Cancel</Button>
						<Button type="primary" onClick={handleFilterEngagement}>
							OK
						</Button>
					</Flex>
				</Flex>
			</div>
		</div>
	);
};

export default EngagementComponent;
