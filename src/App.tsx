import axios from "axios";
import { useEffect, useState } from "react";
import { Gituser } from "./components/types";

function App() {
  const [user, setUser] = useState<Gituser>();
  const [SearchName, setSearchName] = useState<string>("");
 
  const onChangeHandle = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearchName(e.target.value);
  };
  const onSubmitHandler =async (e:any) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://api.github.com/users/${SearchName}`);
      console.log(res.data);
      setUser(res.data);
      
    } catch (error) {
      console.error(error);
      
    }
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
          // value={SearchName}
        />
        <button type="submit" className="search_button">
          Search Github
        </button>
      </form>
      {/* {
      user.map((post)=>{
        const {id, title , body} = post;
          return <div className="post" key={id} >
              <h1>{title} </h1>
              <p> {body} </p>
          </div>

      })
     } */}
      {<h1> {user?.name} </h1>}
    </>
  );
}

export default App;
