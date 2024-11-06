import {create} from 'zustand';
import {FeedState} from "../@types/feed.ts";
import {Post} from "../../types/feed.ts";

const useFeedStore = create<FeedState>((set) => ({
    posts: [],
    setPosts: (newPosts: Post[]) =>
        set((state) => {
            const existingIds = new Set(state.posts.map(post => post.id));
            const filteredPosts = newPosts.filter(post => !existingIds.has(post.id));
            return {posts: [...state.posts, ...filteredPosts]};
        }),
}));

export default useFeedStore;
