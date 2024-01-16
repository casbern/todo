import styles from "./App.module.css"

import { Header } from "./components/Header"
import { AddTask } from "./components/AddTask"
import { Tasks } from "./components/Tasks"

export function App() {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<AddTask />
				<Tasks />
			</div>
		</>
	)
}
