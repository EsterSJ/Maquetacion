let actors_antMan = [actor1_antMan.name,actor2_antMan.name];
let actors_infiesto = [actor1_Infiesto.name,actor2_Infiesto.name];
let actors_criminalesVista = [actor1_criminalesVista.name,actor2_criminalesVista.name];
let actors_theLake = [actor1_theLake.name];
let actors_eresTu = [actor1_eresTu.name,actor2_eresTu.name]
// Clase movie

class Movie{

    constructor (tittle, releaseYear, actors, nationality, director, writer, language, plataforma, isMCU, mainCharacterName, producer, distributor, genre, url_photo){
        this.title = tittle;
        this.releaseYear = releaseYear;
        this.actors = actors;
        this.nacionality = nationality;
        this.director = director;
        this.writer = writer;
        this.language = language;
        this.plataforma = plataforma;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.genre = genre;
        this.photo = url_photo;
    }

    printAll(){
        console.log(this.title);
        console.log(this.releaseYear);
        console.log(this.actors);
        console.log(this.nacionality);
        console.log(this.director);
        console.log(this.writer);
        console.log(this.language);
        console.log(this.plataforma);
        console.log(this.isMCU);
        console.log(this.mainCharacterName);
        console.log(this.producer);
        console.log(this.distributor);
        console.log(this.genre);
        console.log(this.photo);
    }
}

//Inicializacion del array peliculas
let pelicula1 = new Movie("Ant Man y la avispa Quantumanía", 2023,actors_antMan,"estadounidense",director_antMan.name,"Jeff Loveness","inglés", "FilmAffinity",true,"Ant-Man and the Wasp","Kevin Feige","Walt Disney Studios Motion Pictures", "Acción, fantasía, ciencia ficción, aventuras, comedia y suspense","img/Ant_Man_y_la_Avispa_Quantuman_a-656446715-large.jpg");
let pelicula2 = new Movie("Infiesto",2023,actors_infiesto,"española","Patxi Amezcua","Patxi Amezcua","español","Netflix",false,"Infiesto","Vaca films","Netflix","suspense","img/infiesto.jpg");
let pelicula3 = new Movie("Criminales a la vista 2",2023,actors_criminalesVista,"estadounidense",director_criminalesVista.name,"James Vanderbilt","imglés","Netflix",false,"Murder Mystery 2","Endgame Entertainment","Netflix","comedia","img/criminles_a_la_vista.jpg");
let pelicula4 = new Movie("Amenaza en las profundidades",2022,actors_theLake,"tailandesa",director_theLake.name,"Lee Thongkham","tailandés","Amazon Prime",false,"Beung Kan","Epic Pictures","Amazon Prime","terror","img/beung_kan-967888999-large.jpg");
let pelicula5 = new Movie("Eres tú",2023,actors_eresTu,"española","Alauda Ruiz de Azúa","Cristóbal Garrido","español","Netflix",false,"Eres tú","Zeta Studios","Netflix","comedia romántica","img/eres-tu-netflix-serie-64024e79ec3d0.jpg");

let array_peliculas = [pelicula1,pelicula2,pelicula3,pelicula4,pelicula5];

function mostrarPeliculas(){
    let peliculas = document.querySelector(".peliculas");

    if (peliculas.classList.contains("ocultar_peliculas")){
        peliculas.classList.remove("ocultar_peliculas");
    }

    let titulo = document.getElementById("peliculas");
    titulo.innerHTML = `<div class="row row_titulo" style="margin-top: 30px;">
                            <div class="col-12" style="color: black;">Las PELÍCULAS más populares</div>
                        </div>`;
    
    document.getElementById("carouselExampleCaptions").style.padding = "28px";
    let carrusel_peliculas = document.getElementById("carouselExampleCaptions");
    let i=0;
    carrusel_peliculas.innerHTML += `<div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src=${array_peliculas[i].photo} class="d-block w-100 img_carousel" alt="...">
                                            <div class="carousel-caption d-none d-md-block">
                                                <h1 class="h1_carousel">${array_peliculas[i].title}</h1>
                                                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">
                                                    SABER MÁS
                                                </button>
                                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h4 class="modal-title text-dark" id="exampleModalLabel">${array_peliculas[i].title}</h4>
                                                        </div>
                                                        <div class="modal-body" style="text-align: left">
                                                            <p class="text-dark">Año: ${array_peliculas[i].releaseYear}</p>
                                                            <p class="text-dark">Actores: ${array_peliculas[i].actors}</p>
                                                            <p class="text-dark">Director: ${array_peliculas[i].director}</p>
                                                            <p class="text-dark">Escritor: ${array_peliculas[i].writer}</p>
                                                            <p class="text-dark">Distribuidor: ${array_peliculas[i].distributor}</p>
                                                            <p class="text-dark">Productora: ${array_peliculas[i].producer}</p>
                                                            <p class="text-dark">Genero: ${array_peliculas[i].genre}</p>
                                                            <p class="text-dark">isMCU: ${array_peliculas[i].isMCU}</p>
                                                            <p class="text-dark">Idioma: ${array_peliculas[i].language}</p>
                                                            <p class="text-dark">Titulo original: ${array_peliculas[i].mainCharacterName}</p>
                                                            <p class="text-dark">Nacionalidad: ${array_peliculas[i].nacionality}</p>
                                                            <p class="text-dark">Plataforma: ${array_peliculas[i].plataforma}</p>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`

    for (i=1; i<array_peliculas.length; i++){
        carrusel_peliculas.innerHTML+=`<div class="carousel-inner">
        <div class="carousel-item">
            <img src=${array_peliculas[i].photo} class="d-block w-100 img_carousel" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1 class="h1_carousel">${array_peliculas[i].title}</h1>
                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal${i}">
                    SABER MÁS
                </button>
                <div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title text-dark" id="exampleModalLabel">${array_peliculas[i].title}</h4>
                            </div>
                            <div class="modal-body" style="text-align: left">
                                <p class="text-dark">Año: ${array_peliculas[i].releaseYear}</p>
                                <p class="text-dark">Actores: ${array_peliculas[i].actors}</p>
                                <p class="text-dark">Director: ${array_peliculas[i].director}</p>
                                <p class="text-dark">Escritor: ${array_peliculas[i].writer}</p>
                                <p class="text-dark">Distribuidor: ${array_peliculas[i].distributor}</p>
                                <p class="text-dark">Productora: ${array_peliculas[i].producer}</p>
                                <p class="text-dark">Genero: ${array_peliculas[i].genre}</p>
                                <p class="text-dark">isMCU: ${array_peliculas[i].isMCU}</p>
                                <p class="text-dark">Idioma: ${array_peliculas[i].language}</p>
                                <p class="text-dark">Titulo original: ${array_peliculas[i].mainCharacterName}</p>
                                <p class="text-dark">Nacionalidad: ${array_peliculas[i].nacionality}</p>
                                <p class="text-dark">Plataforma: ${array_peliculas[i].plataforma}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>`
    }
    carrusel_peliculas.innerHTML += `<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                    `
}

function mostrarFormulario(){
    let formulario = document.getElementById("formulario");
    formulario.innerHTML = `<div class="row row_titulo" style="padding: 30px;">
                            <div class="col-12 row_titulo">>>>>>> Añade tus peliculas favoritas <<<<<<</div>
                        </div>`;
    
    formulario.innerHTML += `<form class="formulario" style="padding-bottom: 30px;">
                                <input type="text" class="ancho_inputs" id="title" placeholder="Título">
                                <input type="text" class="ancho_inputs" id="releaseYear" placeholder="Año de lanzamiento">
                                <input type="text" class="ancho_inputs" id="actors" placeholder="Reparto">
                                <input type="text" class="ancho_inputs" id="nationality" placeholder="Nacionalidad">
                                <input type="text" class="ancho_inputs" id="director" placeholder="Director">
                                <input type="text" class="ancho_inputs" id="writer" placeholder="Escritor">
                                <input type="text" class="ancho_inputs" id="language" placeholder="Idioma">
                                <input type="text" class="ancho_inputs" id="plataforma" placeholder="Plataforma">
                                <input type="text" class="ancho_inputs" id="isMCU" placeholder="isMCU?">
                                <input type="text" class="ancho_inputs" id="mainCharacterName" placeholder="Titulo original">
                                <input type="text" class="ancho_inputs" id="producer" placeholder="Productora">
                                <input type="text" class="ancho_inputs" id="distributor" placeholder="Distribuidor">
                                <input type="text" class="ancho_inputs" id="genre" placeholder="Género">
                                <input type="text" class="ancho_inputs" id="url_photo" placeholder="URL Portada">                               
                                <button type="reset" class="boton_form" onclick="saveInfo()">Añadir película</button>
                                <button type="reset" class="boton_form" onclick="motrarPeliculasFavoritas()">Mostrar películas</button>
                            </form>`
}

let array_peliculas_favoritas = [];

function saveInfo(){

    let new_movie ={
        title: document.getElementById("title").value,
        releaseYear: document.getElementById("releaseYear").value,
        actors: document.getElementById("actors").value,
        nacionality: document.getElementById("nationality").value,
        director: document.getElementById("director").value,
        writer: document.getElementById("writer").value,
        language: document.getElementById("language").value,
        plataforma: document.getElementById("plataforma").value,
        isMCU: document.getElementById("isMCU").value,
        mainCharacterName: document.getElementById("mainCharacterName").value,
        producer: document.getElementById("producer").value,
        distributor: document.getElementById("distributor").value,
        genre: document.getElementById("genre").value,
        photo: document.getElementById("url_photo").value,
    }
    array_peliculas_favoritas.push(new_movie);
}

function motrarPeliculasFavoritas(){
    let peliculas_favoritas = document.getElementById("peliculas_favoritas");

    for (let j=0; j<array_peliculas_favoritas.length; j++){
        peliculas_favoritas.innerHTML += `
                                        <div style="padding-bottom:30px;">
                                            <div class="card" style="width: 18rem;">
                                                <img class="card-img-top foto_profesionales" src="${array_peliculas_favoritas[j].photo}" alt="Card image cap">
                                                <div class="card-body">
                                                    <h5 class="card-title">${array_peliculas_favoritas[j].title}</h5>
                                                    <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal${j}">
                                                    SABER MÁS
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="modal fade" id="exampleModal${j}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">${array_peliculas_favoritas[j].title}</h5>
                                                </button>
                                            </div>
                                            
                                            <div class="modal-body" style="text-align: left">
                                                <p class="text-dark">Año: ${array_peliculas_favoritas[j].releaseYear}</p>
                                                <p class="text-dark">Actores: ${array_peliculas_favoritas[j].actors}</p>
                                                <p class="text-dark">Director: ${array_peliculas_favoritas[j].director}</p>
                                                <p class="text-dark">Escritor: ${array_peliculas_favoritas[j].writer}</p>
                                                <p class="text-dark">Distribuidor: ${array_peliculas_favoritas[j].distributor}</p>
                                                <p class="text-dark">Productora: ${array_peliculas_favoritas[j].producer}</p>
                                                <p class="text-dark">Genero: ${array_peliculas_favoritas[j].genre}</p>
                                                <p class="text-dark">isMCU: ${array_peliculas_favoritas[j].isMCU}</p>
                                                <p class="text-dark">Idioma: ${array_peliculas_favoritas[j].language}</p>
                                                <p class="text-dark">Titulo original: ${array_peliculas_favoritas[j].mainCharacterName}</p>
                                                <p class="text-dark">Nacionalidad: ${array_peliculas_favoritas[j].nacionality}</p>
                                                <p class="text-dark">Plataforma: ${array_peliculas_favoritas[j].plataforma}</p>
                                            
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>`;
    }
}