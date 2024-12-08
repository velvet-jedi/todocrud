import "../App.css";
import InputText from "./InputText/InputText";
import Button from "./Button/Button";
import { useState } from "react";

export default function ToDo() {
	const [todos, setTodos] = useState([]); // whole
	const [todoToAdd, setTodoToAdd] = useState("");

	function handleTodoChange(value) {
		setTodoToAdd(value);
	}

	return (
		<>
			<InputText
				value={todoToAdd}
				onChange={handleTodoChange}
			/>
			<Button label={"Add todo"} />
			{todoToAdd}
		</>
	);
}
