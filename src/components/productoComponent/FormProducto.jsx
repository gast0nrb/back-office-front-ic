import SectionPrecios from "./SectionPrecios";
import SectionProducto from "./SectionProducto";
import SectionCategory from "./SectionCategory";
import SubmitProduct from "./SubmitProduct";
import { useEffect, useState } from "react";

const FormProducto = ({ codigo }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  //Function for get producto
  const getProducto = async () => {
    try {
      const fetchData = await fetch(
        `http://localhost:8000/api/v0.5/webintercar/productos/${codigo}`
      );
      const data = await fetchData.json();
      setProduct(data);
      setLoading(false);
      console.log(product);
    } catch (err) {
      console.log("error:", err);
      setLoading(false);
    }
  };

  //Get product with fetch in mount of component
  useEffect(() => {
    getProducto();
  }, []);
  return (
    <>
      {loading ? (
        <h3>Cargando producto...</h3>
      ) : (
        <form className="mb-36">
          <SectionProducto codigo={codigo} />
          <div className="tablet:flex justify-center">
            <SectionPrecios />
            <SectionCategory />
          </div>
          <SubmitProduct />
        </form>
      )}
    </>
  );
};

export default FormProducto;
