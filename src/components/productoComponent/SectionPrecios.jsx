const SectionPrecios = ({
  mayorista,
  cantidadMinimaMayor,
  detalle,
  descuentoMayorista,
  descuentoDetalle,
  edit,
  setEditProduct,
  editProduct
}) => {
  return (
    <div className="tablet:basis-6/12 grid grid-cols-1 mx-2">
      <h3 class="text-xl text-ic-message font-semibold text-center">Valores</h3>
      <label for="codigo" class="text-ic-gray text-xl mt-auto">
        Precio mayorista:
      </label>
      <input
        id="codigo"
        value={mayorista}
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled
      />
      <label for="barra" class="text-ic-gray text-xl mt-auto">
        Cantidad minima mayorista:
      </label>
      <input
        id="barra"
        value={cantidadMinimaMayor}
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Descuento mayorista (%):
      </label>
      <input
        value={descuentoMayorista}
        id="title"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Precio detalle:{" "}
      </label>
      <input
        value={detalle}
        id="title"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Descuento detalle (%):
      </label>
      <input
        value={descuentoDetalle}
        id="title"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled
      />
    </div>
  );
};

export default SectionPrecios;
