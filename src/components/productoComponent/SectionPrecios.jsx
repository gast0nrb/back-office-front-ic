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
        defaultValue={
          precios.some((p)=> p.fk_lista == 1)
          ?
          precios.filter((price)=> price.fk_lista == 1)[0].monto
          :
          'Sin valor'
        }
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
      />
      <label for="barra" class="text-ic-gray text-xl mt-auto">
        Cantidad minima mayor:
      </label>
      <input
        defaultValue={
         precios.some((p)=> p.fk_lista == 1)
          ?
          precios.filter((price)=> price.fk_lista == 1)[0].cantidad_min
          :
          'Sin valor'
        }
        id="barra"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Descuento mayor (%):
      </label>
      <input
        defaultValue={
         precios.some((p)=> p.fk_lista == 1)
          ?
          precios.filter((price)=> price.fk_lista == 1)[0].descuento
          :
            'Sin valor'
        }
        id="title"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Precio detalle:
      </label>
      <input
        defaultValue={
          precios.some((p)=> p.fk_lista == 2)
          ?
          precios.filter((price)=> price.fk_lista == 2)[0].monto
          :
          'Sin valor'
        }
        id="title"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Descuento detalle (%):
      </label>
      <input
        defaultValue={
           precios.some((p)=> p.fk_lista == 2)
          ?
          precios.filter((price)=> price.fk_lista == 2)[0].descuento
          :
          'Sin valor'
        }
        id="title"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
      />
    </div>
  );
};

export default SectionPrecios;
