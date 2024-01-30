import styles from "./Task.module.css"

import { Trash } from "phosphor-react"

interface Props {
	task: string
}

export function Task({ task }: Props) {
	return (
		<div className={styles.task}>
			<input type="checkbox" />
			<p>{task}</p>
			<button>
				<Trash />
			</button>
		</div>
	)
}
