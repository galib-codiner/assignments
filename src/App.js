import { useState, useEffect } from "react";
import "./App.css";
import Users from "./components/Users";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [text, setText] = useState();


  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);



  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z]/);
    setText(value);
  };

  return (
    <div className="App">
      <h1>Search User</h1>
      <input type="text" value={text} onChange={handleChange} className="search-box" onInput={filterCards} placeholder="Search..."/>
      <div className="user_container">
      {users.map((user, index) => (
        <Users key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;