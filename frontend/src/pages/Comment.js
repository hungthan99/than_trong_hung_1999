import { useEffect, useState } from "react";

function Comment() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    // fetch('https://than-trong-hung-1999.onrender.com/comments')
    fetch('http://localhost:3001/comments/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComments(data);
      });
  }, []);
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
      {comments.map((comment, index) => (
          <tr key={index}>
            <td>{comment.comment_id}</td>
            <td>{comment.name}</td>
            <td>{comment.email}</td>
            <td>{comment.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Comment;
