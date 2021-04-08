import { FC } from 'react';

interface Props {
	title?: string;
	content?: string;
}

export const PopupModal: FC<Props> = ({ title, content }) => {
	return (
		<div id='popupp'>
			<div className='popup'>
				<img onClick={buttonClose} src='/images/icons/close.svg' alt='Close' title='Close' id='close' />
				<h1 id='title'>{title || 'Title'}</h1>
				<p>{content || 'Content'}</p>
			</div>
			<div id='blur' />
		</div>
	);
};

const buttonClose = () => {
	let pop = document.getElementById('popupp');

	pop?.remove();
};
