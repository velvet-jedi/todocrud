import "../App.css";
import InputText from "./InputText/InputText";
import Button from "./Button/Button";
import { useState } from "react";
import ToDos from "./Todos/ToDos";

window.todoId = 1000;
const TODO_KEY = "my_todos";

export default function ToDo() {
	const [todos, setTodos] = useState(loadInit); // whole
	const [todoToAdd, setTodoToAdd] = useState("");

	function loadInit(){
		const todoStrings = localStorage.getItem(TODO_KEY)
		const todoArr = JSON.parse(todoStrings)

		return todoArr
	}


	function persistTodos(data) {
		const strTodos = JSON.stringify(data);
		localStorage.setItem(TODO_KEY, strTodos);
		setTodos(data);
	}

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
		const newTodos = [newTodo, ...oldTodos];

		persistTodos(newTodos);
	}

	function handleDeleteTodo(id) {
		const newTodos = todos.filter((todo) => todo.id !== id);

		persistTodos(newTodos);
	}

	function handleEditTodo(id) {
		const newTodos = todos.map((todo) => {
			todo.editMode = id === todo.id;
			return { ...todo };
		});
		persistTodos(newTodos);
	}

	function handleEditCancel(id) {
		const newTodos = todos.map((todo) => {
			if (id === todo.id) {
				todo.editMode = false;
			}
			return { ...todo };
		});
		persistTodos(newTodos);
	}

	function handleEditSave(index, newValue) {
		const newTodos = structuredClone(todos);
		newTodos[index].todo = newValue;
		newTodos[index].editMode = false;
		persistTodos(newTodos);
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
