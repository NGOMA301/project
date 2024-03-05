import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/home'
import Navbar from './components/navBar/nav'
import About from './components/about/about'
import Service from './components/services//service'
import Portfolio from './components/poltfolio/poltfolio'
import Contact from './components/contact/Contact'
import Styleswitcher from './components/styleswitcher/styleswitcher'



function App() {
  return (
    <div className="App">
      <div className='navs'>
        <Navbar />
      </div>
      <div className='StyleSwitcher'>
        <Styleswitcher />
      </div>
      <div>
        <Router>
          <Home />
          <Switch>
            <Route path='/' />
          </Switch>
        </Router>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Switch>
            <Route path="/service">
              <Service />
            </Route>
          </Switch>
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>

          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
