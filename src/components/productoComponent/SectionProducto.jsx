import ImageProducto from "./ImageProducto.jsx";
import InputForm from "./InputForm.jsx";

const SectionProducto = ({ originalValue, allowEdit, setOriginal }) => {
  return (
    <div className="tablet:grid tablet:grid-cols-3">
      <ImageProducto file="/defaultFile.png" />
      <div className="col-span-2 grid grid-cols-1 mx-2">
        <label for="codigo" class="text-ic-gray text-xl mt-auto">
          Codigo:
        </label>
        <input
          id="codigo"
          disabled
          value={originalValue.codigo}
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        />
        <InputForm
          forName={"file"}
          id={"file"}
          name={"file"}
          type={"text"}
          value={originalValue.file}
          allowEdit={allowEdit}
          titleLabel={"File"}
          changeValue={(e) => {
            setOriginal({ ...originalValue, file: e.target.value });
          }}
        />
        <InputForm
          forName={"barra"}
          id={"barra"}
          name={"barra"}
          type={"text"}
          value={originalValue.barra}
          allowEdit={allowEdit}
          titleLabel={"Codigo de barra"}
          changeValue={(e) => {
            setOriginal({ ...originalValue, barra: e.target.value });
          }}
        />
        <InputForm
          forName={"title"}
          id={"title"}
          name={"title"}
          type={"text"}
          value={originalValue.titulo}
          allowEdit={allowEdit}
          titleLabel={"Titulo"}
          changeValue={(e) =>
            setOriginal({ ...originalValue, titulo: e.target.value })
          }
        />
        <label for="descripcion" class="text-ic-gray text-xl mt-auto">
          Descripción:
        </label>
        <textarea
          id="descripcion"
          value={originalValue.descripcion}
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
          onChange={(e) =>
            setOriginal({ ...originalValue, descripcion: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default SectionProducto;
