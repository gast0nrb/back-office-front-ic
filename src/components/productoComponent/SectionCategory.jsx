import SelectCategorias from "./SelectCategorias";

const SectionCategory = ({ allowEdit, setOriginal, originalValue }) => {
  return (
    <div className="tablet:basis-5/12 grid grid-cols-1 mx-2">
      <h3 className="text-xl text-ic-message font-semibold text-center">
        Categorizacion
      </h3>
      <SelectCategorias
        allowEdit={allowEdit}
        originalValue={originalValue}
        setOriginal={setOriginal}
      />
      <label for="title" class="flex gap-2 text-ic-gray text-xl mt-5 mx-auto">
        Producto activo:
      </label>
      <select
        id="activo"
        className="text-center bg-ic-disabled rounded-sm text-ic-orange"
        value={originalValue.activo ? "1" : "0"}
        onChange={(e) => {
          setOriginal({
            ...originalValue,
            activo: e.target.value == 0 ? false : true,
          });
        }}
      >
        <option value="0">Inactivo</option>
        <option value="1">Activo</option>
      </select>
    </div>
  );
};

export default SectionCategory;
