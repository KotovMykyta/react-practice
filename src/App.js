import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Todo from "./components/Todo/Todo"
import Counter from "./components/Counter/Counter"
import OurTeam from "./components/OurTeam/OurTeam"
import Home from './components/Home/Home'

export default function App() {
  return (
    <Router>
      <>
        <Header />

        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/team">
            <OurTeam />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
}


