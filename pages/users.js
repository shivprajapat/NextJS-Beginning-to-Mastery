import React from "react";
import User from "../components/User";

const UserList = (props) => {
  return (
    <div>
      <h1>List of UserList</h1>
      <aside>
        {props.data.map((item, index) => {
          return <User item={item} key={index} />;
        })}
      </aside>
    </div>
  );
};

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
