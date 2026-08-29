import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <main className="not-found-page">
      <h1>404 - Page Not Found</h1>

      <p>Sorry, the page you are looking for does not exist.</p>

      <p>
        Invalid URL: <strong>{location.pathname}</strong>
      </p>
    </main>
  );
}

export default NotFound;