import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useInfiniteScroll from "../../hooks/useInfiniteScroll.ts";
import Loader from "../ui/Loader.tsx";
import useFeedStore from "../../store/actions/feed.ts";
import {FeedEmptyState} from "./FeedEmptyState.tsx";
import {PostCard} from "../PostCard/PostCard.tsx";


const Feed: React.FC = () => {
    const {posts} = useFeedStore();
    const {loadMore, isFetching} = useInfiniteScroll();

    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={loadMore}
            hasMore={!isFetching}
            loader={<Loader/>}
            className='flex flex-col gap-2'
        >
            {posts.length === 0 && !isFetching ? (
                <FeedEmptyState/>
            ) : (
                posts.map((post) => <PostCard key={post.id} onLike={() => {
                }} post={post}/>)
            )}
        </InfiniteScroll>
    );
};


export default Feed;
