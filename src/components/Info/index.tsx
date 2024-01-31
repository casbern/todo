import styles from "./Info.module.css"

interface Props {
	totalNumberOfTasks: number
}

export function Info({ totalNumberOfTasks }: Props) {
	return (
		<div className={styles.info}>
			<div className={styles.createdTasks}>
				<span>Created taks</span>
				<span>{totalNumberOfTasks}</span>
			</div>

			<div className={styles.finishedTasks}>
				<span>Finished taks</span>
				<span>0</span>
			</div>
		</div>
	)
}
