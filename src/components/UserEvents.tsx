import { Container, Link, Text } from "@chakra-ui/react";
import React from "react";
import { UserActivity } from "./types";

interface UserEventsProps {
  event: UserActivity;
}

function UserEvent(props: UserEventsProps) {
  const {
    event: { type, repo, payload },
  } = props;

  if (type === "PushEvent") {
    return (
      <>
        <Container bgColor={"blue.500"} marginTop={5}>
          <Text
            textAlign={"center"}
            fontSize="30px"
            marginTop={2}
            color="black"
          >
            {type}
          </Text>
          <Text textAlign={"center"} fontSize="30px" marginTop={2} color="red">
            <Link href={`https://github.com/${repo.name}`} target="_blank">
              {repo.name}
            </Link>
          </Text>
          <Text
            textAlign={"center"}
            fontSize="20px"
            marginTop={2}
            color="black"
          >
            Commit msg:{" "}
            <a
              href={`https://github.com/${repo.name}/commit/${
                payload.commits && payload.commits[0].sha
              }`}
              target="_blank"
            >
              {payload.commits && payload.commits[0].message}
            </a>{" "}
          </Text>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container bgColor={"blue.500"} marginTop={5}>
          <Text
            textAlign={"center"}
            fontSize="30px"
            marginTop={2}
            color="black"
          >
            {type}
          </Text>
          <Text textAlign={"center"} fontSize="30px" marginTop={2} color="red">
            <Link href={`https://github.com/${repo.name}`} target="_blank">
              {repo.name}
            </Link>
          </Text>
        </Container>
      </>
    );
  }
}

export default UserEvent;
