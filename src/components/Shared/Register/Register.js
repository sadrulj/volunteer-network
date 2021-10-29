import React, { useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { user } = useAuth();

  const nameRef = useRef();
  const emailRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();
  const eventsRef = useRef();

  // const location = useLocation();
  // const history = useHistory();
  // const redirect_uri = location.state?.from || "/events";

  const handleEvents = async (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const date = dateRef.current.value;
    const description = descriptionRef.current.value;
    const events = eventsRef.current.value;

    const newItem = { name, email, date, description, events };
    fetch("http://localhost:5000/events", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    // .then((result) => {
    //   history.push(redirect_uri);
    // });
    e.preventDefult();
  };

  return (
    <div>
      <div
        className="card text-center mx-auto mt-5"
        style={{ width: "28rem", height: "18rem" }}
      >
        <div className="card-body bg-body rounded block">
          <form onSubmit={handleEvents}>
            <h5 className="card-title bold fs-2 bg-body">
              Register as a Volunteer
            </h5>
            <h4
              ref={nameRef}
              className="form-control my-3"
              type="text"
              placeholder="Full Name"
            >
              {user.displayName}
            </h4>
            <h4
              ref={emailRef}
              className="form-control my-3"
              type="email"
              placeholder="Username or Email"
            >
              {user.email}
            </h4>

            <input
              className="form-control my-3"
              ref={dateRef}
              type="date"
              placeholder="Date"
            />
            <textarea
              className="form-control my-3"
              ref={descriptionRef}
              name=""
              id=""
              cols="5"
              rows="5"
              placeholder="description"
            ></textarea>
            <input
              ref={eventsRef}
              className="form-control my-3"
              type="text"
              placeholder="Event"
            />

            <input className="btn btn-primary px-5" type="submit">
              Registration
            </input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
