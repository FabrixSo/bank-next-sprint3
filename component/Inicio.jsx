"use client"
// import { Link, BrowserRouter } from "react-router-dom";
import { useRouter } from "next/navigation";
import Image from 'next/image'





function Inicio() {
	const router = useRouter()

	return (
		<div className="inicioPage">
			<h1>Inicio</h1>
			<div style={{ margin: '10px'}}>
			<Image
				src="/assets/1.png"
				alt="Imagen de bienvenida"
				width={400}
				height={300}
				style={{ border: '10px solid black' }}
			/>
			</div>
			<div className="buttonDiv">
				<button id="button1" onClick={() => router.push('/login')}>
					Log In
				</button>
				<button id="button2" onClick={() => router.push('/signup')}>
					Sign up
				</button>
			</div>
		</div>
	);
}

export default Inicio;
