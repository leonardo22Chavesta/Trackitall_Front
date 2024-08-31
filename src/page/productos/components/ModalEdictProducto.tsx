import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

interface modalProps {
    showModal: Boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalEditProducto = ({ showModal, setShowModal }: modalProps): JSX.Element => {
    const cerrarModal = (): void => setShowModal(true);

    return (
        <>
            <Modal
                show={!showModal}
                size="lg"
                onHide={cerrarModal}
                animation={true}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="g-4">
                        <Col xs={4}>
                            <Form.Label>Codigo</Form.Label>
                            <Form.Control type="text" size="sm" />
                        </Col>
                        <Col xs={4}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" size="sm" />
                        </Col>
                        <Col xs={4}>
                            <Form.Label>Categoría</Form.Label>
                            <Form.Control type="text" size="sm" />
                        </Col>
                        <Col xs={4}>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" size="sm" />
                        </Col>
                        <Col xs={4}>
                            <Form.Label>Proveedor</Form.Label>
                            <Form.Control type="text" size="sm" />
                        </Col>
                        <Col xs={4}>
                            <Form.Label>Precio de Venta</Form.Label>
                            <Form.Control type="text" size="sm" />
                        </Col>
                        <Col xs={4}>
                            <Form.Label>Costo</Form.Label>
                            <Form.Control type="text" size="sm" />
                        </Col>
                        <Col xs={4}>
                            <Form.Label>Cantidad Inicial</Form.Label>
                            <Form.Control type="text" size="sm" />
                        </Col>
                        <Col xs={4}>
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" size="sm" />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col xs={6}>
                            <Button variant="success">Guardar</Button>
                        </Col>
                        <Col xs={6}>
                            <Button variant="danger" onClick={cerrarModal}>
                                Cerrar
                            </Button>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalEditProducto;
