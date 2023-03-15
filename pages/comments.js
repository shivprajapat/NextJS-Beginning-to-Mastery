import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };
  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setComment("");
  };
  return (
    <div>
      <h1>Comments</h1>
      <button onClick={fetchComments}>Load comments</button>
      <div className="form">
        <div className="form-group">
          <label htmlFor="comment">comment</label>
          <input
            type="text"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button onClick={submitComment}>Submit comment</button>
        </div>
      </div>
      <aside>
        {comments.map((comment, index) => {
          const { id, text } = comment;
          return (
            <article key={index}>
              <div>
                <div className="flex-space">
                  <button className="price red">{id}</button>
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
