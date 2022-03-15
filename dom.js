let header = document.getElementById("header");
header.innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#"><h1>NHOX</h1></a>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h1 class="offcanvas-title" id="offcanvasNavbarLabel">NHOX</h1>
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

    <img id="hero" class="w-100" src="./assets/img/Portada.png" alt="portada">
`;

let bodyMain = document.getElementById("main");
bodyMain.innerHTML = `
    <div id="about" class="d-flex m-3">
        <div class="d-flex flex-column me-2">
            <h2>Sobre Nosotros</h2>
            <p>Hola soy <span>Celeste Larluz</span> fundadora de NHOX Bags.<br>
            Este proyecto nació gracias a mi amor por la moda, y cómo esta influye en mi humor y estados de ánimo.<br>
            Sentía que si llevaba puesto cosas que me gustaran incentivaba mi rutina. Me daban más ganas de salir a cumplir mis obligaciones, metas, sueños y lo hacía más cálido en momentos cuando la urbanidad puede resultar pesada y nos pone a prueba.<br>
            Fue por eso que me interesé en el diseño y decidí crear una línea de bolsos que las mujeres no se cansaran de usar en el día a día. 
            Mi objetivo es que amen y disfruten su Nhox, tanto como yo lo soy diseñando y creando cada una de ellas. 
            </p>
        </div>
        <img src="./assets/img/Celeste_Larluz.jpg" alt="Celeste Larluz" class="align-self-center"/>
    </div>

    <div id="products" class="row">
        <h2 class="col-xl-11 mx-auto px-0">Productos</h2>
        <div id="list" class="row g-4 g-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"></div>
    </div>

    <div id="contact">
        <div class="row">
            <form action="" class="px-0">
                <h2 class="tituloContacto col-7 mx-auto">Contacto</h2>

                <div class="col-11 col-xl-7 mx-auto">
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
