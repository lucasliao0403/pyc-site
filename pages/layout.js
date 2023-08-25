import Navbar from '/components/navbar.js'
import Footer from '/components/footer.js'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}