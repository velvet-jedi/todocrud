import "../App.css";
import InputText from "./InputText/InputText";
import Button from "./Button/Button";
import { useState } from "react";
import ToDos from "./Todos/ToDos";

window.todoId = 1000;

export default function ToDo() {
	const [todos, setTodos] = useState([]); // whole
	const [todoToAdd, setTodoToAdd] = useState("");

	function handleTodoChange(value) {
		setTodoToAdd(value);
	}

	function handleAddTodo() {
		const oldTodos = structuredClone(todos);
		const newTodo = {};

		newTodo.id = window.todoId++;
		newTodo.todo = todoToAdd;

		setTodoToAdd("");
		setTodos([newTodo, ...oldTodos]);
		console.log(JSON.stringify(todos));
	}

	return (
		<>
			<InputText
				value={todoToAdd}
				onChange={handleTodoChange}
			/>
			<Button
				label={"Add todo"}
				onClick={handleAddTodo}
			/>
			{/* {todoToAdd} */}
			<ToDos todos={todos}></ToDos>
		</>
	);
}
