import styles from "./Task.module.css"

import { Trash } from "phosphor-react"

export function Task() {
	return (
		<div className={styles.task}>
			<input type="checkbox" />
			<p>
				Integer urna interdum massa libero auctor neque turpis turpis semper.
				Duis vel sed fames integer.
			</p>
			<Trash />
		</div>
	)
}
