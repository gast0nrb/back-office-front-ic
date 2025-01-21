import { useEffect } from "react";

const Succesfully = ({ submit, setSubmit }) => {
  useEffect(() => {
    setTimeout(() => {
      setSubmit(false);
    }, 5000);
  }, [submit]);
  if (submit == true) {
    return (
      <h3 className="text-center text-ic-black bg-ic-orange w-2/3 mx-auto rounded-sm">
        ¡Producto actualizado correctamente!
      </h3>
    );
  }
};

export default Succesfully;
