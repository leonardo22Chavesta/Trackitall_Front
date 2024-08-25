import { createBrowserRouter, RouteObject } from "react-router-dom";
// import Home from "../components/home";

const router : RouteObject[] = [
    {
        path: "/",
        async lazy()  {

            const {default: Home} = await import('../components/home')

            return {
                element:(<Home />)
            }
            
        },

        children: [
            {
                path:'/inventario',
                async lazy()  {

                    const {default: Inventario} = await import('../page/inventario/inventario')
        
                    return {
                        element:(<Inventario />)
                    }
                    
                },
            },
            {
                path:'/productos',
                async lazy()  {

                    const {default: Productos} = await import('../page/productos/index')
        
                    return {
                        element:(<Productos />)
                    }
                    
                },
            }
        ]
            
        
    }
]


export default createBrowserRouter(router)