export async function putProducto(product, codigo) {
  try {
    console.log("updating the product")
    const putProducto = await fetch(
      `http://localhost:8000/api/v0.5/webintercar/productos/${codigo}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    //Setear el producto original
  } catch (err) {
    console.error(err);
  }
}
