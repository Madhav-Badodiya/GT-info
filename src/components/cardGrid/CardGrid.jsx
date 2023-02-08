import "./cardGrid.scss";
import UsersCard from "../usersCard/UsersCard";

const CardGrid = ({ users }) => (
  <div className="card-grid">
    {users.map((user) => (
      <UsersCard key={user.id} user={user} />
    ))}
  </div>
);

export default CardGrid;
