import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./ProductCard.css";

class ProductCard extends Component {
	render() {
		return (
			<div>
				<Grid container spacing={2} className="row-product">
					<Grid item xs={4} className="border-rigth">
						<span>Monday</span>
						<span>10Th 2:28</span>
						<span>PM</span>
					</Grid>
					<Grid item xs={4} className="border-rigth">
						<span>Houston, TX 33619</span>
						<br />
						<ExpandMoreIcon className="row-icon" />

						<span>Atlanta, GA 30123</span>
					</Grid>
					<Grid item xs={4} className="container-price">
						<AirportShuttleIcon className="bus-icon" />
						<span
							style={{
								fontSize: "2em",
								marginRight: 10,
								marginTop: 20
							}}
						>
							$250.00
						</span>

						<span className="counter-product">1</span>
						<MoreVertIcon
							style={{
								fontSize: "2em",
								marginTop: 20
							}}
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default ProductCard;
