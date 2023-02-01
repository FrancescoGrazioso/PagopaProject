import axios from 'axios';
import {getStargazers} from '../src/api/api';

jest.mock('axios');

describe('getStargazers', () => {
  it('should return stargazers when request is successful', async () => {
    const mockData = [
      {
        avatar_url: 'avatar_url',
        login: 'login',
      },
    ];
    (axios.get as jest.Mock).mockResolvedValue({data: mockData});

    const owner = 'owner';
    const name = 'name';
    const pageNumber = 1;

    const expectedResult = {
      stargazers: [
        {
          avatar: 'avatar_url',
          username: 'login',
        },
      ],
      axiosError: undefined,
    };

    const result = await getStargazers(owner, name, pageNumber);
    expect(result).toEqual(expectedResult);
  });

  it('should return error when request is unsuccessful', async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error('Request failed'));

    const owner = 'owner';
    const name = 'name';
    const pageNumber = 1;

    const expectedResult = {
      stargazers: [],
      axiosError: 'Error: Request failed',
    };

    const result = await getStargazers(owner, name, pageNumber);
    expect(result).toEqual(expectedResult);
  });

  it('should return different stargazers when page number is changed', async () => {
    const mockData1 = [
      {
        avatar_url: 'avatar_url_1',
        login: 'login_1',
      },
    ];
    const mockData2 = [
      {
        avatar_url: 'avatar_url_2',
        login: 'login_2',
      },
    ];
    (axios.get as jest.Mock)
      .mockResolvedValueOnce({data: mockData1})
      .mockResolvedValueOnce({data: mockData2});

    const owner = 'owner';
    const name = 'name';
    const pageNumber1 = 1;
    const pageNumber2 = 2;

    const expectedResult1 = {
      stargazers: [
        {
          avatar: 'avatar_url_1',
          username: 'login_1',
        },
      ],
      axiosError: undefined,
    };

    const expectedResult2 = {
      stargazers: [
        {
          avatar: 'avatar_url_2',
          username: 'login_2',
        },
      ],
      axiosError: undefined,
    };

    const result1 = await getStargazers(owner, name, pageNumber1);
    expect(result1).toEqual(expectedResult1);

    const result2 = await getStargazers(owner, name, pageNumber2);
    expect(result2).toEqual(expectedResult2);
  });
});
