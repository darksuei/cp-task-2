import { InfoCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import { ChangeEvent } from "react";

interface Props {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
}

const TextInput = (props: Props) => {
	return (
		<Input
			value={props.value}
			placeholder={props.placeholder}
			onChange={props.onChange}
			className="input"
			prefix={<SearchOutlined className="site-form-item-icon" />}
			suffix={
				<Tooltip title="Extra information">
					<InfoCircleOutlined
						className="info-icon"
						style={{ color: "rgba(0,0,0,.45)" }}
					/>
				</Tooltip>
			}
		/>
	);
};

export default TextInput;
