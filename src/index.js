// dependencias
import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
//router
import AppRoutes from "./routes";
import history from "./utils/history";

//assets
import "./index.css";

render(
	<Router history={history}>
		<AppRoutes />
	</Router>,
	document.getElementById("root")
);
