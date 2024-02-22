import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/home/home'
import test from './components/test';
import Navbar from './components/navBar/nav'
import About from './components/about/about'
import Service from './components/services//service'
import Portfolio from './components/poltfolio/poltfolio'
import Contact from './components/contact/contact'
import Styleswitcher from './components/styleswitcher/styleswitcher'
// import'./styleswitch'
// import  './pot'


function App() {
  return (
    <div className="App">
      <div className='navs'>
         <Navbar/>
      </div>
      <div className='home'>
        {/* <Home/>  */}
      </div>
      <div className='about'>
        {/* <About/> */}
      </div><div className='service'>
        {/* <Service/> */}
      </div>
      <div className='portfolio'>
        {/* <Portfolio/> */}
      </div>
      <div className='contact'>
        {/* <Contact/> */}
      </div>
      <div className='StyleSwitcher'>
        <Styleswitcher/>
      </div>
      <div>
        <Router>

          <switch>
            <Route path="/">
              <Home/>
            </Route>
          </switch>
          <switch>
            <Route path="/about">
              <About/>
            </Route>
          </switch>
          <switch>
            <Route path="/service">
              <Service/>
            </Route>
          </switch>
          <switch>
            <Route path="/portfolio">
              <Portfolio/>
            </Route>
          </switch>

          <switch>
            <Route path="/contact">
              <Contact/>
            </Route>
          </switch>
        </Router>
      </div>
      </div>
  );
}

export default App;
