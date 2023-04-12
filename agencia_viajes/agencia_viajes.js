let registroSolicitudes = [];

function saveInfo(){

    let solicitud ={
        name: document.getElementById("name").value,
        origin: document.getElementById("origin").value,
        destiny: document.getElementById("destiny").value,
        n_people: document.getElementById("n_people").value,
        chekcin: document.getElementById("checkin").value,

    }

    registroSolicitudes.push(solicitud);
    console.log(solicitud);
}

function filtrarDestino(){
    let tabla = document.getElementById("solicitud_destino");
    let aside = document.querySelector(".aside");

    if(aside.classList.contains("aside2"))
    {
        aside.classList.remove("aside2")
    }

    tabla.innerHTML = `
                    <tr class="encabezado_tabla">
                        <th>Nombre</th>
                        <th>Origen</th>
                        <th>Destino</th>
                        <th>Nº Personas</th>
                        <th>Fecha</th>
                    </tr>`;
    
    for (let i=0; i<registroSolicitudes.length; i++){
        if (registroSolicitudes[i].destiny.toLowerCase()=="canarias" || registroSolicitudes[i].destiny.toLowerCase()=="mallorca" || registroSolicitudes[i].destiny.toLowerCase()=="galicia"){
            tabla.innerHTML +=
                                `<tr >
                                    <th>${registroSolicitudes[i].name}</th>
                                    <th>${registroSolicitudes[i].origin}</th>
                                    <th>${registroSolicitudes[i].destiny}</th>
                                    <th>${registroSolicitudes[i].n_people}</th>
                                    <th>${registroSolicitudes[i].chekcin}</th>
                                </tr>
                                `
        }
    }
}
