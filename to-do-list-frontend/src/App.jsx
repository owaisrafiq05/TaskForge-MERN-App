import React, { useState , useEffect } from 'react'
import { base_url } from '../config/index.js'
import axios from "axios";

const App = () => {
  const [input,setInput] = useState("");
  const [post,setPost] = useState([]);

  const addTodo = async () => {
    try{
      console.log("addTodoHandler");
      const obj = {
        value: input,
        userID: "101",
      };
      const create = await axios.post(`${base_url}/createpost`, obj);
      console.log("create", create);
    }
    catch(error){
      console.log("Error",error.message);
    }
  };

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const getPost = await axios.get(`${base_url}/getpost`);
      console.log("getPost", getPost.data.data);
      setPost(getPost.data.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };


  const editHandler = async (id) => {
    try {
      const userValue = prompt("enter value");
      const obj = {
        value: userValue,
      };

      const url = `${base_url}/updatepost/${id}`;
      const updatePost = await axios.put(url, obj);
      fetchData();
      console.log("getPost", updatePost);
    }
    catch (error) {
      console.log("error", error.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const url = `${base_url}/deletepost/${id}`;
      await axios.delete(url);
      fetchData();
    }
    catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="enter value"
      />
      <button onClick={addTodo}>ADD TODO</button>

      {post?.map((post) => {
        return (
          <div key={post._id}>
            <p> {post.value}</p>
            <button onClick={() => editHandler(post._id)}>EDIT</button>
            <button onClick={() => deleteHandler(post._id)}>DELETE</button>
          </div>
        );
      })}
    </div>
  )
}

export default App
