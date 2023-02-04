import axios from 'axios';
import {axiosResponse} from '../interfaces/axiosResponseInterface';

/**

getStargazers is an async function that returns an object containing
an array of stargazers and an error string if there's any error.
@param {string} owner - the repo owner name.
@param {string} name - the repo name.
@param {number} [pageNumber=1] - the page number to retrieve from the API.
@returns {axiosResponse} resObject - the object that contains an array of stargazers and an error string if there's any error.
*/
export const getStargazers = async (
  owner: string,
  name: string,
  pageNumber?: number,
) => {
  // Initialize the response object with an empty array of stargazers and no error.
  const resObject: axiosResponse = {
    stargazers: [],
    axiosError: undefined,
  };
  // If page number is not provided, set it to 1.
  if (!pageNumber) pageNumber = 1;

  try {
    // Set the URL to retrieve the stargazers data from the Github API.
    const url = `https://api.github.com/repos/${owner}/${name}/stargazers?page=${pageNumber}&per_page=30`;

    // Make a GET request to the Github API to retrieve the stargazers data.
    const response = await axios.get(url);

    // Map the response data to get the stargazers' avatar URL and username, and assign it to the stargazers array in the response object.
    const stargazersRes = await response.data.map((user: any) => ({
      avatar: user.avatar_url,
      username: user.login,
    }));

    resObject.stargazers = stargazersRes;
  } catch (error: any) {
    // If there's any error, assign the error string to the axiosError in the response object.
    resObject.axiosError = error.toString();
  }

  return resObject;
};
