import { useState } from "react";

export default function FormName() {
  const [name, setName] = useState("");

  function handleEvent(event) {
    event.preventDefault();
    console.log(name);
  }

  return (
    <div className="container mt-4">
      <form onSubmit={handleEvent}>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}
