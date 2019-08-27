import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import StarIcon from "@material-ui/icons/Star";
import EmailIcon from "@material-ui/icons/Email";
import AppBar from "@material-ui/core/AppBar";

import "./HorizontalNav.css";

class HorizontalNav extends Component {
	static propTypes = {
		body: PropTypes.object.isRequired
	};

	handleCallToRouter = (event, newValue) => {
		this.props.history.push(newValue);
	};

	render() {
		const { body } = this.props;
		return (
			<Grid container spacing={2}>
				<Grid item xs={3}></Grid>
				<Grid item xs={8}>
					<AppBar
						position="static"
						color="default"
						className="horizontal-nav"
					>
						<Tabs
							value={this.props.history.location.pathname}
							onChange={this.handleCallToRouter}
							indicatorColor="primary"
							textColor="primary"
							centered
						>
							<Tab value="/" label="Home" icon={<HomeIcon />} />
							<Tab
								value="/messages"
								label="Messages"
								icon={<EmailIcon />}
							/>
							<Tab
								label="Wishlist"
								value="/wishlist"
								icon={<StarIcon />}
							/>
							<Tab
								label="Settings"
								value="/settings"
								icon={<SettingsIcon />}
							/>
							<Tab
								label="My Account"
								value="/my-account"
								icon={<PersonPinIcon />}
							/>
							{/* <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} /> */}
						</Tabs>
					</AppBar>
					{body}
				</Grid>
			</Grid>
		);
	}
}

export default withRouter(HorizontalNav);
