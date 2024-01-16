import styles from "./Task.module.css"

export function Task() {
	return (
		<div className={styles.task}>
			<label>
				<input type="checkbox" />
			</label>
		</div>
	)
}
