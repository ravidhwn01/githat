import { Container, Text } from "@chakra-ui/react";
import React from "react";
import { UserActivity } from "./types";

interface UserEventsProps {
  event: UserActivity;
}

function UserEvent(props: UserEventsProps) {
  const {
    event: { type, repo },
  } = props;
  return (
    <>
      <Container>
        <Text> {type} </Text>
        <Text> {repo.name} </Text>
      </Container>
    </>
  );
}

export default UserEvent;
