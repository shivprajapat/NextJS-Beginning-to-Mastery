import Link from "next/link";
import React from "react";
import Post from "../../components/Post";

const PostList = ({ posts }) => {
  return (
    <div>
      <h1>List of PostList</h1>
      <aside>
        {posts.map((item, index) => {
          return (
            <Link key={index} href={`posts/${item.id}`}>
              <Post item={item} />
            </Link>
          );
        })}
      </aside>
    </div>
  );
};

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
