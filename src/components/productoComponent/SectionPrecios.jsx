import { useState } from "react";
import InputForm from "./InputForm";

const SectionPrecios = ({ allowEdit, originalValue }) => {
  //Precios seteo
  const [mayor, setMayor] = useState(
    originalValue.filter((p) => p.fk_lista == 1)[0]
  );
  const [detalle, setDetalle] = useState(
    originalValue.filter((p) => p.fk_lista == 2)[0]
  );
  return (
    <div className="tablet:basis-6/12 grid grid-cols-1 mx-2">
      <h3 class="text-xl text-ic-message font-semibold text-center">Valores</h3>
      <label for="codigo" class="text-ic-gray text-xl mt-auto">
        Precio mayor:
      </label>
      <input
        id="monto-mayorista"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        required
        value={mayor?.monto ? mayor.monto : ""}
        onChange={(e) => setMayor({ ...mayor, monto: e.target.value })}
      />
      <label for="barra" class="text-ic-gray text-xl mt-auto">
        Cantidad minima mayor:
      </label>
      <input
        value={mayor?.cantidad_min ? mayor.cantidad_min : ""}
        id="cantidad_min_mayor"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        onChange={(e) => setMayor({ ...mayor, cantidad_min: e.target.value })}
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Descuento mayor (%):
      </label>
      <input
        value={mayor?.descuento ? mayor.descuento : ""}
        id="descuento-mayor"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        onChange={(e) => setMayor({ ...mayor, descuento: e.target.value })}
      />
      <label for="title" class="text-ic-gray text-xl mt-auto">
        Precio detalle:
      </label>
      <input
        value={detalle?.monto ? detalle.monto : ""}
        id="precio-detalle"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        onChange={(e) => setDetalle({ ...detalle, monto: e.target.value })}
      />
      <label for="descuento-detalle" class="text-ic-gray text-xl mt-auto">
        Descuento detalle (%):
      </label>
      <input
        value={detalle?.descuento ? detalle.descuento : ""}
        id="descuento-detalle"
        className="bg-ic-disabled rounded-sm text-center text-ic-orange text-lg"
        onChange={(e) => setDetalle({ ...detalle, descuento: e.target.value })}
      />
    </div>
  );
};

export default SectionPrecios;
