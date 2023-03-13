import React from "react";

const ProductList = ({ products }) => {
  console.log("products :>> ", products);
  return (
    <div>
      <h1>List of Products</h1>
      <aside>
        {products.map((item, index) => {
          const { id, title, price } = item;
          return (
            <article key={index}>
              <div>
                <div className="flex-space">
                  <button>{id}</button>
                  <button className="price">{price}</button>
                </div>
                <h3>{title}</h3>
              </div>
            </article>
          );
        })}
      </aside>
    </div>
  );
};

export default ProductList;
export async function getStaticProps() {
  console.log("Generating / Regenerating ProductList");

  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}
