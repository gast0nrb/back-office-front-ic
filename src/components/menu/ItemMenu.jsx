const ItemMenu = ({name, url}) => {
    return (
    <li className="group hover:bg-ic-orange">
        <a className="text-ic-gray group-hover:text-ic-black px-0.5" href={url}>{name}</a>
    </li>
    )
}

export default ItemMenu