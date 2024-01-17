import styles from "./List.module.css"
import clipboard from "../../assets/clipboard.svg"

import { Task } from "../Task"

export function List() {
	return (
		<div className={styles.list}>
			{/* <div className={styles.empty}>
				<img src={clipboard} alt="icon of a clipboard" />
				<p>You don't have any tasks registered yet</p>
				<p>Create tasks and organize your todo items</p>
			</div> */}

			<div className="task">
				<Task />
				<Task />
				<Task />
			</div>
		</div>
	)
}
