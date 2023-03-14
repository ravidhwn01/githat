import { Container, Link, Text } from "@chakra-ui/react";
import React from "react";
import { UserActivity } from "./types";
interface UserEventsProps {
  event: UserActivity;
}

function CreateEvent(props: UserEventsProps) {
  const {
    event: { type, repo },
  } = props;
  return (
    <>
      <Container bg={"green.600"} marginTop={5}>
        <Text textAlign={"center"} fontSize="30px" marginTop={2} color="black">
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

export default CreateEvent;
