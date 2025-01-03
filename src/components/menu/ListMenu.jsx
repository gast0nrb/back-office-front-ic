import ItemMenu from "./ItemMenu"

const ListMenu = () => {
    return (
<ul className="bg-ic-disabled w-min rounded-sm mx-auto">
    <ItemMenu url={"/"} name="Inicio"/>
    <ItemMenu url={"/productos"} name="Productos"/>
    <ItemMenu url={"/categorias"} name="Categorias"/>
    <ItemMenu url={"/informes"} name="Informes"/>
</ul>
    )
}

export default ListMenu