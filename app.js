const products = [{
    id:"1",
    name: "bolso cool lady",
    img: "./assets/img/home_cool_lady.jpg",
    carrImg:"assets/img/Carr_cool_lady",
    color: "rosa",
    description:"Acceso cierre metálico. Contiene un bolsillo externo y un bolsillo interno.",
    size: "Altura 36cm, Ancho 32cm, Profunidad 12,5cm",
    materials: "Cuero sintético Charol"
  },
  {
    id:"2",
    name: "mochila babe rose",
    img: "./assets/img/home_rose_babe.jpg",
    carrImg:"assets/img/Carr_babe_rose",
    color: "rosa",
    description:"Acceso cierre metálico. Contiene un bolsillo externo y un bolsillo interno.",
    size: "Altura 36cm, Ancho 32cm, Profunidad 12,5cm",
    materials: "Cuero sintético Charol"
  },
  {
    id:"3",
    name: "mochila cleo",
    img: "./assets/img/home_cleo.jpg",
    carrImg:"assets/img/Carr_cleo",
    color: "celeste y rosa",
    description:"Acceso cierre metálico. Contiene un bolsillo externo y un bolsillo interno.",
    size: "Altura 36cm, Ancho 32cm, Profunidad 12,5cm",
    materials: "Cuero sintético Charol"
  },
  {
    id:"4",
    name: "mochila tender black",
    img: "./assets/img/home_tender_black.jpg",
    carrImg:"assets/img/Carr_tender_black",
    color: "negro",
    description:"Acceso cierre metálico. Contiene un bolsillo externo y un bolsillo interno.",
    size: "Altura 36cm, Ancho 32cm, Profunidad 12,5cm",
    materials: "Cuero sintético Charol"
  },
  {
    id:"5",
    name: "mochila cobra red",
    img: "./assets/img/home_cobra_red.jpg",
    carrImg:"assets/img/Carr_cobra_red",
    color: "rojo",
    description:"Acceso cierre metálico. Contiene un bolsillo externo y un bolsillo interno.",
    size: "Altura 36cm, Ancho 32cm, Profunidad 12,5cm",
    materials: "Cuero sintético Charol"
  },
  {
    id:"6",
    name: "mochila cobra green",
    img: "./assets/img/home_cobra_green.jpg",
    carrImg:"assets/img/Carr_cobra_green",
    color: "verde",
    description:"Acceso cierre metálico. Contiene un bolsillo externo y un bolsillo interno.",
    size: "Altura 36cm, Ancho 32cm, Profunidad 12,5cm",
    materials: "Cuero sintético Charol"
  },
  {
    id:"7",
    name: "mochila wheel black",
    img: "./assets/img/home_wheel_black.jpg",
    carrImg:"assets/img/Carr_wheel_black",
    color: "negro",
    description:"Acceso cierre metálico. Contiene un bolsillo externo y un bolsillo interno.",
    size: "Altura 36cm, Ancho 32cm, Profunidad 12,5cm",
    materials: "Cuero sintético Charol"
  },
  {
    id:"8",
    name: "mochila use me",
    img: "./assets/img/home_use_her.jpg",
    carrImg:"assets/img/Carr_use_me",
    color: "negro",
    description:"Acceso cierre metálico. Contiene un bolsillo externo y un bolsillo interno.",
    size: "Altura 36cm, Ancho 32cm, Profunidad 12,5cm",
    materials: "Cuero sintético Charol"
  },
];

const main = document.querySelector("#list");

const setCards = () => {
  main.innerHTML = "";
  products.forEach((p) => {
    const cardCreate = document.createElement("div");
    cardCreate.classList.add("col");
    cardCreate.innerHTML = `
      <div class="card align-items-center">
        <img src="${p.img}" class="card-img-top" alt="img">
        <div class="card-body pb-0">
          <h5 class="card-title">${p.name}</h5>
          <button class="btnVerMas mx-auto" data-bs-toggle="modal" data-bs-target="#Modal${p.id}">ver más</button>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="Modal${p.id}" tabindex="-1" aria-labelledby="ModalLabel${p.id}" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button" class="btn-close fs-5" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body p-0">
                  <div class="container-fluid">
                      <div class="row">
                          <div id="carouselIndicators${p.id}" class="carousel slide px-0" data-bs-ride="carousel">
                              <div class="carousel-indicators">
                                  <button type="button" data-bs-target="#carouselIndicators${p.id}" data-bs-slide-to="0"
                                      class="active" aria-current="true" aria-label="Slide 1"></button>
                                  <button type="button" data-bs-target="#carouselIndicators${p.id}" data-bs-slide-to="1"
                                      aria-label="Slide 2"></button>
                              </div>
                              <div class="carousel-inner">
                                  <div class="carousel-item active">
                                      <img src="${p.carrImg}1.jpg" class="d-block w-100" alt="imagen ${p.name}">
                                  </div>
                                  <div class="carousel-item">
                                      <img src="${p.carrImg}2.jpg" class="d-block w-100" alt="imagen ${p.name}">
                                  </div>
                              </div>
                              <button class="carousel-control-prev" type="button"
                                  data-bs-target="#carouselIndicators${p.id}" data-bs-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button"
                                  data-bs-target="#carouselIndicators${p.id}" data-bs-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Next</span>
                              </button>
                          </div>
                      </div>
                      <div class="modal-detalles">
                        <h2>${p.name}</h2>
                        <p>Color: ${p.color}</p>
                        <button>Consultar por este producto</button>
                        <p>DESCRIPCIÓN:<br>${p.description}</p>
                        <p>MEDIDAS:<br>${p.size}</p>
                        <p>MATERIAL:<br>${p.materials}</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
   `;
    main.append(cardCreate);
  });
};

setCards();