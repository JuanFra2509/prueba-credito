//constantes
const itemProductos = document.getElementById('itemProductos');
const divProductos = document.getElementById('divProductos');
const formAltaProd = document.getElementById('formAltaProd');
const listaProductos = document.getElementById('listaProductos');
const filasProducto = document.getElementById('filasProducto');
const mensaje = document.getElementById('mensaje');
const itemPlazos = document.getElementById('itemPlazos');
const divPlazos = document.getElementById('divPlazos');
const formAltaPlazo = document.getElementById('formAltaPlazo');
const mensajePlazo = document.getElementById('mensajePlazo');
const contenedor_plazo = document.getElementById('contenedor_plazo');
const btn_lista_plazo = document.getElementById('btn_lista_plazo');
const divCreditos = document.getElementById('divCreditos');
const itemCreditos = document.getElementById('itemCreditos');


//evento de click
itemProductos.addEventListener('click',e=>{
    console.log('click productos');
    divProductos.style.display=''; //quita el atributo none
    divPlazos.style.display='none';//ocultamos el display plazos
    divCreditos.style.display='none';//ocultamos el display creditos
});

itemPlazos.addEventListener('click',e=>{
    console.log('click plazos');
    divPlazos.style.display='';
    divProductos.style.display='none';//ocultamos el display productos
    divCreditos.style.display='none';//ocultamos el display creditos

});

itemCreditos.addEventListener('click',e=>{
    console.log('click creditos');
    divCreditos.style.display='';
    divProductos.style.display='none';//ocultamos el display productos
    divPlazos.style.display='none';//ocultamos el display plazos
});





//evento submit
formAltaProd.addEventListener('submit',e=>{
    console.log('submit');
    e.preventDefault();//evitamos que recargue
    let formData = new FormData(formAltaProd);
    fetch('php/main.php?option=insertProducto',{
        method:'POST',
        mode:'cors',
        body:formData
    })
    .then(response=>response.json())
    .then(data=>{
        console.log('Data',data)
        formAltaProd.reset()//reinicia el formulario una vez insertados los datos
        data.forEach((val,ind)=>{
            mensaje.innerHTML=`${val.mensaje}`

        })
    })
    .catch(error=>{
        console.error('Error:', error)
    })
});

listaProductos.addEventListener('click',e=>{
    console.log('lista productos')
    filasProducto.innerHTML='';//limpia la tabla con los datos a mostrar
    fetch('php/main.php?option=listaProducto',{
        method:'GET',
        mode:'cors'
    })
    .then(response=>response.json())
    .then(data=>{
        console.log('Lista',data)
        data.forEach((val,ind)=>{
           filasProducto.innerHTML+=`<tr>
           <td>${ind+1}</td>
           <td>${val.sku}</td>
           <td>${val.nombre}</td>
           <td>${val.descripcion}</td>
           <td>${val.precio}</td>
           <td><a href="#" onclick="modificar(${val.id_producto})">Modificar</a></td>
           <td><a href="#" onclick="eliminar(${val.id_producto})">Eliminar</a></td>
         </tr>`; 

        })
    })
    .catch(error=>{
        console.error('Error:', error)
    })
});

formAltaPlazo.addEventListener('submit',e=>{
    console.log('submit plazo');
    e.preventDefault();//evitamos que recargue
    let formData = new FormData(formAltaPlazo);
    fetch('php/main.php?option=insertPlazo',{
        method:'POST',
        mode:'cors',
        body:formData
    })
    .then(response=>response.json())
    .then(data=>{
        console.log('Data_plazo',data)
        formAltaPlazo.reset()//reinicia el formulario una vez insertados los datos
        data.forEach((val,ind)=>{
            mensajePlazo.innerHTML=`${val.mensajePlazo}`

        })
    })
    .catch(error=>{
        console.error('Error:', error)
    })
});

btn_lista_plazo.addEventListener('click',e=>{
    console.log('lista plazo')
    filasPlazo.innerHTML='';//limpia la tabla con los datos a mostrar
    fetch('php/main.php?option=listaPlazos',{
        method:'GET',
        mode:'cors'
    })
    .then(response=>response.json())
    .then(data=>{
        console.log('Lista plazos',data)
        data.forEach((val,ind)=>{
            filasPlazo.innerHTML+=`<tr>
           <td>${ind+1}</td>
           <td>${val.plazo}</td>
           <td>${val.tasa_normal}</td>
           <td>${val.tasa_puntual}</td>
           <td><a href="#" onclick="modificar_plazo(${val.id_plazo})">Modificar</a></td>
           <td><a href="#" onclick="eliminar_plazo(${val.id_plazo})">Eliminar</a></td>
         </tr>`; 

        })
    })
    .catch(error=>{
        console.error('Error:', error)
    })
});




function modificar(id){
    console.log('modificar',id)
}

function eliminar(id){
    console.log('eliminar',id)
}

function modificar_plazo(id_p){
    console.log('modificar_plazo', id_p)
}

function eliminar_plazo(id_p){
    console.log('eliminar_plazo', id_p)
}