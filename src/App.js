import logo from './logo.svg';
import './App';
import {Route, Routes,Link} from "react-router-dom";
import Home from './Home'
import About from './About';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login'
function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/about'  element={<About/>}/>
        <Route path='/Login'  element={<Login/>}/>

      </Routes>
      </>
)};


export default App;
