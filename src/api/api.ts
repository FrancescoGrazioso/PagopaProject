import axios from "axios";
import { axiosResponse } from "../interfaces/axiosResponseInterface";

export const getStargazers = async (owner: string, name: string, pageNumber?: number) => {
    const resObject: axiosResponse = {
        stargazers: [],
        axiosError: undefined
    };
    if (!pageNumber) pageNumber = 1
    try {
      const url = `https://api.github.com/repos/${owner}/${name}/stargazers?page=${pageNumber}&per_page=30`;
      const response = await axios.get(url);
      const stargazersRes = await response.data.map((user: any) => ({ avatar: user.avatar_url, username: user.login }));
      
      resObject.stargazers = stargazersRes;
    } catch (error: any) {
      resObject.axiosError = error.toString();
    }

    return resObject;
  }