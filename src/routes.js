import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./components/App";
import Home from "./components/Home";
import Content from "./components/Content";

const AppRoutes = () => (
	<App>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route
				exact
				path="/messages"
				render={props => <Content title="Messages" {...props} />}
			/>
			<Route
				exact
				path="/wishlist"
				render={props => <Content title="Wishlist" {...props} />}
			/>
			<Route
				exact
				path="/settings"
				render={props => <Content title="Settings" {...props} />}
			/>
			<Route
				exact
				path="/my-account"
				render={props => <Content title="My Account" {...props} />}
			/>
		</Switch>
	</App>
);

export default AppRoutes;
