import React from 'react';
import './style/main.scss';
import './style/global.scss';
import './style/preloader.scss';

import { Home } from './pages';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Route path='/' component={Home} />
		</Router>
	);
};

export default App;
