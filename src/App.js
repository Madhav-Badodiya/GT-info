import { useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import CardGrid from "./components/cardGrid/CardGrid";
import "./App.scss";

function App() {
  // State to store the users and the loading status
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch the users from the API
  const fetchUsers = async () => {
    setLoading(true);
    const response = await axios.get("https://reqres.in/api/users?page=1");
    setUsers(response.data.data);
    setLoading(false);
  };

  return (
    <div className="App">
      <Navbar fetchUsers={fetchUsers} />
      {loading ? (
        <div className="loader">
          <div className="spinner" />
        </div>
      ) : users.length > 0 ? (
        <CardGrid users={users} />
      ) : (
        <div className="message">
          <h2>Welcome to the User Page</h2>
          <p>
            Click the "Get Users" button to retrieve information from the API
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
