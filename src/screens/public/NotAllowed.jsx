import { useNavigate } from 'react-router';
import './Error.scss';

const NotAllowed = () => {
	const navigate = useNavigate();
	return (
		<div className="error-container">
			<div className="error-body text-center">
				<h1 className="text-primary">403</h1>
				<h3>ERROR</h3>
				<p className="mt-3 mb-3">No cuentas con los permisos para acceder a esta página</p>
				<button className="btn btn-primary" onClick={() => navigate('/')}>Volver al inicio</button>
			</div>
			<div className="footer">
				<footer>
					<span className='mx-auto'>Compromiso Profesional &copy; - {new Date().getFullYear()}</span>
				</footer>
			</div>
		</div>
	);
};

export default NotAllowed;