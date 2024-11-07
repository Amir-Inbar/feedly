import React, { useEffect, useRef, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useInfiniteScroll from '../../hooks/useInfiniteScroll.ts';
import Loader from '../ui/Loader.tsx';
import useFeedStore from '../../store/actions/feed.ts';
import { FeedEmptyState } from './FeedEmptyState.tsx';
import { PostCard } from '../PostCard/PostCard.tsx';
import { usePostImpressionMutation } from '../../store/api/feedApi.ts';

const Feed: React.FC = () => {
  const { posts, updatePostLike } = useFeedStore();
  const { loadMore, isFetching, endOfFeed } = useInfiniteScroll();
  const [postImpression] = usePostImpressionMutation();

  const observer = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        const { postId } = target.dataset;
        if (!postId) return;
        postImpression({ postId });
      }
    });
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    return () => observer.current?.disconnect();
  }, [handleIntersection]);

  const observePost = useCallback((node: HTMLElement | null, postId: string) => {
    if (node) {
      node.dataset.postId = postId;
      observer.current?.observe(node);
    }
  }, []);

  const onToggleLike = (postId: string, isLiked: boolean) => {
    updatePostLike(postId, isLiked);
  };

  const onScrollToStart = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <InfiniteScroll
      dataLength={posts.length}
      style={{ overflow: 'hidden' }}
      next={loadMore}
      hasMore={!isFetching && !endOfFeed}
      loader={<Loader />}
      className="flex flex-col gap-2"
      endMessage={
        endOfFeed && <p
          className="text-center pb-4 cursor-pointer text-gray-500"
          onClick={onScrollToStart}
        >
          Click to reach the top of the feed
        </p>
      }
    >
      {posts.length === 0 && !isFetching ? (
        <FeedEmptyState />
      ) : (
        posts.map((post) => (
          <div ref={(node) => observePost(node, post.id)} key={post.id}>
            <PostCard onLike={onToggleLike} post={post} />
          </div>
        ))
      )}
    </InfiniteScroll>
  );
};

export default Feed;
