import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };
  console.log(
    "%c shiv console value ✅ !! ",
    "background: #4705dc; color: #fff",
    comments
  );

  return (
    <div>
      <h1>Comments</h1>
      <button onClick={fetchComments}>Load comments</button>
      <aside>
        {comments.map((comment, index) => {
          const { id, text } = comment;
          return (
            <article key={index}>
              <div>
                <div className="flex-space">
                  <button className="red">{id}</button>
                </div>
                <p>{text}</p>
              </div>
            </article>
          );
        })}
      </aside>
    </div>
  );
};

export default Comments;
