import React, { Component } from "react";

class Content extends Component {
	render() {
		return (
			<div spacing={3}>
				<h1>{this.props.title}</h1>
			</div>
		);
	}
}

export default Content;
