import {
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
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

    const userEvents = await getEventData(searchName);
    setEventData(userEvents);
  };

  return (
    <>
      <Container className="userInfo">
        <Heading textAlign={"center"} size={"lg"} m={"5"}>
          GitHat
        </Heading>
        <form onSubmit={onSubmitHandler}>
          <Input
            onChange={onChangeHandle}
            type="text"
            placeholder="Search for User"
            className="input_search"
            name="name"
          />

          <Button
            marginLeft={157}
            marginTop={15}
            type="submit"
            colorScheme="blue"
          >
            Search Github
          </Button>
          <br />
          <br />
        </form>
        <div className="userInfo">
          <Image
            marginLeft={157}
            marginTop={15}
            borderRadius="full"
            boxSize="150px"
            src={user?.avatar_url}
            alt=""
          />

          <Heading marginTop={2} marginBottom={2} size={"md"}>
            User name : {user?.name}{" "}
          </Heading>

          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            <GridItem borderRadius={5} p={2} w="100%" h="10" bg="blue.500">
              {" "}
              Repos :{user?.public_repos}{" "}
            </GridItem>
            <GridItem borderRadius={5} p={2} w="100%" h="10" bg="blue.500">
              {" "}
              Gists : {user?.public_gists}{" "}
            </GridItem>
            <GridItem borderRadius={5} p={2} w="100%" h="10" bg="blue.500">
              followers : {user?.followers}{" "}
            </GridItem>
            <GridItem borderRadius={5} p={2} w="100%" h="10" bg="blue.500">
              {" "}
              following : {user?.following}
            </GridItem>
          </Grid>
        </div>
        <Text marginTop={2}>
          Lets see most recent activity of &nbsp;
          <a href={user?.html_url} target="_blank">
            {user?.login}
          </a>
        </Text>
        <ul>
          {eventData?.map((event) => {
            return <UserEvents key={event.id} event={event} />;
          })}
        </ul>
      </Container>
    </>
  );
}

export default App;
