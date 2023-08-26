import React from "react";
import HambergerIcon from "../icons/HambergerIcon";
import UserRoundIcon from "../icons/UserRoundIcon";

const Head = () => {
	return (
		<div className="m-2 p-4 grid grid-flow-col shadow-md">
			<div className="flex col-span-1">
				<span className="h-8 pt-1">
					<HambergerIcon />
				</span>
				<img
					className="h-8 mx-2"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRviA0jJ6s689bkG3RqUe6kxLGaGmEMdzj1X74QPLd3lhFEcJugo8sUPXOyaPqAqESiBTM&usqp=CAU"
					alt="youtube-logo"
				/>
			</div>
			<div className="col-span-10">
				<input className="w-1/2 p-2 border border-gray-400 width-1/2 rounded-l-full" type="text" />
				<button className="px-4 p-2 border border-gray-400 rounded-r-full bg-gray-200">🔍</button>
			</div>
			<div className="col-span-1">
				<span>
					<UserRoundIcon />
				</span>
			</div>
		</div>
	);
};

export default Head;
