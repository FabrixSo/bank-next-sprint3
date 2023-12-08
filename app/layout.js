import Header from "../component/Header";
import Footer from "../component/Footer";
import InicioPage from "./page";
import "./global.css"
import Link from "next/link";
import Inicio from "@/component/Inicio";


export const metadata = {
  title: 'Bank-next',
  description: 'Sprint-3',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <Header></Header>
          {children}
        <Footer></Footer>
      </body>
    </html>
  )
}

