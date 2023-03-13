import { useRouter } from "next/router";
import React from "react";

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="post-details">
      <article>
        <div>
          <button>{post.id}</button>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      </article>
      <div className="go-back">
        <button onClick={() => router.push("/posts")}>Go Back </button>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post) => {
    return {
      params: { postId: post.id.toString() },
    };
  });

  return { paths, fallback: true };
}
