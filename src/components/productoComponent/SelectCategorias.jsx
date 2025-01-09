import { useEffect, useState } from "react";

const SelectCategorias = ({ product, setProduct, allowEdit }) => {
  const [categories, setCategories] = useState([]);
  const [loaded, setLoaded] = useState(true)

  async function getCategories() {
    try {
      const fetchCategories = await fetch(
        "http://localhost:8000/api/v0.5/webintercar/categorias"
      );
      const jsonCategories = await fetchCategories.json();
      setCategories(jsonCategories.data.sort((a,b)=> a.id > b.id));
      setLoaded(false)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => { 
    getCategories()
  }, []);
  if  (loaded) {
    return (
      <p>Cargando categorias...</p>
    )
  }
  return (
    <>
      <label for="codigo" class="text-ic-gray text-xl mt-auto">
        Categoria:
      </label>
      {
        !allowEdit? 
        <input disabled className="text-ic-orange bg-ic-disabled text-center" type="text" 
        value={` Id: ${categories[product.fk_categoria_producto -1].id} | ${categories[product.fk_categoria_producto - 1].nombre}`} />
        :
      <select
        className="text-lg text-center bg-ic-disabled rounded-sm text-ic-orange"
        disabled={!allowEdit}
        value={product.fk_categoria_producto}
        id="categorias"
        onChange={(e) => {
          setProduct({
            ...product,
            fk_categoria_producto: parseInt(e.target.value),
          });
        }}
      >
        {
          categories.map((x, i)=> <option value={x.id} key={i}>{` Id: ${x.id} | ${x.nombre} `}</option>)
        }
      </select>
  }
    </>
  );
};

export default SelectCategorias;
