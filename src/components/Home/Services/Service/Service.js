import React, { useEffect, useState } from "react";
import axios from "axios";
import AddService from "../AddService/AddService";

const Service = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const result = await axios.get("http://localhost:5000/services");
    setItems(result.data);
  };

  const handleDeleteItem = (id) => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Item Deleted Successfully");
          const remainingItems = items.filter((item) => item._id !== id);
          setItems(remainingItems);
        }
      });
  };

  return (
    <div className="container">
      <div className="shadow rounded-3 p-3 my-3 bg-body">
        <AddService></AddService>
      </div>
      <div className="shadow rounded-3 p-3 bg-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">id</th>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item._id}</td>
                <td>{item.title}</td>
                <td>{item.image_url}</td>
                <td>
                  <button className="btn btn-primary mx-1">Update</button>
                  <button
                    onClick={() => handleDeleteItem(item._id)}
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

export default Service;
