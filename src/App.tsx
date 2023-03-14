import { Button, Container, Heading, Img, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { getUser } from "./components/GetUser";
import { Gituser, UserActivity } from "./components/types";
import { getEventData } from "./components/UserEventData";
import UserEvents from "./components/UserEvents";

function App() {
  const [user, setUser] = useState<Gituser>();
  const [eventData, setEventData] = useState<UserActivity[]>();
  const [searchName, setSearchName] = useState<string>("");

  const onChangeHandle = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearchName(e.target.value);
  };
  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    const user = await getUser(searchName);
    setUser(user);

    const userEvents = await getEventData();
    setEventData(userEvents);
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
            {eventData?.map((event) => {
              return <UserEvents key={event.id} event={event} />;
            })}
          </ul>
        </div>
      </Container>
    </>
  );
}

export default App;
