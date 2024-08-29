import { Col, Form, Row } from 'react-bootstrap';
import login from '../../layouts/img/logo.png';

import '../../style/login.css';

const Login = (): JSX.Element => {
    const auth = () => {
        window.location.href = '/';
    };

    return (
        <>
            <div className="login">
                <div className="login-logo">
                    <img src={login} alt="" />
                </div>
                <div className="form-login">
                    <Row className="text-center pb-5">
                        <h1>Bienvenido</h1>
                        <p>Por favor iniciar sesión con sus datos</p>
                    </Row>
                    <Row>
                        <Col className="pb-4" xl={12}>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" />
                        </Col>
                        <Col className="pb-5" xl={12}>
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control type="password" />
                        </Col>
                        <Col className="text-center" xl={12}>
                            <button onClick={auth} className="custom-button">
                                Entrar
                            </button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};
export default Login;
