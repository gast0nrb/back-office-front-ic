async function updatePrecio(precio, codigo) {
  const putPrecio = await fetch(
    `http://localhost:8000/api/v0.5/webintercar/productos/${codigo}/precios/${precio.fk_lista}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...precio }),
    }
  );
}

async function postPrecio(precio, codigo) {
  /*EL precio al ser posteador debe ir con
	- Cantidad minima incluida en detalle como 1.
	*/
  try {
    const postPrecio = await fetch(
      `http://localhost:8000/api/v0.5/webintercar/productos/precios`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ ...precio, fk_producto: codigo }),
      }
    );
  } catch (err) {
    console.log(err);
  }
}

export async function changePrecio(originalPrecios, precio, codigo) {
  //Valida que hayan cambios en el objeto entregado
  if (Object.keys(precio).length > 1) {
    originalPrecios.map((og, i) => {
      //si encuentra el valor igual, realizar update
      if (og.fk_lista == precio.fk_lista) {
        updatePrecio(precio, codigo);
      }
    });
    const value = originalPrecios.filter((o) => {
      return o.fk_lista == precio.fk_lista;
    }).length;
    if (value == 0) {
      console.log("posting");
      postPrecio(precio, codigo);
    }
  }
}

/*try {
       const fetchApi = await fetch(`http://localhost:8000/api/v0.5/webintercar/productos/${codigo}`, {
        method : 'PUT', 
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
})
	*/
