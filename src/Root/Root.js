import { Link , Outlet} from "react-router-dom";
import "./Root.css"

const Root = (props) => {
    return (
        <>



        <nav>

            
            
         <li><Link to="/lista">Pokedex</Link></li>
         <li><Link to="/historial">Historial</Link></li>
         <li><Link to="/combate">Combate</Link></li>
         <li><Link to="/search">Buscar Pokemon</Link></li>
         <li><Link to="/pokemon">Pokemon</Link></li>

            


        <Outlet/>

        </nav>
        
        </>
    )
}

export default Root