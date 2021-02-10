import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, NavLink} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ListTeams from "../teams/list.team.component";

export default class NavBar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
            <Button component={ NavLink } to="/teams">Teams</Button>
            {/*<Button component={ Link } disabled>My Players</Button>*/}
            {/*<Button component={ Link } disabled>My Games</Button>*/}

        </Toolbar>
      </AppBar>
    );
  }
}