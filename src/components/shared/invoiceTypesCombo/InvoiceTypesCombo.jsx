import { memo, useEffect, useState } from 'react';
import { Dropdown } from '@components';
import { API, Helpers } from '@app';

const InvoiceTypesCombo = ({
	value = null,
	label = null,
	required = false,
	disabled = false,
	placeholder = 'Seleccione un tipo',
	onChange = () => { },
}) => {
	const [items, setItems] = useState(null);

	// Get users
	useEffect(() => {
		if (items) return;

		API.get('client/getComboInvoiceTypes').then((r) => {
			setItems(Helpers.formatComboItems(r.data.items));
		});
	}, [items]);

	const handleChange = (options) => {
		onChange(options.value);
	};

	return (
		<Dropdown
			placeholder={placeholder}
			label={label}
			required={required}
			disabled={disabled}
			items={items ?? []}
			value={value}
			onChange={(option) => handleChange(option)}
		/>
	);
};

const MemoCombo = memo(InvoiceTypesCombo, (prevProps, nextProps) => {
	return (
		nextProps.value === prevProps.value &&
		nextProps.label === prevProps.label &&
		nextProps.required === prevProps.required &&
		nextProps.disabled === prevProps.disabled &&
		nextProps.placeholder === prevProps.placeholder
	);
});

export default MemoCombo;
