import axios from "axios";
import { useEffect, useState } from "react";
import { Gituser } from "./components/types";

function App() {
  const [user, setUser] = useState<Gituser>();
  const [SearchName, setSearchName] = useState<string>("");
  const getData = async () => {
    const res = await axios.get(`https://api.github.com/users/${SearchName}`);
    console.log(res.data);
    setUser(res.data);
  };
  const onChangeHandle = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearchName(e.target.value);
  };
  const onSubmitHandler = (e: any) => {
    e.preventDefault();

    getData();
  };

  return (
    <>
      <div>loading github users profile and their activities</div>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={onChangeHandle}
          type="text"
          placeholder="Search for User"
          className="input_search"
          name="name"
         
        />
        <button type="submit" className="search_button">
          Search Github
        </button>
      </form>
      <div className="userInfo">
        <img src={user?.avatar_url} width="50" alt="" />
        <h1>User name : {user?.name} </h1>
        <h2>
          Lets see most recent activity of  : <a href={user?.html_url} target = "_blank">{user?.login}</a>
        </h2>
        <ul>
          <li>Repos :{user?.public_repos} </li>
          <li>Gists : {user?.public_gists} </li>
          <li>followers : {user?.followers}</li>
          <li>following : {user?.following}</li>
        </ul>
      </div>
    </>
  );
}

export default App;
