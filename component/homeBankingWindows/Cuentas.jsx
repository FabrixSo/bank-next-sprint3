import Image from "next/image";

function Cuentas({ user }) {
	return (
		<div className="cuentaPage">
			<h1>Tu Cuenta</h1>
			{user ? (
				<div className="cuentaImgDiv">
					<Image
					className="cuentaImg"
					src="/assets/logo.png"
					alt="Logo banco"
					width={100}
					height={100}
					/>
				</div>
			) : (
				""
			)}
			{user ? (
				<h3>
					Bienvenido/a {user.name} {user.lastName}
				</h3>
			) : (
				""
			)}
			{user ? <h4>{user.email}</h4> : ""}
			{user ? <h4>Balance de la cuenta: ${user.balance}</h4> : ""}
		</div>
	);
}

export default Cuentas;
