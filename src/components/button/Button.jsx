import { useImperativeHandle, useRef } from 'react';
import * as BS from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import './Button.scss';

const Button = ({
	ref,
	style,
	iconStyle,
	type = 'button',
	variant = 'primary',
	onClick = () => { },
	icon = null,
	children,
	link = false,
	...props
}) => {
	const buttonRef = useRef(null);

	useImperativeHandle(ref, () => ({
		focus: () => buttonRef.current.focus()
	}));

	return (
		<BS.Button
			{...props}
			className={classNames(props.className, link ? 'button-link' : '')}
			href={type === 'link' ? props.href : null}
			ref={buttonRef}
			style={{
				...style,
				minWidth: (style && style.minWidth) || '80px',
			}}
			variant={variant}
			type={type}
			onClick={onClick}
		>
			{children}
			{icon && (
				<FontAwesomeIcon
					icon={icon}
					style={{
						...iconStyle,
						marginLeft: (iconStyle && iconStyle.marginLeft) || '5px',
					}}
				/>
			)}
		</BS.Button>
	);
};

export default Button;