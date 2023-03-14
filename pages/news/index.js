import React from "react";

const NewsArticleList = ({ articles }) => {
  return (
    <div>
      <h1>List of News Articles</h1>
      <aside>
        {articles.map((item, index) => {
          const { id, title, price, category, description } = item;
          return (
            <article key={index}>
              <div>
                <div className="flex-space">
                  <button>{id}</button>
                  <button className="price">{price}</button>
                  <button className="price red">{category}</button>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          );
        })}
      </aside>
    </div>
  );
};

export default NewsArticleList;

export async function getServerSideProps() {
  // console.log("Pre-rendering NewsArticleList");

  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
