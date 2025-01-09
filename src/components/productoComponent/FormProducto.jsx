import SectionPrecios from "./SectionPrecios";
import SectionProducto from "./SectionProducto";
import SectionCategory from "./SectionCategory";
import SubmitProduct from "./SubmitProduct";
import { useEffect, useState } from "react";
import ConfirmSubmit from "./ConfirmSubmit";
import ErrorMessage from "./ErrorMessage";

const FormProducto = ({ codigo }) => {
  const [product, setProduct] = useState({}); //Producto que es traido con fetch y se utiliza para modificar los valores si se edita el formulario
  const [loading, setLoading] = useState(true); //Estado que valida si estamos cargando el componente con fethc
  const [allowEdit, setAllowEdit] = useState(false); //Cambia el estado a edición, habilita botones y además habilita inputs
  const [originalValue, setOriginal] = useState({}); //Es el producto original que viene del fetch y no es modificado, este se utiliza en los defaultValue de los inputs
  const [confirm, setConfirm] = useState(false); //Estado que solicita confirmar si esta seguro de los cambios, despliega un menu para confirmar
  const [error, setError] = useState(""); //Se activa y pone un string si existe un error
  const [submit, setSubmit] = useState(false); //Al confirmar que si desea cambiar se realiza el submit para realizar el update y envia la información a la base de datos

  //Function for get producto
  const getProducto = async () => {
    try {
      const fetchData = await fetch(
        `http://localhost:8000/api/v0.5/webintercar/productos/${codigo}`
      );
      const { data } = await fetchData.json();
      setOriginal(data.producto);
      setProduct({...product, fk_categoria_producto: data.producto.fk_categoria_producto});
      setLoading(false);
    } catch (err) {
      console.log("error:", err);
      setLoading(false);
    }
  };

  function confirmData(e) {
    e.preventDefault();
    if (
      Object.entries(product).length == 1 &&
      product.fk_categoria_producto == originalValue.fk_categoria_producto
    ) {
      setError("¡Aún no se han realizado cambios!");
      return;
    }
    setConfirm(true);
    if (confirm) {
      setError("");
      return;
    }
  }

  function resetProduct(e) {
    setConfirm(false);
    setAllowEdit(false);
    setError("")
    setProduct({fk_categoria_producto : originalValue.fk_categoria_producto})
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
        <form className="mb-36" onReset={resetProduct}>
          <SectionProducto
            originalValue={originalValue}
            edit={allowEdit}
            product={product}
            setProduct={setProduct}
          />
          <div className="justify-center">
            <SectionCategory
              originalValue={originalValue}
              allowEdit={allowEdit}
              setProduct={setProduct}
              product={product}
            />
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
          </div>
          <SubmitProduct
            product={product}
            setAllowEdit={setAllowEdit}
            edit={allowEdit}
            confirmData={confirmData}
          />
          <ErrorMessage message={error} />
        </form>
      )}
    </>
  );
};

export default FormProducto;
