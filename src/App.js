import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ReactCarusel from "./components/ReactCarusel";
import Login from "./components/Login";
import Menu from "./components/Menu";
import {createBrowserHistory} from "history";

export const history = createBrowserHistory()

function App() {
  return (
    <BrowserRouter >
        <Menu/>
      <Switch>
         <Route  path={'/'} exact component={ReactCarusel}/>
         <Route path={'/login'} component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
