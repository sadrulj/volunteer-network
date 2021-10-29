import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Services = ({ item }) => {
  const { image_url, title } = item;
  const bg = ["orange", "blue", "green", "brown"];

  const randomBg = bg[Math.floor(Math.random() * 4)];

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/register";

  const handleCard = () => {
    history.push(redirect_uri);
  };

  return (
    <div className="col">
      <div
        onClick={handleCard}
        className="card border-0 cursor"
        style={{ width: "18rem" }}
      >
        <img src={image_url} className="card-img-top" alt="..." />
        <div className={`${randomBg} card-body`}>
          <p className="card-text">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
