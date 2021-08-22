import React, { Suspense } from "react";

// eslint-disable-next-line
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { HomePage } from "./source/pages";

const App = () => {
	return <HomePage />;
};

export default App;
