import Header from "../component/Header";
import Footer from "../component/Footer";
import "./global.css"


export const metadata = {
  title: 'Bank-next',
  description: 'Sprint-3',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}