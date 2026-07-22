
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/daisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'

const PricingOp = fetch('PricingData.json').then(res => res.json());


function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
        <DaisyNav></DaisyNav>
        <h1 className='text-4xl'> VITE and REACT</h1>
      </div>

      <main>
        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>} >
          <PricingOptions PricingOp={PricingOp} >

          </PricingOptions>
        </Suspense>
      </main>

      <ResultChart></ResultChart>
    </>
  )
}

export default App
