import { useState } from 'react'
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Card/> */}
      {/* <Navbar/> */}
      <Footer/>
    </div>
  )
}

export default App
