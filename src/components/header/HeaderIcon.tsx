import { ImgHTMLAttributes } from "react";

const HeaderIcon = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <a
      href="#"
      onClick={() => {
        alert("Comming Soon");
      }}
      className="header-icon"
    >
      <img {...props} />
    </a>
  );
};

export default HeaderIcon;
