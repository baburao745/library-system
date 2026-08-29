import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        📚 My Library
      </div>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Browse Books</NavLink>
        <NavLink to="/add-book">Add Book</NavLink>
      </nav>
    </header>
  );
}

export default Header;