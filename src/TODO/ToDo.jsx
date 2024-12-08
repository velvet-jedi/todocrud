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
		newTodo.editMode = false; // false editable by default

		setTodoToAdd("");
		setTodos([newTodo, ...oldTodos]);
		// console.log(JSON.stringify(todos));
	}

	function handleDeleteTodo(id) {
		const filteredTodos = todos.filter((todo) => todo.id !== id);
		setTodos(filteredTodos);
	}

	function handleEditTodo(id) {
		const editedTodos = todos.map((todo) => {
			todo.editMode = id === todo.id;
			return { ...todo };
		});
		setTodos(editedTodos);
	}

	function handleEditCancel(id) {
		const editedTodos = todos.map((todo) => {
			if (id === todo.id) {
				todo.editMode = false;
			}
			return { ...todo };
		});
		setTodos(editedTodos);
	}

	function handleEditSave(id) {
		// const editedTodos = todos.map((todo) => {
		// 	if (id === todo.id) {
		// 		todo.editMode = false;
		// 	}
		// 	return { ...todo };
		// });
		// setTodos(editedTodos);
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
			<ToDos
				todos={todos}
				onDelete={handleDeleteTodo}
				onEdit={handleEditTodo}
				onEditCancel={handleEditCancel}
				onEditSave={handleEditSave}
			></ToDos>
		</>
	);
}
