import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, onClick }) => {
	return <button onClick={onClick}>{label}</button>;
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
	label: "Click me",
	onClick: () => {}, // Default onClick that does nothing
};

export default Button;
