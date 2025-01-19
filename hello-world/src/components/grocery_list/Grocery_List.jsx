import { useState } from "react";
import TrashButton from "../TrashButton";

export default function AddGRoceries() {
  const [groceryList, setGroceryList] = useState([]);
  const [boughtItems, setBoughtItems] = useState([]);

  function handleEvent() {
    event.preventDefault();
    const groceryItem = event.target[0].value;
    groceryList.push(groceryItem);
    setGroceryList([...groceryList]);
  }

  function handleRacioClick() {
    event.preventDefault();
    const groceryItem = event.target.value;
    // eliminarlo de la lista de compras
    removeFromGroceryList(groceryItem);
    // añadirlo a lista de comprados
    boughtItems.push(groceryItem);
    setBoughtItems([...boughtItems]);
  }

  function handleGroceryRemove(item) {
    removeFromGroceryList(item);
  }

  function handleBoughtRemove(item) {
    const boughtItemIndex = boughtItems.indexOf(item);
    boughtItems.splice(boughtItemIndex, 1);
    setBoughtItems([...boughtItems]);
  }

  function removeFromGroceryList(groceryItem) {
    const groceryItemIndex = groceryList.indexOf(groceryItem);
    groceryList.splice(groceryItemIndex, 1);
    setGroceryList([...groceryList]);
  }

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
                  value={item}
                  name="flexRadioDefault"
                  id={index}
                  onChange={handleRacioClick}
                />
                <label className="form-check-label" htmlFor={index}>
                  {item}
                </label>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    handleGroceryRemove(item);
                  }}
                >
                  <TrashButton />
                </button>
              </div>
            </div>
          );
        })}
        {boughtItems.map((item, index) => {
          return (
            <div key={index} className="card mt-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id={index}
                  defaultChecked
                />
                <label>
                  <strike className="form-check-label" htmlFor={index}>
                    {item}
                  </strike>
                </label>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    handleBoughtRemove(item);
                  }}
                >
                  <TrashButton />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="card mt-4 text-bg-light">
        <h3 className="card-text">
          {boughtItems.length} of {groceryList.length + boughtItems.length}{" "}
          items have been bought
        </h3>
      </div>
    </div>
  );
}
