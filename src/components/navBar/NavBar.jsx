import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from '@components';

import './Navbar.scss';

const NavBar = () => {
	return (
		<aside className='custom-navbar'>
			<ul>
				<li className='mt-3'>
					<Tooltip text='Inicio' placement='right'>
						<Link to='/'>
							<FontAwesomeIcon icon={faHouse} />
						</Link>
					</Tooltip>
				</li>
			</ul>
		</aside>
	);
};

export default NavBar;
