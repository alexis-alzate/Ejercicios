function buscarElemento(array,elemento){
    for(let i= 0; i <array.length; i++){
        if(array[i] ===elemento){
            return i;
        }
    }
       
     console.log("elemento no encontrado")
     return;
}
            
     const productos = ["moneda", "dollar", "euro"]
     console.log(buscarElemento(productos, "moneda"));
     console.log(buscarElemento(productos, "dollar"));
     buscarElemento(productos,"yen");