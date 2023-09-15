import { Outlet } from "react-router-dom";
import './App.css'

import Rodape from "./components/Rodape";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu />
      <Outlet />
      <Rodape />
    </>
  )
}

export default App

