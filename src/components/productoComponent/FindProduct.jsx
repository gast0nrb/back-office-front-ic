import { useState } from "react";

const FindProduct = () => {
  const [currentCode, setCurrentCode] = useState("");

  return (
    <form
      action={`/producto/${currentCode}`}
      className="phone:text-center tablet:text-right mx-2 tablet:flex tablet:gap-2"
    >
      <h3 className="text-ic-gray">Buscar otro producto</h3>
      <input
        onChange={(e) => setCurrentCode(e.target.value)}
        id="code-find"
        type="text"
        className="text-ic-gray focus:text-ic-white duration-300 phone:w-2/6 focus:phone:w-3/6 tablet:w-3/12 focus:tablet:w-4/12 bg-ic-disabled rounded-sm"
      />
      <button className="bg-ic-disabled px-2 text-ic-gray hover:text-ic-white rounded-sm phone:mx-2">
        Buscar
      </button>
    </form>
  );
};

export default FindProduct;
