import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <h3>Giphy Search</h3>
        </Link>
      </div>
      <div>
        <Link to="/trending">
          <h4>Trending GIF </h4>
        </Link>
      </div>
    </header>
  );
}
