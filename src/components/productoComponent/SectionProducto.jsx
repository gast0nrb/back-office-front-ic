import ImageProducto from "./ImageProducto.jsx";

const SectionProducto = ({ codigo }) => {
  return (
    <div className="tablet:grid tablet:grid-cols-3">
      <ImageProducto file="/defaultFile.png" />
      <div className="col-span-2 grid grid-cols-1 mx-2">
        <label for="codigo" class="text-ic-gray text-xl mt-auto">
          Codigo:{" "}
        </label>
        <input
          id="codigo"
          value={codigo}
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
          disabled
        />
        <label for="codigo" className="text-ic-gray text-xl mt-auto">
          File:{" "}
        </label>
        <input
          id="codigo"
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
          disabled
        />
        <label for="barra" className="text-ic-gray text-xl mt-auto">
          Cod Barra:{" "}
        </label>
        <input
          id="barra"
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
          disabled
        />
        <label for="title" className="text-ic-gray text-xl mt-auto">
          Titulo:{" "}
        </label>
        <input
          id="title"
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
          disabled
        />
        <label for="codigo" className="text-ic-gray text-xl mt-auto">
          Descripcion:{" "}
        </label>
        <textarea
          id="codigo"
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
          disabled
        ></textarea>
        <label for="title" className="text-ic-gray text-xl mt-auto">
          Costo:{" "}
        </label>
        <input
          id="title"
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
          disabled
        />
      </div>
    </div>
  );
};

export default SectionProducto;
