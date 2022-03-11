let header = document.getElementById("header");
header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">NHOX</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">NHOX</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#products">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <img id="hero" class="w-100" src="https://dummyimage.com/720.jpg?text=NHOX%20BAGS" alt="test">
`;

let bodyMain = document.getElementById("main");
bodyMain.innerHTML = `
    <div id="productos" class="container px-4 px-lg-5 mt-5">
        <div id="products" class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <!-- acá va la tarjeta de prod -->
        </div>
    </div>

    <div id="contact">
        <div class="row">
            <h2 class="tituloContacto col-11 mx-auto">Contacto</h2>
            <form action="" class="px-0">

                <div class="col-11 col-xl-5 mx-auto">
                    <div class="d-flex flex-column">
                        <label for="name" class="labelForm">Nombre y apellido:</label>
                        <input type="text" id="name" class="inputForm">
                    </div>

                    <div class="d-flex flex-column">
                        <label for="email" class="labelForm">Correo electrónico:</label>
                        <input type="email" id="email" class="inputForm">
                    </div>

                    <div class="d-flex flex-column">
                        <label for="tel" class="labelForm">Telefono:</label>
                        <input type="text" id="tel" class="inputForm">
                    </div>

                    <div class="d-flex flex-column">
                        <label for="textarea" class="labelForm">Mensaje:</label>
                        <textarea id="textarea" cols="30" rows="4" class="textForm"></textarea>
                    </div>

                    <input type="submit" value="Enviar" class="btn botonSubmit">
                </div>

            </form>
        </div>
    </div>
`;

let footer = document.getElementById("footer");
footer.innerHTML = `
    <div class="d-flex flex-column align-items-center justify-content-evenly">
        <img src="./assets/img/nhoxblanco.png" alt="Logo Nhox">
        <p><a href="#">INSTAGRAM</a> | NHOXBAGS@OUTLOOK.COM.AR</p>
    </div>
`;