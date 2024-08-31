import BuscarProducto from './components/BucarProducto';
import ListarProducto from './components/ListarProductos';

const Productos = (): JSX.Element => {
    return (
        <>
            <BuscarProducto />
            <ListarProducto />
        </>
    );
};
export default Productos;
