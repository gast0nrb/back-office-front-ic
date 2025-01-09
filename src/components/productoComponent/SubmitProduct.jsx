const SubmitProduct = ({ setAllowEdit, edit, confirmData }) => {
  return (
    <div class="grid grid-cols-3 gap-2 my-5 px-2">
      <button
        onClick={(e) => {
          e.preventDefault();
          setAllowEdit(true);
        }}
        className="px-2 bg-ic-disabled rounded-sm enabled:hover:bg-ic-message enabled:hover:text-ic-white text-ic-gray"
        disabled={edit}
      >
        Editar
      </button>
      <button
        className="px-2 bg-ic-disabled rounded-sm enabled:hover:bg-ic-gray enabled:hover:text-ic-white text-ic-gray"
        disabled={!edit}
        type="reset"
      >
        Cancelar
      </button>
      <button className="px-2 bg-ic-disabled rounded-sm hover:bg-ic-blackorange text-ic-gray hover:text-ic-white">
        Eliminar
      </button>
      <button
        className="col-span-3 px-2 bg-ic-disabled rounded-sm enabled:hover:bg-ic-orange text-ic-gray enabled:hover:text-ic-white"
        disabled={!edit}
        onClick={confirmData}
      >
        Guardar
      </button>
    </div>
  );
};

export default SubmitProduct;
