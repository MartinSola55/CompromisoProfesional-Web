import { Col } from 'react-bootstrap';
import { BreadCrumb } from '@components';

const Home = () => {
	return (
		<>
			<BreadCrumb title='Inicio' />
			<Col xs={12} className='container-fluid px-5'>
			</Col>
		</>
	);
};

export default Home;
