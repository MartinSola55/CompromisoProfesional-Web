import './Footer.scss';

const Footer = () => {
	return (
		<div className='custom-footer shadow'>
			<footer>
				<span className='mx-auto'>Compromiso Profesional &copy; - {new Date().getFullYear()}</span>
			</footer>
		</div>
	);
};

export default Footer;