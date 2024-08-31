import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Table, Card, Container, Button } from 'react-bootstrap';
import ModalEditProducto from './ModalEdictProducto';

interface Producto {
    codigo: Number;
    nombre: String;
    categotia: String;
    precio: Number;
}

const ListarProducto = (): JSX.Element => {
    const [showModal, setShowModal] = useState<boolean>(true);

    const openModal = (): void => setShowModal(false);

    const data: Producto[] = [
        {
            codigo: 98564882623,
            nombre: 'GALLETA OREO',
            categotia: 'GALLETAS',
            precio: 2.5,
        },
        {
            codigo: 98564882623,
            nombre: 'GALLETA OREO',
            categotia: 'GALLETAS',
            precio: 2.5,
        },
        {
            codigo: 98564882623,
            nombre: 'GALLETA OREO',
            categotia: 'GALLETAS',
            precio: 2.5,
        },
        {
            codigo: 98564882623,
            nombre: 'GALLETA OREO',
            categotia: 'GALLETAS',
            precio: 2.5,
        },
        {
            codigo: 98564882623,
            nombre: 'GALLETA OREO',
            categotia: 'GALLETAS',
            precio: 2.5,
        },
        {
            codigo: 98564882623,
            nombre: 'GALLETA OREO',
            categotia: 'GALLETAS',
            precio: 2.5,
        },
        {
            codigo: 98564882623,
            nombre: 'GALLETA OREO',
            categotia: 'GALLETAS',
            precio: 2.5,
        },
        {
            codigo: 98564882623,
            nombre: 'GALLETA OREO',
            categotia: 'GALLETAS',
            precio: 2.5,
        },
        {
            codigo: 98564882623,
            nombre: 'GALLETA OREO',
            categotia: 'GALLETAS',
            precio: 2.5,
        },
    ];

    return (
        <>
            <Card>
                <Card.Header style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    <span className=" text-muted h3">Listar Productos</span>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nombre</th>
                                <th>Categoria</th>
                                <th>Precio</th>
                                <th className="text-center" style={{ width: '90px' }}>
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((index) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{index.codigo.toString()}</td>
                                            <td>{index.nombre}</td>
                                            <td>{index.categotia}</td>
                                            <td>{index.precio.toString()}</td>
                                            <td className="text-center">
                                                <Button
                                                    variant="outline-info"
                                                    size="sm"
                                                    onClick={openModal}>
                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                </Button>{' '}
                                                <Button variant="outline-danger" size="sm">
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </Button>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            <ModalEditProducto showModal={showModal} setShowModal={setShowModal} />
        </>
    );
};
export default ListarProducto;
