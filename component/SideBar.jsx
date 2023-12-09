import React, { useEffect, useState } from "react";
import "../app/global.css";
// import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Sidebar = ({ user, page, setPage }) => {

	const logo = "/assets/logo.png";
	const punto = "/assets/punto.png";

	const [collapsed, setCollapsed] = useState(true);
	// const navigate = useNavigate();
    const router = useRouter()

	const switchView = (view) => {
		setPage(view);
		toggleMenu();
	};
	const toggleMenu = () => {
		setCollapsed(!collapsed);
	};

	function handleLogOut() {
		user.setUser;
		router.push('/')
	}
	useEffect(() => {
		if (user.getUser === null ) {
			router.push('/')
		}
	}, []);

	return (
		<div
			id="sidemenu"
			className={collapsed ? "menu-collapsed" : "menu-expanded"}
		>
			{/* Encabezado */}
			<div id="header">
				<div id="menu-btn" onClick={toggleMenu}>
					<div className="btn-hamburger"></div>
					<div className="btn-hamburger"></div>
					<div className="btn-hamburger"></div>
				</div>
			</div>

			{/* Perfil */}
			<div id="profile">
				<div id="photo">
					<Image 
					src={logo} 
					alt="Foto de perfil"
					width={100}
					height={100}
					/>
				</div>
				<div id="sideMenuName">
					{user
						? user.name + " " + user.lastName
						: "Iniciar sesión para navegar"}
				</div>
				<div id="saldoSideBar">${user ? user.balance : ""}</div>
			</div>

			{/* Elementos del menú */}
			<div id="menu-items">
				<MenuItem
					icon={punto}
					title="Cuentas"
					onClick={() => switchView("cuentas")}
					disabled={false}
				/>
				<MenuItem
					icon={punto}
					title="Transferencias"
					onClick={() => switchView("transferencias")}
					disabled={false}
				/>
				<MenuItem
					icon={punto}
					title="Pagos"
					onClick={() => switchView("pagos")}
					disabled={false}
				/>
				<MenuItem
					icon={punto}
					title="Cálculo de préstamos"
					onClick={() => switchView("prestamos")}
					disabled={false}
				/>
				<MenuItem
					icon={punto}
					title="Convertidor de moneda"
					onClick={() => switchView("convertidor")}
					disabled={false}
				/>
				<div className="item-separator"></div>
				<MenuItem
					icon={punto}
					title="Cerrar sesión"
					onClick={handleLogOut}
					disabled={false}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
