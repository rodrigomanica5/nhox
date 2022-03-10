const products = [
  {
    name: "mochila negra charol",
    img: "https://dummyimage.com/200.jpg?text=mochila",
  },
  {
    name: "mochila negra charol",
    img: "https://dummyimage.com/200.jpg?text=mochila",
  },
  {
    name: "mochila negra charol",
    img: "https://dummyimage.com/200.jpg?text=mochila",
  },
  {
    name: "mochila negra charol",
    img: "https://dummyimage.com/200.jpg?text=mochila",
  },
  {
    name: "mochila negra charol",
    img: "https://dummyimage.com/200.jpg?text=mochila",
  },
  {
    name: "mochila negra charol",
    img: "https://dummyimage.com/200.jpg?text=mochila",
  }
];

const main = document.querySelector('#products')

const setCards= () =>{
    main.innerHTML=""
    products.forEach((p) => {
      const cardCreate = document.createElement("div")
      cardCreate.classList.add("col", "mb-5");
      cardCreate.innerHTML=`
      <div class="card">
        <img src="${p.img}" class="card-img-top" alt="img">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Ver detalles</a>
        </div>
      </div>
      `
      main.append(cardCreate)
    }
    )
}

setCards();