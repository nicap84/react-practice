export default function GroceryForm({ item, handleOnSubmit, handleOnChange }) {
  return (
    <div>
      <form className="mb-3" onSubmit={handleOnSubmit}>
        <input
          className="form-control"
          placeholder="Add a grocery item"
          type="text"
          value={item}
          onChange={handleOnChange}
        ></input>
        <button className="btn btn-primary mt-2">Add Item</button>
      </form>
    </div>
  );
}
