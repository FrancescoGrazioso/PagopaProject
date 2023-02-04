import React, {useState} from 'react';
import {View} from 'react-native';
import {getStargazers} from './src/api/api';
import SearchComponent from './src/components/SearchComponent/SearchComponent';
import SearchListComponent from './src/components/SearchListComponent/SearchListComponent';
import {axiosResponse} from './src/interfaces/axiosResponseInterface';
import {listItemInterface} from './src/interfaces/listItemInterface';
import {pageStyle} from './src/style/style';

// Main component for the app
const App = () => {
  // State variables for the app
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [stargazers, setStargazers] = useState<listItemInterface[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle submitting the search
  const handleSubmit = async (isNewSearch: boolean) => {
    // Set loading state to true
    setLoading(true);

    // Determine the page number to use
    const pageToUse = isNewSearch ? 1 : pageNumber;

    // Check if the owner and repo are set
    if (owner && repo) {
      // Get the stargazers data from the API
      const response: axiosResponse = await getStargazers(
        owner,
        repo,
        pageToUse,
      );

      // If there was an error with the API call, set the error state
      if (response.axiosError) {
        setError(response.axiosError);
        setStargazers([]);
      } else {
        // Clear the error state and set the stargazers data
        setError('');

        // Check if this is a new search or loading more results
        if (isNewSearch) {
          setStargazers(response.stargazers);
        } else {
          setStargazers(stargazers.concat(response.stargazers));
        }
        setPageNumber(pageToUse + 1);
      }
      // Set the loading state to false
      setLoading(false);
    }
  };

  return (
    <View style={pageStyle.container}>
      {/* Render the search component */}
      <SearchComponent
        owner={owner}
        repo={repo}
        handleSubmit={handleSubmit}
        handleOwnerChange={setOwner}
        handleRepoChange={setRepo}
      />
      {/* Render the search results component */}
      <SearchListComponent
        error={error}
        handleSubmit={handleSubmit}
        loading={loading}
        stargazers={stargazers}
      />
    </View>
  );
};

export default App;
