import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Java");

  useEffect(() => {
    getBooks();
  }, [searchTerm]);

  const getBooks = async () => {
    // url=https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=40
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );
    const data = await res.json();
    console.log("data: ", data.items);
    setBooks(data.items || []);
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
    console.log("updated search term: ", query);
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <BookList books={books} />
      <Footer />
    </>
  );
}

export default App;
