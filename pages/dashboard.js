import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);
  if (isLoading) {
    return <h2>loading...</h2>;
  }
  console.log("dashboardData :>> ", dashboardData);
  return (
    <div>
      <h1>Dashboard</h1>
      <aside>
        <article>
            <div className="flex-space">
              <b>Followers :</b>
              <button className="red">{dashboardData.followers}</button>
            </div>
            <div className="flex-space">
              <b>Following :</b>
              <button className="red">{dashboardData.following}</button>
            </div>
            <div className="flex-space">
              <b>Likes :</b>
              <button className="red">{dashboardData.likes}</button>
            </div>
            <div className="flex-space">
              <b>Posts :</b>
              <button className="red">{dashboardData.posts}</button>
            </div>
        </article>
      </aside>
    </div>
  );
};

export default Dashboard;
