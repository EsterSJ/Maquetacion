let carrito = [];
let totalCompra = 0;

//Guardar todos los productos en un array para luego mostrarlos y calcular el total de la compra
let producto = $('.producto');

producto.on( "click", function() {

        let productoAdd = {
            articulo: $(this).attr("name"),
            precio: $(this).attr("value")
        }
        carrito.push(productoAdd);
        totalCompra += Number(productoAdd.precio);
        console.log("Total compra: " + totalCompra);
  });

  //añadir la lista de la compra al body componente modal
  $("#carrito").on("click", function(){
        let lista = "";
        let i;
        for (i = 0; i < carrito.length; i++) {
            lista += `<li> ${carrito[i].articulo} - ${carrito[i].precio}</li>`;
        }
        $('#lista').html(lista);   
        $('#total').html(`<p> Total compra: ${totalCompra} €</p>`);
    });
