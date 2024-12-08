import "./style.css";

export default function ({ value, onChange }) {
	function handleChange(e) {
		onChange(e.target.value);
	}

	return (
		<>
			<input
				type="text"
				value={value}
				onChange={handleChange}
				placeholder="Got goals?"
			/>
		</>
	);
}
