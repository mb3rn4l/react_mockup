import React, { Component } from "react";
import ProductCard from "./ProductCard";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";

import "./Home.css";

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<Grid item xs={8}>
					<TextField
						id="outlined-simple-start-adornment"
						className="search"
						variant="outlined"
						label="Search"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							)
						}}
					/>
				</Grid>

				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />

				<Fab color="primary" aria-label="add" className="float-btn">
					<AddIcon />
				</Fab>
			</div>
		);
	}
}

export default Home;
