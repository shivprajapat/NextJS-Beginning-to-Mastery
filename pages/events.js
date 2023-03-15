import { useRouter } from "next/router";
import React, { useState } from "react";

const EventsList = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <div>
      <h1>Events List</h1>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <aside>
        {events.map((event, index) => {
          const { id, date, category, title, description } = event;
          return (
            <article key={index}>
              <div>
                <div className="flex-space">
                  <button>{id}</button>
                  <button className="price">{date}</button>
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

export default EventsList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();
  return {
    props: {
      eventList: data,
    },
  };
}
