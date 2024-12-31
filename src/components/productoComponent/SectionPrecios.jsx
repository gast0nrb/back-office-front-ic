const SectionPrecios = () => {
  return (
    <div className="tablet:basis-6/12 grid grid-cols-1 mx-2">
      <h3 class="text-xl text-ic-message font-semibold text-center">
        Valores
      </h3>
      <label for="codigo" class="text-ic-gray text-xl mt-auto">
        Precio mayorista:{" "}
      </label>
      <input
        id="codigo"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled
      />
      <label for="barra" class="text-ic-gray text-xl mt-auto">
        Cantidad minima mayorista:{" "}
      </label>
      <input
        id="barra"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Precio detalle:{" "}
      </label>
      <input
        id="title"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Descuento:{" "}
      </label>
      <input
        id="title"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled
      />
    </div>
  );
};

export default SectionPrecios;
