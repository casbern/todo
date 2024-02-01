import styles from "./Task.module.css"

import { Trash } from "phosphor-react"
import { useState } from "react"

interface Props {
	task: string
	taskId: number
	onDeleteTask: (taskId: number) => void
	handleCheckTask: () => void
	handleUncheckTask: () => void
}

export function Task({
	task,
	taskId,
	onDeleteTask,
	handleCheckTask,
	handleUncheckTask,
}: Props) {
	const [isChecked, setIsChecked] = useState(false)

	function handleCheckboxChange() {
		setIsChecked(!isChecked)

		!isChecked ? handleCheckTask() : handleUncheckTask()
	}

	return (
		<div className={`${styles.task} ${isChecked ? styles.checked : ""}`}>
			<input type="checkbox" onChange={handleCheckboxChange} />
			<p>{task}</p>
			<button
				onClick={() => {
					onDeleteTask(taskId)
					handleUncheckTask()
				}}
			>
				<Trash />
			</button>
		</div>
	)
}
