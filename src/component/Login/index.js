import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { log } from "./../../reducers/login";
import Task from "./../Task"
import { FaRegGrinSquintTears } from "react-icons/fa";


const Login = () => {
  const state = useSelector((state) => {
    return state;
  });
  const  dispatch = useDispatch()
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [local, setLocal] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLocal(token);
  }, []);

  const login = async () => {
    try {
      const result = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      console.log(result.data.token);
      if(result.data.token){
      localStorage.setItem("token", result.data.token);
      }

      const data ={
        user: result.data.result,
        token: result.data.token
      }
    } catch (err) {
      console.log(err);
    }

    navigate("/tasks");
  };
  return (
    <div className="desing">
     
      <h2> One more step to orgnize your life  <FaRegGrinSquintTears/> </h2>
      <h5>Login please</h5>
      <input
        type="email"
        name="email"
        placeholder="enter email "
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        placeholder="enter password "
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
