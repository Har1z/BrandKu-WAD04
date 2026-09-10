import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header flex justify-between">
      <h1>WEBSITEKU</h1>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
      </nav>
    </header>
  );
};

export default Header;
