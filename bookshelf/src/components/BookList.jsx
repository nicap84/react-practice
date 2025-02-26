import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <div className="row">
      <h1>BookList</h1>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
