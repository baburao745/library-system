import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();

  const books = useSelector((state) => state.books.books);

  const book = books.find(
    (book) => String(book.id) === String(id)
  );

  if (!book) {
    return (
      <main className="details-page">
        <h1>Book Not Found</h1>
        <Link to="/books">Back to Browse</Link>
      </main>
    );
  }

  return (
    <main className="details-page">
      <div className="details-card">
        <div className="details-cover">📖</div>

        <div className="details-content">
          <p className="book-category">{book.category}</p>

          <h1>{book.title}</h1>

          <h3>By {book.author}</h3>

          <p className="rating">⭐ {book.rating} / 5</p>

          <p className="description">
            {book.description ||
              "No description available for this book."}
          </p>

          <Link to="/books" className="primary-btn">
            ← Back to Browse
          </Link>
        </div>
      </div>
    </main>
  );
}

export default BookDetails;