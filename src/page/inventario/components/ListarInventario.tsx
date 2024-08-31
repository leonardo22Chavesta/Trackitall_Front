import { Button, Card, Table } from 'react-bootstrap';
import { Producto } from '../../../models/ProductoInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const ListarInventario = (): JSX.Element => {
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
                    <span className=" text-muted h3">Listar Inventario</span>
                </Card.Header>
                <Card.Body>
                    <Table size="sm" responsive align="center" striped bordered hover>
                        <thead>
                            <tr>
                                <th>Codigo del Producto</th>
                                <th>Cantidad Inventario</th>
                                <th>Ubicacion del Producto</th>
                                <th>Action</th>
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
                                            <td className="text-center">
                                                <Button
                                                    variant="outline-info"
                                                    size="sm"
                                                    // onClick={openModal}
                                                >
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
        </>
    );
};
export default ListarInventario;
