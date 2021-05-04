import React, { Suspense } from 'react';
import './style/global.scss';
import { Navbar, Loading } from './components';

const Home = React.lazy(() => import('./pages/page/Home'));
const Login = React.lazy(() => import('./pages/page/Login'));
const Register = React.lazy(() => import('./pages/page/Register'));
const Dashboard = React.lazy(() => import('./pages/page/Dashboard'));
const Error404 = React.lazy(() => import('./pages/page/Error404'));

// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Suspense fallback={Loading}>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />

					<Route exact path='/info/credits' component={Home} />

					<Route exact path='/home' component={Dashboard} />
					<Route exact path='/loading' component={Loading} />

					<Route exact path='/profile' component={Dashboard} />
					<Route exact path='/profile/:id' component={Dashboard} />

					{/* ! Errors */}
					<Route exact path='/404' component={Error404} />
					<Redirect to='/404' />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default App;
