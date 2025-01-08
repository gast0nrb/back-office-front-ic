import ImageProducto from "./ImageProducto.jsx";
import InputForm from "./InputForm.jsx";

const SectionProducto = ({ originalValue, edit, product, setProduct }) => {
  return (
    <div className="tablet:grid tablet:grid-cols-3">
      <ImageProducto file="/defaultFile.png" />
      <div className="col-span-2 grid grid-cols-1 mx-2">
        <label for="codigo" class="text-ic-gray text-xl mt-auto">
          Codigo:
        </label>
        <input
          id="codigo"
          value={originalValue.codigo}
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
          disabled={true}
        />
        <InputForm
          forName={"file"}
          id={"file"}
          name={"file"}
          type={"text"}
          defaultValue={originalValue.file}
          allowEdit={edit}
          titleLabel={"File"}
          onChange={(e) => {
            setProduct({ ...product, file: e.target.value.trim()});
          }}
        />
        <InputForm
          forName={"barra"}
          id={"barra"}
          name={"barra"}
          type={"text"}
          defaultValue={originalValue.barra}
          allowEdit={edit}
          titleLabel={"Codigo de barra"}
          onChange={(e) => {
            setProduct({ ...product, barra: e.target.value.trim() });
          }}
        />
        <InputForm
          forName={"title"}
          id={"title"}
          name={"title"}
          type={"text"}
          defaultValue={originalValue.titulo}
          allowEdit={edit}
          titleLabel={"Titulo"}
          onChange={(e)=> {
            setProduct({...product, titulo : e.target.value.trim()})
          }}
        />
        <InputForm
          forName={"description"}
          id={"description"}
          name={"description"}
          type={"textarea"}
          defaultValue={originalValue.descripcion}
          allowEdit={edit}
          titleLabel={"Descripcion"}
          onChange={(e)=> {
            setProduct({...product, descripcion : e.target.value.trim()})
          }}
        />
      </div>
    </div>
  );
};

export default SectionProducto;
