import { Link , Outlet} from "react-router-dom";
import "./Root.css"

const Root = (props) => {
    return (
        <>

        <nav>

         <Link to="/pokemon">Pokemon</Link>
         <Link to="/lista">Lista</Link>
         <Link to="/historial">Historial</Link>
         <Link to="/combate">Combate</Link>
         <Link to="/search"> Buscar Pokemon</Link>


        <Outlet/>

        </nav>
        
        </>
    )
}

export default Root