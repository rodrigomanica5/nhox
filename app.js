const products = [
  {
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
      <div class="card align-items-center">
        <img src="${p.img}" class="card-img-top" alt="img">
        <div class="card-body pb-0">
          <h5 class="card-title">${p.name}</h5>
          <a href="#"><div class="btnVerMas mx-auto">
            <p>ver más</p>
          </div></a>
        </div>
      </div>
      `;
    main.append(cardCreate);
  });
};

setCards();
