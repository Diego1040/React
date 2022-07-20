import "./Menu.css"

function Menu(props){
    return(
        <>
        <div className="menu-tt">
            <a href="">Historial</a>
            <a href="">Combate</a>
            <a href="">Lista Pokemons</a>
            <span> Buscar Pokemon: <input type="search"></input> </span>
            
        </div>
        </>
    )
}


export default Menu