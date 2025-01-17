async function updatePrecio (precio) {
	console.log("Updating precio")
	console.log("----------------")
	console.log("::", precio)
}

async function postPrecio (precio) {
	/*EL precio al ser posteador debe ir con
	- Cantidad minima incluida en detalle como 1.
	*/
	console.log("Posting precio")
	console.log("----------------")
	console.log("::", precio)
}

export async function changePrecio(originalPrecios, precio) {
	//Valida que hayan cambios en el objeto entregado
	if(Object.keys(precio).length > 1){
		originalPrecios.map((og)=> {
			//si encuentra el valor igual, realizar update
			if(og.fk_lista == precio.fk_lista){
				updatePrecio(precio);
			}else{
				postPrecio(precio);
			}
		})
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
          
