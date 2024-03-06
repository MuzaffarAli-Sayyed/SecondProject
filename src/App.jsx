import Header from "./components/Header";
import "./styles/App.css";
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from "./components/Product";

function App() 
{
  return (
    <Router>
    
     <Header />
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/About" element= {<About />}/>
        <Route path="/Contact" element= {<Contact />}/>
        <Route path="/Product/id" element= {<Product/> }/>
        <Route path="*" element= {<div> PAGE NOT FOUND 404 </div> }/>
      </Routes>
    </Router>
  );
}

export default App;