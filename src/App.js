import Form from "./Components/Form"
import Navbar from "./Components/Navbar"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Main from "./Components/Main"



function App() {
  return (
    <>
      <Navbar/>
      <div className="entity">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/1" element={<Form/>} />
        </Routes>
      </div>
    </>
  )
}

export default App