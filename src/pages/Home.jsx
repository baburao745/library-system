import { Link } from "react-router-dom";
import books from "../data/book";

function Home() {
  const categories = [
    ...new Set(books.map((book) => book.category))
  ];

  const popularBooks = books.filter((book) => book.popular);

  return (
    <main className="home-page">

      <section className="hero">
        <p className="hero-label">WELCOME TO</p>
        <h1>My Online Library</h1>

        <p>
          Discover amazing books, explore new categories,
          and find your next favorite read.
        </p>

        <Link to="/books" className="primary-btn">
          Browse Books
        </Link>
      </section>

      <section className="categories">
        <h2>Explore Categories</h2>

        <div className="category-list">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/books/${encodeURIComponent(category)}`}
              className="category-card"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="popular-books">
        <div className="section-heading">
          <h2>Popular Books</h2>
          <Link to="/books">View All</Link>
        </div>

        <div className="book-grid">
          {popularBooks.map((book) => (
            <article className="book-card" key={book.id}>
              <div className="book-cover">
                📚
              </div>

              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>⭐ {book.rating}</p>

              <Link  to={`/book/${book.id}`} className="details-btn">
                View Details
              </Link>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Home;