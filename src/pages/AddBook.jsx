import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../store/bookSlice";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.author ||
      !formData.category ||
      !formData.description ||
      !formData.rating
    ) {
      setError("Please fill in all fields.");
      return;
    }

    const newBook = {
      id: Date.now(),
      title: formData.title,
      author: formData.author,
      category: formData.category,
      description: formData.description,
      rating: Number(formData.rating),
      popular: false,
    };

    dispatch(addBook(newBook));

    navigate("/books");
  };

  return (
    <main className="add-book-page">
      <div className="form-card">
        <h1>Add a New Book</h1>
        <p>Add your favorite book to the library.</p>

        {error && <p className="form-error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Book Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter book title"
          />

          <label>Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
          />

          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Example: Kannada"
          />

          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter book description"
            rows="5"
          />

          <label>Rating</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="1 - 5"
            min="1"
            max="5"
            step="0.1"
          />

          <button type="submit" className="primary-btn">
            Add Book
          </button>
        </form>
      </div>
    </main>
  );
}

export default AddBook;