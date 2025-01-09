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
      />
      <label for="title" class="flex gap-2 text-ic-gray text-xl mt-5 mx-auto">
        Producto activo:
      </label>
      <input
        id="title"
        type="checkbox"
        checked={originalValue.activo}
        onChange={(e) => {
          setProduct({ ...product, activo: e.target.value });
        }}
        className="rounded-sm text-center"
      />
    </div>
  );
};

export default SectionCategory;
