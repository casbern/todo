import styles from "./Info.module.css"

interface Props {
	totalNumberOfTasks: number
	totalNumberOfFinishedTasks: number
}

export function Info({
	totalNumberOfTasks,
	totalNumberOfFinishedTasks,
}: Props) {
	return (
		<div className={styles.info}>
			<div className={styles.createdTasks}>
				<span>Created taks</span>
				<span>{totalNumberOfTasks}</span>
			</div>

			<div className={styles.finishedTasks}>
				<span>Finished taks</span>
				<span>{totalNumberOfFinishedTasks}</span>
			</div>
		</div>
	)
}
