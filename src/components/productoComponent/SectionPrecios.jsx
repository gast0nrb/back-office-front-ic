const SectionPrecios = ({ allowEdit, precios, setMayorista, setDetalle, detalle, mayorista }) => {
  return (
    <div className="tablet:basis-6/12 grid grid-cols-1 mx-2">
      <h3 class="text-xl text-ic-message font-semibold text-center">Valores</h3>
      <label for="codigo" class="text-ic-gray text-xl mt-auto">
        Precio mayor:
      </label>
      <input
        id="monto-mayorista"
        defaultValue={0}
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        required
      />
      <label for="barra" class="text-ic-gray text-xl mt-auto">
        Cantidad minima mayor:
      </label>
      <input
        defaultValue={0}
        id="cantidad_min_mayor"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Descuento mayor (%):
      </label>
      <input
        defaultValue={0}
        id="descuento-mayor"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Precio detalle:
      </label>
      <input
        defaultValue={0}
        id="precio-detalle"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
      />
      <label for="descuento-detalle" class="text-ic-gray text-xl mt-auto">
        Descuento detalle (%):
      </label>
      <input
        defaultValue={0}
        id="descuento-detalle"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
      />
    </div>
  );
};

export default SectionPrecios;
