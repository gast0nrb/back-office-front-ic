const ConfirmSubmit = ({ editProduct, confirm, setConfirm }) => {
  return (
    <>
      {confirm ? (
        <div className="bg-ic-black bg-opacity-90 fixed w-screen h-screen text-center pt-56 top-0 bottom-0">
          <div className="bg-ic-blackorange bg-opacity-50 rounded-sm p-3 phone:min-w-min">
            <h3 className="text-ic-white text-xl">¿CONFIRMAS LOS CAMBIOS REALIZADOS?</h3>
            <h3 className="text-ic-black font-medium text-lg">Cambios realizados</h3>
            <ul className="text-sm my-2">
              {Object.keys(editProduct).map((k, i) => (
                <li className="text-ic-white text-opacity-75">
                  <span className="text-ic-orange">{k}:</span> {Object.values(editProduct)[i]}
                </li>
              ))}
            </ul>
            <div className="grid tablet:grid-cols-2 phone:grid-cols-1 gap-4 text-ic-gray">
              <button
                className="bg-ic-black hover:text-ic-white hover:bg-ic-blackorange"
                onClick={() => setConfirm(false)}
              >
                Cancelar
              </button>
              <button className="bg-ic-black rounded-sm hover:text-ic-white hover:bg-ic-orange">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ConfirmSubmit;
