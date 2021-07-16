import React from "react";

const button = (props: any) => {
	return (
		<>
			<button
				className='BetterButton'
				onClick={props.onClick ? props.onClick : null}
			>
				{props.children ? props.children : "Button"}
			</button>
		</>
	);
};

export default button;
