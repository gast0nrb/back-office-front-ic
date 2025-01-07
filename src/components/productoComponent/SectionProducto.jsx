import ImageProducto from "./ImageProducto.jsx";
import InputForm from "./InputForm.jsx";

const SectionProducto = ({ product, edit, setEditProduct, editProduct }) => {
  return (
    <div className="tablet:grid tablet:grid-cols-3">
      <ImageProducto file="/defaultFile.png" />
      <div className="col-span-2 grid grid-cols-1 mx-2">
        <label for="codigo" class="text-ic-gray text-xl mt-auto">
          Codigo:{" "}
        </label>
        <input
          id="codigo"
          value={product.codigo}
          className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
          disabled={true}
        />
        <InputForm
          forName={"file"}
          id={"file"}
          name={"file"}
          type={"text"}
          value={product.file}
          allowEdit={edit}
          titleLabel={"File"}
          onChange={(e) => {
            setEditProduct({ ...editProduct, file: e.target.value });
          }}
        />
        <InputForm
          forName={"barra"}
          id={"barra"}
          name={"barra"}
          type={"text"}
          value={product.barra}
          allowEdit={edit}
          titleLabel={"Codigo de barra"}
          onChange={(e) => {
            setEditProduct({ ...editProduct, barra: e.target.value });
          }}
        />
        <InputForm
          forName={"title"}
          id={"title"}
          name={"title"}
          type={"text"}
          value={product.titulo}
          allowEdit={edit}
          titleLabel={"Titulo"}
          onChange={(e)=> {
            setEditProduct({...editProduct, titulo : e.target.value})
          }}
        />
        <InputForm
          forName={"description"}
          id={"description"}
          name={"description"}
          type={"textarea"}
          value={product.descripcion}
          allowEdit={edit}
          titleLabel={"Descripcion"}
          onChange={(e)=> {
            setEditProduct({...editProduct, descripcion : e.target.value})
          }}
        />
      </div>
    </div>
  );
};

export default SectionProducto;
