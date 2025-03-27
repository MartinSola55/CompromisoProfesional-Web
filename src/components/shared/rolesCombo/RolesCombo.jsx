import { memo, useEffect, useState } from 'react';
import { Dropdown } from '@components';
import { API, Helpers } from '@app';

const RolesCombo = ({
	value = null,
	label = null,
	required = false,
	disabled = false,
	placeholder = 'Seleccione un rol',
	isMulti = false,
	onChange = () => { },
}) => {
	const [items, setItems] = useState(null);

	// Get users
	useEffect(() => {
		if (items) return;

		API.get('user/getComboRoles').then((r) => {
			setItems(r.data.items.map(x => ({ value: x.id, label: Helpers.getRoleName(x.description) })));
		});
	}, [items]);

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
			items={items ? items : []}
			value={value}
			onChange={(option) => handleChange(option)}
		/>
	);
};

const MemoCombo = memo(RolesCombo, (prevProps, nextProps) => {
	return (
		nextProps.value === prevProps.value &&
		nextProps.label === prevProps.label &&
		nextProps.required === prevProps.required &&
		nextProps.placeholder === prevProps.placeholder &&
		nextProps.isMulti === prevProps.isMulti
	);
});

export default MemoCombo;
