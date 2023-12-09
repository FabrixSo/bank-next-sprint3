import Sidebar from "./SideBar";
// import * as Sentry from "@sentry/nextjs";
import { useEffect, useState } from "react";
import Cuentas from "./homeBankingWindows/Cuentas";
import Pagos from "./homeBankingWindows/Pagos";
import Transferencias from "./homeBankingWindows/Transferencias";
import Prestamos from "./homeBankingWindows/Prestamos";
import Convertidor from "./homeBankingWindows/Convertidor";
import { useRouter } from "next/navigation";
import * as user from "./User"

function HomeBanking() {
	const router = useRouter()
	const [page, setPage] = useState("cuentas");
	const [show, setShow] = useState();
	const getElement = () => {
		switch (page) {
			case "cuentas":
				return <Cuentas user={user.getUser()} />;
			case "pagos":
				return <Pagos user={user.getUser()} />;
			case "transferencias":
				return <Transferencias user={user.getUser()} />;
			case "prestamos":
				return <Prestamos user={user.getUser()} />;
			case "convertidor":
				return <Convertidor />;

			default:
				break;
		}
	};
	useEffect(() => {
		setShow(getElement());
	}, [page]);
	return (
		<>
			<div className="homeBankingDiv">{show ? show : ""}</div>

			<Sidebar
				user={user.getUser()}
				page={page}
				setPage={setPage}
			/>
		</>
	);
}

export default HomeBanking;
