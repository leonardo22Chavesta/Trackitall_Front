import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faBoxesPacking,
    faClipboardCheck,
    faGear,
    faHouse,
    faShop,
    faTruckRampBox,
} from '@fortawesome/free-solid-svg-icons';
import '../style/sidebar.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { useEffect, useState } from 'react';
import logo from '../layouts/img/logo.png';
import { Link } from 'react-router-dom';

const Sidebar = (): JSX.Element => {
    const [isClosed, setIsClosed] = useState<boolean>(false);

    useEffect(() => {
        const toggle = document.querySelector<HTMLElement>('.toggle');

        const handleToggleClick = () => {
            setIsClosed((prevState) => !prevState);
        };

        toggle?.addEventListener('click', handleToggleClick);

        return () => {
            toggle?.removeEventListener('click', handleToggleClick);
        };
    }, []);

    useEffect(() => {
        const sidebar = document.querySelector<HTMLElement>('.custom-sidebar');
        if (sidebar) {
            if (isClosed) {
                sidebar.classList.add('close');
            } else {
                sidebar.classList.remove('close');
            }
        }
    }, [isClosed]);

    return (
        <>
            <nav className="custom-sidebar">
                <header className="custom-header">
                    <div className="custom-image-text">
                        <span className="custom-image">
                            <img src={logo} />
                        </span>

                        <div className="custom-text custom-header-text">
                            <span className="name">La Bodega</span>
                            {/* <span className="profession"></span> */}
                        </div>
                    </div>

                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className="toggle"
                        style={{ color: '#fff' }}
                    />
                </header>

                <div className="custom-menu-bar">
                    <div className="custom-menu">
                        <ul className="custom-menu-links">
                            <li className="custom-li custom-nav-link">
                                <a href="#" className="custom-a">
                                    <FontAwesomeIcon className="custom-icon" icon={faHouse} />
                                    <span className="custom-text custom-nav-text">Inicio</span>
                                </a>
                            </li>
                            <li className="custom-li custom-nav-link">
                                <Link to="/productos" className="custom-a">
                                    <FontAwesomeIcon className="custom-icon" icon={faShop} />
                                    <span className="custom-text custom-nav-text">Productos</span>
                                </Link>
                            </li>
                            <li className="custom-li custom-nav-link">
                                <Link to="/inventario" className="custom-a">
                                    <FontAwesomeIcon
                                        className="custom-icon"
                                        icon={faBoxesPacking}
                                    />
                                    <span className="custom-text custom-nav-text">Inventario</span>
                                </Link>
                            </li>
                            <li className="custom-li custom-nav-link">
                                <a href="#" className="custom-a">
                                    <FontAwesomeIcon
                                        className="custom-icon"
                                        icon={faTruckRampBox}
                                    />{' '}
                                    <span className="custom-text custom-nav-text">
                                        Control de Stock
                                    </span>
                                </a>
                            </li>
                            <li className="custom-li custom-nav-link">
                                <a href="#" className="custom-a">
                                    <FontAwesomeIcon
                                        className="custom-icon"
                                        icon={faClipboardCheck}
                                    />{' '}
                                    <span className="custom-text custom-nav-text">Reportes</span>
                                </a>
                            </li>
                            <li className="custom-li custom-nav-link">
                                <a href="#" className="custom-a">
                                    <FontAwesomeIcon className="custom-icon" icon={faGear} />{' '}
                                    <span className="custom-text custom-nav-text">
                                        Usuarios y Roles
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="custom-bottom-content">
                        <li className="custom-li">
                            <Link className="custom-a" to="/login">
                                <FontAwesomeIcon
                                    className="custom-icon"
                                    icon={faArrowRightFromBracket}
                                />{' '}
                                <span className="custom-text custom-nav-text">Salir</span>
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Sidebar;
