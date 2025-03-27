import { memo, useEffect, useState } from "react";
import { Dropdown } from "@components";
import { API, Helpers } from "@app";

const EmployeeCombo = ({
	value = null,
	label = null,
	required = false,
	disabled = false,
	placeholder = 'Seleccione un prestador',
	isMulti = false,
	roles = [],
	onChange = () => { },
}) => {
	const [items, setItems] = useState(null);

	// Get users
	useEffect(() => {
		if (items) return;

		API.get('user/getComboEmployees').then((r) => {
			setItems(Helpers.formatComboItems(r.data.items));
		});
	}, [roles, items]);

	const handleChange = (options) => {
		const value = isMulti ? options : options.value;
		onChange(value);
	};

	return (
		<Dropdown
			placeholder={placeholder}
			label={label}
			required={required}
			isMulti={isMulti}
			disabled={disabled}
			items={items ?? []}
			value={value}
			onChange={(option) => handleChange(option)}
		/>
	);
};

const MemoCombo = memo(EmployeeCombo, (prevProps, nextProps) => {
	return (
		nextProps.value === prevProps.value &&
		nextProps.label === prevProps.label &&
		nextProps.required === prevProps.required &&
		nextProps.placeholder === prevProps.placeholder &&
		nextProps.isMulti === prevProps.isMulti &&
		nextProps.disabled === prevProps.disabled
	);
});

export default MemoCombo;