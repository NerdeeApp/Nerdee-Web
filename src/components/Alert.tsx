import React, { FC } from 'react';

interface props {
	type?: string;
	text?: string;
}

export const Alert: FC<props> = (props) => {
	return (
		<div className='alert'>
			<p>{props.children}</p>
		</div>
	);
};
