const SubmitProduct = ({ setAllowEdit, edit, editProduct, product, setProduct }) => {
  async function putProduct() {
    const putMethod = {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(editProduct),
    };
    try {
      const fetchUpdateProduct = await fetch(
        `http://localhost:8000/api/v0.5/webintercar/productos/${product.codigo}`,
        putMethod
      );
      const response = await fetchUpdateProduct.json();
    } catch (e) {
      console.error(e);
    } finally {
      setAllowEdit(false);
      setProduct({...product, editProduct})
      alert(`Se modifico el producto con código ${product.codigo} correctamente`)
    }
  }
  return (
    <div class="grid grid-cols-3 gap-2 my-5 px-2">
      <button
        onClick={(e) => {
          e.preventDefault();
          setAllowEdit(true);
        }}
        className="px-2 bg-ic-disabled rounded-sm enabled:hover:bg-ic-message enabled:hover:text-ic-white text-ic-gray"
        disabled={edit}
      >
        Editar
      </button>
      <button
        className="px-2 bg-ic-disabled rounded-sm enabled:hover:bg-ic-gray enabled:hover:text-ic-white text-ic-gray"
        disabled={!edit}
        onClick={(e) => {
          e.preventDefault();
          setAllowEdit(false);
        }}
      >
        Cancelar
      </button>
      <button className="px-2 bg-ic-disabled rounded-sm hover:bg-ic-blackorange text-ic-gray hover:text-ic-white">
        Eliminar
      </button>
      <button
        className="col-span-3 px-2 bg-ic-disabled rounded-sm enabled:hover:bg-ic-orange text-ic-gray enabled:hover:text-ic-white"
        disabled={!edit}
        onClick={(e) => {
            e.preventDefault()
            const entriesUpdate = Object.entries(editProduct);
          if (entriesUpdate.length == 0) {
            alert("¡No se han realizado cambios!");
            return
          }
          putProduct();
        }}
      >
        Guardar
      </button>
    </div>
  );
};

export default SubmitProduct;
