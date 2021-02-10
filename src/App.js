import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import NavBar from "./components/navigation/main.nav.component";
import ListTeams from './components/teams/list.team.component';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg">
        <div className="app-body">
          <Route path="/teams" exact component={ListTeams} />
        </div>
      </Container>
    </div>
  );
}

export default App;
