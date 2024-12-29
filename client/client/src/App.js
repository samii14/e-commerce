import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Login";
import Register from "./pages/register";
import Login from "./pages/Login";
import NavBar from "./Components/NavBar"
function App() {
  return (
    <div className="App">
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="register" element={<Register/>}/>
      <Route path="login" element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
