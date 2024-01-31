import styles from "./List.module.css"
import clipboard from "../../assets/clipboard.svg"

import { TaskType } from "../AddTask"
import { Task } from "../Task"
import { Info } from "../Info"

interface Props {
	tasks: TaskType[]
}

export function List({ tasks }: Props) {
	return (
		<div className={styles.wrapper}>
			<Info />

			{tasks.length == 0 ? (
				<div className={styles.empty}>
					<img src={clipboard} alt="icon of a clipboard" />
					<p>You don't have any tasks registered yet</p>
					<p>Create tasks and organize your todo items</p>
				</div>
			) : (
				<>
					{tasks.map((task, index) => (
						<Task key={index} task={task.task} />
					))}
				</>
			)}
		</div>
	)
}
