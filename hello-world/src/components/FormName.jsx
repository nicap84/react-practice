import { useState } from "react";

export default function FormName() {
  const [formData, setFormaData] = useState({
    name: "",
    age: "",
    profession: "",
  });

  const [profiles, setProfiles] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormaData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleEvent(event) {
    event.preventDefault();
    if (formData.name && formData.age && formData.profession) {
      setProfiles([...profiles, formData]);
      setFormaData({ name: "", age: "", profession: "" });
    }
  }

  return (
    <div className="container mt-4">
      <form onSubmit={handleEvent}>
        <div className="form-group mb-3">
          <input
            className="form-control"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group mb-3">
          <input
            className="form-control"
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
        </div>
        <div className="form-group mb-3">
          <input
            className="form-control"
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            placeholder="Enter profession"
          />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}
