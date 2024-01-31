import styles from "./List.module.css"
import clipboard from "../../assets/clipboard.svg"

import { TaskType } from "../AddTask"
import { Task } from "../Task"
import { Info } from "../Info"

interface Props {
	tasks: TaskType[]
	onDeleteTask: (taskId: number) => void
	totalNumberOfTasks: number
}

export function List({ tasks, onDeleteTask, totalNumberOfTasks }: Props) {
	return (
		<div className={styles.wrapper}>
			<Info totalNumberOfTasks={totalNumberOfTasks} />

			{tasks.length == 0 ? (
				<div className={styles.empty}>
					<img src={clipboard} alt="icon of a clipboard" />
					<p>You don't have any tasks registered yet</p>
					<p>Create tasks and organize your todo items</p>
				</div>
			) : (
				<>
					{tasks.map((task) => (
						<Task
							key={task.id}
							task={task.task}
							taskId={task.id}
							onDeleteTask={onDeleteTask}
						/>
					))}
				</>
			)}
		</div>
	)
}
