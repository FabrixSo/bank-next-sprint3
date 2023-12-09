
function Prestamos() {
		const user = {
			nombre: "Ejemplo",
		};
		// Verificar si el objeto es extensible
	if (!Object.isExtensible(user)) {
		// Hacer el objeto extensible si no lo es
		Object.preventExtensions(user);
	}
	
	// Ahora puedes agregar la propiedad balance sin generar el error
	user.balance = 1000;
	function handleSubmit(e) {
		e.preventDefault();
		
		const { monto, plazo } = e.target;
		if (
			confirm(
				`Solicitar un prestamo de $${monto.value} a ${plazo.value} meses?`
			)
		) {
			user.balance += Number(monto.value);
			window.localStorage.removeItem(user.email);
			window.localStorage.setItem(user.email, JSON.stringify(user));
			monto.value = "";
			plazo.value = "";
			alert("Prestamo concedido");
		}
	}
	return (
		<>
			<h1 id="prestamoH1">Solicitar prestamo</h1>
			<form onSubmit={(e) => handleSubmit(e)} className="prestamoForm">
				<input type="number" placeholder="Monto (AR$)" name="monto" />
				<input type="number" placeholder="Plazo (meses)" name="plazo" />
				<button>Solicitar</button>
			</form>
		</>
	);
}

export default Prestamos;
