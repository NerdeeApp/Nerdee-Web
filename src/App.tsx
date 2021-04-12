import React from 'react';
import './style/global.scss';

import { Home, Error404, Login, Dashboard, Register } from './pages';

// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />

				<Route exact path='/dashboard/' component={Dashboard} />

				{/* ! Errors */}
				<Route exact path='/404' component={Error404} />
				<Redirect to='/404' />
			</Switch>
		</Router>
	);
};

export default App;
