

function ImageProducto ({file}) {
    return (
    <div className="mt-5 py-4 bg-ic-disabled rounded-sm col-span-1 phone:mx-2 tablet:mx-1">
        <img className="object-cover mx-auto h-auto w-11/12 rounded-md" src={file} alt=""/>
    </div>
    )
}


export default ImageProducto;
