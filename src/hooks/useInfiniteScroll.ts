import {useEffect, useState} from 'react';
import {useFetchFeedQuery} from "../store/api/feedApi";
import useFeedStore from "../store/actions/feed"; // Adjust according to your file structure

const useInfiniteScroll = () => {
    const [skip, setSkip] = useState(0);
    const [endOfFeed, setEndOfFeed] = useState(false);
    const {data: response, isFetching, isSuccess} = useFetchFeedQuery(skip);
    const {setPosts} = useFeedStore();

    useEffect(() => {
        if (isSuccess && response) {
            setPosts(response.data || []);
        }
    }, [response, isSuccess, setPosts]);

    const loadMore = () => {
        if (!response?.hasMore) {
            setEndOfFeed(true);
            return;
        }
        setSkip((prev) => prev + 1);
    };

    return {loadMore, isFetching, endOfFeed};
};

export default useInfiniteScroll;
