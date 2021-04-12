import React, { Component, useState, FC } from 'react';
import { Redirect } from 'react-router-dom';
import { Login } from '../index';

interface Props {}

export const Dashboard: FC<Props> = ({}) => {
	const [ token, setToken ] = useState();

	if (!token) {
		return <Redirect to='/login' />;
	}

	return <div>hello world</div>;
};
