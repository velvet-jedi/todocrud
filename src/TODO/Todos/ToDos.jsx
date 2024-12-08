import "./style.css";
import React from "react";
import Button from "../Button/Button";

const ToDos = ({ todos = [], onDelete, onEdit, onEditSave, onEditCancel }) => {
	return (
		<div className="todo-list">
			{todos.map((item) => {
				return (
					<TodoItem
						key={item.id}
						item={item}
						onDelete={onDelete}
						onEdit={onEdit}
						onEditSave={onEditSave}
						onEditCancel={onEditCancel}
					/>
				);
			})}
		</div>
	);
};

function TodoItem({ item, onDelete, onEdit, onEditCancel, onEditSave }) {
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

	function handleEditSave(id) {
		return () => {
			onEditSave(id);
		};
	}

	if (item.editMode) {
		return (
			<div>
				<input
					type="text"
					value={item.todo}
				/>
				<Button
					label="Save"
					onClick={handleEditSave(item.id)}
				></Button>
				<Button
					label="Cancel"
					onClick={handleEditCancel(item.id)}
				></Button>
			</div>
		);
	}

	return (
		<div>
			<span>{item.todo}</span>
			<Button
				label="Edit"
				onClick={handleEditTodo(item.id)}
			></Button>
			<Button
				label="Delete"
				onClick={handleDeleteTodo(item.id)}
			></Button>
		</div>
	);
}

export default ToDos;
