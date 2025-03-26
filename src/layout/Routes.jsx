import { Navigate, Outlet, Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
import { Spinner } from '@components';
import { App } from '@app';

// Lazy loading de componentes
const Login = lazy(() => import('../screens/public/Login.jsx'));
const DefaultLayout = lazy(() => import('./DefaultLayout'));
const NotFound = lazy(() => import('../screens/public/NotFound.jsx'));
const NotAllowed = lazy(() => import('../screens/public/NotAllowed.jsx'));
const Home = lazy(() => import('../screens/main/Home.jsx'));

const PrivateRoute = () => (App.isLoggedIn() ? <Outlet /> : <Navigate to='/login' />);

const AdminRoute = () => (App.isAdmin() ? <Outlet /> : <Navigate to='/notAllowed' />);

const EmployeeRoute = () => (App.isEmployee() ? <Outlet /> : <Navigate to='/notAllowed' />);

export const AppRoutes = () => (
	<Suspense
		fallback={
			<div
				className='d-flex justify-content-center align-items-center'
				style={{ minHeight: '100vh', backgroundColor: '#eef5f9' }}
			>
				<Spinner></Spinner>
			</div>
		}
	>
		<Routes>
			<Route path='/' element={<PrivateRoute />}>
				<Route
					path='/'
					element={
						<DefaultLayout>
							<Home />
						</DefaultLayout>
					}
				/>
			</Route>
			<Route path='*' element={<NotFound />} />
			<Route path='/notAllowed' element={<NotAllowed />} />
			<Route path='/notFound' element={<NotFound />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	</Suspense>
);
