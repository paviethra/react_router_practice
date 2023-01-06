import './App.css';
import {BrowserRouter as Router, Routes, Route, Link}  from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div className="App">
        <h2>Wecome to React-Router</h2>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <ul className='navbar-nav mr-auto'>
        <li><Link to={'/'} className='nav-link'>Home</Link></li>
        <li><Link to={'/about'} className='nav-link'>About</Link></li>
        <li><Link to={'/contact'} className='nav-link'>Contact</Link></li>
      </ul>
    </nav>
    <hr/>

    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/contact' element ={<Contact/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
