import { Link, useParams } from "react-router-dom";
import books from "../data/book";

function BrowseBooks() {
  const { category } = useParams();

  const filteredBooks = category
    ? books.filter((book) => book.category === category)
    : books;

  return (
    <main>
      <h1>{category || "All Books"}</h1>

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <article className="book-card" key={book.id}>
            <div className="book-cover">📚</div>

            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>⭐ {book.rating}</p>

            <Link to={`/book/${book.id}`} className="primary-btn">
              View Details
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

export default BrowseBooks;