import { FC } from 'react'
import styles from './Post.module.scss'

interface PostProps {
	id: number
	text: string
	deletePost: (id: number) => void
}
const Post: FC<PostProps> = ({ id, text, deletePost }) => {
	const handleDelete = () => {
		deletePost(id)
	}
	return (
		<div className={styles.postContainer}>
			<p>{text}</p>
			<img onClick={handleDelete} src='/remove.svg' alt='delete post' />
		</div>
	)
}

export default Post
