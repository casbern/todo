import styles from "./Task.module.css"

import { Trash } from "phosphor-react"
import { useState } from "react"

interface Props {
	task: string
	taskId: number
	onDeleteTask: (taskId: number) => void
}

export function Task({ task, taskId, onDeleteTask }: Props) {
	const [isChecked, setIsChecked] = useState(false)

	function handleCheckboxChange() {
		setIsChecked(!isChecked)
	}

	return (
		<div className={`${styles.task} ${isChecked ? styles.checked : ""}`}>
			<input type="checkbox" onChange={handleCheckboxChange} />
			<p>{task}</p>
			<button
				onClick={() => {
					onDeleteTask(taskId)
				}}
			>
				<Trash />
			</button>
		</div>
	)
}
