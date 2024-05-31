import { Button, Checkbox, Flex, Input } from "antd";
import { listCountry } from "../constant";
import { useState } from "react";

const Country = () => {
	const [selectMulti, setSelectMulti] = useState(false);
	const handleSelectMultiSelect = () => {
		setSelectMulti(prev => !prev);
	};
	return (
		<div>
			<div>
				<Flex justify="between">
					<div>
						<Input placeholder="Select" />
					</div>
					<div>
						<Flex justify="start" gap={10}>
							<Button onClick={handleSelectMultiSelect}>MultiSelect</Button>
							<Button>All</Button>
						</Flex>
					</div>
				</Flex>
			</div>
			<div>
				{listCountry.map((item, index) => {
					return (
						<div>
							<p>{item.topic}</p>
							<Flex>
								{item?.list_country?.map((item, index) => {
									return (
										<Flex>
                                            {selectMulti && <Checkbox />}
											<img src={item?.image_country} width={14} alt="icon country" />
											<p key={index}>{item.name}</p>
										</Flex>
									);
								})}
							</Flex>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Country;
