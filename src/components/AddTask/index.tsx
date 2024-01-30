import styles from "./AddTask.module.css"

import { PlusCircle } from "phosphor-react"
import { ChangeEvent, useState } from "react"

interface Props {
	onAddTask: (newTask: string) => void
}

export function AddTask({ onAddTask }: Props) {
	const [addTask, setAddTask] = useState("")

	function handleInputValue(e: ChangeEvent<HTMLInputElement>) {
		setAddTask(e.target.value)
	}

	function handleAddTask() {
		if (addTask === "") {
			console.log("Please, add a task first.")
		} else {
			onAddTask(addTask)
			setAddTask("")
		}
	}

	return (
		<div className={styles.addTask}>
			<input
				type="text"
				placeholder="Add a new task"
				onChange={handleInputValue}
				value={addTask}
			/>
			<button onClick={handleAddTask}>
				Add
				<PlusCircle />
			</button>
		</div>
	)
}
