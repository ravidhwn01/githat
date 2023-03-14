import axios from "axios";
import { UserActivity } from "./types";

export const getEventData = async (): Promise<UserActivity[]> => {
  const response = await axios.get(
    `https://api.github.com/users/ravidhwn01/events`
  );
  console.log(response.data);
  return response.data;
};
