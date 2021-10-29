import React, { useEffect, useState } from "react";
import Services from "../Services/Services";
import axios from "axios";

const ServicesShow = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const result = await axios.get("http://localhost:5000/services");
    setItems(result.data);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-4 mb-5">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="form-control w-25"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-2">
        {items
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((item) => {
            return <Services key={item._id} item={item}></Services>;
          })}
      </div>
    </>
  );
};

export default ServicesShow;
