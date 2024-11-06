import {FC} from 'react';
import {FeedlyIcon} from "../../shared/IconifyConfig/FeedlyIcon.tsx";

interface PostCardDetailsCountProps {
    likes: number;
    comments: number;
}

export const PostCardDetailsCount: FC<PostCardDetailsCountProps> = ({likes, comments}: PostCardDetailsCountProps) => {
    return (
        <div className="flex justify-between items-center px-[25px] py-4 text-sm text-post-like-count">
            <div className="flex items-center">
                <div
                    className="flex items-center justify-center w-[20px] h-[20px] bg-gradient-to-b from-[#96DCD0] to-[#208171] rounded-full pr-0.5 mr-2">
                    <FeedlyIcon icon='customLikeCount'/>
                </div>
                <span>{likes}</span>
                <span className="ml-1">Likes</span>
            </div>
            <div className="flex items-center cursor-pointer">
                <span>{comments}</span>
                <span className="ml-1">Comments</span>
            </div>
        </div>
    );
}