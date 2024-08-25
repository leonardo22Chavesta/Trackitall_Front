import Sidebar from './sidebar';
import '../style/sidebar.css';
import Dashboard from './dashboard';
import { Outlet } from 'react-router-dom';

const Home = (): JSX.Element => {
    return (
        <>
            <Sidebar />
            <section className="custom-home">
                <Dashboard />
                <div className="page-wrapper">
                    <div className="div container-fluid">
                        <Outlet />
                    </div>
                </div>
            </section>
        </>
    );
};
export default Home;
