import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects'; // Update the import to match your Projects component name
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={ContactForm} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
