import { useEffect, useState, useCallback } from 'react';
import { useFetchFeedQuery } from '../store/api/feedApi';
import useFeedStore from '../store/actions/feed';
import useDebounce from './useDebounce';

const useInfiniteScroll = () => {
  const [skip, setSkip] = useState(0);
  const [endOfFeed, setEndOfFeed] = useState(false);
  const debouncedSkip = useDebounce(skip, 1000); // Debounce for 500ms
  const { data: response, isFetching, isSuccess } = useFetchFeedQuery(debouncedSkip);
  const { setPosts } = useFeedStore();

  useEffect(() => {
    if (isSuccess && response) {
      setPosts(response.data);
    }
  }, [response, isSuccess, setPosts]);

  const loadMore = useCallback(() => {
    if (!response?.hasMore) {
      setEndOfFeed(true);
      return;
    }
    setSkip((prev) => prev + 1);
  }, [response]);

  return { loadMore, isFetching, endOfFeed };
};

export default useInfiniteScroll;
