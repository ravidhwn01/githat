import axios from "axios";
import { Gituser } from "./types";

export const getUser = async (searchName: string): Promise<Gituser> => {
  const res = await axios.get(`https://api.github.com/users/${searchName}`);
  console.log(res.data);
  return res.data;
};
