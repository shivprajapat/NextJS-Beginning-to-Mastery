import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};
const DashboardSWR = () => {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return <h2>An error has occurred.</h2>;
  if (!data) return <h2>Loading...</h2>;
  return (
    <div>
      <h1>NextJs SWR</h1>
      <aside>
        <article>
          <div className="flex-space">
            <b>Followers :</b>
            <button className="red">{data.followers}</button>
          </div>
          <div className="flex-space">
            <b>Following :</b>
            <button className="red">{data.following}</button>
          </div>
          <div className="flex-space">
            <b>Likes :</b>
            <button className="red">{data.likes}</button>
          </div>
          <div className="flex-space">
            <b>Posts :</b>
            <button className="red">{data.posts}</button>
          </div>
        </article>
      </aside>
    </div>
  );
};

export default DashboardSWR;
