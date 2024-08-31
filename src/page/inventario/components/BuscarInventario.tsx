import { Accordion, Col, Form, Row } from 'react-bootstrap';

const BuscarInventario = (): JSX.Element => {
    return (
        <>
            <Accordion defaultActiveKey="BuscarInventario">
                <Accordion.Item eventKey="BuscarInventario">
                    <Accordion.Header>Buscar Inventario</Accordion.Header>
                    <Accordion.Body>
                        <Row className="g-4">
                            <Col xs={3}>
                                <Form.Label>Codigo Producto:</Form.Label>
                                <Form.Control type="text" size="sm" />
                            </Col>
                            <Col xs={3}>
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control type="text" size="sm" />
                            </Col>
                            <Col xs={4}>
                                <Form.Label>Cantidad de Inventario:</Form.Label>
                                <Form.Control type="text" size="sm" />
                            </Col>
                            <Col xs={4}>
                                <Form.Label>Ubicacion del almacen</Form.Label>
                                <Form.Control type="text" size="sm" />
                            </Col>
                            <Col xs={3}>
                                <Form.Label>Fecha Registro</Form.Label>
                                <Form.Control type="Date" size="sm" />
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default BuscarInventario;
