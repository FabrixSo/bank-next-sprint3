import "../app/global.css";
function Footer() {
	return <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h3>Acerca de</h3>
        <ul>
          <li><a href="#">Nuestra historia</a></li>
          <li><a href="#">Nuestro equipo</a></li>
          <li><a href="#">Nuestros clientes</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h3>Términos y condiciones</h3>
        <ul>
          <li><a href="#">Política de privacidad</a></li>
		  
          <li><a href="#">Términos de uso</a></li>
		  
          <li><a href="#">Política de cookies</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h3>Redes sociales</h3>
        <ul>
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com/home">Twitter</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
}

export default Footer;
