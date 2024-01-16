import styles from "./Tasks.module.css"

import { Info } from "../Info"
import { List } from "../List"

export function Tasks() {
	return (
		<div className={styles.tasks}>
			<Info />
			<List />
		</div>
	)
}
