import "../../Index.css";

export default function ({ value, onChange }) {
	function handleChange(e) {
		onChange(e.target.value);
	}

	return (
		<>
			<input
				className=""
				type="text"
				value={value}
				onChange={handleChange}
				placeholder="Got goals?"
			/>
		</>
	);
}
