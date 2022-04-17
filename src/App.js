import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import SideBar from "./components/SideBar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";



function App() {
  return (
    <Router>
  <div className="row">
    <div className="col-sm-12 col-md-1">
      <SideBar/>
      </div>
     <div className="col-sm-12 col-md-11">
       <p>hello</p>
     <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route exact path="/projects"  element={<Projects/>}/>
        <Route exact path="/skills"  element={<Skills/>}/>
        <Route exact path="/contact"  element={<Contact/>}/>
         
        </Routes>
       </div>
        
      
        </div>
   
    </Router>
    
  )
}

export default App;