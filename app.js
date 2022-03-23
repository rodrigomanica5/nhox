const products = [{
    name: "bolso cool lady",
    img: "./assets/img/home_cool_lady.jpg",
  },
  {
    name: "mochila babe rose",
    img: "./assets/img/home_rose_babe.jpg",
  },
  {
    name: "mochila cleo",
    img: "./assets/img/home_cleo.jpg",
  },
  {
    name: "mochila tender black",
    img: "./assets/img/home_tender_black.jpg",
  },
  {
    name: "mochila cobra red",
    img: "./assets/img/home_cobra_red.jpg",
  },
  {
    name: "mochila cobra green",
    img: "./assets/img/home_cobra_green.jpg",
  },
  {
    name: "mochila wheel black",
    img: "./assets/img/home_wheel_black.jpg",
  },
  {
    name: "mochila use me",
    img: "./assets/img/home_use_her.jpg",
  },
];

const main = document.querySelector("#list");

const setCards = () => {
  main.innerHTML = "";
  products.forEach((p) => {
    const cardCreate = document.createElement("div");
    cardCreate.classList.add("col");
    cardCreate.innerHTML = `
    <a href="#">
      <div class="card w-100 align-items-center">
        <img src="${p.img}" class="card-img-top" alt="img">
        <div class="card-body align-items-center">
          <h5 class="card-title">${p.name}</h5>
        </div>
        <div class="btnVerMas mx-auto">
            <p class="px-2">ver más</p>
        </div>
      </div>
    </a>
    `;
    main.append(cardCreate);
  });
};

setCards();