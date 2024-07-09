import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"
import Banner from "../components/Banner/Banner"
import Footer from "./Footer/Footer"

import Home from "../pages/Home/Home"
import Error from "../pages/Error/Error"

import "./app.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Banner />
      <div className="container">
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
