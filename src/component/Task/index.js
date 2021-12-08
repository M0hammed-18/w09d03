import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaRegKissWinkHeart } from "react-icons/fa";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import Tasks,{readTask,createTask,deleteTask} from "../../reducers/task";

const Task = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [task, setTask] = useState([]);
  const [local, setLocal] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      signin: state.Signin,
      tasks: state.Tasks,
    };
  });
  
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setLocal(savedToken);
    taskshow();
  }, []);

  const taskshow = async () => {
    const result = await axios.get(`${BASE_URL}/tasks`, {

      headers: {
        Authorization: `Bearer ${local}`,
      },
    });
    setTask(result.data);
  };

  const deltask = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/delete/${id}`);
      taskshow();
    } catch (error) {
      console.log(error);
    }
  };
  const [newtask, setNewtask] = useState("");
  const [updattask, setUpdattask] = useState("");
  const addtask = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/task`,
        {
          name: newtask,
        },
        {
          headers: {
            Authorization: `Bearer ${local}`,
          },
        }
      );
      taskshow(local);
    } catch (error) {
      console.log(error);
    }
  };

  const updatetask = async (id) => {
    const update = await axios.put(
      `${BASE_URL}/editTask/${id}`,
      {
        name:updattask,
      },
      {
        headers: {
          Authorization: `Bearer${local}`,
        },
      }
    );
    taskshow(local);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
        
        <div className="desing">
      <button id="logout" onClick={logout}> Bye </button>
      <h1>
        {" "}
        Here you can organize your life please write Tasks{" "}
        <FaRegKissWinkHeart />
      </h1>
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
                deltask(e._id);
              }}
            >
              Delete
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                updatetask(e._id);
              }}
            >
              Update
            </button>
          </li>
        </ul>
        
      ))}
      
    </div>
        </>
  );
};

export default Task;
