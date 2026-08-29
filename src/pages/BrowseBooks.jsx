import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      !category ||
      book.category.toLowerCase() === decodeURIComponent(category).toLowerCase();

    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="browse-page">
      <section className="browse-header">
        <h1>{category ? `${decodeURIComponent(category)} Books` : "Browse Books"}</h1>

        <input
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </section>

      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="book-grid">
          {filteredBooks.map((book) => (
            <article className="book-card" key={book.id}>
              <div className="book-cover">📚</div>

              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>Category: {book.category}</p>
              <p>⭐ {book.rating}</p>

              <Link to={`/book/${book.id}`}>
                View Details
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default BrowseBooks;