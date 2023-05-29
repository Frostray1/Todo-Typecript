import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import Post from './components/post/Post'
import Button from './components/button/Button'
import InputField from './components/input/InputField'

interface posts {
	id: number
	text: string
	isCompleted: boolean
}

function App() {
	const [parentText, setParentText] = useState<string>('')

	const [todos, setTodos] = useState<posts[]>(() => {
		const storedTodos = localStorage.getItem('todos')
		return storedTodos ? JSON.parse(storedTodos) : []
	})

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const handleTextChange = (text: string) => {
		setParentText(text)
	}
	const handleButtonClick = () => {
		const newTodos: posts = {
			id: Date.now(),
			text: parentText,
			isCompleted: false
		}
		setTodos([...todos, newTodos])
	}

	const deletePost = (id: number) => {
		console.log(id)
		setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
	}

	return (
		<div className={styles.todoApp}>
			<h1>To-do TypeScript</h1>
			<InputField onTextChange={handleTextChange} />
			<Button onClick={handleButtonClick} />
			{todos.map(todo => (
				<Post
					key={todo.id}
					id={todo.id}
					text={todo.text}
					deletePost={deletePost}
				/>
			))}
		</div>
	)
}

export default App
