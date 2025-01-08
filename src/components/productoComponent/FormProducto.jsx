import SectionPrecios from "./SectionPrecios";
import SectionProducto from "./SectionProducto";
import SectionCategory from "./SectionCategory";
import SubmitProduct from "./SubmitProduct";
import { PureComponent, useEffect, useState } from "react";
import ConfirmSubmit from "./ConfirmSubmit";
import ErrorMessage from "./ErrorMessage";

const FormProducto = ({ codigo }) => {
  const [product, setProduct] = useState({}); //Es el producto que se trae con fetch y que se modifica para enviar en el update
  const [loading, setLoading] = useState(true); //Estado que valida si estamos cargando el componente con fethc
  const [allowEdit, setAllowEdit] = useState(false); //Cambia el estado a edición, habilita botones y además habilita inputs
  const [originalValue, setOriginal] = useState({}); //Es el producto original que viene del fetch
  const [confirm, setConfirm] = useState(false); //Estado que solicita confirmar si esta seguro de los cambios
  const [error, setError] = useState(""); //Verifica que si hayan datos para enviar en el form
  const [submit, setSubmit] = useState(false); //Al confirmar que si desea cambiar se realiza el submit para realizar el update y envia la información a la base de datos

  //Function for get producto
  const getProducto = async () => {
    try {
      const fetchData = await fetch(
        `http://localhost:8000/api/v0.5/webintercar/productos/${codigo}`
      );
      const { data } = await fetchData.json();
      setOriginal(data.producto);
      setLoading(false);
    } catch (err) {
      console.log("error:", err);
      setLoading(false);
    }
  };

  function updateProduct() {
    if (Object.entries(product).length == 0) {
      setError("¡Aún no se han realizado cambios!");
      return;
    }
    setConfirm(true);
    if (confirm) {
      setError("");
      return;
    }
  }

  function resetProduct() {
    setConfirm(false);
    setAllowEdit(false);
    setProduct({});
  }

  //Get product with fetch in mount of component
  useEffect(() => {
    getProducto();
  }, []);
  return (
    <>
      <ConfirmSubmit
        product={product}
        setProduct={setProduct}
        confirm={confirm}
        setConfirm={setConfirm}
      />
      {loading ? (
        <h3>Cargando producto...</h3>
      ) : (
        <form className="mb-36" onReset={resetProduct} action={updateProduct}>
          <SectionProducto
            originalValue={originalValue}
            edit={allowEdit}
            setProduct={setProduct}
          />
          <div className="tablet:flex justify-center">
            <SectionPrecios
              detalle={
                originalValue.ListaProductos.some((vl) => vl.fk_lista == 2)
                  ? originalValue.ListaProductos.filter(
                      (lp) => lp.fk_lista == 2
                    )[0].monto
                  : "Sin precio"
              }
              mayorista={
                originalValue.ListaProductos.some((vl) => vl.fk_lista == 1)
                  ? originalValue.ListaProductos.filter(
                      (lp) => lp.fk_lista == 1
                    )[0].monto
                  : "Sin precio"
              }
              cantidadMinimaMayor={
                originalValue.ListaProductos.some((vl) => vl.fk_lista == 1)
                  ? originalValue.ListaProductos.filter(
                      (lp) => lp.fk_lista == 1
                    )[0].cantidad_min
                  : "Sin precio"
              }
              descuentoMayorista={
                originalValue.ListaProductos.some((vl) => vl.fk_lista == 1)
                  ? originalValue.ListaProductos.filter(
                      (lp) => lp.fk_lista == 1
                    )[0].descuento
                  : "Sin descuento"
              }
              descuentoDetalle={
                originalValue.ListaProductos.some((vl) => vl.fk_lista == 2)
                  ? originalValue.ListaProductos.filter(
                      (lp) => lp.fk_lista == 2
                    )[0].descuento
                  : "Sin descuento"
              }
              edit={allowEdit}
              product={product}
              setProduct={setProduct}
            />
            <SectionCategory
              allowEdit={allowEdit}
              setProduct={setProduct}
              product={product}
            />
          </div>
          <SubmitProduct
            setProduct={setProduct}
            product={product}
            setAllowEdit={setAllowEdit}
            edit={allowEdit}
          />
          <ErrorMessage message={error} />
        </form>
      )}
    </>
  );
};

export default FormProducto;
