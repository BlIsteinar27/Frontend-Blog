import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Inicio from "./pages/Inicio"
import Noticias from "./pages/Noticias"


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/inicio" element={<Inicio/>} />
          <Route path="/noticias" element={<Noticias/>} />
          <Route path="*" element={<Inicio/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
