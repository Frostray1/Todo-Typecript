import { FC } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
	onClick: () => void
}

const Button: FC<ButtonProps> = ({ onClick }) => {
	return (
		<button className={styles.Button} onClick={onClick}>
			Добавить задачу
		</button>
	)
}

export default Button
