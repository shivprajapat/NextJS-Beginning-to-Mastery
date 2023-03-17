import React from "react";

const Home = () => {
  const name = process.env.NEXT_PUBLIC_DB_USER
  return (
    <div>
      <h1>Next.js complete Course 2023 (🚀)</h1>
      <h1>UserName: {name}</h1>
    </div>
  );
};

export default Home;