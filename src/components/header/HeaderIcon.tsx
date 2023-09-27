import { ImgHTMLAttributes } from "react";

const HeaderIcon = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <a href="#" className="header-icon">
      <img {...props} />
    </a>
  );
};

export default HeaderIcon;
