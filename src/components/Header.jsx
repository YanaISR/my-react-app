import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h2>Logo</h2>
      <nav>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
