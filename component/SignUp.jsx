// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
// import * as Sentry from "@sentry/nextjs";
import * as user from "./User"

function SignUp() {
	const router = useRouter()
	const handleSignUp = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		const name = data.get("name");
		const lastName = data.get("lastName");
		const email = data.get("email");
		const password = data.get("password");
		const confirmPassword = data.get("confirmPassword");
		if (password === confirmPassword) {
			const userData = {
				name: name,
				lastName: lastName,
				email: email,
				password: password,
				balance: 10000,
			};
			if (window.sessionStorage.getItem(userData.email) !== null) {
				alert("El mail ya pertenece a una cuenta");
			} else {
				window.sessionStorage.setItem(
					userData.email,
					JSON.stringify(userData)
				);
				user.setUser(userData);
				alert(`Cuenta creada, Bienvenido ${user.getUser().name}`);
				router.push("/homebanking");
			}
		} else {
			alert("Las contraseñas deben ser iguales");
		}
	};
	return (
		<div className="signUpPage">
			<h1>Sign up</h1>
			<form onSubmit={(e) => handleSignUp(e)} className="signUpForm">
				<input type="text" name="name" placeholder="Nombre" />
				<input type="text" name="lastName" placeholder="Apellido" />
				<input type="email" name="email" placeholder="Email" />
				<input
					type="password"
					name="password"
					placeholder="Contraseña"
				/>
				<input
					type="password"
					name="confirmPassword"
					placeholder="Confirmar contraseña"
				/>
				<button>Crear</button>
			</form>
		</div>
	);
}

export default SignUp;
