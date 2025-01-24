const ButtonsForm = ({ setAllowEdit, edit, confirmData }) => {
  return (
    <div class="grid grid-cols-3 gap-2 my-5 px-2">
      <button
        className="px-2 bg-ic-disabled rounded-sm enabled:hover:bg-ic-message enabled:hover:text-ic-white text-ic-gray"
      >
        Editar
      </button>
      <button
        className="px-2 bg-ic-disabled rounded-sm enabled:hover:bg-ic-gray enabled:hover:text-ic-white text-ic-gray"
      >
        Cancelar
      </button>
      <button className="px-2 bg-ic-disabled rounded-sm hover:bg-ic-blackorange text-ic-gray hover:text-ic-white">
        Eliminar
      </button>
      <button
        className="col-span-3 px-2 bg-ic-disabled rounded-sm enabled:hover:bg-ic-orange text-ic-gray enabled:hover:text-ic-white"
      >
        Guardar
      </button>
    </div>
  );
};

export default ButtonsForm;
