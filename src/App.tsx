import React, { Suspense } from "react";
import Cookies from "universal-cookie/es6";
import "./main/style/global.scss";

// eslint-disable-next-line
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";
import { Home } from "./main/pages";

let Cookie = new Cookies();
let Accepted = Cookie.get("AcceptedCookies");

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
