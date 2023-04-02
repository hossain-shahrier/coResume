import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Layout from "./pages/layout"
import Home from "./pages/Main/sections/home"
import Guide from "./pages/Main/sections/guide"
import About from "./pages/Main/sections/about"
import Contact from "./pages/Main/sections/contact"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
