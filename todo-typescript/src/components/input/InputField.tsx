import { FC, useState } from 'react'
import styles from './InputField.module.scss'

interface InputFieldProps {
	onTextChange: (text: string) => void
}

const InputField: FC<InputFieldProps> = ({ onTextChange }) => {
	return (
		<input
			className={styles.inputField}
			onChange={e => onTextChange(e.target.value)}
			placeholder='Напишите заметку здесь'
		></input>
	)
}

export default InputField
