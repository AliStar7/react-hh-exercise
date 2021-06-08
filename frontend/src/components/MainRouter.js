import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Cards from "./Cards";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ExerciseScreen from "../screens/ExercsieScreen";
import CreateScreen from "../screens/CreateScreen";
import EditScreen from "../screens/EditScreen";

const MainRouter = ({}) => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/cards" component={Cards} />
          <Route path="/exercises" component={ExerciseScreen}></Route>
          <Route path="/create" component={CreateScreen}></Route>
          <Route exact path="/edit/:id" component={EditScreen} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default MainRouter;
