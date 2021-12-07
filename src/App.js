import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import Task from "./component/Task";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/tasks" element={<Task/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
