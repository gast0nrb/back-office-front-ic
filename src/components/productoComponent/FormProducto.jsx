import SectionPrecios from "./SectionPrecios";
import SectionProducto from "./SectionProducto";
import SectionCategory from "./SectionCategory";
import { useEffect, useState } from "react";
import ConfirmSubmit from "./ConfirmSubmit";
import ErrorMessage from "./ErrorMessage";
import Succesfully from "./Successfully.jsx";
import ButtonsForm from "./ButtonsForm.jsx";
import CreateEdit from "./CreateEdit.jsx";


const FormProducto = ({ codigo  }) => {
  const [allowEdit, setAllowEdit] = useState(false); //Cambia el estado a edición, habilita botones y además habilita inputs
  const [originalValue, setOriginal] = useState({}); //Es el producto original que viene del fetch y no es modificado, este se utiliza en los defaultValue de los inputs

  //ESTADOS PARA MANEJAR EL FORMULARIO, DEsPLEGAR CONFIRMACIONES Y PERMITIR EDICIONES
  const [confirm, setConfirm] = useState(false); //Estado que solicita confirmar si esta seguro de los cambios, despliega un menu para confirmar
  const [error, setError] = useState(""); //Se activa y pone un string si existe un error
  const [submit, setSubmit] = useState(false); //Al confirmar que si desea cambiar se realiza el submit para realizar el update y envia la información a la base de datos
  const [loading, setLoading] = useState(true);

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
    console.log("Submit producto");
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

  if (loading) {
    return <h3>Cargando info...</h3>;
  }
  if (!loading && Object.keys(originalValue).length == 0) {
    return (
      <div>
        <h3 className="text-center text-ic-message">
          El código{" "}
          <span className="underline text-ic-blackorange">{codigo}</span> no
          existe... ¡Prueba con otro!
        </h3>
      </div>
    );
  }

  return (
    <>
      <form className="mb-36" onSubmit={submitProduct}>
        <CreateEdit setCreate={setCreate} isCreate={isCreate} />
        <ConfirmSubmit
          confirm={confirm}
          product={originalValue}
          setConfirm={setConfirm}
        />
        <SectionProducto
          originalValue={originalValue}
          setOriginal={setOriginal}
          allowEdit={allowEdit}
        />
        <div className="justify-center">
          <SectionCategory
            allowEdit={allowEdit}
            originalValue={originalValue}
            setOriginal={setOriginal}
          />
          <SectionPrecios
            allowEdit={allowEdit}
            originalValue={originalValue.ListaProductos}
          />
        </div>
        <ButtonsForm setAllowEdit={setAllowEdit} edit={allowEdit} />
        <ErrorMessage message={error} setError={setError} />
        <Succesfully submit={submit} setSubmit={setSubmit} />
      </form>
    </>
  );
};

export default FormProducto;
