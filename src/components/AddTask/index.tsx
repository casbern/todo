import styles from "./AddTask.module.css"

import { PlusCircle } from "phosphor-react"
import { ChangeEvent, useState } from "react"

interface Props {
	onAddTask: (newTask: TaskType) => void
}

export interface TaskType {
	id: number
	task: string
}

export function AddTask({ onAddTask }: Props) {
	const [addTask, setAddTask] = useState<TaskType>({ id: 0, task: "" })

	function handleInputValue(e: ChangeEvent<HTMLInputElement>) {
		setAddTask({
			id: Math.floor(Math.random() * 90),
			task: e.target.value,
		})
	}

	function handleAddTask() {
		if (addTask.task === "") {
			console.log("Please, add a task first.")
		} else {
			onAddTask(addTask)
			setAddTask({
				id: 0,
				task: "",
			})
		}
	}

	return (
		<div className={styles.addTask}>
			<input
				type="text"
				placeholder="Add a new task"
				onChange={handleInputValue}
				value={addTask.task}
			/>
			<button onClick={handleAddTask}>
				Add
				<PlusCircle />
			</button>
		</div>
	)
}
