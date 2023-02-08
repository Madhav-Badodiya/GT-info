import "./usersCard.scss";

const UsersCard = ({ user }) => (
  <div className="user-card">
    <img src={user.avatar} alt={`Avatar of ${user.first_name}`} />
    <h4>
      Name: {user.first_name} {user.last_name}
    </h4>
    <p>Email.id: {user.email}</p>
  </div>
);

export default UsersCard;
