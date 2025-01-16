async function updatePrecio (precio) {}

async function postPrecio (precio) {}
async function changePrecio(originalPrecios, precio) {
	//Valida que hayan cambios en el objeto entregado
	if(Object.entries(precio).length > 2){
		//si encuentra el valor igual, realizar update
		if(originalPrecios?.fk_lista == precio.fk_lista){
			updatePrecio(precio);
		}else{
			postPrecio(precio);
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
          
