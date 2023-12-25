import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fun = async() => {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    };
    fun();
  }, []);

  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user)=>{
          const {id, login, avatar_url, html_url} = user;
          return (
          <li key={id}>
            <img src={avatar_url} />
            <div>
              <h5>{login}</h5>
              <a href={html_url}>Profile</a>
            </div>
          </li>
          )
        })}
      </ul>
    </section>
  )
};
export default FetchData;