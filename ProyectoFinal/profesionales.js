// Clase Profesionales
class Professional{

    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, url_photo){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = url_photo;
    }

    printAll(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.weight);
        console.log(this.height);
        console.log(this.isRetired);
        console.log(this.nationality);
        console.log(this.oscarsNumber);
        console.log(this.profession);
        console.log(this.photo);
    }
}

//Inicializacion de profesionales
let actor1_antMan = new Professional("Paul Stephen Rudd",54,1.80,75,false,"estadounidense",2,"actor","img/paul_stephen.jpg");
let actor2_antMan = new Professional("Nicole Evangeline Lilly",43,1.71,59,false,"canadiense",1,"actriz","img/nicole_evangeline.jpg");
let director_antMan = new Professional("Peyton Reed",58,1.76,70,false,"estadounidense","director",0,"img/peyton_reed.jpg");

let actor1_Infiesto = new Professional("Iria del Rio",36,1.65,55,false,"española",1,"actor","img/iria_delrio.jpg");
let actor2_Infiesto = new Professional("José Luis de Castro Zahera",56,1.75,68,false,"española",0,"actor","img/luis_zahera.jpg");

let actor1_criminalesVista = new Professional("Jennifer Aniston",54,1.68,57,false,"estadounidense",3,"actriz","img/jennifer_aniston.jpg");
let actor2_criminalesVista = new Professional("Adam Sandler",56,1.80,78,false,"estadounidense",0,"actor","img/Adam_Sandler.jpg");
let director_criminalesVista = new Professional("Jeremy Garelick",47,1.79,70,false,"estadounidense",2,"director","img/Jeremy_Garelick.jpg");

let actor1_theLake = new Professional("Béatrice Dalle",58,1.70,68,false,"francesa",2,"actor","img/béatrice_dalle.jpg");
let director_theLake = new Professional("Vincent Bonet",45,1.76,70,false,"español","director",0,"img/vicent_bonet.jpg");

let actor1_eresTu = new Professional("Susana Gómez Abaitua",32,1.65,55,false,"española",0,"actriz","img/susana_abaitua.jpg");
let actor2_eresTu = new Professional("Álvaro Cervantes Sorribas",33,1.71,69,false,"española",0,"actor","img/alvaro_cervantes.jpg");

let array_profesionales = [actor1_antMan,actor2_antMan,director_antMan,actor1_Infiesto,actor2_Infiesto,actor1_criminalesVista,actor2_criminalesVista,director_criminalesVista,actor1_theLake,director_theLake, actor1_eresTu,actor2_eresTu];

//Mostrar profesionales almacenados
function mostrarProfesionales(){
    let profesionales = document.querySelector(".profesionales");

    if (profesionales.classList.contains("ocultar_profesionales")){
        profesionales.classList.remove("ocultar_profesionales")
    }

    let titulo = document.getElementById("profesionales");

    titulo.innerHTML = `<div class="escaparate_profesionales">
                                <div class="row_titulo">
                                <div class="col-12" style="margin-top: 30px; padding-bottom: 10px;">ACTORES Y DIRECTORES</div>
                                </div>
                            </div>`;

    let escaparate_profesionales = document.getElementById("escaparate_profesionales");

    for (let i = 0; i < array_profesionales.length; i++){
        escaparate_profesionales.innerHTML += `<div>
                                                    <div class="col" style="padding: 12px">
                                                        <div class="card" style="width: 18rem;">
                                                            <img class="card-img-top foto_profesionales" src=${array_profesionales[i].photo} alt="Card image cap">
                                                            <div class="card-body">
                                                                <h5 class="card-title">${array_profesionales[i].name}</h5>
                                                                <p class="card-text">-Edad: ${array_profesionales[i].age}
                                                                                    <br->Altura: ${array_profesionales[i].height}
                                                                                    <br>-Peso: ${array_profesionales[i].weight}
                                                                                    <br>-Nacionalidad: ${array_profesionales[i].nationality}
                                                                                    <br>-Profesión: ${array_profesionales[i].profession}
                                                                                    <br>-Nº Oscars: ${array_profesionales[i].oscarsNumber}
                                                                                    <br>-Retirado: ${array_profesionales[i].isRetired}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`
    }
}
