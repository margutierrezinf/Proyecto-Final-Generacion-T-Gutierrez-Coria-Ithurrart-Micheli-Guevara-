import React from "react";
import TypewriterTitle from '../scripts/main.js';

const Home = (props) => {
  return (
    <>
      <section id="seccion1">
          <form class="search-form">
              <input type="text" placeholder="Buscar..." />
              <button type="submit">Buscar</button>
          </form>

          <TypewriterTitle />

          <video autoplay muted loop id="background-video">
              <source src="./images/video inicio.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
          </video>
      </section>


      <section id="seccion2">
        <h1 id="titulo_kk">Te facilitamos el viajar</h1>
        <p id="texto_kk">
          DestinosExpress es una agencia de viajes que ofrece
          <br />
          paquetes personalizados al mejor precio, con
          <br />
          opciones de vuelos, alojamientos y excursiones. Se
          <br />
          enfoca en brindar experiencias completas y ajustadas
          <br />
          a las necesidades de cada cliente.
        </p>
        <button id="btn_kk1" className="botones">
          PROMOCIONES
        </button>
        <button id="btn_kk2" className="botones">
          SERVICIOS
        </button>
        <img src="./images/img segunda pagina.png" id="auto" alt="imagen de un auto" />
      </section>

      <section id="seccion3">
        <div id="divp">
          <h1 id="titulo">Paquetes armados</h1>
          <div id="divs">
            <div id="div1">
              <img className="img1" src="./images/img1.jpg" alt="Imagen paquete 1" />

              <h1 className="tituloi">Salida a la naturaleza</h1>
              <p className="precioi">Desde $20,000</p>
              <ul className="ul">
                <li>Vuelo redondo</li>
                <li>4D/3N, habitación doble</li>
                <li>Dos comidas al día</li>
                <li>Excursión guiada</li>
                <li>Bebida de bienvenida</li>
              </ul>
              <button className="BTND">DESTACAR</button>
            </div>
            <div id="div2">
              <img className="img1" src="./images/img2.jpg" alt="Imagen paquete 2" />
              <h1 className="tituloi">Escapada romántica</h1>
              <p className="precioi">Desde $30,000</p>
              <ul className="ul">
                <li>Vuelo redondo</li>
                <li>4D/3N, habitación doble</li>
                <li>Tres comidas al día</li>
                <li>Día de spa y un masaje</li>
                <li>Meditación en pareja</li>
              </ul>
              <button className="BTND">DESTACAR</button>
            </div>
            <div id="div3">
              <img className="img1" src="./images/img3.jpg" alt="Imagen paquete 3" />
              <h1 className="tituloi">Vacaciones familiares</h1>
              <p className="precioi">Desde $60,000</p>
              <ul className="ul">
                <li>Vuelo redondo</li>
                <li>4D/3N, suite familiar</li>
                <li>Tres comidas al día</li>
                <li>Excursión guiada</li>
                <li>Actividad grupal a elegir</li>
              </ul>
              <button className="BTND">DESTACAR</button>
            </div>
          </div>
        </div>
      </section>

      <section id="seccion4">
        <h1 id="titulo4">Nos encargamos del viaje por vos</h1>

        <div id="contenedor-imagen-texto">
          <div>
            <img class="Imagen" id="avion" src="./images/vuelos.png" alt="Vuelos" />
          </div>
          <div>
            <p class="Texto" id="texto1">
              <b class="titulos">Vuelos</b><br />
              DestinosExpress ofrece informacion <br />
              sobre vuelos y rutas, pero no gestiona <br />
              reservas. Los clientes pueden usar <br />
              nuestra informacion para gestionar <br />
              sus reservas de manera independiente.
            </p>
          </div>

          <div>
            <img class="Imagen" src="./images/tours.png" alt="Tours" />
          </div>
          <div>
            <p class="Texto" id="texto2">
              <b class="titulos">Tours y actividades</b><br />
              DestinosExpress ofrece una variedad<br />
              de excursiones guiadas o actividades<br />
              locales. Todas adaptadas a diferentes<br />
              intereses y presupuestos.<br />
            </p>
          </div>

          <div>
            <img class="Imagen" id="imagen3" src="./images/translados.png" alt="Traslados y Transporte" />
          </div>
          <div>
            <p class="Texto" id="texto3">
              <b class="titulos">Traslados y Transporte</b><br />
              En DestinosExpress, ofrecemos<br />
              traslados y transportes rápidos,<br />
              seguros y confiables para que llegues<br />
              a tu destino sin preocupaciones. Nos<br />
              encargamos de cada detalle.<br />
            </p>
          </div>

          <div>
            <img class="Imagen" id="imagen4" src="./images/alojamintis.png" alt="Alojamientos" />
          </div>
          <div>
            <p class="Texto" id="texto4">
              <b class="titulos">Alojamientos</b><br />
              DestinosExpress te conecta con los<br />
              mejores alojamientos, ofreciéndote<br />
              comodidad, calidad y precios<br />
              accesibles.<br />
            </p>
          </div>
        </div>
      </section>


      <section id="seccion5">
        <img id="imagen5" src="./images/fondo.png" alt="Fondo" />
        <div className="comentarios-section">
          <h1 id="titulo5">
            <b>Nuestros viajeros favoritos</b>
          </h1>
          <div className="tarjetas-container">
            <div className="tarjeta">
              <p id="text1">
                "Trabajar con DestinosExpress para mi viaje fue genial. Supo lo que quería y fue muy
                flexible con los detalles. Su actitud y predisposición hizo todo más fácil y accesible. La
                recomiendo sin duda."
              </p>
              <p id="text2">
                <img id="nombreusu" src="./images/usuario3.png" alt="Usuario 1" /> - Juan Pérez
              </p>
            </div>

            <div className="tarjeta">
              <p id="text1">
                "DestinosExpress supo exactamente lo que buscaba y fue muy flexible durante el
                proceso. Hizo que todo fluyera sin problemas. ¡Lo recomendaría sin dudarlo!"
              </p>
              <p id="text2">
                <img id="nombreusu" src="./images/usuario3.png" alt="Usuario 2" /> - María Gómez
              </p>
            </div>

            <div className="tarjeta">
              <p id="text1">
                "Organizar con DestinosExpress fue muy fácil y agradable. Supo exactamente lo que
                buscaba y fue muy flexible durante todo el proceso. Los recomiendo mucho."
              </p>
              <p id="text2">
                <img id="nombreusu" src="./images/usuario3.png" alt="Usuario 3" /> - Laura López
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="section6">
          <div class="container">
              <div class="image-container ">
                  <img src="./images/pantalla.png" alt="Imagen de un hombre en una hamaca tocando una guitarra" id="img"></img>
                  <div class="logo">
                      <i class="fas fa-map-marker-alt"></i>
                  </div>
              </div>
              <div class="info-container ">
                  <div id="contacto">
                      <h2>Dirección</h2>
                      <ul>
                      <li>Calle 123, Colonia, Ciudad, Estado, País. C.P. 12345</li>
                      <li>Calle 123, Colonia,</li>
                      <li> Ciudad, Estado,</li>
                      <li> País.</li>
                      <li>C.P. 12345</li> 
                  </ul>
                  </div>
                  <div class="info-section">  
                      <h2>Contacto</h2>
                      <ul>
                        <li>Teléfono:(55) 1234 5678</li>
                        <li>Celular:(55) 1234 5678</li>
                        <li>hola@sitioincreible.com</li>
                      </ul>
                    </div>
                  <div class="info-section">
                      <h2>Horarios de oficina</h2>
                      <ul class="horarios_de_off">
                        <li>Lunes: 8:00 a. m. - 7:00 p. m.</li>
                        <li>Martes: 8:00 a. m. - 5:00 p. m.</li>
                        <li>Miércoles: 8:00 a. m. - 5:00 p. m.</li>
                        <li>Jueves: 8:00 a. m. - 7:00 p. m.</li>
                        <li>Viernes: 8:00 a. m. - 5:00 p. m.</li>
                      </ul>
                    </div>

              </div>
          </div>
      </section>
      <footer className="footer">
        <p className="text-footer">© 2024 DestinosExpress. Todos los derechos reservados.</p>
        <div className="links">
          <a href="#seccion4">Nuestros Servicios</a>
          <a href="#seccion3">Paquetes Armados</a>
          <a href="#seccion2">Promociones</a>
        </div>
      </footer>
    </>
  );
};

export default Home;
