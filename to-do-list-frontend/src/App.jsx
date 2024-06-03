import React, { useState, useEffect } from 'react'
import { base_url } from '../config/index.js'
import './App.css';
import axios from "axios";
import { StickyNavbar } from './components/navbar.jsx';

const App = () => {
  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);

  const addTodo = async () => {
    try {
      console.log("addTodoHandler");
      const obj = {
        value: input,
        userID: "101",
      };
      const create = await axios.post(`${base_url}/createpost`, obj);
      console.log("create", create);
      location.reload();
    }
    catch (error) {
      console.log("Error", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <div className="p-0 m-0 w-screen h-full bg-black">
      <StickyNavbar />
      <div>
        <div className='w-screen flex justify-center items-center flex-col gap-y-9'>
          {/* <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="enter value"
            className=''
          /> */}
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Write Your To Do Task..."
            name="text"
            class="input"></input>
          <button onClick={addTodo}>ADD TO DO</button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 w-screen pt-8'>
          {post.map((post) => (
            <div key={post._id}>
              <article className="bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-10 h-10 text-gray-300 bg-gray-600 rounded-full p-1"
                >
                  <path
                    d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="currentColor"
                  ></path>
                </svg>
                <p className="text-sm w-full text-gray-400">
                  {post.value}
                </p>
                <br />
                <div className='flex justify-between align-center'>
                  <button onClick={() => editHandler(post._id)}>EDIT</button>
                  <button onClick={() => deleteHandler(post._id)}>DELETE</button>
                </div>
              </article>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default App
