import { Accordion, Col, Form, Row } from 'react-bootstrap';

const BuscarProducto = (): JSX.Element => {
    return (
        <>
            <Accordion defaultActiveKey="buscar">
                <Accordion.Item eventKey="buscar">
                    <Accordion.Header>Buscar Producto</Accordion.Header>
                    <Accordion.Body>
                        <Row className="g-4">
                            <Col xs={4}>
                                <Form.Label>Codigo:</Form.Label>
                                <Form.Control size="sm" type="text" />
                            </Col>
                            <Col xs={4}>
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control size="sm" type="text" />
                            </Col>
                            <Col xs={4}>
                                <Form.Label>Precio:</Form.Label>
                                <Form.Control size="sm" type="text" />
                            </Col>
                            <Col xs={4}>
                                <Form.Label>Cantidad:</Form.Label>
                                <Form.Control size="sm" type="text" />
                            </Col>
                            <Col xs={4}>
                                <Form.Label>Categoria:</Form.Label>
                                <Form.Control size="sm" type="text" />
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};
export default BuscarProducto;
