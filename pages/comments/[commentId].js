import React from "react";
import { comments } from "../../data/comments";

const Comment = ({ comment }) => {
  console.log({ comment });
  return (
    <div>
      <h1>Comment</h1>
      <aside>
        <article>
          <div>
            <div className="flex-space">
              <button className="price">{comment.id}</button>
            </div>
            <p>{comment.text}</p>
          </div>
        </article>
      </aside>
    </div>
  );
};

export default Comment;

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  
  /** Don't do this 
  const response = await fetch(`http:localhost:3000/api/comments/${commentId}`)
  const data = await response.json()
  */
  console.log(comment);
  return {
    props: {
      comment,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { commentId: "1" },
      },
      {
        params: { commentId: "2" },
      },
      {
        params: { commentId: "3" },
      },
    ],
    fallback: false,
  };
}
