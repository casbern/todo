import styles from "./App.module.css"

import { useState } from "react"

import { Header } from "./components/Header"
import { AddTask } from "./components/AddTask"
import { List } from "./components/List"

export function App() {
	const [tasks, setTasks] = useState([])

	function onAddTask(newTask) {
		setTasks([...tasks, newTask])
		console.log(tasks)
	}

	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<AddTask />
				<List />
			</div>
		</>
	)
}
