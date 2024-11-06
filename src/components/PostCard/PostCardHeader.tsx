import dayjs from "dayjs";
import {Post} from "../../types/feed.ts";
import {FC} from "react";

interface PostCardHeaderProps {
    post: Post;
}

export const PostCardHeader: FC<PostCardHeaderProps> = ({post}: PostCardHeaderProps) => {
    return (
        <div className="flex items-center">
            <div className="flex flex-col p-6 pb-4">
                <div className="flex">
                    <img
                        src={post.avatar}
                        alt={post.username}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                        <span className="text-post-user-name text-base font-medium">{post.username}</span>
                        <div className="flex items-center text-sm text-gray-500">
                            <span className="text-blue-600">{post.shopName}</span>
                            {post.shopName && <span className="mx-1 text-post-user-postTime text-xxs">•</span>}
                            <time className="text-post-user-postTime">{dayjs(post.date).fromNow()}</time>
                        </div>
                    </div>
                </div>
                <p className="mt-3">{post.text}</p>
            </div>
        </div>
    )
}