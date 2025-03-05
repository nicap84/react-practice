const BASE_URL = "https://www.googleapis.com/books/v1/";

export async function getBooks(searchTerm, controller) {
  try {
    const res = await fetch(`${BASE_URL}volumes?q=${searchTerm}`, {
      signal: controller.signal,
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch books ${res}`);
    }
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Fetch aborted");
    } else {
      console.error("Error fetching books: ", error);
      throw error;
    }
  }
}
