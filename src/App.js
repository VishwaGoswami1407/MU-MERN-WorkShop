import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Counter from './Counter';
import Galary from "./Galary";
function App() {
  return(<>
  
    <h1>Hello React</h1>
    <Router>
    {/* <Link to='home'>Home</Link> | */}
    <Link to='about'>About</Link> |  
    <Link to='contact'>Contact</Link> |
    <Link to='galary'>Galary</Link> |
    <Link to='counter'>Counter</Link>


      <Routes>
        {/* <Route element={<Home />} path="/home"  /> */}
        <Route element={<About />} path="/about"/>
        <Route element={<Contact />} path="/contact" />
        <Route element={<Counter />} path="/counter"/>
        <Route element={<Galary />} path="/galary"/>

        <Route element={<h1>404 page Not Found</h1>} path="*"/>
      </Routes>
    </Router>
  </>);
}

export default App;
