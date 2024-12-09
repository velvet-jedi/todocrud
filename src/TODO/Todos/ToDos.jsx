import "../../Index.css";
import React from "react";
import Button from "../Button/Button";
import { useRef } from "react";

const ToDos = ({
	todos = [],
	onDelete,
	onEdit,
	onEditSave,
	onEditCancel,
	onDone,
}) => {
	return (
		<div className="todo-list">
			{todos.map((item, index) => {
				return (
					<TodoItem
						key={item.id}
						index={index}
						item={item}
						onDelete={onDelete}
						onEdit={onEdit}
						onEditSave={onEditSave}
						onEditCancel={onEditCancel}
						onDone={onDone}
					/>
				);
			})}
		</div>
	);
};

function TodoItem({
	item,
	index,
	onDelete,
	onEdit,
	onEditCancel,
	onEditSave,
	onDone,
}) {
	function handleDeleteTodo(id) {
		return () => {
			onDelete(id);
		};
	}

	function handleEditTodo(id) {
		return () => {
			onEdit(id);
		};
	}

	function handleEditCancel(id) {
		return () => {
			onEditCancel(id);
		};
	}

	function handleEditSave() {
		return () => {
			const inputValue = inputRef.current.value; // using ref to avoid re-rendering
			onEditSave(index, inputValue);
			inputRef.current.value = "";
		};
	}

	function handleDone(id) {
		return () => {
			onDone(id);
		};
	}

	const inputRef = useRef("");

	if (item.editMode) {
		return (
			<div>
				<input
					type="text"
					defaultValue={item.todo}
					ref={inputRef}
				/>
				<Button
					label="Save"
					className="Done"
					onClick={handleEditSave(item.id)}
				></Button>
				<Button
					className="Delete"
					label="Cancel"
					onClick={handleEditCancel(item.id)}
				></Button>
			</div>
		);
	}

	return (
		<div data-done-todo={item.isDone}>
			<span>{item.todo}</span>
			<Button
				className="Edit"
				label="Edit"
				onClick={handleEditTodo(item.id)}
			></Button>
			<Button
				className="Delete"
				label="Delete"
				onClick={handleDeleteTodo(item.id)}
			></Button>
			<Button
				className="Done"
				label="Done"
				onClick={handleDone(item.id)}
			></Button>
		</div>
	);
}

export default ToDos;
