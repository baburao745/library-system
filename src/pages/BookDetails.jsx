import { Link, useParams } from "react-router-dom";
import books from "../data/book";

function BookDetails() {
  const { id } = useParams();

  const book = books.find((book) => String(book.id) === String(id));

  if (!book) {
    return (
      <main>
        <h2>Book Not Found</h2>
        <Link to="/books">Back to Books</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Rating: ⭐ {book.rating}</p>

      <Link to="/books">Back to Books</Link>
    </main>
  );
}

export default BookDetails;