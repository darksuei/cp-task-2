import { Button } from "antd";
import AngleIcon from "./AngleIcon";
import { useState } from "react";
import "./Dropdown.css";

const data = [
	{ title: "Applied", count: 1745 },
	{ title: "Shortlisted", count: 453 },
	{ title: "Technical Interview", count: 123 },
	{ title: "Opportunity Browsing", count: 243 },
	{ title: "Video Interview I", count: 25 },
	{ title: "Video Interview II", count: 25 },
	{ title: "Video Interview III", count: 25 },
	{ title: "Offer", count: 25 },
	{ title: "Withdrawn", count: 25 },
];

const DropDown = () => {
	const [show, setShow] = useState(false);
	const [selected, setSelected] = useState(3);

	const toggleShow = () => setShow((prev) => !prev);

	const onSelect = (index: number) => {
		setSelected(index);
		toggleShow();
	};

	return (
		<div className="dropdown-container">
			<div className="dropdown" onClick={toggleShow}>
				<h3>{data[selected].title}</h3>
				<Button type="link" icon={<AngleIcon />} />
			</div>

			{show && (
				<div className="opened-dropdrown">
					<div className="dropdown-top-opened" onClick={toggleShow}>
						<h3>{data[selected].title}</h3>
						<Button
							type="link"
							icon={
								<div className="icon-opened">
									<AngleIcon />
								</div>
							}
						/>
					</div>

					<div className="dropdown-options">
						{data.map((item, index) => (
							<div
								onClick={() => onSelect(index)}
								key={item.title}
								className={`dropdown-option ${
									selected === index && "selected-option"
								}`}>
								<h4>{item.title}</h4>
								<div>{item.count}</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default DropDown;
