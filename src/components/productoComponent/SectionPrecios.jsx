import { useEffect, useState } from "react";

const SectionPrecios = ({ allowEdit, setEditProduct, precios, editProduct }) => {
  
  return (
    <div className="tablet:basis-6/12 grid grid-cols-1 mx-2">
      <h3 class="text-xl text-ic-message font-semibold text-center">Valores</h3>
      <label for="codigo" class="text-ic-gray text-xl mt-auto">
        Precio mayor:
      </label>
      <input
        id="codigo"
        defaultValue={0}
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
      />
      <label for="barra" class="text-ic-gray text-xl mt-auto">
        Cantidad minima mayor:
      </label>
      <input
        id="barra"
        defaultValue={0}
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Descuento mayor (%):
      </label>
      <input
        defaultValue={0}
        id="title"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Precio detalle:
      </label>
      <input
        defaultValue={0}
        id="title"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Descuento detalle (%):
      </label>
      <input
        defaultValue={0}
        id="title"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
      />
    </div>
  );
};

export default SectionPrecios;
