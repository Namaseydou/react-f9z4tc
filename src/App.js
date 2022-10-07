import React from "react";
import axios from "axios";
import "./style.css";

const baseURL = 'https://jsonplaceholder.typicode.com/posts/';

export default function App() {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data)
      ;
    });
  }, []);

  function deletePost(){
    axios
      .delete(`${baseURL}/1`)
      .then(()=>{
        alert("Post deleted!");
        setPost(null)
      });
  }

  if(!post) return "NO post!"
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>delete Post </button>
    </div>
  );
}
