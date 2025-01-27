import { useEffect, useState } from "react";

const SelectCategorias = ({allowEdit, originalValue, setOriginal}) => {
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
      <select
        className="text-lg text-center bg-ic-disabled rounded-sm text-ic-orange"
        value={originalValue.fk_categoria_producto}
        id="categorias" 
        onChange={(e) => {
          setOriginal({
            ...originalValue,
            fk_categoria_producto: e.target.value,
          });
        }}
      >
        {
          categories.map((x, i)=> <option value={x.id} key={i}>{` Id: ${x.id} | ${x.nombre} `}</option>)
        }
      </select>
    </>
  );
};

export default SelectCategorias;
