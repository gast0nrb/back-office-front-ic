import ImageProducto from "./ImageProducto.jsx";

const SectionProducto = ({
  codigo,
  file,
  barra,
  titulo,
  descripcion,
  edit,
  setEditProduct,
  editProduct,
}) => {
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
          disabled={true}
        />
        <label for="codigo" className="text-ic-gray text-xl mt-auto">
          File:
        </label>
        <input
          defaultValue={file}
          onChange={(e) =>
            setEditProduct({ ...editProduct, file: e.target.value })
          }
          id="codigo"
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
          disabled={!edit}
        />
        <label for="barra" className="text-ic-gray text-xl mt-auto">
          Cod Barra:
        </label>
        <input
          id="barra"
          defaultValue={barra}
          onChange={(e) =>
            setEditProduct({ ...editProduct, barra: e.target.value })
          }
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
          disabled={!edit}
        />
        <label for="title" className="text-ic-gray text-xl mt-auto">
          Titulo:{" "}
        </label>
        <input
          id="title"
          defaultValue={titulo}
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
          disabled={!edit}
          onChange={(e) =>
            setEditProduct({ ...editProduct, title: e.target.value })
          }
        />
        <label for="codigo" className="text-ic-gray text-xl mt-auto">
          Descripcion:{" "}
        </label>
        <textarea
          id="codigo"
          defaultValue={descripcion}
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
          disabled={!edit}
          onChange={(e) =>
            setEditProduct({ ...editProduct, descripcion: e.target.value })
          }
        ></textarea>
        <label for="costo" className="text-ic-gray text-xl mt-auto">
          Costo:{" "}
        </label>
        <input
          id="costo"
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
          disabled={true}
        />
      </div>
    </div>
  );
};

export default SectionProducto;
