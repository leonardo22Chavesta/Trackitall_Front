import { Button } from 'react-bootstrap';

const Inventario = (): JSX.Element => {
    const me = 'd';

    return (
        <>
            <h1>
                <Button as="a" variant="primary">
                    Button as link {me}
                </Button>
            </h1>
        </>
    );
};
export default Inventario;
