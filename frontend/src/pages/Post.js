import { useEffect, useState } from "react";

function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://than-trong-hung-1999.onrender.com/posts') // Using public api
    // fetch('http://localhost:3001/posts/') // Using private api
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col">User</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={index}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>{post.user}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Post;
