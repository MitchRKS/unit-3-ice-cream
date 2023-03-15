import { Link } from "react-router-dom";

export function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <h1>ICE CREAM PARLOR</h1>
      </Link>
    </div>
  );
}
