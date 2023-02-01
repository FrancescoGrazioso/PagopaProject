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
  const [repo, setRepo] = useState('Digital-Image-Processing');
  const [pageNumber, setPageNumber] = useState(1);
  const [stargazers, setStargazers] = useState<listItemInterface[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (isNewSearch: boolean) => {
    setLoading(true);
    const pageToUse = isNewSearch ? 1 : pageNumber;
    if (owner && repo) {
      const response: axiosResponse = await getStargazers(
        owner,
        repo,
        pageToUse,
      );

      if (response.axiosError) {
        setError(response.axiosError);
        setStargazers([]);
      } else {
        setError('');

        if (isNewSearch) {
          setStargazers(response.stargazers);
        } else {
          setStargazers(stargazers.concat(response.stargazers));
        }
        setPageNumber(pageToUse + 1);
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
