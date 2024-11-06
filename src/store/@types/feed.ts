import {Post} from "../../types/feed.ts";

export interface FeedState {
    posts: Post[];

    setPosts(post: Post[]): void;

    updatePostLike(postId: string, liked: boolean): void;
}