class Producto {
    constructor( nombre, precio, stock) {

        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos () {
        console.log("<------------>")
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("stock: ", this.stock);
        console.log("");
    } 

    get_stock(){
        
        if( this.stock <= 0){
            return false
        }
        else{
            return true
        }

    }

    update_stock( cantidad ){
        if( this.stock >= cantidad ){
            this.stock = this.stock - cantidad
            return true;
        }
        else{
            console.log( "Stock no suficiente" )
            return false
        }
    }
}

//ALTA DE PRODUCTOS//

let lista_productos = [];

for( let i=0 ; i < 4 ; i = i + 1){

    let nombre= prompt("Ingrese el nombre del producto");
    let precio= prompt("Ingrese el precio del producto");
    let stock= prompt("Ingrese el stock del producto");

    let producto = new Producto( nombre, precio, stock);

    lista_productos.push(producto);
}

console.log( lista_productos );

//FIN ALTA PRODUCTOS

//INICIO  RENDER PRODUCTOS

for( let producto of lista_productos ) { 
    producto.get_datos();
}

//FIN RENDER PRODUCTOS

// SIMULO UNA COMPRA //

function buscar_producto( producto ){

    return producto.nombre == compra_usuario
}

let compra_usuario = prompt("Ingrese el producto que quiere comprar");

let resultado_find = lista_productos.find( buscar_producto );

console.log( resultado_find );

if( resultado_find != undefined ){ 

    //COMPRA
    if( resultado_find.get_stock() ){
        let unidades = prompt("¿Cuantas unidades querés comprar?");
        if( resultado_find.update_stock( unidades )){
            console.log( "Gracias por su compra")
        }
        else{
            console.log( "No se pudo realizar la compra")
        }
    }
    else{
        console.log("No tenemos stock del producto")
    }

}
else{
    console.log("Producto no encontrado")
}