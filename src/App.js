import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/Team/:id'>
            <TeamDetail></TeamDetail>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
