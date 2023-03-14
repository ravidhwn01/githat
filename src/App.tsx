import { Container, Heading, Img, Input, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Gituser, UserRepoData } from "./components/types";

function App() {
  const [user, setUser] = useState<Gituser>();
  const [repoData, setrepoData] = useState<UserRepoData[]>();

  const [SearchName, setSearchName] = useState<string>("");
  const getData = async () => {
    const res = await axios.get(`https://api.github.com/users/${SearchName}`);
    console.log(res.data);
    setUser(res.data);
  };
  const getRepoData = async () => {
    const repores = await axios.get(
      "https://api.github.com/users/ravidhwn01/repos"
    );
    console.log(repores.data);
    setrepoData(repores.data);
  };
  const onChangeHandle = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearchName(e.target.value);
  };
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    getData();
    getRepoData();
  };

  return (
    <>
      <Container className="userInfo">
        <Heading size={"lg"} m={"5"}>
          github users and their activities
        </Heading>
        <form onSubmit={onSubmitHandler}>
          <Input
            onChange={onChangeHandle}
            type="text"
            placeholder="Search for User"
            className="input_search"
            name="name"
          />

          <Button type="submit" colorScheme="blue">
            Search Github
          </Button>
        </form>
        <div className="userInfo">
          <Img src={user?.avatar_url} width="5" alt="" />
          <Heading size={"md"}>User name : {user?.name} </Heading>
          <ul>
            <Text>Repos :{user?.public_repos} </Text>
            <Text>Gists : {user?.public_gists} </Text>
            <Text>followers : {user?.followers}</Text>
            <Text>following : {user?.following}</Text>
          </ul>
          <h2>
            Lets see most recent activity of
            <a href={user?.html_url} target="_blank">
              {user?.login}
            </a>
          </h2>
          <ul>
            {repoData?.map((item) => {
              return (
                <>
                  <li>{item.name} </li>
                  <li>
                    <a href={item.html_url} target="_blank">
                      {item.html_url}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </Container>
    </>
  );
}

export default App;
