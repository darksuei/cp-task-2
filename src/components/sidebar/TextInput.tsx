import { InfoCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import { ChangeEvent, useContext } from "react";
import { AppContext } from "../../context";

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const TextInput = (props: Props) => {
  const { setQuery } = useContext(AppContext);

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e);
    setQuery(e.target.value);
  };

  return (
    <Input
      value={props.value}
      placeholder={props.placeholder}
      onChange={handleQuery}
      className="input"
      prefix={<SearchOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Make a quick search">
          <InfoCircleOutlined
            className="info-icon"
            style={{ color: "rgba(0,0,0,.20)" }}
          />
        </Tooltip>
      }
    />
  );
};

export default TextInput;
