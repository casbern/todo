import styles from "./App.module.css"

import { useState } from "react"

import { Header } from "./components/Header"
import { AddTask, TaskType } from "./components/AddTask"
import { List } from "./components/List"

export function App() {
	const [tasks, setTasks] = useState<TaskType[]>([])

	function onAddTask(newTask: TaskType) {
		setTasks([...tasks, newTask])
		console.log(tasks)
	}

	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<AddTask onAddTask={onAddTask} />
				<List tasks={tasks} />
			</div>
		</>
	)
}
