import React, { Component } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import HorizontalNav from "./HorizontalNav";
import LateralNav from "./LateralNav";

class App extends Component {
	static propTypes = {
		children: PropTypes.object.isRequired
	};

	render() {
		const { children } = this.props;

		return (
			<div className="App">
				<Grid container spacing={3}>
					<HorizontalNav body={children} />
					<LateralNav />
				</Grid>
			</div>
		);
	}
}

export default App;
