import Home from "./pages/Home";
import NavbarPage from "./components/Navbar";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
   
   <Router>
    <NavbarPage/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
    </Routes>
   </Router>
  );
}

export default App;
