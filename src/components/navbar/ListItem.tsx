import { ImgHTMLAttributes } from "react";

const ListItem = (props: ImgHTMLAttributes<HTMLImageElement>) => {
	return (
		<li className="nav-list-item">
			<img {...props} />
		</li>
	);
};

export default ListItem;
