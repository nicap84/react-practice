import { useState } from "react";

export default function AddGRoceries() {
  const [groceryList, setGroceryList] = useState([]);

  function handleEvent() {
    event.preventDefault();
    const groceryItem = event.target[0].value;
    groceryList.push(groceryItem);
    setGroceryList([...groceryList]);
  }

  function handleRacioClick() {}

  return (
    <div className="container mt-4">
      <form onSubmit={handleEvent}>
        <div className="form-group mb-3">
          <h1>Outta Milk</h1>
          <input
            type="text"
            className="form-control"
            placeholder="Add Grocery Item"
          />
        </div>
        <button className="btn btn-primary mt-2">Add</button>
      </form>
      <div>
        {groceryList.map((item, index) => {
          return (
            <div key={index} className="card mt-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id={`flexRadioDefault1_${index}`}
                  onClick={handleRacioClick}
                />
                <label className="form-check-label">{item}</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
      <div className="card mt-4 text-bg-light">
        <p className="card-text">items have been bought</p>
      </div>
    </div>
  );
}
