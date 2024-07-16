import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddVideo from './pages/AddVideo';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={AddVideo} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
