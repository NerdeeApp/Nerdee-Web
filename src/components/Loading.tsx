import { FC } from 'react';
import '../style/loading.scss';

export const Loading: FC<any> = () => {
	return (
		<div className='cover'>
			<img src='/images/svg/logo.svg' alt='' id='spinner' />
		</div>
	);
};
