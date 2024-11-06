import React from 'react';
import {motion} from 'framer-motion';
import {Post} from '../../types/feed.ts';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ImageGallery from "../ImageGallery/ImageGallery.tsx";
import {FeedlyIcon} from "../../shared/IconifyConfig/FeedlyIcon.tsx";

dayjs.extend(relativeTime);

interface PostCardProps {
    post: Post;

    onLike(postId: string, isLiked: boolean): void;
}

export const PostCard: React.FC<PostCardProps> = ({post, onLike}) => {
    return (
        <motion.article
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            className="bg-white rounded-l shadow-sm mb-4 overflow-hidden"
        >
            <section>
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
                {post.images.length > 0 && <ImageGallery images={post.images}/>}
                <div className="flex justify-between items-center px-[25px] py-4 text-sm text-post-like-count">
                    <div className="flex items-center">
                        <div
                            className="flex items-center justify-center w-[20px] h-[20px] bg-gradient-to-b from-[#96DCD0] to-[#208171] rounded-full pr-0.5 mr-2">
                            <FeedlyIcon icon='customLikeCount'/>
                        </div>
                        <span>{post.likes}</span>
                        <span className="ml-1">Likes</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <span>{post.comments}</span>
                        <span className="ml-1">Comments</span>
                    </div>
                </div>
                <hr className="border-t border-gray-300 mx-[25px]"/>
                <div className="flex justify-evenly items-center p-6">
                    <div className="flex flex-row cursor-pointer" onClick={() => onLike(post.id, !post.didLike)}>
                        <FeedlyIcon icon={post.didLike ? 'customLiked' : 'customLike'}/>
                        <span className={`${post.didLike ? 'text-post-like-active' : 'text-post-like-inactive'} ml-2`}>
                            Like
                        </span>
                    </div>
                    <div className="flex items-center cursor-pointer text-post-like-inactive">
                        <FeedlyIcon icon='customComment'/>
                        <span className='ml-2'>Comment</span>
                    </div>
                </div>
            </section>
        </motion.article>
    );
};
