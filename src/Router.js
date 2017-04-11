import React, {PropTypes} from "react";
import {counterPage} from "./containers/CounterPage";
import {Router as ReactRouter, Route, IndexRedirect} from "react-router";

const routes = () => (
  <Route path="/">
    <IndexRedirect to="start"/>
    <Route path="start" component={counterPage}/>
  </Route>
);

export const Router = ({history}) => <ReactRouter history={history} routes={routes()}/>;

Router.propTypes = {
  history: PropTypes.object.isRequired
  //,store: PropTypes.object.isRequired
};
