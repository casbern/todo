import styles from "./Info.module.css"

export function Info() {
	return (
		<div className={styles.info}>
			<div className={styles.createdTasks}>
				<span>Created taks</span>
				<span>0</span>
			</div>

			<div className={styles.finishedTasks}>
				<span>Finished taks</span>
				<span>0</span>
			</div>
		</div>
	)
}
