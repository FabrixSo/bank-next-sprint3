import "../app/global.css";
import Image from 'next/image'

function Header() {
	return (
		<header>
			<h1 className="titulo">Stratton Oakmont</h1>
			<Image
				src="/assets/logoBanco.png"
				alt="Logo banco"
				width={75}
				height={75}
			/>
		</header>
	);
}

export default Header;
