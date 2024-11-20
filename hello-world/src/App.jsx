import "./App.css";
import Book from "./components/Book.jsx";
import { booksData } from "./data.js";

function App() {
  return (
    <div className="App">
      {booksData.items.map((book, index) => (
        <Book
          Key={index}
          title={book.volume.title}
          subtitle={book.volume.subtitle}
          author={book.volume.authors}
          description={book.volume.description}
          image={book.volume.image}
        />
      ))}
    </div>
  );
}

export default App;
