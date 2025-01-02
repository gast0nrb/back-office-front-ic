import { useEffect, useState } from "react";

const SectionCategory = ({
  categoria,
  activo,
  allowEdit,
  setEditProduct,
  editProduct,
  product,
}) => {
  const [categories, setCategories] = useState([]);
  async function getCategories() {
    try {
      const fetchCategories = await fetch(
        "http://localhost:8000/api/v0.5/webintercar/categorias"
      );
      const jsonCategories = await fetchCategories.json();
      setCategories(jsonCategories.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="tablet:basis-5/12 grid grid-cols-1 mx-2">
      <h3 className="text-xl text-ic-message font-semibold text-center">
        Categorizacion
      </h3>
      <label for="codigo" class="text-ic-gray text-xl mt-auto">
        Categoria:{" "}
      </label>
        <select
          className="text-lg text-center bg-ic-disabled rounded-sm text-ic-orange"
          disabled={!allowEdit}
          defaultValue={product.fk_categoria_producto}
          value={
            editProduct.fk_categoria_producto ? 
            editProduct.fk_categoria_producto
            :
            product.fk_categoria_producto
          }
          onChange={(e)=> {
            setEditProduct({...editProduct, fk_categoria_producto : e.target.value})
          }}
        >
          {categories.sort((a, b)=> a.id > b.id).map((c) => (
            <option 
            value={c.id}
            key={c.id}>{`Id: ${c.id} | Nombre: ${c.nombre}`}</option>
          ))}
        </select>
      <label for="barra" class="text-ic-gray text-xl mt-auto">
        Subcategoria:{" "}
      </label>
      <input
        id="barra"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Activo:{" "}
      </label>
      <input
        id="title"
        type="checkbox"
        checked={activo}
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Stock:{" "}
      </label>
      <input
        id="title"
        value={"Working at..."}
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled
      />
    </div>
  );
};

export default SectionCategory;
