import React from 'react';


import {Navbar} from '../src/components/navbar';
import {Tables} from '../src/components/tables';
import {favSongs} from '../src/components/favSongs';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/favUsersSongs/:userId"><favSongs /></Route>
          <Route path="/">
                <nav>
                    <Navbar />
                </nav>
                <section>
                    <Tables />
                </section>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
