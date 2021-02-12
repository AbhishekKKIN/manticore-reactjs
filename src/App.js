import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Services from './Services';


class App extends Component {
  render() {
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <Router>
            <Header/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/services" exact component={Services} />
              <Route component={Home} />
            </Switch>
          </Router>
        </Router>
        
      </div>
    )
  }
}



// function App() {
//   return (
//     <div>
//      <Header/>
//      <Home/>
//     </div>
//   );
// }

export default App;
