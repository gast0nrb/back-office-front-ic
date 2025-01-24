import ImageProducto from "./ImageProducto.jsx";
import InputForm from "./InputForm.jsx";

const SectionProducto = ({ originalValue, edit, setProduct, setOriginal }) => {
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
          allowEdit={edit}
          titleLabel={"File"}
        />
        <InputForm
          forName={"barra"}
          id={"barra"}
          name={"barra"}
          type={"text"}
          value={originalValue.barra}
          allowEdit={edit}
          titleLabel={"Codigo de barra"}
        />
        <InputForm
          forName={"title"}
          id={"title"}
          name={"title"}
          type={"text"}
          value={originalValue.titulo}
          allowEdit={edit}
          titleLabel={"Titulo"}
        />
        <label for="descripcion" class="text-ic-gray text-xl mt-auto">
          Descripción:
        </label>
        <textarea
          id="descripcion"
          value={originalValue.descripcion}
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        />
      </div>
    </div>
  );
};

export default SectionProducto;
