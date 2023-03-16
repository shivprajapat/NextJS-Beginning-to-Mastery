import React from "react";

const Home = () => {
  return (
    <div>
      <style jsx global>{`
        body {
          background: black;
          color: white;
        }
      `}</style>
      <h1>Next.js complete Course 2023 (🚀)</h1>
      <style jsx>
        {`
          .description {
            background: red;
          }
        `}
      </style>
      <div className="description">
        <p>Hello description</p>
      </div>
    </div>
  );
};

export default Home;
