import { useImperativeHandle, useRef } from "react";
import classNames from "classnames";
import { InfoButton } from "@components";

import "./RadioButton.scss";

const RadioButton = ({
	ref,
	value = false,
	name = '',
	option = '',
	label = '',
	disabled = false,
	className = '',
	style = {},
	helpText = null,
	helpColor = undefined,
	helpStyle = {},
	helpPlacement = undefined,
	onChange = () => { },
}) => {
	const radioRef = useRef(null);

	const checked = option === value;

	useImperativeHandle(ref, () => ({
		focus: () => radioRef.current.focus(),
	}));

	const update = (option) => {
		onChange(option);
	};

	const handleChange = (e) => {
		update(e.target.checked ? option : null);
	};

	return (
		<div
			className={classNames('form-check', className)}
			style={style}
		>
			<label className='form-check-label'>
				<input
					className='form-check-input custom-radio'
					name={name}
					type='radio'
					checked={checked}
					disabled={disabled}
					onChange={handleChange}
					ref={radioRef}
				/>
				{label}
				{helpText && (
					<InfoButton
						style={{ marginLeft: '5px' }}
						helpText={helpText}
						helpColor={helpColor}
						helpStyle={helpStyle}
						helpPlacement={helpPlacement}
					/>
				)}
			</label>
		</div>
	);
};

export default RadioButton;