import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import DefaultLayout from './layout/DefaultLayout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/products">
              <Route path="" element={<Products />} />
              <Route path=":id" element={<SingleProduct />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
