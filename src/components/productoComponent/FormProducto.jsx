import SectionPrecios from "./SectionPrecios";
import SectionProducto from "./SectionProducto";
import SectionCategory from "./SectionCategory";
import SubmitProduct from "./SubmitProduct";
import { useEffect, useState } from "react";

const FormProducto = ({ codigo }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [allowEdit, setAllowEdit] = useState(false);
  const [editProduct, setEditProduct] = useState({});

  //Function for get producto
  const getProducto = async () => {
    try {
      const fetchData = await fetch(
        `http://localhost:8000/api/v0.5/webintercar/productos/${codigo}`
      );
      const data = await fetchData.json();
      setProduct(data.data.producto);
      setLoading(false);
    } catch (err) {
      console.log("error:", err);
      setLoading(false);
    }
  };

  //Get product with fetch in mount of component
  useEffect(() => {
    getProducto();
    console.log(product);
  }, []);
  return (
    <>
      {loading ? (
        <h3>Cargando producto...</h3>
      ) : (
        <form className="mb-36">
          <SectionProducto
            file={product.file}
            titulo={product.titulo}
            descripcion={product.descripcion}
            barra={product.barra}
            codigo={codigo}
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
          <SubmitProduct setProduct={setProduct} product={product} editProduct={editProduct} setAllowEdit={setAllowEdit} edit={allowEdit}/>
        </form>
      )}
    </>
  );
};

export default FormProducto;
