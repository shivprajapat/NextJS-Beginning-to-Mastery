import React from "react";

const ArticleListByCategory = ({ articles, category }) => {
  return (
    <div>
      <h1>
        Article List By Category{" "}
        <button className="price red">{category}</button>
      </h1>
      <aside>
        {articles.map((item, index) => {
          const { id, title, description } = item;
          return (
            <article key={index}>
              <div>
                <div className="flex-space">
                  <button>{id}</button>
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

export default ArticleListByCategory;
export async function getServerSideProps(context) {
  const { params, req, res, query } = context;

  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  console.log(`Pre-rendering News Articles for category ${category}`);

  res.setHeader("Set-Cookie", ["name=Shiv"]);
  console.log(req.headers.cookie);
  console.log(query);
  return {
    props: {
      articles: data,
      category: category,
    },
  };
}
