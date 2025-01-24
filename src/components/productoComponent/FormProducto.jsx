import SectionPrecios from "./SectionPrecios";
import SectionProducto from "./SectionProducto";
import SectionCategory from "./SectionCategory";
import { useEffect, useState } from "react";
import ConfirmSubmit from "./ConfirmSubmit";
import ErrorMessage from "./ErrorMessage";
import Succesfully from "./Successfully.jsx";
import ButtonsForm from "./ButtonsForm.jsx";
import CreateEdit from "./CreateEdit.jsx"

const FormProducto = ({ codigo }) => {
  const [product, setProduct] = useState({}); //Se utiliza para ver los cambios realizados en un producto
  const [allowEdit, setAllowEdit] = useState(false); //Cambia el estado a edición, habilita botones y además habilita inputs
  const [originalValue, setOriginal] = useState({}); //Es el producto original que viene del fetch y no es modificado, este se utiliza en los defaultValue de los inputs
  
  //ESTADOS PARA MANEJAR EL FORMULARIO, DEsPLEGAR CONFIRMACIONES Y PERMITIR EDICIONES
  const [confirm, setConfirm] = useState(false); //Estado que solicita confirmar si esta seguro de los cambios, despliega un menu para confirmar
  const [error, setError] = useState(""); //Se activa y pone un string si existe un error
  const [submit, setSubmit] = useState(false); //Al confirmar que si desea cambiar se realiza el submit para realizar el update y envia la información a la base de datos

  /*Separación de las listas de precios, para hacer posteriormente el fetch update de estos valores.*/
  const [detalle, setDetalle] = useState({ fk_lista: 2 });
  const [mayorista, setMayorista] = useState({ fk_lista: 1 });

  //Setea si el formulario esta en estado crear o en estado editar
  const [isCreate, setCreate] = useState(false);

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
  async function submitProduct(e) {
    console.log("Submit producto")
    /*
    await changePrecio(originalValue.ListaProductos, mayorista, codigo);
    await changePrecio(originalValue.ListaProductos, detalle, codigo);
    await putProducto(product, codigo);
    */
  }

  //Get product with fetch in mount of component
  useEffect(() => {
    getProducto();
  }, []);

  return (
    <>
      <form className="mb-36" onSubmit={submitProduct}>
      <CreateEdit 
        setCreate={setCreate}
        isCreate={isCreate}
        /> 
      <ConfirmSubmit
        confirm={confirm}
        detalle={detalle}
        mayor={mayorista}
        product={product}
        setConfirm={setConfirm}
      />
        <SectionProducto
          originalValue={originalValue}
          setOriginal={setOriginal}
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
        <ButtonsForm
          setAllowEdit={setAllowEdit}
          edit={allowEdit}
        />
        <ErrorMessage message={error} setError={setError} />
        <Succesfully submit={submit} setSubmit={setSubmit} />
      </form>
    </>
  );
};

export default FormProducto;
