import { FC } from 'react';
import { motion } from 'framer-motion';
import { Post } from '../../types/feed.ts';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ImageGallery from '../ImageGallery/ImageGallery.tsx';
import { PostCardHeader } from './PostCardHeader.tsx';
import { PostCardDetailsCount } from './PostCardDetailsCount.tsx';
import { PostCardActions } from './PostCardActions.tsx';

dayjs.extend(relativeTime);

interface PostCardProps {
  post: Post;

  onLike(postId: string, isLiked: boolean): void;
}

export const PostCard: FC<PostCardProps> = ({ post, onLike }: PostCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-l shadow-sm mb-4 overflow-hidden"
    >
      <section>
        <PostCardHeader post={post} />
        {post.images.length > 0 && <ImageGallery images={post.images} />}
        <PostCardDetailsCount likes={post.likes} comments={post.comments} />
        <hr className="border-t border-gray-300 mx-[25px]" />
        <PostCardActions post={post} onLike={onLike} />
      </section>
    </motion.article>
  );
};
