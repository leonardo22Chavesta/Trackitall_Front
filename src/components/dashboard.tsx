import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/sidebar.css';

const Dashboard = (): JSX.Element => {
    return (
        <>
            <div className="custom-dashboard">
                <div className="custom-dashboard-notif">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="custom-dashboard-user">
                    <div className="custom-dashboard-circle-user">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BEKflM94gM3i3mxnkbTsdiW7kZDh_k17AQ&s"
                            alt=""
                        />
                    </div>
                    <div className="d-text custom-dashboard-text">
                        <span className="nombre">Leonardo Miguel</span>
                        <span className="apellido">Chavesta Torres</span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Dashboard;
