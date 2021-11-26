import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Item from './Components/Item';
function App() {
  return (
    <div className="App">
      <Router>
        <ul className="Nav-bar">
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="about">About</Link></li>
          <li><Link to="contact">Contact us</Link></li>
        </ul>

        <ul>
          <li> <Link to="item/1">List 1</Link></li>
          <li><Link to="item/2">List 2</Link></li>
          <li><Link to="item/3">List 3</Link></li>
          <li> <Link to="item/4">List 4</Link></li>
          <li><Link to="item/5">List 5</Link></li>

        </ul>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
