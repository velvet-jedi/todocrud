import "./style.css";
import React from "react";

const ToDos = ({ todos = [] }) => {
	return (
		<div className="todo-list">
			{todos.map((item) => {
				return (
					<div
						className=""
						key={item.id}
					>
						<span>{item.todo}</span>
					</div>
				);
			})}
		</div>
	);
};

export default ToDos;
