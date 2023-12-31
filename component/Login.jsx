// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import * as Sentry from "@sentry/nextjs";

function Login({ setUser }) {
	// const navigate = useNavigate();

	const router = useRouter()

	const handleLogin = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		const userInfo = window.sessionStorage.getItem(data.get("email"));
		if (userInfo !== null) {
			
			Sentry.setUser(JSON.parse(userInfo));
			router.push("/homebanking");
		} else {
			alert("User not found");
		}
	};

	return (
		<div className="loginPage">
			<h1>Iniciar Sesion</h1>
			<form onSubmit={(e) => handleLogin(e)} className="loginForm">
				<input type="email" placeholder="Email" name="email" />
				<input type="password" placeholder="Password" name="password" />
				<button>Ingresar</button>
			</form>
		</div>
	);
}

export default Login;
