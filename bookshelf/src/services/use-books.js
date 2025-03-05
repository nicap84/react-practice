import { useEffect, useState } from "react";
import { getBooks } from "./api-client";

export function useBooks(initialQuey = "Java") {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialQuey);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    
    
    async function fetchBooksData(query) {
      setLoading(true);
      try {
        const items = await getBooks(query, controller);
        console.log("items", items);
        setBooks(items);
      } catch (error) {
        console.error("Error fetching books", error);
      } finally {
        setLoading(false);
      }
    }

    if (searchTerm) {
      fetchBooksData(searchTerm);
    }
  }, [searchTerm]);

  return { books, loading, setSearchTerm };
}
