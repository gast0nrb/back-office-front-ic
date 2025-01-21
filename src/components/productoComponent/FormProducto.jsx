import SectionPrecios from "./SectionPrecios";
import SectionProducto from "./SectionProducto";
import SectionCategory from "./SectionCategory";
import SubmitProduct from "./SubmitProduct";
import { useEffect, useState } from "react";
import ConfirmSubmit from "./ConfirmSubmit";
import ErrorMessage from "./ErrorMessage";
import Succesfully from "./Successfully.jsx";

const FormProducto = ({ codigo }) => {
  const [product, setProduct] = useState({}); //Producto que es traido con fetch y se utiliza para modificar los valores si se edita el formulario
  const [loading, setLoading] = useState(true); //Estado que valida si estamos cargando el componente con fethc
  const [allowEdit, setAllowEdit] = useState(false); //Cambia el estado a edición, habilita botones y además habilita inputs
  const [originalValue, setOriginal] = useState({}); //Es el producto original que viene del fetch y no es modificado, este se utiliza en los defaultValue de los inputs
  const [confirm, setConfirm] = useState(false); //Estado que solicita confirmar si esta seguro de los cambios, despliega un menu para confirmar
  const [error, setError] = useState(""); //Se activa y pone un string si existe un error
  const [submit, setSubmit] = useState(false); //Al confirmar que si desea cambiar se realiza el submit para realizar el update y envia la información a la base de datos

  /*Separación de las listas de precios, para hacer posteriormente el fetch update de estos valores.*/
  const [detalle, setDetalle] = useState({ fk_lista: 2 });
  const [mayorista, setMayorista] = useState({ fk_lista: 1 });

  /*Obtiene los datos mediante fetch del producto especifico.*/
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

  /*Al presionar guardar, se renderiza si el producto fue editado o no.
   **/
  function confirmData(e) {
    let check = true;
    if (Object.entries(product).length > 0) {
      check = false;
    }
    if (Object.keys(mayorista).length > 1) {
      check = false;
    }
    if (Object.keys(detalle).length > 1) {
      check = false;
    }
    e.preventDefault();
    if (check) {
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
    setError("");
    setProduct({});
    setMayorista({ fk_lista: 1 });
    setDetalle({ fk_lista: 2 });
  }

  //Get product with fetch in mount of component
  useEffect(() => {
    getProducto();
  }, []);

  if (loading) {
    return <h3>Cargandoo....</h3>;
  }
  return (
    <>
      <ConfirmSubmit
        setProduct={setProduct}
        confirm={confirm}
        setConfirm={setConfirm}
        product={product}
        mayor={mayorista}
        detalle={detalle}
        codigo={codigo}
        originalValue={originalValue}
        setSubmit={setSubmit}
        resetProduct={resetProduct}
      />
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
            allowEdit={allowEdit}
            precios={originalValue.ListaProductos}
            setMayorista={setMayorista}
            setDetalle={setDetalle}
            detalle={detalle}
            mayorista={mayorista}
          />
        </div>
        <SubmitProduct
          setAllowEdit={setAllowEdit}
          edit={allowEdit}
          confirmData={confirmData}
        />
        <ErrorMessage message={error} setError={setError} />
        <Succesfully submit={submit} setSubmit={setSubmit} />
      </form>
    </>
  );
};

export default FormProducto;
