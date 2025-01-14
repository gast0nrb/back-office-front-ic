const SectionPrecios = ({ allowEdit, precios, setMayorista, setDetalle, detalle, mayorista }) => {
  return (
    <div className="tablet:basis-6/12 grid grid-cols-1 mx-2">
      <h3 class="text-xl text-ic-message font-semibold text-center">Valores</h3>
      <label for="codigo" class="text-ic-gray text-xl mt-auto">
        Precio mayor:
      </label>
      <input
        id="monto-mayorista"
        defaultValue={
          precios.some((p)=> p.fk_lista == 1)
          ?
          precios.filter((price)=> price.fk_lista == 1)[0].monto
          :
          'Sin valor'
        }
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
        required
        onChange={(e)=> {
          setMayorista({...mayorista, monto : e.target.value})
        }}
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
        id="cantidad_min_mayor"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
        onChange={(e)=> {
          setMayorista({...mayorista, cantidad_min : e.target.value})
        }}  
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
        id="descuento-mayor"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
        onChange={(e)=> {
          setMayorista({...mayorista, descuento : e.target.value})
        }}
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
        id="precio-detalle"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
        onChange={(e)=> {
          setDetalle({...detalle, monto : e.target.value })
        }}
      />
      <label for="descuento-detalle" class="text-ic-gray text-xl mt-auto">
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
        id="descuento-detalle"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        disabled={!allowEdit}
        onChange={(e)=> {
          setDetalle({...detalle, descuento : e.target.value})
        }}
      />
    </div>
  );
};

export default SectionPrecios;
