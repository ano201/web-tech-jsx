import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div>
     <Navbar />
     <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/service' component={Service} />
      <Route exact path='/contact' component={Contact} />
      <Redirect to='/' />
     </Switch>
    </div>
  );
}

export default App;