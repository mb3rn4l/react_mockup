import React, { Component } from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Switch } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

import NewRealasesIcon from "@material-ui/icons/NewReleases";
import SearchIcon from "@material-ui/icons/Search";
import TodayIcon from "@material-ui/icons/Today";
import FavoriteIcon from "@material-ui/icons/Favorite";

import "./LateralNav.css";

class LateralNav extends Component {
	render() {
		return (
			<div>
				<Drawer className="drawer" variant="permanent" anchor="left">
					<List>
						<ListItem button>
							<img
								src="https://image.shutterstock.com/image-vector/letter-c-logo-260nw-550080715.jpg"
								alt="logo"
								height="200"
							/>
						</ListItem>

						<ListItem className="title">Smart Filters</ListItem>
						<ListItem button>
							<ListItemIcon>
								<div style={{ display: "flex" }}>
									<NewRealasesIcon className="lateral-icons" />
									<Switch className="swicth-btn"></Switch>
								</div>
							</ListItemIcon>
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<div style={{ display: "flex" }}>
									<TodayIcon className="lateral-icons" />
									<Switch className="swicth-btn"></Switch>
								</div>
							</ListItemIcon>
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<div style={{ display: "flex" }}>
									<FavoriteIcon className="lateral-icons" />
									<Switch className="swicth-btn"></Switch>
								</div>
							</ListItemIcon>
						</ListItem>

						<ListItem className="title">Status</ListItem>
						<br />
						<TextField
							id="outlined-simple-start-adornment"
							className="text_search"
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
						<br />
						<Button
							variant="outlined"
							color="primary"
							className="btn-center"
						>
							DELIVERED
						</Button>
					</List>
				</Drawer>
			</div>
		);
	}
}

export default LateralNav;
