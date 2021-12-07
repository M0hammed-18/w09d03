import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { FaRegKissWinkHeart } from "react-icons/fa";

const Task = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [task, setTask] = useState([]);
  const [local, setLocal] = useState("");
  const  dispatch = useDispatch();
  const state =useSelector((state)=>{
    return{
      signin: state.Signin,
      tasks:state.Tasks,
    }
  })
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setLocal(savedToken);
    taskshow();
  }, []);


  const taskshow = async () => {
    const result = await axios.get(`${BASE_URL}/tasks`,{
      headers: {
        Authorization: `Bearer ${local}`
      },})
    setTask(result.data);
  };


  const del = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/delete/${id}`);
      taskshow();
    } catch (error) {
      console.log(error);
    }
  };
  const [newtask, setNewtask] = useState("");

  const addtask = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/task`, {
        name: newtask,
      },
      {
        headers:{
        Authorization:`Bearer ${local}`
      }});
      taskshow(local);
    } catch (error) {
      console.log(error);
    }
  };

  const updatetask =async(id)=>{
    const update= await axios.put(`${BASE_URL}/editTask${id}`,{
      task:task,
    },
    {
      headers:{
        Authorization:`Bearer${local}`
      },
    }
    
    )
    taskshow(local);
  }

  return (
    <div className="desing">
      <h1> Here you can organize your life  please write Tasks <FaRegKissWinkHeart/></h1>
      <input
        onChange={(e) => {
          setNewtask(e.target.value);
          console.log(e);
        }}
        placeholder="add task"
      />{" "}
      <button onClick={addtask}>add</button>
      {task.map((e) => (
        <ul>
          <li>
            {e.name}
            <button
              onClick={() => {
                del(e._id);
              }}
            >
              Delete
            </button>
          </li>
          <li>
          {e.name}
            <button
              onClick={() => {
                updatetask(e._id);
              }}
            >
              Update
            </button>
            </li>
          {console.log()}{" "}
        </ul>
      ))}
    </div>
  );
};

export default Task;
