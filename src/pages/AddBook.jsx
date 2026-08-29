import { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Book "${title}" added successfully!`);

    setTitle("");
    setAuthor("");
  };

  return (
    <main>
      <h1>Add Book</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit">Add Book</button>
      </form>
    </main>
  );
}

export default AddBook;