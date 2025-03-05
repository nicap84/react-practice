// import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import { useBooks } from "./services/use-books";

function App() {
  /*const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Java");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const items = await getBooks(searchTerm);
      console.log("items", items);
      setBooks(items);
    } catch (error) {
      console.log("Error fetching books", error);
    } finally {
      setLoading(false);
    }
  };*/

  const { books, loading, setSearchTerm } = useBooks("Java");

  const handleSearch = (query) => {
    setSearchTerm(query);
    console.log("updated search term: ", query);
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      {loading ? (
        <p className="placeholder-glow display-3 text-body-secondary">
          <span className="placeholder col-12">Loading</span>
        </p>
      ) : (
        <BookList books={books} />
      )}
      <Footer />
    </>
  );
}

export default App;
