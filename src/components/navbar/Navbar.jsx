import "./navbar.scss";

const Navbar = ({ fetchUsers }) => {
  return (
    <nav className="navbar">
      <h3 className="brand-name">GT info</h3>
      <button className="get-users-btn" onClick={fetchUsers}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
