import React, { Component} from 'react';
import './App.css';
import Info from './components/info';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



/// component imports
import User from './components/user';
import Account from './components/account';
import Blog from './components/blog';

class App extends Component {

  render() {
    return(
     <Router>
       <div>
                <div>
                  <Link to="/">Home</Link> |
                  <Link to="/account">Account</Link> | 
                  <Link to="/blog">Blog</Link> |
         



                </div>
       <hr/>
        
        <Route exact path="/" component={ User} />
       <Route path="/account" component={ Account} />
         <Route path="/blog" component={ Blog} />

        </div>
       
     </Router>
    );
  }
}
export default App;
