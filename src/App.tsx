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

	function onDeleteTask(taskId: number) {
		const tasksWithoutDeletedOne = tasks.filter((task) => {
			return task.id !== taskId
		})

		setTasks(tasksWithoutDeletedOne)
	}

	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<AddTask onAddTask={onAddTask} />
				<List tasks={tasks} onDeleteTask={onDeleteTask} />
			</div>
		</>
	)
}
