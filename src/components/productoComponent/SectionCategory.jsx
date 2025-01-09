import SelectCategorias from "./SelectCategorias";

const SectionCategory = ({ allowEdit, setProduct, product, originalValue }) => {
  return (
    <div className="tablet:basis-5/12 grid grid-cols-1 mx-2">
      <h3 className="text-xl text-ic-message font-semibold text-center">
        Categorizacion
      </h3>
      <SelectCategorias
        allowEdit={allowEdit}
        product={product}
        setProduct={setProduct}
        originalValue={originalValue} 
      />
      <label for="title" class="flex gap-2 text-ic-gray text-xl mt-5 mx-auto">
        Producto activo:
      </label>
      <select id="activo" className="text-center bg-ic-disabled rounded-sm text-ic-orange"
        defaultValue={originalValue.activo}
        disabled={!allowEdit}
        onChange={(e)=> {
          setProduct({...product, activo : e.target.value })    
        }}
      >
        <option value="false">Inactivo</option>
        <option value="true">Activo</option>
      </select>
    </div>
  );
};

export default SectionCategory;
