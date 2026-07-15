
import './App.css'
import DaisyNav from './components/daisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
        <DaisyNav></DaisyNav>
        <h1 className='text-4xl'> VITE and REACT</h1>
      </div>
    </>
  )
}

export default App
