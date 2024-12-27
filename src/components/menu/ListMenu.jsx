import ItemMenu from "./ItemMenu"

const ListMenu = () => {
    return (
<ul className="">
    <ItemMenu url={"/"} name="Inicio"/>
    <ItemMenu url={"/productos"} name="Productos"/>
    <ItemMenu url={"/categorias"} name="Categorias"/>
    <ItemMenu url={"/informes"} name="Informes"/>
</ul>
    )
}

export default ListMenu