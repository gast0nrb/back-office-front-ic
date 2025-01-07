import SectionPrecios from "./SectionPrecios";
import SectionProducto from "./SectionProducto";
import SectionCategory from "./SectionCategory";
import SubmitProduct from "./SubmitProduct";
import { useEffect, useState } from "react";
import ConfirmSubmit from "./ConfirmSubmit";
import ErrorMessage from "./ErrorMessage";

const FormProducto = ({ codigo }) => {
  const [product, setProduct] = useState({}); //Es el producto que se trae con fetch
  const [loading, setLoading] = useState(true); //Estado que valida si estamos cargando el componente con fethc
  const [allowEdit, setAllowEdit] = useState(false); //Cambia el estado a edición, habilita botones y además habilita inputs
  const [editProduct, setEditProduct] = useState({}); //Es el producto que se enviará como update
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
      setProduct(data.producto);
      setLoading(false);
    } catch (err) {
      console.log("error:", err);
      setLoading(false);
    }
  };

  function updateProduct() {
    if (Object.entries(editProduct).length == 0) {
      setError("¡No se puede modificar sino se realizaron cambios!");
      return;
    }
    setError("");
    setConfirm(true);

    //Chequear si submit es true para continuar con el update
    /*try {
      //update product
    } catch (err) {
      //Check errors
    } finally {
      setAllowEdit(false);
      setProduct({ ...product, ...editProduct });
      setEditProduct({});
      setSubmit(false);
      setConfirm(false)
    }*/
  }

  //Get product with fetch in mount of component
  useEffect(() => {
    getProducto();
  }, []);
  return (
    <>
      <ConfirmSubmit
        editProduct={editProduct}
        confirm={confirm}
        setConfirm={setConfirm}
      />
      {loading ? (
        <h3>Cargando producto...</h3>
      ) : (
        <form
          className="mb-36"
          onReset={() => {
            setAllowEdit(false);
            setEditProduct({});
            setError("");
          }}
          action={updateProduct}
        >
          <SectionProducto
            product={product}
            edit={allowEdit}
            setEditProduct={setEditProduct}
            editProduct={editProduct}
          />
          <div className="tablet:flex justify-center">
            <SectionPrecios
              detalle={
                product.ListaProductos.some((vl) => vl.fk_lista == 2)
                  ? product.ListaProductos.filter((lp) => lp.fk_lista == 2)[0]
                      .monto
                  : "Sin precio"
              }
              mayorista={
                product.ListaProductos.some((vl) => vl.fk_lista == 1)
                  ? product.ListaProductos.filter((lp) => lp.fk_lista == 1)[0]
                      .monto
                  : "Sin precio"
              }
              cantidadMinimaMayor={
                product.ListaProductos.some((vl) => vl.fk_lista == 1)
                  ? product.ListaProductos.filter((lp) => lp.fk_lista == 1)[0]
                      .cantidad_min
                  : "Sin precio"
              }
              descuentoMayorista={
                product.ListaProductos.some((vl) => vl.fk_lista == 1)
                  ? product.ListaProductos.filter((lp) => lp.fk_lista == 1)[0]
                      .descuento
                  : "Sin descuento"
              }
              descuentoDetalle={
                product.ListaProductos.some((vl) => vl.fk_lista == 2)
                  ? product.ListaProductos.filter((lp) => lp.fk_lista == 2)[0]
                      .descuento
                  : "Sin descuento"
              }
              edit={allowEdit}
              editProduct={editProduct}
              setEditProduct={setEditProduct}
            />
            <SectionCategory
              activo={product.activo}
              categoria={product.CATEGORIum}
              allowEdit={allowEdit}
              editProduct={editProduct}
              setEditProduct={setEditProduct}
              product={product}
            />
          </div>
          <SubmitProduct
            setProduct={setProduct}
            product={product}
            editProduct={editProduct}
            setEditProduct={setEditProduct}
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
