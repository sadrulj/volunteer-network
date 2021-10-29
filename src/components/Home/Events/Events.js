import React, { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const result = await axios.get("http://localhost:5000/events");
    setEvents(result.data);
  };

  const handleDeleteItem = (id) => {
    const url = `http://localhost:5000/events/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Item Deleted Successfully");
          const remainingItems = events.filter((event) => event._id !== id);
          setEvents(remainingItems);
        }
      });
  };
  return (
    <div>
      <div className="shadow rounded-3 p-3 bg-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">id</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Events</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={event._id}>
                <th scope="row">{index + 1}</th>
                <td>{event._id}</td>
                <td>{event.name}</td>
                <td>{event.email}</td>
                <td>{event.date}</td>
                <td>{event.description}</td>
                <td>{event.events}</td>
                <td>
                  <button className="btn btn-primary mx-1">Update</button>
                  <button
                    onClick={() => handleDeleteItem(event._id)}
                    className="btn btn-danger mx-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
