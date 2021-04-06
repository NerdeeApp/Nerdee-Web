import React from 'react';
import './style/main.scss';
import './style/global.scss';
import './style/preloader.scss';

import { Home, Error404 } from './pages';

// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/users/:userid' component={Home} />

				{/* ! Errors */}
				<Route exact path='/404' component={Error404} />
				<Redirect to='/404' />
			</Switch>
		</Router>
	);
};

export default App;
