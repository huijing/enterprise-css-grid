import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      style={{
        writingMode: "vertical-rl",
        position: "fixed",
        top: 0,
        right: 0,
        backgroundColor: "var(--bg-colour)"
      }}
    >
      <Link style={{ display: "inline-block", padding: "1em" }} to="/">
        Basic
      </Link>
      <Link style={{ display: "inline-block", padding: "1em" }} to="/demo">
        Demo
      </Link>
    </nav>
  );
}

export default Nav;
