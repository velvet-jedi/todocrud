import { useState } from "react";
import ToDo from "./TODO/ToDo";
import InputText from "./TODO/InputText/InputText";

import "./App.css";

function App() {
	return (
		<>
			<ToDo />
			<InputText />
		</>
	);
}

export default App;
