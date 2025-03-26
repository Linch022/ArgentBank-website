import { PropTypes } from "prop-types";
import { FIELD_TYPES } from "../../utils/fieldTypes";

function Field({
	type,
	label,
	name,
	id,
	className,
	placeholder,
	required,
	disabled,
}) {
	let component;
	switch (type) {
		case FIELD_TYPES.INPUT_TEXT:
			component = (
				<input
					type='text'
					placeholder={placeholder}
					required={required}
					name={name}
					id={id}
					disabled={disabled}
				/>
			);
			break;
		case FIELD_TYPES.INPUT_PASSWORD:
			component = (
				<input
					type='password'
					id={id}
					name={name}
					required={required}
					disabled={disabled}
				/>
			);
			break;
		case FIELD_TYPES.INPUT_CHECKBOX:
			component = (
				<input
					type='checkbox'
					id={id}
					name={name}
					required={required}
					disabled={disabled}
				/>
			);
			break;
		default:
			component = (
				<input
					type='text'
					name={name}
					id={id}
					placeholder={placeholder}
					required={required}
					disabled={disabled}
				/>
			);
	}

	return (
		<div className={className}>
			<label htmlFor={id}>{label}</label>
			{component}
		</div>
	);
}

Field.PropTypes = {
	type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
	name: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	id: PropTypes.string,
	required: PropTypes.bool,
};
Field.defaultProps = {
	label: "",
	placeholder: "",
	type: FIELD_TYPES.INPUT_TEXT,
	name: "field-name",
	required: false,
	className: "",
	id: "",
};
export default Field;
