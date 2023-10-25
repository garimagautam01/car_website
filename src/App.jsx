import './App.css'
import Nav from './Components/Nav'
import Pagination from './Components/Pagination'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Pagination/>
    </>
  )
}

export default App
