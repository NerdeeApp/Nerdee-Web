import React, { Suspense } from "react";
import "./main/style/global.scss";

// eslint-disable-next-line
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { Home } from "./main/pages";

const App = () => {
	return (
		<Router>
			<Suspense fallback={null}>
				<Switch>
					<Route exact path='/' component={Home} />

					{/* ! Errors */}
					<Route exact path='/404' component={Home} />
					<Redirect to='/404' />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default App;
