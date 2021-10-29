import React, { useRef } from "react";

const AddService = () => {
  const titleRef = useRef();
  const image_urlRef = useRef();

  const handleItems = async (e) => {
    const title = titleRef.current.value;
    const image_url = image_urlRef.current.value;

    const newItem = { title, image_url };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    e.preventDefult();
  };

  return (
    <div>
      <form onSubmit={handleItems}>
        <div className="d-flex justify-content-center">
          <input
            ref={titleRef}
            className="form-control  w-25 mx-2"
            type="text"
            placeholder="Title"
          />
          <input
            ref={image_urlRef}
            className="form-control  w-25 mx-2"
            type="text"
            placeholder="Image URL..."
          />
          <input
            className="btn btn-primary mx-2"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddService;
