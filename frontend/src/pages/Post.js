import { useEffect, useState } from "react";

function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // fetch('https://than-trong-hung-1999.onrender.com/posts')
    fetch('http://localhost:3001/posts/')
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
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={index}>
            <td>{post.post_id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Post;
