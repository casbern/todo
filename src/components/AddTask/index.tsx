import styles from "./AddTask.module.css"

import { PlusCircle } from "phosphor-react"

export function AddTask() {
	return (
		<div className={styles.addTask}>
			<input type="text" placeholder="Add a new task" />
			<button>
				Add
				<PlusCircle />
			</button>
		</div>
	)
}
