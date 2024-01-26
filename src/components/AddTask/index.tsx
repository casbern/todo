import styles from "./AddTask.module.css"

import { PlusCircle } from "phosphor-react"
import { ChangeEvent, useState } from "react"

export function AddTask({ onAddTask }) {
	const [addTask, setAddTask] = useState("")

	function handleInputValue(e: ChangeEvent<HTMLInputElement>) {
		setAddTask(e.target.value)
	}

	function handleAddTask() {
		if (addTask === "") {
			console.log("Por favor, adicione uma tarefa.")
		} else {
			console.log(addTask)
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
			/>
			<button onClick={handleAddTask}>
				Add
				<PlusCircle />
			</button>
		</div>
	)
}
