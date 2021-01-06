import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import Listing from './screens/Listing'
import Listings from './screens/Listings'
import Signup from './screens/Signup'
import Signin from './screens/Signin'
import NotFound from './screens/NotFound'
import './sass/main.scss'
function App() {
  return (
      <Router>
        <Navbar />
          <Switch>
            <Route exact path='/about/' component={About} />
            <Route exact path='/contact/' component={Contact} />
            <Route exact path='/listings/' component={Listings} />
            <Route exact path='/listings/:id/' component={Listing} />
            <Route exact path='/signup/' component={Signup} />
            <Route exact path='/signin/' component={Signin} />
            <Route  path='/' component={Home} exact/>
            <Route component={NotFound}/>
          </Switch>
      </Router>
  );
}

export default App;
