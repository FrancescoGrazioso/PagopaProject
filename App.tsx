import React, {useState} from 'react';
import {View} from 'react-native';
import {getStargazers} from './src/api/api';
import SearchComponent from './src/components/SearchComponent/SearchComponent';
import SearchListComponent from './src/components/SearchListComponent/SearchListComponent';
import {axiosResponse} from './src/interfaces/axiosResponseInterface';
import {listItemInterface} from './src/interfaces/listItemInterface';
import {pageStyle} from './src/style/style';

const MyComponent = () => {
  const [owner, setOwner] = useState('Avik-Jain');
  const [repo, setRepo] = useState('100-Days-Of-ML-Code');
  const [pageNumber, setPageNumber] = useState(1);
  const [stargazers, setStargazers] = useState<listItemInterface[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (owner && repo) {
      const response: axiosResponse = await getStargazers(
        owner,
        repo,
        pageNumber,
      );

      if (response.axiosError) {
        setError(response.axiosError);
        setStargazers([]);
      } else {
        setError('');
        setStargazers(stargazers.concat(response.stargazers));
        setPageNumber(pageNumber + 1);
      }
      setLoading(false);
    }
  };

  return (
    <View style={pageStyle.container}>
      <SearchComponent
        owner={owner}
        repo={repo}
        handleSubmit={handleSubmit}
        handleOwnerChange={setOwner}
        handleRepoChange={setRepo}
      />

      <SearchListComponent
        error={error}
        handleSubmit={handleSubmit}
        loading={loading}
        stargazers={stargazers}
      />
    </View>
  );
};

export default MyComponent;
