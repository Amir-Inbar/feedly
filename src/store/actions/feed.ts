import { create } from 'zustand';
import { FeedState } from '../@types/feed.ts';
import { Post } from '../../types/feed.ts';

const useFeedStore = create<FeedState>((set) => ({
  posts: [],
  setPosts: (newPosts: Post[]) =>
    set((state) => {
      const existingIds = new Set(state.posts.map(post => post.id));
      const filteredPosts = newPosts.filter(post => !existingIds.has(post.id));
      return { posts: [...state.posts, ...filteredPosts] };
    }),
  updatePostLike: (postId: string, isLiked: boolean) => {
    set((state) => {
      const updatedPosts = state.posts.map(post => {
        if (post.id === postId) {
          return { ...post, didLike: isLiked, likes: isLiked ? post.likes + 1 : post.likes - 1 };
        }
        return post;
      });
      return { posts: updatedPosts };
    });
  },
}));

export default useFeedStore;
