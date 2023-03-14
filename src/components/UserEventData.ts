import axios from "axios";
import { UserActivity } from "./types";

export const getEventData = async (
  searchName: string
): Promise<UserActivity[]> => {
  const response = await axios.get(
    `https://api.github.com/users/${searchName}/events`
  );
  console.log(response.data);
  return response.data;
};
