import BuscarInventario from './components/BuscarInventario';
import ListarInventario from './components/ListarInventario';

const Inventario = (): JSX.Element => {
    return (
        <>
            <BuscarInventario />
            <ListarInventario />
        </>
    );
};
export default Inventario;
