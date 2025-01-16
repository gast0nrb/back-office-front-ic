const ConfirmSubmit = ({ originalValue, product, confirm, setConfirm, mayor, detalle, codigo}) => {

  async function updateProducto() {

  }
  async function changePrecio () {
    let method = 'PUT'
    const url = `http://localhost:8000/api/v0.5/webintercar/productos/${codigo}`
    if (originalValue.ListaProductos.length <= 1) {
      method = 'POST'
    }
    try{
      console.log(mayor, detalle)
    }catch(err){
      console.log("err")
    }finally {
      console.log("setear valores")
    }
    /*try {
       const fetchApi = await fetch(`http://localhost:8000/api/v0.5/webintercar/productos/${codigo}`, {
        method : 'PUT', 
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          
        })
      })
*/
  }

  return (
    <>
      {confirm ? (
        <div
          className={` bg-ic-black bg-opacity-90 fixed w-screen h-screen text-center phone:pt-5 tablet:pt-10 top-0`}
        >
          <div className="bg-ic-blackorange bg-opacity-50 rounded-sm p-3 phone:min-w-min">
            <h3 className="text-ic-white text-xl">
              ¿CONFIRMAS LOS CAMBIOS REALIZADOS?
            </h3>
            <h3 className="text-ic-black underline font-semibold text-lg">
              Cambios realizados
            </h3>
            <ul className="text-sm mb-2">
              <h3 className="font-semibold text-ic-gray">Propiedades del producto</h3>
              {Object.keys(product).map((k, i) => (
                <li className="text-ic-white text-opacity-75" key={i}>
                  <span className="text-ic-orange">{k}:</span>
                  {Object.values(product)[i]}
                </li>
              ))}
              {
                Object.keys(mayor).length == 1 ?
                <></>
                :
                <>
                <h3 className="font-semibold text-ic-gray">Valores mayorista</h3>
                {
                  Object.keys(mayor).map((k,i)=> (
                    <li className="text-ic-white text-opacity-75">
                      <span className="text-ic-orange">{k}: </span> {Object.values(mayor)[i]}</li>
                  ))
                }
                </>
              }
              {
                Object.keys(detalle).length == 1 ?
                <></>
                :
                <>
                <h3 className="font-semibold text-ic-gray">Valores detalle</h3>
                {
                  Object.keys(detalle).map((k,i)=> (
                    <li className="text-ic-white text-opacity-75">
                      <span className="text-ic-orange">{k}: </span> {Object.values(detalle)[i]}</li>
                  ))
                }
                </>
              }
            </ul>
            <div className="grid tablet:grid-cols-2 phone:grid-cols-1 gap-4 text-ic-gray">
              <button
                className="bg-ic-black hover:text-ic-white hover:bg-ic-blackorange"
                onClick={() => setConfirm(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-ic-black rounded-sm hover:text-ic-white hover:bg-ic-orange"
                onClick={updateProducto}
              >
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
