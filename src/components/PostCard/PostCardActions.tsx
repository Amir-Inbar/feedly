import {FC} from 'react';
import {FeedlyIcon} from "../../shared/IconifyConfig/FeedlyIcon.tsx";
import {Post} from "../../types/feed.ts";

interface PostCardActionsProps {
    post: Post;

    onLike(postId: string, isLiked: boolean): void;
}

export const PostCardActions: FC<PostCardActionsProps> = ({post, onLike}) => {

    const likeIcon = post.didLike ? 'customLiked' : 'customLike';
    const likeClassName = post.didLike ? 'text-post-like-active' : 'text-post-like-inactive';
    return (
        <div className="flex justify-evenly items-center p-6">
            <div className="flex flex-row cursor-pointer" onClick={() => onLike(post.id, !post.didLike)}>
                <FeedlyIcon icon={likeIcon}/>
                <span className={`${likeClassName} ml-2`}>
                            Like
                        </span>
            </div>
            <div className="flex items-center cursor-pointer text-post-like-inactive">
                <FeedlyIcon icon='customComment'/>
                <span className='ml-2'>Comment</span>
            </div>
        </div>)
}