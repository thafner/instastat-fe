import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import GroupIcon from '@material-ui/icons/Group';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
	button: {
		margin: theme.spacing(1),
	},
});

class ListTeams extends Component {

	constructor(props) {
		super(props);
		this.state = { teams: [] };
	}

	componentDidMount() {
		axios.get('http://instastat.lndo.site/jsonapi/node/team/')
			.then(response => {
				this.setState({ teams: response.data['data'] });
			})
			.catch(function (error) {
				console.log(error);
			})
	}

	render() {
		const { classes } = this.props;
		console.log(this.state.teams);
		return (
			<div>
				<h1>Your Teams</h1>
				<ul>
					{this.state.teams.map(item =>(
						<li key={item.id}>
							<Link to={"/teams/" + item.id}>{item.attributes.title}</Link>
						</li>
					))}
				</ul>
				{/*<List>*/}
				{/*	{this.state.teams.map(item => (*/}
				{/*		<ListItem divider button key={item._id}>*/}
				{/*			<ListItemText primary={item.name} secondary={item.city} />*/}
				{/*			<ListItemSecondaryAction>*/}
				{/*				<Tooltip title="Edit Team" aria-label="Edit Team">*/}
				{/*					<IconButton component={Link} to={`/teams`} className={classes.button} variant="contained" color="secondary" >*/}
				{/*						<EditIcon className={classes.leftIcon} />*/}
				{/*					</IconButton>*/}
				{/*				</Tooltip>*/}
				{/*				<Tooltip title="Players" aria-label="Players">*/}
				{/*					<IconButton component={Link} to={`/players/${item._id}`} className={classes.button} variant="contained" color="secondary" >*/}
				{/*						<GroupIcon />*/}
				{/*					</IconButton>*/}
				{/*				</Tooltip>*/}
				{/*				/!*<DeleteButton entity="team" />*!/*/}
				{/*			</ListItemSecondaryAction>*/}
				{/*		</ListItem>*/}
				{/*	))}*/}
				{/*</List>*/}
			</div>
		)
	};
}

ListTeams.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListTeams);
