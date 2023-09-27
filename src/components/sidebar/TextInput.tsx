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
  const { appState, setAppState } = useContext(AppContext);
  const handleQuery = (e: any) => {
    if (appState) {
      setAppState((prev: any) => {
        return prev.filter((candidate: any) => {
          for (let key in Object.keys(candidate)) {
            if (
              typeof candidate[key] === "string" &&
              candidate[key]
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            ) {
              return true;
            }
          }
        });
      });
    }
  };
  return (
    <Input
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
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
