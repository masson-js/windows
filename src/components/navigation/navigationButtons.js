import { Link } from "react-router-dom";
export function NavigationButtons() {
  return (
    <nav>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/blog">Blog</Link>
      </button>
    </nav>
  );
}
