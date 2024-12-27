const ItemMenu = ({name, url}) => {
    return (
    <li className="">
        <a className="text-ic-gray hover:text-ic-black hover:bg-ic-orange px-0.5" href={url}>{name}</a>
    </li>
    )
}

export default ItemMenu